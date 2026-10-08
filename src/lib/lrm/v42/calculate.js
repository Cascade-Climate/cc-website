/**
 * LRM Cost Model V4.3 (SEA) — 1:1 port of the V4.3 Model sheet formulas.
 * Source: V4.3 SEA LRM Cost Model V3.xlsx (V4.3 Model + V4.3 SEA Data).
 *
 * Recovery opex (C92) = recovery cost per day / kg per day, where
 *   labour per unit = (available kg ÷ recovery rate kg/h) × labour USD/h
 *   cost per day = (labour per unit × units/day) + (fuel USD/km × km/day)
 * TMS capex is the D31 manual input. Trucks / 50 km distance bands are not in V4.3.
 * Net opex = gross − sale credit − virgin savings.
 */
import data from './data.js';

const ROWS = data.rows;

export const MODEL_VERSION = '4.3';
export const GEOGRAPHY = 'Southeast Asia';
export const RESIDENTIAL_CHARGE_CAP_KG = 5;

export const SECTOR_RESIDENTIAL = 'Residential AC/Small Capacity';
export const SECTOR_COMMERCIAL = 'Commercial HVAC/Large Capacity';

export const PATHWAY_DESTRUCTION = 'Destruction';
export const PATHWAY_RECLAMATION = 'Reclamation';
export const PATHWAY_RECYCLING = 'Recycling';

export const MACHINE_BASIC = 'Basic';
export const MACHINE_HIGH = 'High Capacity';

export const REFILL_DIRECT = 'Direct reuse';
export const REFILL_CLEANING = 'Cleaning + reuse';

export const GWP_R32 = 771;
export const GWP_R410A = 2256;
export const GWP_R22 = 1960;

function num(v) {
	const n = Number(v);
	return Number.isFinite(n) ? n : 0;
}

function left(value, n) {
	return String(value ?? '').slice(0, n);
}

function roundup(value, digits = 0) {
	const x = num(value);
	if (x === 0) return 0;
	const f = 10 ** digits;
	return (Math.sign(x) * Math.ceil(Math.abs(x) * f - 1e-12)) / f;
}

function sumproduct(pred) {
	let total = 0;
	for (const row of ROWS) {
		if (pred(row)) total += num(row.cost);
	}
	return total;
}

export function isResidential(sector) {
	return left(sector, 11) === 'Residential';
}

export function isCommercial(sector) {
	return left(sector, 10) === 'Commercial';
}

export function defaultChargeKg(sector) {
	return isResidential(sector) ? 0.8 : 100;
}

export function defaultRecoverablePct(sector) {
	return isResidential(sector) ? 50 : 80;
}

export function defaultRecoveryRateKgPerHour(sector) {
	return isResidential(sector) ? 3 : 30;
}

export function defaultLabourPerHour(sector) {
	return isResidential(sector) ? 10 : 50;
}

export function defaultUnitsPerDay(sector) {
	return isResidential(sector) ? 40 : 1;
}

export function defaultDaysPerYear(sector) {
	return isResidential(sector) ? 200 : 75;
}

export function defaultTeams(sector) {
	return isResidential(sector) ? 4 : 1;
}

export function defaultMix(sector) {
	if (isResidential(sector)) return { r32: 38, r410a: 50, r22: 12 };
	return { r32: 5, r410a: 65, r22: 30 };
}

/** C33 guide: <5 MT High; 5–50 MT Medium; >50 MT Low. */
export function defaultCostScenario(annualKg) {
	const kg = num(annualKg);
	if (kg < 5000) return 'High';
	if (kg <= 50000) return 'Medium';
	return 'Low';
}

export function pathwayOptions(sector) {
	if (isResidential(sector)) return [PATHWAY_DESTRUCTION, PATHWAY_RECLAMATION];
	return [PATHWAY_DESTRUCTION, PATHWAY_RECLAMATION, PATHWAY_RECYCLING];
}

export function machineOptions(sector) {
	if (isCommercial(sector)) return [MACHINE_HIGH];
	return [MACHINE_BASIC, MACHINE_HIGH];
}

export function mixTotal(mix) {
	return num(mix?.r32) + num(mix?.r410a) + num(mix?.r22);
}

export function mixIsValid(mix) {
	return Math.round(mixTotal(mix) * 1e6) / 1e6 === 100;
}

function destructionOpexName(tech) {
	if (tech === 'Rotary') return 'Rotary Kiln Incineration';
	if (tech === 'Cement') return 'Cement Kiln Incineration';
	return 'Plasma Arc';
}

function destructionFacilityName(tech, status) {
	const kiln = tech === 'Rotary' ? 'Rotary Kiln' : tech === 'Cement' ? 'Cement Kiln' : 'Plasma Arc';
	const suffix = status === 'New' ? 'New Facility' : status;
	return `${kiln} (${suffix})`;
}

function lookupCentralFacilityOpex(costScenario) {
	return sumproduct(
		(r) =>
			r.stage === 'Recovery' &&
			r.capexOpex === 'Opex' &&
			left(r.variable, 16) === 'Central Facility' &&
			r.scenario === costScenario
	);
}

function lookupRecyclingMarkup(refillMode) {
	if (refillMode === REFILL_DIRECT) {
		return sumproduct(
			(r) =>
				r.stage === 'Recycling' && r.variable === 'Direct reuse (% from normal recovery cost)'
		);
	}
	return sumproduct(
		(r) =>
			r.stage === 'Recycling' &&
			r.variable === 'Cleaning + reuse (% mark up from normal recovery cost)'
	);
}

function lookupCapex(stage, variableLeft, exact) {
	if (exact) {
		return sumproduct((r) => r.stage === stage && r.variable === exact);
	}
	return sumproduct((r) => r.stage === stage && left(r.variable, variableLeft.length) === variableLeft);
}

function lookupTransport(location, costScenario) {
	return sumproduct(
		(r) =>
			left(r.stage, 9) === 'Transport' &&
			r.capexOpex === 'Opex' &&
			r.variable === location &&
			r.scenario === costScenario
	);
}

function lookupEndUseOpex(pathway, tech, costScenario) {
	if (pathway === PATHWAY_RECYCLING) return 0;
	if (pathway === PATHWAY_RECLAMATION) {
		return sumproduct(
			(r) =>
				r.stage === 'Reclamation' &&
				r.capexOpex === 'Opex' &&
				r.variable === 'Reclamation Cost' &&
				r.scenario === costScenario
		);
	}
	const name = destructionOpexName(tech);
	return sumproduct(
		(r) =>
			r.stage === 'Destruction' &&
			r.capexOpex === 'Opex' &&
			r.variable === name &&
			r.scenario === costScenario
	);
}

function lookupFacilityUnitCost(pathway, tech, status) {
	if (pathway === PATHWAY_RECLAMATION) {
		if (status === 'Existing') {
			return sumproduct(
				(r) => r.stage === 'Reclamation' && r.variable === 'Reclamation Facility (Existing)'
			);
		}
		return sumproduct(
			(r) => r.stage === 'Reclamation' && left(r.variable, 25) === 'Reclamation Facility (New'
		);
	}
	return sumproduct(
		(r) => r.stage === 'Destruction' && r.variable === destructionFacilityName(tech, status)
	);
}

function lookupAdmin(pathway) {
	return sumproduct((r) => r.stage === pathway && r.variable === 'Admin & Licensing');
}

function machineUnitPrice(pathway, kind) {
	if (pathway === PATHWAY_RECYCLING) {
		return kind === 'basic'
			? lookupCapex('Recycling', '', 'Recycling Equipment (Basic)')
			: lookupCapex('Recycling', '', 'Recycling Equipment (High capacity)');
	}
	return kind === 'basic'
		? lookupCapex('Recovery', 'Recovery machine (basi')
		: lookupCapex('Recovery', 'Recovery machine (high');
}

function facilityNa(pathway, tech, status) {
	return (
		(pathway === PATHWAY_DESTRUCTION && tech === 'Plasma Arc' && status === 'Retrofit') ||
		(pathway === PATHWAY_RECLAMATION && status === 'Retrofit')
	);
}

/**
 * @param {object} raw
 */
export function normalizeInputs(raw) {
	const sector = raw.sector || SECTOR_COMMERCIAL;
	const residential = isResidential(sector);
	const commercial = isCommercial(sector);

	let chargeSizeKg = num(raw.chargeSizeKg);
	let chargeCapped = false;
	if (residential && chargeSizeKg > RESIDENTIAL_CHARGE_CAP_KG) {
		chargeSizeKg = RESIDENTIAL_CHARGE_CAP_KG;
		chargeCapped = true;
	}

	let pathway = raw.pathway || PATHWAY_DESTRUCTION;
	if (residential && pathway === PATHWAY_RECYCLING) pathway = PATHWAY_DESTRUCTION;

	let machineType = commercial ? MACHINE_HIGH : raw.machineType || MACHINE_BASIC;
	if (commercial) machineType = MACHINE_HIGH;

	let location = raw.location || 'In-country';
	if (pathway === PATHWAY_RECYCLING) location = 'In-country';

	let refillMode = raw.refillMode || REFILL_CLEANING;
	if (refillMode === 'Refilling') refillMode = REFILL_DIRECT;
	if (refillMode === 'Recycling + Refilling') refillMode = REFILL_CLEANING;

	const mix = {
		r32: num(raw.mix?.r32 ?? defaultMix(sector).r32),
		r410a: num(raw.mix?.r410a ?? defaultMix(sector).r410a),
		r22: num(raw.mix?.r22 ?? defaultMix(sector).r22)
	};

	return {
		sector,
		pathway,
		machineType,
		location,
		chargeSizeKg,
		chargeCapped,
		recoverablePct: num(raw.recoverablePct ?? defaultRecoverablePct(sector)),
		recoveryRateKgPerHour: num(raw.recoveryRateKgPerHour ?? defaultRecoveryRateKgPerHour(sector)),
		labourPerHour: num(raw.labourPerHour ?? defaultLabourPerHour(sector)),
		fuelEfficiencyKmPerL: num(raw.fuelEfficiencyKmPerL ?? 8.5),
		fuelPricePerL: num(raw.fuelPricePerL ?? 1.5),
		travelKmPerDay: num(raw.travelKmPerDay ?? 100),
		unitsPerDay: num(raw.unitsPerDay ?? defaultUnitsPerDay(sector)),
		daysPerYear: num(raw.daysPerYear ?? defaultDaysPerYear(sector)),
		teams: num(raw.teams ?? defaultTeams(sector)),
		warehousePerMonth: num(raw.warehousePerMonth ?? 1000),
		tmsCost: num(raw.tmsCost ?? 50000),
		destructionTech: raw.destructionTech || 'Rotary',
		facilityStatus: raw.facilityStatus || 'Retrofit',
		salePrice: num(raw.salePrice ?? 15),
		refillMode,
		virginPrice: num(raw.virginPrice ?? 5),
		gwpR32: num(raw.gwpR32 ?? GWP_R32),
		gwpR410a: num(raw.gwpR410a ?? GWP_R410A),
		gwpR22: num(raw.gwpR22 ?? GWP_R22),
		mix,
		costScenarioOverride: raw.costScenarioOverride || null
	};
}

function line(units, cost, { hidden = false, na = false, naLabel = 'NA – Existing or New Facility only' } = {}) {
	if (hidden) {
		return { hidden: true, na: false, units: 0, cost: 0, label: null };
	}
	if (na) {
		return { hidden: false, na: true, units: 0, cost: 0, label: naLabel };
	}
	return { hidden: false, na: false, units, cost, label: null };
}

/**
 * Full V4.3 Model calculation (C92–C136).
 * @param {object} raw
 */
export function calculate(raw) {
	const inp = normalizeInputs(raw);
	const residential = isResidential(inp.sector);
	const commercial = isCommercial(inp.sector);

	const availablePerUnit = inp.chargeSizeKg * (inp.recoverablePct / 100);
	const unitsPerDay = inp.unitsPerDay;
	const kgPerDay = unitsPerDay * availablePerUnit;
	const unitsPerYear = unitsPerDay * inp.daysPerYear;
	const annualKg = unitsPerYear * availablePerUnit;

	const fuelPerKm = inp.fuelEfficiencyKmPerL === 0 ? 0 : inp.fuelPricePerL / inp.fuelEfficiencyKmPerL;
	const labourPerUnit =
		inp.recoveryRateKgPerHour === 0 ? 0 : (availablePerUnit / inp.recoveryRateKgPerHour) * inp.labourPerHour;
	const recoveryCostPerDay = labourPerUnit * unitsPerDay + fuelPerKm * inp.travelKmPerDay;

	const autoScenario = defaultCostScenario(annualKg);
	const costScenario = inp.costScenarioOverride || autoScenario;

	// C92
	const recoveryOpex = kgPerDay === 0 ? 0 : recoveryCostPerDay / kgPerDay;

	// C93
	const refillMarkupOpex =
		inp.pathway === PATHWAY_RECYCLING ? recoveryOpex * lookupRecyclingMarkup(inp.refillMode) : 0;

	// C94
	const warehouseOpex = annualKg === 0 ? 0 : (inp.warehousePerMonth * 12) / annualKg;

	// C95 — no sector filter and no Residential×Basic 1.5× in V4.3
	const centralOpex = lookupCentralFacilityOpex(costScenario);

	// C96
	const transportOpex =
		inp.pathway === PATHWAY_RECYCLING ? 0 : lookupTransport(inp.location, costScenario);

	// C97
	const processingOpex = lookupEndUseOpex(inp.pathway, inp.destructionTech, costScenario);

	const grossOpex =
		recoveryOpex + refillMarkupOpex + warehouseOpex + centralOpex + transportOpex + processingOpex;

	// C99 — sale credit only for reclamation
	const saleCredit =
		inp.pathway === PATHWAY_DESTRUCTION || inp.pathway === PATHWAY_RECYCLING ? 0 : inp.salePrice;

	// C100 — virgin savings only for recycling
	const virginSavings =
		inp.pathway === PATHWAY_DESTRUCTION || inp.pathway === PATHWAY_RECLAMATION ? 0 : inp.virginPrice;

	const netOpex = grossOpex - saleCredit - virginSavings;
	const netOpexPerYear = netOpex * annualKg;

	const blankKg = annualKg === 0;

	// C103 basic machine units — divisor 3,000 kg
	const machBasicU = commercial
		? 0
		: inp.machineType === MACHINE_BASIC
			? blankKg
				? 0
				: Math.max(1, roundup(annualKg / 3000, 0))
			: 0;

	const basicMachinePrice = machineUnitPrice(inp.pathway, 'basic');
	const machBasicT = machBasicU * basicMachinePrice;

	const accBasicU = machBasicU;
	const accBasicT = accBasicU * lookupCapex('Recovery', 'Recovery accessories (ba');

	const accPumpU = commercial ? 0 : inp.teams;
	const accPumpT = accPumpU * lookupCapex('Recovery', 'Recovery accessories (for');

	// C109
	const machHighU = commercial
		? inp.teams
		: inp.machineType === MACHINE_HIGH
			? blankKg
				? 0
				: Math.max(1, roundup(annualKg / 20000, 0))
			: 0;

	const highMachinePrice = machineUnitPrice(inp.pathway, 'high');
	const machHighT = machHighU * highMachinePrice;

	const accHighU = machHighU;
	const accHighT = accHighU * lookupCapex('Recovery', 'Recovery accessories (hi');

	const cyl12U = blankKg ? 0 : roundup(annualKg / 2 / 10 / 3, 0);
	const cyl12T = cyl12U * lookupCapex('Recovery', 'Recovery Cylinders (smal');
	const cyl60U = blankKg ? 0 : roundup(annualKg / 2 / 50 / 3, 0);
	const cyl60T = cyl60U * lookupCapex('Recovery', 'Recovery Cylinders (larg');

	const totalMachineU = commercial ? machHighU : machBasicU + machHighU;
	const ridU = totalMachineU;
	const ridT = ridU * lookupCapex('Recovery', '', 'Refrigerant Identifiers');

	const tonU = blankKg ? 0 : roundup(annualKg / 600 / 2, 0);
	const tonT = tonU * lookupCapex('Recovery', '', 'Ton Tanks');

	const tmsU = 1;
	const tmsT = inp.tmsCost;

	const recoveryCapex =
		machBasicT + accBasicT + accPumpT + machHighT + accHighT + cyl12T + cyl60T + ridT + tonT + tmsT;

	// C125 facility units
	let facU;
	if (inp.facilityStatus === 'Existing') facU = 0;
	else if (inp.pathway === PATHWAY_RECYCLING) facU = 0;
	else if (blankKg) facU = 0;
	else if (inp.pathway === PATHWAY_RECLAMATION) facU = Math.max(1, roundup(annualKg / 150000, 0));
	else facU = Math.max(1, roundup(annualKg / 80000, 0));

	const naFacility = facilityNa(inp.pathway, inp.destructionTech, inp.facilityStatus);
	const facT = naFacility
		? 0
		: facU * lookupFacilityUnitCost(inp.pathway, inp.destructionTech, inp.facilityStatus);

	const adminT = inp.facilityStatus === 'Existing' ? 0 : facU * lookupAdmin(inp.pathway);

	const opU = inp.pathway === PATHWAY_RECLAMATION ? facU * 3 : 0;
	const opT =
		inp.pathway === PATHWAY_RECLAMATION
			? opU * lookupCapex('Reclamation', '', 'Reclamation Training')
			: 0;

	const gcU = inp.pathway === PATHWAY_RECLAMATION ? facU : 0;
	const gcT =
		inp.pathway === PATHWAY_RECLAMATION
			? gcU * lookupCapex('Reclamation', 'Gas Chromatography')
			: 0;

	const drCapex = facT + adminT + opT + gcT;
	const totalCapex = recoveryCapex + drCapex;

	const blendedGwp =
		(inp.mix.r32 * inp.gwpR32 + inp.mix.r410a * inp.gwpR410a + inp.mix.r22 * inp.gwpR22) / 100;
	const emissionsAvoidedT = (annualKg * blendedGwp) / 1000;

	const hideBasic = commercial || inp.machineType === MACHINE_HIGH;
	const hidePump = commercial;
	const hideEndUseCapex = inp.pathway === PATHWAY_RECYCLING;
	const hideReclaimOnly = inp.pathway !== PATHWAY_RECLAMATION;
	const hideSale = inp.pathway !== PATHWAY_RECLAMATION;
	const hideRefill = inp.pathway !== PATHWAY_RECYCLING || residential;
	const hideTech = inp.pathway !== PATHWAY_DESTRUCTION;
	const hideFacility = inp.pathway === PATHWAY_RECYCLING;
	const hideLocationChoice = inp.pathway === PATHWAY_RECYCLING;
	const hideVirgin = hideRefill;

	return {
		inputs: {
			...inp,
			costScenario,
			autoScenario,
			availablePerUnit,
			unitsPerDay,
			kgPerDay,
			unitsPerYear,
			annualKg,
			fuelPerKm,
			labourPerUnit,
			recoveryCostPerDay
		},
		warnings: {
			chargeCapped: inp.chargeCapped,
			mixInvalid: !mixIsValid(inp.mix)
		},
		visibility: {
			hideBasic,
			hidePump,
			hideEndUseCapex,
			hideReclaimOnly,
			hideSale,
			hideRefill,
			hideVirgin,
			hideTech,
			hideFacility,
			hideLocationChoice,
			recyclingOffered: !residential
		},
		opex: {
			recovery: recoveryOpex,
			onSite: recoveryOpex,
			refillMarkup: refillMarkupOpex,
			virgin: 0,
			virginSavings,
			central: centralOpex,
			warehouse: warehouseOpex,
			transport: transportOpex,
			processing: processingOpex,
			gross: grossOpex,
			saleCredit,
			net: netOpex,
			netPerYear: netOpexPerYear
		},
		climate: {
			blendedGwp,
			emissionsAvoidedT
		},
		capex: {
			machinesBasic: line(machBasicU, machBasicT, { hidden: hideBasic }),
			accessoriesBasic: line(accBasicU, accBasicT, { hidden: hideBasic }),
			accessoriesPumpdown: line(accPumpU, accPumpT, { hidden: hidePump }),
			machinesHigh: line(machHighU, machHighT),
			accessoriesHigh: line(accHighU, accHighT),
			cylinders12L: line(cyl12U, cyl12T),
			cylinders60L: line(cyl60U, cyl60T),
			identifiers: line(ridU, ridT),
			tonTanks: line(tonU, tonT),
			tracking: line(tmsU, tmsT),
			recoveryTotal: recoveryCapex,
			facility: line(naFacility ? 0 : facU, facT, {
				hidden: hideEndUseCapex,
				na: naFacility
			}),
			admin: line(hideEndUseCapex || inp.facilityStatus === 'Existing' ? 0 : facU, adminT, {
				hidden: hideEndUseCapex
			}),
			operators: line(opU, opT, { hidden: hideReclaimOnly }),
			gcLab: line(gcU, gcT, { hidden: hideReclaimOnly }),
			drTotal: drCapex,
			total: totalCapex
		}
	};
}

export function comparePathways(raw) {
	const base = normalizeInputs(raw);
	const pathways = pathwayOptions(base.sector);
	const rows = {};
	for (const pathway of [PATHWAY_DESTRUCTION, PATHWAY_RECLAMATION, PATHWAY_RECYCLING]) {
		if (!pathways.includes(pathway)) {
			rows[pathway] = null;
			continue;
		}
		const result = calculate({ ...raw, pathway });
		rows[pathway] = {
			netOpex: result.opex.net,
			netOpexPerYear: result.opex.netPerYear,
			capex: result.capex.total,
			grandTotal: result.opex.netPerYear + result.capex.total,
			recovery: result.opex.recovery
		};
	}
	return rows;
}

export function excelDefaults(sector = SECTOR_COMMERCIAL, pathway = PATHWAY_RECYCLING) {
	const mix = defaultMix(sector);
	return {
		sector,
		pathway: pathwayOptions(sector).includes(pathway) ? pathway : pathwayOptions(sector)[0],
		chargeSizeKg: defaultChargeKg(sector),
		recoverablePct: defaultRecoverablePct(sector),
		recoveryRateKgPerHour: defaultRecoveryRateKgPerHour(sector),
		labourPerHour: defaultLabourPerHour(sector),
		fuelEfficiencyKmPerL: 8.5,
		fuelPricePerL: 1.5,
		travelKmPerDay: 100,
		unitsPerDay: defaultUnitsPerDay(sector),
		daysPerYear: defaultDaysPerYear(sector),
		teams: defaultTeams(sector),
		warehousePerMonth: 1000,
		tmsCost: 50000,
		machineType: isCommercial(sector) ? MACHINE_HIGH : MACHINE_BASIC,
		destructionTech: 'Rotary',
		facilityStatus: 'Retrofit',
		location: 'In-country',
		salePrice: 15,
		refillMode: REFILL_CLEANING,
		virginPrice: 5,
		mix,
		costScenarioOverride: null
	};
}

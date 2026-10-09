/**
 * LRM Cost Model V5.0 (SEA) — 1:1 port of the V5.0 Model sheet formulas.
 * Source: V5.0 LRM Cost Model.xlsx (V5.0 Model + V4.5 SEA Data).
 *
 * Recovery labour/day = (labour USD/h × hours/unit) × units/day
 * Recovery transport/day = (km/team × teams) × fuel USD/km
 * Those two are separate opex lines (C91 vs C93).
 * Recycling always uses the 50% mark-up on recovery labour (on-site cleaning + refill).
 * Opex and capex money lines are ROUND(..., 2) as in the Model sheet.
 */
import data from './data.js';

const ROWS = data.rows;

export const MODEL_VERSION = '5.0';
export const GEOGRAPHY = 'Southeast Asia';
export const RESIDENTIAL_CHARGE_CAP_KG = 5;

export const SECTOR_RESIDENTIAL = 'Residential AC/Small Capacity';
export const SECTOR_COMMERCIAL = 'Commercial HVAC/Large Capacity';

export const PATHWAY_DESTRUCTION = 'Destruction';
export const PATHWAY_RECLAMATION = 'Reclamation';
export const PATHWAY_RECYCLING = 'Recycling';

export const MACHINE_BASIC = 'Basic';
export const MACHINE_HIGH = 'High Capacity';

export const REFILL_CLEANING = 'Cleaning + reuse';
export const REFILL_DIRECT = 'Direct reuse';

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

function excelRound(value, digits = 2) {
	const x = num(value);
	const f = 10 ** digits;
	return Math.round(x * f + Number.EPSILON) / f;
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
	return isResidential(sector) ? 1 : 100;
}

export function defaultRecoverablePct(sector) {
	return isResidential(sector) ? 50 : 80;
}

export function defaultRecoveryHours(sector) {
	return 0.5;
}

export function defaultLabourPerHour(sector) {
	return isResidential(sector) ? 10 : 20;
}

export function defaultUnitsPerDay(sector) {
	return isResidential(sector) ? 40 : 1;
}

export function defaultDaysPerYear(sector) {
	return isResidential(sector) ? 200 : 75;
}

export function defaultTeams(sector) {
	return isResidential(sector) ? 5 : 1;
}

export function defaultMix(sector) {
	if (isResidential(sector)) return { r32: 38, r410a: 50, r22: 12 };
	return { r32: 5, r410a: 65, r22: 30 };
}

/** C33 is a manual Low/Medium/High. Auto guide kept from prior: <5 MT High; 5–50 MT Medium; >50 MT Low. */
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

function lookupRecyclingMarkup() {
	return sumproduct(
		(r) =>
			r.stage === 'Recycling' &&
			r.variable === 'Recycling Costs (% mark up from normal recovery cost)'
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
		recoveryHoursPerUnit: num(raw.recoveryHoursPerUnit ?? defaultRecoveryHours(sector)),
		labourPerHour: num(raw.labourPerHour ?? defaultLabourPerHour(sector)),
		fuelEfficiencyKmPerL: num(raw.fuelEfficiencyKmPerL ?? 8.5),
		fuelPricePerL: num(raw.fuelPricePerL ?? 1.5),
		travelKmPerTeam: num(raw.travelKmPerTeam ?? raw.travelKmPerDay ?? 100),
		unitsPerDay: num(raw.unitsPerDay ?? defaultUnitsPerDay(sector)),
		daysPerYear: num(raw.daysPerYear ?? defaultDaysPerYear(sector)),
		teams: num(raw.teams ?? defaultTeams(sector)),
		warehousePerMonth: num(raw.warehousePerMonth ?? 1000),
		tmsCost: num(raw.tmsCost ?? 50000),
		destructionTech: raw.destructionTech || 'Rotary',
		facilityStatus: raw.facilityStatus || 'Retrofit',
		salePrice: num(raw.salePrice ?? 5),
		refillMode: REFILL_CLEANING,
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
 * Full V5.0 Model calculation (C91–C136).
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
	const annualKg = kgPerDay * inp.daysPerYear;

	const fuelPerKm = inp.fuelEfficiencyKmPerL === 0 ? 0 : inp.fuelPricePerL / inp.fuelEfficiencyKmPerL;
	const labourPerUnit = inp.labourPerHour * inp.recoveryHoursPerUnit;
	const labourCostPerDay = labourPerUnit * unitsPerDay;
	const recoveryTransportPerDay = inp.travelKmPerTeam * inp.teams * fuelPerKm;

	const autoScenario = defaultCostScenario(annualKg);
	const costScenario = inp.costScenarioOverride || autoScenario;

	const labourOpex = excelRound(kgPerDay === 0 ? 0 : labourCostPerDay / kgPerDay);
	const refillMarkupOpex = excelRound(
		inp.pathway === PATHWAY_RECYCLING ? labourOpex * lookupRecyclingMarkup() : 0
	);
	const recoveryTransportOpex = excelRound(kgPerDay === 0 ? 0 : recoveryTransportPerDay / kgPerDay);
	const warehouseOpex = excelRound(annualKg === 0 ? 0 : (inp.warehousePerMonth * 12) / annualKg);
	const centralOpex = excelRound(lookupCentralFacilityOpex(costScenario));
	const transportOpex = excelRound(
		inp.pathway === PATHWAY_RECYCLING ? 0 : lookupTransport(inp.location, costScenario)
	);
	const processingOpex = excelRound(lookupEndUseOpex(inp.pathway, inp.destructionTech, costScenario));

	const grossOpex =
		labourOpex +
		refillMarkupOpex +
		recoveryTransportOpex +
		warehouseOpex +
		centralOpex +
		transportOpex +
		processingOpex;

	const saleCredit = excelRound(
		inp.pathway === PATHWAY_DESTRUCTION || inp.pathway === PATHWAY_RECYCLING ? 0 : inp.salePrice
	);
	const virginSavings = excelRound(inp.pathway === PATHWAY_RECYCLING ? inp.virginPrice : 0);
	const netOpex = grossOpex - saleCredit - virginSavings;
	const netOpexPerYear = netOpex * annualKg;

	const blankTeams = inp.teams === 0;
	const blankKg = annualKg === 0;

	const machBasicU =
		commercial || inp.machineType === MACHINE_HIGH ? 0 : blankTeams ? 0 : inp.teams;
	const machBasicT = excelRound(commercial ? 0 : machBasicU * machineUnitPrice(inp.pathway, 'basic'));

	const accBasicU = commercial ? 0 : blankTeams ? 0 : inp.teams;
	const accBasicT = excelRound(
		commercial ? 0 : accBasicU * lookupCapex('Recovery', 'Recovery accessories (ba')
	);

	const machHighU = commercial
		? inp.teams
		: inp.machineType === MACHINE_HIGH
			? blankKg
				? 0
				: Math.max(1, roundup(annualKg / 10000, 0))
			: 0;
	const machHighT = excelRound(machHighU * machineUnitPrice(inp.pathway, 'high'));
	const accHighU = machHighU;
	const accHighT = excelRound(machHighU * lookupCapex('Recovery', 'Recovery accessories (hi'));

	const cyl12U = blankKg
		? 0
		: residential
			? roundup((annualKg * 0.7) / 10 / 3, 0)
			: roundup((annualKg * 0.3) / 10 / 3, 0);
	const cyl12T = excelRound(cyl12U * lookupCapex('Recovery', 'Recovery Cylinders (smal'));
	const cyl60U = blankKg
		? 0
		: residential
			? roundup((annualKg * 0.3) / 50 / 3, 0)
			: roundup((annualKg * 0.7) / 50 / 3, 0);
	const cyl60T = excelRound(cyl60U * lookupCapex('Recovery', 'Recovery Cylinders (larg'));

	const totalMachineU = commercial ? machHighU : machBasicU + machHighU;
	const ridU = totalMachineU;
	const ridT = excelRound(ridU * lookupCapex('Recovery', '', 'Refrigerant Identifiers'));

	const tonU = blankKg ? 0 : roundup(annualKg / 600 / 2, 0);
	const tonT = excelRound(tonU * lookupCapex('Recovery', '', 'Ton Tanks'));

	const tmsU = 1;
	const tmsT = excelRound(inp.tmsCost);

	const recoveryCapex =
		machBasicT + accBasicT + machHighT + accHighT + cyl12T + cyl60T + ridT + tonT + tmsT;

	let facU;
	if (inp.facilityStatus === 'Existing') facU = 0;
	else if (inp.pathway === PATHWAY_RECYCLING) facU = 0;
	else if (blankKg) facU = 0;
	else if (inp.pathway === PATHWAY_RECLAMATION) facU = Math.max(1, roundup(annualKg / 150000, 0));
	else facU = Math.max(1, roundup(annualKg / 80000, 0));

	const naFacility = facilityNa(inp.pathway, inp.destructionTech, inp.facilityStatus);
	const facT = excelRound(
		naFacility ? 0 : facU * lookupFacilityUnitCost(inp.pathway, inp.destructionTech, inp.facilityStatus)
	);
	const adminT = excelRound(
		inp.facilityStatus === 'Existing' ? 0 : facU * lookupAdmin(inp.pathway)
	);
	const opU = inp.pathway === PATHWAY_RECLAMATION ? facU * 3 : 0;
	const opT = excelRound(
		inp.pathway === PATHWAY_RECLAMATION ? opU * lookupCapex('Reclamation', '', 'Reclamation Training') : 0
	);
	const gcU = inp.pathway === PATHWAY_RECLAMATION ? facU : 0;
	const gcT = excelRound(
		inp.pathway === PATHWAY_RECLAMATION ? gcU * lookupCapex('Reclamation', 'Gas Chromatography') : 0
	);

	const drCapex = facT + adminT + opT + gcT;
	const totalCapex = recoveryCapex + drCapex;

	const blendedGwp = excelRound(
		(inp.mix.r32 * inp.gwpR32 + inp.mix.r410a * inp.gwpR410a + inp.mix.r22 * inp.gwpR22) / 100
	);
	const emissionsAvoidedT = excelRound((annualKg * blendedGwp) / 1000);
	const costPerTco2e = excelRound(emissionsAvoidedT === 0 ? 0 : (grossOpex * annualKg) / emissionsAvoidedT);

	const hideBasicMachines = commercial || inp.machineType === MACHINE_HIGH;
	const hideBasicAccessories = commercial;
	const hideEndUseCapex = inp.pathway === PATHWAY_RECYCLING;
	const hideReclaimOnly = inp.pathway !== PATHWAY_RECLAMATION;

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
			labourCostPerDay,
			recoveryTransportPerDay
		},
		warnings: {
			chargeCapped: inp.chargeCapped,
			mixInvalid: !mixIsValid(inp.mix)
		},
		visibility: {
			hideBasic: hideBasicMachines,
			hideBasicAccessories,
			hidePump: true,
			hideEndUseCapex,
			hideReclaimOnly,
			hideSale: inp.pathway !== PATHWAY_RECLAMATION,
			hideRefill: true,
			hideVirgin: inp.pathway !== PATHWAY_RECYCLING || residential,
			hideTech: inp.pathway !== PATHWAY_DESTRUCTION,
			hideFacility: inp.pathway === PATHWAY_RECYCLING,
			hideLocationChoice: inp.pathway === PATHWAY_RECYCLING,
			recyclingOffered: !residential
		},
		opex: {
			labour: labourOpex,
			recovery: labourOpex,
			onSite: labourOpex,
			refillMarkup: refillMarkupOpex,
			recoveryTransport: recoveryTransportOpex,
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
			emissionsAvoidedT,
			costPerTco2e
		},
		capex: {
			machinesBasic: line(machBasicU, machBasicT, { hidden: hideBasicMachines }),
			accessoriesBasic: line(accBasicU, accBasicT, { hidden: hideBasicAccessories }),
			accessoriesPumpdown: line(0, 0, { hidden: true }),
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
			recovery: result.opex.labour
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
		recoveryHoursPerUnit: defaultRecoveryHours(sector),
		labourPerHour: defaultLabourPerHour(sector),
		fuelEfficiencyKmPerL: 8.5,
		fuelPricePerL: 1.5,
		travelKmPerTeam: 100,
		unitsPerDay: defaultUnitsPerDay(sector),
		daysPerYear: defaultDaysPerYear(sector),
		teams: defaultTeams(sector),
		warehousePerMonth: 1000,
		tmsCost: 50000,
		machineType: isCommercial(sector) ? MACHINE_HIGH : MACHINE_BASIC,
		destructionTech: 'Rotary',
		facilityStatus: 'Retrofit',
		location: 'In-country',
		salePrice: 5,
		refillMode: REFILL_CLEANING,
		virginPrice: 5,
		mix,
		costScenarioOverride: null
	};
}

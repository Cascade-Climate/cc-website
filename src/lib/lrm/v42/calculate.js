/**
 * LRM Cost Model V4.2 (SEA) — 1:1 port of the V4.2 Model sheet formulas.
 * Source: V4.2 SEA LRM Cost Model.xlsx (V4.2 Model + V4.2 SEA Data).
 *
 * Notes vs workbook comments:
 * - Residential + Basic central-facility opex is ×1.5 (C84), not doubled.
 * - Lookups use the same LEFT()/SUMPRODUCT predicates as Excel.
 */
import data from './data.js';

const ROWS = data.rows;

export const MODEL_VERSION = '4.2';
export const GEOGRAPHY = 'Southeast Asia';
export const RESIDENTIAL_CHARGE_CAP_KG = 5;

export const SECTOR_RESIDENTIAL = 'Residential AC/Small Capacity';
export const SECTOR_COMMERCIAL = 'Commercial HVAC/Large Capacity';

export const PATHWAY_DESTRUCTION = 'Destruction';
export const PATHWAY_RECLAMATION = 'Reclamation';
export const PATHWAY_RECYCLING = 'Recycling';

export const MACHINE_BASIC = 'Basic';
export const MACHINE_HIGH = 'High Capacity';

export const DISTANCE_HIGH = '>90%';
export const DISTANCE_MID = '50%-90%';
export const DISTANCE_LOW = '<50%';

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
	return isResidential(sector) ? 0.75 : 100;
}

export function defaultMix(sector) {
	if (isResidential(sector)) return { r32: 38, r410a: 50, r22: 12 };
	return { r32: 5, r410a: 65, r22: 30 };
}

export function defaultCostScenario(annualKg) {
	const kg = num(annualKg);
	if (kg < 10000) return 'High';
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

function distanceMultiplier(band) {
	const t = String(band ?? '').trim();
	if (t === DISTANCE_MID) return 1.25;
	if (t === DISTANCE_LOW) return 1.5;
	return 1;
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

function lookupCentralFacilityOpex(sector, costScenario) {
	const sectorKey = left(sector, 10);
	return sumproduct(
		(r) =>
			r.stage === 'Recovery' &&
			r.capexOpex === 'Opex' &&
			left(r.variable, 16) === 'Central Facility' &&
			left(r.systemType, 10) === sectorKey &&
			r.scenario === costScenario
	);
}

function lookupRecyclingMarkup(refillMode) {
	if (refillMode === 'Refilling') {
		return sumproduct(
			(r) =>
				r.stage === 'Recycling' &&
				r.variable ===
					'Recovery and direct refilling mark-up (% from normal recovery cost)'
		);
	}
	return sumproduct(
		(r) =>
			r.stage === 'Recycling' &&
			r.variable === 'Recycling and refilling mark-up (% from normal recovery cost)'
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
		recoverablePct: num(raw.recoverablePct ?? 80),
		unitsPerSite: num(raw.unitsPerSite ?? 2),
		sitesPerDay: num(raw.sitesPerDay ?? 1),
		teams: num(raw.teams ?? 3),
		daysPerYear: num(raw.daysPerYear ?? 100),
		labourPerUnit: num(raw.labourPerUnit ?? 300),
		markupPct: num(raw.markupPct ?? 10),
		distanceBand: raw.distanceBand || DISTANCE_HIGH,
		warehousePerMonth: num(raw.warehousePerMonth ?? 1000),
		destructionTech: raw.destructionTech || 'Rotary',
		facilityStatus: raw.facilityStatus || 'New',
		salePrice: num(raw.salePrice ?? 5),
		refillMode: raw.refillMode || 'Refilling',
		virginPrice: num(raw.virginPrice ?? 0),
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
 * Full V4.2 Model calculation (C81–C125 and output table).
 * @param {object} raw
 */
export function calculate(raw) {
	const inp = normalizeInputs(raw);
	const residential = isResidential(inp.sector);
	const commercial = isCommercial(inp.sector);

	const availablePerUnit = inp.chargeSizeKg * (inp.recoverablePct / 100);
	const unitsPerDay = inp.unitsPerSite * inp.sitesPerDay * inp.teams;
	const kgPerDay = unitsPerDay * availablePerUnit;
	const unitsPerYear = unitsPerDay * inp.daysPerYear;
	const annualKg = kgPerDay * inp.daysPerYear;

	const labourPerLocation =
		(inp.unitsPerSite > 0
			? inp.labourPerUnit + (inp.unitsPerSite - 1) * (inp.labourPerUnit * (inp.markupPct / 100))
			: 0) * distanceMultiplier(inp.distanceBand);
	const onSitePerDay = labourPerLocation * inp.teams * inp.sitesPerDay;

	const autoScenario = defaultCostScenario(annualKg);
	const costScenario = inp.costScenarioOverride || autoScenario;

	// C81
	const onSiteOpex =
		unitsPerDay * availablePerUnit === 0 ? 0 : onSitePerDay / (unitsPerDay * availablePerUnit);

	// C82
	const refillMarkupOpex =
		inp.pathway === PATHWAY_RECYCLING ? onSiteOpex * lookupRecyclingMarkup(inp.refillMode) : 0;

	// C83
	const virginOpex =
		inp.pathway === PATHWAY_DESTRUCTION || inp.pathway === PATHWAY_RECLAMATION ? 0 : inp.virginPrice;

	// C84
	const centralRaw = lookupCentralFacilityOpex(inp.sector, costScenario);
	const centralOpex = centralRaw * (residential && inp.machineType === MACHINE_BASIC ? 1.5 : 1);

	// C85
	const warehouseOpex = annualKg === 0 ? 0 : (inp.warehousePerMonth * 12) / annualKg;

	// C86
	const transportOpex =
		inp.pathway === PATHWAY_RECYCLING ? 0 : lookupTransport(inp.location, costScenario);

	// C87
	const processingOpex = lookupEndUseOpex(inp.pathway, inp.destructionTech, costScenario);

	const grossOpex =
		onSiteOpex + refillMarkupOpex + virginOpex + centralOpex + warehouseOpex + transportOpex + processingOpex;

	// C89 — sale credit only for reclamation
	const saleCredit =
		inp.pathway === PATHWAY_DESTRUCTION || inp.pathway === PATHWAY_RECYCLING ? 0 : inp.salePrice;

	const netOpex = grossOpex - saleCredit;
	const netOpexPerYear = netOpex * annualKg;

	const blankKg = annualKg === 0;

	// C92 basic machine units
	let machBasicU;
	if (residential && inp.machineType === MACHINE_HIGH) machBasicU = 0;
	else if (commercial) machBasicU = 0;
	else machBasicU = blankKg ? 0 : Math.max(1, roundup(annualKg / 5000, 0));

	const basicMachinePrice = machineUnitPrice(inp.pathway, 'basic');
	const machBasicT =
		residential && inp.machineType === MACHINE_HIGH
			? 0
			: commercial
				? 0
				: machBasicU * basicMachinePrice;

	const accBasicU =
		residential && inp.machineType === MACHINE_HIGH ? 0 : commercial ? 0 : machBasicU;
	const accBasicT = commercial || (residential && inp.machineType === MACHINE_HIGH)
		? 0
		: accBasicU * lookupCapex('Recovery', 'Recovery accessories (ba');

	const accPumpU = commercial ? 0 : inp.teams;
	const accPumpT = commercial
		? 0
		: accPumpU * lookupCapex('Recovery', 'Recovery accessories (for');

	// C98 high-capacity units (capacity calc)
	const machHighCalcU = commercial
		? inp.teams
		: blankKg
			? 0
			: Math.max(1, roundup(annualKg / 20000, 0));

	const highMachinePrice = machineUnitPrice(inp.pathway, 'high');
	let machHighT;
	if (commercial) machHighT = machHighCalcU * highMachinePrice;
	else if (inp.machineType === MACHINE_HIGH) machHighT = machHighCalcU * highMachinePrice;
	else machHighT = 0;

	// C100 display units
	const machHighU = commercial ? inp.teams : inp.machineType === MACHINE_HIGH ? machHighCalcU : 0;
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

	const truckU = inp.teams;
	const truckT = truckU * lookupCapex('Recovery', '', 'Trucks / Lorries');

	const tmsU = 1;
	const tmsT = lookupCapex('Recovery', '', 'Tracking & Monitoring System');

	const recoveryCapex =
		machBasicT + accBasicT + accPumpT + machHighT + accHighT + cyl12T + cyl60T + ridT + tonT + truckT + tmsT;

	// C117 facility units
	let facU;
	if (inp.facilityStatus === 'Existing') facU = 0;
	else if (inp.pathway === PATHWAY_RECYCLING) facU = 0;
	else if (blankKg) facU = 0;
	else if (inp.pathway === PATHWAY_RECLAMATION) facU = Math.max(1, roundup(annualKg / 150000, 0));
	else facU = Math.max(1, roundup(annualKg / 80000, 0));

	const naFacility = facilityNa(inp.pathway, inp.destructionTech, inp.facilityStatus);
	const facT = naFacility ? 0 : facU * lookupFacilityUnitCost(inp.pathway, inp.destructionTech, inp.facilityStatus);

	const adminT =
		inp.facilityStatus === 'Existing' ? 0 : facU * lookupAdmin(inp.pathway);

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

	const hideBasic = commercial;
	const hidePump = commercial;
	const hideEndUseCapex = inp.pathway === PATHWAY_RECYCLING;
	const hideReclaimOnly = inp.pathway !== PATHWAY_RECLAMATION;
	const hideSale = inp.pathway !== PATHWAY_RECLAMATION;
	const hideRefill = inp.pathway !== PATHWAY_RECYCLING || residential;
	const hideTech = inp.pathway !== PATHWAY_DESTRUCTION;
	const hideFacility = inp.pathway === PATHWAY_RECYCLING;
	const hideLocationChoice = inp.pathway === PATHWAY_RECYCLING;

	return {
		inputs: { ...inp, costScenario, autoScenario, availablePerUnit, unitsPerDay, kgPerDay, unitsPerYear, annualKg, labourPerLocation, onSitePerDay },
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
			hideTech,
			hideFacility,
			hideLocationChoice,
			recyclingOffered: !residential
		},
		opex: {
			onSite: onSiteOpex,
			refillMarkup: refillMarkupOpex,
			virgin: virginOpex,
			central: centralOpex,
			warehouse: warehouseOpex,
			transport: transportOpex,
			processing: processingOpex,
			gross: grossOpex,
			saleCredit,
			net: netOpex,
			netPerYear: netOpexPerYear
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
			trucks: line(truckU, truckT),
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
			onSite: result.opex.onSite
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
		recoverablePct: 80,
		unitsPerSite: 2,
		sitesPerDay: 1,
		teams: 3,
		daysPerYear: 100,
		labourPerUnit: 300,
		markupPct: 10,
		distanceBand: DISTANCE_HIGH,
		warehousePerMonth: 1000,
		machineType: isCommercial(sector) ? MACHINE_HIGH : MACHINE_BASIC,
		destructionTech: 'Rotary',
		facilityStatus: 'New',
		location: 'In-country',
		salePrice: 5,
		refillMode: 'Refilling',
		virginPrice: 0,
		mix,
		costScenarioOverride: null
	};
}

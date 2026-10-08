import {
	calculate,
	comparePathways,
	excelDefaults,
	SECTOR_COMMERCIAL,
	SECTOR_RESIDENTIAL,
	PATHWAY_RECYCLING,
	PATHWAY_DESTRUCTION,
	PATHWAY_RECLAMATION,
	REFILL_DIRECT,
	REFILL_CLEANING
} from './calculate.js';

function assertClose(name, actual, expected, eps = 1e-9) {
	const a = Number(actual);
	const e = Number(expected);
	if (!Number.isFinite(a) || Math.abs(a - e) > eps) {
		throw new Error(`${name}: expected ${e}, got ${a}`);
	}
}

function assertEq(name, actual, expected) {
	if (actual !== expected) {
		throw new Error(`${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
	}
}

const rec = calculate(excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING));
const i = rec.inputs;
const o = rec.opex;
const c = rec.capex;

assertEq('availablePerUnit', i.availablePerUnit, 80);
assertEq('unitsPerDay', i.unitsPerDay, 1);
assertEq('kgPerDay', i.kgPerDay, 80);
assertEq('unitsPerYear', i.unitsPerYear, 75);
assertEq('annualKg', i.annualKg, 6000);
assertClose('labourPerUnit', i.labourPerUnit, 80 / 30 * 50);
assertClose('fuelPerKm', i.fuelPerKm, 1.5 / 8.5);
assertClose('recoveryCostPerDay', i.recoveryCostPerDay, 133.33333333333331 + (1.5 / 8.5) * 100);
assertEq('costScenario', i.costScenario, 'Medium');
assertEq('facilityStatus default', i.facilityStatus, 'Retrofit');
assertEq('refillMode default', i.refillMode, REFILL_CLEANING);

assertClose('recovery opex', o.recovery, 1.8872549019607843);
assertClose('refill markup', o.refillMarkup, 0.9436274509803921);
assertClose('warehouse', o.warehouse, 2);
assertClose('central', o.central, 0.75);
assertClose('transport recycling', o.transport, 0);
assertClose('processing recycling', o.processing, 0);
assertClose('gross', o.gross, 5.580882352941177);
assertClose('saleCredit', o.saleCredit, 0);
assertClose('virginSavings', o.virginSavings, 5);
assertClose('net', o.net, 0.5808823529411766);
assertClose('netPerYear', o.netPerYear, 3485.29411764706);

assertEq('high machines units', c.machinesHigh.units, 1);
assertClose('high machines recycling price', c.machinesHigh.cost, 10000);
assertClose('high acc', c.accessoriesHigh.cost, 4500);
assertEq('12L units', c.cylinders12L.units, 100);
assertClose('12L cost', c.cylinders12L.cost, 25000);
assertEq('60L units', c.cylinders60L.units, 20);
assertClose('60L cost', c.cylinders60L.cost, 7000);
assertEq('identifiers units', c.identifiers.units, 1);
assertClose('identifiers cost', c.identifiers.cost, 10000);
assertEq('ton tanks units', c.tonTanks.units, 5);
assertClose('ton tanks cost', c.tonTanks.cost, 25000);
assertClose('tms from input', c.tracking.cost, 50000);
assertEq('no trucks key used in total', c.recoveryTotal, 131500);
assertClose('dr capex recycling', c.drTotal, 0);
assertClose('total capex recycling', c.total, 131500);

const cmp = comparePathways(excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING));
assertClose('cmp D net/yr', cmp.Destruction.netOpexPerYear, 72223.5294117647);
assertClose('cmp D capex', cmp.Destruction.capex, 351500);
assertClose('cmp R net/yr', cmp.Reclamation.netOpexPerYear, -8776.470588235296);
assertClose('cmp R capex', cmp.Reclamation.capex, 378375);
assertClose('cmp Recycle net/yr', cmp.Recycling.netOpexPerYear, 3485.29411764706);
assertClose('cmp Recycle capex', cmp.Recycling.capex, 131500);

const dest = calculate({ ...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION), pathway: PATHWAY_DESTRUCTION });
assertClose('destruction processing', dest.opex.processing, 7);
assertClose('destruction transport', dest.opex.transport, 0.4);
assertClose('destruction high machines', dest.capex.machinesHigh.cost, 20000);
assertClose('destruction retrofit facility', dest.capex.facility.cost, 200000);
assertEq('destruction facility units', dest.capex.facility.units, 1);
assertClose('destruction admin', dest.capex.admin.cost, 10000);
assertClose('destruction total capex', dest.capex.total, 351500);

const destNew = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	pathway: PATHWAY_DESTRUCTION,
	facilityStatus: 'New'
});
assertClose('new rotary facility', destNew.capex.facility.cost, 3500000);
assertClose('new rotary total capex', destNew.capex.total, 3651500);

const reclaim = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECLAMATION),
	pathway: PATHWAY_RECLAMATION
});
assertClose('reclamation processing', reclaim.opex.processing, 8.5);
assertClose('reclamation sale credit', reclaim.opex.saleCredit, 15);
assertClose('reclamation net', reclaim.opex.net, -1.4627450980392158);
assertEq('reclamation retrofit na', reclaim.capex.facility.na, true);
assertClose('reclamation facility cost na', reclaim.capex.facility.cost, 0);
assertEq('reclamation operators units', reclaim.capex.operators.units, 3);
assertClose('reclamation operators cost', reclaim.capex.operators.cost, 1875);
assertClose('reclamation gc', reclaim.capex.gcLab.cost, 225000);
assertClose('reclamation admin still on', reclaim.capex.admin.cost, 10000);

const na = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	pathway: PATHWAY_DESTRUCTION,
	destructionTech: 'Plasma Arc',
	facilityStatus: 'Retrofit'
});
assertEq('plasma retrofit na', na.capex.facility.na, true);
assertClose('plasma retrofit facility cost', na.capex.facility.cost, 0);
assertClose('plasma processing medium', na.opex.processing, 6.5);

const res = calculate({
	...excelDefaults(SECTOR_RESIDENTIAL, PATHWAY_DESTRUCTION),
	costScenarioOverride: 'Medium'
});
assertEq('res available', res.inputs.availablePerUnit, 0.4);
assertEq('res annualKg', res.inputs.annualKg, 3200);
assertEq('res auto would be High', res.inputs.autoScenario, 'High');
assertEq('res override Medium', res.inputs.costScenario, 'Medium');
assertEq('res basic machines 3000kg bands', res.capex.machinesBasic.units, 2);
assertClose('res recovery opex', res.opex.recovery, 4.436274509803921);
assertClose('res warehouse', res.opex.warehouse, 3.75);
assertClose('res central no 1.5x', res.opex.central, 0.75);
assertClose('res net', res.opex.net, 16.33627450980392);
assertClose('res recovery capex', res.capex.recoveryTotal, 109350);
assertClose('res total capex retrofit', res.capex.total, 319350);
assertClose('res blended gwp', res.climate.blendedGwp, 1656.18);

const capped = calculate({
	...excelDefaults(SECTOR_RESIDENTIAL, PATHWAY_DESTRUCTION),
	chargeSizeKg: 12
});
assertEq('residential charge cap', capped.inputs.chargeSizeKg, 5);
assertEq('charge capped flag', capped.warnings.chargeCapped, true);
assertEq('residential no recycling compare', comparePathways(capped.inputs).Recycling, null);

const mixBad = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING),
	mix: { r32: 10, r410a: 10, r22: 10 }
});
assertEq('mix invalid', mixBad.warnings.mixInvalid, true);

const labour = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING),
	recoveryRateKgPerHour: 40,
	labourPerHour: 20,
	fuelPricePerL: 1.7,
	fuelEfficiencyKmPerL: 8.5,
	travelKmPerDay: 50
});
assertClose('derived labour per unit', labour.inputs.labourPerUnit, (80 / 40) * 20);
assertClose('derived fuel per km', labour.inputs.fuelPerKm, 1.7 / 8.5);

const direct = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING),
	refillMode: REFILL_DIRECT
});
assertClose('direct reuse markup 0', direct.opex.refillMarkup, 0);
assertClose('direct reuse still subtracts virgin', direct.opex.virginSavings, 5);

console.log('All V4.3 golden tests passed');

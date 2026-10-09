import {
	calculate,
	comparePathways,
	excelDefaults,
	SECTOR_COMMERCIAL,
	SECTOR_RESIDENTIAL,
	PATHWAY_RECYCLING,
	PATHWAY_DESTRUCTION,
	PATHWAY_RECLAMATION,
	MACHINE_BASIC,
	MACHINE_HIGH,
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

/** Workbook V5.0 Model D-column snapshot (Residential / Destruction / Retrofit / Medium). */
const workbookResDest = {
	sector: SECTOR_RESIDENTIAL,
	pathway: PATHWAY_DESTRUCTION,
	chargeSizeKg: 1,
	recoverablePct: 50,
	machineType: MACHINE_BASIC,
	recoveryHoursPerUnit: 0.5,
	labourPerHour: 10,
	unitsPerDay: 100,
	daysPerYear: 250,
	teams: 5,
	travelKmPerTeam: 100,
	fuelEfficiencyKmPerL: 8.5,
	fuelPricePerL: 1.5,
	warehousePerMonth: 1000,
	tmsCost: 50000,
	destructionTech: 'Rotary',
	facilityStatus: 'Retrofit',
	location: 'In-country',
	salePrice: 5,
	virginPrice: 5,
	mix: { r32: 38, r410a: 50, r22: 12 },
	costScenarioOverride: 'Medium'
};

const wb = calculate(workbookResDest);
const i = wb.inputs;
const o = wb.opex;
const c = wb.capex;

assertEq('wb availablePerUnit', i.availablePerUnit, 0.5);
assertEq('wb unitsPerDay', i.unitsPerDay, 100);
assertEq('wb kgPerDay', i.kgPerDay, 50);
assertEq('wb unitsPerYear', i.unitsPerYear, 25000);
assertEq('wb annualKg', i.annualKg, 12500);
assertClose('wb labourPerUnit', i.labourPerUnit, 5);
assertClose('wb labourCostPerDay', i.labourCostPerDay, 500);
assertClose('wb fuelPerKm', i.fuelPerKm, 1.5 / 8.5);
assertClose('wb recoveryTransportPerDay', i.recoveryTransportPerDay, 100 * 5 * (1.5 / 8.5));
assertEq('wb costScenario', i.costScenario, 'Medium');

assertClose('wb labour opex C91', o.labour, 10);
assertClose('wb markup C92', o.refillMarkup, 0);
assertClose('wb recovery transport C93', o.recoveryTransport, 1.76);
assertClose('wb warehouse C94', o.warehouse, 0.96);
assertClose('wb central C95', o.central, 0.75);
assertClose('wb end-use transport C96', o.transport, 0.4);
assertClose('wb processing C97', o.processing, 7);
assertClose('wb gross C98', o.gross, 20.87);
assertClose('wb sale C99', o.saleCredit, 0);
assertClose('wb virgin C100', o.virginSavings, 0);
assertClose('wb net C101', o.net, 20.87);
assertClose('wb netPerYear C102', o.netPerYear, 260875);

assertEq('wb basic machines C103', c.machinesBasic.units, 5);
assertClose('wb basic machines C104', c.machinesBasic.cost, 5000);
assertEq('wb acc basic C105', c.accessoriesBasic.units, 5);
assertClose('wb acc basic C106', c.accessoriesBasic.cost, 7500);
assertEq('wb pump-down omitted', c.accessoriesPumpdown.hidden, true);
assertEq('wb high machines C109', c.machinesHigh.units, 0);
assertEq('wb 12L C113', c.cylinders12L.units, 292);
assertClose('wb 12L C114', c.cylinders12L.cost, 73000);
assertEq('wb 60L C115', c.cylinders60L.units, 25);
assertClose('wb 60L C116', c.cylinders60L.cost, 8750);
assertEq('wb identifiers C118', c.identifiers.units, 5);
assertClose('wb identifiers C119', c.identifiers.cost, 50000);
assertEq('wb ton tanks C120', c.tonTanks.units, 11);
assertClose('wb ton tanks C121', c.tonTanks.cost, 55000);
assertClose('wb tms C123', c.tracking.cost, 50000);
assertClose('wb recovery capex C124', c.recoveryTotal, 249250);
assertEq('wb facility units C125', c.facility.units, 1);
assertClose('wb facility C126', c.facility.cost, 200000);
assertClose('wb admin C127', c.admin.cost, 10000);
assertClose('wb dr capex C132', c.drTotal, 210000);
assertClose('wb total capex C133', c.total, 459250);
assertClose('wb blended GWP C134', wb.climate.blendedGwp, 1656.18);
assertClose('wb emissions C135', wb.climate.emissionsAvoidedT, 20702.25);
assertClose('wb cost per tCO2e C136', wb.climate.costPerTco2e, 12.6);

const resHigh = calculate({ ...workbookResDest, machineType: MACHINE_HIGH });
assertEq('res high basic machines 0', resHigh.capex.machinesBasic.units, 0);
assertEq('res high acc basic still teams', resHigh.capex.accessoriesBasic.units, 5);
assertEq('res high machines ROUNDUP(annual/10000)', resHigh.capex.machinesHigh.units, 2);
assertEq('res high acc high follow machines', resHigh.capex.accessoriesHigh.units, 2);

const rec = calculate(excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING));
assertEq('comm availablePerUnit', rec.inputs.availablePerUnit, 80);
assertEq('comm annualKg', rec.inputs.annualKg, 6000);
assertClose('comm labourPerUnit hours×rate', rec.inputs.labourPerUnit, 20 * 0.5);
assertEq('comm refill always cleaning', rec.inputs.refillMode, REFILL_CLEANING);
assertClose('comm labour opex', rec.opex.labour, 0.13);
assertClose('comm recycling markup 50% of labour', rec.opex.refillMarkup, 0.07);
assertClose('comm recovery transport', rec.opex.recoveryTransport, 0.22);
assertClose('comm warehouse', rec.opex.warehouse, 2);
assertClose('comm central', rec.opex.central, 0.75);
assertClose('comm transport recycling', rec.opex.transport, 0);
assertClose('comm processing recycling', rec.opex.processing, 0);
assertClose('comm gross', rec.opex.gross, 3.17);
assertClose('comm virginSavings', rec.opex.virginSavings, 5);
assertClose('comm net', rec.opex.net, -1.83);
assertEq('comm high machines = teams', rec.capex.machinesHigh.units, 1);
assertClose('comm recycling high equipment 20k', rec.capex.machinesHigh.cost, 20000);
assertEq('comm 12L 30% split', rec.capex.cylinders12L.units, 60);
assertEq('comm 60L 70% split', rec.capex.cylinders60L.units, 28);
assertClose('comm recovery capex', rec.capex.recoveryTotal, 134300);
assertClose('comm dr recycling', rec.capex.drTotal, 0);

const dest = calculate({ ...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION) });
assertClose('destruction processing', dest.opex.processing, 7);
assertClose('destruction transport', dest.opex.transport, 0.4);
assertClose('destruction high machines recovery price', dest.capex.machinesHigh.cost, 20000);
assertClose('destruction retrofit facility', dest.capex.facility.cost, 200000);
assertEq('destruction facility units', dest.capex.facility.units, 1);
assertClose('destruction admin', dest.capex.admin.cost, 10000);
assertClose('destruction total capex', dest.capex.total, 344300);

const destNew = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	facilityStatus: 'New'
});
assertClose('new rotary facility', destNew.capex.facility.cost, 3500000);

const reclaim = calculate({ ...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECLAMATION) });
assertClose('reclamation processing', reclaim.opex.processing, 8.5);
assertClose('reclamation sale credit default 5', reclaim.opex.saleCredit, 5);
assertEq('reclamation retrofit na', reclaim.capex.facility.na, true);
assertEq('reclamation operators units', reclaim.capex.operators.units, 3);
assertClose('reclamation operators cost', reclaim.capex.operators.cost, 1875);
assertClose('reclamation gc', reclaim.capex.gcLab.cost, 225000);

const na = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	destructionTech: 'Plasma Arc',
	facilityStatus: 'Retrofit'
});
assertEq('plasma retrofit na', na.capex.facility.na, true);
assertClose('plasma processing medium', na.opex.processing, 6.5);

const res = calculate({
	...excelDefaults(SECTOR_RESIDENTIAL, PATHWAY_DESTRUCTION),
	costScenarioOverride: 'Medium'
});
assertEq('res default available', res.inputs.availablePerUnit, 0.5);
assertEq('res default annualKg 40×200×0.5', res.inputs.annualKg, 4000);
assertEq('res auto High', res.inputs.autoScenario, 'High');
assertEq('res basic machines follow teams', res.capex.machinesBasic.units, 5);
assertClose('res labour opex', res.opex.labour, 10);
assertClose('res recovery transport', res.opex.recoveryTransport, 4.41);
assertClose('res warehouse', res.opex.warehouse, 3);
assertClose('res central override Medium', res.opex.central, 0.75);
assertEq('res 12L 70% split', res.capex.cylinders12L.units, 94);
assertEq('res 60L 30% split', res.capex.cylinders60L.units, 8);

const capped = calculate({
	...excelDefaults(SECTOR_RESIDENTIAL, PATHWAY_DESTRUCTION),
	chargeSizeKg: 12
});
assertEq('residential charge cap', capped.inputs.chargeSizeKg, 5);
assertEq('charge capped flag', capped.warnings.chargeCapped, true);
assertEq('residential no recycling compare', comparePathways(capped.inputs).Recycling, null);

const retrofitCompare = comparePathways({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	facilityStatus: 'Retrofit',
	destructionTech: 'Rotary'
});
assertEq('rotary retrofit destruction facility ok', retrofitCompare.Destruction.facilityNa, false);
assertEq('reclamation retrofit facility na in compare', retrofitCompare.Reclamation.facilityNa, true);
assertEq('recycling compare still present commercially', Boolean(retrofitCompare.Recycling), true);

const plasmaCompare = comparePathways({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_DESTRUCTION),
	facilityStatus: 'Retrofit',
	destructionTech: 'Plasma Arc'
});
assertEq('plasma retrofit destruction facility na', plasmaCompare.Destruction.facilityNa, true);

const mixBad = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING),
	mix: { r32: 10, r410a: 10, r22: 10 }
});
assertEq('mix invalid', mixBad.warnings.mixInvalid, true);

const labour = calculate({
	...excelDefaults(SECTOR_COMMERCIAL, PATHWAY_RECYCLING),
	recoveryHoursPerUnit: 2,
	labourPerHour: 20,
	fuelPricePerL: 1.7,
	fuelEfficiencyKmPerL: 8.5,
	travelKmPerTeam: 50,
	teams: 3
});
assertClose('hours × labour', labour.inputs.labourPerUnit, 40);
assertClose('transport × teams', labour.inputs.recoveryTransportPerDay, 50 * 3 * (1.7 / 8.5));

console.log('All V5.0 golden tests passed');

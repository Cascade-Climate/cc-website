/**
 * LRM Cost Model V2.3 — portable reimplementation of the Model sheet SUMPRODUCT logic.
 * Source: LRM Cost Model V2.3.xlsx (V2.3 Model + V2.3 Data Input).
 */
import data from './data.json';

const ROWS = data.rows;

/**
 * @param {(row: object) => boolean} pred
 * @returns {{ count: number, value: number }}
 */
function sumproduct(pred) {
	let count = 0;
	let value = 0;
	for (const row of ROWS) {
		if (pred(row)) {
			count += 1;
			value += row.cost;
		}
	}
	return { count, value };
}

/**
 * @param {{ count: number, value: number }} result
 * @param {string} [naLabel='NA']
 */
function line(result, naLabel = 'NA') {
	if (result.count === 0) {
		return { available: false, value: null, label: naLabel, count: 0 };
	}
	return { available: true, value: result.value, label: null, count: result.count };
}

/**
 * @param {object} sel
 * @returns {object}
 */
export function calculateCosts(sel) {
	const {
		geography,
		sector,
		endUse,
		technology,
		location,
		effort,
		costScenario,
		recoveryEquipment,
		facilityType
	} = sel;

	// G9 / C43–D43 — Recovery Opex
	const recovery = line(
		sumproduct(
			(r) =>
				r.stage === 'Recovery' &&
				r.capexOpex === 'Opex' &&
				r.geography === geography &&
				(r.scenario === costScenario || r.scenario === 'ANY') &&
				(r.effort === effort || r.effort === 'ANY') &&
				(r.sector === sector || r.sector === 'ANY')
		)
	);

	// G10 / C44–D44 — Transport (always Global rates)
	const transport = line(
		sumproduct(
			(r) =>
				String(r.stage).startsWith('Transport') &&
				r.capexOpex === 'Opex' &&
				r.geography === 'Global' &&
				r.variable === location &&
				(r.scenario === costScenario || r.scenario === 'ANY')
		)
	);

	// G11 / C45–D45 — Post-recovery processing
	let processing;
	if (endUse === 'Recycling') {
		processing = { available: false, value: null, label: 'Not Available', count: 0 };
	} else if (endUse === 'Reclamation') {
		processing = line(
			sumproduct(
				(r) =>
					r.stage === 'Reclamation' &&
					r.capexOpex === 'Opex' &&
					r.variable === 'Reclamation Cost' &&
					(r.scenario === costScenario || r.scenario === 'ANY')
			),
			'Not Available'
		);
	} else {
		processing = line(
			sumproduct(
				(r) =>
					r.stage === 'Destruction' &&
					r.capexOpex === 'Opex' &&
					r.geography === geography &&
					(r.variable === technology || r.variable === '') &&
					(r.scenario === costScenario || r.scenario === 'ANY')
			),
			'Not Available'
		);
	}

	const opexParts = [recovery, transport, processing];
	const opexTotal = opexParts.reduce((sum, p) => sum + (p.available ? p.value : 0), 0);

	// G16 / C46–D46 — Recovery equipment (NA when Recycling)
	let recoveryEquip;
	if (endUse === 'Recycling') {
		recoveryEquip = { available: false, value: null, label: 'NA', count: 0 };
	} else if (geography === 'Southeast Asia' && recoveryEquipment === 'Basic') {
		recoveryEquip = line(
			sumproduct(
				(r) =>
					r.stage === 'Recovery' &&
					r.geography === 'Southeast Asia' &&
					r.variable === 'Recovery Equipment (basic)'
			)
		);
	} else {
		const varname =
			recoveryEquipment === 'Basic'
				? 'Recovery Equipment (basic)'
				: 'Recovery Equipment (high capacity)';
		recoveryEquip = line(
			sumproduct(
				(r) =>
					r.stage === 'Recovery' &&
					r.geography === 'Global' &&
					r.variable === varname &&
					(r.scenario === costScenario || r.scenario === 'ANY')
			)
		);
	}

	// G17 / C53–D53 — Recovery + recycling machine (Recycling only; E96)
	let recyclingMachine;
	if (endUse === 'Recycling') {
		const recyclingRow = ROWS.find((r) => r.row === 96);
		recyclingMachine = {
			available: true,
			value: recyclingRow ? recyclingRow.cost : 0,
			label: null,
			count: 1
		};
	} else {
		recyclingMachine = { available: false, value: null, label: 'NA', count: 0 };
	}

	// G18 / C47–D47 — Refrigerant identifiers
	const identifiers = line(
		sumproduct((r) => r.stage === 'Recovery' && r.variable === 'Refrigerant Identifiers')
	);

	// G19 / C48–D48 — Recovery cylinders
	const cylinders = line(
		sumproduct((r) => r.stage === 'Recovery' && r.variable === 'Recovery Cylinders')
	);

	// G20 / C49–D49 — Facility
	let facility;
	if (endUse === 'Recycling') {
		facility = { available: false, value: null, label: 'NA', count: 0 };
	} else if (endUse === 'Reclamation') {
		if (facilityType === 'New Facility') {
			facility = line(
				sumproduct(
					(r) =>
						r.stage === 'Reclamation' &&
						r.variable === 'Reclamation Facility (New)' &&
						(r.scenario === costScenario || r.scenario === 'ANY')
				)
			);
		} else {
			facility = { available: false, value: null, label: 'NA', count: 0 };
		}
	} else {
		const varname = `${technology} (${facilityType})`;
		if (geography === 'Southeast Asia' && facilityType === 'Retrofit') {
			facility = line(
				sumproduct(
					(r) =>
						r.stage === 'Destruction' &&
						r.geography === 'Southeast Asia' &&
						r.variable === varname
				)
			);
		} else {
			facility = line(
				sumproduct(
					(r) =>
						r.stage === 'Destruction' &&
						r.geography === 'Global' &&
						r.variable === varname &&
						(r.scenario === costScenario || r.scenario === 'ANY')
				)
			);
		}
	}

	// G21 / C50–D50 — Reclamation training
	const training =
		endUse === 'Reclamation'
			? line(
					sumproduct(
						(r) =>
							r.stage === 'Reclamation' &&
							r.variable === 'Reclamation Training' &&
							(r.scenario === costScenario || r.scenario === 'ANY')
					)
				)
			: { available: false, value: null, label: 'NA', count: 0 };

	// G22 / C51–D51 — GC per analysis
	const gcAnalysis =
		endUse === 'Reclamation'
			? line(
					sumproduct(
						(r) =>
							r.stage === 'Reclamation' && r.variable === 'Gas Chromatography (Per Analysis)'
					)
				)
			: { available: false, value: null, label: 'NA', count: 0 };

	// G23 / C52–D52 — GC equipment
	const gcEquip =
		endUse === 'Reclamation'
			? line(
					sumproduct(
						(r) =>
							r.stage === 'Reclamation' &&
							r.variable === 'Gas Chromatography (Equipment)' &&
							(r.scenario === costScenario || r.scenario === 'ANY')
					)
				)
			: { available: false, value: null, label: 'NA', count: 0 };

	const capexParts = [
		recoveryEquip,
		recyclingMachine,
		identifiers,
		cylinders,
		facility,
		training,
		gcAnalysis,
		gcEquip
	];
	const capexTotal = capexParts.reduce((sum, p) => sum + (p.available ? p.value : 0), 0);

	return {
		recovery,
		transport,
		processing,
		opexTotal,
		recoveryEquip,
		recyclingMachine,
		identifiers,
		cylinders,
		facility,
		training,
		gcAnalysis,
		gcEquip,
		capexTotal
	};
}

export const MODEL_VERSION = data.version;

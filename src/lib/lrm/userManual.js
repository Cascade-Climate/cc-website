const UNITS = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.'
];

function startFor(key) {
	let n = 0;
	for (let i = 0; i < key.length; i += 1) n = (n + key.charCodeAt(i) * (i + 3)) % UNITS.length;
	return n;
}

/** Stable lorem paragraphs whose combined length is about `wordCount`. */
export function loremParagraphs(wordCount, key = 'manual') {
	const paras = [];
	let remaining = wordCount;
	let index = key === 'intro' || key === 'rail' ? 0 : startFor(key);
	while (remaining > 0) {
		const target = Math.min(remaining, remaining > 130 ? 90 : remaining);
		const chosen = [];
		let count = 0;
		while (count < target) {
			const sentence = UNITS[index % UNITS.length];
			const size = sentence.split(/\s+/).length;
			if (count > 0 && count + size > target + 8) break;
			chosen.push(sentence);
			count += size;
			index += 1;
		}
		if (!chosen.length) {
			chosen.push(UNITS[index % UNITS.length]);
			count = chosen[0].split(/\s+/).length;
			index += 1;
		}
		paras.push(chosen.join(' '));
		remaining -= count;
	}
	return paras;
}

function prose(words, key) {
	return { type: 'p', words, key };
}

function h3(id, title, nav = false) {
	return { type: 'h3', id, title, nav };
}

function h4(title) {
	return { type: 'h4', title };
}

function explained(id, title, words, key) {
	const what = Math.max(18, Math.round(words * 0.22));
	const how = Math.max(24, Math.round(words * 0.48));
	const notes = Math.max(16, words - what - how);
	return [
		h3(id, title),
		h4('What'),
		prose(what, `${key}-what`),
		h4('How it’s calculated'),
		prose(how, `${key}-how`),
		h4('Notes and assumptions'),
		prose(notes, `${key}-notes`)
	];
}

export const manualTitle = 'User Manual: Lifecycle Refrigerant Management Explorer';

export const introWords = 230;

export const sections = [
	{
		id: 'sector',
		number: '1',
		title: 'Sector and End-Use Pathway Selection',
		blocks: [
			prose(85, 'sector-lead'),
			h3('residential-ac', 'Residential AC'),
			prose(95, 'residential'),
			h3('commercial-hvac', 'Commercial HVAC'),
			prose(85, 'commercial'),
			prose(75, 'pathway-lead'),
			h3('destruction', 'Destruction'),
			prose(70, 'destruction'),
			h3('reclamation', 'Reclamation'),
			prose(85, 'reclamation'),
			h3('recycling', 'Recycling'),
			prose(115, 'recycling'),
			prose(40, 'sector-close')
		]
	},
	{
		id: 'inputs',
		number: '2',
		title: 'Input Table',
		blocks: [
			prose(45, 'inputs-lead'),
			h3('recovery', 'Recovery', true),
			prose(75, 'recovery-lead'),
			h4('Default Values'),
			prose(80, 'defaults'),
			h4(
				'Average equipment charge size per unit (kg) and estimated percent of recoverable refrigerant per unit (%)'
			),
			prose(280, 'charge'),
			h4('Recovery Machine Type'),
			prose(20, 'machine-lead'),
			h4('Basic'),
			prose(70, 'basic'),
			h4('High Capacity'),
			prose(65, 'high-capacity'),
			h4(
				'Estimated time needed for recovery per unit (hours) and hourly labour cost rate per unit (USD/hour)'
			),
			prose(220, 'time-labor'),
			h4('Average number of units recovered per day'),
			prose(28, 'units-day'),
			h4('Fuel efficiency of vehicle used (km/L) and fuel price (USD/L)'),
			prose(55, 'fuel'),
			h4('Number of recovery teams mobilized per day'),
			prose(60, 'teams'),
			h4('Average distance travelled per team (km/day)'),
			prose(115, 'distance'),
			h4('Estimated number of recovery days per year'),
			prose(35, 'days'),
			h3('central-facility', 'Central Facility and Monitoring', true),
			h4('Central facility warehouse storage (USD per month)'),
			prose(50, 'warehouse'),
			h4('Tracking & Monitoring System (USD)'),
			prose(55, 'tracking-input'),
			h4('Cost scenario'),
			prose(420, 'scenario'),
			h3('end-use-inputs', 'End-use pathway-specific inputs', true),
			prose(55, 'end-use-lead'),
			h4('Facility Status (New, Retrofit, Existing)'),
			prose(140, 'status'),
			h4('Facility Location (In-country/Exported)'),
			prose(115, 'location'),
			h4(
				'Blended sale price of reclaimed refrigerants (USD/kg) and price of virgin refrigerant avoided (USD/kg)'
			),
			prose(220, 'prices'),
			h3('refrigerant-mix', 'Refrigerant Mix', true),
			prose(200, 'mix')
		]
	},
	{
		id: 'outputs',
		number: '3',
		title: 'Output Table',
		blocks: [
			prose(280, 'outputs-lead'),
			h3('cost-scenarios-note', 'A Note on Average Value Estimates and Cost Scenarios'),
			prose(330, 'scenario-note'),
			h3('opex', 'Operational Expenditure', true),
			prose(24, 'opex-lead'),
			...explained('recovery-labor', 'Recovery Labor Cost', 230, 'labor'),
			...explained('recovery-transport', 'Recovery Transportation Cost', 185, 'transport'),
			...explained('central-facility-costs', 'Central Facility Costs', 170, 'central-cost'),
			...explained(
				'transport-end-use',
				'Transport & Handling to End-Use Facility',
				165,
				'end-use-transport'
			),
			...explained('post-recovery', 'Post-Recovery Processing', 260, 'processing'),
			h3('total-net-opex', 'Total Net Opex (USD/kg) & Total Net Opex per annum (USD)'),
			prose(130, 'net-opex'),
			h3('capex', 'Capital Expenditure', true),
			prose(18, 'capex-lead'),
			h3('recovery-equipment', 'Recovery Equipment'),
			h4('What'),
			prose(70, 'equip-what'),
			h4('How it’s calculated'),
			prose(40, 'equip-how'),
			h4('Recovery machines'),
			prose(180, 'machines'),
			h4('Recovery accessories'),
			prose(160, 'accessories'),
			h4('Recovery cylinders and tonne tanks'),
			prose(340, 'cylinders'),
			h4('Refrigerant Identifiers'),
			prose(70, 'identifiers'),
			h4('Notes and assumptions'),
			prose(220, 'equip-notes'),
			...explained('tracking-capex', 'Tracking and monitoring system', 48, 'tracking-capex'),
			...explained(
				'facility-capex',
				'Destruction or Reclamation Facility',
				470,
				'facility-capex'
			),
			...explained('admin-licensing', 'Admin and licensing', 75, 'admin'),
			h3('total-capex', 'Total Capex (USD)'),
			prose(28, 'total-capex')
		]
	},
	{
		id: 'comparison',
		number: '4',
		title: 'Pathway Comparison Charts',
		blocks: [prose(230, 'comparison')]
	}
];

export const navItems = sections.flatMap((section) => {
	const items = [{ id: section.id, title: section.title, sub: false }];
	for (const block of section.blocks) {
		if (block.type === 'h3' && block.nav) items.push({ id: block.id, title: block.title, sub: true });
	}
	return items;
});

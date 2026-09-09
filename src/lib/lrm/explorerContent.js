/** Dummy copy and layouts for the unlisted LRM explorer. Swap later. */

export const TABS = [
	{ id: 'intro', label: 'Intro' },
	{ id: 'tool', label: 'Tool' },
	{ id: 'takeaways', label: 'Takeaways' },
	{ id: 'cost-stack', label: 'Cost stack' },
	{ id: 'glossary', label: 'Glossary' }
];

export const TAB_IDS = TABS.map((t) => t.id);

export const JOURNEY_PHOTOS = {
	recovery: '/images/blog/lrm-journey/recovery.png',
	transport: '/images/blog/lrm-journey/transport.png',
	processing: '/images/blog/lrm-journey/processing.png',
	equipment: '/images/blog/lrm-journey/equipment.png',
	facilities: '/images/blog/lrm-journey/facilities.png',
	finance: '/images/blog/lrm-journey/finance.png',
	panorama: '/images/blog/lrm-journey/lifecycle-panorama.png'
};

export const intro = {
	headline: 'What does it actually cost to manage refrigerants?',
	lede: 'Lifecycle refrigerant management has a physical cost stack — recovery, transport, processing, equipment, and facilities — and a thinner public record of who pays. This explorer walks that system, then opens the V2.3 cost model.',
	exploreCue: 'Explore the lifecycle',
	image: {
		src: JOURNEY_PHOTOS.panorama,
		alt: 'One documentary scene of refrigerant recovery on the left, cylinder loading and a truck in the center, and processing infrastructure on the right.'
	},
	steps: [
		{
			id: 'recovery',
			number: '01',
			title: 'Recovery starts the cost stack',
			copy: 'The stack starts in the field: a technician, a recovery machine, and cylinders. Labor and handling often dominate operational cost per kilogram. Geography and effort level — urban versus rural — change that line before anything is processed.',
			camera: {
				desktop: { scale: 1.38, x: 24, y: 6 },
				mobile: { scale: 2.05, x: 36, y: 8 }
			},
			nextLabel: 'Follow the refrigerant',
			prevLabel: null,
			nextRegionLabel: 'Follow the refrigerant into transport and processing',
			financeOverlay: false
		},
		{
			id: 'movement',
			number: '02',
			title: 'Geography and pathway change the economics',
			copy: 'Once recovered, refrigerant has to move and then be recycled, reclaimed, or destroyed. In-country versus export, and which end-use you choose, change transport and processing costs. Equipment and facilities enable those activities; they are not a later chapter of the same journey.',
			camera: {
				desktop: { scale: 1.34, x: -16, y: 4 },
				mobile: { scale: 1.78, x: -12, y: 6 }
			},
			nextLabel: 'Who pays?',
			prevLabel: 'Back to recovery',
			nextRegionLabel: 'Who pays? Show financing across the lifecycle',
			prevRegionLabel: 'Back to recovery',
			financeOverlay: false
		},
		{
			id: 'finance',
			number: '03',
			title: 'Financing has to connect the stack',
			copy: 'Finance is not a sixth physical stage. Technician incentives, EPR, public support, concessional capital, and carbon finance sit across recovery, movement, and processing — sometimes covering several lines at once, and sometimes covering none of them well.',
			camera: {
				desktop: { scale: 1.04, x: 0, y: 0 },
				mobile: { scale: 1.12, x: 0, y: 2 }
			},
			nextLabel: 'Build a scenario',
			prevLabel: 'Back',
			prevRegionLabel: 'Back to movement and processing',
			nextIsTool: true,
			financeOverlay: true
		}
	]
};

export const takeaways = {
	heading: 'What did the cost research find?',
	intro: 'Five findings from the cost work. Click a photograph for a longer note. Dummy copy — not final results.',
	spots: [
		{
			id: 'recovery-opex',
			title: 'Recovery dominates opex',
			kicker: 'Recovery opex',
			photo: JOURNEY_PHOTOS.recovery,
			photoAlt: 'Technician recovering refrigerant from an outdoor condensing unit.',
			paragraphs: [
				'Placeholder. In many modeled pathways, recovery labor and handling are the largest slice of operational cost per kilogram. That is a dummy claim for layout, not a V2.3 result to quote.',
				'A finished takeaway would explain when recovery opex moves with geography, effort level (urban vs rural), and equipment class, and would point back to the Tool so a reader can test the same levers.',
				'Use this card to judge whether a modal this long is readable: heading, two or three short paragraphs, then Previous / Next or the jump list.'
			]
		},
		{
			id: 'rural-premium',
			title: 'Rural effort carries a premium',
			kicker: 'Rural premium',
			photo: JOURNEY_PHOTOS.transport,
			photoAlt: 'Refrigerant cylinders packed in a truck cargo bay.',
			paragraphs: [
				'Placeholder. Effort level (urban vs rural) is a first-class input in V2.3. A finished takeaway would say where that premium shows up in opex versus capex, and where the workbook simply has no row.',
				'This shorter card is here so we can see a mix of lengths in the same modal sequence.'
			]
		},
		{
			id: 'end-use-spread',
			title: 'Destruction, reclamation, and recycling do not cost the same',
			kicker: 'End-use spread',
			photo: JOURNEY_PHOTOS.processing,
			photoAlt: 'Stainless tanks and piping inside a reclamation plant.',
			paragraphs: [
				'Placeholder. End-use of recovered refrigerant changes which processing and facility lines light up. Recycling, reclamation, and destruction should not be read as interchangeable unit costs.',
				'Later copy can send the reader to the Tool with a suggested scenario, and to Cost stack for how each line might be financed.'
			]
		},
		{
			id: 'capex-lumpy',
			title: 'Capex is lumpy',
			kicker: 'Lumpy capex',
			photo: JOURNEY_PHOTOS.equipment,
			photoAlt: 'A refrigerant recovery machine with gauges and cylinders.',
			paragraphs: [
				'Placeholder. Capital costs in the workbook land in a few large lines — recovery machines, cylinders, identifiers, and (for some end-uses) facilities — rather than spreading evenly across the stack.',
				'A real note would distinguish equipment that scales with a service network from facilities that only appear under destruction or reclamation, and would flag NA cells the way the Tool already does.',
				'Dummy paragraph three: keep the modal tall enough that jumping between spots still feels like reading, not scanning a tooltip.'
			]
		},
		{
			id: 'data-gaps',
			title: 'Gaps in the workbook are part of the result',
			kicker: 'Data gaps',
			photo: JOURNEY_PHOTOS.facilities,
			photoAlt: 'Exterior of a large industrial reclamation or destruction plant.',
			paragraphs: [
				'Placeholder. NA / Not Available in the Tool means the combination has no figure in V2.3, and those lines are excluded from totals. That is a finding about evidence, not a zero cost.',
				'A finished takeaway would list the combinations that most often go dark (for example certain geographies or facility types) and would avoid filling holes with invented numbers.',
				'Dummy close: treat Facilities as the “read the caveats” hotspot on the takeaways map.'
			]
		}
	]
};

export const costStack = {
	heading: 'What activities generate LRM costs?',
	intro: 'Recovery, transport, and processing are the physical stack. Equipment and facilities enable those activities. Financing sits across them — it is not the next stop after facilities.',
	spots: [
		{
			id: 'recovery',
			title: 'Recovery',
			kicker: 'Recovery',
			group: 'activity',
			photo: JOURNEY_PHOTOS.recovery,
			photoAlt: 'Technician recovering refrigerant from an outdoor condensing unit.',
			paragraphs: [
				'Placeholder. Recovery is the field activity that gets refrigerant out of equipment and into a controlled cylinder. Financing questions here are often about technician time, collection points, and who pays for the first kilogram.',
				'A real card would separate opex (labor, leak-tight practice) from small capex (basic vs high-capacity kits) and would note which public or producer-pay models have covered this line elsewhere.',
				'Dummy text so the modal has enough body to scroll slightly on a laptop.'
			]
		},
		{
			id: 'transport',
			title: 'Transport and handling',
			kicker: 'Transport',
			group: 'activity',
			photo: JOURNEY_PHOTOS.transport,
			photoAlt: 'Refrigerant cylinders packed in a truck cargo bay.',
			paragraphs: [
				'Placeholder. Once recovered, gas has to move — in-country or across a border — without becoming an informal leak pathway. Transport cost and risk are not the same problem.',
				'Finished copy would flag export versus in-country as a Tool lever, and would ask which finance instruments can pay for logistics without paying for leakage.',
				'Another dummy paragraph for length.'
			]
		},
		{
			id: 'processing',
			title: 'Post-recovery processing',
			kicker: 'Processing',
			group: 'activity',
			photo: JOURNEY_PHOTOS.processing,
			photoAlt: 'Stainless tanks and piping inside a reclamation plant.',
			paragraphs: [
				'Placeholder. Processing is the opex of turning recovered refrigerant into a destroyed, reclaimed, or recycled outcome. It is where end-use choice shows up most clearly in the unit cost.',
				'A later version can map processing lines to specific mechanisms (destruction credits, reclamation offtake, service-shop recycling) without pretending the workbook already does that.'
			]
		},
		{
			id: 'equipment',
			title: 'Recovery equipment and kits',
			kicker: 'Equipment',
			group: 'enabler',
			photo: JOURNEY_PHOTOS.equipment,
			photoAlt: 'A refrigerant recovery machine with gauges and cylinders.',
			paragraphs: [
				'Placeholder. Identifiers, cylinders, and recovery machines are lumpy purchases. They are easier to put in a grant or concessional-capex envelope than ongoing recovery labor is.',
				'Dummy note: this card is the stand-in for “who owns the kit, who maintains it, who replaces it.”'
			]
		},
		{
			id: 'facilities',
			title: 'Facilities',
			kicker: 'Facilities',
			group: 'enabler',
			photo: JOURNEY_PHOTOS.facilities,
			photoAlt: 'Exterior of a large industrial reclamation or destruction plant.',
			paragraphs: [
				'Placeholder. Destruction and reclamation facilities (new or retrofit) are the largest single capital lines when they appear. Recycling pathways often have no facility figure at all.',
				'Finished copy would treat facility finance as a different problem from network equipment: fewer buyers, longer tenor, more policy conditionality.',
				'Dummy third paragraph for modal height.'
			]
		}
	],
	financeLayer: {
		kicker: 'Financing across the stack',
		heading: 'Not a sixth physical stage',
		intro: 'These instruments can pay across recovery, transport, and processing at once — or fail across all of them at once. They are a layer on the cost stack, not the next site on the path.',
		photo: JOURNEY_PHOTOS.finance,
		photoAlt: 'Policy papers, a finance meeting, and data screens.',
		paragraphs: [
			'Placeholder. Extended producer responsibility, carbon finance, and public budget support do not sit on a single cost line. Real copy would say which mechanisms are load-bearing for which lines, and which only work after policy is in place.',
			'Until then, this is dummy prose so the financing layer can be read as distinct from the five physical photographs above.'
		],
		instruments: [
			{
				term: 'Technician incentives',
				note: 'Per-job or per-kilogram payments for recovery instead of venting. Often a complement to equipment grants.'
			},
			{
				term: 'EPR',
				note: 'Producer or importer duty to finance take-back, recovery, or end-of-life management across several stack lines.'
			},
			{
				term: 'Public / MLF-style support',
				note: 'Direct public or multilateral grant lines for enabling activities and, sometimes, unit costs.'
			},
			{
				term: 'Concessional capital',
				note: 'Below-market capital for lumpy equipment and facilities more than for ongoing technician opex.'
			},
			{
				term: 'Carbon finance',
				note: 'Revenue tied to verified destruction or recovery. Typically stronger on a destruction line than on a national service network.'
			},
			{
				term: 'Offtake / purchase agreements',
				note: 'A buyer commitment for reclaimed refrigerant that can underwrite reclamation opex.'
			}
		]
	}
};

export const glossary = {
	heading: 'Glossary',
	intro: 'Dummy definitions for layout. Not a legal or program glossary.',
	entries: [
		{
			term: 'Extended producer responsibility (EPR)',
			definition:
				'Placeholder. A policy that assigns producers (or importers) a duty to finance take-back, recovery, or end-of-life management. In an LRM stack, EPR is often discussed as a way to pay recovery and processing without relying only on carbon buyers.'
		},
		{
			term: 'Carbon finance / destruction credits',
			definition:
				'Placeholder. Revenue tied to verified destruction (or sometimes recovery) of high-GWP gases. Dummy text: typically better at paying a destruction line than at standing up a national service network on its own.'
		},
		{
			term: 'Concessional capex / blended finance',
			definition:
				'Placeholder. Below-market capital used to buy equipment or facilities. Easier to attach to lumpy kit and plants than to ongoing technician opex. This sentence is filler so the entry has a second beat.'
		},
		{
			term: 'Results-based finance',
			definition:
				'Placeholder. Payment on delivery of a verified kilogram recovered, reclaimed, or destroyed. Dummy note: shifts performance risk to the operator and needs a measurement system the Tool does not provide.'
		},
		{
			term: 'Public budget / MLF-style support',
			definition:
				'Placeholder. Direct public or multilateral grant and support lines. In real copy this would distinguish enabling activities (training, standards) from paying the unit cost of destruction.'
		},
		{
			term: 'Offtake / reclaimed-gas offtake',
			definition:
				'Placeholder. A buyer commitment for reclaimed refrigerant that can underwrite reclamation opex. Dummy: without offtake, reclamation looks like a cost center even when the capex exists.'
		},
		{
			term: 'Technician incentives',
			definition:
				'Placeholder. Per-job or per-kilogram payments to service technicians for recovery instead of venting. Often a complement to equipment grants, not a substitute. Filler sentence for length.'
		},
		{
			term: 'Chain-of-custody / MRV as a cost',
			definition:
				'Placeholder. Tracking, testing, and verification are not free. Treat MRV as part of the stack (and of carbon or results-based deals), not as an overlay that appears after the costs are “done.”'
		}
	]
};

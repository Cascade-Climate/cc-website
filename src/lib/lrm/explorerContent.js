/** Dummy copy and layouts for the unlisted LRM explorer. Swap later. */

export const TABS = [
	{ id: 'intro', label: 'Intro' },
	{ id: 'takeaways', label: 'Takeaways' },
	{ id: 'cost-stack', label: 'Cost stack' },
	{ id: 'tool', label: 'Tool' },
	{ id: 'glossary', label: 'Glossary' }
];

export const TAB_IDS = TABS.map((t) => t.id);

export const EXPLORER_PATH = '/blog/lrm/test/two';

export function explorerIntroUrl() {
	const origin = typeof window !== 'undefined' ? window.location.origin : '';
	return `${origin}${EXPLORER_PATH}#intro`;
}

export const JOURNEY_PHOTOS = {
	recovery: '/images/blog/lrm-journey/recovery.png',
	transport: '/images/blog/lrm-journey/transport.png',
	processing: '/images/blog/lrm-journey/processing.png',
	equipment: '/images/blog/lrm-journey/equipment.png',
	facilities: '/images/blog/lrm-journey/facilities.png',
	finance: '/images/blog/lrm-journey/finance.png',
	panorama: '/images/blog/lrm-journey/lifecycle-panorama.png',
	introPlant: '/images/blog/lrm-journey/intro-plant.jpg'
};

export const intro = {
	headlineKicker: 'Use the roadmap',
	headline: 'What does it actually cost to manage refrigerants?',
	lede: [
		'Lifecycle refrigerant management is a deceptively complex climate solution: its impact depends on making the full chain — from recovery to reclamation or destruction — work economically, with each step adding steep and sometimes hidden costs.',
		'This tool leverages our recent cost report to shed light on how capex and opex inform the cost stack in Southeast Asia and globally, and available financing pathways. You can also build scenarios to see estimated costs across the stack.'
	],
	reportCta: 'Read the report',
	exploreCue: 'Learn what we found about costs and financing.',
	clickCue: 'Scroll to continue',
	toolCta: 'Explore our tool to see how opex and capex informs the cost stack',
	depth: {
		kicker: 'About this work',
		heading: 'What this explorer is for',
		lede: 'Dummy copy for a page-length panel. Swap later with the real explanation of the report, the V2.3 tool, and why Cascade built this.',
		sections: [
			{
				title: 'The report',
				paragraphs: [
					'Placeholder. The underlying cost research is an attempt to put numbers on lifecycle refrigerant management — recovery, transport, processing, equipment, and facilities — in places where the public record of unit costs is thin. Dummy text: it is a cost stack, not a full market study, and it is not a substitute for a national inventory.',
					'A finished version of this panel would say what the report covers, what it leaves out, and how a reader should treat NA cells: missing evidence, not a zero. It would also say how the dummy figures in this explorer relate to the published workbook.',
					'Dummy paragraph three: geography, effort level, end-use, and equipment class are the levers the research treats as first-class. Financing is discussed as a layer across those lines, not as a sixth physical stage after facilities.'
				]
			},
			{
				title: 'The tool',
				paragraphs: [
					'Placeholder. The Tool tab is the V2.3 cost model in the browser. Change geography, pathway, and equipment; it returns operational cost in USD/kg and capital cost in USD, with NA where the workbook has no figure. Dummy copy: totals exclude NA rows the same way the spreadsheet does.',
					'Use it to test how opex and capex move when you change end-use (recycling, reclamation, destruction), in-country versus export, and basic versus high-capacity kits. Dummy: refrigerant class does not change costs in V2.3 — source data is classified as Both.',
					'Dummy paragraph three: this explorer is for orientation, not formal decision-making. A later note can send a reader from a takeaway or a cost-stack card into a suggested scenario in the Tool.'
				]
			},
			{
				title: 'Why Cascade built this',
				paragraphs: [
					'Placeholder. Cascade’s refrigerant work is about making the cost of managing the gas visible enough that financing and policy can attach to real activities — technician time, cylinders, plants — instead of to a slogan. Dummy text: the field still lacks a shared, public picture of what LRM actually costs.',
					'This unlisted prototype is a companion to that research: a way to walk the physical stack, sit with the gaps, and open the same workbook the report is built on. Dummy: it is not a deployment platform, and it is not a claim that every line can be paid by carbon finance.',
					'Dummy paragraph three: the point of putting the model next to the story is so a reader can move from “recovery is expensive in the field” to a scenario they can change, then back to how those lines might be financed. Swap this copy when the real rationale is ready.'
				]
			}
		]
	},
	image: {
		src: JOURNEY_PHOTOS.introPlant,
		alt: 'A worker walks down a factory aisle between production equipment and racks of parts, toward a bright opening at the far end of the plant.'
	},
	steps: [
		{
			id: 'recovery',
			number: '01',
			title: 'Recovery starts the cost stack',
			copy: 'The stack starts in the field: a technician, a recovery machine, and cylinders. Labor and handling often dominate operational cost per kilogram. Geography and effort level — urban versus rural — change that line before anything is processed.',
			image: JOURNEY_PHOTOS.introPlant,
			imageAlt:
				'A worker walks down a factory aisle between production equipment and racks of parts, toward a bright opening at the far end of the plant.'
		},
		{
			id: 'movement',
			number: '02',
			title: 'Geography and pathway change the economics',
			copy: 'Once recovered, refrigerant has to move and then be recycled, reclaimed, or destroyed. In-country versus export, and which end-use you choose, change transport and processing costs. Equipment and facilities enable those activities; they are not a later chapter of the same journey.',
			image: JOURNEY_PHOTOS.introPlant,
			imageAlt:
				'A worker walks down a factory aisle between production equipment and racks of parts, toward a bright opening at the far end of the plant.'
		},
		{
			id: 'finance',
			number: '03',
			title: 'Financing has to connect the stack',
			copy: 'Finance is not a sixth physical stage. Technician incentives, EPR, public support, concessional capital, and carbon finance sit across recovery, movement, and processing — sometimes covering several lines at once, and sometimes covering none of them well.',
			image: JOURNEY_PHOTOS.introPlant,
			imageAlt:
				'A worker walks down a factory aisle between production equipment and racks of parts, toward a bright opening at the far end of the plant.'
		}
	]
};

export const takeaways = {
	heading: 'What did the cost research find?',
	intro: 'Five findings from the cost work. Click a photograph for a longer note. Dummy copy — not final results.',
	spots: [
		{
			id: 'recovery-opex',
			title: 'Recovery',
			kicker: 'Recovery',
			photo: JOURNEY_PHOTOS.recovery,
			photoAlt: 'Technician recovering refrigerant from an outdoor condensing unit.',
			paragraphs: [
				'Placeholder. Recovery is the field activity that gets refrigerant out of equipment and into a controlled cylinder. In many modeled pathways, labor and handling are the largest slice of operational cost per kilogram. That is dummy copy for layout, not a V2.3 result to quote.',
				'A finished note would explain when recovery opex moves with geography, effort level (urban vs rural), and equipment class, and would point back to the Tool so a reader can test the same levers on a live scenario.',
				'Dummy paragraph three: collection points, technician time, and cylinder logistics often sit on this line before anything is transported or processed. Who pays for the first kilogram is a financing question as much as a cost question.',
				'Dummy paragraph four: use this card to judge whether a modal this long is readable — heading, four short paragraphs, then Previous / Next or the jump list — without feeling like a tooltip.'
			]
		},
		{
			id: 'rural-premium',
			title: 'Recycling',
			kicker: 'Recycling',
			photo: JOURNEY_PHOTOS.transport,
			photoAlt: 'Refrigerant cylinders packed in a truck cargo bay.',
			paragraphs: [
				'Placeholder. Recycling is one end-use of recovered refrigerant, often closer to the service shop than reclamation or destruction. Dummy copy: it should not be read as interchangeable with those other pathways on a unit-cost basis.',
				'A finished takeaway would say which Tool levers light up under recycling — equipment kits, in-country movement, and which lines go NA — and would avoid filling holes with invented numbers.',
				'Dummy paragraph three: on-site recycling can look cheap per kilogram until recovery labor, cylinder handling, and quality limits are stacked back in. Geography and effort level still sit underneath this choice.',
				'Dummy paragraph four: later copy can send the reader to the Tool with a suggested recycling scenario, and to Cost stack for how this line might be financed without paying for leakage.'
			]
		},
		{
			id: 'end-use-spread',
			title: 'Reclamation',
			kicker: 'Reclamation',
			photo: JOURNEY_PHOTOS.processing,
			photoAlt: 'Stainless tanks and piping inside a reclamation plant.',
			paragraphs: [
				'Placeholder. Reclamation is the processing pathway that turns recovered refrigerant back into specification product. End-use choice changes which processing and facility lines light up; this is dummy prose for how that card should read.',
				'A finished note would separate reclamation opex from lumpy facility and testing capex, and would flag where the workbook has no figure rather than treating a blank as a zero.',
				'Dummy paragraph three: offtake, quality assurance, and contamination control are the kinds of issues a real card would raise, without pretending V2.3 already maps them to a finance instrument.',
				'Dummy paragraph four: keep this modal in the same length band as Recovery and Destruction so jumping the circle still feels like reading one note, not three different page types.'
			]
		},
		{
			id: 'capex-lumpy',
			title: 'Destruction',
			kicker: 'Destruction',
			photo: JOURNEY_PHOTOS.equipment,
			photoAlt: 'A refrigerant recovery machine with gauges and cylinders.',
			paragraphs: [
				'Placeholder. Destruction is the end-use that lights up processing technology and, in some cases, facility capital. Dummy claim: it is not a later chapter of recovery, and it does not cost the same as recycling or reclamation per kilogram.',
				'A finished takeaway would map destruction lines to the Tool’s technology and facility inputs, and would say where export versus in-country changes the stack before a kilogram is destroyed.',
				'Dummy paragraph three: high-integrity tracking, cross-border options, and who owns the residual risk are the kinds of financing questions that sit across this line rather than after it.',
				'Dummy paragraph four: NA cells still matter here. A missing destruction-facility figure is a finding about evidence, and those rows stay out of totals the way the Excel model already does.'
			]
		},
		{
			id: 'data-gaps',
			title: 'Capacity Building',
			kicker: 'Capacity Building',
			photo: JOURNEY_PHOTOS.facilities,
			photoAlt: 'Exterior of a large industrial reclamation or destruction plant.',
			paragraphs: [
				'Placeholder. Capacity building stands in for training, kits, identifiers, and the service network that make recovery and downstream processing possible. Dummy copy: this is not a sixth physical stage, and it is not free because it is labeled “enabling.”',
				'A finished note would distinguish equipment that scales with a technician network from facilities that only appear under destruction or reclamation, and would point to the Tool where those lines are already first-class inputs.',
				'Dummy paragraph three: public support, producer-pay models, and concessional capex often land here first because a grant can buy a machine more easily than it can buy ongoing recovery labor.',
				'Dummy paragraph four: treat this card as the “who trains, who owns the kit, who replaces it” hotspot, with enough body that Previous / Next still feels like moving through a short briefing.'
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
				'Placeholder. Recovery is the field activity that gets refrigerant out of equipment and into a controlled cylinder. Financing questions here are often about technician time, collection points, and who pays for the first kilogram. Dummy copy for layout — not a V2.3 result to quote.',
				'A real card would separate opex (labor, leak-tight practice, handling) from small capex (basic vs high-capacity kits) and would note which public or producer-pay models have covered this line elsewhere. Geography and effort level (urban vs rural) change this row before anything is processed.',
				'Dummy paragraph three: informal venting is the alternative to paid recovery. Incentives that only buy machines, without paying the job, often leave this line uncovered. Treat technician incentives as sitting on recovery, not as a later chapter.',
				'Dummy paragraph four: collection points, cylinder logistics, and leak-tight practice are part of the same activity even when they show up as different workbook rows. A finished note would point the reader to the Tool with a suggested recovery scenario.',
				'Dummy paragraph five: who owns the first kilogram — the technician, the service shop, a producer-pay scheme, or a public program — is a finance question that can cover this line or miss it entirely. EPR and public support sometimes land here; carbon finance usually does not, on its own.',
				'Dummy paragraph six: NA cells still matter. If a recovery-equipment or labor combination has no figure, that is a finding about evidence, not a zero cost. Those rows stay out of totals the way the Excel model already does.',
				'Dummy paragraph seven: use this modal to judge half-page length — heading, several short paragraphs, jump list, Previous / Next — without feeling like a tooltip or a full report chapter.'
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
				'Placeholder. Once recovered, gas has to move — in-country or across a border — without becoming an informal leak pathway. Transport cost and transport risk are not the same problem. Dummy copy for how this card should read.',
				'Finished copy would flag export versus in-country as a Tool lever, and would ask which finance instruments can pay for logistics without paying for leakage. Handling, cylinder exchange, and chain-of-custody sit on this line as much as freight does.',
				'Dummy paragraph three: rural effort often shows up here as distance, fewer return loads, and weaker cylinder logistics. Urban networks can still fail if there is no legal, leak-tight place for the gas to go.',
				'Dummy paragraph four: export pathways add documentation, ports, and residual liability. In-country pathways add depot density and trucking. Neither is “just shipping.”',
				'Dummy paragraph five: results-based or carbon deals that pay only at destruction can starve this middle of the stack. A grant that buys a destruction plant does not automatically move cylinders to the gate.',
				'Dummy paragraph six: MRV and chain-of-custody are not free overlays. Tracking, weighing, and testing belong in the transport-and-handling conversation if a buyer or regulator will later demand them.',
				'Dummy paragraph seven: dummy close so this card matches Recovery and Processing in length. Jumping the stack should feel like one briefing format, not five different page types.'
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
				'Placeholder. Processing is the opex of turning recovered refrigerant into a destroyed, reclaimed, or recycled outcome. It is where end-use choice shows up most clearly in the unit cost. Dummy claim: recycling, reclamation, and destruction are not interchangeable lines.',
				'A later version can map processing rows to specific mechanisms (destruction credits, reclamation offtake, service-shop recycling) without pretending the workbook already does that. Technology choice for destruction is a first-class Tool input when that end-use is selected.',
				'Dummy paragraph three: contamination, testing, and specification are the hidden opex of reclamation. Recycling can look cheap per kilogram until quality limits and handling are stacked back in.',
				'Dummy paragraph four: offtake for reclaimed product can underwrite this line; without it, reclamation looks like a cost center even when the plant exists. Destruction more often looks for a credit or a public mandate.',
				'Dummy paragraph five: NA still belongs on this card. A missing processing figure for a geography or end-use is a hole in the evidence, and the Tool already excludes those rows from totals.',
				'Dummy paragraph six: equipment and facilities enable processing; they are not a later chapter of the same journey. Dummy reminder: finance sits across this line rather than after it.',
				'Dummy paragraph seven: keep this modal in the same half-page band as the other stack cards so Previous / Next still feels like reading one note.'
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
				'Placeholder. Identifiers, cylinders, and recovery machines are lumpy purchases. They are easier to put in a grant or concessional-capex envelope than ongoing recovery labor is. Dummy copy: this card is the stand-in for “who owns the kit, who maintains it, who replaces it.”',
				'A finished note would distinguish basic versus high-capacity kits the way the Tool already does, and would say when identifiers and cylinders dominate a small-network capex total.',
				'Dummy paragraph three: equipment enables recovery, transport, and processing. It is not the next physical stage after facilities, and it is not free because it is labeled enabling.',
				'Dummy paragraph four: public support and concessional capital often land here first because a grant can buy a machine more easily than it can buy a decade of technician time. Producer-pay models sometimes cover kit as well as take-back.',
				'Dummy paragraph five: ownership matters. A machine sitting in a warehouse, a machine on a truck, and a machine that a freelance technician cannot access are three different cost stories with the same capex line.',
				'Dummy paragraph six: replacement cycles, spares, and calibration are the opex that dummy cards forget. A real version would not treat the purchase as the end of the equipment story.',
				'Dummy paragraph seven: dummy close for half-page height. Point the reader back to the Tool’s recovery-equipment input, and to financing as a layer rather than a sixth stop.'
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
				'Placeholder. Destruction and reclamation facilities (new or retrofit) are the largest single capital lines when they appear. Recycling pathways often have no facility figure at all. Dummy copy for layout, not a quote from V2.3.',
				'Finished copy would treat facility finance as a different problem from network equipment: fewer buyers, longer tenor, more policy conditionality. New versus retrofit is already a Tool input when the end-use needs a plant.',
				'Dummy paragraph three: a plant without a recovery and transport network is stranded capex. Dummy reminder: facilities enable processing; they do not replace the field activity that fills the gate.',
				'Dummy paragraph four: carbon finance and destruction credits are typically stronger on a facility-linked destruction line than on a national service network. Public or multilateral support sometimes underwrites the plant itself.',
				'Dummy paragraph five: NA is common here. Many geography and end-use combinations have no facility row. That is part of the result: do not fill it with a made-up number so the stack looks complete.',
				'Dummy paragraph six: permitting, utilities, and trained operators sit around the capex line even when the workbook does not itemize them. A later card can say so without inventing costs.',
				'Dummy paragraph seven: dummy close so Facilities matches the other four stack cards in length. Financing remains a layer across this line, not the next site after the chimney.'
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

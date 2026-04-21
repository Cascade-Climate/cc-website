/**
 * Case study cards for /blog/lrm-financing.
 *
 * — Copy: title, optional `subheader` (one line under title), and `body` (paragraphs separated by blank lines).
 * — Photos: set `imageSrc` to `/images/blog/your-file.png` (files in static/images/blog/).
 *   Leave `imageSrc` empty to keep the mint image placeholder visible while you swap assets.
 */
export const lrmFinancingCaseStudies = {
	voluntary: {
		title: 'Recoolit, Indonesia',
		subheader: 'Proving that voluntary carbon finance can underwrite LRM at the project level',
		body: `Recoolit launched in Indonesia in 2021, training and equipping technicians to recover refrigerants rather than vent them. Technicians are paid approximately $3 per kilogram of recovered refrigerant, which is then sent to government-approved cement kilns or industrial incinerators for destruction. Recoolit sells the resulting carbon credits to corporate buyers.

In 2025, Google announced a multi-year agreement to purchase 250,000 credits from Recoolit, funding a tenfold expansion of operations and geographic growth. The partnership is notable not just for its scale but for its signal: a major voluntary buyer treating LRM credits as a credible, high-integrity asset class.

Recoolit demonstrates that (1) voluntary carbon finance can shift economic conditions enough for recovery to become a worthwhile investment for technicians; and (2) with rigorous MRV, LRM credits can attract serious buyers.

However, scaling LRM across Southeast Asia will require shared standards; larger, sustained demand pools; and policy frameworks that embed refrigerant recovery into domestic policy, going beyond what the voluntary market alone can provide.`,
		imageSrc: '/images/blog/recoolit-indonesia-card.png',
		imageAlt: 'Technicians alongside large commercial refrigeration or HVAC equipment during recovery work in Indonesia'
	},
	compliance: {
		title: 'JCM F-Gas Recovery Project, Vietnam',
		subheader: 'Proving that compliance-grade cooperation can underwrite LRM at the project level',
		body: `Japan's Joint Crediting Mechanism (JCM), implemented under Article 6.2 of the Paris Agreement, has become one of the most active compliance frameworks for LRM in Southeast Asia — in part, because Japan itself has among the most advanced domestic LRM regulatory frameworks in the world. The JCM allows Japan and a partner country to jointly implement emissions reduction projects, with credits shared between both governments, subject to corresponding adjustments, and counted toward their respective nationally determined contributions (NDCs). In Vietnam, Marubeni Corporation partnered with HEPCO (Hue Urban Environment and Public Works Joint Stock Company) to develop a fluorocarbon collection scheme in Hue, Vietnam, installing a mixed combustion destruction facility at an existing industrial waste incinerator. The project collects ozone-depleting substances (ODS) and HFCs from cooling equipment manufacturers, service technicians, and car dismantling operations; it’s expected to prevent nearly 3,000 tCO₂e annually. Alongside credit generation, the project explicitly includes capacity building and support for developing a sustainable national collection scheme. A similar project is underway in the Philippines.

These projects prove that government-backed, compliance-grade LRM is operational in the region. However, these are discrete, project-level initiatives dependent on Japanese government funding and private-sector champions. Translating these one-off projects into country-wide systems requires the next stage: industry actors and policymakers treating LRM as a structural responsibility rather than a funded demonstration.`,
		imageSrc: '/images/blog/jcm-compliance-cityscape.png',
		imageAlt: 'A dense Southeast Asian city skyline in hazy light, illustrating the urban scale at which compliance LRM programs operate'
	},
	industry: {
		title: 'A-Gas, Singapore',
		subheader: 'What made their expansion into Southeast Asia possible, and why further support is still needed',
		body: `A-Gas entered the Singapore market in 2019 by acquiring a domestic company that had been operating in refrigerant recovery and reclamation since 1978. The company's Singapore facility is licensed by the National Environment Agency (NEA) as a Toxic Industrial Waste Collector (TIWC) and reclaims used refrigerants to AHRI 700 standard — the same specification as virgin product — for resale and reuse. Singapore has one of the most advanced LRM regulatory environments in Southeast Asia. Mandatory recovery and reclamation or destruction of spent refrigerants from decommissioned chillers came into force in July 2021; NEA banned the sale of new high-GWP household air conditioners and chillers in 2022; and as of 2025, NEA has proposed extending mandatory on-site recovery requirements to commercial refrigeration systems and vehicles, with implementation targeted for 2027. And yet even here, the economics of LRM remain marginal.

Reclamation to AHRI 700 standard can be viable for certain use cases, such as single-compound refrigerants. However, the next step — investing in separation and distillation to handle mixed streams at scale — remains difficult to justify on market economics alone. Regulatory requirements create a floor of activity, but they do not generate the financial certainty needed to attract the larger capital investments that a mature LRM system requires. This case study illustrates both what good policy can enable and where its limits lie: even in the region's most developed LRM market, additional incentives, whether carbon finance, compliance market revenues, or targeted subsidies, are needed to make the economics work for the infrastructure investments that matter most.`,
		imageSrc: '/images/blog/a-gas-singapore-team.png',
		imageAlt: 'A-Gas team members in front of branded service vans at a Singapore industrial facility'
	},
	policy: {
		title: 'Refrigerant Reclaim Australia (RRA)',
		subheader: 'How product stewardship scaled national recovery over three decades',
		body: `Refrigerant Reclaim Australia (RRA) was established in 1993 as a not-for-profit product stewardship organization, created by the refrigerants industry to collectively manage the costs of recovering and safely disposing of ozone-depleting and synthetic greenhouse gas refrigerants. Over three decades of operation, RRA has recovered over 10 million kilograms of refrigerant across more than 500 collection locations, preventing over 18.5 million tonnes of CO₂e from entering the atmosphere.

RRA follows an extended producer responsibility (EPR) model: the costs of end-of-life management are shared by the industry through a levy on refrigerant sales, which funds rebates to technicians for refrigerant returned to RRA's national collection network.

The Australian system works because it was designed with clear financial incentives (rebates to technicians), a practical collection network (locations across the country), and industry co-ownership of the scheme's costs.

The RRA model demonstrates that self-sustaining refrigerant recovery — independent of carbon finance — is achievable with the right policy architecture. But Australia in 1993 already had a functioning technician licensing system, a refrigerant import tracking framework, and industry associations capable of organizing a collective response. The sequencing challenge for Article 5 countries is building those prerequisites. Carbon markets and compliance finance are the tools most likely to develop them.`,
		imageSrc: '/images/blog/rra-australia-destruction-facility.png',
		imageAlt: 'Large industrial facility with rotary kiln and processing towers used for high-temperature destruction of recovered refrigerants'
	}
};

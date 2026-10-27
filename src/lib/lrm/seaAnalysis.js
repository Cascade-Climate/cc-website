const EXPLORER = "/our-work/refrigerant-management-and-transition/costs/explorer";
const MANUAL = "/our-work/refrigerant-management-and-transition/explorer/user-manual";

const gci = "https://www.green-cooling-initiative.org/country-data#!total-emissions/all-sectors/absolute";
const copa = "https://www.copalliance.org/imglib/publications/2025-04_COPA_Global%20Banks%20ODS%20HFC_update.pdf";
const iea = "https://www.iea.org/reports/the-future-of-cooling-in-southeast-asia";
const ccl = "https://carboncontainmentlab.org/updates/posts/singapore-scrapyard";
const iir = "https://iifiir.org/en/news/eu-high-gwp-hfc-shortages-and-price-rises";
const nea = "https://www.nea.gov.sg/our-services/climate-change-energy-efficiency/climate-change/carbon-tax";

function p(...parts) {
	return { type: "p", parts };
}
function t(text) {
	return { text };
}
function b(text) {
	return { text, bold: true };
}
function a(text, href, external = true) {
	return { text, href, external };
}
function n(note) {
	return { note };
}

export const hero = {
	title: "Regional Scenario Analysis: Southeast Asia",
	description:
		"Southeast Asia is one of the world’s fastest-growing refrigerant markets. This analysis uses the LRM Cost Explorer to compare recovery, recycling, reclamation, and destruction costs in the region.",
	toolCta: "Access the LRM Cost Explorer"
};

export const sections = [
	{
		id: "southeast-asia-at-a-glance",
		number: "01",
		title: "Southeast Asia at a Glance",
		blocks: [
			p(
				t("Southeast Asia is one of the world’s fastest-growing refrigerant markets. The region is home to about 6% of the world’s cooling equipment in use, and produces about 5% of the world’s direct refrigerant emissions from cooling, roughly 68 million tonnes of carbon dioxide equivalent (CO₂e) per year."),
				n("1"),
				t(" Thailand, Indonesia, Malaysia and Vietnam all rank among the 15 Article 5 countries with the largest refrigerant banks."),
				n("2"),
				t(" That bank is set to grow quickly: the International Energy Agency (IEA) projects that the number of air conditioners in Southeast Asia will rise from about 40 million in 2017 to 300 million by 2040."),
				n("3"),
				t(" Under a business-as-usual scenario, the region’s direct refrigerant emissions would rise by about 40% between 2024 and 2040, to more than 100 million tonnes of CO₂e a year."),
				n("4")
			),
			p(
				t("Every one of those units will eventually reach end-of-life, and today, nearly all refrigerant is vented at that point. Venting refrigerant is illegal in many Southeast Asian countries, but it is extremely difficult to monitor and enforce. Even in Singapore, which enforces its environmental rules more strictly than most, more than 90% is released rather than recovered."),
				n("5")
			),
			{
				type: "notes",
				items: [
					{
						id: "1",
						parts: [
							t("Cascade Climate analysis of "),
							a("Green Cooling Initiative country data", gci),
							t(" (GIZ Proklima; last updated 2023). Figures use 2024 values under the Kigali Implementation Plan scenario. Southeast Asia includes Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor-Leste and Vietnam.")
						]
					},
					{
						id: "2",
						parts: [
							a("Climate and Ozone Protection Alliance (COPA) and GIZ, Global Banks of Ozone Depleting Substances (ODS) and Hydrofluorocarbons (HFCs): A Country-Level Estimate 2024", copa),
							t(" (2025), Figure 5.")
						]
					},
					{
						id: "3",
						parts: [a("International Energy Agency, The Future of Cooling in Southeast Asia", iea), t(" (2019).")]
					},
					{
						id: "4",
						parts: [
							t("Cascade Climate analysis of "),
							a("Green Cooling Initiative country data", gci),
							t(" (GIZ Proklima; last updated 2023). Figures use the business-as-usual scenario. Direct emissions for the 11 Southeast Asian countries rise from about 74 million tonnes of CO₂e in 2024 to about 104 million tonnes of CO₂e in 2040.")
						]
					},
					{
						id: "5",
						parts: [a("Carbon Containment Lab, “Searching for Climate Treasure in an Air Conditioner Graveyard”", ccl), t(" (2023).")]
					}
				]
			}
		]
	},
	{
		id: "scenario-modeling",
		number: "02",
		title: "Scenario Modeling Approach and Data Collection",
		blocks: [
			p(
				t("Using our "),
				a("LRM Cost Explorer", EXPLORER, false),
				t(", we developed several cost scenarios for Southeast Asia to highlight what is needed for increased LRM activity in the region. Region-specific public cost data is nearly nonexistent, so we collected primary data through site visits in multiple countries as well as interviews with regional stakeholders. Over the past year, we traveled to Singapore, Indonesia, Thailand, Vietnam and Malaysia to see the region’s reverse supply chain up close. We toured 10 sites, including waste handling facilities, reclamation facilities with lab testing, refrigerant aggregation warehouses, and technician training centers. We spoke with the people who run them about what it actually costs to recover, store, move and process refrigerant. We are extremely grateful to the many partners who opened their doors to us and shared cost data and business insights, including technicians, project developers, facility owners and operators, equipment manufacturers and university researchers. To protect commercially sensitive information, all data has been anonymized and aggregated.")
			)
		]
	},
	{
		id: "cost-scenario-syntheses",
		number: "03",
		title: "Cost Scenario Syntheses",
		blocks: [
			{ type: "h3", id: "recovery-scenarios", text: "How recovery costs differ across six main user scenarios" },
			p(t("To show what LRM costs in the region, we modeled six recovery scenarios that vary by three inputs to the tool:")),
			{
				type: "ol",
				items: [
					{ parts: [t("Sector: Residential AC vs. Commercial HVAC")] },
					{ parts: [t("Recovery machine type: Basic vs. High Capacity")] },
					{ parts: [t("Cost Tier: High-cost (‘pilot’ program) vs. Low-cost (‘at-scale’ program).")] }
				]
			},
			p(t("Basic recovery refers to the standard compact recovery machines typically used to recover refrigerant from small capacity residential AC units and was not considered applicable for commercial HVAC scenarios.")),
			p(t("The tool’s built-in cost tiers correspond to two maturity stages:")),
			{
				type: "ul",
				items: [
					{
						parts: [
							b("Pilot: "),
							t("Programs recovering under 10 tonnes of refrigerant a year, considered a ‘pilot’ program, fall into the high-cost tier in the Explorer. We use the high-cost scenario for pilot-stage programs because small, irregular volumes give operators little leverage with destruction and reclamation facilities, leave central facilities and equipment underused, and spread fixed costs like testing and handling over fewer kilograms.")
						]
					},
					{
						parts: [
							b("At-scale: "),
							t("Programs recovering more than 50 tonnes per year, considered an ‘at-scale’ program, fall into the low-cost tier in the Explorer. Based on stakeholder discussions, we consider this volume to be at-scale, where steady, high volumes earn better processing rates and spread fixed handling and testing costs across far more refrigerant. Market actors we spoke with estimated that a realistic minimum viable scale is 50–70 tonnes per year, which they felt could be reachable over about three years.")
						]
					}
				]
			},
			p(
				t("The table below shows the main inputs behind each scenario. See the "),
				a("LRM Cost Explorer User Manual", MANUAL, false),
				t(" for detailed information on all of the default values used for the Southeast Asia scenario modeling.")
			),
			{
				type: "table",
				headers: ["Input", "Residential AC – basic equipment", "Residential AC – high-capacity equipment", "Commercial HVAC"],
				rows: [
					["Charge size per unit", "1 kg", "1 kg", "150 kg"],
					["Recoverable share of charge", "50%", "50%", "80%"],
					["Recovery time per unit", "0.5 hours", "0.1 hours", "8 hours"],
					["Labor rate", "USD 10/hour", "USD 10/hour", "USD 20/hour"],
					["Units recovered per day (pilot / at-scale)", "40 / 405", "40 / 405", "1 / 3"],
					["Recovery days per year (pilot / at-scale)", "200 / 250", "200 / 250", "75 / 150"],
					["Annual volume (pilot / at-scale)", "4 / 50.6 tonnes", "4 / 50.6 tonnes", "9 / 54 tonnes"]
				]
			},
			p(t("All pilots use the high-cost tier values and all at-scale programs use the low-cost tier value.")),
			p(t("Commercial HVAC recovery is assumed to require two technicians for a total labor rate of USD 20/hour; residential AC recovery is assumed to require only one technician for a total labor rate of 10 USD/hour.")),
			{ type: "h3", id: "recovery-destruction-costs", text: "Comparing recovery-to-destruction operating costs across scenarios" },
			p(t("To assess the impact of each of the six scenarios on recovery-to-destruction operating costs, we held the destruction facility type constant as an existing in-country facility. The chart below compares the operating cost of recovering and destroying a kilogram of refrigerant across all six scenarios.")),
			{
				type: "figure",
				src: "destruction",
				alt: "Stacked bar chart of the operating cost of recovering and destroying 1 kg of refrigerant. Pilot, high-cost tier: residential basic equipment $28.63, residential high-capacity $20.63, commercial HVAC $12.62. At-scale, low-cost tier: $22.35, $14.35, and $9.50."
			},
			p(t("A residential AC pilot program using basic recovery equipment costs about USD 29/kg of refrigerant destroyed. Switching to high-capacity equipment brings that down to about USD 21/kg. A commercial HVAC pilot program costs about USD 13/kg. Moving to an at-scale program cuts operating cost by 25-30%; residential AC falls to USD 22/kg with basic equipment and USD 14/kg with high-capacity equipment, and commercial HVAC falls to under USD 10/kg.")),
			{ type: "h4", id: "recovery-drivers", text: "What drives cost, and what doesn’t" },
			p(
				b("Amount of refrigerant recovered per job. "),
				t("How much refrigerant each job yields is the most significant cost driver. A technician might spend half an hour on a residential AC split unit and recover half a kilogram. The same technician could spend a full day on a commercial HVAC system and recover 150 kg. As a result, recovery makes up more than 50% the cost of a residential AC pilot program using basic equipment, but less than 20% of a commercial HVAC pilot program.")
			),
			p(
				b("Recovery efficiency. "),
				t("As a result of low refrigerant per-job yields, recovery costs for residential AC programs are more significantly impacted by a technician’s transportation-related costs than for commercial HVAC programs. Therefore, improving recovery efficiency per site traveled to is a crucial factor for achieving cost reductions in the residential AC sector. For example, recovering 5 residential AC units from a single location will greatly reduce per kg costs compared to recovering 5 units from 5 different locations. This gap is a strong argument for aggregating residential AC units using the “pump-down” method where possible, before extracting refrigerant in bulk at a centralized facility. This approach is currently being practiced on the ground, where a centralized facility we visited was able to recover refrigerant from multiple AC units–around 4 to 5 units–simultaneously using a high-capacity recovery machine, potentially cutting recovery labor costs by 60-80 percent.")
			),
			p(
				b("What matters less. "),
				t("Fuel prices and vehicle efficiency have a low impact on commercial HVAC recovery costs, where travel adds less than USD 0.20/kg. Residential AC programs are the exception on travel: for a pilot program, driving adds about USD 4.40/kg, because each team covers about 100 kilometers per day to collect only a few kilograms of refrigerant.")
			),
			{ type: "h4", id: "recovery-takeaways", text: "Takeaways" },
			p(t("Achieving scaled recovery in Southeast Asia will likely require recovering from a mix of commercial HVAC and residential AC units, rather than from residential AC units alone. Using the above parameters, reaching the Explorer’s low-cost tier requires recovering from more than 100,000 residential AC units per year. That’s roughly half of what one Southeast Asian market we studied decommissions annually. A commercial HVAC program can achieve the same level of scale by recovering from an average of three units a day over the course of a year using the default number of recovery days. Today’s programs, while beneficial and impactful, are far from reaching these thresholds. Across LRM programs we encountered, total recovered volumes ranged from less than 10 kg to 3 tonnes per year.")),
			p(t("Where residential AC collection does work today, it is because a business has built it into its operations, such as a retailer offering a discount on a new unit with free pickup and disposal of the old one. Until residential AC units are brought into e-waste or extended producer responsibility (EPR) schemes that deliver them to central facilities in volume, which can cut recovery and transport costs by using the “pump-down” method, targeting commercial HVAC units is the most cost-effective LRM strategy. Residential AC programs that do go ahead should pair high-capacity equipment with retailer take-back or other ways of aggregating units, which bring their costs much closer to commercial HVAC levels.")),
			{ type: "h3", id: "reclamation-costs", text: "Recovery-to-reclamation operating costs compared to virgin refrigerant prices" },
			p(t("We modeled reclamation costs using the same six recovery scenarios as above. Recovery inputs remain unchanged. The only difference is the end-use pathway: the recovered refrigerant is reclaimed at an existing in-country facility rather than destroyed. Reclamation costs include processing the gas using reclamation equipment as well as the lab testing necessary to confirm purity standards are met. These post-recovery operational costs are set at USD 11.50/kg for a pilot program, and USD 5.50/kg for an at-scale program. Transport and handling to an in-country facility adds another USD 0.20–0.60/kg, depending on the cost tier.")),
			p(t("For reclamation to happen without outside support, reclaimed refrigerant has to sell for more than it costs to produce—with a reasonable profit adder—to be a viable business model. To reflect this, we added a 15% profit margin to the operating cost of recovering and reclaiming a kilogram of refrigerant. Because the chart shows the price needed to cover those costs, it does not use the tool’s default resale price for reclaimed refrigerant. The chart below shows the sale price a reclaimer would need to be profitable across scenarios compared with the price of virgin refrigerant in Southeast Asia. Based on conversations with regional market actors, virgin refrigerants in Southeast Asia sell for roughly USD 8–14.50/kg, averaged across the refrigerants most commonly used in residential AC and commercial HVAC systems: R-32, R-410A and R-22.")),
			{
				type: "figure",
				src: "reclamation",
				alt: "Stacked bar chart of the sale price a reclaimer needs to cover operating costs plus a 15% margin, compared with Southeast Asian virgin refrigerant at about $8 to $14.50 per kg. Pilot: residential basic $36.95, residential high-capacity $27.75, commercial HVAC $18.54. At-scale: $25.13, $15.93, and $10.35."
			},
			{ type: "h4", id: "reclamation-drivers", text: "What drives the cost of reclaimed refrigerant, and what doesn’t" },
			p(
				b("Volume reaching the reclamation facility. "),
				t("Reclamation processing is the largest cost in every modeled scenario, and the one most sensitive to scale. At a pilot level, it makes up between about 40% and 70% of the cost of reclaimed refrigerant, depending on equipment type. For commercial HVAC, moving from pilot volumes to at-scale volumes cuts the needed sale price from about USD 19/kg to USD 10/kg, and almost all of that reduction comes from lower reclamation and handling costs. That ‘at-scale’ volume—more than 50 tonnes per year—is hard to come by in the region today. While reclamation capacity in Southeast Asia will eventually need to increase for reclamation to scale, the facilities that we encountered were operating well below the current equipment capacity. Sufficient recovered volumes of refrigerant is the biggest bottleneck, not access to reclamation equipment.")
			),
			p(
				b("Where reclamation happens. "),
				t("Our scenarios assume utilizing an in-country existing reclamation facility. Exporting refrigerant for reclamation raises transport and handling from under USD 1/kg to about USD 4–6/kg, and introduces approvals required under the Basel Convention. Navigating Basel Convention requirements can create significant roadblocks for reclamation; we encountered several operations where even transporting refrigerant to a bordering country was prohibitively expensive and/or complex.")
			),
			p(
				b("What matters less. "),
				t("Once a program reaches at-scale volumes, central facility operations and warehousing add less than USD 2/kg combined, and in-country transport to the reclamation facility less than USD 0.50/kg. The margin assumption also matters little: moving it from 15% to 10% or 20% shifts the needed sale price for a commercial HVAC program at scale by only about USD 0.50/kg. What sets residential AC programs using basic equipment apart is still the cost of recovery itself, which no reclamation savings achieved through scale can offset. Reclaimers would still need a sale price of around USD 25/kg, which seems unlikely to be achievable in the Southeast Asia market today.")
			),
			p(
				b("What the model doesn’t capture. "),
				t("The model assumes all recovered refrigerant can be reclaimed. In practice, gas from residential AC units is often contaminated with oil, and R-410A, the most common refrigerant in the recovered stream, cannot be separated into its components by the simple distillation units available in the region. Mixed or contaminated cylinders usually end up destroyed, which raises the actual cost of each kilogram that does get reclaimed.")
			),
			{ type: "h4", id: "reclamation-takeaways", text: "Takeaways" },
			p(t("At scale, commercial HVAC (about USD 10/kg) and residential AC programs using high-capacity equipment (about USD 14/kg) fall within the current virgin refrigerant price range, so they may be able to compete with virgin gas priced at the higher-end. No pilot program can compete: even commercial HVAC, the cheapest pilot, would need to sell at about USD 19/kg. Residential AC reclamation programs using basic equipment are unlikely to be cost-effective, even at scale, until virgin prices rise.")),
			p(
				t("As Kigali implementation progresses in Southeast Asia, recovered refrigerant has an extremely important role to play in developing a circular economy for HFC consumption. It will become an increasingly valuable resource as supply becomes restricted and virgin gas prices rise. We have already seen that play out in non-Article 5 countries. In the European Union, for example, prices for some of the most widely used HFCs rose by 30–60% in a single year as the first major supply cut approached."),
				n("6"),
				t(" At the moment, however, virgin HFCs (and to a lesser extent, HCFCs) are still readily available and cheap across Southeast Asia. Recovering and reclaiming refrigerant, while essential in the long term, is not yet a profitable business in most of the region. In the near term, support is needed for reclamation to achieve cost parity with virgin refrigerant. Ramping up recovery volumes takes time. Initial fragmented volumes will need to be sold at a loss unless there is support in the form of subsidies or requirements to use reclaimed refrigerants in certain applications such as during servicing. Reverse value chain actors have to also combat the fact that consumers are unfamiliar with reclaimed refrigerant and may not be willing to pay up to the price of virgin gas.")
			),
			{ type: "h3", id: "recycling-costs", text: "Recycling costs compared to reclaimed refrigerant costs for commercial HVAC" },
			p(t("We compared recovery-to-recycling costs against recovery-to-reclamation costs using the same commercial HVAC scenarios as above: a 9-tonne pilot program and a 54-tonne at-scale program. Recycling skips transport to an end-use facility and reclamation processing, which reduces costs significantly. Recovery costs stay the same, but recycling incurs an estimated 50% increase in labor to cover the extra time spent cleaning the gas (shown as on-site cleaning in the chart below). The LRM Cost Explorer does not include a recycling scenario for the residential AC sector. The feedback from reverse supply chain actors was that refrigerant recovered from residential AC units is almost always too contaminated, usually with compressor oil, to be recycled. The Explorer therefore offers recycling only for the commercial HVAC sector, and this section compares the two end-use pathways for commercial HVAC alone.")),
			{ type: "h4", id: "comparing-recycling", text: "Comparing recycling and reclamation" },
			p(t("The chart below compares the operating cost of recycling and reclaiming a kilogram of refrigerant from commercial HVAC equipment against the price of virgin refrigerant in Southeast Asia.")),
			{
				type: "figure",
				src: "recycling",
				alt: "Bar chart comparing commercial HVAC recycling and reclamation operating cost per kg. Recycling is $2.36 at both the 9 tonne pilot and the 54 tonne at-scale program. Reclamation is $16.12 at pilot and $9.00 at scale, against a virgin refrigerant band of about $8 to $14.50."
			},
			p(t("Recycling costs USD 2.36/kg for both pilot and at-scale programs, well below the USD 8–14.50/kg virgin price range. Reclamation costs about USD 16/kg at pilot scale and about USD 9/kg at scale. These reclamation figures are lower than in the previous chart because they show operating cost alone. The previous chart added a 15% margin to show the price a reclaimer would need to charge to run a viable business. Here we leave the margin out of both pathways so they can be compared directly, since recycled refrigerant isn’t sold: it simply saves the equipment owner from buying new gas.")),
			{ type: "h4", id: "recycling-difference", text: "What drives the cost difference" },
			p(
				b("Reclamation processing and transport. "),
				t("Nearly the entire gap between the two pathways comes from what happens after recovery. Transport to a reclamation facility and the reclamation process itself add about USD 14/kg for pilot volumes and about USD 6/kg at scale. Recycling does not incur either of these costs in the Explorer because immediate reuse on-site is assumed.")
			),
			p(
				b("Scale. "),
				t("Scale matters far more for reclamation than for recycling. Moving from pilot to at-scale cuts the cost of reclamation by more than 40%, mostly through lower processing costs. The cost of recycling doesn’t change at all based on scale, because the cost is only recovery labor, which doesn’t change with volume. That means recycling can make economic sense even for small programs.")
			),
			p(
				b("What the model doesn’t capture. "),
				t("Gas quality is the real constraint on recycling, and it is rarely checked. Recycled gas doesn’t have to meet a purity standard, and practitioners we spoke with disagreed on how far recycling should be promoted for that reason. Based on anecdotal feedback from stakeholders, some equipment owners recycle gas from domestic units even when it is contaminated in order to reduce costs. Contaminated gas returned to a system can damage it, and poor practice risks undermining confidence in reused refrigerant more broadly. Recycling also depends on how a system is maintained: gas that can be held in the compressor during servicing can be reused directly, while gas that has to be moved into cylinders adds handling time and the risk of mixing refrigerants.")
			),
			{ type: "h4", id: "recycling-takeaways", text: "Takeaways" },
			p(t("Wherever gas is clean enough, recycling is the cheapest option and pays for itself. At under USD 2.50/kg, recycling costs less than virgin refrigerant at any scale, so commercial HVAC equipment owners and operators could save money by reusing their own gas without outside support. It is the one LRM end-use pathway in our analysis that is self-sustaining in Southeast Asia today. However, the applicability of recycling depends entirely on recovered gas purity levels. More research and on-the-ground assessments are needed to understand how and where recycling is an appropriate end-use pathway.")),
			p(t("Unlike reclamation, recycling won’t build a market on its own. Recycling produces no product to sell, so it has to be driven by servicing practice and regulation rather than revenue. That makes technician training and servicing standards the main levers, and in much of the region those are at risk of being under strain if there are no sustained sources of funding, such as the Multilateral Fund programs for phasing out HCFCs, to continue supporting technician training programs in the future.")),
			{ type: "h3", id: "destruction-carbon", text: "Recovery-to-destruction costs compared to regional carbon prices" },
			{ type: "h4", id: "destruction-assumptions", text: "The scenarios and destruction assumptions" },
			p(t("As discussed above, not all refrigerant can be reused. Gas that is too contaminated or mixed to reclaim, refrigerant with no market, and ozone-depleting substances (ODS) may need to be destroyed. Destruction produces nothing to sell, unlike recycling and reclamation, so its business case rests on direct funding, including via carbon finance.")),
			p(t("We calculated destruction costs per tonne of CO₂e avoided, using default refrigerant mixes and IPCC AR6 GWP-100 values, for the same six recovery scenarios as above, with the recovered refrigerant destroyed in an existing kiln facility. Destruction fees fall from USD 8/kg in the high-cost scenario to USD 6/kg in the at-scale destruction scenario. Transport and handling to the kiln adds another USD 0.20–0.60/kg. For the two at-scale scenarios closest to competing on cost, high-capacity residential AC and commercial HVAC, we also tested what happens if a kiln has to be retrofitted to accept refrigerant (about USD 210,000, including administration and licensing) or built from scratch (about USD 3.5 million).")),
			p(
				b("Why this section includes capital costs. "),
				t("Everywhere else in this report, we show operating costs only, because upfront costs vary widely by what existing infrastructure is available and how these costs can be funded. Here, we compare destruction cost against carbon prices, which are paid per tonne of CO₂e, so a fair comparison needs the full cost of each tonne, including the equipment needed to deliver it. To get there, we spread upfront costs evenly over their expected working life: five years for recovery equipment (recovery machines, cylinders, refrigerant identifiers and tracking systems) and ten years for kiln retrofits and new kilns. We don’t include financing costs, so the figures are a simple average cost per tonne rather than a full investment case.")
			),
			{ type: "h4", id: "comparing-destruction", text: "Comparing the scenarios" },
			p(t("The chart below compares the full cost of recovering and destroying refrigerant, in per tonne of CO₂e, across scenarios and against carbon prices in Japan and Singapore.")),
			{
				type: "figure",
				src: "carbon",
				alt: "Bar chart of the full cost of recovering and destroying refrigerant per tonne of CO₂e, including upfront equipment spread over its working life. With an existing kiln, costs run from $5.60 to $21.70 per tonne. At-scale retrofit and new-kiln cases run from $5.79 to $14.87. Singapore’s 2026 carbon tax is about $45 per tonne and Japan’s GX-ETS reference band is about $11 to $27."
			},
			p(t("Every scenario costs less per tonne than Singapore’s current carbon tax. Commercial HVAC programs come in at about USD 6–8/tCO₂e if using an existing kiln, which is below even the floor of Japan’s reference band. Residential AC programs operating at-scale that utilize high-capacity equipment cost about USD 11/tCO₂e, near the bottom of Japan’s band, while a residential AC pilot program using basic equipment costs about USD 22/tCO₂e. Even with a newly built kiln, commercial HVAC destruction stays under USD 9/tCO₂e.")),
			{ type: "h3", id: "destruction-drivers", text: "What drives cost, and what doesn’t" },
			p(
				b("Recovery, not destruction. "),
				t("As with the other pathways, what happens before the kiln drives most of the variation. The gap of about USD 15/tCO₂e between the cheapest and most expensive scenarios comes almost entirely from recovery: how much refrigerant each job yields, what equipment technicians use and how many kilograms a program handles. Destruction fees themselves vary little, at USD 6–8/kg, and our regional data show similar per-kilogram fees across destruction technologies.")
			),
			p(
				b("Using existing infrastructure. "),
				t("Capital costs are most influential when a program has to build new physical infrastructure. Retrofitting an existing kiln adds less than USD 0.30/tCO₂e at scale. Building a new kiln adds about USD 3–4/tCO₂e, raising the full cost of commercial HVAC destruction by more than half, from about USD 6 to USD 9/tCO₂e, and of high-capacity residential AC destruction by more than 40%. A new kiln also costs more than 15 times as much upfront as a retrofit, and can handle about 80 tonnes a year, more than most programs in the region collect today.")
			),
			p(
				b("Refrigerant mix. "),
				t("Carbon value depends on each refrigerant’s global warming potential. Commercial HVAC equipment in our default mix contains more R-410A and R-22, so each kilogram destroyed is worth about 2.1 tonnes of CO₂e, compared with about 1.7 tonnes for residential AC, where lower-GWP R-32 is more common. As residential AC equipment shifts to R-32, the cost per tonne of destroying its refrigerant will rise even as the cost per kilogram falls.")
			),
			p(
				b("What matters less. "),
				t("Fuel, warehousing and the choice between destruction technologies make little difference to the cost per tonne. Exporting refrigerant for destruction is the exception: it adds about USD 4–6/kg in transport and handling, or about USD 2–3/tCO₂e, and requires approvals under the Basel Convention.")
			),
			p(
				b("What the chart doesn’t show. "),
				t("These figures are based on the gross CO₂e of the refrigerant destroyed. Carbon market methodologies make deductions, for example for emissions from transport and destruction, and several of them credit only ozone-depleting substances like R-22, so the cost per credit actually issued would be higher. The LRM Cost Explorer also doesn’t include the costs of project development, monitoring, verification and registry fees.")
			),
			{ type: "h3", id: "destruction-takeaways", text: "Takeaways" },
			p(t("On cost alone, destruction sits well within the range of carbon prices in the region. Even the most expensive scenario, a residential AC pilot using basic equipment, costs less per tonne than Singapore’s current carbon tax, and commercial HVAC destruction costs less than the floor of Japan’s reference band. That makes refrigerant destruction a cost-effective source of emission reductions in Southeast Asia.")),
			p(
				t("But Southeast Asian destruction projects can’t sell into these markets yet. The Japanese and Singaporean prices are reference points for what carbon is worth in the region, not prices a destruction project can earn today. Singapore lets taxable facilities cover up to 5% of their taxable emissions with eligible international credits, and has signed implementation agreements with a small number of countries, including Thailand."),
				n("7"),
				t(" Japan’s GX-ETS lets companies meet up to 10% of their obligations with domestic J-Credits and credits from its Joint Crediting Mechanism (JCM)."),
				n("8"),
				t(" Refrigerant destruction in Southeast Asia would need to qualify under one of these routes, through a bilateral agreement and an approved methodology, before it could access these financing mechanisms.")
			),
			{
				type: "notes",
				items: [
					{
						id: "6",
						parts: [a("International Institute of Refrigeration (IIR), “EU: High-GWP HFC shortages and price rises”", iir), t(" (21 March 2018).")]
					},
					{
						id: "7",
						parts: [a("National Environment Agency (NEA), Singapore, “Carbon Tax”", nea), t(", on international carbon credits.")]
					},
					{
						id: "8",
						parts: [t("S&P Global Commodity Insights, “Japan’s GX-ETS mandatory phase begins” (8 April 2026), on eligible credits.")]
					}
				]
			}
		]
	},
	{
		id: "capital-expenditures",
		number: "04",
		title: "Capital Expenditures",
		blocks: [
			p(t("Even if LRM activity is operating at scale, building new infrastructure represents a significant cost that is not captured by the model’s operational expenditure calculations. A commercial HVAC program recovering 54 tonnes a year needs about USD 0.6 million in recovery equipment and tracking systems if it uses an existing kiln. Retrofitting a kiln brings that to about USD 0.8 million. Building a new cement kiln brings it to more than USD 4 million, nearly seven times as much, for the same volume of refrigerant and the same operating cost. Before investing in new destruction capacity, it is essential to secure a steady supply of refrigerant and to make the most of the facilities a country already has. Existing destruction and reclamation capacity is available in much of Southeast Asia today. Some of the existing infrastructure was installed for demonstration or pilot project purposes, so it may be dormant or unable to receive meaningful volumes of refrigerant.")),
			{
				type: "figure",
				src: "capital",
				alt: "Horizontal bar chart of upfront capital cost for commercial HVAC destruction at 54 tonnes a year. An existing kiln is $0.60 million, a retrofit is $0.81 million, and a new cement kiln is $4.11 million. Operating cost is $9.96 per kg in all three cases."
			}
		]
	},
	{
		id: "summary",
		number: "05",
		title: "Summary",
		blocks: [
			p(t("Taken together, the Southeast Asia regional analysis points to one conclusion: the cost of LRM is decided largely by volume and the sector refrigerant is recovered from. Commercial HVAC equipment offers the lowest-cost starting point for building LRM capacity. Residential AC equipment, the largest and fastest-growing source of refrigerant, needs both high-capacity recovery equipment and a scale that no single pilot can reach on its own. Getting there will take sustained funding, policy that brings units to collection points, and business models that maintain economic incentives for refrigerant recovery beyond the pilot phase."))
		]
	}
];

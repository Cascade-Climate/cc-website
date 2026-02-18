<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import LRMblog1 from '$lib/images/blog/LRMblog1.webp';
	import grants from '$lib/images/nature/grants.webp';
    import hfcEmissions from '$lib/images/blog/hfc.emissions.webp';
	import lrmJourney from '$lib/images/blog/LRM.journey.webp';
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Lifecycle Refrigerant Management: Closing Critical Gaps in Global Climate Policy</h1>
				By: <a href="/people/ali-white" style="color: white;">Ali White</a>,
				<a href="/people/rachel-smith" style="color: white;">Rachel Smith</a>,
				<a href="/people/hara-wang" style="color: white;">Hara Wang</a>,
				<a href="/people/dai-ellis" style="color: white;">Dai Ellis</a>
				<p class="date" style="font-weight: 200;">Feb 19, 2026</p>

				<hr>

				<p>As Cascade <a href="https://cascadeclimate.org/blog/cascade-entry-into-slcp-mitigation" target="_blank" rel="noopener noreferrer">expands</a> into super pollutant mitigation, our initial program will focus on refrigerants — encompassing both lifecycle refrigerant management and the transition to next-generation alternatives. This post explores lifecycle refrigerant management: why it matters, what's blocking progress, and how strategic interventions can unlock immediate climate wins and build economic resilience.</p><br>
			</div>
			<img src={LRMblog1} alt="Lifecycle Refrigerant Management" />
		</div>
	</section>
	<ScrollNav excludeIds={['gap-installed-bank', 'gap-implementation-risks']} />
	<main>
        <section id="intro">
			<h1>Introduction</h1>
		<p>Cascade is far from the first to call attention to the importance of lifecycle refrigerant management in tackling climate change. A range of organizations — such as Carbon Containment Lab, Climate and Clean Air Coalition, Environmental Investigation Agency, Institute for Governance and Sustainable Development, Natural Resources Defense Council, and numerous others — have been doing great work in this space for many years. Yet beyond this dedicated community, the scale and urgency of refrigerant emissions remain underappreciated in mainstream climate discourse.</p>

		<p>Cascade aims to complement the work of partner organizations by engaging deeply in a subset of developing countries with the potential to get lifecycle refrigerant management on a much stronger trajectory in the coming years. We see an opportunity to mobilize catalytic private and public finance to deliver immediate mitigation while building a bridge toward large-scale policy and industry action needed to embed lasting accountability for refrigerant emissions reductions.</p>
                
            <section id="role-of-refrigerants">
			<h1>The Role of Refrigerants in Climate Change</h1>

			<p>Refrigerants are the chemicals used in cooling systems that absorb heat from a space and release it elsewhere through continuous phase changes. These working fluids are used in all heat pump systems, from your car&rsquo;s air conditioner and your supermarket&rsquo;s refrigerated cases, to your home&rsquo;s heat pumps that provide both cooling and heating.</p>

			<p>For decades, chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs) served as our primary refrigerants. While effective at cooling, emissions of CFCs and HCFCs during equipment use, servicing, and at end of life led to the depletion of the stratospheric ozone layer which protects against harmful UV rays. The 1987 Montreal Protocol — ratified by 197 countries — phased out the production and use of these ozone-depleting substances in what became a global environmental success story. The ozone layer has shown <a href="https://news.un.org/en/story/2023/01/1132277" target="_blank" rel="noopener noreferrer">notable recovery</a> as a result, though CFCs and HCFCs still remain in some existing equipment and cylinder stockpiles around the world.</p>

			<p>Unfortunately, the refrigerants that replaced the ozone-depleting substances (ODS) perpetuated another environmental challenge: climate change. Both the legacy ozone-depleting substances and the primary replacement refrigerants, hydrofluorocarbons (HFCs), are potent greenhouse gases considered to be &ldquo;<a href="https://www.ccacoalition.org/sites/default/files/resources/files/Super%20Pollutant%20Factsheet_0.pdf" target="_blank" rel="noopener noreferrer">super pollutants</a>.&rdquo; On a ton-for-ton basis, HFCs have global warming potentials (GWPs) hundreds to thousands of times greater than carbon dioxide (CO2), meaning even small quantities leaked into the atmosphere create outsized climate impacts.</p>

			<p>HFCs also have a relatively short atmospheric lifetime compared to CO2 — <a href="https://www.ccacoalition.org/short-lived-climate-pollutants/hydrofluorocarbons-hfcs" target="_blank" rel="noopener noreferrer">15 years on average</a> versus centuries for CO2. This means their warming impact is concentrated over a shorter period, while CO2 accumulates and persists in the atmosphere for much longer. Mitigating HFC emissions now therefore delivers rapid climate benefits within decades, complementing the CO2 reduction and removal strategies essential for limiting long-term warming.</p>
		</section>

		<section id="kigali-amendment">
			<h1>The Kigali Amendment and Two Critical Gaps</h1>

			<p>In 2016, the Kigali Amendment to the Montreal Protocol was adopted to phase down the production and consumption of HFCs due to their contribution to climate change. The Kigali Amendment will drive a transition from HFCs to next-generation refrigerants with much lower GWPs.</p>

			<p>Full implementation of the Kigali Amendment is projected to avoid between <a href="https://www.ccacoalition.org/short-lived-climate-pollutants/hydrofluorocarbons-hfcs" target="_blank" rel="noopener noreferrer">33 and 47 GtCO2e</a> emissions cumulatively by 2050. For comparison, this is equivalent to <a href="https://www.iea.org/reports/global-energy-review-2025" target="_blank" rel="noopener noreferrer">shutting down every coal-fired power plant</a> in the world for 3.5 to 5 years<sup>1</sup>. This represents a major win for climate. However, two critical challenges remain unaddressed: 1) the &ldquo;installed refrigerant bank&rdquo; problem and 2) implementation risks in the transition to alternative refrigerants.</p>
		</section>

		<section id="gap-installed-bank">
			<h2>Gap 1: The &ldquo;Installed Refrigerant Bank&rdquo; Problem</h2>

			<p>First, neither the Montreal Protocol nor the Kigali Amendment adequately address the global &ldquo;installed refrigerant bank&rdquo; — the massive quantity of higher-GWP refrigerants already contained in existing equipment and cylinder stockpiles. The scale is staggering: estimates suggest there are between <a href="https://ozone.unep.org/system/files/documents/TEAP-May2024-DecXXXV-11-TF-Report.pdf" target="_blank" rel="noopener noreferrer">16 Gt CO<sub>2</sub>e and 24 Gt CO<sub>2</sub>e</a> of ODS and HFC refrigerants currently in existence, with an additional <a href="https://ozone.unep.org/system/files/documents/TEAP-May2024-DecXXXV-11-TF-Report.pdf" target="_blank" rel="noopener noreferrer">67 Gt CO<sub>2</sub>e</a> projected to enter the market through 2100 even with full Kigali Amendment implementation.</p>

			<p>The installed bank problem will intensify as rising temperatures and economic growth drive unprecedented cooling demand. Southeast Asia alone is projected to see a <a href="https://www.iea.org/commentaries/staying-cool-without-overheating-the-energy-system" target="_blank" rel="noopener noreferrer">ninefold increase in air conditioners</a> between 2020 and 2040. In the near-term, the refrigerants used in new equipment installations will be predominantly HFCs, especially in developing countries (referred to as <a href="https://ozone.unep.org/classification-parties" target="_blank" rel="noopener noreferrer">Article 5 countries</a> under Kigali) where phase down schedules allow more time for technology transition. Each HFC system installed today locks in decades of potential emissions.</p>

			<figure style="margin: 2rem 0; text-align: center;">
				<img src={hfcEmissions} alt="HFC emissions projections" style="width: 25%; height: auto;" />
				<figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--color-text);">Source: Velders et al. (2022)</figcaption>
			</figure>
            <p>Currently, there is little to no incentive for equipment owners and service technicians to prevent refrigerant leaks during equipment use or venting at end-of-life. Leakage from existing, in-use equipment is widespread, as refrigerants escape through deteriorating seals, gaskets, joints, and micro-cracks in tubing. Although venting of ODS and HFCs is explicitly illegal in many countries during servicing and at end-of-life, compliance has proven difficult to monitor and enforce. From an economic standpoint, recovering refrigerant typically poses a net cost to technicians: it can be time-consuming, requires specialized equipment, and there are limited markets for recovered refrigerants. </p>
		</section>

        <section id="gap-implementation-risks">
			<h2>Gap 2: Implementation Risks in the Transition to Alternative Refrigerants</h2>
            <p>Secondly, countries may struggle to meet their Kigali HFC phase-down obligations primarily due to a lack of available, scalable low-GWP alternatives across a wide range of use cases. The Montreal Protocol succeeded in part because replacement was straightforward — HFCs could substitute for CFCs and HCFCs across most applications without significant system modifications. 

            <p>Today's transition away from HFCs is structurally different, creating a much bumpier road with ongoing risk of setbacks and delays. While low-GWP refrigerants have proven technically viable in specific use cases, they have not yet achieved the broad and immediate usability that made HFCs effective universal replacements. Adoption of low-GWP alternatives across residential and commercial sectors faces technical, economic, and capacity barriers — issues that are particularly acute in Article 5 countries that are dependent on foreign supply of refrigerants and equipment.</p>

            <p>These barriers include:</p>
			<ul>
				<li><strong>High upfront costs:</strong> Ultra-low GWP refrigerants — natural refrigerants and hydrofluoroolefins (HFOs) — are not drop-in replacements for HFCs, requiring entirely new system configurations and significant capital expenditure. Production capacity of both next-generation equipment and refrigerants must scale dramatically to drive costs down, requiring industry-wide investment and commitment.</li>
				<li><strong>Supply chain vulnerabilities:</strong> China currently produces about 70% of the world's HFCs, and fast-rising cooling demand combined with Kigali Amendment phase down implementation is likely to strain supply chains, trigger price volatility or, if enforcement is weak, increase illegal production and trade.</li>
				<li><strong>Technical capacity gaps:</strong> A limited pool of trained technicians and insufficient technical capacity across much of the supply chain constrains the ability to safely install, maintain, and service next-generation refrigerants.</li>
				<li><strong>Safety concerns:</strong> Many natural refrigerants (particularly hydrocarbons) are highly flammable, requiring building and fire code revisions, specialized equipment, and extensive technician training programs before they can be deployed at scale.</li>
				<li><strong>Industry resistance:</strong> Manufacturers often promote intermediate options (HFO/HFC blends, R-32 with GWP of ~675) rather than ultra-low GWP natural refrigerants or pure HFOs, slowing the transition to the most climate-friendly alternatives.</li>
				<li><strong>Environmental impacts of some HFC replacements:</strong> There is growing concern that HFOs are a source of per- and polyfluoroalkyl substances (PFAS) pollution as they break down in the atmosphere. These &ldquo;forever chemicals&rdquo; have been found in water and food sources, raising concern that HFO adoption is simply moving from one F-gas environmental contaminant to another.</li>
			</ul>
            <p>The Kigali Amendment established thoughtful phase-down schedules with strong global buy-in that will yield significant HFC emissions reductions; yet implementation risks remain. The complexity of the HFC transition requires a wide array of solutions to address the barriers outlined above. Significant financial investment by governments, manufacturers, technicians, and other stakeholders is required to enable full Kigali adoption. With limited transition finance from sources like the Multilateral Fund and World Bank relative to required investment scale, these challenges create concrete risks of delayed implementation and prolonged HFC reliance.</p>
		</section>

        <section id="addressing-the-gaps">
			<h1><section id="gap-implementation-risks">
			<h1>How Lifecycle Refrigerant Management Addresses Gaps</h1></h1>

            <p>Lifecycle refrigerant management (LRM) —the systematic mitigation of refrigerant emissions across equipment lifecycles — addresses aspects of both gaps in the Kigali Amendment's scope. The potential for impact is substantial: LRM could mitigate 39 Gt of CO2e HFC and ODS emissions between 2025 and 2050. At roughly 1.5 Gt CO2e annually, this is comparable in scale to other high-priority superpollutant interventions such as methane capture at landfills. </p>

            <h2>Addressing Gap 1: LRM as the Solution to the Installed Refrigerant Bank
            </h2>

            <p>LRM is the only viable approach to address the existing installed bank of refrigerants. Without proper LRM, virtually all HFC and ODS refrigerants currently in use, or yet to be deployed, will eventually leak or be vented to the atmosphere.</p>

            <p>LRM encompasses four core interventions to prevent emissions across the equipment lifecycle:</p>
            <ul>
                <li><strong>Leak reduction</strong> through improved system design, proper installation, maintenance and monitoring during operation lifetime of cooling equipment.</li>
                <li><strong>Recovery</strong> of refrigerants during equipment servicing and at end-of-life, preventing intentional or accidental atmospheric venting.</li>
                <li><strong>Reclamation</strong> of recovered refrigerants to quality standards, enabling reuse in other equipment which decreases demand for virgin refrigerant production.</li>
                <li><strong>Destruction</strong> of recovered refrigerants for which there is little or no reuse potential through high-temperature incineration or other approved methods, permanently eliminating their direct climate impact.</li>
            </ul>

            <p>By managing refrigerants across the complete equipment lifecycle LRM prevents the vast majority of installed bank emissions that would otherwise escape during routine use, maintenance, and eventual retirement.</p>

			<figure style="margin: 2rem 0; text-align: center;">
				<img src={lrmJourney} alt="LRM journey" style="width: 25%; height: auto;" />
				<figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--color-text);">Figure 1: Refrigerant management value chain</figcaption>
			</figure>

		<section class="footnotes" style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--color-text); font-size: 0.9rem; color: var(--color-text);">
			<p><strong><sup>1</sup></strong> In 2024, global coal power generation grew by nearly 1% to 10,700 TWh, a new high (IEA). Coal power typically emits ~1 tonne CO2/MWh. 10,700 TWh = 10,700,000 GWh = 10,700 million MWh. At ~0.9 tonnes CO2/MWh for coal power = ~9.6 Gt CO2 from coal power.</p>
		</section>
	</main>
	<img style="width: 0%;" src={grants} alt="LRM" />
</div>

<style>
	:global(main section) {
		border-bottom: none !important;
		margin-top: 2rem;
		margin-bottom: 0;
		padding-top: 0;
		padding-bottom: 1rem;
	}
</style>

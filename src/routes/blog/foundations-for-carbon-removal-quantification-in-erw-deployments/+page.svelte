<script>
	import erw from '$lib/images/rock-weathering.webp';
	import deploymentledlearning from '$lib/images/blog/deploymentledlearning.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
</script>

<section class="intro">
	<div class="content">
		<div class="copy">
			<h1>Foundations for Carbon Removal Quantification in ERW Deployments</h1>
			<p> </p>
				<p>In <i>“Foundations”</i>, Cascade Climate has produced a shared framework for quantifying carbon removal in ERW deployments and distilled the best available science and practices for rigorously quantifying each component of the carbon and cation fluxes.</p>
				<p>This document is the culmination of a multi-stakeholder process undertaken from October 2023 through August 2024, involving ~50 academic scientists, ~20 ERW project developers, and not-for-profit organizations.</p>
				<p>The ERW field can accelerate scientific learning through deployments and field trials that (a) follow the guidance articulated in<i>“Foundations”</i>, and (b) share their quantification approaches and underlying data for the purpose of advancing science.</p>
		</div>
		<img src={erw} alt="Enhanced Rock Weathering" />
	</div>
	<div class="links">
		<PDFLink link="/example.pdf">Foundations - full document↗</PDFLink>
		<PDFLink link="/example.pdf">Foundations - technical executive summary↗</PDFLink>
	</div>
</section>
<ScrollNav />
<main>
	<section id="about">
		<h1>About</h1>
		<p>2023 saw an inflection point for the Enhanced Rock Weathering (ERW) field. The academic community showed a <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/posts/tjsuhrhoff_the-field-of-enhanced-rock-weathering-erw-activity-7148263729095213057-TLBu?utm_source=share&amp;utm_medium=member_desktop">~50% increase</a> in publications. Nearly 20 ERW project developers <a target="_blank" rel="noopener noreferrer nofollow" href="https://erw.info/">sprung up globally</a>, conducting trials across many countries on virtually all continents. Early buyers like <a target="_blank" rel="noopener noreferrer nofollow" href="https://frontierclimate.com/writing/lithos">Frontier</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://un-do.com/resources/case-studies/undo-becomes-microsofts-first-enhanced-rock-weathering-supplier/">Microsoft</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.nextgencdr.com/wp-content/uploads/2024/05/Final-Detailed-RfP-Document-.pdf">NextGen</a>, and <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.energy.gov/fecm/carbon-dioxide-removal-purchase-pilot-prize-phase-1-semifinalists">the U.S. Department of Energy</a> committed to a first wave of catalytic offtakes. Enhanced Rock Weathering’s potential as a scalable carbon removal solution and agricultural management practice is being noticed, studied, and tested in progressively larger deployments.</p>

		<p>As the field progresses into tens-of-thousand hectares in cumulative scale and as the number of practitioners grows, so does the need to align on a <strong>common foundation </strong>for carbon removal quantification. In the absence of this common core, underaligned quantification rigor would pose the risk of fragmenting quality tiers and result in the emergence of commercial practices incongruent with the state of science.</p>

		<p>Today, Cascade is thrilled to announce the publication of <em>Foundations for Carbon Dioxide Removal Quantification in ERW Deployments</em>. By establishing this common foundation, we aim to steer early deployments to take on the needed level of site characterization, direct measurements, and quantification rigor—the first of many steps in unlocking a cycle of faster and more efficient deployment-led learning.</p>

		<h2>Deployment-Led Learning Cycle</h2>
		<img src={deploymentledlearning} alt="Deployment Led Learning" style="width: 70%; height: auto;" />
		<p>The virtuous cycle of deployment-led learning goes like this–from top left, in clockwise direction:</p>

<ul>
    <li>
        <p>Early ERW deployments incorporate “Foundations” guidance into their MRV design, thereby maximizing the learning value for every dollar spent.</p>
    </li>
    <li>
        <p>Learning is further accelerated through building a norm across practitioners to share their quantification approaches and underlying data.</p>
    </li>
    <li>
        <p>In addition to that, research priorities identified in “Foundations” can serve as a basis for a new wave of publicly and philanthropically-funded studies to address gaps that stand-alone commercial deployments are not positioned to address.</p>
    </li>
    <li>
        <p>All of the above can enable the field as a whole to advance our understanding of the science and practices underpinning quantification, and of ERW’s promise as a carbon removal approach.</p>
    </li>
</ul>

<p>“Foundations” is the first step in this deployment-led learning cycle. We developed a framework for CDR quantification in ERW deployments, distilled the best available science, and produced a thick set of guidance on the “hows and whys” of rigorous quantification.</p>

<h2>Highest-level learnings on the “hows and whys” of rigorous ERW quantification</h2>

<p>There are three parts of the system for an end-to-end quantification of an ERW deployment:</p>
<ul>
    <li>
        <p><strong>Life cycle emissions</strong>: These are primarily, though not limited to, activities to extract the feedstock materials, and haul and spread them on soils.</p>
    </li>
    <li>
        <p><strong>Near-Field Zone (NFZ)</strong>: The upper soil region where the ERW deployment must be directly tracked through measurements.</p>
    </li>
    <li>
        <p><strong>Far-Field Zone (FFZ)</strong>: The transport path of the weathering flux from leaving the NFZ, through the full soil profile and into groundwater flow paths, river systems, and ultimately the ocean.</p>
    </li>
</ul>
<p><strong>[INSERT CONFORMANCE ZONES]</strong>
</p>
<p>The single most important step in CDR monitoring and quantification is to “<strong>know your system and measure accordingly</strong>”. Practitioners should do an initial site characterization study of soil parameters, hydrologic regimes, crop systems, historic pH control practices, flow paths, and similar factors that could impact net carbon drawdown. Then, practitioners can design quantification methodologies and justify measurement choices based on that.</p>
<p>Quantifying net carbon removal involves combining data from many different imperfect “windows into the system”—geochemical measurements, tracers, and models—in seeking to assemble a comprehensive picture of the full set of carbon and cation fluxes. We can learn a lot about the system through measurements– but what is even more critical is the sharing of the underlying data to advance public research. Through data sharing, the ERW field can truly unlock the deployment-led learning cycle.</p>
<p>MRV planning can be challenging in practice, and significant care and expertise needs to go into doing it well. For example:</p>
<ul>
    <li>
        <p>Soil systems are spatially heterogeneous and <strong>sampling depth and density needs to account for the particularities of each soil system,</strong> including the baseline variability of the parameters being measured<strong>. </strong>Practitioners should quantify the uncertainty of their CDR estimate using rigorous statistical inference methods.</p>
    </li>
    <li>
        <p>There is a time lag between rocks being spread, rocks being dissolved in soils, and then carbon removal effectively occurs. <strong>Tracking needs to be done over time</strong> for us to understand all the time dynamics.</p>
    </li>
    <li>
        <p>ERW application is a shift to business-as-usual agronomic practices. Therefore, netCDR in ERW deployments should be compared to <strong>a counterfactual baseline measured through a control plot</strong>, so that background weathering fluxes and counterfactual agronomic management practices are monitored and subtracted in netCDR quantification.</p>
    </li>
</ul>
<h2 style="margin-top: 20px; margin-bottom: 20px;">So, how do we go about quantifying a deployment today?</h2>
<ul>
    <li>
        <p><strong>In the Near Field Zone</strong>, there are two primary approaches for measurements:</p>
        <ul>
            <li>
                <p><strong>Aqueous-phase measurements</strong> of dissolved weathering products or dissolved inorganic carbon that is produced and exported from the NFZ, or in drainage waters or downstream catchments.</p>
            </li>
            <li>
                <p><strong>Solid-phase measurements</strong> of cations released through feedstock dissolution, with deductions then taken to account for the various permanent and temporary carbon and cation loss pathways within the NFZ: non-carbonic acid weathering, cation sorption, secondary carbonates, secondary silicates and biomass uptake.</p>
            </li>
            <li>
                <p>It is a key research priority to intercompare aqueous phase monitoring with solid-phase mass balance results for the same deployment���when taken over the same depth, they should theoretically be producing the same results!</p>
            </li>
        </ul>
    </li>
    <li>
        <p>An additional flux we need to keep our eyes on in the NFZ is how <strong>soil organic carbon (SOC) stocks are impacted by ERW deployments</strong>. SOC monitoring on a small percentage of a deployment, and the sharing of the associated dataset, can advance research and help reduce potential SOC destabilization risks.</p>
    </li>
    <li>
        <p><strong>Constraining Far-Field Zone fluxes</strong> is an area of active research—it is challenging to do direct empirical monitoring over the spatial and time scales of the FFZ, and our ability to predictively model these fluxes is nascent. At this stage, the most tractable fluxes for near-term deployments to estimate include outgassing due to DIC equilibration and carbonate mineral precipitation (and burial) in rivers, as well as evasion due to carbonic acid system equilibration where terrestrial water mixes with the surface oceans.</p>
    </li>
</ul>
<h2>Looking forward</h2>

<p>We intend for the “Foundations” document to be a jumping-off point for the ERW community to engage in a cycle of learning-by-doing. In that vein, we hope that “Foundations" will prove a valuable resource to many practitioners and researchers who set out to deploy and study ERW in the coming years.</p>
<p>As we got deep into the weeds of the community process that produced “Foundations," it became clear that we need to learn more before fully standardizing approaches to ERW quantification. What is needed in the near term is more real-world deployments, across a variety of settings, that take a “know your system and measure accordingly” approach. Critically, this must be combined with transparent reporting of site characterizations, quantification methods, and underlying data. Together, we can learn systematically what deployment and quantification approaches work best in different settings, building from a 'common core’ to a suite of robust, context-specific methods.</p>
<p>"Foundations" provides clarity around what differentiates more versus less rigorous quantification in ERW deployments in the coming years. Because commercial deployments will be one key avenue for deployment-driven learning, we are actively working with buyers, project developers, and credit issuers to incorporate "Foundations" guidance and help ensure that all methodologies and protocols are rooted in a common core of quantification rigor.</p>
<p>While the “Foundations” document represents an assessment at a specific moment in time, we do not intend for the outcome of this community effort to be a static assessment with fixed recommendations; instead, Cascade hopes to regularly contribute to the learning through publishing follow-on case studies and analyses that reflect progress in the science, methods and practices of ERW deployments.</p>
	</section>


	<section id="links">
		<h1>Links</h1>
		<PDFLink link="/example.pdf" variant="accent">Foundations for Carbon Dioxide Removal Quantification in Enhanced Rock Weathering Deployments↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Foundations for Carbon Dioxide Removal Quantification in Enhanced Rock Weathering Deployments: Technical Summary↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Appendix 1: Anonymized Foundations Working Group and market practitioner comment period feedbackt↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Appendix 2: Foundations research and development (R&D) priorities↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Appendix 3: Working Group session summaries and requests for feedback from Market Focus Groups↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Figure 1: Conformance Zones↗</PDFLink>
		<PDFLink link="/example.pdf" variant="accent">Table 1: Components of the NFZ term balance↗</PDFLink>
			<PDFLink link="/example.pdf" variant="accent">Table 2: Considerations for the FFZ↗</PDFLink>
	</section>

	<section id="Acknowledgements">
		<h1>Acknowledgements</h1>
		<p>The Cascade team would like to express our immense gratitude to the individuals who contributed and gave their time to the output of this work.</p>
		<h5 style="margin-top: 0px;">Working Group on feedstock characterization, sampling guardrails, and best practices for taking solid, aqueous, and gas phase measurements:</h5>
		<ul>
			<li>
				<p><strong>Chair: </strong>Noah Planavsky</p>
			</li>
			<li>
				<p><strong>Members:</strong> Thorben Amann, Antonio Carlos de Azevedo, Jelle Bilma, James Campbell, Rachael James, Mike Kelland, Frank McDermott, Isabel Montañez, Ian Power, Tom Reershemius, Radomir Schmidt, Jesper Suhrhoff</p>
			</li>
		</ul>
		<h5>Working Group on the details of the carbon cycle fluxes / biogeochemical processes in the soil column:</h5>
		<ul>
			<li>
				<p><strong>Chair: </strong>Kate Maher</p>
			</li>
			<li>
				<p><strong>Members: </strong>Christiana Dietzen, Mathilde Hagens, Isabel Montañez, Noah Planavsky, Chris Reinhard, Rafael Santos, Radomir Schmidt, Eric Slessarev, Noah Sokol, Sara Vicca, Arthur Vienne, Bonnie Waring</p>
			</li>
		</ul>
		<h5>Working Group focused on downstream systems in the lower vadose zone, along groundwater flow paths, in surface water systems, and the ocean:</h5>
		<ul>
			<li>
				<p><strong>Chair: </strong>Shuang Zhang</p>
			</li>
			<li>
				<p><strong>Members: </strong>Yoshiki Kanzaki, Becca Neumann, Kirsty Harrington, Pete Raymond, Jim Saiers, Tao Wen, Chris Reinhard</p>
			</li>
		</ul>
		<h5>Working Group focused on soil biogeochemistry models:</h5>
		<ul>
			<li>
				<p><strong>Chair: </strong>Chris Reinhard</p>
			</li>
			<li>
				<p><strong>Members:</strong> Salvatore Calabrese, Yoshiki Kanzaki, Maria Val Martin, Brian Rogers, Lyla Taylor</p>
			</li>
		</ul>
		<h5>Working Group focused on considerations for quantifying life cycle emissions and for assessing the human health and ecological impacts:</h5>
		<ul>
			<li>
				<p><strong>Chair:</strong> Anu Khan</p>
			</li>
			<li>
				<p><strong>Members of the life cycle emission sub-Working Group:</strong> Spyros Foteinis, Cara Maesano, Stephen McCord, Morimoto Shinichirou, Yuan Yao</p>
			</li>
			<li>
				<p><strong>Members of the human health and ecological impacts sub-Working Group:</strong> Maya Almaraz, Stephanie Grand, Fatima Haque, Charlotte Levy</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on deep soil measurements:</h5>
		<ul>
			<li>
				<p><strong>Working Group members: </strong>Mike Kelland, Noah Planavsky</p>
			</li>
			<li>
				<p><strong>Practitioners/Others:</strong> Mark Baum, Benjamin Möller, Linah Ababneh</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on assessing frameworks for time accounting:</h5>
		<ul>
			<li>
				<p><strong>Working Group members: </strong>Freya Chay, Kate Maher, Stephen McCord, Shinichirou Morimoto, Chris Reinhard</p>
			</li>
			<li>
				<p><strong>Practitioners/Others:</strong> Mark Baum, Matthew Gammans, Jake Jordan, Christina Larkin, Simon Manley, Berta Moya, Eli Mitchell-Larson</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on constraining secondary carbonate formation:</h5>
		<ul>
			<li>
				<p><strong>Working Group members:</strong> Mathilde Hagens, Frank McDermott, Shinichirou Morimoto, Ian Power</p>
			</li>
			<li>
				<p><strong>Practitioners/Others: </strong>Elisabete Pedrosa, Ingrid Smet</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on assessing potential changes to soil organic carbon stocks:</h5>
		<ul>
			<li>
				<p><strong>Working Group members</strong>: Maya Almaraz, Becca Neumann, Radomir Schmidt, Arthur Vienne, Bonnie Waring</p>
			</li>
			<li>
				<p><strong>Practitioners/Others:</strong> Viri Alcantara-Shivapatham, Marta Camps-Arbestain, Jens Steffen Hammes, Maria Mooshammer, Katie Sierks</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on accounting for soil baseline heterogeneity:</h5>
		<ul>
			<li>
				<p><strong>Working Group members:</strong> Salvatore Calabrese, Mike Kelland, Ian Power, Bonnie Waring</p>
			</li>
			<li>
				<p><strong>Practitioners/Others:</strong> Mark Baum, Jake Jordan, Alison Marklein, Marya Matlin-Wainer, Katie Sierks, Philipp Swoboda</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on guardrails and guidelines for counterfactual baselines:</h5>
		<ul>
			<li>
				<p><strong>Working Group members:</strong> Spyros Foteinis, Noah Planavsky</p>
			</li>
			<li>
				<p><strong>Practitioners/Others:</strong> Marta Camps-Arbestain, Ben Westcott, Linah Ababneh, Tyler Kukla</p>
			</li>
		</ul>
		<h5>Joint Working Group-Industry sessions on near-term best practice for constraining downstream CO2 evasion:</h5>
		<ul>
			<li>
				<p><strong>Working Group members: </strong>Frank McDermott, Becca Neumann, Chris Reinhard, Tao Wen</p>
			</li>
			<li>
				<p><strong>Industry practitioners:</strong> Elliot Chang, Matthew Clarkson, Jens Steffen Hammes, Richard Hatz, Ella Holme, Jake Jordan, Sasankh Munukutla</p>
			</li>
		</ul>
		<h5>Authorship of “Foundations”, the output of the community process:</h5>
		<ul>
			<li>
				<p><strong>Authors: </strong>Jenny Mills, John Sanchez, Noemma Olagaray, Hara Wang, Alison Tune</p>
			</li>
			<li>
				<p><strong>Editors:</strong> Noah Anderson, Brad Rochlin</p>
			</li>
		</ul>
		<h5>Governance and facilitation of the community process:</h5>
		<ul>
			<li>
				<p><strong>Steering Committee members:</strong> Freya Chay, Anu Khan, Isabel Montañez, Noah Planavsky</p>
			</li>
			<li>
				<p><strong>Program leads:</strong> Hara Wang, Jenny Mills</p>
			</li>
		</ul>
		<h5>Technical Facilitators:</h5>
		<ul>
			<li>
				<p>Jenny Mills, John Sanchez, Noemma Olagaray, Hara Wang</p>
			</li>


	</section>

	<section id="citation-and-usage">
		<h1>Citation and Usage</h1>
		<p>To acknowledge and credit this work, please use the following citation:</p>
		
		<p>Mills, J. V., Sanchez, J., Olagaray, N. Y., Wang, H., and Tune, A. K., 2024; <em>Foundations for Carbon Dioxide Removal Quantification in ERW Deployments</em>, Cascade Climate.</p>
	</section>
</main>

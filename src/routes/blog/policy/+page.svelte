<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import farm2 from '$lib/images/nature/farm2.webp';
</script>

<svelte:head>
    <title>Cascade’s Approach to Policy</title> 
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Cascade’s Approach to Policy</h1>
				<p>
					Our approach to public policy is evidence-driven, pragmatic, and non-partisan. We advance policy that will accelerate innovation, unlock new opportunities for project financing, and create regulatory frameworks needed to responsibly advance natural climate interventions.  
				</p>
			</div>
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="policyPriorities">
			<h1>Policy Priorities</h1>
			<p>
				Our policy priorities are shaped by the specific considerations of each intervention that we work on, but our driving purpose remains to address obstacles and break down system-level bottlenecks to progress. Several of our primary policy efforts across the U.S. and European Union include:</p>
			<ul style="display: flex; flex-direction: column; gap: 1rem;">
				<li><b>ERW RD&D:</b> We’re advocating for increased public funding for ERW research, development, and demonstration in annual funding and agricultural research legislation, including the U.S. Farm Bill.</li>
				<li><b>Government CDR Procurement:</b> Governments will need to become one of the biggest buyers and supporters of CDR. We’re educating policymakers on how ERW and other carbon removal pathways can fit within government procurement programs.</li>
				<li><b>ERW Pay-for-Practice:</b> We’re building a shared understanding of the role that government subsidies and pay-for-practice programs can support early-adopters of ERW, starting with USDA Conservation Practice Standards.</li>
				<li><b>EU CRCF:</b> As a precedent-setting supply-side regulation, the EU Carbon Removals and Carbon Farming Regulation (CRCF) will help set standards for carbon quantification best-practices across CDR pathways. We’re working to ensure ERW is included in the EU CRCF process.</li>
			</ul>
			<p> </p>
		</section>
		<section id="governmentEngagement">
			<h1>Government Engagement</h1>
			<div>Cascade provides policy support and advice through responses to formal calls for public comment across various jurisdictions.</div>
			<PDFLink link="https://drive.google.com/file/d/1V9EhJkaZLCypa65FI2p-8UDmAxhEEGkP/view?usp=drive_link" variant="accent" style="display: block; text-align: left;">Comment Letter:&nbsp; U.S. Department of Agriculture (USDA) on Implementation of the Conservation Practices to Support Climate Change Mitigation and Adaptation↗</PDFLink>
			<PDFLink link="https://drive.google.com/file/d/1U-xzjFeCWVA7vraXbfL407_5-KUfBB-c/view?usp=drive_link" variant="accent" style="display: block; text-align: left;">Comment Letter:&nbsp; USDA on the Greenhouse Gas Technical Assistance Provider and Third Party Verifier Program↗</PDFLink>
			<br>
			<div>Cascade also participates in formal government advisory groups and consortiums including:</div>
			<ul>
			<li>U.S. National Institute of Standards and Technology Carbon Dioxide Removal (CDR) Consortium</li>
			<li>U.S. Pacific Northwest National Laboratory Mineralization CDR Measurement, Reporting, and Verification Collaborative</li>
			<li>U.S. National Renewable Energy Laboratory Standardized Carbon Removal Offtake Agreement Advisory Board</li>
			</ul>

		</section>
		<section id="nextHorizons">
			<h1>Next Horizons</h1>
			<p>
				In addition to our ongoing US and European Union ERW efforts, we are beginning to engage in other geographies that have high potential to accelerate ERW, including in Brazil and India, and are exploring the role that policy can play in advancing adjacent fields, including river and ocean-based carbon dioxide removal.
			</p>
		</section>
		<section id="resources">
			<h1>Resources</h1>
			<PDFLink link="/Cascade Climate_Enhanced Rock Weathering 101_vFinal.pdf" variant="accent">Enhanced Rock Weathering 101↗</PDFLink>
			<PDFLink link="/Cascade Climate_Dissolved Carbon in the Oceans_vFinal.pdf" variant="accent">Dissolved Carbon in the Oceans↗</PDFLink>
		</section>
	</main>
</div>

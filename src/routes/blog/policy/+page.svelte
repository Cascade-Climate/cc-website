<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import farm2 from '$lib/images/nature/farm2.webp';
</script>

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

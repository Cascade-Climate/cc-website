<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import farm2 from '$lib/images/nature/farm2.webp';
	import policy from '$lib/images/nature/policy.webp';
</script>

<svelte:head>
    <title>Policy Priorities</title> 
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Cascade’s Approach to Policy</h1>
				<p>
					Our policy priorities are shaped by the specific considerations of each intervention that we work on, but our driving purpose remains to address obstacles and break down system-level bottlenecks to progress.  
				</p>
			</div>
			<img src={policy} alt="Farm"/>
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="policyPriorities">
			<h1>Policy Priorities for Enhanced Rock Weathering</h1>
			<div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
				<PDFLink link="/Cascade Climate - Policy Priorities for Enhanced Rock Weathering - Executive Summary.pdf" variant="accent" style="display: block; text-align: left;">[Executive Summary] Policy Priorities for Enhanced Rock Weathering↗</PDFLink>
				<PDFLink link="/Cascade Climate - Policy Priorities for Enhanced Rock Weathering.pdf" variant="accent" style="display: block; text-align: left;">[Full] Policy Priorities for Enhanced Rock Weathering↗</PDFLink>
			</div>
			<br>
			<p>
				Enhanced rock weathering (ERW) is a promising durable carbon removal and land management solution that involves spreading finely crushed alkaline rocks onto fields. By speeding up the natural weathering process of rocks, ERW can absorb CO2 from the atmosphere and durably store it for millennia. ERW can also help counteract widespread soil acidification by providing a cost-effective soil pH management solution to farmers. To unlock ERW’s full carbon and agronomic potential, governments should:</p>
			<ul style="display: flex; flex-direction: column; gap: 1rem;">
				<li><b>Invest in dedicated ERW research and development on carbon quantification, agronomic impacts, and environmental risks and co-benefits. </b> Publicly-funded R&D should target remaining uncertainties for ERW that the private sector is not well-positioned to address. In particular, long-term field trials and associated data collection and management will be critical to understand ERW’s carbon, agronomic, and environmental impact across a range of soil types, operational systems, and regional climates.</li>
				<li><b>Provide financial assistance to address barriers to scale and support farmer adoption.:</b> Government financial assistance is needed to overcome barriers to scaling ERW—such as high measurement, reporting, and verification (MRV) costs—while supporting farmer adoption through new business models. This can take the form of funding for pilot projects, procurement policies, and direct compensation to farmers for ERW adoption.</li>
				<li><b>Increase confidence of prospective carbon removal buyers and investors to enter the market through high-rigor standards and clear regulatory frameworks.</b> Uncertainty around the durability and credibility of carbon removal credits, a lack of regulatory clarity, and overall market immaturity have kept prospective CDR buyers and investors from entering the market. Governments can address these challenges through non-financial levers, including the development of high-rigor MRV standards, regulations with transparent timelines, and clear carbon accounting frameworks.</li>
			</ul>
			<p> </p>
		</section>
		<section id="governmentEngagement">
			<h1>Government Engagement</h1>
			<div>Cascade provides policy support and advice through responses to formal calls for public comment across various jurisdictions.</div>
			<PDFLink link="/Response to NRCS RFI on Climate-Smart Ag CPS.pdf" variant="accent" style="display: block; text-align: left;">Comment Letter:&nbsp; U.S. Department of Agriculture (USDA) on Implementation of the Conservation Practices to Support Climate Change Mitigation and Adaptation↗</PDFLink>
			<PDFLink link="/GCSA RFI Response.pdf" variant="accent" style="display: block; text-align: left;">Comment Letter:&nbsp; USDA on the Greenhouse Gas Technical Assistance Provider and Third Party Verifier Program↗</PDFLink>
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
			<PDFLink link="/Cascade Climate_ERW Value Chain Graphic_vF.pdf" variant="accent">ERW Value Chain Graphic↗</PDFLink>
		</section>
	</main>
</div>

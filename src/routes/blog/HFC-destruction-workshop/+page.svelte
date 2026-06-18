<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import hfcWorkshopHero from '$lib/images/blog/hfc-destruction-workshop-hero.jpg'
</script>

<svelte:head>
    <title>Article 5 HFC Destruction Workshop: Synthesis and Recommendations</title> 
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Article 5 HFC Destruction Workshop: Synthesis and Recommendations</h1>
				<p>
					Hydrofluorocarbons warm the planet far more potently than CO<sub>2</sub>, yet across many developing countries these gases are still vented rather than recovered. Ahead of the 2026 Yale Clean Cooling Conference, Cascade Climate and the Carbon Containment Lab convened a small expert group to ask how well-designed carbon finance could help recover and destroy them — and what guardrails, data, and responsibilities are needed to do it without diluting countries' existing Montreal Protocol commitments.
				</p>
			</div>
			<img src={hfcWorkshopHero} alt="Air conditioning unit surrounded by tropical vegetation" class="large-image" />
		</div>
		<div class="links">
			<PDFLink link="/Cascade Climate - Article 5 HFC Destruction Workshop - Synthesis and Recommendations.pdf">Download Synthesis and Recommendations</PDFLink>
		</div>
	</section>
</div>

<style>
	:global(.content .large-image) {
		width: 60%;
		max-width: 600px;
		flex-shrink: 0;
	}
</style>

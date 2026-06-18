<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import hfcWorkshopHero from '$lib/images/blog/hfc-destruction-workshop-hero.jpg';
</script>

<svelte:head>
	<title>Article 5 HFC Destruction Workshop: Synthesis and Recommendations</title>
	<meta
		name="description"
		content="Workshop synthesis and recommendations on using carbon finance to recover and destroy HFCs in Article 5 countries, with guardrails for Montreal Protocol alignment."
	/>
</svelte:head>

<div class="hfc-workshop-page">
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Article 5 HFC Destruction Workshop</h1>
				<p class="subtitle">Synthesis and Recommendations</p>
				<hr />
				<p>
					Hydrofluorocarbons warm the planet far more potently than CO<sub>2</sub>, yet across many
					developing countries these gases are still vented rather than recovered. Ahead of the 2026
					Yale Clean Cooling Conference, Cascade Climate and the Carbon Containment Lab convened a
					small expert group to ask how well-designed carbon finance could help recover and destroy
					them — and what guardrails, data, and responsibilities are needed to do it without
					diluting countries' existing Montreal Protocol commitments.
				</p>
				<div class="links">
					<PDFLink
						link="/Cascade Climate - Article 5 HFC Destruction Workshop - Synthesis and Recommendations.pdf"
						variant="accent"
					>
						Download Synthesis and Recommendations
					</PDFLink>
				</div>
			</div>
			<img
				src={hfcWorkshopHero}
				alt="Air conditioning unit surrounded by tropical vegetation"
				class="large-image"
			/>
		</div>
	</section>
</div>

<style>
	:global(.hfc-workshop-page .intro .copy h1) {
		margin-bottom: 0.35rem;
	}

	.subtitle {
		font-size: 1.35rem;
		font-weight: 300;
		margin: 0 0 1rem;
		color: var(--color-light);
	}

	:global(.hfc-workshop-page .intro .copy hr) {
		margin: 0 0 1.25rem;
		border: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.25);
	}

	:global(.hfc-workshop-page .intro .copy p) {
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	:global(.hfc-workshop-page .intro .links) {
		margin: 0;
		width: 100%;
		max-width: 28rem;
	}

	:global(.hfc-workshop-page .intro .links button) {
		width: 100%;
		text-align: center;
	}

	.large-image {
		width: min(360px, 100%);
		max-height: 520px;
		object-fit: cover;
		object-position: center;
		flex-shrink: 0;
	}

	@media (min-width: 961px) {
		.large-image {
			flex: 0 0 360px;
		}

		:global(.hfc-workshop-page .intro .content img) {
			width: 360px;
			min-width: 360px;
		}
	}

	@media (max-width: 960px) {
		:global(.hfc-workshop-page .intro .content) {
			align-items: flex-start;
		}

		.large-image {
			width: 100%;
			max-height: none;
			aspect-ratio: 3 / 4;
		}
	}
</style>

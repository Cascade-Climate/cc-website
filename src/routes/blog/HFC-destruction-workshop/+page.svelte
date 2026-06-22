<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import hfcWorkshopHero from '$lib/images/blog/hfc-destruction-workshop-hero.jpg';

	const pdfLink = '/HFC-Destruction-in-Article-5-Countries.pdf';
</script>

<svelte:head>
	<title>Article 5 HFC Destruction Workshop: Synthesis and Recommendations</title>
	<meta
		name="description"
		content="Workshop synthesis and recommendations on guardrails and pilots for catalytic HFC destruction projects in Article 5 countries."
	/>
</svelte:head>

<div class="hfc-workshop-page">
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Article 5 HFC Destruction Workshop</h1>
				<p class="subtitle">Synthesis and Recommendations</p>
				<div class="links links-top">
					<PDFLink link={pdfLink} variant="accent">
						Download Synthesis and Recommendations
					</PDFLink>
				</div>
				<p>
					Prior to the March 2026 Yale Clean Cooling Conference, Cascade Climate and the Carbon
					Containment Lab co-convened a small expert group for a workshop on &ldquo;Ensuring effective
					guardrails and pilots for catalytic HFC destruction projects in Article 5 countries&rdquo;.
					This workshop — on the heels of a major private sector commitment to super pollutant
					mitigation — discussed the potential use of carbon finance in catalyzing ODS and HFC
					recovery and destruction capacity build-out. In particular, it focused on enabling conditions
					and appropriate guardrails for HFC carbon credits in Article 5 countries (i.e., developing
					countries under the Montreal Protocol).
				</p>
				<p>
					The workshop was motivated by the idea that
					well-designed carbon finance could be a valuable component of kickstarting refrigerant
					recovery and destruction capacity in countries where these high-GWP gases are traditionally
					vented, and accelerating progress toward their Montreal Protocol, Kigali Amendment, and
					domestic regulatory obligations.
				</p>
				<p>
					The below document summarizes perspectives that emerged in the lead-up to, during, and after
					the workshop, as well as Cascade&rsquo;s recommendations for actions the field can take to
					maximize the value of initial HFC destruction projects as part of the broader refrigerant
					transition in Article 5 countries.
				</p>
				<div class="links">
					<PDFLink link={pdfLink} variant="accent">
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

	:global(.hfc-workshop-page .intro .copy p) {
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	:global(.hfc-workshop-page .intro .links) {
		margin: 0;
		width: 100%;
		max-width: 28rem;
		flex-direction: column;
		gap: 0.75rem;
	}

	:global(.hfc-workshop-page .intro .links-top) {
		margin-bottom: 1.25rem;
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

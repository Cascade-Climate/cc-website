<script>
	import heroImg from '$lib/images/nature/crn-hero-3.png';
	import eoiHighlightImg from '$lib/images/nature/crn-eoi-highlight.png';
</script>

<svelte:head>
	<title>Coordinated Research Network - Bedrock Initiative - Cascade Climate</title>
	<meta name="description" content="Standardized ERW field trials across global geographies to accelerate comparable learning." />
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="preamble">
		<p class="crumb"><a href="/bedrock-initiative">Bedrock Initiative</a></p>
		<h1>Coordinated Research Network</h1>
	</section>
	<section class="body">
		<p>
			The Coordinated Research Network (CRN) will consist of up to 15 standardized experimental field trials across diverse global geographies, beginning with two pilot sites selected in 2026.
		</p>
		<p>
			By deploying standardized protocols, measurement strategies, and experimental designs on sites over five years, the CRN will achieve what isolated studies cannot: cross-site learning powered by comparable datasets.
		</p>
		<p>The CRN is designed to answer four core scientific questions:</p>
		<ul class="core-questions">
			<li>
				Across a range of soils and climates, what is the carbon removal potential of ERW and on what timescales?
			</li>
			<li>
				How can different CDR quantification strategies be compared and combined to build a more complete picture of
				ecosystem-level geochemistry — and ultimately, of ERW's carbon removal potential?
			</li>
			<li>What are the agricultural benefits of ERW, and what factors drive them?</li>
			<li>
				What happens to weathering products in deeper soils, where reactions may reverse carbon removal but are difficult
				to observe and are poorly represented in models?
			</li>
		</ul>
		<p>
			Host sites will receive operational funding, authorship opportunities on site-specific and network-wide
			publications, and access to a global community of ERW researchers.
		</p>
		<section class="highlights" aria-labelledby="highlights-h">
			<h2 id="highlights-h">HIGHLIGHTS</h2>
			<article class="highlight-card">
				<img
					src={eoiHighlightImg}
					alt=""
					aria-hidden="true"
				/>
				<h3>(Closed) Call for Expressions of Interest: Coordinated Research Network for Enhanced Rock Weathering</h3>
				<p>
					Learn more about the CRN design and pilot site selection process.
				</p>
				<a href="https://cascadeclimate.org/blog/crn-eoi" target="_blank" rel="noopener noreferrer">Learn More</a>
			</article>
		</section>
		<p class="back-row"><a class="back" href="/bedrock-initiative">← Back to Bedrock overview</a></p>
	</section>
</div>

<style>
	.page {
		padding-bottom: 4rem;
	}
	.preamble {
		padding: 1.25rem 4rem;
		background: var(--color-dark);
		color: var(--color-light);
	}
	.hero-img {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		display: block;
	}
	.crumb a {
		color: #fff;
		text-decoration: none;
		font-size: 0.9rem;
	}
	.crumb a:hover {
		opacity: 0.92;
	}
	h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem 0 0;
	}
	.body {
		padding: 1.75rem 4rem;
		max-width: 720px;
	}
	.core-questions {
		margin: 0 0 1.1rem;
		padding-left: 1.35rem;
		list-style-type: disc;
		line-height: 1.58;
	}
	.core-questions li {
		margin-bottom: 0.75rem;
		padding-left: 0.35rem;
	}
	.core-questions li:last-child {
		margin-bottom: 0;
	}
	.core-questions li::marker {
		color: color-mix(in srgb, var(--color-accent) 75%, var(--color-dark));
	}
	.highlights {
		margin-top: 1.5rem;
	}
	.highlights h2 {
		font-weight: 300;
		font-size: 1.2rem;
		margin: 0 0 1rem;
		color: var(--color-dark);
	}
	.highlight-card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.highlight-card img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 1rem;
	}
	.highlight-card h3 {
		margin: 0;
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.35;
		color: var(--color-dark);
	}
	.highlight-card p {
		margin: 0;
		line-height: 1.5;
	}
	.highlight-card a {
		display: inline-block;
		margin-top: 0.25rem;
		border-radius: 2rem;
		background-color: var(--color-accent);
		color: var(--color-light);
		text-decoration: none;
		padding: 0.5rem 1.2rem;
		align-self: flex-start;
	}
	.back {
		color: var(--color-accent);
		text-decoration: none;
	}
	.back-row {
		margin-top: 2rem;
	}
	@media (max-width: 660px) {
		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>

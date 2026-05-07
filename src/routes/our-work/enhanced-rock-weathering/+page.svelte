<script>
import erwHero from '$lib/images/nature/erw-hero-2.png';
	import BedrockWorkstreamCards from '$lib/components/bedrock/BedrockWorkstreamCards.svelte';
	import ErwHighlights from '$lib/components/our-work/ErwHighlights.svelte';
</script>

<svelte:head>
	<title>Enhanced Rock Weathering - Cascade Climate</title>
	<meta
		name="description"
		content="Advancing the science, tools, and policy needed to make ERW a credible, scalable pathway for carbon removal and agricultural benefit."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={erwHero} alt="" class="hero-img" width="1024" height="684" />
	</section>
	<nav class="scroll-nav" aria-label="Enhanced Rock Weathering sections">
		<a href="#bedrock-initiative">Bedrock Initiative</a>
		<a href="#initiatives-and-tools">Initiatives and Tools</a>
		<a href="#recent-blogs">Recent Blogs</a>
	</nav>

	<section class="body">
		<h1>Enhanced Rock Weathering</h1>
		<p>
			To stabilize our climate, the world must expand its capacity to affordably remove carbon dioxide from the atmosphere alongside deep emissions cuts. Enhanced rock weathering (ERW) is a carbon removal approach grounded in the centuries-old soil management practice of liming. It accelerates natural weathering processes to durably remove CO₂ while benefiting agricultural productivity.
		</p>
		<p>
			ERW has the potential to become an important pathway for carbon removal with agricultural benefits if key scientific and cost uncertainties are addressed.
		</p>
		<p>
			Cascade is working to clear the path forward by coordinating inter-comparable field research and developing open-science tools. We're also engaging policymakers, buyers, and standard bodies to ensure the markets and policies shaping ERW's future evolve with science.
		</p>
		<section id="bedrock-initiative" class="bedrock-panel" aria-labelledby="bedrock-h">
			<h2 id="bedrock-h">Bedrock Initiative</h2>
			<p>
				Bedrock Initiative is a coordinated research program generating the agronomic and carbon removal evidence needed to bring enhanced rock weathering into compliance carbon markets and government agricultural programs — where it can deliver the most value for farmers and the climate.
			</p>
			<a class="cta" href="/bedrock-initiative">Learn more</a>
		</section>


		<section id="initiatives-and-tools" class="section-anchor">
			<ErwHighlights />
		</section>

		<section id="recent-blogs" class="recent-blogs section-anchor" aria-labelledby="recent-blogs-h">
			<h2 id="recent-blogs-h" class="section-title">RECENT BLOGS</h2>
			<div class="blog-list">
				<article>
					<h4><a href="/blog/data-quarry-update-spring-26">Rock On: The ERW Data Quarry Just Doubled Its Data</a></h4>
				</article>
				<article>
					<h4><a href="/blog/crn-eoi">Call for Expressions of Interest: Coordinated Research Network for Enhanced Rock Weathering</a></h4>
				</article>
				<article>
					<h4><a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">Foundations for Carbon Dioxide Removal Quantification in ERW Deployments</a></h4>
				</article>
			</div>
		</section>
		<p class="back-row"><a class="back" href="/our-work">Back to Our Work</a></p>
	</section>
</div>

<style>
	.page {
		font-size: 1rem;
		padding-bottom: 4rem;
	}

	.hero-img {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		display: block;
	}

	.scroll-nav {
		position: sticky;
		top: calc(4rem - 1px);
		z-index: 10;
		background: var(--color-dark);
		display: flex;
		border-top: 1px solid color-mix(in srgb, var(--color-light) 65%, transparent);
	}

	.scroll-nav a {
		flex: 1 1 0;
		padding: 0.72rem 0.6rem;
		text-align: center;
		text-decoration: none;
		color: var(--color-light);
		border: 1px solid color-mix(in srgb, var(--color-light) 55%, transparent);
		margin: -1px 0 0 -1px;
		font-size: 0.98rem;
	}

	.body {
		padding: 2rem 4rem 0;
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-anchor,
	.bedrock-panel {
		scroll-margin-top: 6rem;
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
		color: var(--color-dark);
	}

	.section-title {
		font-weight: 300;
		font-size: 1.2rem;
		margin-top: 1.25rem;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}

	.blog-list article {
		padding: 0.75rem 0;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 12%, transparent);
	}

	.blog-list article:last-child {
		border-bottom: 1px solid color-mix(in srgb, var(--color-dark) 12%, transparent);
	}

	.blog-list h4 {
		margin: 0;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.4;
	}

	.blog-list a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 1.05rem;
		font-weight: 500;
		color: var(--color-accent);
		text-decoration: none;
	}

	.back::before {
		content: '\2190';
		font-size: 1.35em;
		line-height: 1;
	}

	.back-row {
		margin-top: 2rem;
	}

	.bedrock-panel {
		margin-top: 2rem;
		padding: 1.75rem 2rem;
		background: var(--color-dark);
		color: var(--color-light);
		border-radius: 1rem;
	}

	.bedrock-panel h2 {
		font-weight: 400;
		font-size: 1.35rem;
		margin: 0 0 0.75rem;
		color: var(--color-light);
	}

	.cta {
		display: inline-block;
		margin-top: 1rem;
		border-radius: 2rem;
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.55rem 1.35rem;
		text-decoration: none;
	}

	@media (max-width: 660px) {
		.body {
			padding: 1.5rem 2rem 0;
		}
	}
</style>

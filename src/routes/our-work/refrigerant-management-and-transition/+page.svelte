<script>
	import heroImg from '$lib/images/nature/refrigerant-hero-3.png';
	import RefrigerantHighlights from '$lib/components/our-work/RefrigerantHighlights.svelte';
</script>

<svelte:head>
	<title>Refrigerant Management and Transition - Cascade Climate</title>
	<meta
		name="description"
		content="Narrowing the finance, policy, and infrastructure gaps preventing effective refrigerant management — one of the fastest ways to slow near-term warming."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<nav class="scroll-nav" aria-label="Refrigerant Management and Transition sections">
		<a href="#overview">Overview</a>
		<a href="#highlights">Highlights</a>
		<a href="#recent-blogs">Recent Blogs</a>
	</nav>
	<section id="overview" class="body">
		<h1>Refrigerant Management and Transition</h1>
		<p>
			Reducing super pollutant emissions — including refrigerants with high global warming potential (GWP) — is one of
			the most immediate opportunities we have to limit near-term warming. Yet as cooling demand surges, particularly in
			the Global South, high-GWP refrigerant emissions risk rising in lockstep.
		</p>
		<p>
			Lifecycle refrigerant management (LRM) reduces avoidable emissions from the installed base of refrigerants through
			improved leak management, recovery at servicing and end-of-life, reclamation, and destruction where reuse is not
			feasible. Refrigerant transition lowers the emissions impact of new equipment entering the market by promoting the
			use of lower-GWP alternatives and more efficient cooling technologies. Together, these strategies help countries meet
			their commitments to phase down high-GWP refrigerants while making refrigerant supply more secure and affordable —
			particularly in markets that depend on imports.
		</p>
		<p>
			Cascade is working to close the finance, incentive, and infrastructure gaps that hold back LRM implementation. We're
			supporting first-of-their-kind demonstrations, learning what works on the ground, and collaborating with policymakers
			and industry to build the institutional frameworks that reflect the diverse operating realities of the Global South.
		</p>
		<section id="highlights" class="section-anchor">
			<RefrigerantHighlights />
		</section>
		<section id="recent-blogs" class="recent-blogs section-anchor" aria-labelledby="recent-blogs-h">
			<h2 id="recent-blogs-h" class="section-title">RECENT BLOGS</h2>
			<div class="blog-list">
				<article>
					<h4><a href="/blog/lrm-financing">Financing the Recovery Economy: The First Step Towards Scaled Lifecycle Refrigerant Management</a></h4>
				</article>
				<article>
					<h4><a href="/blog/LRM-gaps">Lifecycle Refrigerant Management: Closing Critical Gaps in Global Climate Policy</a></h4>
				</article>
				<article>
					<h4><a href="/blog/cascade-entry-into-slcp-mitigation">Super Pollutant Mitigation Needs a Bigger Push—And We're Joining the Effort</a></h4>
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

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	.body {
		padding: 2rem 4rem 4rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-anchor,
	.body {
		scroll-margin-top: 6rem;
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

	@media (max-width: 660px) {
		.body {
			padding: 1.5rem 2rem 4rem;
		}
	}
</style>

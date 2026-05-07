<script>
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
	import heroImg from '$lib/images/nature/policy-hero-2.png';
	import policyImg from '$lib/images/nature/policy.webp';
</script>

<svelte:head>
	<title>Policy - Cascade Climate</title>
	<meta
		name="description"
		content="Advancing policy frameworks, standards, and incentives that help high-potential climate solutions scale with integrity."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="preamble">
		<h1>Policy</h1>
	</section>
	<section class="body">
		<p>
			Without the policy infrastructure required to build, sustain, and accelerate progress, high-potential climate
			solutions are likely to stall. Cascade partners with leading policy actors to build and shape the incentive
			structures and accountability frameworks these solutions need to scale.
		</p>
		<p>
			For ERW, Cascade convenes NGOs, researchers, project developers, and credit buyers to align on key research and
			policy priorities, and advises policymakers and regulators developing rigorous measurement and verification
			frameworks. For refrigerant management and transition, Cascade works with governments and implementing partners to
			advance policies that address emissions from existing refrigerant stocks and accelerate the transition to low-impact
			alternatives.
		</p>

		<section aria-labelledby="highlights-h">
			<h5 id="highlights-h">HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={asiasmoke} alt="Accounting and claims for climate pollutants" />
					<h2>Accounting and claims for short-lived and long-lived climate pollutants</h2>
					<p>
						Learn how Cascade is driving strong community alignment on the credibility of corporate and international
						credit claims, and read our latest report.
					</p>
					<a href="/blog/accounting-and-claims-for-super-pollutants">Learn More</a>
				</div>
				<div>
					<img src={farm1} alt="Policy priorities for ERW" />
					<h2>Policy priorities for ERW</h2>
					<p>
						We advance policies that support ERW innovation, provide financial assistance for responsible scale-up,
						and increase confidence of carbon removal buyers and investors to enter the market.
					</p>
					<a href="/blog/policy">Learn More</a>
				</div>
				<div>
					<img src={policyImg} alt="ERW in EU carbon removal policy" />
					<h2>ERW in EU carbon removal policy</h2>
					<p>
						An in-depth look at how ERW fits within the EU Carbon Removal and Carbon Farming regulation and carbon
						market frameworks.
					</p>
					<a href="/blog/drawdown-to-durable">Learn More</a>
				</div>
			</div>
		</section>

		<section class="recent-blogs" aria-labelledby="recent-blogs-h">
			<h5 id="recent-blogs-h" class="recent-title">RECENT BLOGS</h5>
			<div class="blog-list">
				<article>
					<h4><a href="/blog/accounting-and-claims-for-super-pollutants">Beyond GWP100: Accounting and Claims for Short-Lived and Long-Lived Climate Pollutants</a></h4>
				</article>
				<article>
					<h4><a href="/blog/LRM-gaps">Lifecycle Refrigerant Management: Closing Critical Gaps in Global Climate Policy</a></h4>
				</article>
				<article>
					<h4><a href="/blog/policy">Policy priorities for ERW</a></h4>
				</article>
				<article>
					<h4><a href="/blog/crossing-the-bridge">Voluntary climate financing as a bridge</a></h4>
				</article>
			</div>
		</section>

		<p class="back-row"><a class="back" href="/our-work/market-development-and-policy">Back to Market Development and Policy</a></p>
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

	.preamble {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	.body {
		padding: 1.5rem 4rem 4rem;
		max-width: 900px;
		margin: 0 auto;
	}

	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin-top: 1.25rem;
		margin-bottom: 1rem;
	}

	.highlights h2 {
		font-weight: 300;
		margin: 1rem 0;
		color: var(--color-dark);
	}

	.highlights {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-gap: 2rem;
	}

	.highlights > div {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.highlights img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.highlights p {
		margin: 0;
	}

	.highlights a {
		display: inline-block;
		margin-top: auto;
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-align: center;
		padding: 0.5rem 1.2rem;
		font-size: 1rem;
		width: 100%;
		text-decoration: none;
		color: var(--color-light);
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
		.highlights {
			grid-template-columns: 1fr;
		}

		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	@media (max-width: 1100px) and (min-width: 661px) {
		.highlights {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>

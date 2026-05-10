<script>
	import heroImg from '$lib/images/nature/carbon-markets-hero-2.png';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import bridge from '$lib/images/nature/bridge.webp';
	import beyondGwp100Preview from '$lib/images/nature/beyond-gwp100-preview.png';
</script>

<svelte:head>
	<title>Carbon Markets (archived) - Cascade Climate</title>
	<meta
		name="description"
		content="Building stronger voluntary and compliance carbon market foundations for credible climate impact."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="body">
		<h1>Carbon Markets</h1>
		<p>
			Even the most promising climate solutions can stall, fragment rapidly, and remain reliant on a few early champions
			without the market infrastructure needed to sustain and scale them. Translating early, catalytic market signals into
			lasting climate impact requires sustaining support for innovation, building the preconditions for industry buy-in,
			and creatively tapping into multiple forms of climate finance to unlock the capital necessary to scale - all in
			service of finding the right long-term "home" for a given climate solution.
		</p>
		<p>
			Cascade works closely with leading actors across the private and public sector to shape the market foundations these
			solutions depend on — from strengthening crediting methodologies that ensure high quality demonstration projects,
			enabling learning from early catalytic projects, and unlocking future demand pools that enable promising solutions
			to grow.
		</p>

		<section aria-labelledby="highlights-h">
			<h5 id="highlights-h">HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={asiasmoke} alt="Accounting and claims for short-lived and long-lived pollutants" />
					<h2>Accounting and claims for short-lived and long-lived pollutants</h2>
					<p>
						Learn how Cascade is driving strong community alignment on the credibility of corporate and international
						credit claims, and read our latest report.
					</p>
					<a href="/blog/accounting-and-claims-for-super-pollutants">Learn More</a>
				</div>
				<div>
					<img src={beyondGwp100Preview} alt="Beyond GWP100 workshop summary cover" />
					<h2>Beyond GWP 100: Summary and Recommendations</h2>
					<p>
						Read the report from our 2025 Climate Week NYC workshop on rigorous accounting and claims-making in a
						net-zero framework.
					</p>
					<a href="https://cascadeclimate.org/Cascade%20Climate%20-%20Beyond%20GWP100%20(Workshop%20Summary%20+%20Recommendations).pdf" target="_blank" rel="noopener">Learn More</a>
				</div>
				<div>
					<img src={bridge} alt="Voluntary climate financing as a bridge" />
					<h2>Voluntary climate financing as a bridge</h2>
					<p>
						Voluntary climate finance is one of the few tools we can deploy at speed to test and de-risk climate
						technologies, while closing critical gaps to scale up.
					</p>
					<a href="/blog/crossing-the-bridge">Learn More</a>
				</div>
			</div>
		</section>

		<section class="recent-blogs" aria-labelledby="recent-blogs-h">
			<h5 id="recent-blogs-h" class="recent-title">RECENT BLOGS</h5>
			<div class="blog-list">
				<article>
					<h4>
						<a href="/blog/cascade-entry-into-slcp-mitigation"
							>Super Pollutant Mitigation Needs a Bigger Push—And We're Joining the Effort</a>
					</h4>
				</article>
				<article>
					<h4>
						<a href="/blog/accounting-and-claims-for-super-pollutants"
							>Beyond GWP100: Accounting and Claims for Short-Lived and Long-Lived Climate Pollutants</a>
					</h4>
				</article>
				<article>
					<h4>
						<a href="/blog/crossing-the-bridge"
							>Crossing the Bridge: How Voluntary Climate Finance Can Accelerate Sustained Policy and Industry Adoption</a>
					</h4>
				</article>
			</div>
		</section>

		<p class="back-row"><a class="back" href="/our-work/market-development-and-policy">Back to Policy and Market Development</a></p>
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

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	.body {
		padding: 2rem 4rem 4rem;
		max-width: 1100px;
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

		.body {
			padding: 1.5rem 2rem 4rem;
		}
	}

	@media (max-width: 1100px) and (min-width: 661px) {
		.highlights {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>

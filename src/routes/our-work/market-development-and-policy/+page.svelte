<script>
	import heroImg from '$lib/images/nature/market-development-policy-hero-pmd.jpg';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import bridge from '$lib/images/nature/bridge.webp';
	import beyondGwp100Preview from '$lib/images/nature/beyond-gwp100-preview.png';
	import farm1 from '$lib/images/nature/farm1.webp';
	import foundations from '$lib/images/nature/foundations.webp';
	import policyImg from '$lib/images/nature/policy.webp';
	import LRMblog1 from '$lib/images/blog/LRMblog1.webp';
</script>

<svelte:head>
	<title>Policy and Market Development - Cascade Climate</title>
	<meta
		name="description"
		content="Building policy and market development foundations for high-potential climate solutions."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="682" decoding="async" fetchpriority="high" />
	</section>
	<section class="body">
		<h1>Policy and Market Development</h1>
		<p>
			High-potential climate solutions can stall at the starting line, fragment rapidly, and remain reliant on a few early
			champions without the policy and economic cases required to build, maintain, and accelerate progress.
		</p>
		<p>
			Moving from early, catalytic demonstration projects to enduring, policy-driven climate impact takes coordinated
			action from industry leaders who take early bets, policymakers and standards setters who cultivate the conditions for
			adoption, financial institutions that unlock capital, civil society that demands integrity, and more.
		</p>
		<p>
			Cascade partners with these leading policy and market actors to build and shape the necessary foundations these
			solutions require — from advancing credible measurement and verification frameworks to putting forward incentive
			structures, business models, and policy frameworks that responsibly scale adoption.
		</p>

		<nav class="scroll-nav" aria-label="Policy and Market Development sections">
			<a href="#highlights">Multi-Sector</a>
			<a href="#spotlight-erw">ERW</a>
			<a href="#spotlight-refrigerant-management">Refrigerant Management</a>
		</nav>

		<section id="highlights" class="highlights-section section-anchor" aria-labelledby="highlights-h">
			<h5 id="highlights-h">MULTI-SECTOR POLICY AND MARKET DEVELOPMENT</h5>
			<div class="highlights">
				<div>
					<img src={asiasmoke} alt="" />
					<h2>Accounting and claims for short-lived and long-lived pollutants</h2>
					<p>
						Learn how Cascade is driving strong community alignment on the credibility of corporate and international
						credit claims, and read our latest report.
					</p>
					<a href="/blog/accounting-and-claims-for-super-pollutants">Learn More</a>
				</div>
				<div>
					<img src={beyondGwp100Preview} alt="" />
					<h2>Beyond GWP100</h2>
					<p>
						Read the report from our 2025 Climate Week NYC workshop on rigorous accounting and claims-making in a net-zero
						framework.
					</p>
					<a
						href="https://cascadeclimate.org/Cascade%20Climate%20-%20Beyond%20GWP100%20(Workshop%20Summary%20+%20Recommendations).pdf"
						target="_blank"
						rel="noopener noreferrer">Learn More</a>
				</div>
				<div>
					<img src={bridge} alt="" />
					<h2>Voluntary climate financing as a bridge</h2>
					<p>
						Voluntary climate finance is one of the few tools we can deploy at speed to test and de-risk climate
						technologies, while closing critical gaps to scale up.
					</p>
					<a href="/blog/crossing-the-bridge">Learn More</a>
				</div>
			</div>
		</section>

		<section id="spotlight-erw" class="highlights-section section-anchor" aria-labelledby="erw-h">
			<h5 id="erw-h">ERW POLICY AND MARKET DEVELOPMENT</h5>
			<div class="highlights">
				<div>
					<img src={policyImg} alt="" />
					<h2>ERW in EU carbon removal policy</h2>
					<p>
						An in-depth look at how ERW fits within the EU Carbon Removal and Carbon Farming regulation and carbon market
						frameworks.
					</p>
					<a href="/blog/drawdown-to-durable">Learn More</a>
				</div>
				<div>
					<img src={farm1} alt="" />
					<h2>Policy priorities for ERW</h2>
					<p>
						We need policies that support ERW research, lower costs, and build confidence in the durability of carbon
						removal.
					</p>
					<a href="/blog/policy">Learn More</a>
				</div>
				<div>
					<img src={foundations} alt="" />
					<h2>Enhanced Rock Weathering 101</h2>
					<p>An introductory explainer to enhanced rock weathering.</p>
					<a
						href="https://cascadeclimate.org/Cascade%20Climate_Enhanced%20Rock%20Weathering%20101_vFinal.pdf"
						target="_blank"
						rel="noopener noreferrer">Learn More</a>
				</div>
			</div>
		</section>

		<section
			id="spotlight-refrigerant-management"
			class="highlights-section section-anchor"
			aria-labelledby="rmt-h"
		>
			<h5 id="rmt-h">REFRIGERANT MANAGEMENT POLICY AND MARKET DEVELOPMENT</h5>
			<div class="highlights highlights--two">
				<div>
					<img src="/images/blog/christie-chau-OA07q0V2R94-unsplash.jpg" alt="" />
					<h2>Financing the Recovery Economy</h2>
					<p>
						Learn how Cascade is sequencing financing, policy, and markets to build practical refrigerant recovery systems in
						Southeast Asia.
					</p>
					<a href="/blog/lrm-financing">Learn More</a>
				</div>
				<div>
					<img src={LRMblog1} alt="" />
					<h2>Why lifecycle refrigerant management matters</h2>
					<p>
						Learn about the benefits, what blocks progress, and how strategic interventions can unlock immediate climate
						wins while building economic resilience.
					</p>
					<a href="/blog/LRM-gaps">Learn More</a>
				</div>
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

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	.body {
		padding: 2rem 4rem 4rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.scroll-nav {
		position: sticky;
		top: calc(4rem - 1px);
		z-index: 10;
		background: var(--color-dark);
		display: flex;
		border: 4px solid var(--color-light);
		margin: 0.85rem 1.75rem 1rem;
		border-radius: 0.5rem;
		overflow: hidden;
		box-sizing: border-box;
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

	.section-anchor {
		scroll-margin-top: 6rem;
	}

	.highlights-section {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 12%, transparent);
	}

	.highlights-section:first-of-type {
		margin-top: 2.25rem;
	}

	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin: 0 0 1rem;
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

	.highlights--two {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		max-width: 52rem;
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
		.highlights,
		.highlights--two {
			grid-template-columns: 1fr;
			max-width: none;
		}

		.body {
			padding: 1.5rem 2rem 4rem;
		}

		.scroll-nav {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}

	@media (max-width: 1100px) and (min-width: 661px) {
		.highlights:not(.highlights--two) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>

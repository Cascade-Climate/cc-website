<script>
	import heroImg from '$lib/images/nature/market-development-policy-hero-3.png';
</script>

<svelte:head>
	<title>Market Development and Policy - Cascade Climate</title>
	<meta
		name="description"
		content="Building market and policy foundations for high-potential climate solutions."
	/>
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="body">
		<h1>Market Development and Policy</h1>
		<p>
			High-potential climate solutions can stall at the starting line, fragment rapidly, and remain reliant on a few early
			champions without the policy and market infrastructure required to build, maintain, and accelerate progress.
		</p>
		<p>
			Moving from early, catalytic market signals to enduring, policy-driven climate impact takes coordinated action from
			industry leaders who take early bets, policymakers and standards setters who cultivate the conditions for adoption,
			financial institutions that unlock capital, civil society that demands integrity, and more.
		</p>
		<p>
			Cascade partners with these leading policy and market actors to build and shape the necessary foundations these
			solutions require — from advancing credible measurement and verification frameworks to putting forward incentive
			structures, market infrastructure improvements, and policy frameworks that responsibly scale adoption.
		</p>
		<section class="focus-areas" aria-label="Explore related pages">
			<div class="focus-grid">
				<a class="focus-card" href="/our-work/policy">
					<h3>Policy</h3>
					<span>Learn more about policy work</span>
				</a>
				<a class="focus-card" href="/our-work/carbon-markets">
					<h3>Carbon Markets</h3>
					<span>Learn more about carbon markets work</span>
				</a>
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

	.focus-areas {
		margin: 2rem 0 2.25rem;
		padding-top: 1.5rem;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 12%, transparent);
	}

	.focus-areas h2 {
		font-weight: 500;
		font-size: 1.1rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-dark);
		margin: 0 0 1rem;
	}

	.focus-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}

	.focus-card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem 1.1rem;
		border-radius: 0.85rem;
		border: 1px solid color-mix(in srgb, var(--color-dark) 14%, transparent);
		background: color-mix(in srgb, var(--color-dark) 4%, var(--color-light));
		text-decoration: none;
		color: inherit;
	}

	.focus-card h3 {
		margin: 0;
		font-weight: 500;
		font-size: 1.15rem;
		color: var(--color-dark);
	}

	.focus-card p {
		margin: 0;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.focus-card span {
		margin-top: auto;
		color: var(--color-accent);
		font-weight: 500;
		font-size: 0.92rem;
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

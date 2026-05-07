<script>
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import bridge from '$lib/images/nature/bridge.webp';
	import policy from '$lib/images/nature/policy.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
</script>

<h5>HIGHLIGHTS</h5>
<div class="highlights">
	<div>
		<img src={asiasmoke} alt="Asia Smoke" />
		<h2>Accounting and claims for short-lived and long-lived climate pollutants</h2>
		<p>
			Learn how Cascade is driving strong community alignment on the credibility of corporate and international credit
			claims, and read our latest report.
		</p>
		<a href="/blog/accounting-and-claims-for-super-pollutants">Learn More</a>
	</div>

	<div>
		<img src={bridge} alt="Crossing The Bridge" />
		<h2>Voluntary climate financing as a bridge</h2>
		<p>
			Voluntary climate finance is one of the few tools we can deploy at speed to test and de-risk climate technologies,
			while closing three critical gaps to scale up: building the evidence base, driving down costs, and resolving
			real-world deployment risks.
		</p>
		<a href="/blog/crossing-the-bridge" target="_blank" rel="noopener noreferrer">Learn More</a>
	</div>

	<div>
		<img src={policy} alt="Drawdown to Durable Storage" />
		<h2>ERW in EU carbon removal policy</h2>
		<p>
			An in-depth look at how ERW fits within the EU Carbon Removal and Carbon Farming regulation and carbon market
			frameworks.
		</p>
		<a href="/blog/drawdown-to-durable">Learn More</a>
	</div>

	<div>
		<img src={farm1} alt="Policy priorities for ERW" />
		<h2>Policy priorities for ERW</h2>
		<p>
			We advance policies that support ERW innovation, provide financial assistance for responsible scale-up, and increase
			confidence of carbon removal buyers and investors to enter the market.
		</p>
		<a href="/blog/policy">Learn More</a>
	</div>
</div>

<style>
	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin-top: 1.25rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-weight: 300;
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		line-height: 2.2rem;
		color: var(--color-dark);
	}

	.highlights {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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

	.highlights a {
		display: inline-block;
		margin-top: auto;
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-align: center;
		padding: 0.5rem 1.2rem;
		text-decoration: none;
		color: var(--color-light);
	}
</style>

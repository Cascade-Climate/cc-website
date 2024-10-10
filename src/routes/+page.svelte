<script>
	import heroPhoto from '$lib/images/hero.webp';
	import erwPhoto from '$lib/images/rock-weathering.webp';
</script>

<svelte:head>
	<title>Cascade Climate</title>
	<meta
		name="description"
		content="Cascade Climate accelerates progress in interventions that harness Earth’s natural systems—from soils, to oceans, to glaciers—to help stabilize our climate."
	/>
</svelte:head>
<div>
	<section id="headline">
		<h1>
			Accelerating progress in interventions that harness Earth’s natural systems—from soils, to
			oceans, to glaciers—to help stabilize our climate.
		</h1>
	</section>
	<section id="about">
		<img src={heroPhoto} alt="Cascade Climate" />
		<div>
			<h5>WHY NATURAL-SYSTEM CLIMATE INTERVENTIONS?</h5>
			<p>
				We already depend on Earth’s natural systems to mitigate human-caused emissions and maintain
				planetary balance. Harnessing natural systems will often be the most scalable and affordable
				path to undo or prevent deep climate harms—carbon cycle imbalance, catastrophic sea-level
				rise, irreversible damage from near-term warming. Natural system interventions often have
				the potential to offer a suite of powerful co-benefits—healthier ecosystems, more resilient
				local economies, and economic development in the Global South.
			</p>
			<p>
				Realizing these opportunities involves overcoming complex and cross-sectoral hurdles. Quantifying the full impact of natural system interventions can be challenging, and uncertainty around potential ecosystem impacts can cause paralysis without adequate tools and governance frameworks. Natural system interventions often offer critical–but often intangible–public benefits, requiring new and ambitious financing modes and public support models. These interlaced challenges can leave natural system climate interventions at an impasse, struggling to start the learn-by-doing flywheel.
			</p>
			<h4>
				Cascade is a philanthropically-backed nonprofit organization. Working across industry,
				government and science, we coordinate bottleneck-breaking initiatives, build tools and
				infrastructure that unlock cycles of learning-by-doing, and resource high-leverage R&D and
				policy work.
			</h4>
			<a href="/about-us">About Us</a>
		</div>
	</section>
	<section id="our-work">
		<h3>SPOTLIGHT ON <a href="/our-work">OUR WORK ↗</a></h3>
		<div class="spotlights">
			<div class="spotlight">
				<img src={erwPhoto} alt="Enhanced Rock Weathering" />
				<h2>Foundations...</h2>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
					of classical Latin literature from 45 BC, making it over 2000 years old.
				</p>
				<a href="/our-work">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={erwPhoto} alt="Enhanced Rock Weathering" />
				<h2>Data Access...</h2>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
					of classical Latin literature from 45 BC, making it over 2000 years old.
				</p>
				<a href="/our-work">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={erwPhoto} alt="Enhanced Rock Weathering" />
				<h2>Cost/Price...</h2>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
					of classical Latin literature from 45 BC, making it over 2000 years old.
				</p>
				<a href="/our-work">Learn More</a>
			</div>
		</div>
	</section>
</div>

<style>
	#headline h1 {
		max-width: 1100px;
		padding: 2rem 4rem;
		text-align: center;
		margin: 1rem auto;
	}

	a {
		text-decoration: none;
	}

	h1 {
		margin-top: 1rem;
		font-weight: 300;
		line-height: 1.2;
	}

	h4,
	h5 {
		font-weight: 550;
	}

	#about div {
		background-color: var(--color-dark);
		padding: 1rem 4rem;
		color: var(--color-light);
	}

	#about img {
		margin: 0;
		display: block;
	}

	#about a {
		background-color: var(--color-light);
		color: var(--color-dark);
		padding: 0.25rem;
		border-radius: 2rem;
		margin-bottom: 1rem;
		font-size: 1rem;
		width: 100%;
		display: block;
		text-align: center;
	}

	#about {
		display: flex;
		flex-direction: column;
	}

	h3 {
		font-weight: 300;
		font-size: 1.2rem;
	}

	h3 a {
		font-weight: 550;
		color: var(--color-text);
	}

	#our-work {
		padding: 2rem 4rem;
	}

	.spotlights {
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
	}

	.spotlight {
		width: 25%;
		flex-grow: 1;
	}

	.spotlight img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.spotlight h2 {
		font-weight: 300;
		margin: 1rem 0;
	}

	.spotlight a {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		margin-bottom: 1rem;
		font-size: 1rem;
		width: 100%;
	}

	@media (max-width: 660px) {
		.spotlights {
			flex-direction: column;
		}

		.spotlight {
			width: 100%;
		}

		#our-work,
		#headline h1,
		#about div {
			padding: 1rem 2rem;
		}
	}
</style>

<script>
	import heroPhoto from '$lib/images/hero.webp';
	import erwPhoto from '$lib/images/nature/erw.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
	import farm2 from '$lib/images/nature/farm2.webp';
	import ocean1 from '$lib/images/nature/ocean1.webp';
	import ocean2 from '$lib/images/nature/ocean2.webp';
	import data from '$lib/images/nature/data.webp';
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
			<h5 style="color: white;">WHY NATURAL-SYSTEM CLIMATE INTERVENTIONS?</h5>
			<p>
				We already depend on Earth’s natural systems to mitigate human-caused emissions and maintain planetary balance. Harnessing natural systems will often be the most scalable and affordable path to undo or prevent deep climate harms—carbon cycle imbalance, catastrophic sea-level rise, irreversible damage from near-term warming. Natural system interventions often have the potential to offer a suite of powerful co-benefits—healthier ecosystems, and more resilient local economies.
			</p>
			<p>
				Realizing these opportunities involves overcoming complex and cross-sectoral hurdles. Quantifying the full impact of natural system interventions can be challenging, and uncertainty around potential ecosystem impacts can cause paralysis without adequate tools and governance frameworks. Natural system interventions often offer critical–but often intangible–public benefits, requiring new and ambitious financing modes and public support models. These interlaced challenges can leave natural system climate interventions at an impasse, struggling to start the learn-by-doing flywheel.
			</p>
			<hr>
			<h4 style="text-align: center; margin: 18px; font-weight: 300; line-height: 1.4; font-size: 150%;">
				Cascade is a philanthropically-backed nonprofit organization. Working across industry,
				government and science, we <b>coordinate</b> bottleneck-breaking initiatives, <b>build</b> tools and
				infrastructure that unlock cycles of learning-by-doing, and <b>resource</b> high-leverage R&D and
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
				<h2>Foundations for CDR Quantification in ERW Deployments</h2>
				<p>
					After a year-long process involving over 100 stakeholders, we produced a comprehensive technical reference on the “hows” of rigorous carbon removal quantification in an ERW deployment.
				</p>
				<a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={data} alt="Data Sharing System" />
				<h2>Data sharing system to advance scientific research</h2>
				<p>
					To unlock a virtuous cycle of deployment-led learning, we are piloting the first-ever ERW data sharing system, the ERW Data Quarry, that connects researchers to data from commercial ERW deployments.
				</p>
				<b href="/our-work">Coming Soon</b>
			</div>
			<div class="spotlight">
				<img src={farm1} alt="Cost Estimator" />
				<h2>ERW MRV cost estimator and database</h2>
				<p>
					We built a tool to help inform practitioners of the stacked costs of different analytical measurement choices in an ERW deployment, as well as a database of cost quotes to help practitioners compare costs for leverage.
				</p>
				<a href="https://emce.cascadeclimate.org/">Learn More</a>
			</div>
		</div>
	</section>
</div>

<style>
	#headline h1 {
		max-width: 1100px;
		padding: 4rem 4rem;
		text-align: center;
		margin: 1rem auto;
	}

	a {
		text-decoration: none;
	}

	h1 {
		margin-top: 2rem;
		margin-bottom:2rem;
		font-weight: 300;
		line-height: 1.4;
	}

	h4 {
		margin-top: 2rem;
		margin-bottom:2rem;
		font-weight: 300;
		line-height: 1.4;
		font-size: 120%;
	}


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
	.spotlight b {
		background-color: white;
		color: var(--color-accent);
		border: 1px solid var(--color-accent);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		margin-bottom: 1rem;
		font-size: 1rem;
		font-weight: normal;
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

<script>
	import heroPhoto from '$lib/images/hero.webp';
	import erwPhoto from '$lib/images/nature/erw.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
	import farm2 from '$lib/images/nature/farm2.webp';
	import ocean1 from '$lib/images/nature/ocean1.webp';
	import ocean2 from '$lib/images/nature/ocean2.webp';
	import data from '$lib/images/nature/data.webp';
	import policy from '$lib/images/nature/policy.webp';
	import cost from '$lib/images/nature/cost.webp';
	import grants from '$lib/images/nature/grants.webp';
	import foundations from '$lib/images/nature/foundations.webp';
	import heroPhoto2 from '$lib/images/nature/heroPhoto2.webp';
	import heroPhoto3 from '$lib/images/nature/heroPhoto3.webp';
	import heroPhoto4 from '$lib/images/nature/heroPhoto4.webp';
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
		<img src={heroPhoto4} alt="Cascade Climate" />
		<div>
			<h5 style="color: white;">WHY NATURAL-SYSTEM CLIMATE INTERVENTIONS?</h5>
			<p>
				We already depend on Earth’s natural systems to mitigate human-caused emissions and maintain planetary balance. Interventions that enhance natural systems can bring advantages of scale and cost that will often make them among our best—and sometimes only—options to avoid deep harms that decarbonization alone cannot address. We need to accelerate our learning about these options if we seek to curb near-term warming, restore a preindustrial atmosphere, or stave off catastrophic sea-level rise and planetary tipping points.
			</p>
			<p>
				Realizing these opportunities involves overcoming complex systemic bottlenecks. Quantifying the full impact of natural system interventions can be particularly difficult, and uncertainty around potential ecosystem impacts can cause paralysis without adequate tools and governance frameworks. Natural system interventions can offer powerful climate benefits as well as co-benefits for local economies and ecosystems; yet these benefits are often public and intangible ones, requiring creative and bold new modes of financing and public support. These interlaced challenges can leave natural system interventions at an impasse, struggling to start the learn-by-doing flywheel.
			</p>
			<hr style="margin: 64px;">
		</div>
	</section>
	<section id="our-work">
		<h3><a href="about-us">ABOUT US ↗</a></h3>
		<h4 style="text-align: center; margin: 18px; font-weight: 300; line-height: 1.4; font-size: 150%;">
			Cascade is a philanthropically-backed nonprofit organization working across industry, government and science to accelerate progress in natural system climate interventions. We help remove the biggest bottlenecks inhibiting progress by <b>coordinating</b> ambitious cross-sector initiatives, <b>building</b> tools and infrastructure that unlock cycles of learning-by-doing, and <b>resourcing</b> high-leverage R&D and policy work.
		</h4>

		<hr style="margin: 64px;">

		<h3>SPOTLIGHT ON <a href="/our-work">OUR WORK ↗</a></h3>
		<div class="spotlights">
			<div class="spotlight">
				<img src={foundations} alt="Foundations for CDR Quantification in Enhanced Rock Weathering" />
				<h2>Foundations for CDR Quantification in ERW Deployments</h2>
				<p>
					After a year-long process involving over 100 stakeholders, we produced a comprehensive technical reference on the “hows” of rigorous carbon removal quantification in an ERW deployment.
				</p>
				<a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={grants} alt="ERW Field Grants" />
				<h2>ERW Field Data Partnership Grants</h2>
				<p>
					We launched an RFP process to fund the collection of ERW field datasets on existing deployment sites, aimed at answering priority R&D questions. <strong>Deadline: December 20th, 2024.</strong>
				</p>
				<a href="/blog/erw-field-grants"
				>Learn More</a>
			</div>
			<div class="spotlight">
				<img src={policy} alt="Policy" />
				<h2>Policy priorities for ERW</h2>
				<p>
					We advance policies that support ERW innovation, provide financial assistance for responsible scale-up, and increase confidence of carbon removal buyers and investors to enter the market.
				</p>
				<a href="/blog/policy">Learn More</a>
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

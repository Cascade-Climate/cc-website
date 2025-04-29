<script>
	import data from '$lib/images/nature/data.webp';
	import erw from '$lib/images/nature/erw.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
	import farm2 from '$lib/images/nature/farm2.webp';
	import cost from '$lib/images/nature/cost.webp';
	import foundations from '$lib/images/nature/foundations.webp';
	import policy from '$lib/images/nature/policy.webp';
	import grants from '$lib/images/nature/grants.webp';
	import metals from '$lib/images/nature/metals2.webp';
	import { onMount } from 'svelte';

	const sections = [
		{ id: 'erw', title: 'ERW' },
		{ id: 'oceansrivers', title: 'Oceans & Rivers' },
	];

	let activeSection = '';

	function handleScroll() {
		const scrollPosition = window.scrollY;
		activeSection = '';
		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + offsetHeight - 10) {
					activeSection = section.id;
				}
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
    <title>Our Work - Cascade Climate</title> 
    <meta
	name="description"
	content="Accelerating progress in interventions that harness Earth’s natural systems—from soils, to oceans, to glaciers—to help stabilize our climate."
/>
</svelte:head>

<div class="container">
	<section class="preamble">
		<h1>Our Work</h1>
		<p>
			Cascade is a philanthropically-backed nonprofit organization working across industry, government and science to accelerate progress in natural system climate interventions. We help remove the biggest bottlenecks inhibiting progress by <b>coordinating</b> ambitious cross-sector initiatives, <b>building</b> tools and infrastructure that unlock cycles of learning-by-doing, and <b>resourcing</b> high-leverage R&D and policy work.		</p>
	</section>
	<nav>
		{#each sections as section}
			<a class:active={activeSection === section.id} href="/our-work#{section.id}">
				{section.title}
			</a>
		{/each}
	</nav>
	<div class="areas">
		<h1>Programmatic Areas</h1>
		<section id="erw">
			<h3>Enhanced Rock Weathering</h3>
			<p>
				Our initial focus is advancing the progress of enhanced rock weathering (ERW), underpinned by a strong scientific evidence base. We believe that ERW has great potential to play a part in both the world’s long-term durable carbon removal portfolio and sustainable agricultural practice toolkit. We are supporters of accelerated private and public investment in ERW, with an overriding focus on learning and evidence-building to refine our collective understanding of how to optimize the role that ERW could play over a long time horizon. Cascade is leading the following initiatives in ERW:
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={metals} alt="ERW Metal Accumulation Calculator" />
					<h2>ERW Metal Accumulation Calculator</h2>
					<p></p>
					<p>
						We developed a free-to-use maximally conservative mass-balance model for assessing the risk of metal accumulation in soils.
					</p>
					<div style="height: 0.5rem;"></div>
					<a href="/blog/metal-accumulation-calculator">Learn More</a>					
				</div>
				<div>
					<img src={grants} alt="ERW Field Data Partnership Grant Awardees" />
					<h2>ERW Field Data Partnership Grant Awardees</h2>
					<p></p>
					<p>
						In collaboration with the Grantham Foundation, Google, and Frontier, we are excited to announce the awardees for our ERW Field Data Partnership Grants: over $1.2M in funding across 9 projects.
					</p>
					<div style="height: 0.5rem;"></div>
					<a href="/blog/erw-field-grant-awardees">Learn More</a>					
				</div>
				<div>
					<img src={policy} alt="Policy" />
					<h2>Policy priorities for ERW</h2>
					<p>
						We advance policies that support ERW innovation, provide financial assistance for responsible scale-up, and increase confidence of carbon removal buyers and investors to enter the market.
					</p>
					<a href="/blog/policy">Learn More</a>
				</div>
				<div>
					<img src={foundations} alt="Foundations for CDR Quantification in Enhanced Rock Weathering" />
					<h2>Foundations for CDR Quantification in ERW Deployments</h2>
					<p>
						After a year-long process involving over 100 stakeholders, we produced a comprehensive technical reference on the “hows” of rigorous carbon removal quantification in an ERW deployment.
					</p>
					<a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments"
						>Learn More</a>
				</div>
				<div>
					<img src={data} alt="Data Sharing System" />
					<h2>Data sharing system to advance scientific research</h2>
					<p>
						To unlock a virtuous cycle of deployment-led learning, we are piloting the first-ever ERW data sharing system, the ERW Data Quarry, that connects researchers to data from commercial ERW deployments.
					</p>
					<a href="/blog/erw-data-quarry"
					>Learn More</a>
				</div>
				<div>
					<img src={cost} alt="Cost Estimator" />
					<h2>ERW MRV cost estimator and database</h2>
					<p>
						We built a tool to help inform practitioners of the stacked costs of different analytical measurement choices in an ERW deployment, as well as a database of cost quotes to help practitioners compare costs for leverage.
					</p>
					<a href="/blog/erw-measurement-cost-stack-estimator-and-database">Learn More</a>
				</div>
				<div>
					<img src={farm1} alt="ERW Field Data Partnership Grants" />
					<h2>ERW Field Data Partnership Grants</h2>
					<a href="/blog/erw-field-grant-awardees" style="background-color: white; border: 2px solid #023C40; color: #023C40;">Awardees announced <u>here</u></a>
					<p></p>
					<p>
						<strong>Deadline passed in Dec 2024.</strong> We launched an RFP process to fund the collection of ERW field datasets on existing deployment sites, aimed at answering priority R&D questions. 
					</p>
					<a href="/blog/erw-field-grants">Learn More</a>					
				</div>
			</div>
		</section>
		<section id="oceansrivers">
			<h3>Oceans and Rivers</h3>
			<p>
				Cascade is expanding our work to help accelerate progress across the broader family of durable, natural system carbon removal pathways. We will have a particular, though not exclusive, focus on ocean and river alkalinity enhancement pathways that are the most immediately related ‘sibling’ pathways of ERW.
			</p>
			<p>
				Just as Cascade did in the early days of its work on ERW, we are beginning work in new areas by learning from—and building trusted relationships with—those who have been working in these domains for years. The particular bottlenecks facing durable ocean and river pathways have some commonality with, but also some sharp differences from, those in ERW. Cascade will help strengthen shared learnings amongst researchers and practitioners, and accelerate the pace of progress across these alkalinity enhancement pathways.
			</p>
		</section>
	</div>
</div>

<style>
	.container {
		font-size: 1rem;
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	h3 {
		font-weight: 500;
		font-size: 1.6rem;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}

	h2 {
		font-weight: 300;
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		line-height: 2.2rem;
		color: var(--color-dark);
	}

	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin-bottom: 1rem;
	}

	nav {
		position: sticky;
		top: calc(4rem - 1px);
		background-color: var(--color-dark);
		color: var(--color-light);
		border-top: 1px solid var(--color-light);
		display: flex;
		flex-wrap: wrap;
	}

	nav a {
		padding: 0.8rem;
		margin: -1px;
		margin-left: 0;
		font-size: 1.25rem;
		text-decoration: none;
		color: inherit;
		max-width: 256px;
		flex-grow: 1;
		text-align: center;
		border: 1px solid var(--color-light);
	}

	nav a:first-child {
		border-left: none;
	}

	nav a.active {
		background-color: var(--color-light);
		color: var(--color-dark);
	}

	.preamble {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	.areas {
		padding: 1rem 4rem;
		padding-bottom: 6rem;
	}

	.areas h1 {
		margin-top: 2rem;
		margin-bottom: -7rem;
		color: var(--color-dark);
	}

	.areas section {
		padding-top: 9rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -7rem;
		padding-bottom: 4rem;
	}

	.highlights {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		grid-gap: 2rem;
	}

	.highlights img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.highlights a {
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-align: center;
		padding: 0.5rem 1.2rem;
		text-decoration: none;
		color: var(--color-light);
	}

	.highlights b {
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
		.areas,
		.preamble {
			padding: 1rem 2rem;
		}

		.areas {
			padding-bottom: 6rem;
		}
	}
</style>

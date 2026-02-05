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
	import slcp from '$lib/images/nature/slcp-entry.webp';
	import wpe from '$lib/images/nature/erwexplorer.webp';
	import bridge from '$lib/images/nature/bridge.webp';
	import { onMount } from 'svelte';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import newblock1 from '$lib/images/supporters/newblock-1.webp';

	const sections = [
		{ id: 'erw', title: 'ERW' },
		{ id: 'superpollutantmitigation', title: 'Super Pollutant Mitigation' },
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
	content="Propelling high-potential climate solutions from the margins to the mainstream."
/>
</svelte:head>

<div class="container">
	<section class="preamble">
		<h1>Our Work</h1>
		<p>
			Cascade is a philanthropy-backed nonprofit helping mobilize a more comprehensive response to the climate crisis by advancing high-potential solutions that remain on the margins of mainstream climate action. We do this by leading ambitious initiatives spanning markets, policy and science to overcome the biggest bottlenecks to progress.
</p>
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
				Enhanced Rock Weathering (ERW) is an agronomic practice that permanently removes atmospheric carbon dioxide and brings concrete benefits to farmers, with particular promise for livelihoods in the Global South. ERW has potential to play a key role in both the world’s long-term durable carbon removal portfolio and sustainable agricultural toolkit. We have worked to catalyze a deployment-driven learning cycle in ERW to steadily build a robust evidence base, public trust, and policy support as the field grows. Cascade has led the following initiatives in ERW:
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={newblock1} alt="CRN EOI" />
					<h2>A new global network for coordinated ERW research</h2>
					<p>
						To answer the key questions faced by the field, Cascade is standing up a Coordinated Research Network (CRN) of standardized experimental field trials across diverse global geographies.
					</p>
					<a href="/blog/crn-eoi">Learn More</a>
				</div>
				<div>
					<img src={wpe} alt="Weathering potential explorer screencap" />
					<h2>Weathering Potential Explorer</h2>
					<p></p>
					<p>
						We built the Weathering Potential Explorer, an interactive global map that can accelerate successful ERW deployments by pinpointing regions where relative environmental conditions could favor rapid silicate weathering.
					</p>
					<div style="height: 0.5rem;"></div>
					<a href="/blog/weathering-potential-explorer">Learn More</a>					
				</div>
				<div>
					<img src={data} alt="Data Sharing System" />
					<h2>Data sharing system to advance scientific research</h2>
					<p>
						To unlock a virtuous cycle of deployment-led learning, we are piloting the first-ever ERW data sharing system, the ERW Data Quarry, that connects researchers to data from commercial ERW deployments.
					</p>
					<a href="/blog/data-sharing-system-for-erw"
					>Learn More</a>
				</div>
				<div>
					<img src={metals} alt="ERW Metal Accumulation Calculator" />
					<h2>ERW Metal Accumulation Calculator</h2>
					<p></p>
					<p>
						We developed a free-to-use maximally conservative mass-balance model for assessing the risk of metal accumulation in soils.
					</p>
					<a href="/blog/metal-accumulation-calculator">Learn More</a>					
				</div>
				<div>
					<img src={grants} alt="ERW Field Data Partnership Grant Awardees" />
					<h2>ERW Field Data Partnership Grant Awardees</h2>
					<p></p>
					<p>
						In collaboration with the Grantham Foundation, Google, and Frontier, we are excited to announce the awardees for our ERW Field Data Partnership Grants: over $1.2M in funding across 9 projects.
					</p>
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
					<img src={cost} alt="Cost Estimator" />
					<h2>ERW MRV cost estimator and database</h2>
					<p>
						We built a tool to help inform practitioners of the stacked costs of different analytical measurement choices in an ERW deployment, as well as a database of cost quotes to help practitioners compare costs for leverage.
					</p>
					<a href="/blog/erw-measurement-cost-stack-estimator-and-database">Learn More</a>
				</div>
			</div>
		</section>

		<section id="superpollutantmitigation">
			<h3>Super Pollutant Mitigation</h3>
			<p>
				We are now expanding our work to address the urgent risks associated with near-term warming. Cascade is focused on accelerating super pollutant mitigation efforts by building a bridge from early, voluntary climate private finance toward a policy-driven end state that embeds accountability for super pollutant reductions within industry value chains and national greenhouse gas inventories.
			</p>
			<p>
				Cascade is beginning work in this area by learning from—and building trusted relationships with—those who have been doing great work in this domain for years. As highlighted in our initial blog post, we see opportunities for Cascade to play a complementary role and to bring to bear lessons from the analogous journey that durable CDR has begun in recent years.
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={asiasmoke} alt="Asia Smoke" />
					<h2>Accounting and claims for short-lived and long-lived climate pollutants</h2>
					<p>
						Learn how Cascade is driving strong community alignment on the credibility of corporate and international credit claims, and read our latest report.
					</p>
					<a href="/blog/accounting-and-claims-for-super-pollutants">Learn More</a>
				</div>

				<div>
					<img src={bridge} alt="Crossing The Bridge" />
					<h2>Voluntary climate financing as a bridge</h2>
					<p>
						Voluntary climate finance is one of the few tools we can deploy at speed to test and de-risk climate technologies, while closing three critical gaps to scale up: building the evidence base, driving down costs, and resolving real-world deployment risks.
					</p>
					<a href="/blog/crossing-the-bridge" target="_blank" rel="noopener noreferrer">Learn More</a>
				</div>

				<div>
					<img src={slcp} alt="Super Pollutants" />
					<h2>Super pollutant mitigation needs a bigger push — and we're joining the effort</h2>
					<p>
						Meeting the climate challenge requires cutting super pollutants for near-term impact while scaling carbon removal for the long term. Cascade is expanding its work to advance this dual strategy.
					</p>
					<a href="/blog/cascade-entry-into-slcp-mitigation">Learn More</a>
				</div>
			</div>
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
		padding: 0.6rem;
		margin: -1px;
		margin-left: 0;
		font-size: 1rem;
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

	@media (max-width: 660px) {
		nav a {
			padding: 0.4rem;
			font-size: 0.875rem;
		}
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
		margin-bottom: 0.5rem;
		color: var(--color-dark);
	}

	.areas section {
		margin-top: -6rem;
		padding-top: 6rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -5rem;
		padding-bottom: 1rem;
	}

	/* Remove divider line from the last section */
	.areas section:last-child {
		border-bottom: none;
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

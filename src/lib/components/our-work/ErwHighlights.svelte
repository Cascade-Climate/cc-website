<script>
	import cost from '$lib/images/nature/cost.webp';
	import foundations from '$lib/images/nature/foundations.webp';
	import grants from '$lib/images/nature/grants.webp';
	import metals from '$lib/images/nature/metals2.webp';
	import wpe from '$lib/images/nature/erwexplorer.webp';
	import dataImg from '$lib/images/nature/data.webp';
</script>

<h5>INITIATIVES AND TOOLS</h5>
<div class="highlights">
	<div>
		<img src={dataImg} alt="ERW Data Quarry" />
		<h2>ERW Data Quarry</h2>
		<p>
			Learn about the first-ever ERW data sharing system, the ERW Data Quarry, that connects researchers to data from
			commercial ERW deployments to unlock deployment-led learning.
		</p>
		<a href="/blog/data-sharing-system-for-erw">Learn More</a>
	</div>
	<div>
		<img src={wpe} alt="Weathering potential explorer screencap" />
		<h2>Weathering Potential Explorer</h2>
		<p>
			We built the Weathering Potential Explorer, an interactive global map that can accelerate successful ERW
			deployments by pinpointing regions where relative environmental conditions could favor rapid silicate weathering.
		</p>
		<a href="/blog/weathering-potential-explorer">Learn More</a>
	</div>
	<div>
		<img src={metals} alt="ERW Metal Accumulation Calculator" />
		<h2>ERW Metal Accumulation Calculator</h2>
		<p>
			We developed a free-to-use maximally conservative mass-balance model for assessing the risk of metal accumulation
			in soils.
		</p>
		<a href="/blog/metal-accumulation-calculator">Learn More</a>
	</div>
	<div>
		<img src={cost} alt="MRV Calculator" />
		<h2>MRV Calculator</h2>
		<p>
			We built a tool to help inform practitioners of the stacked costs of different analytical measurement choices in an
			ERW deployment, as well as a database of cost quotes to help practitioners compare costs for leverage.
		</p>
		<a href="/blog/erw-measurement-cost-stack-estimator-and-database">Learn More</a>
	</div>
	<div>
		<img src={grants} alt="ERW Field Data Partnership Grant Awardees" />
		<h2>ERW Field Data Partnership Grant Awardees</h2>
		<p>
			In collaboration with the Grantham Foundation, Google, and Frontier, we are excited to announce the awardees for
			our ERW Field Data Partnership Grants: over $1.2M in funding across 9 projects.
		</p>
		<a href="/blog/erw-field-grant-awardees">Learn More</a>
	</div>
	<div>
		<img src={foundations} alt="Foundations for Carbon Dioxide Removal Quantification in ERW Deployments" />
		<h2>Foundations for Carbon Dioxide Removal Quantification in ERW Deployments</h2>
		<p>
			After a year-long process involving over 100 stakeholders, we produced a comprehensive technical reference on the
			hows of rigorous carbon removal quantification in an ERW deployment.
		</p>
		<a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">Learn More</a>
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

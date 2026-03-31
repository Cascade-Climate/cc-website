<script>
	import terrasols from '$lib/images/logos/terrasols.webp';
	import mati from '$lib/images/logos/mati.webp';
	import inplanet from '$lib/images/logos/inplanet.webp';
	import cdi from '$lib/images/logos/CDI.webp';
	const rockFlourLogo = '/images/logos/rock-flour-transparent.png';
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Rock On: The ERW Data Quarry Just Doubled Its Data</h1>
				<p class="date">March 31, 2026</p>
				<hr />
				<p class="preview">
					Three new datasets are now available, and two more project developers have joined the effort, doubling
					the data available on the platform and bringing the total pipeline to 26 commitments.
				</p>
				<div class="links">
					<a href="/blog/data-sharing-system-for-erw">Learn more about the ERW Data Quarry↗</a>
					<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">Access the ERW Data Quarry↗</a>
				</div>
			</div>
		</div>
	</section>
	<main>
		<h2 class="spaced-h2">Introducing 3 New Datasets</h2>
		<p class="datasets-intro">
			The three new datasets span three countries and deployment types, and they are available for non-commercial use
			— just submit a brief access request to get started.
		</p>
		<p>Here’s what makes each one an exciting contribution to the Data Quarry:</p>

		<div class="dataset-heading">
			<h3>
				<a
					href="https://www.mati.earth/"
					target="_blank"
					rel="noopener noreferrer"
					>Mati</a
				> (Chhattisgarh, India)
			</h3>
			<div class="dataset-logo-wrap">
				<img src={mati} alt="Mati logo" class="dataset-logo" />
			</div>
		</div>
		<p>
			Data collected from 635 rice paddy farmers in the summer (Kharif) 2024 deployment of Deccan traps basalt from
			Mati&apos;s Chhattisgarh, India location. Soil samples were collected at various time points from February 2024 to
			December 2025.
		</p>
		<p class="why-it-matters-lead"><strong>Why it matters:</strong></p>
		<ul>
			<li>First commercial deployment data available from India, a region with significant ERW scale potential</li>
			<li>
				Focuses on smallholder farms — smallholder farming is an important part of the global food system that remains
				understudied in ERW research
			</li>
			<li>Rice is grown globally on over 170 million ha, making this crop a critical context for understanding ERW efficacy at scale</li>
		</ul>

		<div class="dataset-heading">
			<h3>
				<a href="https://inplanet.earth/" target="_blank" rel="noopener noreferrer">InPlanet</a>
				(São Paulo, Brazil)
			</h3>
			<div class="dataset-logo-wrap">
				<img src={inplanet} alt="InPlanet logo" class="dataset-logo" />
			</div>
		</div>
		<p>
			Data from InPlanet’s Project Araçari in São Paulo state, an ERW project on ~360 ha of citrus plantation using
			locally sourced Serra Geral Basalt rock powder. Covers July 2024 - May 2025 and includes soil, soil porewater,
			and biomass alongside climatic, weather, and feedstock data
		</p>
		<p class="why-it-matters-lead"><strong>Why it matters:</strong></p>
		<ul>
			<li>Brazil represents another high-potential region for ERW scale</li>
			<li>
				Likely the first publicly available ERW dataset from a perennial crop system — expanding the field&apos;s
				knowledge beyond the annual crops that have dominated research to date
			</li>
			<li>
				This dataset is part of an ERW Field Data Partnership grant from Cascade, with more research on this site to
				come — so stay tuned for more exciting research “piggybacking” on this commercial deployment
			</li>
		</ul>

		<div class="dataset-heading">
			<h3>
				<a
					href="https://www.carbon-drawdown.de/"
					target="_blank"
					rel="noopener noreferrer"
					>Carbon Drawdown Initiative</a
				>
				(Germany)
			</h3>
			<div class="dataset-logo-wrap">
				<img src={cdi} alt="Carbon Drawdown Initiative logo" class="dataset-logo" />
			</div>
		</div>
		<p>
			Data from a 1,200 ton deployment, performed between August of 2022 and January of 2023, using Eifelgold
			basanite across multiple farmers’ fields in Germany, with samples from October and November of 2024. The
			dataset also includes some greenhouse data, comparing a control and ERW amended samples from the same soils.
			This dataset is publicly available <a href="https://cdrxiv.org/preprint/487" target="_blank" rel="noopener">here</a> (no request needed to access).
		</p>
		<p class="why-it-matters-lead"><strong>Why it matters:</strong></p>
		<ul>
			<li>Represents deployment over multiple years - rare in ERW</li>
			<li>
				Tests the same feedstock across field and greenhouse conditions, allowing researchers to isolate soil and
				weather effects on weathering rates
			</li>
			<li>
				This dataset is also part of an
				<a href="https://cascadeclimate.org/blog/erw-field-grant-awardees" target="_blank" rel="noopener"
					>ERW Field Data Partnership</a
				>
				grant from Cascade, with exciting additional research forthcoming
			</li>
		</ul>

		<p>
			We’re grateful to our partners for their openness and effort in sharing these datasets, and for supporting the
			growing norm of data transparency in ERW. You can explore and request access to all datasets (for non-commercial
			use) <a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">here</a>.
		</p>

		<hr style="margin: 40px 0;" />

		<h2 class="spaced-h2">Welcoming 2 New Project Developers</h2>
		<p>
			Alongside data sharing commitments from our founding partners, catalytic buyers, and ERW Field Data Partnership
			Grant awardees, we’re thrilled to share that
			<strong><a href="https://terrasols.earth/" target="_blank" rel="noopener noreferrer">Terrasols</a></strong>
			and
			<strong><a href="https://www.rockflour.co/" target="_blank" rel="noopener noreferrer">The Rock Flour Company</a></strong>
			have now joined the platform
			— each voluntarily committing to share data from designated commercial ERW projects to advance ERW science. Together, this brings the total Data Quarry pipeline to 26 datasets and counting.
		</p>

		<div class="logo-row">
			<img src={terrasols} alt="Terrasols logo" />
			<img class="rockflour-logo" src={rockFlourLogo} alt="The Rock Flour Company logo" />
		</div>

		<hr style="margin: 40px 0;" />

		<h2 class="spaced-h2">What’s Next</h2>
		<p>
			Because rock takes time to weather, datasets will be uploaded on a rolling basis as they become available. To
			further support data transparency, all health and safety data — as well as datasets that have been used for peer
			reviewed articles — are made publicly available via CDRXIV, where we’ve launched a designated <strong><a href="https://cdrxiv.org/channels/erw-data-quarry" target="_blank" rel="noopener noreferrer">ERW Data Quarry Channel</a></strong>.
		</p>
		<p class="after-channel-paragraph">
			At Cascade, we’re committed to advancing ERW science and progress, together. Here’s how you can get
			involved:
		</p>
		<ul>
			<li>
				Sign up for notifications when new datasets are added via our Google Group
				<a href="https://groups.google.com/a/cascadeclimate.org/g/notifs-dataquarry" target="_blank" rel="noopener">here</a>
			</li>
			<li>
				Researchers can browse datasets and submit a non-commercial use data access request
				<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">here</a>
			</li>
			<li>
				Project developer, buyer, or just curious to learn more? Reach us at
				<a href="mailto:data@cascadeclimate.org">data@cascadeclimate.org</a> or sign up for Cascade&apos;s newsletter
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScYIERiJVoobnCRYQ8uYmFuHm7_jsyR67Aw1XbfiFdzAYx-sw/viewform?pli=1&pli=1"
					target="_blank"
					rel="noopener">here</a>
			</li>
		</ul>
	</main>
</div>

<style>
	.intro .content {
		display: flex;
		justify-content: center;
	}

	.intro .copy {
		width: 100%;
		max-width: 980px;
		text-align: left;
	}

	main {
		max-width: 980px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.preview {
		margin-top: 1rem;
		line-height: 1.55;
		opacity: 0.95;
		max-width: 60ch;
	}

	.after-channel-paragraph {
		margin-top: 1rem;
	}

	.links {
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

	.dataset-heading {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		margin: 2rem 0 0.5rem;
	}

	.dataset-heading h3 {
		margin: 0;
	}

	.dataset-logo-wrap {
		width: 220px;
		height: 72px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 0.75rem 1rem;
		margin-bottom: 1rem;
	}

	.dataset-logo {
		display: block;
		margin: 0;
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
	}

	.why-it-matters-lead {
		margin-top: 1.25rem;
	}

	.spaced-h2 {
		margin-bottom: 1.5rem;
	}

	.datasets-intro {
		/* Overrides global main p { margin-bottom: 0 } to create a visible line of space */
		margin-bottom: 1rem;
	}

	.logo-row {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.logo-row img {
		height: 72px;
		max-width: 240px;
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 0.75rem 1rem;
		width: auto;
		object-fit: contain;
	}

	@media (max-width: 660px) {
		.links {
			flex-wrap: wrap;
		}

		main {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>

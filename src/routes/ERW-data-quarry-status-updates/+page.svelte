<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';

	const availableDatasets = [
		{
			contributor: 'InPlanet — Project Serra da Mantiqueira',
			region: 'Brazil',
			uploaded: 'May 2025; August 2026',
			years: '2',
			status: 'Available upon request'
		},
		{
			contributor: 'Carbon Drawdown Initiative — XXL Lysimeter',
			region: 'Germany',
			uploaded: 'May 2025',
			years: '1',
			status: 'Publicly available'
		},
		{
			contributor: 'Flux — UNCCD Trial',
			region: 'Kenya',
			uploaded: 'May 2025',
			years: '1',
			status: 'Available upon request'
		},
		{
			contributor: 'InPlanet — Project Araçari',
			region: 'Brazil',
			uploaded: 'March 2026',
			years: '1',
			status: 'Available upon request'
		},
		{
			contributor: 'Carbon Drawdown Initiative — 1200t Secondary Clay Formation Research',
			region: 'Germany',
			uploaded: 'March 2026',
			years: '1',
			status: 'Publicly available'
		},
		{
			contributor: 'Mati — Gaurella-Pendra-Marwahi Kharif 2024',
			region: 'India',
			uploaded: 'March 2026',
			years: '1',
			status: 'Available upon request'
		}
	];

	const pipelineDatasets = [
		{ contributor: 'Andes', region: 'USA', expected: 'By end of 2026' },
		{ contributor: 'Basic Dust', region: 'USA', expected: 'By end of 2026' },
		{ contributor: 'Carbonaught', region: 'Australia', expected: 'By end of 2026' },
		{ contributor: 'Carbony', region: 'Bulgaria', expected: 'By end of 2026' },
		{ contributor: 'Eion', region: 'USA', expected: 'By end of 2026' },
		{ contributor: 'Mati', region: 'India', expected: 'By end of 2026' },
		{ contributor: 'Silica', region: 'Mexico', expected: 'By end of 2026' },
		{ contributor: 'Terradot', region: 'Brazil', expected: 'By end of 2026' },
		{ contributor: 'Terrasols', region: 'India', expected: 'By end of 2026' },
		{ contributor: 'UNDO', region: 'Canada', expected: 'By end of 2026' },
		{ contributor: 'Varaha', region: 'India', expected: 'By end of 2026' },
		{ contributor: 'ZeroEx', region: 'Germany', expected: 'By end of 2026' },
		{ contributor: 'The Rock Flour Company', region: 'Denmark', expected: 'By mid-2027' },
		{ contributor: 'V6 Agronomy', region: 'USA', expected: 'Overdue**' },
		{ contributor: 'AltCarbon', region: 'India', expected: 'Lapsed**' }
	];
</script>

<svelte:head>
	<title>ERW Data Quarry: Available and upcoming datasets - Cascade Climate</title>
	<meta
		name="description"
		content="An up-to-date view of datasets currently available in the ERW Data Quarry, upcoming contributions, and how to request access for non-commercial use."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
</svelte:head>

<div class="dq-status-page">
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>ERW Data Quarry: Available and upcoming datasets</h1>
				<p class="date">Updated September 2026</p>
				<p>
					The ERW Data Quarry gives researchers and practitioners access to a growing body of data for
					non-commercial research.
				</p>
				<br />
				<p>
					This page provides an up-to-date view of the datasets currently available on the platform,
					upcoming contributions, changes in participation, and how to request access to data for
					non-commercial use.
				</p>
				<div class="links">
					<a href="/blog/data-sharing-system-for-erw">Learn more about the ERW Data Quarry↗</a>
					<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener"
						>Access the ERW Data Quarry↗</a
					>
				</div>
			</div>
			<img src="/images/blog/erw-data-quarry-hero.png" alt="Aerial view of an industrial rock quarry" />
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="available-datasets">
			<h1>Available datasets</h1>
			<p>
				Six datasets are currently available through the Data Quarry. These include a mix of
				commercial and research-led contributions across multiple geographies and data types.
			</p>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Dataset contributor</th>
							<th>Region</th>
							<th>Dates uploaded</th>
							<th>Years of data</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{#each availableDatasets as row}
							<tr>
								<td>{row.contributor}</td>
								<td>{row.region}</td>
								<td>{row.uploaded}</td>
								<td>{row.years}</td>
								<td>{row.status}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<section id="requesting-access">
			<h1>Requesting access</h1>
			<p>You can request access to datasets if you are exploring a non-commercial research question.</p>
			<p>To do this:</p>
			<ul>
				<li>
					<strong>Check out visualizations of currently available data</strong> —
					<a href="/blog/data-quarry-update-summer-26"
						>See our latest overview of current projects and variable coverage in the Data Quarry as
						of September 2026</a
					>.
				</li>
				<li>
					<strong>Log in</strong> — Set up a Data Quarry user profile at
					<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener"
						>data.cascadeclimate.org</a
					>.
				</li>
				<li>
					<strong>Review datasets</strong> — Dataset abstracts and variable coverage are posted in the
					Data Quarry catalog (Datasets menu at
					<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener"
						>data.cascadeclimate.org</a
					>).
				</li>
				<li>
					<strong>Explore which specific variables are included</strong> — Looking for dissolution,
					soil, feedstock, biomass, weather, or agronomic variables? Dataset coverage varies by
					project; available variables are listed by project.
				</li>
				<li>
					<strong>Submit a research proposal</strong> — Request the dataset(s) most relevant to your
					analysis using the Request Form linked to each dataset in the catalog.
				</li>
			</ul>
			<p>
				Note that all health &amp; safety data is already publicly available via the
				<a href="https://cdrxiv.org/channels/erw-data-quarry" target="_blank" rel="noopener"
					>Data Quarry CDRXIV channel</a
				>, which is also where full datasets will be available upon inclusion in an academic
				publication.
			</p>
			<p>
				If you have any additional questions, please reach out to our team at
				<a href="mailto:data@cascadeclimate.org">data@cascadeclimate.org</a>, and we will be happy to
				assist.
			</p>
		</section>

		<section id="upcoming-contributions">
			<h1>Upcoming contributions</h1>
			<h2>Pipeline of expected commercial datasets</h2>
			<p>
				The Data Quarry is a voluntary data-sharing effort, and participation evolves over time as
				projects progress. Submission timing can vary for multiple reasons, including lab turnaround
				times, farmer consent processes, and completion of project data packaging. We use broad
				timing windows to reflect that variability. Below is a pipeline of commercial<sup>*</sup>
				data-sharing partners who have formally committed to sharing data via the Data Quarry
				system.
			</p>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Commercial dataset contributor</th>
							<th>Region</th>
							<th>Dataset status — expected by</th>
						</tr>
					</thead>
					<tbody>
						{#each pipelineDatasets as row}
							<tr>
								<td>{row.contributor}</td>
								<td>{row.region}</td>
								<td>{row.expected}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p class="table-note">Table updated as of: September 2026</p>
			<p>
				<sup>**</sup>Note: Commitments are labeled as “overdue” if they are more than 6 months past
				their initially committed data-sharing timeline, but the partners continue to communicate and
				work with us on how to follow through on that commitment. Commitments with 3 or more months of
				unexplained delay and 3 or more follow-ups without a response are labeled as “lapsed,”
				indicating data sharing to the Data Quarry is no longer certain. Contributors are removed from
				the contributors list if a contribution is no longer expected because no ERW deployment data
				will be generated.
			</p>
			<p>
				<sup>*</sup>Note: Though they are not reflected in the pipeline above, we also welcome
				academic field trial datasets. We expect to host academic field trial datasets from our
				<a href="/blog/erw-field-grant-awardees">Field Data Partnerships Grants</a>’ deployments at
				academic research stations, and welcome any others who wish to leverage the Data Quarry
				platform to share ERW deployment datasets prior to publication. Reach out to
				<a href="mailto:data@cascadeclimate.org">data@cascadeclimate.org</a> if you are interested in
				sharing your field trial data.
			</p>
		</section>
	</main>
</div>

<style>
	:global(.dq-status-page .intro .date) {
		font-weight: 200;
		margin: 0.5rem 0 1.75rem;
	}

	.table-wrap {
		width: 100%;
		overflow-x: auto;
		margin: 1.25rem 0 1.5rem;
	}

	.table-wrap :global(table) {
		display: table;
		width: 100%;
		min-width: 640px;
		border-collapse: collapse;
		table-layout: auto;
	}

	.table-wrap :global(th),
	.table-wrap :global(td) {
		width: auto !important;
		padding: 0.65rem 0.75rem !important;
		text-align: left !important;
		vertical-align: top;
		border-bottom: 1px solid color-mix(in srgb, var(--color-text) 18%, transparent);
		font-size: 0.95rem;
		line-height: 1.4;
		word-break: normal;
		overflow-wrap: break-word;
	}

	/* Keep region and date columns on one line so the first row lines up with the rest */
	.table-wrap :global(th:nth-child(2)),
	.table-wrap :global(td:nth-child(2)),
	.table-wrap :global(th:nth-child(3)),
	.table-wrap :global(td:nth-child(3)) {
		white-space: nowrap;
	}

	.table-wrap :global(th) {
		font-weight: 550;
		border-bottom: 1px solid var(--color-text);
	}

	.table-note {
		font-size: 0.9rem;
		font-style: italic;
		margin-top: 0;
	}
</style>

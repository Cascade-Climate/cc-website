<script>
	import { onMount } from 'svelte';

	// Same current-datasets table as the November overview.
	// BEFORE GO-LIVE: remind the editor these table cells are still placeholders.
	// - UC Davis crops/area is ".4 ha" and "Grass Clover Rangeland"
	// - University of Illinois crops/area is only "Corn Belt" (no crop or hectares)
	// - Carbon Drawdown Initiative XXL Lysimeter crops/area is only "<1 ha" (no crop)
	const availableDatasets = [
		{
			contributor: 'InPlanet — Project Serra da Mantiqueira',
			region: 'Brazil',
			crops: ['1,010 ha Sugarcane'],
			uploadedLead: 'May 2025; ',
			uploadedEmphasis: 'October 2026',
			years: '2',
			status: 'Available upon request'
		},
		{
			contributor: 'Flux — UNCCD Trial',
			region: 'Kenya',
			crops: ['124 ha Maize'],
			uploaded: 'May 2025',
			years: '1',
			status: 'Available upon request'
		},
		{
			contributor: 'Carbon Drawdown Initiative — XXL Lysimeter',
			region: 'Germany',
			crops: ['<1 ha'],
			uploaded: 'May 2025',
			years: '1',
			status: 'Publicly available',
			statusHref: 'https://cdrxiv.org/preprint/350'
		},
		{
			contributor: 'Mati — Gaurella-Pendra-Marwahi Kharif 2024',
			region: 'India',
			crops: ['620 ha Rice'],
			uploaded: 'March 2026',
			years: '1',
			status: 'Available upon request'
		},
		{
			contributor: 'InPlanet — Project Araçari',
			region: 'Brazil',
			crops: ['358 ha Citrus'],
			uploaded: 'March 2026',
			years: '1',
			status: 'Available upon request'
		},
		{
			contributor: 'Carbon Drawdown Initiative — 1200t Secondary Clay Formation Research',
			region: 'Germany',
			crops: ['43 ha Mixed'],
			uploaded: 'March 2026',
			years: '1',
			status: 'Publicly available',
			statusHref: 'https://cdrxiv.org/preprint/487'
		},
		{
			contributor: 'Varaha — Project Khargone',
			region: 'India',
			crops: ['195 ha Cotton Wheat rotation'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		},
		{
			contributor: 'Silica — Mata de Agua',
			region: 'Mexico',
			crops: ['23 ha Sugarcane'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		},
		{
			contributor: 'University of California, Davis — Sierra Foothill Research and Extension Center',
			region: 'USA',
			crops: ['.4 ha', 'Grass Clover Rangeland'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		},
		{
			contributor: 'University of Illinois — Energy Farm',
			region: 'USA',
			crops: ['Corn Belt'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		}
	];

	const pipelineDatasets = [
		{ contributor: 'Andes', region: 'USA', expected: 'By end of 2026' },
		{ contributor: 'Carbonaught', region: 'Australia', expected: 'By end of 2026' },
		{ contributor: 'Carbony', region: 'Bulgaria', expected: 'By end of 2026' },
		{ contributor: 'Eion', region: 'USA', expected: 'By end of 2026' },
		{ contributor: 'Mati', region: 'India', expected: 'By end of 2026' },
		{ contributor: 'Terradot', region: 'Brazil', expected: 'By end of 2026' },
		{ contributor: 'UNDO', region: 'Canada', expected: 'By end of 2026' },
		{ contributor: 'Basic Dust', region: 'USA', expected: 'By early 2027' },
		{ contributor: 'Lithos', region: 'USA', expected: 'By early 2027' },
		{ contributor: 'ZeroEx', region: 'Germany', expected: 'By early 2027' },
		{ contributor: 'The Rock Flour Company', region: 'Denmark', expected: 'By mid-2027' },
		{ contributor: 'AltCarbon', region: 'India', expected: 'Lapsed', lapsed: true, citationId: 'citation2' },
		{ contributor: 'Terrasols', region: 'India', expected: 'Lapsed', lapsed: true },
		{ contributor: 'V6 Agronomy', region: 'USA', expected: 'Lapsed', lapsed: true }
	];

	const sections = [
		{ id: 'available-datasets', title: 'Available Datasets' },
		{ id: 'upcoming-contributions', title: 'Upcoming Contributions' },
		{ id: 'requesting-access', title: 'Requesting Access' }
	];

	let active = sections[0].id;
	let navWrapper;
	let navEl;
	let navHeight = 0;
	let pinned = false;
	const headerOffset = 64;

	function tick() {
		const line = 160;
		let next = '';
		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			if (rect.top <= line && rect.bottom > line) {
				next = section.id;
				break;
			}
		}
		if (!next) {
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					next = section.id;
					break;
				}
			}
		}
		if (next) active = next;
		if (navEl) navHeight = navEl.offsetHeight;
		if (navWrapper) pinned = navWrapper.getBoundingClientRect().top <= headerOffset;
	}

	onMount(() => {
		window.addEventListener('scroll', tick, { passive: true });
		tick();
		return () => window.removeEventListener('scroll', tick);
	});
</script>

<svelte:head>
	<title>ERW Data Quarry: Available and upcoming datasets - Cascade Climate</title>
	<meta
		name="description"
		content="An up-to-date view of the datasets currently available on the ERW Data Quarry, upcoming contributions, and how to request access for non-commercial use."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
</svelte:head>

<div class="dq-pipeline">
	<section class="hero">
		<div class="hero-copy">
			<h1>ERW Data Quarry: Available and upcoming datasets</h1>
			<p class="date">Updated November 2026</p>
			<p class="lede">
				The ERW Data Quarry gives researchers and practitioners access to a growing body of data for
				non-commercial research.
			</p>
			<p class="lede lede-follow">
				This page provides an up-to-date view of the datasets currently available on the platform,
				upcoming contributions, changes in participation, and how to request access to data for
				non-commercial use.
			</p>
			<div class="hero-actions">
				<a class="cta" href="/blog/data-sharing-system-for-erw">Learn more about the ERW Data Quarry↗</a>
				<a class="cta" href="https://data.cascadeclimate.org/" target="_blank" rel="noopener"
					>Access the ERW Data Quarry↗</a
				>
			</div>
		</div>
	</section>

	<div class="scroll-nav-wrapper" class:pinned bind:this={navWrapper}>
		<div class="scroll-nav-spacer" style:height={pinned ? `${navHeight}px` : '0'} aria-hidden="true"></div>
		<nav class="scroll-nav" aria-label="On this page" bind:this={navEl}>
			{#each sections as section}
				<a class:active={active === section.id} href="#{section.id}">{section.title}</a>
			{/each}
		</nav>
	</div>

	<article class="article">
		<section id="available-datasets" class="section">
			<h2>Available datasets</h2>
			<p>
				Ten datasets are currently available through the Data Quarry. These include a mix of commercial
				and research-led contributions across multiple geographies and data types.
			</p>
			<div class="table-card">
				<p class="table-label">Current Datasets</p>
				<div class="table-wrap">
					<table>
						<thead>
							<tr>
								<th>Dataset contributor</th>
								<th>Region</th>
								<th>Crops and area (ha)</th>
								<th>Dates uploaded</th>
								<th class="years">Years of data</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{#each availableDatasets as row}
								{@const contributor = row.contributor.split(' — ')}
								<tr class:is-new={row.isNew}>
									<td class="contributor">
										<span class="contributor-name">
											{#if row.isNew}<span class="new-tag">New</span>{/if}
											{contributor[0]}
										</span>
										{#if contributor[1]}<span class="contributor-project">{contributor[1]}</span>{/if}
									</td>
									<td class="region">{row.region}</td>
									<td class="crops">
										{#each row.crops as line, i}
											<span class:crop-detail={i > 0}>{line}</span>
										{/each}
									</td>
									<td class="uploaded">
										{#if row.uploaded}
											{row.uploaded}
										{:else}
											{row.uploadedLead || ''}{#if row.uploadedEmphasis}<span class="uploaded-new"
													>{row.uploadedEmphasis}</span
												>{/if}
										{/if}
									</td>
									<td class="years">{row.years}</td>
									<td>
										{#if row.statusHref}
											<a href={row.statusHref} target="_blank" rel="noopener noreferrer">{row.status}</a>
										{:else}
											<span class="status status-request">{row.status}</span>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</section>

		<section id="upcoming-contributions" class="section">
			<h2>Upcoming contributions</h2>
			<p>
				The Data Quarry is a voluntary data-sharing effort, and participation evolves over time as
				projects progress. Submission timing can vary for multiple reasons, including lab turnaround
				times, farmer consent processes, and completion of project data packaging. We use broad timing
				windows to reflect that variability. Below is a pipeline of commercial<sup
					><a id="citation1" href="#footnote1">1</a></sup
				>
				data-sharing partners who have formally committed to sharing data via the Data Quarry system.
			</p>
			<div class="table-card">
				<p class="table-label">Expected commercial datasets</p>
				<div class="table-wrap pipeline-wrap">
					<table>
						<thead>
							<tr>
								<th>Commercial dataset contributor</th>
								<th>Region</th>
								<th>Dataset sharing expected by</th>
							</tr>
						</thead>
						<tbody>
							{#each pipelineDatasets as row}
								<tr class:is-lapsed={row.lapsed}>
									<td class="contributor">
										<span class="contributor-name">{row.contributor}</span>
									</td>
									<td class="region">{row.region}</td>
									<td>
										{#if row.lapsed}
											<span class="status status-lapsed">Lapsed</span><sup
												><a href="#footnote2" id={row.citationId}>2</a></sup
											>
										{:else}
											{row.expected}
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<p class="table-note">Table updated as of: November 2026</p>
			<div class="footnotes">
				<h3>Footnotes</h3>
				<ol>
					<li id="footnote1">
						Though they are not reflected in the pipeline above, we also welcome academic field trial
						datasets. We expect to host academic field trial datasets from our
						<a href="/blog/erw-field-grant-awardees">Field Data Partnerships Grants</a>’ deployments at
						academic research stations, and welcome any others who wish to leverage the Data Quarry
						platform to share ERW deployment datasets prior to publication. Reach out to
						<a href="mailto:data@cascadeclimate.org">data@cascadeclimate.org</a> if you are interested
						in sharing your field trial data.
						<a href="#citation1">↩</a>
					</li>
					<li id="footnote2">
						Commitments are labeled as “overdue” if they are more than 6 months past their initially
						committed data-sharing timeline, but the partners continue to communicate and work with us
						on how to follow through on that commitment. Commitments with 3 or more months of
						unexplained delay and/or 3 or more follow-ups without a response are labeled as “lapsed,”
						indicating data sharing to the Data Quarry is no longer certain. Contributors are removed
						from the contributors list if a contribution is no longer expected because no ERW
						deployment data will be generated.
						<a href="#citation2">↩</a>
					</li>
				</ol>
			</div>
		</section>

		<section id="requesting-access" class="section">
			<h2>Requesting access</h2>
			<p>You can request access to datasets if you are exploring a non-commercial research question.</p>
			<p>To do this:</p>
			<ul>
				<li>
					<strong>Check out an overview, including visualizations, of currently available data</strong>
					—
					<a href="/erw/dq-updates"
						>See our latest overview of current projects and variable coverage in the Data Quarry as of
						November 2026</a
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
	</article>
</div>

<style>
	.dq-pipeline {
		background: var(--color-light);
		color: var(--color-text);
		font-size: 1rem;
		line-height: 1.62;
	}

	.hero {
		background: var(--color-dark);
		color: var(--color-light);
		padding: calc(4rem + 2.75rem) 4rem 2.65rem;
	}

	.hero-copy {
		max-width: 48rem;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1.15;
		margin: 0 0 0.85rem;
		max-width: 18em;
	}

	.date {
		margin: 0 0 1.15rem;
		font-weight: 300;
		opacity: 0.9;
	}

	.lede {
		max-width: 68ch;
		margin: 0;
		line-height: 1.62;
	}

	.lede-follow {
		margin-top: 1rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
		margin-top: 1.35rem;
	}

	.cta {
		display: inline-block;
		padding: 0.55rem 1.35rem;
		border-radius: 2rem;
		background: var(--color-accent);
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.3;
		border: 1px solid transparent;
	}

	.cta:hover {
		opacity: 0.92;
	}

	.scroll-nav-spacer {
		display: block;
	}

	.scroll-nav-wrapper.pinned .scroll-nav {
		position: fixed;
		left: 0;
		right: 0;
		top: calc(4rem - 1px);
		width: 100%;
		z-index: 10;
		box-shadow: 0 6px 28px color-mix(in srgb, var(--color-dark) 35%, transparent);
	}

	nav.scroll-nav {
		position: sticky;
		top: calc(4rem - 1px);
		z-index: 10;
		background: var(--color-dark);
		color: var(--color-light);
		border-top: 1px solid color-mix(in srgb, var(--color-light) 65%, transparent);
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	nav.scroll-nav a {
		flex: 1 1 0;
		min-width: 0;
		padding: 0.65rem 0.5rem;
		font-size: 0.84rem;
		line-height: 1.35;
		text-decoration: none;
		color: inherit;
		font-weight: 400;
		text-align: center;
		border: 1px solid color-mix(in srgb, var(--color-light) 55%, transparent);
		margin: -1px 0 0 -1px;
	}

	nav.scroll-nav a.active {
		background: var(--color-light);
		color: var(--color-dark);
	}

	.article {
		max-width: 70rem;
		margin: 0 auto;
		padding: 2rem 4rem 6rem;
	}

	.article p {
		margin: 0 0 1rem;
		line-height: 1.62;
	}

	.article h2 {
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.25;
		margin: 0 0 1rem;
	}

	.section {
		scroll-margin-top: 9.5rem;
		margin-top: 2.5rem;
	}

	.section:first-of-type {
		margin-top: 1.5rem;
	}

	.article a {
		color: #023c40;
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.article ul {
		margin: 0 0 1rem;
		padding-left: 1.35rem;
		line-height: 1.58;
	}

	.article li {
		margin-bottom: 0.65rem;
	}

	.table-card {
		margin: 0.35rem 0 1.75rem;
		border: 1px solid color-mix(in srgb, var(--color-dark) 14%, transparent);
		border-radius: 0.85rem;
		background: #fff;
		overflow: hidden;
	}

	.table-label {
		margin: 0;
		padding: 0.85rem 1.1rem 0.75rem;
		font-size: 0.78rem;
		font-weight: 550;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-dark);
	}

	.table-wrap {
		width: 100%;
		overflow-x: auto;
	}

	.table-wrap table {
		width: 100%;
		min-width: 920px;
		border-collapse: separate;
		border-spacing: 0;
	}

	.pipeline-wrap table {
		min-width: 640px;
	}

	.table-wrap th,
	.table-wrap td {
		padding: 0.85rem 1rem;
		text-align: left;
		vertical-align: middle;
		font-size: 0.92rem;
		line-height: 1.35;
	}

	.table-wrap th {
		background: var(--color-dark);
		color: var(--color-light);
		font-size: 0.68rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.table-wrap tbody td {
		border-bottom: 1px solid color-mix(in srgb, var(--color-dark) 8%, transparent);
	}

	.table-wrap tbody tr:last-child td {
		border-bottom: none;
	}

	.table-wrap tbody tr:nth-child(even) td {
		background: color-mix(in srgb, var(--color-dark) 3.5%, white);
	}

	.table-wrap tbody tr:hover td {
		background: color-mix(in srgb, var(--color-highlight) 16%, white);
	}

	.contributor {
		min-width: 14rem;
	}

	.contributor-name,
	.contributor-project,
	.crops span {
		display: block;
	}

	.contributor-name {
		font-weight: 550;
		color: var(--color-dark);
	}

	.contributor-project,
	.crop-detail {
		margin-top: 0.15rem;
		color: color-mix(in srgb, var(--color-dark) 72%, white);
		font-weight: 400;
	}

	.region,
	.years {
		white-space: nowrap;
	}

	.years {
		text-align: center;
		font-variant-numeric: tabular-nums;
		color: var(--color-dark);
	}

	.uploaded-new {
		font-weight: 600;
		color: var(--color-accent);
	}

	.status {
		display: inline-block;
		padding: 0.28rem 0.65rem;
		border-radius: 999px;
		font-size: 0.78rem;
		line-height: 1.3;
		font-weight: 500;
		white-space: nowrap;
	}

	.status-request {
		background: color-mix(in srgb, var(--color-accent) 12%, white);
		color: var(--color-accent);
	}

	.status-lapsed {
		background: color-mix(in srgb, var(--color-dark) 8%, white);
		color: color-mix(in srgb, var(--color-dark) 70%, white);
	}

	.new-tag {
		display: inline-block;
		margin-right: 0.4rem;
		padding: 0.08rem 0.42rem;
		border-radius: 999px;
		background-color: var(--color-highlight);
		color: var(--color-dark);
		font-size: 0.68rem;
		font-weight: 650;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		vertical-align: 0.08em;
	}

	.table-note {
		font-size: 0.9rem;
		font-style: italic;
		margin-top: 0;
	}

	.footnotes {
		margin-top: 1.5rem;
		padding-top: 1.25rem;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 14%, transparent);
		font-size: 0.9rem;
	}

	.footnotes h3 {
		margin: 0 0 0.75rem;
		font-weight: 500;
		font-size: 1.1rem;
	}

	.footnotes ol {
		margin: 0;
		padding-left: 1.35rem;
	}

	.footnotes li {
		margin-bottom: 0.75rem;
		scroll-margin-top: 9.5rem;
	}

	.article sup a {
		text-decoration: none;
		font-weight: 550;
		scroll-margin-top: 9.5rem;
	}

	.dq-pipeline :focus-visible {
		outline: 2px solid color-mix(in srgb, var(--color-highlight) 85%, transparent);
		outline-offset: 3px;
	}

	@media (max-width: 660px) {
		.hero,
		.article {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.hero {
			padding-top: calc(4rem + 1.5rem);
		}

		nav.scroll-nav,
		.scroll-nav-wrapper.pinned .scroll-nav {
			position: static;
			top: auto;
			left: auto;
			right: auto;
			width: auto;
			box-shadow: none;
		}

		.scroll-nav-spacer {
			display: none;
		}

		nav.scroll-nav a {
			flex: 1 1 100%;
			text-align: left;
			padding-left: 1rem;
		}
	}
</style>

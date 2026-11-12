<script>
	import { onMount } from 'svelte';

	// BEFORE GO-LIVE: remind the editor these table cells are still thin.
	// - UC Davis crops/area is ".4 ha Grass Clover Rangeland"
	// - University of Illinois crops/area is only "Corn" (no hectares)
	// - Carbon Drawdown Initiative XXL Lysimeter crops/area is only "<1 ha" (no crop)
	const datasets = [
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
			crops: ['195 ha Cotton and Wheat'],
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
			crops: ['.4 ha Grass Clover Rangeland'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		},
		{
			contributor: 'University of Illinois — Energy Farm',
			region: 'USA',
			crops: ['Corn'],
			uploadedEmphasis: 'October 2026',
			years: '1',
			status: 'Available upon request',
			isNew: true
		}
	];

	const sections = [
		{ id: 'overview', title: 'Overview' },
		{ id: 'current-datasets', title: 'Current Datasets' },
		{ id: 'overlap-insights', title: 'Insights' }
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
	<title>ERW Data Quarry: Latest Updates - Cascade Climate</title>
	<meta
		name="description"
		content="Ten unique datasets are now available, each a window into a real-world ERW project. We encourage researchers to request data to advance non-commercial ERW science."
	/>
</svelte:head>

<div class="dq-updates">
	<section class="hero">
		<div class="hero-copy">
			<h1>ERW Data Quarry: Latest Updates</h1>
			<p class="date">November 12, 2026</p>
			<p class="lede">
				Ten unique datasets are now available, each a window into a real-world ERW project. We encourage
				researchers to request data to advance non-commercial ERW science.
			</p>
			<div class="hero-actions">
				<a class="cta" href="https://data.cascadeclimate.org/" target="_blank" rel="noopener"
					>Access the ERW Data Quarry↗</a
				>
				<a class="cta" href="/erw-dq-upcoming">See datasets in our pipeline↗</a>
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
		<section id="overview" class="section">
		<p>
			The <a href="/erw/dq">ERW Data Quarry</a> was built to make ERW data available to the
			research community. This investment is starting to take shape and reflect a broader range of ERW global
			deployments. Since May 2025, Carbon Drawdown Initiative, Flux, InPlanet, Mati, Silica, Varaha, and two academic
			long-term field stations studying ERW have shared datasets through the Data Quarry.
		</p>
		<p>
			Today the Data Quarry hosts ten unique datasets, each representing a year or more of field projects across six
			countries and five continents. We encourage researchers to engage with this ERW deployment data through the
			Data Quarry's common access framework designed to unlock more commercial data that advances non-commercial ERW
			science.
		</p>

			<aside class="access-callout" aria-labelledby="access-callout-heading">
				<h2 id="access-callout-heading">How does Data Quarry access work?</h2>
				<p>
					Researchers request datasets through a lightweight, proposal-based system overseen by a
					<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">Governance Board</a>, designed
					to advance non-commercial ERW science. Health and safety data is released publicly on our
					<a href="https://cdrxiv.org/channels/erw-data-quarry" target="_blank" rel="noopener noreferrer"
						>CDRXIV channel</a
					>, with no proposal required. You can read more about the structure of the DQ system and the thinking
					behind it <a href="/erw/dq">here</a>.
				</p>
				<p>
					What follows is an overview of what the Data Quarry holds, what it can support, where it&apos;s growing
					next, and how researchers can access the data today.
				</p>
			</aside>
		</section>

		<section id="current-datasets" class="section">
			<h2>What is in the Data Quarry today?</h2>
			<p>The collection currently includes ten datasets contributed by eight organizations across six countries:</p>
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
							{#each datasets as row}
								{@const contributor = row.contributor.split(' — ')}
								<tr class:is-new={row.isNew}>
									<td class="contributor">
										<span class="contributor-name">{contributor[0]}</span>
										{#if contributor[1]}<span class="contributor-project">{contributor[1]}</span>{/if}
									</td>
									<td class="region">{row.region}</td>
									<td class="crops">
										{#each row.crops as line, i}
											<span class:crop-detail={i > 0}>{line}</span>
										{/each}
									</td>
									<td class="uploaded">
										{#if row.isNew}<span class="new-tag">New</span>{/if}
										{#if row.uploaded}
											{row.uploaded}
										{:else}
											{row.uploadedLead || ''}{#if row.uploadedEmphasis}<span class="uploaded-new">{row.uploadedEmphasis}</span>{/if}
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
			<aside class="access-callout">
				<p>
					This is a unique set of commercial and experimental data available to the research community — in total there
					are ten datasets, from five continents, characterized in depth and ready to work with today. If you study
					dissolution, feedstock behavior, or field-scale ERW across diverse soils and climates, there is something here
					for you, and the collection is only growing.
				</p>
				<p>
					<strong
						>After signing up, a short proposal through the
						<a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">Data Quarry</a> is all it takes
						to request access</strong
					>, and we add new datasets regularly — join the
					<a
						href="https://groups.google.com/a/cascadeclimate.org/g/notifs-dataquarry"
						target="_blank"
						rel="noopener">notifications group</a
					>
					to hear when. We&apos;re excited to see what the community can do with this data!
				</p>
			</aside>

			<figure class="figure-block">
				<img
					src="/images/blog/dq-overview-figure-1-tag-coverage.png"
					alt="Stacked bar chart of variable coverage by category for ten ERW Data Quarry datasets. Categories shown are lysimeter, biomass, feedstock, soil, and contextual."
					class="figure-image"
					width="2048"
					height="1259"
					loading="lazy"
				/>
				<figcaption>
					<em
						>Figure 1. Tag coverage by category for each dataset. Categories span contextual (weather and agronomy)
						variables, lysimeter (aqueous chemistry), feedstock (characterization data), biomass, and soil (solid-phase)
						measurements.</em
					>
				</figcaption>
			</figure>
			<p>
				The datasets vary in scope and measurement coverage. Each contribution includes contextual data alongside
				measurements from five categories. <strong
					>Solid-phase soil measurements and feedstock characterization dominate the collection</strong
				>, reflecting where commercial MRV efforts are most concentrated today. We are hosting a growing, varied
				catalog of experimental, commercial, and academic datasets.
			</p>
			<p>
				The commercial datasets give insight into how ERW is being actively deployed today. InPlanet&apos;s two
				Brazilian sites (Serra da Mantiqueira and Project Araçari) have the most variable coverage, spanning all five
				categories. The second year of Serra da Mantiqueira data is now hosted as well, with additional years coming
				soon. Mati, Varaha,
				and Flux have contributed data from especially data-sparse regions. Silica’s Mata de Agua uses a unique
				pyroclastic feedstock in a newly represented region for the Quarry.
			</p>
			<p>
				The academic and experimental datasets investigate all aspects of ERW MRV. For example, the Carbon Drawdown
				Initiative&apos;s XXL-lysimeter project contributes rich lysimetry data, UC Davis’s SFREC experiment was
				designed to test a variety of MRV approaches, and the Energy Farm site offers data from repeated years of rock
				spread.
			</p>
		</section>

		<section id="overlap-insights" class="section">
			<h2>How much do the datasets overlap?</h2>
			<p>
				Breadth is only half the story. To do <strong>synthesis science</strong> — pooling datasets to reach
				conclusions that no single project can support — datasets need to measure the same variables.
			</p>
			<p>
				Figure 2 shows how much the ten datasets overlap, both as a raw count of shared measurement tags and as
				Jaccard similarity (shared tags divided by combined tags).
			</p>
			<figure class="figure-block">
				<img
					src="/images/blog/dq-overview-figure-2-overlap.png"
					alt="Two heatmaps of pairwise overlap across ten ERW Data Quarry datasets. The top heatmap shows shared variable counts. The bottom heatmap shows Jaccard similarity."
					class="figure-image figure-2-image"
					width="1096"
					height="2048"
					loading="lazy"
					decoding="async"
				/>
				<figcaption>
					<em
						>Figure 2. Pairwise dataset overlap, shown as shared tag count (top) and Jaccard similarity (bottom).</em
					>
				</figcaption>
			</figure>
			<p>
				There&apos;s a clear pattern. Total tag counts are high, but <strong>overlap between projects is limited.</strong>
				The strongest overlap is between Serra da Mantiqueira and Project Araçari (Jaccard 0.78) — InPlanet&apos;s two
				sites, which share a common measurement protocol. Cross-developer overlap is more modest. This is the expected
				consequence of a field in which each company and study has built its own MRV approach — operating across a
				spectrum of agricultural soils and management practices — and it constrains how much
				<strong>synthesis science</strong> the current catalog can support.
			</p>
			<h2>What can the Data Quarry answer today?</h2>
			<p>
				When we launched the Data Quarry, we were especially interested in four questions that commercial data seemed
				well-positioned to inform:
			</p>
			<ul>
				<li><strong>Dissolution rates:</strong> how and where does rock dissolve well?</li>
				<li><strong>Time lags in MRV:</strong> what are CDR lags and what are true losses?</li>
				<li><strong>Soil organic carbon (SOC):</strong> how does an ERW project affect SOC over time?</li>
				<li>
					<strong>Health and safety:</strong> how do ERW projects affect potentially toxic element accumulation in
					fields?
				</li>
			</ul>
			<p>
				<strong>None of these questions can be fully answered by today&apos;s collection</strong> — but our catalog is
				growing more and more capable. Here&apos;s what the data shows today.
			</p>
			<ul>
				<li>
					<strong>Dissolution.</strong> This is where the catalog contributes most today. The datasets provide
					dissolution measurements from a broad, international sample. Seven datasets have immobile tracer data,
					enabling users to recompute dissolution themselves and test methodologies. Four datasets have multiple
					potential tracers to test across.
				</li>
				<li>
					<strong>Soil organic carbon.</strong> Resolving SOC dynamics will require denser and longer-term sampling
					than a single year of project data can provide.
					Currently seven datasets have SOC data (ranging from 18 to 323 SOC samples reported, with 155 SOC samples
					reported on average).
					As the depth and breadth of this data expands, so will our ability to interrogate SOC trajectories.
				</li>
				<li>
					<strong>MRV time lags.</strong> Most records are too short to investigate these questions directly, but the
					addition of Energy Farm (which has had repeated deployments over several years) and the second year of
					Serra da Mantiqueira allow users to start to test hypotheses directly. Our growing corpus of soil and
					lysimeter data is a great starting point.
				</li>
				<li>
					<strong>Potentially toxic elements.</strong> The current data show no evidence of regulatory violations in
					any of the projects in the Data Quarry. Foreclosing toxicity risks entirely, however, will require
					longer-term monitoring. All potentially toxic element data is made public and can be accessed at
					<a href="https://cdrxiv.org/channels/erw-data-quarry" target="_blank" rel="noopener noreferrer"
						>our channel on CDRXIV</a
					>.
				</li>
			</ul>
			<p>
				These challenges aren&apos;t shortcomings of the Data Quarry itself — they&apos;re the current shape of ERW
				field data. And showing that shape clearly is part of what the Quarry is for.
			</p>
			<h2>What&apos;s next for the Data Quarry?</h2>
			<p>
				The catalog will keep growing on two fronts. We will continue to onboard new datasets, with over 15 datasets
				in the queue, widening the range of soils, climates, and feedstocks represented. And we will continue ingesting
				the second year of data from several datasets already in the Quarry — the first step toward the longer time
				series that questions like time lags and SOC changes require.
			</p>
			<p class="section-cta">
				<a class="cta" href="/erw-dq-upcoming">See datasets in our pipeline↗</a>
			</p>
			<p>
				<strong>Do you have field data of your own to contribute?</strong> If you hold results from a commercial
				project or non-commercial ERW trial, we&apos;d love to learn more. Please reach out to us at
				<a href="mailto:data@cascadeclimate.org">data@cascadeclimate.org</a>.
			</p>
		</section>
	</article>
</div>

<style>
	.dq-updates {
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

	.hero-actions {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: flex-start;
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
		max-width: 78rem;
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

	.article a:hover {
		color: #023c40;
	}

	.article a.cta,
	.article a.cta:hover {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
	}

	.section-cta {
		margin: 0.35rem 0 1.25rem;
	}

	.article ul {
		margin: 0 0 1rem;
		padding-left: 1.35rem;
		line-height: 1.58;
	}

	.article li {
		margin-bottom: 0.65rem;
	}

	.section h2 ~ h2 {
		margin-top: 2.5rem;
	}

	.access-callout {
		margin: 1.5rem 0 0;
		padding: 1.2rem 1.33rem;
		background-color: rgb(2, 60, 64);
		border-radius: 0.44rem;
		color: var(--color-light);
		font-size: 0.95rem;
	}

	.access-callout h2 {
		margin: 0 0 0.89rem;
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--color-light);
	}

	.access-callout p {
		margin: 0 0 0.89rem;
		line-height: 1.62;
		color: var(--color-light);
	}

	.access-callout p:last-child {
		margin-bottom: 0;
	}

	.access-callout a {
		color: var(--color-highlight);
		font-weight: 500;
	}

	.access-callout a:hover {
		text-decoration: underline;
		text-underline-offset: 0.15em;
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

	.table-wrap th,
	.table-wrap td {
		padding: 0.75rem 0.65rem;
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
		min-width: 20.5rem;
	}

	.contributor-name,
	.contributor-project,
	.crops span {
		display: block;
	}

	.contributor-name {
		font-weight: 550;
		color: var(--color-dark);
		white-space: nowrap;
	}

	.contributor-project,
	.crop-detail {
		margin-top: 0.15rem;
		color: color-mix(in srgb, var(--color-dark) 72%, white);
		font-weight: 400;
	}

	.region {
		white-space: nowrap;
	}

	.table-wrap th.years,
	.table-wrap td.years {
		width: 4.5rem;
		min-width: 4.5rem;
		max-width: 5.25rem;
		white-space: normal;
		text-align: center;
		font-variant-numeric: tabular-nums;
	}

	.table-wrap td.years {
		color: var(--color-dark);
	}

	.crops,
	.uploaded {
		white-space: nowrap;
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

	.figure-block {
		margin: 0 0 1.25rem;
	}

	.figure-image {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
		border-radius: 0.5rem;
	}

	.figure-2-image {
		width: min(100%, 1096px);
		max-width: min(100%, 1096px);
	}

	.figure-block figcaption {
		margin: 0.65rem 0 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.dq-updates :focus-visible {
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

<script>
	import { onMount, tick as flush } from 'svelte';
	import { hero, sections } from '$lib/lrm/seaAnalysis.js';
	import CopyParts from '$lib/lrm/CopyParts.svelte';
	import AiNote from '$lib/lrm/AiNote.svelte';
	import heroImg from '$lib/images/lrm-sea/sea-hero.jpg';

	const costsHref = '/our-work/refrigerant-management-and-transition/costs';
	const sources = sections.flatMap((section) =>
		section.blocks.filter((block) => block.type === 'notes').flatMap((block) => block.items)
	);
	import destruction from '$lib/images/lrm-sea/destruction-opex.png';
	import reclamation from '$lib/images/lrm-sea/reclamation-prices.png';
	import recycling from '$lib/images/lrm-sea/recycling-reclamation.png';
	import carbon from '$lib/images/lrm-sea/destruction-carbon.png';
	import capital from '$lib/images/lrm-sea/capital-cliff.png';

	const figures = { destruction, reclamation, recycling, carbon, capital };

	const clusters = sections.map((section) => ({
		id: section.id,
		number: section.number,
		title: section.title
	}));

	let active = clusters[0].id;
	let openIds = clusters.map((cluster) => cluster.id);
	let scrollLock = 0;
	let navWrapper;
	let navEl;
	let navHeight = 0;
	let pinned = false;
	const headerOffset = 64;

	function clusterByTarget(id) {
		const section = sections.find(
			(item) => item.id === id || item.blocks.some((block) => block.id === id)
		);
		return section && clusters.find((cluster) => cluster.id === section.id);
	}

	function tick() {
		if (Date.now() < scrollLock) {
			if (navEl) navHeight = navEl.offsetHeight;
			if (navWrapper) pinned = navWrapper.getBoundingClientRect().top <= headerOffset;
			return;
		}
		const line = 160;
		let next = '';
		for (const cluster of clusters) {
			const el = document.getElementById(cluster.id);
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			if (rect.top <= line && rect.bottom > line) {
				next = cluster.id;
				break;
			}
		}
		if (!next) {
			for (const cluster of clusters) {
				const el = document.getElementById(cluster.id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					next = cluster.id;
					break;
				}
			}
		}
		if (next) active = next;
		if (navEl) navHeight = navEl.offsetHeight;
		if (navWrapper) pinned = navWrapper.getBoundingClientRect().top <= headerOffset;
	}

	function setSectionOpen(id, nextOpen) {
		const has = openIds.includes(id);
		if (nextOpen && !has) openIds = [...openIds, id];
		if (!nextOpen && has) openIds = openIds.filter((item) => item !== id);
		if (nextOpen) active = id;
	}

	function syncCluster(id, isOpen) {
		setSectionOpen(id, isOpen);
	}

	async function toggleCluster(id) {
		const opening = !openIds.includes(id);
		setSectionOpen(id, opening);
		active = id;
		scrollLock = Date.now() + 800;
		if (!opening) return;
		history.replaceState(null, '', `#${id}`);
		await flush();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function openFold(id) {
		const el = document.getElementById(id);
		if (!el) return;
		if (el.classList.contains('band')) {
			const fold = el.querySelector('details.section-fold');
			if (fold) fold.open = true;
		}
		let node = el;
		while (node) {
			if (node.tagName === 'DETAILS') node.open = true;
			node = node.parentElement;
		}
	}

	async function openFromHash() {
		const id = decodeURIComponent(location.hash.replace(/^#/, ''));
		if (!id) return;
		const cluster = clusterByTarget(id);
		if (!cluster) return;
		setSectionOpen(cluster.id, true);
		active = cluster.id;
		await flush();
		openFold(id);
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		window.addEventListener('scroll', tick, { passive: true });
		window.addEventListener('hashchange', openFromHash);
		openFromHash();
		tick();
		return () => {
			window.removeEventListener('scroll', tick);
			window.removeEventListener('hashchange', openFromHash);
		};
	});
</script>

<svelte:head>
	<title>{hero.title} — Cascade Climate</title>
	<meta name="description" content={hero.description} />
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
</svelte:head>

<div class="lrm-landing">
	<section class="hero">
		<div class="hero-copy">
			<h1>{hero.title}</h1>
			<div class="hero-actions">
				<a class="cta" href={costsHref}>Return to LRM Costs</a>
			</div>
		</div>
		<img
			class="hero-img"
			src={heroImg}
			alt="Yellow residential tower covered with window air conditioners"
			width="1024"
			height="768"
			decoding="async"
			fetchpriority="high"
		/>
	</section>

	<div class="scroll-nav-wrapper" class:pinned bind:this={navWrapper}>
		<div class="scroll-nav-spacer" style:height={pinned ? `${navHeight}px` : '0'} aria-hidden="true"></div>
		<nav class="scroll-nav" aria-label="On this page" bind:this={navEl}>
			{#each clusters as cluster}
				<a
					class:active={active === cluster.id}
					href="#{cluster.id}"
					aria-expanded={openIds.includes(cluster.id)}
					on:click|preventDefault={() => toggleCluster(cluster.id)}
				>{cluster.title}</a>
			{/each}
		</nav>
	</div>

	{#each clusters as cluster, i}
		<section id={cluster.id} class="band" class:alt={i % 2 === 1} aria-labelledby="{cluster.id}-title">
			<div class="measure">
				<details
					class="section-fold"
					open={openIds.includes(cluster.id)}
					on:toggle={(event) => syncCluster(cluster.id, event.currentTarget.open)}
				>
					<summary>
						<span class="summary-text">
							<p class="section-kicker">{cluster.number}</p>
							<h2 id="{cluster.id}-title">{cluster.title}</h2>
						</span>
					</summary>
					<div class="fold-body">
						{#each sections[i].blocks as block}
							{#if block.type === 'h3'}
								<h3 id={block.id}>{block.text}</h3>
							{:else if block.type === 'h4'}
								<h4 id={block.id}>{block.text}</h4>
							{:else if block.type === 'p'}
								<p><CopyParts parts={block.parts} /></p>
							{:else if block.type === 'ul'}
								<ul>
									{#each block.items as item}
										<li><CopyParts parts={item.parts} /></li>
									{/each}
								</ul>
							{:else if block.type === 'ol'}
								<ol>
									{#each block.items as item}
										<li><CopyParts parts={item.parts} /></li>
									{/each}
								</ol>
							{:else if block.type === 'table'}
								<div class="table-wrap">
									<table>
										<thead>
											<tr>
												{#each block.headers as header}
													<th scope="col">{header}</th>
												{/each}
											</tr>
										</thead>
										<tbody>
											{#each block.rows as row}
												<tr>
													{#each row as cell, cellIndex}
														{#if cellIndex === 0}
															<th scope="row">{cell}</th>
														{:else}
															<td>{cell}</td>
														{/if}
													{/each}
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							{:else if block.type === 'figure'}
								<figure>
									<img src={figures[block.src]} alt={block.alt} />
								</figure>
							{/if}
						{/each}
					</div>
				</details>
			</div>
		</section>
	{/each}

	<section class="band sources" aria-labelledby="sources-title">
		<div class="measure">
			<h2 id="sources-title">Sources</h2>
			<ol class="footnotes">
				{#each sources as item}
					<li id={"fn-" + item.id} value={Number(item.id)}>
						<CopyParts parts={item.parts} />
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="ai-disclosure" aria-label="A Note on AI">
		<div class="measure">
			<AiNote
				text="AI was used to support the visual design of charts and the sensitivity analysis presented on this page. The data reflected in the charts was sourced from Cascade Climate’s Excel cost model and was not generated using AI. All sensitivity analysis calculations were verified using Excel."
			/>
		</div>
	</section>
</div>

<style>
	.lrm-landing {
		--paper: #f4f3ed;
		--deep-teal: #023c40;
		--panel: #fafafa;

		background: var(--paper);
		color: var(--color-text);
		font-size: 1rem;
		line-height: 1.62;
		padding-bottom: 1rem;
	}

	.lrm-landing div {
		line-height: 1.62;
	}

	.measure {
		max-width: 70rem;
		margin: 0 auto;
	}

	.hero {
		background: var(--color-dark);
		color: var(--color-light);
		padding: calc(4rem + 2.75rem) 4rem 2.65rem;
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(16rem, 0.95fr);
		gap: 2rem 3rem;
		align-items: stretch;
	}

	.hero-copy {
		max-width: 48rem;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.hero-img {
		width: 100%;
		height: 100%;
		min-height: 16rem;
		object-fit: cover;
		object-position: center;
		border-radius: 1rem;
		display: block;
	}

	.section-kicker {
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.75rem;
		font-weight: 400;
		margin: 0 0 0.85rem;
		line-height: 1.3;
		color: var(--deep-teal);
		margin-bottom: 0.45rem;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1.15;
		margin: 0;
		max-width: 18em;
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
		margin-top: 0;
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

	.band {
		padding: 0.15rem 4rem;
		scroll-margin-top: 8rem;
		border-top: 1px solid color-mix(in srgb, var(--deep-teal) 8%, transparent);
	}

	.band.alt {
		background: var(--panel);
	}

	.band h2 {
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--deep-teal);
		margin: 0;
		letter-spacing: -0.02em;
		line-height: 1.25;
	}

	.section-fold > summary {
		list-style: none;
		cursor: pointer;
	}

	.section-fold > summary::-webkit-details-marker {
		display: none;
	}

	.section-fold > summary::marker {
		content: '';
	}

	.section-fold > summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		padding: 1.35rem 0;
	}

	.section-fold > summary::after {
		content: '+';
		flex-shrink: 0;
		font-size: 1.35rem;
		font-weight: 400;
		line-height: 1;
		color: var(--deep-teal);
	}

	.section-fold[open] > summary::after {
		content: '–';
	}

	.summary-text {
		min-width: 0;
	}

	.section-fold > summary .section-kicker {
		margin: 0 0 0.35rem;
	}

	.section-fold > .fold-body {
		padding-bottom: 1.5rem;
	}

	.fold-body > h3 {
		margin: 1.55rem 0 0.55rem;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.3;
		color: var(--deep-teal);
		scroll-margin-top: 8rem;
	}

	.fold-body > h3:first-child {
		margin-top: 0.15rem;
	}

	.fold-body > h4 {
		margin: 1.35rem 0 0.45rem;
		font-size: 1.05rem;
		font-weight: 500;
		letter-spacing: 0;
		text-transform: none;
		font-style: italic;
		line-height: 1.35;
		color: var(--deep-teal);
		scroll-margin-top: 8rem;
	}

	.fold-body ul,
	.fold-body ol {
		margin: 0 0 1.1rem;
		padding-left: 1.2rem;
	}

	.fold-body li {
		margin: 0 0 0.7rem;
		line-height: 1.62;
	}

	.band p {
		margin: 0 0 1.1rem;
		line-height: 1.62;
		color: color-mix(in srgb, var(--color-text) 92%, var(--deep-teal));
	}

	.band :global(a) {
		color: var(--deep-teal);
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 0.18em;
		text-decoration-thickness: 1px;
	}

	.band :global(a:hover) {
		opacity: 0.88;
	}

	.band :global(sup a) {
		font-size: 0.75em;
		text-underline-offset: 0.12em;
	}

	.table-wrap {
		overflow-x: auto;
		margin: 0.35rem 0 1.25rem;
	}

	table {
		width: 100%;
		min-width: 46rem;
		border-collapse: collapse;
		font-size: 0.92rem;
		line-height: 1.45;
	}

	th,
	td {
		text-align: left;
		vertical-align: top;
		padding: 0.6rem 0.75rem;
		border-bottom: 1px solid color-mix(in srgb, var(--deep-teal) 16%, transparent);
	}

	thead th {
		color: var(--deep-teal);
		font-weight: 500;
	}

	tbody th {
		font-weight: 500;
		width: 16rem;
	}

	figure {
		margin: 0.35rem 0 1.4rem;
	}

	figure img {
		width: 100%;
		height: auto;
		display: block;
		background: #fff;
		border-radius: 0.75rem;
	}

	.sources {
		padding-top: 1.75rem;
		padding-bottom: 1.25rem;
	}

	.ai-disclosure {
		padding: 0.35rem 4rem 2.4rem;
	}

	.sources h2 {
		margin-bottom: 0.75rem;
	}

	.footnotes {
		margin: 0.25rem 0 0.2rem;
		padding: 0 0 0 1.2rem;
		font-size: 0.88rem;
	}

	.lrm-landing :focus-visible {
		outline: 2px solid color-mix(in srgb, var(--color-highlight) 85%, transparent);
		outline-offset: 3px;
	}

	@media (max-width: 900px) {
		.hero {
			grid-template-columns: 1fr;
		}

		.hero-img {
			height: auto;
			aspect-ratio: 3 / 2;
			max-height: 22rem;
		}
	}

	@media (max-width: 660px) {
		.hero,
		.band,
		.ai-disclosure {
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

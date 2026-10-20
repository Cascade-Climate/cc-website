<script>
	import { onMount, tick as flush } from 'svelte';
	import { hero, sections, toolHref } from '$lib/lrm/landingCopy.js';
	import heroImg from '$lib/images/lrm-cylinders-hero.jpg';

	const clusters = [
		{
			id: 'why-economics-matter',
			number: '01',
			title: 'Why Economics Matter',
			sectionIds: ['why-economics']
		},
		{
			id: 'lrm-cost-drivers',
			number: '02',
			title: 'LRM Cost Drivers',
			sectionIds: ['cost-drivers', 'pathways']
		},
		{
			id: 'lrm-financing',
			number: '03',
			title: 'LRM Financing',
			sectionIds: ['financing']
		},
		{
			id: 'country-synthesis',
			number: '04',
			title: 'Country Synthesis',
			sectionIds: ['scale']
		}
	];

	let active = clusters[0].id;
	let openId = '';
	let scrollLock = 0;
	let navWrapper;
	let navEl;
	let navHeight = 0;
	let pinned = false;
	const headerOffset = 64;

	function sectionById(id) {
		return sections.find((section) => section.id === id);
	}

	function clusterByTarget(id) {
		return clusters.find(
			(cluster) =>
				cluster.id === id ||
				cluster.sectionIds.includes(id) ||
				cluster.sectionIds.some((sectionId) =>
					sectionById(sectionId)?.blocks.some((block) => block.id === id)
				)
		);
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

	function syncCluster(id, isOpen) {
		if (isOpen) {
			openId = id;
			active = id;
		} else if (openId === id) {
			openId = '';
		}
	}

	async function toggleCluster(id) {
		openId = openId === id ? '' : id;
		active = id;
		scrollLock = Date.now() + 800;
		if (!openId) return;
		history.replaceState(null, '', `#${id}`);
		await flush();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	/** Intro copy stays above the subsections. Each h3 starts a collapsible group. */
	function partsOf(blocks) {
		const lead = [];
		const groups = [];
		let current = null;
		for (const block of blocks) {
			if (block.type === 'h3') {
				current = { heading: block, blocks: [] };
				groups.push(current);
			} else if (current) {
				current.blocks.push(block);
			} else {
				lead.push(block);
			}
		}
		return { lead, groups };
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
		openId = cluster.id;
		active = cluster.id;
		await flush();
		openFold(id);
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
	<title>Lifecycle Refrigerant Management — Cascade Climate (unlisted)</title>
	<meta
		name="description"
		content="Placeholder essay on the economics of lifecycle refrigerant management, and the home of the LRM Cost Explorer."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
</svelte:head>

<div class="lrm-landing">
	<section class="hero">
		<div class="hero-copy">
			<p class="eyebrow">{hero.eyebrow}</p>
			<h1>{hero.title}</h1>
			<p class="lede">{hero.lede[0]}</p>
			<div class="hero-actions">
				<a class="cta" href={toolHref}>{hero.toolCta}</a>
				<a class="cta cta-manual" href="/our-work/refrigerant-management-and-transition/explorer/user-manual"
					>User Manual</a
				>
			</div>
			{#if hero.lede[1]}
				<p class="lede follow">{hero.lede[1]}</p>
			{/if}
		</div>
		<img
			class="hero-img"
			src={heroImg}
			alt="Stacked refrigerant cylinders"
			width="1024"
			height="683"
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
					aria-expanded={openId === cluster.id}
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
					open={openId === cluster.id}
					on:toggle={(event) => syncCluster(cluster.id, event.currentTarget.open)}
				>
					<summary>
						<span class="summary-text">
							<p class="section-kicker">{cluster.number}</p>
							<h2 id="{cluster.id}-title">{cluster.title}</h2>
						</span>
					</summary>
					<div class="fold-body">
						{#each cluster.sectionIds as sectionId}
							{@const section = sectionById(sectionId)}
							{@const parts = partsOf(section.blocks)}
							<div class="cluster-part" id={cluster.sectionIds.length > 1 ? section.id : undefined}>
								{#if cluster.sectionIds.length > 1}
									<h3 class="cluster-source">{section.title}</h3>
								{/if}
						{#each parts.lead as block}
							{#if block.type === 'h4'}
								<h4 id={block.id}>{block.text}</h4>
							{:else if block.type === 'p'}
								<p>{block.text}</p>
							{:else if block.type === 'note'}
								<aside class="note" class:is-observed={block.kind === 'observation'}>
									<p class="note-label">
										{block.kind === 'modeled' ? 'Modeled result' : 'Broader observation'}
									</p>
									<p>{block.text}</p>
								</aside>
							{:else if block.type === 'cards'}
								<div class="cards">
									{#each block.items as item}
										<article>
											<h4>{item.title}</h4>
											{#each item.paragraphs as para}
												<p>{para}</p>
											{/each}
										</article>
									{/each}
								</div>
							{:else if block.type === 'cta'}
								<p class="band-cta">
									<a class="cta" href={toolHref}>{hero.toolCta}</a>
								</p>
							{:else if block.type === 'tool'}
								<p class="inline-tool">
									<a href={toolHref}>{hero.toolCta}</a>
								</p>
							{/if}
						{/each}
						{#each parts.groups as group}
							<details class="sub-fold" id={group.heading.id}>
								<summary>
									<h3>{group.heading.text}</h3>
								</summary>
								<div class="fold-body">
									{#each group.blocks as block}
										{#if block.type === 'h4'}
											<h4 id={block.id}>{block.text}</h4>
										{:else if block.type === 'p'}
											<p>{block.text}</p>
										{:else if block.type === 'note'}
											<aside class="note" class:is-observed={block.kind === 'observation'}>
												<p class="note-label">
													{block.kind === 'modeled' ? 'Modeled result' : 'Broader observation'}
												</p>
												<p>{block.text}</p>
											</aside>
										{:else if block.type === 'cards'}
											<div class="cards">
												{#each block.items as item}
													<article>
														<h4>{item.title}</h4>
														{#each item.paragraphs as para}
															<p>{para}</p>
														{/each}
													</article>
												{/each}
											</div>
										{:else if block.type === 'cta'}
											<p class="band-cta">
												<a class="cta" href={toolHref}>{hero.toolCta}</a>
											</p>
										{:else if block.type === 'tool'}
											<p class="inline-tool">
												<a href={toolHref}>{hero.toolCta}</a>
											</p>
										{/if}
									{/each}
								</div>
							</details>
						{/each}
							</div>
						{/each}
					</div>
				</details>
			</div>
		</section>
	{/each}
</div>

<style>
	/*
	 * Landing structure follows Bedrock / about (dark hero, section nav, bands, pill button).
	 * Color departures from that pattern are logged in src/lib/design/site-elevations.md.
	 */
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

	.eyebrow,
	.section-kicker {
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.75rem;
		font-weight: 400;
		margin: 0 0 0.85rem;
		line-height: 1.3;
	}

	.eyebrow {
		opacity: 0.88;
	}

	.section-kicker {
		color: var(--deep-teal);
		margin-bottom: 0.45rem;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1.15;
		margin: 0 0 1.15rem;
		max-width: 22ch;
	}

	.lede {
		max-width: 68ch;
		margin: 0 0 1rem;
		line-height: 1.62;
	}

	.lede.follow {
		margin-top: 1.35rem;
		margin-bottom: 0;
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

	.cta-manual {
		background: transparent;
		color: var(--color-light);
		border-color: color-mix(in srgb, var(--color-light) 72%, transparent);
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
		padding: 0.7rem 0.65rem;
		font-size: 0.95rem;
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

	.band h3 {
		margin: 0;
		font-weight: 500;
		font-size: 1.12rem;
		line-height: 1.3;
		color: var(--deep-teal);
	}

	.cluster-part + .cluster-part {
		margin-top: 1.75rem;
		padding-top: 0.35rem;
	}

	.cluster-source {
		margin: 0.4rem 0 0.85rem;
		font-size: 1.2rem;
	}

	.section-fold > summary,
	.sub-fold > summary {
		list-style: none;
		cursor: pointer;
	}

	.section-fold > summary::-webkit-details-marker,
	.sub-fold > summary::-webkit-details-marker {
		display: none;
	}

	.section-fold > summary::marker,
	.sub-fold > summary::marker {
		content: '';
	}

	.section-fold > summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		padding: 1.35rem 0;
	}

	.section-fold > summary::after,
	.sub-fold > summary::after {
		content: '+';
		flex-shrink: 0;
		font-size: 1.35rem;
		font-weight: 400;
		line-height: 1;
		color: var(--deep-teal);
	}

	.section-fold[open] > summary::after,
	.sub-fold[open] > summary::after {
		content: '–';
	}

	.summary-text {
		min-width: 0;
	}

	.section-fold > summary .section-kicker {
		margin: 0 0 0.35rem;
		color: var(--deep-teal);
	}

	.section-fold > .fold-body {
		padding-bottom: 1.5rem;
	}

	.sub-fold {
		border-top: 1px solid color-mix(in srgb, var(--deep-teal) 14%, transparent);
		scroll-margin-top: 8rem;
	}

	.sub-fold > summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.9rem 0;
	}

	.sub-fold > summary::after {
		font-size: 1.15rem;
	}

	.sub-fold > .fold-body {
		padding: 0 0 0.85rem 0.15rem;
	}

	.band h4 {
		margin: 1.25rem 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		line-height: 1.3;
		color: var(--deep-teal);
		scroll-margin-top: 8rem;
	}

	.band p {
		margin: 0 0 1.1rem;
		line-height: 1.62;
		color: color-mix(in srgb, var(--color-text) 92%, var(--deep-teal));
	}

	.band a {
		color: var(--deep-teal);
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 0.18em;
		text-decoration-thickness: 1px;
	}

	.band a:hover {
		opacity: 0.88;
	}

	.band a.cta {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
	}

	.band-cta {
		margin: 1.75rem 0 0.25rem;
	}

	.note,
	.cards article {
		background: var(--panel);
		border: 1px solid color-mix(in srgb, var(--deep-teal) 14%, transparent);
		border-radius: 1rem;
	}

	.note {
		margin: 0.35rem 0 1.25rem;
		padding: 1rem 1.15rem 0.15rem;
		border-left: 3px solid var(--deep-teal);
	}

	.note.is-observed {
		border-left-color: color-mix(in srgb, var(--deep-teal) 45%, var(--paper));
	}

	.note-label {
		margin: 0 0 0.4rem;
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		line-height: 1.3;
		color: var(--deep-teal);
	}

	.note.is-observed .note-label {
		color: color-mix(in srgb, var(--deep-teal) 70%, var(--color-text));
	}

	.cards {
		display: grid;
		gap: 0.85rem;
		margin: 0.5rem 0 1.25rem;
	}

	.cards article {
		margin: 0;
		padding: 1rem 1.15rem 0.15rem;
	}

	.cards h4 {
		margin: 0 0 0.45rem;
		font-size: 1.12rem;
		font-weight: 500;
		letter-spacing: -0.01em;
		text-transform: none;
		line-height: 1.3;
		color: var(--deep-teal);
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
		.band {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.hero {
			padding-top: calc(4rem + 1.5rem);
		}

		nav.scroll-nav a {
			flex: 1 1 100%;
			text-align: left;
			padding-left: 1rem;
		}
	}
</style>

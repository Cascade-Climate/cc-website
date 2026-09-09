<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import '$lib/components/lrm/lrm-shell.css';
	import LrmExplorerNav from '$lib/components/lrm/LrmExplorerNav.svelte';
	import LrmIntroStory from '$lib/components/lrm/LrmIntroStory.svelte';
	import LrmCostModel from '$lib/components/lrm/LrmCostModel.svelte';
	import LrmImageExplore from '$lib/components/lrm/LrmImageExplore.svelte';
	import { TABS, TAB_IDS, takeaways, costStack, glossary } from '$lib/lrm/explorerContent.js';

	let activeTab = browser ? tabFromHash() : 'intro';

	function tabFromHash() {
		if (!browser) return 'intro';
		const hash = window.location.hash.replace(/^#/, '');
		return TAB_IDS.includes(hash) ? hash : 'intro';
	}

	function setTab(id, { replace = false, scroll = true } = {}) {
		if (!TAB_IDS.includes(id)) return;
		activeTab = id;
		if (!browser) return;
		const url = `${window.location.pathname}${window.location.search}#${id}`;
		if (replace) {
			history.replaceState(history.state, '', url);
		} else if (window.location.hash !== `#${id}`) {
			history.pushState(history.state, '', url);
		}
		if (scroll) window.scrollTo(0, 0);
	}

	onMount(() => {
		if (!window.location.hash) {
			setTab('intro', { replace: true, scroll: false });
		} else {
			activeTab = tabFromHash();
		}
		const sync = () => {
			const next = tabFromHash();
			if (next !== activeTab) activeTab = next;
		};
		window.addEventListener('hashchange', sync);
		window.addEventListener('popstate', sync);
		return () => {
			window.removeEventListener('hashchange', sync);
			window.removeEventListener('popstate', sync);
		};
	});
</script>

<svelte:head>
	<title>Refrigerant Lifecycle Explorer — Cascade Climate (unlisted test)</title>
	<meta
		name="description"
		content="Unlisted prototype of the Refrigerant Lifecycle Explorer using LRM Cost Model V2.3 calculations."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="lrm-shell">
	<div class="wrap identity">
		<header class="site">
			<div class="eyebrow">Lifecycle refrigerant management</div>
			<h1>Refrigerant Lifecycle Explorer</h1>
		</header>
	</div>

	<div class="wrap body">
		<div
			class="tab-panel"
			id="panel-{activeTab}"
			role="tabpanel"
			aria-labelledby="tab-{activeTab}"
		>
			{#if activeTab === 'intro'}
				<LrmIntroStory onGotoTool={() => setTab('tool')} />
			{:else if activeTab === 'tool'}
				<section class="tool-section" aria-labelledby="tool-heading">
					<h2 id="tool-heading" class="visually-hidden">Cost model</h2>
					<p class="tool-lede">
						Inputs on the left; calculated operational and capital costs on the right. Figures follow
						the V2.3 workbook, including NA where a combination has no value.
					</p>
					<p class="continue-row">
						<button type="button" class="continue-link" on:click={() => setTab('takeaways')}>
							What did the cost research find? →
						</button>
					</p>
					<LrmCostModel idPrefix="explorer" />
					<p class="continue-row after-model">
						<button type="button" class="continue-link" on:click={() => setTab('takeaways')}>
							What did the cost research find? →
						</button>
					</p>
				</section>
			{:else if activeTab === 'takeaways'}
				<LrmImageExplore
					heading={takeaways.heading}
					intro={takeaways.intro}
					spots={takeaways.spots}
					variant="takeaways"
				/>
			{:else if activeTab === 'cost-stack'}
				<LrmImageExplore
					heading={costStack.heading}
					intro={costStack.intro}
					spots={costStack.spots}
					variant="costStack"
				/>
				<section class="finance-layer" aria-labelledby="finance-layer-heading">
					<p class="layer-kicker">{costStack.financeLayer.kicker}</p>
					<h2 id="finance-layer-heading">{costStack.financeLayer.heading}</h2>
					<p class="layer-intro">{costStack.financeLayer.intro}</p>
					<figure class="layer-photo">
						<img
							src={costStack.financeLayer.photo}
							alt={costStack.financeLayer.photoAlt}
						/>
					</figure>
					{#each costStack.financeLayer.paragraphs as para}
						<p class="layer-copy">{para}</p>
					{/each}
					<dl class="instruments">
						{#each costStack.financeLayer.instruments as item}
							<div>
								<dt>{item.term}</dt>
								<dd>{item.note}</dd>
							</div>
						{/each}
					</dl>
				</section>
			{:else if activeTab === 'glossary'}
				<article class="glossary-tab">
					<h2>{glossary.heading}</h2>
					<p class="lede">{glossary.intro}</p>
					<dl class="glossary">
						{#each glossary.entries as entry}
							<div class="glossary-item">
								<dt>{entry.term}</dt>
								<dd>{entry.definition}</dd>
							</div>
						{/each}
					</dl>
				</article>
			{/if}
		</div>

		<p class="page-foot">
			LRM Cost Model V2.3 · Unlisted prototype · Costs for exploration, not formal decision-making
		</p>
	</div>

	<div class="nav-dock">
		<div class="wrap">
			<LrmExplorerNav tabs={TABS} activeId={activeTab} on:select={(e) => setTab(e.detail)} />
		</div>
	</div>
</div>

<style>
	.wrap {
		width: min(1120px, calc(100% - 2rem));
		margin: 0 auto;
	}

	.identity {
		padding: 1.35rem 0 0.85rem;
	}

	.site {
		color: var(--header);
	}

	.eyebrow {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 600;
		margin-bottom: 0.4rem;
		color: var(--muted);
	}

	.site h1 {
		font-family: var(--font);
		font-weight: 600;
		font-size: 1.2rem;
		line-height: 1.2;
		margin: 0;
		letter-spacing: -0.02em;
		color: var(--header);
	}

	.nav-dock {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		background: var(--bg);
		border-top: 1px solid var(--line);
		padding: 0.15rem 0 calc(0.2rem + env(safe-area-inset-bottom));
	}

	:global(body:has(.dev-preview-hint)) .nav-dock {
		bottom: 1.85rem;
	}

	.body {
		padding: 1.35rem 0 6.5rem;
	}

	.tab-panel :global(h2),
	.finance-layer {
		scroll-margin-top: 1rem;
		scroll-margin-bottom: 5.5rem;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.tool-lede {
		max-width: 40rem;
		margin: 0 0 0.75rem;
		color: var(--ink-soft);
		font-size: 1rem;
		line-height: 1.5;
	}

	.continue-row {
		margin: 0 0 1.5rem;
	}

	.continue-row.after-model {
		margin: 2rem 0 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
	}

	.continue-link {
		appearance: none;
		border: 0;
		background: none;
		padding: 0.55rem 0;
		min-height: 44px;
		font: inherit;
		font-size: 1rem;
		font-weight: 600;
		color: var(--accent);
		cursor: pointer;
	}

	.continue-link:hover {
		text-decoration: underline;
	}

	.lede {
		max-width: 40rem;
		color: var(--header);
		opacity: 0.88;
		font-size: 1.02rem;
		margin: 0;
		line-height: 1.5;
	}

	.glossary-tab h2,
	.finance-layer h2 {
		font-family: var(--font);
		font-size: 1.45rem;
		font-weight: 600;
		margin: 0 0 0.65rem;
		color: var(--header);
		line-height: 1.25;
	}

	.glossary {
		margin: 1.75rem 0 0;
		max-width: 40rem;
	}

	.glossary-item {
		padding: 1.35rem 0;
		border-top: 1px solid var(--line);
	}

	.glossary-item:last-child {
		border-bottom: 1px solid var(--line);
	}

	.glossary-item dt {
		font-weight: 600;
		color: var(--header);
		margin: 0 0 0.4rem;
		font-size: 1.08rem;
	}

	.glossary-item dd {
		margin: 0;
		color: var(--ink-soft);
		font-size: 1rem;
		line-height: 1.55;
	}

	.finance-layer {
		margin-top: 1.5rem;
		padding-top: 2rem;
		border-top: 1px solid var(--line);
		max-width: 40rem;
	}

	.layer-kicker {
		margin: 0 0 0.4rem;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--accent);
	}

	.layer-intro,
	.layer-copy {
		color: var(--ink-soft);
		font-size: 1rem;
		line-height: 1.55;
		margin: 0 0 0.9rem;
	}

	.layer-photo {
		margin: 0 0 1.15rem;
	}

	.layer-photo img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.instruments {
		margin: 1.5rem 0 0;
	}

	.instruments div {
		padding: 0.85rem 0;
		border-top: 1px solid var(--line);
	}

	.instruments div:last-child {
		border-bottom: 1px solid var(--line);
	}

	.instruments dt {
		font-weight: 600;
		color: var(--header);
		margin: 0 0 0.25rem;
	}

	.instruments dd {
		margin: 0;
		color: var(--ink-soft);
		font-size: 0.95rem;
		line-height: 1.45;
	}

	.page-foot {
		margin-top: 2.5rem;
		color: var(--muted);
		font-size: 0.82rem;
	}
</style>

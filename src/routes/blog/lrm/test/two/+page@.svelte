<script>
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import '$lib/components/lrm/lrm-shell.css';
	import LrmExplorerNav from '$lib/components/lrm/LrmExplorerNav.svelte';
	import LrmIntroStory from '$lib/components/lrm/LrmIntroStory.svelte';
	import LrmCostModel from '$lib/components/lrm/LrmCostModel.svelte';
	import LrmImageExplore from '$lib/components/lrm/LrmImageExplore.svelte';
	import LrmShareLink from '$lib/components/lrm/LrmShareLink.svelte';
	import LrmSection from '$lib/components/lrm/LrmSection.svelte';
	import LrmReveal from '$lib/components/lrm/LrmReveal.svelte';
	import { TABS, TAB_IDS, takeaways, costStack, glossary } from '$lib/lrm/explorerContent.js';
	import cascadeLogo from '$lib/images/cc-logo.webp';

	let activeId = 'intro';
	let spyPaused = false;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let spyResumeTimer;

	function tabFromHash() {
		if (!browser) return 'intro';
		const hash = window.location.hash.replace(/^#/, '');
		return TAB_IDS.includes(hash) ? hash : 'intro';
	}

	function setHash(id, { replace = false } = {}) {
		if (!browser) return;
		const url = `${window.location.pathname}${window.location.search}#${id}`;
		if (window.location.hash === `#${id}`) return;
		if (replace) history.replaceState(history.state, '', url);
		else history.pushState(history.state, '', url);
	}

	function pauseSpy() {
		spyPaused = true;
		clearTimeout(spyResumeTimer);
		spyResumeTimer = setTimeout(() => {
			spyPaused = false;
			syncFromScroll();
		}, 450);
	}

	function goTo(id, { replace = false } = {}) {
		if (!TAB_IDS.includes(id) || !browser) return;
		activeId = id;
		pauseSpy();
		setHash(id, { replace });
		document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
		window.dispatchEvent(new Event('scroll'));
	}

	function syncFromScroll() {
		if (!browser || spyPaused) return;
		const probe = Math.min(140, window.innerHeight * 0.24);
		let current = TAB_IDS[0];
		for (const id of TAB_IDS) {
			const el = document.getElementById(id);
			if (!el) continue;
			if (el.getBoundingClientRect().top <= probe) current = id;
		}
		if (current !== activeId) {
			activeId = current;
			setHash(current, { replace: true });
		}
	}

	onMount(async () => {
		activeId = tabFromHash();
		await tick();
		if (window.location.hash) {
			document.getElementById(activeId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
		}

		const onScroll = () => syncFromScroll();
		const onPop = () => {
			const next = tabFromHash();
			activeId = next;
			pauseSpy();
			document.getElementById(next)?.scrollIntoView({ behavior: 'instant', block: 'start' });
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		window.addEventListener('hashchange', onPop);
		window.addEventListener('popstate', onPop);
		syncFromScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			window.removeEventListener('hashchange', onPop);
			window.removeEventListener('popstate', onPop);
			clearTimeout(spyResumeTimer);
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
			<h1>
				<a class="brand" href="/">
					<img src={cascadeLogo} alt="Cascade Climate" width="40" height="40" />
				</a>
			</h1>
		</header>
	</div>

	<LrmSection id="intro" intro bleed={false} overlap={0} z={1}>
		<LrmIntroStory />
	</LrmSection>

	<LrmSection id="takeaways" from="#023c40" to="#023c40" depth={200} overlap={64} rules={1} z={2}>
		<div class="wrap">
			<LrmReveal>
				<LrmImageExplore
					heading={takeaways.heading}
					headingId="takeaways-heading"
					intro={takeaways.intro}
					spots={takeaways.spots}
					variant="takeaways"
				/>
			</LrmReveal>
		</div>
	</LrmSection>

	<LrmSection id="cost-stack" from="#023c40" to="#023c40" depth={180} overlap={56} rules={1} z={3}>
		<div class="wrap">
			<LrmReveal>
				<LrmImageExplore
					heading={costStack.heading}
					headingId="cost-stack-heading"
					intro={costStack.intro}
					spots={costStack.spots}
					variant="costStack"
				/>
			</LrmReveal>
			<LrmReveal delay={90}>
				<section class="finance-layer" aria-labelledby="finance-layer-heading">
					<p class="layer-kicker">{costStack.financeLayer.kicker}</p>
					<h2 id="finance-layer-heading">{costStack.financeLayer.heading}</h2>
					<p class="layer-intro">{costStack.financeLayer.intro}</p>
					<figure class="layer-photo">
						<img src={costStack.financeLayer.photo} alt={costStack.financeLayer.photoAlt} />
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
			</LrmReveal>
		</div>
	</LrmSection>

	<LrmSection
		id="tool"
		from="#023c40"
		to="#023c40"
		depth={176}
		overlap={52}
		rules={1}
		z={4}
		labelledby="tool-heading"
	>
		<div class="wrap tool-section">
			<LrmReveal>
				<h2 id="tool-heading">Cost model</h2>
				<p class="tool-lede">
					Inputs on the left; calculated operational and capital costs on the right. Figures follow
					the V2.3 workbook, including NA where a combination has no value.
				</p>
				<LrmShareLink />
			</LrmReveal>
			<LrmReveal delay={80}>
				<LrmCostModel idPrefix="explorer" />
			</LrmReveal>
		</div>
	</LrmSection>

	<LrmSection
		id="glossary"
		from="#023c40"
		to="#023c40"
		depth={168}
		overlap={48}
		rules={1}
		z={5}
		last
	>
		<div class="wrap glossary-tab">
			<LrmReveal>
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
				<p class="page-foot">
					LRM Cost Model V2.3 · Unlisted prototype · Costs for exploration, not formal
					decision-making
				</p>
			</LrmReveal>
		</div>
	</LrmSection>

	<div class="nav-dock">
		<div class="wrap">
			<LrmExplorerNav tabs={TABS} {activeId} on:select={(e) => goTo(e.detail)} />
		</div>
	</div>
</div>

<style>
	.wrap {
		width: min(1120px, calc(100% - 2rem));
		margin: 0 auto;
	}

	.identity {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 8;
		padding: 1.15rem 0 0;
		pointer-events: none;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		pointer-events: auto;
	}

	.site h1 {
		margin: 0;
		line-height: 0;
	}

	.brand img {
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		filter: drop-shadow(0 2px 10px rgba(2, 60, 64, 0.55));
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

	.tool-section :global(h2),
	.glossary-tab :global(h2),
	.finance-layer h2 {
		font-family: var(--font);
		font-size: 1.45rem;
		font-weight: 600;
		margin: 0 0 0.65rem;
		color: var(--header);
		line-height: 1.25;
	}

	.tool-lede,
	.lede {
		max-width: 40rem;
		margin: 0 0 0.75rem;
		color: var(--ink-soft);
		font-size: 1rem;
		line-height: 1.5;
	}

	.lede {
		color: var(--header);
		opacity: 0.88;
		font-size: 1.02rem;
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
		scroll-margin-top: 4.75rem;
		scroll-margin-bottom: 5.5rem;
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

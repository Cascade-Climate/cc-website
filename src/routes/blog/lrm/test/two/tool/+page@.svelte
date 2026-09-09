<script>
	import '$lib/components/lrm/lrm-shell.css';
	import LrmCostModel from '$lib/components/lrm/LrmCostModel.svelte';
</script>

<svelte:head>
	<title>LRM Cost Model — Cascade Climate (unlisted test)</title>
	<meta
		name="description"
		content="Standalone LRM Cost Model V2.3 calculator. Operational cost in USD/kg and capital cost in USD."
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

<div class="lrm-shell standalone">
	<div class="wrap">
		<header class="site">
			<div class="eyebrow">Lifecycle refrigerant management</div>
			<h1>LRM Cost Model</h1>
			<p class="lede">
				This is the V2.3 cost model. Change geography, pathway, and equipment; it returns
				operational cost in USD/kg and capital cost in USD, with NA where the workbook has no
				figure.
			</p>
			<p class="explorer-link">
				<a href="/blog/lrm/test/two#intro" data-sveltekit-reload>Explore the full Refrigerant Lifecycle Explorer →</a>
			</p>
		</header>

		<p class="continue-row">
			<a href="/blog/lrm/test/two#takeaways" data-sveltekit-reload>What did the cost research find? →</a>
		</p>

		<LrmCostModel idPrefix="standalone" />

		<p class="continue-row after-model">
			<a href="/blog/lrm/test/two#takeaways" data-sveltekit-reload>What did the cost research find? →</a>
		</p>

		<p class="page-foot">
			<a href="/blog/lrm/test/two#intro" data-sveltekit-reload>Explore the full Refrigerant Lifecycle Explorer →</a>
		</p>
	</div>
</div>

<style>
	.wrap {
		width: min(1120px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 1.5rem 0 4rem;
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
		font-size: clamp(1.6rem, 3vw, 2.1rem);
		line-height: 1.15;
		margin: 0 0 0.65rem;
		letter-spacing: -0.03em;
		color: var(--header);
	}

	.lede {
		max-width: 40rem;
		margin: 0 0 0.85rem;
		font-size: 1.02rem;
		line-height: 1.5;
		color: var(--ink-soft);
	}

	.explorer-link {
		margin: 0 0 1.15rem;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.continue-row {
		margin: 0 0 1.5rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.continue-row.after-model {
		margin: 2rem 0 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
	}

	.explorer-link a,
	.continue-row a,
	.page-foot a {
		color: var(--accent);
		text-decoration: none;
	}

	.explorer-link a:hover,
	.continue-row a:hover,
	.page-foot a:hover {
		text-decoration: underline;
	}

	.page-foot {
		margin-top: 2.5rem;
		font-size: 0.92rem;
		font-weight: 600;
	}

	:global(.standalone .results) {
		top: 1.25rem;
	}
</style>

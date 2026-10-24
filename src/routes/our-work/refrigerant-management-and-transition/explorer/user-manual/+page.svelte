<script>
	import { onMount } from 'svelte';
	import { intro, navItems, sections } from '$lib/lrm/userManual.js';

	let active = navItems[0].id;
	let scrollLock = 0;

	function tick() {
		if (Date.now() < scrollLock) return;
		const line = 180;
		let next = '';
		for (const item of navItems) {
			const el = document.getElementById(item.id);
			if (!el) continue;
			if (el.getBoundingClientRect().top <= line) next = item.id;
		}
		if (!next) {
			for (const item of navItems) {
				const el = document.getElementById(item.id);
				if (!el) continue;
				if (el.getBoundingClientRect().top < window.innerHeight * 0.4) next = item.id;
			}
		}
		if (next) active = next;
	}

	function jump(id) {
		active = id;
		scrollLock = Date.now() + 1500;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		tick();
		window.addEventListener('scroll', tick, { passive: true });
		return () => window.removeEventListener('scroll', tick);
	});
</script>

<svelte:head>
	<title>User Manual — Cascade Climate</title>
	<meta
		name="description"
		content="User manual for the Lifecycle Refrigerant Management Cost Explorer."
	/>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow, noarchive" />
</svelte:head>

<div class="manual">
	<aside class="rail">
		<p class="rail-kicker">Contents</p>
		<nav aria-label="In this manual">
			{#each navItems as item}
				<a
					href="#{item.id}"
					class:sub={item.sub}
					class:active={active === item.id}
					on:click|preventDefault={() => jump(item.id)}
				>{item.title}</a>
			{/each}
		</nav>
	</aside>

	<article class="doc">
		<h1>User Manual</h1>
		<p class="subtitle">Lifecycle Refrigerant Management (LRM) Cost Explorer</p>
		<p class="return">
			<a class="return-link" href="/our-work/refrigerant-management-and-transition/costs">Return to LRM costs</a>
		</p>
		{#each intro as para}
			<p>
				{#each para.parts as part}{#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}{/each}
			</p>
		{/each}

		{#each sections as section}
			<section id={section.id}>
				<h2>{section.title}</h2>
				{#each section.blocks as block}
					{#if block.type === 'h2'}
						<h3 id={block.id}>{block.title}</h3>
					{:else if block.type === 'h3' || block.type === 'h4'}
						<h4 id={block.id}>{block.title}</h4>
					{:else if block.type === 'p'}
						<p class:formula={block.formula}>
							{#each block.parts as part}{#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}{/each}
						</p>
					{:else if block.type === 'ul'}
						<ul>
							{#each block.items as item}
								<li>
									{#each item.parts as part}{#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}{/each}
									{#if item.children.length}
										<ul>
											{#each item.children as child}
												<li>
													{#each child.parts as part}{#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}{/each}
												</li>
											{/each}
										</ul>
									{/if}
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</section>
		{/each}
	</article>
</div>

<style>
	.manual {
		--paper: #f4f3ed;
		--teal: #023c40;
		--panel: #fafafa;

		min-height: calc(100vh - 4rem);
		background: var(--paper);
		color: #000;
		font-size: 1.02rem;
		line-height: 1.55;
	}

	.rail {
		position: fixed;
		top: 4rem;
		left: 0;
		z-index: 5;
		width: 18.5rem;
		height: calc(100vh - 4rem);
		overflow: auto;
		background: var(--teal);
		color: var(--panel);
		padding: 1.35rem 0 2rem;
	}

	.rail-kicker {
		margin: 0 0 0.85rem;
		padding: 0 1.15rem;
		color: #ffffff;
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		opacity: 1;
	}

	.rail nav a {
		display: block;
		padding: 0.55rem 1.15rem;
		color: inherit;
		text-decoration: none;
		font-size: 0.95rem;
		line-height: 1.35;
		border-left: 3px solid transparent;
	}

	.rail nav a.sub {
		padding-left: 1.85rem;
		font-size: 0.88rem;
		opacity: 0.9;
	}

	.rail nav a:hover {
		background: rgba(250, 250, 250, 0.12);
	}

	.rail nav a.active {
		background: var(--panel);
		color: var(--teal);
		opacity: 1;
	}

	.doc {
		background: var(--paper);
		margin-left: 18.5rem;
		padding: 1.35rem 2.75rem 40vh;
		min-width: 0;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.85rem, 2.6vw, 2.45rem);
		font-weight: 500;
		line-height: 1.15;
		color: var(--teal);
	}

	p.subtitle {
		margin: 0.35rem 0 1.25rem;
		font-size: 1.15rem;
		font-weight: 500;
		line-height: 1.35;
		text-align: left;
		color: var(--teal);
	}

	.return {
		margin: 0 0 1.25rem;
	}

	.return-link {
		display: inline-block;
		padding: 0.55rem 1.35rem;
		border-radius: 2rem;
		background: var(--color-accent);
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.3;
	}

	.return-link:hover {
		opacity: 0.92;
	}

	h2,
	h3,
	h4 {
		color: var(--teal);
		scroll-margin-top: 5.25rem;
	}

	h2 {
		margin: 2.1rem 0 0.75rem;
		font-size: 1.35rem;
		font-weight: 500;
		line-height: 1.3;
		text-decoration: none;
	}

	section:first-of-type h2 {
		margin-top: 1.35rem;
	}

	h3 {
		margin: 1.65rem 0 0.45rem;
		font-size: 1.12rem;
		font-weight: 600;
		line-height: 1.35;
	}

	h4 {
		margin: 1.15rem 0 0.35rem;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.35;
	}

	.doc :global(p),
	p {
		margin: 0 0 0.9rem;
		text-align: left;
		line-height: 1.6;
		color: #000;
	}

	p.formula {
		text-align: left;
	}

	ul {
		margin: 0 0 1rem 1.15rem;
		padding: 0;
	}

	li {
		margin: 0 0 0.45rem;
		text-align: left;
		line-height: 1.55;
	}

	li ul {
		margin-top: 0.35rem;
		margin-bottom: 0.15rem;
	}

	section {
		scroll-margin-top: 5.25rem;
	}

	.manual :focus-visible {
		outline: 2px solid #00edae;
		outline-offset: 3px;
	}

	@media (max-width: 860px) {
		.rail {
			position: static;
			width: auto;
			height: auto;
		}

		.doc {
			margin-left: 0;
			padding: 1.5rem 1.25rem 3rem;
		}
	}
</style>

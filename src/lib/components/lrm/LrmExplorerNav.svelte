<script>
	/** @type {{ id: string, label: string }[]} */
	export let tabs = [];
	/** @type {string} */
	export let activeId = 'intro';

	import { createEventDispatcher, tick } from 'svelte';

	const dispatch = createEventDispatcher();
	let scroller;

	$: index = tabs.findIndex((t) => t.id === activeId);
	$: prevTab = index > 0 ? tabs[index - 1] : null;
	$: nextTab = index >= 0 && index < tabs.length - 1 ? tabs[index + 1] : null;

	function select(id) {
		dispatch('select', id);
	}

	function onKeydown(event, i) {
		if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
			return;
		}
		event.preventDefault();
		let next = i;
		if (event.key === 'ArrowRight') next = Math.min(i + 1, tabs.length - 1);
		if (event.key === 'ArrowLeft') next = Math.max(i - 1, 0);
		if (event.key === 'Home') next = 0;
		if (event.key === 'End') next = tabs.length - 1;
		select(tabs[next].id);
		tick().then(() => {
			scroller?.querySelector(`[data-tab="${tabs[next].id}"]`)?.focus();
		});
	}

	$: if (scroller && activeId) {
		const el = scroller.querySelector(`[data-tab="${activeId}"]`);
		el?.scrollIntoView({ inline: 'center', block: 'nearest' });
	}
</script>

<div class="dock-inner">
	{#if prevTab}
		<button
			type="button"
			class="arrow"
			aria-label="Previous: {prevTab.label}"
			on:click={() => select(prevTab.id)}
		>
			←
		</button>
	{:else}
		<span class="arrow-spacer" aria-hidden="true"></span>
	{/if}

	<div class="tab-bar" bind:this={scroller} role="tablist" aria-label="Explorer sections">
		{#each tabs as tab, i}
			<button
				type="button"
				class="tab"
				role="tab"
				id="tab-{tab.id}"
				data-tab={tab.id}
				aria-selected={activeId === tab.id}
				aria-controls="panel-{tab.id}"
				tabindex={activeId === tab.id ? 0 : -1}
				on:click={() => select(tab.id)}
				on:keydown={(e) => onKeydown(e, i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	{#if nextTab}
		<button
			type="button"
			class="arrow"
			aria-label="Next: {nextTab.label}"
			on:click={() => select(nextTab.id)}
		>
			→
		</button>
	{:else}
		<span class="arrow-spacer" aria-hidden="true"></span>
	{/if}
</div>

<style>
	.dock-inner {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		min-height: 3.25rem;
	}

	.tab-bar {
		display: flex;
		flex: 1 1 auto;
		flex-wrap: nowrap;
		justify-content: center;
		gap: 1.15rem;
		overflow-x: auto;
		scrollbar-width: none;
		min-width: 0;
	}

	.tab-bar::-webkit-scrollbar {
		display: none;
	}

	.tab {
		appearance: none;
		flex: 0 0 auto;
		border: 0;
		border-top: 2px solid transparent;
		margin-top: -1px;
		background: transparent;
		color: var(--ink-soft);
		font: inherit;
		font-size: 0.84rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: 0.75rem 0.1rem 0.7rem;
		cursor: pointer;
		white-space: nowrap;
	}

	.tab:hover {
		color: var(--header);
	}

	.tab[aria-selected='true'] {
		color: var(--header);
		font-weight: 650;
		border-top-color: var(--accent);
	}

	.arrow,
	.arrow-spacer {
		flex: 0 0 2.75rem;
		width: 2.75rem;
		height: 2.75rem;
	}

	.arrow {
		appearance: none;
		border: 0;
		background: transparent;
		color: var(--accent);
		font: inherit;
		font-size: 1.45rem;
		line-height: 1;
		cursor: pointer;
		padding: 0;
	}

	.arrow:hover {
		color: var(--header);
	}

	@media (max-width: 720px) {
		.tab-bar {
			gap: 1rem;
			justify-content: flex-start;
		}

		.tab {
			font-size: 0.78rem;
			padding: 0.75rem 0.15rem;
		}

		.arrow,
		.arrow-spacer {
			flex-basis: 2.5rem;
			width: 2.5rem;
			height: 2.5rem;
		}
	}
</style>

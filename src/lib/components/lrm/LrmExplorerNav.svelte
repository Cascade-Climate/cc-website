<script>
	/** @type {{ id: string, label: string }[]} */
	export let tabs = [];
	/** @type {string} */
	export let activeId = 'intro';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function select(event, id) {
		event.preventDefault();
		dispatch('select', id);
	}
</script>

<nav class="dock-inner" aria-label="Explorer sections">
	<div class="tab-bar">
		{#each tabs as tab}
			<a
				class="tab"
				class:is-active={activeId === tab.id}
				href="#{tab.id}"
				data-tab={tab.id}
				aria-current={activeId === tab.id ? 'location' : undefined}
				on:click={(e) => select(e, tab.id)}
			>
				{tab.label}
			</a>
		{/each}
	</div>
</nav>

<style>
	.dock-inner {
		display: flex;
		align-items: center;
		min-height: 3.25rem;
	}

	.tab-bar {
		display: flex;
		flex: 1 1 auto;
		flex-wrap: nowrap;
		justify-content: center;
		gap: 1.35rem;
		overflow-x: auto;
		scrollbar-width: none;
		min-width: 0;
	}

	.tab-bar::-webkit-scrollbar {
		display: none;
	}

	.tab {
		flex: 0 0 auto;
		border-top: 2px solid transparent;
		margin-top: -1px;
		color: var(--ink-soft);
		font: inherit;
		font-size: 0.84rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		padding: 0.75rem 0.1rem 0.7rem;
		white-space: nowrap;
	}

	.tab:hover {
		color: var(--header);
	}

	.tab.is-active {
		color: var(--header);
		font-weight: 650;
		border-top-color: var(--accent);
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
	}
</style>

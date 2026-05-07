<script>
	export let active;
	export let callbackFn;
	export let navItems = undefined;

	import config from '$lib/config.json';

	$: items = navItems ?? config.navItems;

	let opened = [];
	$: if (opened.length !== items.length) {
		opened = items.map(() => false);
	}

	function toggle(i) {
		opened = opened.map((v, idx) => (idx === i ? !v : v));
	}
</script>

<div id="nav-modal" class:active>
	<nav>
		{#each items as item, i}
			{#if item.children.length > 1}
				<button on:click={() => toggle(i)} class="nav-item item{i}" tabindex="0">
					<span>
						{item.label}
					</span>
					<div class="subnav" class:open={opened[i]}>
						{#each item.children as subitem}
							{#if subitem.children && subitem.children.length}
								<div class="subnav-group">
									<a
										target={subitem.external ? '_blank' : '_self'}
										href={subitem.url}
										on:click={callbackFn}
									>
										{subitem.label}
									</a>
									{#each subitem.children as nested}
										<a
											class="subnav-nested"
											target={nested.external ? '_blank' : '_self'}
											href={nested.url}
											on:click={callbackFn}
										>
											{nested.label}
										</a>
									{/each}
								</div>
							{:else}
								<a
									target={subitem.external ? '_blank' : '_self'}
									href={subitem.url}
									on:click={callbackFn}
								>
									{subitem.label}
								</a>
							{/if}
						{/each}
					</div>
				</button>
			{:else}
				<button class="nav-item item{i}" tabindex="0">
					<span>
						<a
							target={item.children[0].external ? '_blank' : '_self'}
							href={item.children[0].url}
							on:click={callbackFn}
						>
							{item.label}
						</a>
					</span>
				</button>
			{/if}
		{/each}
	</nav>
</div>

<style>
	#nav-modal {
		position: fixed;
		top: 4rem;
		left: 0;
		width: 100%;
		overflow-y: auto;
		display: flex;
		color: var(--color-dark);
		background-color: var(--color-light);
		opacity: 0;
		visibility: hidden;
		justify-content: center;
		align-items: center;
		z-index: 900; /* Below header (1000), above page-level sticky navs */
		transition:
			visibility 0.2s,
			opacity 0.3s;
	}

	#nav-modal.active {
		opacity: 1;
		visibility: visible;
		transition:
			visibility 0.2s,
			opacity 0.3s;
	}

	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	nav a {
		color: var(--color-light);
		text-decoration: none;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		width: 100%;
	}

	.nav-item {
		position: relative;
		color: var(--color-light);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 2rem;
		width: 100%;
		border-top: 1px solid var(--color-light);
		font-size: 1.2rem;
		/* Use primary accent for parent items */
		background-color: var(--color-accent);
		min-height: 4rem;
	}

	.nav-item span {
		padding: 1rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.nav-item:last-child {
		border-bottom: 1px solid var(--color-dark);
	}

	.subnav {
		display: none;
		/* Lighter shade for subnav to differentiate from parent */
		background-color: color-mix(in srgb, var(--color-accent) 85%, white 15%);
		padding: 0.6rem 0.4rem;
		gap: 1rem;
		top: calc(100%);
		width: 100vw;
		flex-direction: column;
		align-items: center;
		border-bottom: 4px solid var(--color-highlight);
		border-top: 1px solid var(--color-light);
	}
	.subnav.open {
		display: flex;
	}

	.subnav-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		width: 100%;
		padding: 0.35rem 0;
		border-bottom: 1px solid color-mix(in srgb, var(--color-light) 20%, transparent);
	}

	.subnav-group:last-child {
		border-bottom: none;
	}

	.subnav-nested {
		font-size: 0.95rem;
		color: var(--color-highlight);
		padding: 0.15rem 0;
	}

	nav a:hover {
		text-decoration: underline;
	}

	@media (max-width: 660px) {
		.nav-item {
			min-height: 3rem;
			font-size: 1rem;
		}

		.nav-item span {
			padding: 0.75rem 0;
		}
	}

	.item0 {
		transition-delay: 0s;
	}

	.item1 {
		transition-delay: 0.04s;
	}

	.item2 {
		transition-delay: 0.08s;
	}

	.item3 {
		transition-delay: 0.16s;
	}

	.item4 {
		transition-delay: 0.2s;
	}

	.item5 {
		transition-delay: 0.24s;
	}

	.item6 {
		transition-delay: 0.28s;
	}

	.item7 {
		transition-delay: 0.32s;
	}
</style>

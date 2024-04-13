<script>
	export let active;
	export let callbackFn;

	import config from '$lib/config.json';
</script>

<div id="nav-modal" class:active>
	<nav>
		{#each config.navItems as item, i (item.url)}
			<a on:click={callbackFn} class={'item' + i} href={item.url}>{item.label}</a>
		{/each}
		<a class={'item' + config.navItems.length} href={config.subscribeUrl}>Subscribe</a>
	</nav>
</div>

<style>
	#nav-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		color: var(--color-dark);
		background-color: var(--color-light);
		opacity: 0;
		visibility: hidden;
		justify-content: center;
		align-items: center;
		z-index: 2;
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
	}

	nav a {
		color: transparent;
		text-decoration: none;
		margin: 1rem;
		transition: all 0.2s;
		transition-delay: 0.36s;
		transform: translateY(1rem);
		font-size: 24px;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.active a {
		transform: translateY(0);
		color: inherit;
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

<script>
	export let active;
	import nav from '$lib/navigation.json';
</script>

<div id="nav-modal" class:active>
	<nav>
		{#each nav.items as item, i (item.url)}
			<a
				class={'item' + i}
				class:button={item.button}
				target={item.external ? '_blank' : '_self'}
				href={item.url}>{item.label}</a
			>
		{/each}
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
		transition-delay: 1s;
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
</style>

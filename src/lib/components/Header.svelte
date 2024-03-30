<script>
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	import NavModal from '$lib/components/NavModal.svelte';
	import nav from '$lib/navigation.json';

	let navModalActive = false;
	function toggleNavModal() {
		navModalActive = !navModalActive;
	}
</script>

<header>
	<div id="header-container">
		<div id="header-logo">
			<a href="/">
				<img alt="Logo" />
				Cascade Climate
			</a>
		</div>
		{#if !navModalActive}
			<nav>
				{#each nav.items as item (item.url)}
					<a class:button={item.button} target={item.external ? '_blank' : '_self'} href={item.url}
						>{item.label}</a
					>
				{/each}
			</nav>
		{/if}
		<HamburgerMenu mobileOnly={true} callbackFn={toggleNavModal} />
	</div>
	<NavModal active={navModalActive} />
</header>

<style>
	header {
		background-color: var(--color-dark);
	}

	#header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		padding: 0 1rem;
		z-index: 4;
		position: relative;
		background-color: var(--color-dark);
	}

	#header-logo a {
		font-family: 'Work Sans', sans-serif;
		font-size: 20px;
	}

	nav {
		display: flex;
		align-items: center;
	}

	header a {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 400;
		font-size: 12px;
		font-variation-settings: 'wght' 300;
		letter-spacing: 0.6px;
		margin: 0 8px;
		padding: 0 8px;
	}

	header a.button {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 8px 24px;
		margin: 0 16px;
		border-radius: 16px;
	}

	@media (max-width: 660px) {
		#header-container {
			justify-content: space-between;
		}

		nav {
			display: none;
		}
	}
</style>

<script>
	import cascadeLogo from '$lib/images/cc-logo.png';
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	import NavModal from '$lib/components/NavModal.svelte';
	import config from '$lib/config.json';

	let navModalActive = false;
	function toggleNavModal() {
		navModalActive = !navModalActive;
	}
</script>

<header>
	<div id="header-container">
		<div id="header-logo">
			<a href="/" on:click={() => navModalActive = false}>
				<img width="24" height="24" src={cascadeLogo} alt="Cascade Climate Logo" />
				Cascade Climate
			</a>
		</div>
		{#if !navModalActive}
			<nav>
				{#each config.navItems as item (item.url)}
					<a class:button={item.button} target={item.external ? '_blank' : '_self'} href={item.url}
						>{item.label}</a
					>
				{/each}
				<a class="button" target="_blank" href={config.subscribeUrl}>Subscribe</a>
			</nav>
		{/if}
		<HamburgerMenu mobileOnly={true} callbackFn={toggleNavModal} active={navModalActive}/>
	</div>
	<NavModal active={navModalActive} callbackFn={toggleNavModal}/>
</header>

<style>
	header {
		height: 4rem;
	}

	#header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		padding: 0 1rem;
		z-index: 4;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: var(--color-dark);
	}

	#header-logo a {
		font-family: 'Work Sans', sans-serif;
		font-size: 20px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	#header-logo img {
		width: 24px;
		height: auto;
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
		line-height: 16px;
		font-variation-settings: 'wght' 300;
		letter-spacing: 0.6px;
		margin: 0 8px;
		padding: 0 8px;
	}

	header a.button {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 8px 16px;
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

<script>
	import cascadeLogo from '$lib/images/cc-logo.webp';
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	import NavModal from '$lib/components/NavModal.svelte';
	import config from '$lib/config.json';

	let navModalActive = false;
	function toggleNavModal() {
		navModalActive = !navModalActive;
	}

	let opened;
</script>

<header>
	<div id="header-container">
		<div id="header-logo">
			<a href="/" on:click={() => (navModalActive = false)}>
				<img width="24" height="24" src={cascadeLogo} alt="Cascade Climate Logo" />
				Cascade Climate
			</a>
		</div>
		{#if !navModalActive}
			<nav>
				{#each config.navItems as item, i}
					<div
						on:mouseover={() => {
							opened = i;
						}}
						on:mouseleave={() => {
							opened = undefined;
						}}
						role="button"
						class="nav-item"
						tabindex="0"
						on:focus={() => {
							opened = i;
						}}
					>
						<a href={item.url}>
							{item.label}
						</a>
						<div class="subnav" class:open={opened === i}>
							{#each item.children as subitem}
								<a
									target={subitem.external ? '_blank' : '_self'}
									href={subitem.url}
									on:click={() => (navModalActive = false)}
								>
									{subitem.label}
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</nav>
		{/if}
		<HamburgerMenu mobileOnly={true} callbackFn={toggleNavModal} active={navModalActive} />
	</div>
	<NavModal active={navModalActive} callbackFn={toggleNavModal} />
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
		width: 100vw;
		background-color: var(--color-dark);
		border-bottom: 1px solid var(--color-light);
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
		height: 100%;
	}

	header a, span {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		font-variation-settings: 'wght' 300;
		letter-spacing: 0.6px;
		padding: 0 8px;
		text-align: center;
	}

	a:hover {
		color: var(--color-highlight);
	}

	.nav-item {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 2rem;
		cursor: pointer;
	}

	.subnav {
		display: none;
		position: absolute;
		background-color: var(--color-accent);
		padding: 0.6rem 0.4rem;
		gap: 1rem;
		top: calc(100% - 4px);
		width: 100%;
		flex-direction: column;
		align-items: center;
		border-top: 4px solid var(--color-highlight);
	}
	.subnav.open {
		display: flex;
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

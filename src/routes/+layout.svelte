<script>
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	import NavModal from '../lib/components/NavModal.svelte';
	import nav from '$lib/nav.json';

	let navModalActive = false;

	function toggleNavModal() {
		navModalActive = !navModalActive;
	}
</script>

<div id="layout">
	<header>
		<div id="header-container">
			<div id="header-logo">
				<a href="/">
					<img alt="Logo" />
					Cascade Climate
				</a>
			</div>
			<nav>
				{#each nav.items as item (item.url)}
					<a class:button={item.button} target={item.external ? '_blank' : '_self'} href={item.url}
						>{item.label}</a
					>
				{/each}
			</nav>
			<HamburgerMenu mobileOnly={true} callbackFn={toggleNavModal} />
		</div>
	</header>
	<NavModal active={navModalActive} />
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Work Sans';
		font-style: normal;
		src: url('/fonts/WorkSans-Variable.ttf');
		src:
			local(''),
			url('/fonts/WorkSans-Variable.ttf?#iefix') format('truetype');
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		src: url('/fonts/Inter-Variable.ttf');
		src:
			local(''),
			url('/fonts/Inter-Variable.ttf?#iefix') format('truetype');
	}

	:global(:root) {
		font-family: 'Inter', sans-serif;
		--color-dark: #023c40;
		--color-accent: #187373;
		--color-light: #ffffff;
	}

	:global(body) {
		margin: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Work Sans', sans-serif;
	}

	header {
		background-color: var(--color-dark);
	}

	#header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
		padding: 0 1rem;
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
		padding: 0 16px;
	}

	header a.button {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 8px 24px;
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

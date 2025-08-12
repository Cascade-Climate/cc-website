<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/theme.css'
</script>

<div id="root-layout">
	<Header />
	<slot />
	<Footer />
</div>

<style>


	:global(body) {
		margin: 0;
		font-weight: 300;
		font-size: 18px;
	}

	/* Use native smooth scroll so in-page anchors account for sticky elements correctly */
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body:has(#nav-modal.active)) {
		overflow: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(p) {
		margin-top: 0;
		line-height: 28px;
	}

	:global(p a) {
		color: var(--color-accent);
		text-decoration: none;
		font-weight: 420;
	}

	:global(div) {
		line-height: 28px;
	}
</style>

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

	:global(body:has(#nav-modal.active)) {
		overflow: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Work Sans', sans-serif;
		font-weight: 400;
		margin: 0;
	}

	:global(p) {
		margin-top: 0;
		line-height: 28px;
	}

	:global(div) {
		line-height: 28px;
	}
</style>

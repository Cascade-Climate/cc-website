
<script>
	import Header from '$lib/components/Header.svelte';
</script>

<div id="layout">
	<Header />	
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

</style>

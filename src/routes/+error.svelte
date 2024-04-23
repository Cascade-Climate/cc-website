
<script>
	import { page } from '$app/stores';
</script>

<div id="error">
	<h1>{$page.status}</h1>
	<p>{$page.error.message}</p>
</div>

<style>
	#error {
		padding-top: 16rem;
		padding-bottom: 16rem;
		text-align: center;
	}
</style>
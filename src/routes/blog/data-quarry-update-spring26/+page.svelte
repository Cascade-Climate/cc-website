<script>
	import { redirect } from '@sveltejs/kit';

	// Backwards-compatible redirect for the old slug.
	throw redirect(307, '/blog/data-quarry-update-spring-26');
</script>

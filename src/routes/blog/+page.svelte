<script>
	// import a from "$lib/blog/*.md?raw";

	const mds = import.meta.glob("$lib/blog/*.md", {
		as: 'raw',
		eager: true
	});
	console.log(mds);
</script>


<div>blog</div>
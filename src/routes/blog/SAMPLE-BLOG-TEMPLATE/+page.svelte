<script>
	import image1 from '$lib/images/waves.webp';
</script>

<svelte:head>
	<title>Sample Blog Post - Cascade Climate</title>
	<meta
		name="description"
		content="A short description of the blog post for SEO purposes."
	/>
</svelte:head>
<div class="blog-post">
	<p class="date">January 1, 1970</p>
	<h1>
		Sample Blog Post
	</h1>
	<a href="/team/arielle-lok">Sample Blog Author</a>
	<br />
	<br />
	<p>
		This is a sample blog post. You can use this template to create new blog posts. Be sure to update the title, date, author, and content.
	</p>
	<p>
		You can also add links to other pages on the site, like the <a href="/team">team page</a>.
	</p>
	<p>Images can be inserted like so:</p>
	<img src={image1} alt="Cascade Climate Logo" />
	<h5>The content is just HTML, so you can format however you'd like:</h5>
	<ul>
		<li>Like this</li>
		<li><em>Or this</em></li>
		<li><strong>Or this</strong></li>
	</ul>
</div>

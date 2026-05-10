<script>
	import { blogTeaserPosts } from '$lib/data/blogTeaserPosts.js';
</script>

<section class="blog-spotlight">
	<hr class="rule" />
	<h3>RECENT <a href="/blog">BLOGS ↗</a></h3>
	<div class="posts">
		{#each blogTeaserPosts as post, i}
			<article class="post">
				<h4><a href={post.href}>{post.title}</a></h4>
				<p>{post.excerpt}</p>
				<p class="details">
					<span class="date">{post.date}</span>
					·
					<span class="read-time">{post.readTime}</span>
				</p>
			</article>
			{#if i < blogTeaserPosts.length - 1}
				<hr />
			{/if}
		{/each}
	</div>
</section>

<style>
	.rule {
		margin: 2.5rem 0;
		border: none;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 15%, transparent);
	}

	h3 {
		font-weight: 300;
		font-size: 1.2rem;
		margin-bottom: 1.25rem;
	}

	h3 a {
		font-weight: 550;
		color: var(--color-text);
		text-decoration: none;
	}

	.posts hr {
		margin: 1.25rem 0;
		border: none;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 12%, transparent);
	}

	.post h4 {
		margin: 0 0 0.5rem;
		font-weight: 400;
		font-size: 1.1rem;
		line-height: 1.35;
	}

	.post h4 a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.details {
		font-size: 0.9rem;
		opacity: 0.85;
		margin-bottom: 0;
	}
</style>

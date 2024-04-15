<div id="blog-container">
	<slot />
</div>

<style>
	#blog-container {
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:global(.blog-post) {
		max-width: 800px;
		padding: 4rem 0;
	}

	:global(h1, h2, h3, h4, h5) {
		line-height: 3rem;
	}

	:global(.blog-post a) {
		text-decoration: none;
		color: var(--color-accent);
		font-weight: 420;
	}

	:global(img) {
		max-width: 100%;
		margin: 1rem auto;
	}
</style>


<script>
	export let active;
</script>

<div id="nav-modal" class:active={active}>
	<nav>
		<a href="/who-we-are">WHO WE ARE</a>
		<a href="/qa">Q&A</a>
		<a href="/blog">BLOG</a>
	</nav>
</div>

<style>
	#nav-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: none;
		justify-content: center;
		align-items: center;
	}

	#nav-modal.active {
		display: flex;
	}

	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav a {
		color: var(--color-light);
		text-decoration: none;
		margin: 1rem;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
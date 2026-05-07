<script>
	import heroImg from '$lib/images/nature/model-acceleration-hero-2.png';
</script>

<svelte:head>
	<title>Modeling Acceleration - Bedrock Initiative - Cascade Climate</title>
	<meta name="description" content="Comparable modeling frameworks for ERW deployment insights." />
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="preamble">
		<p class="crumb"><a href="/bedrock-initiative">Bedrock Initiative</a></p>
		<h1>Modeling Acceleration</h1>
	</section>
	<section class="body">
		<p>
			Bedrock is convening leading academic geochemical modelers to examine the soil-system impacts of ERW using
			multi-model ensembles.
		</p>
		<p>
			These efforts will identify critical data gaps for field research to address, creating an iterative cycle between
			modeling and field experimentation — with the first community workshop in May 2026.
		</p>
		<p><a class="back" href="/bedrock-initiative">← Back to Bedrock overview</a></p>
	</section>
</div>

<style>
	.page {
		padding-bottom: 4rem;
	}
	.preamble {
		padding: 1.25rem 4rem;
		background: var(--color-dark);
		color: var(--color-light);
	}
	.hero-img {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		display: block;
	}
	.crumb a {
		color: var(--color-highlight);
		text-decoration: none;
		font-size: 0.9rem;
	}
	h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem 0 0;
	}
	.body {
		padding: 1.75rem 4rem;
		max-width: 720px;
	}
	.back {
		color: var(--color-accent);
		text-decoration: none;
	}
	@media (max-width: 660px) {
		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>

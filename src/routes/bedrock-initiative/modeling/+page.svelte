<script>
	import heroImg from '$lib/images/nature/model-acceleration-hero-2.png';
	import SpotlightGrid from '$lib/components/SpotlightGrid.svelte';

	const spotlightItems = [
		{
			image: '/images/blog/erw-modeling-workshop-hero.jpg',
			imageAlt: 'Participants of the ERW Modeling Workshop gathered for a group photo',
			title: 'Notes from the ERW Modeling Workshop',
			excerpt:
				'Cascade convened fifteen ERW modelers and empiricists in New York City to chart critical hypotheses and the field data needed to test them.',
			href: '/bedrock-initiative/modeling/blog/may-workshop'
		}
	];
</script>

<svelte:head>
	<title>Model Acceleration - Bedrock Initiative - Cascade Climate</title>
	<meta name="description" content="Comparable modeling frameworks for ERW deployment insights." />
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="preamble">
		<p class="crumb"><a href="/bedrock-initiative">Bedrock Initiative</a></p>
		<h1>Model Acceleration</h1>
	</section>
	<section class="body">
		<p>
			Bedrock is convening leading academic geochemical modelers to examine the soil-system impacts of ERW using
			multi-model ensembles.
		</p>
		<p>
			These efforts — beginning with a comprehensive mapping of current model capabilities and process representations — will identify critical data gaps for field research to address, creating an iterative cycle between modeling and field experimentation — with the first community workshop in May 2026.
		</p>

		<div class="spotlight-wrap">
			<SpotlightGrid
				sectionTitle="MODEL ACCELERATION"
				sectionHref="/bedrock-initiative/modeling"
				items={spotlightItems}
			/>
		</div>

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
		color: #fff;
		text-decoration: none;
		font-size: 0.9rem;
	}
	.crumb a:hover {
		opacity: 0.92;
	}
	h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem 0 0;
	}
	.body {
		padding: 1.75rem 4rem;
		max-width: 1100px;
	}
	.body > p {
		max-width: 720px;
	}
	.spotlight-wrap :global(.spotlight) {
		flex: 0 1 260px;
		width: 260px;
		max-width: 100%;
	}
	.back {
		display: inline-block;
		margin-top: 1.5rem;
		color: var(--color-accent);
		text-decoration: none;
	}
	@media (max-width: 660px) {
		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.spotlight-wrap :global(.spotlight) {
			width: 100%;
			flex-basis: 100%;
		}
	}
</style>

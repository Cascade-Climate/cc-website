<script>
	import foundations from '$lib/images/nature/crn-hero-3.png';
	import erwexplorer from '$lib/images/nature/model-acceleration-hero-2.png';
	import farm1 from '$lib/images/nature/farm1.webp';

	const streams = [
		{
			title: 'Coordinated Research Network',
			href: '/bedrock-initiative/CRN',
			image: foundations,
			alt: 'CRN',
			blurb:
				"A network of intensively measured field sites generating high-quality, truly comparable data across diverse soils, climates, and agricultural systems"
		},
		{
			title: 'Model Acceleration',
			href: '/bedrock-initiative/modeling',
			image: erwexplorer,
			alt: 'Modeling and intercomparison',
			blurb: 'Convening leading academic geochemical modelers to examine the soil-system impacts of ERW using multi-model ensembles'
		},
		{
			title: 'Studies at Scale',
			notation: 'Commencing 2027',
			href: '/bedrock-initiative/studies-at-scale',
			image: farm1,
			alt: 'Studies at Scale',
			blurb: 'Working alongside researchers and commercial actors to tackle challenges that no single project can address, from tracking carbon signals in rivers to running large-scale yield trials on working farms',
			hideLearnMore: true
		}
	];
</script>

<div class="grid">
	{#each streams as s}
		{#if s.hideLearnMore}
			<article class="card">
				<img src={s.image} alt={s.alt} />
				<h3 class="card-title">
					{s.title}
					{#if s.notation}
						<span class="card-notation">{s.notation}</span>
					{/if}
				</h3>
				<p>{s.blurb}</p>
			</article>
		{:else}
			<a class="card" href={s.href}>
				<img src={s.image} alt={s.alt} />
				<h3 class="card-title">
					{s.title}
					{#if s.notation}
						<span class="card-notation">{s.notation}</span>
					{/if}
				</h3>
				<p>{s.blurb}</p>
				<span class="fake-link">Learn more</span>
			</a>
		{/if}
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		text-decoration: none;
		color: inherit;
		border-radius: 1rem;
		overflow: hidden;
		background: color-mix(in srgb, var(--color-light) 92%, var(--color-dark) 8%);
		padding-bottom: 1rem;
		transition: transform 0.15s ease;
	}

	.card:hover {
		transform: translateY(-2px);
	}

	article.card:hover {
		transform: none;
	}

	.card img {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.card-title {
		margin: 0 1rem;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--color-dark);
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.4rem 0.55rem;
	}

	.card-notation {
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.03em;
		color: #0197a6;
		white-space: nowrap;
	}

	.card p {
		margin: 0 1rem;
		font-size: 0.95rem;
		line-height: 1.45;
		flex: 1;
	}

	.fake-link {
		margin: 0 1rem;
		color: var(--color-accent);
		font-weight: 500;
		font-size: 0.95rem;
	}
</style>

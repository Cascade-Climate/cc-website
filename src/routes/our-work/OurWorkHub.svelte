<script>
	import OurWorkHomeSpotlights from '$lib/components/OurWorkHomeSpotlights.svelte';
	import BlogSpotlightSection from '$lib/components/BlogSpotlightSection.svelte';
	import {
		ourWorkHubPillarPrograms,
		ourWorkHubSupportingProgram
	} from '$lib/data/ourWorkHubPrograms.js';

	const mdp = ourWorkHubSupportingProgram;
</script>

<svelte:head>
	<title>Our Work - Cascade Climate</title>
	<meta
		name="description"
		content="Propelling high-potential climate solutions from the margins to the mainstream."
	/>
</svelte:head>

<div class="hub">
	<section class="preamble">
		<h1>Our Work</h1>
		<p>
			Cascade is a philanthropy-backed nonprofit helping mobilize a more comprehensive response to the climate crisis
			by advancing high-potential solutions that remain on the margins of mainstream climate action. We do this by
			leading ambitious initiatives spanning markets, policy and science to overcome the biggest bottlenecks to
			progress.
		</p>
	</section>

	<section class="programs" aria-labelledby="programs-heading">
		<h2 id="programs-heading" class="section-heading">Program areas</h2>
		<div class="pillar-grid">
			{#each ourWorkHubPillarPrograms as p (p.href)}
				<article class="program-card">
					<img src={p.image} alt={p.imageAlt} />
					<h3>{p.title}</h3>
					<p>{p.teaser}</p>
					<a class="cta" href={p.href}>Explore program</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="supporting" aria-labelledby="mdp-title">
		<p class="eyebrow">{mdp.eyebrow}</p>
		<h2 id="mdp-title" class="supporting-title">{mdp.title}</h2>
		<div class="supporting-layout">
			<img class="supporting-img" src={mdp.image} alt={mdp.imageAlt} />
			<div class="supporting-copy">
				<p class="supporting-teaser">{mdp.teaser}</p>
				<a class="cta" href={mdp.href}>Learn more</a>
			</div>
		</div>
	</section>

	<section class="spotlights-wrap">
		<OurWorkHomeSpotlights />
		<BlogSpotlightSection />
	</section>
</div>

<style>
	.hub {
		font-size: 1rem;
		padding-bottom: 4rem;
	}

	.preamble {
		padding: 1rem 4rem 2rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
	}

	.programs {
		padding: 2rem 4rem 1.5rem;
	}

	.section-heading {
		font-weight: 500;
		font-size: 1.1rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-dark);
		margin: 0 0 1.25rem;
	}

	.pillar-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		align-items: stretch;
	}

	.program-card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		border-radius: 1rem;
		padding: 0;
	}

	.program-card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.program-card h3 {
		font-weight: 500;
		font-size: 1.35rem;
		margin: 0.25rem 0 0;
		color: var(--color-dark);
	}

	.cta {
		margin-top: auto;
		align-self: flex-start;
		border-radius: 2rem;
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.5rem 1.25rem;
		text-decoration: none;
		font-size: 0.95rem;
	}

	.supporting {
		margin: 0 4rem 2rem;
		padding: 1.75rem 2rem;
		border-radius: 1rem;
		background: color-mix(in srgb, var(--color-dark) 7%, var(--color-light) 93%);
		border: 1px solid color-mix(in srgb, var(--color-dark) 10%, transparent);
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.72rem;
		margin: 0 0 0.35rem;
		color: var(--color-accent);
		font-weight: 600;
	}

	.supporting-title {
		font-weight: 500;
		font-size: 1.35rem;
		margin: 0 0 1rem;
		color: var(--color-dark);
	}

	.supporting-layout {
		display: grid;
		grid-template-columns: minmax(0, 220px) 1fr;
		gap: 1.5rem;
		align-items: start;
	}

	.supporting-img {
		width: 100%;
		height: 160px;
		object-fit: cover;
		border-radius: 0.75rem;
	}

	.supporting-copy {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.supporting-teaser {
		margin: 0;
		line-height: 1.5;
	}

	.spotlights-wrap {
		padding: 0 4rem;
	}

	@media (max-width: 720px) {
		.pillar-grid {
			grid-template-columns: 1fr;
		}

		.supporting-layout {
			grid-template-columns: 1fr;
		}

		.supporting-img {
			max-height: 200px;
		}
	}

	@media (max-width: 660px) {
		.preamble,
		.programs,
		.supporting,
		.spotlights-wrap {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.supporting {
			margin-left: 2rem;
			margin-right: 2rem;
		}
	}
</style>

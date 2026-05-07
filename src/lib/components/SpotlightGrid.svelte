<script>
	/** @type {string} */
	export let sectionTitle = 'OUR WORK';
	/** @type {string} */
	export let sectionHref = '/our-work';
	/**
	 * @type {{ image: string; imageAlt: string; title: string; excerpt: string; href: string; linkTarget?: string }[]}
	 */
	export let items = [];
</script>

<section class="spotlight-section">
	<h3>
		SPOTLIGHT ON <a href={sectionHref}> {sectionTitle} ↗</a>
	</h3>
	<div class="spotlights">
		{#each items as card}
			<div class="spotlight">
				<img src={card.image} alt={card.imageAlt} />
				<h2>{card.title}</h2>
				<p>{card.excerpt}</p>
				<a href={card.href} target={card.linkTarget ?? '_self'} rel={card.linkTarget === '_blank' ? 'noopener noreferrer' : undefined}>Learn More</a>
			</div>
		{/each}
	</div>
</section>

<style>
	.spotlight-section {
		margin-top: 2.5rem;
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

	.spotlights {
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.spotlight {
		width: 23%;
		min-width: 200px;
		flex: 1 1 200px;
		display: flex;
		flex-direction: column;
	}

	.spotlight img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.spotlight h2 {
		font-weight: 300;
		margin: 1rem 0;
		font-size: 1.15rem;
		line-height: 1.35;
	}

	.spotlight a {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		margin-top: auto;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		text-align: center;
		text-decoration: none;
	}

	@media (max-width: 660px) {
		.spotlights {
			flex-direction: column;
		}

		.spotlight {
			width: 100%;
		}
	}
</style>

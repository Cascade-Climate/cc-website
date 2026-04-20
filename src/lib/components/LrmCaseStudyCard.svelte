<script>
	/** @type {string} */
	export let title = '';
	/** @type {string} */
	export let body = '';
	/** @type {string} */
	export let imageSrc = '';
	/** @type {string} */
	export let imageAlt = '';
	/** Optional line under the title (e.g. thesis for this case study). */
	/** @type {string} */
	export let subheader = '';

	$: showImage = typeof imageSrc === 'string' && imageSrc.trim().length > 0;
	$: showSubheader = typeof subheader === 'string' && subheader.trim().length > 0;
	$: bodyParagraphs =
		typeof body === 'string'
			? body
					.split(/\n\s*\n/)
					.map((s) => s.trim())
					.filter(Boolean)
			: [];
</script>

<article class="lrm-case-card">
	<div class="lrm-case-card__media">
		{#if showImage}
			<img src={imageSrc} alt={imageAlt || ''} loading="lazy" decoding="async" />
		{:else}
			<div class="lrm-case-card__photo-placeholder" role="img" aria-label="Image placeholder">
				<span class="lrm-case-card__photo-placeholder-label">Photo placeholder</span>
				<span class="lrm-case-card__photo-placeholder-hint">Set <code>imageSrc</code> in <code>lrm-financing-case-studies.js</code></span>
			</div>
		{/if}
	</div>
	<div class="lrm-case-card__body">
		<h3 class="lrm-case-card__title">{title}</h3>
		{#if showSubheader}
			<p class="lrm-case-card__subheader">{subheader.trim()}</p>
		{/if}
		<div class="lrm-case-card__copy">
			{#each bodyParagraphs as para}
				<p class="lrm-case-card__text">{para}</p>
			{/each}
		</div>
	</div>
</article>

<style>
	/* Mint shell aligned with intro accent on this post (#e1fcf7) */
	.lrm-case-card {
		--lrm-card-mint: #e1fcf7;
		--lrm-card-mint-deep: #c8f4ec;
		--lrm-card-border: rgba(24, 115, 115, 0.28);

		font-family: 'Inter', sans-serif;
		max-width: 960px;
		margin: 2rem auto 0;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid var(--lrm-card-border);
		box-shadow: 0 6px 20px rgba(23, 59, 63, 0.07);
		background: var(--lrm-card-mint);
	}

	.lrm-case-card__media {
		aspect-ratio: 16 / 9;
		background: var(--lrm-card-mint-deep);
	}

	.lrm-case-card__media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0;
	}

	.lrm-case-card__photo-placeholder {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		min-height: 8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		padding: 1rem 1.25rem;
		text-align: center;
		border: 2px dashed var(--lrm-card-border);
		border-radius: 0;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(225, 252, 247, 0.9) 100%);
	}

	.lrm-case-card__photo-placeholder-label {
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-dark, #173b3f);
		opacity: 0.85;
	}

	.lrm-case-card__photo-placeholder-hint {
		font-size: 0.8rem;
		line-height: 1.4;
		color: rgba(23, 59, 63, 0.75);
		max-width: 22rem;
	}

	.lrm-case-card__photo-placeholder-hint code {
		font-size: 0.78em;
		padding: 0.05em 0.3em;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.65);
		color: #0d4a4a;
	}

	.lrm-case-card__body {
		padding: 1.25rem 1.35rem 1.4rem;
		background: var(--lrm-card-mint);
		border-top: 1px solid var(--lrm-card-border);
	}

	.lrm-case-card__copy {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.lrm-case-card__title {
		margin: 0 0 0.65rem;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.35;
		color: var(--color-dark, #173b3f);
		letter-spacing: -0.02em;
	}

	.lrm-case-card__body:has(.lrm-case-card__subheader) .lrm-case-card__title {
		margin-bottom: 0.35rem;
	}

	.lrm-case-card__subheader {
		margin: 0 0 0.85rem;
		font-size: 1.02rem;
		font-weight: 500;
		line-height: 1.45;
		color: var(--color-accent, #187373);
		letter-spacing: -0.01em;
	}

	.lrm-case-card__text {
		margin: 0;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.55;
		color: rgba(23, 59, 63, 0.92);
	}
</style>

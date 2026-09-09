<script>
	import { onMount } from 'svelte';
	import { intro } from '$lib/lrm/explorerContent.js';

	/** @type {() => void} */
	export let onGotoTool = () => {};
	const steps = intro.steps;

	let storyStep = 1;
	let narrow = false;

	$: step = steps[storyStep - 1];
	$: camera = narrow ? step.camera.mobile : step.camera.desktop;
	$: sceneStyle = `transform: scale(${camera.scale}) translate(${camera.x}%, ${camera.y}%)`;

	function goTo(next) {
		if (next < 1 || next > 3) return;
		storyStep = next;
	}

	function forward() {
		if (storyStep === 3) {
			onGotoTool();
			return;
		}
		goTo(storyStep + 1);
	}

	function back() {
		if (storyStep > 1) goTo(storyStep - 1);
	}

	onMount(() => {
		const mq = window.matchMedia('(max-width: 720px)');
		const apply = () => {
			narrow = mq.matches;
		};
		apply();
		mq.addEventListener('change', apply);
		return () => mq.removeEventListener('change', apply);
	});
</script>

<article class="intro-story">
	<h2>{intro.headline}</h2>
	<p class="lede">{intro.lede}</p>
	<p class="explore-cue">{intro.exploreCue} ↓</p>

	<div class="scene-block" id="lifecycle-scene">
		<div class="viewport" role="group" aria-label="Lifecycle scene">
			<img
				class="scene"
				src={intro.image.src}
				alt={intro.image.alt}
				draggable="false"
				style={sceneStyle}
			/>

			{#if step.financeOverlay}
				<div class="finance-overlay" aria-hidden="true">
					<div class="ann-tech">
						<span>Technician incentives</span>
						<i></i>
					</div>
					<div class="stage-rule">
						<span>Recovery</span>
						<span class="dash"></span>
						<span>Transport</span>
						<span class="dash"></span>
						<span>Processing</span>
					</div>
					<div class="span epr"><span>EPR / public support</span></div>
					<div class="span concessional"><span>Concessional capital</span></div>
					<div class="span carbon"><span>Carbon finance</span></div>
				</div>
			{/if}

			<div class="regions">
				{#if storyStep === 1}
					<button
						type="button"
						class="region next"
						aria-label={step.nextRegionLabel}
						on:click={forward}
					></button>
				{:else if storyStep === 2}
					<button
						type="button"
						class="region prev"
						aria-label={step.prevRegionLabel}
						on:click={back}
					></button>
					<button
						type="button"
						class="region next"
						aria-label={step.nextRegionLabel}
						on:click={forward}
					></button>
				{:else}
					<button
						type="button"
						class="region prev wide"
						aria-label={step.prevRegionLabel}
						on:click={back}
					></button>
				{/if}
			</div>
		</div>
	</div>

	<div class="narrative">
		<div class="progress" aria-hidden="true">
			{#each [1, 2, 3] as n}
				<span class="dot" class:on={storyStep >= n}></span>
				{#if n < 3}<span class="rail"></span>{/if}
			{/each}
		</div>

		<p class="num">{step.number}</p>
		<h3 aria-live="polite">{step.title}</h3>
		<p class="copy">{step.copy}</p>

		{#if narrow && step.financeOverlay}
			<ul class="mobile-finance">
				<li>Technician incentives sit on recovery.</li>
				<li>EPR / public support can span recovery through processing.</li>
				<li>Concessional capital and carbon finance sit later, across processing and facilities.</li>
			</ul>
		{/if}

		<div class="controls">
			{#if step.prevLabel}
				<button type="button" class="nav-text back" on:click={back}>
					← {step.prevLabel}
				</button>
			{:else}
				<span class="nav-spacer"></span>
			{/if}
			<button type="button" class="nav-text next" on:click={forward}>
				{step.nextLabel} →
			</button>
		</div>
	</div>
</article>

<style>
	.intro-story {
		color: var(--ink);
	}

	h2 {
		font-family: var(--font);
		font-size: clamp(1.65rem, 3.4vw, 2.35rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		line-height: 1.18;
		margin: 0 0 0.7rem;
		color: var(--header);
		max-width: 22ch;
	}

	.lede {
		max-width: 40rem;
		margin: 0 0 0.85rem;
		font-size: 1.02rem;
		line-height: 1.5;
		color: var(--header);
		opacity: 0.9;
	}

	.explore-cue {
		margin: 0 0 1rem;
		font-size: 0.88rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--accent);
	}

	.viewport {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: min(52vh, 28rem);
		background: #012426;
	}

	.scene {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 55%;
		transform-origin: 50% 50%;
		transition: transform 0.65s ease;
		user-select: none;
		pointer-events: none;
	}

	.regions {
		position: absolute;
		inset: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.region {
		appearance: none;
		border: 0;
		padding: 0;
		margin: 0;
		background: transparent;
		cursor: pointer;
		min-height: 44px;
	}

	.region.next {
		grid-column: 2;
	}

	.region.prev {
		grid-column: 1;
	}

	.region.wide {
		grid-column: 1 / 2;
	}

	.region:hover {
		background: rgba(225, 252, 247, 0.05);
	}

	.region:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: -3px;
		background: rgba(225, 252, 247, 0.08);
	}

	.finance-overlay {
		position: absolute;
		left: 4%;
		right: 4%;
		bottom: 7%;
		z-index: 1;
		pointer-events: none;
		color: var(--header);
		text-shadow: 0 1px 2px rgba(1, 24, 26, 0.55);
	}

	.ann-tech {
		position: absolute;
		left: 2%;
		bottom: 5.6rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		font-weight: 600;
		color: var(--accent);
	}

	.ann-tech i {
		display: block;
		width: 1px;
		height: 1.15rem;
		margin-left: 0.7rem;
		background: var(--accent);
		opacity: 0.8;
	}

	.stage-rule {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--header);
		opacity: 0.85;
	}

	.stage-rule .dash {
		flex: 1;
		height: 1px;
		background: rgba(225, 252, 247, 0.45);
	}

	.span {
		margin-top: 0.45rem;
		font-size: 0.72rem;
		font-weight: 500;
		color: var(--accent);
		letter-spacing: 0.02em;
		border-top: 1px solid rgba(127, 214, 197, 0.55);
		padding-top: 0.2rem;
	}

	.span.epr {
		width: 78%;
	}

	.span.concessional {
		width: 58%;
		margin-left: 22%;
	}

	.span.carbon {
		width: 32%;
		margin-left: 58%;
	}

	.narrative {
		padding: 1.15rem 0 0.4rem;
		max-width: 40rem;
	}

	.progress {
		display: flex;
		align-items: center;
		gap: 0;
		margin: 0 0 0.85rem;
	}

	.dot {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		border: 1px solid var(--accent);
		background: transparent;
		display: inline-block;
	}

	.dot.on {
		background: var(--accent);
	}

	.rail {
		width: 1.35rem;
		height: 1px;
		background: rgba(127, 214, 197, 0.55);
		margin: 0 0.2rem;
	}

	.num {
		margin: 0 0 0.2rem;
		font-size: 0.78rem;
		letter-spacing: 0.14em;
		font-weight: 600;
		color: var(--accent);
	}

	h3 {
		font-family: var(--font);
		font-size: 1.28rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
		color: var(--header);
		line-height: 1.25;
	}

	.copy {
		margin: 0;
		color: var(--ink-soft);
		font-size: 1rem;
		line-height: 1.55;
	}

	.mobile-finance {
		margin: 0.9rem 0 0;
		padding: 0;
		list-style: none;
		color: var(--ink-soft);
		font-size: 0.9rem;
		line-height: 1.45;
	}

	.mobile-finance li + li {
		margin-top: 0.25rem;
	}

	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		margin-top: 1.25rem;
	}

	.nav-spacer {
		flex: 1;
	}

	.nav-text {
		appearance: none;
		border: 0;
		background: none;
		padding: 0.55rem 0;
		min-height: 44px;
		font: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--header);
		cursor: pointer;
	}

	.nav-text.next {
		color: var(--accent);
		margin-left: auto;
	}

	.nav-text:hover {
		text-decoration: underline;
	}

	@media (max-width: 720px) {
		h2 {
			max-width: none;
			font-size: 1.55rem;
		}

		.viewport {
			height: min(46vh, 20rem);
		}

		.finance-overlay {
			display: none;
		}

		.narrative {
			max-width: none;
		}

		.controls {
			gap: 0.75rem;
		}

		.nav-text {
			font-size: 0.9rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scene {
			transition: none;
		}
	}
</style>

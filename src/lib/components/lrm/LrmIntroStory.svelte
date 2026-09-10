<script>
	import { onMount } from 'svelte';
	import { intro } from '$lib/lrm/explorerContent.js';

	const depth = intro.depth;

	let reduceMotion = false;
	let overlayProgress = 0;
	let contentOverflow = 0;
	/** @type {'relative' | 'fixed' | 'absolute'} */
	let stagePin = 'relative';
	/** @type {HTMLElement | null} */
	let trackEl = null;
	/** @type {HTMLElement | null} */
	let panelEl = null;
	/** @type {HTMLElement | null} */
	let innerEl = null;

	$: boxEmerge = Math.min(1, overlayProgress / 0.42);
	$: readProgress = overlayProgress <= 0.42 ? 0 : (overlayProgress - 0.42) / 0.58;
	$: innerShift = readProgress * contentOverflow;
	$: imageOpacity = 1 - boxEmerge * 0.22;
	$: overlayActive = boxEmerge > 0.18;
	$: frontOpacity = 1 - Math.min(1, boxEmerge * 1.2);
	$: pinStyle = stagePin === 'fixed' ? 'left: 0; width: 100vw' : '';

	function updateProgress() {
		if (reduceMotion || !trackEl) {
			overlayProgress = 0;
			stagePin = 'relative';
			return;
		}
		const rect = trackEl.getBoundingClientRect();
		const vh = window.innerHeight;
		const range = Math.max(1, trackEl.offsetHeight - vh);
		overlayProgress = Math.min(1, Math.max(0, -rect.top / range));
		if (panelEl && innerEl) {
			contentOverflow = Math.max(0, innerEl.scrollHeight - panelEl.clientHeight);
		}
		if (rect.top > 0) {
			stagePin = 'relative';
		} else if (rect.bottom < vh - 2) {
			stagePin = 'absolute';
		} else {
			stagePin = 'fixed';
		}
	}

	onMount(() => {
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const applyMotion = () => {
			reduceMotion = motion.matches;
			updateProgress();
		};
		applyMotion();
		motion.addEventListener('change', applyMotion);
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);
		updateProgress();
		return () => {
			motion.removeEventListener('change', applyMotion);
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	});
</script>

<article class="intro-story" class:is-static={reduceMotion}>
	<div class="depth-track" bind:this={trackEl} class:is-pinned={stagePin === 'fixed'}>
		<div
			class="depth-stage"
			class:is-fixed={stagePin === 'fixed'}
			class:is-end={stagePin === 'absolute'}
			style={pinStyle}
		>
			<div class="viewport" role="group" aria-label="Lifecycle scene" id="lifecycle-scene">
				<img
					class="scene"
					src={intro.image.src}
					alt={intro.image.alt}
					draggable="false"
					style="opacity: {imageOpacity}"
				/>
				<div class="tint" aria-hidden="true"></div>
				<div class="scrim" aria-hidden="true"></div>
			</div>

			<div class="front" style="opacity: {frontOpacity}">
				<div class="front-top">
					<p class="headline-kicker">{intro.headlineKicker}</p>
					<h2>{intro.headline}</h2>
					{#each intro.lede as para}
						<p class="lede">{para}</p>
					{/each}
					<button type="button" class="report-btn">{intro.reportCta}</button>
				</div>
				<div class="front-cues">
					<p class="explore-cue">{intro.exploreCue}</p>
					<p class="click-cue">{intro.clickCue} ↓</p>
				</div>
			</div>

			{#if !reduceMotion}
				<aside
					class="depth-panel"
					class:active={overlayActive}
					bind:this={panelEl}
					style="--p: {boxEmerge}"
					aria-hidden={!overlayActive}
				>
					<div
						class="depth-inner"
						bind:this={innerEl}
						style="transform: translateY({-innerShift}px)"
					>
						<p class="depth-kicker">{depth.kicker}</p>
						<h3 class="depth-heading">{depth.heading}</h3>
						<p class="depth-lede">{depth.lede}</p>
						{#each depth.sections as section}
							<section class="depth-section">
								<h4>{section.title}</h4>
								{#each section.paragraphs as para}
									<p>{para}</p>
								{/each}
							</section>
						{/each}
					</div>
				</aside>
			{/if}
		</div>
	</div>

	{#if reduceMotion}
		<aside class="depth-panel static-panel">
			<div class="depth-inner">
				<p class="depth-kicker">{depth.kicker}</p>
				<h3 class="depth-heading">{depth.heading}</h3>
				<p class="depth-lede">{depth.lede}</p>
				{#each depth.sections as section}
					<section class="depth-section">
						<h4>{section.title}</h4>
						{#each section.paragraphs as para}
							<p>{para}</p>
						{/each}
					</section>
				{/each}
			</div>
		</aside>
	{/if}
</article>

<style>
	.intro-story {
		color: #e8fbf7;
		font-weight: 500;
	}

	.intro-story :global(p),
	.intro-story :global(div) {
		line-height: 1.55;
	}

	:global(html),
	:global(body) {
		overflow-x: clip;
	}

	:global(html) {
		scroll-behavior: auto;
	}

	.depth-track {
		position: relative;
		height: 280vh;
	}

	.depth-stage {
		position: relative;
		height: calc(100dvh - 6.5rem);
		overflow: hidden;
		background: #023c40;
	}

	.depth-stage.is-fixed {
		position: fixed;
		top: 0;
		z-index: 4;
		height: calc(100dvh - 6.5rem);
	}

	.depth-stage.is-end {
		position: absolute;
		top: auto;
		bottom: 0;
		left: 0;
		right: 0;
		height: calc(100dvh - 6.5rem);
	}

	:global(body:has(.dev-preview-hint)) .depth-stage,
	:global(body:has(.dev-preview-hint)) .depth-stage.is-fixed,
	:global(body:has(.dev-preview-hint)) .depth-stage.is-end {
		height: calc(100dvh - 8.5rem);
	}

	.viewport {
		position: absolute;
		inset: 0;
		z-index: 0;
		overflow: hidden;
		width: 100%;
		background: #023c40;
		isolation: isolate;
	}

	.scene {
		display: block;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 55%;
		user-select: none;
		pointer-events: none;
	}

	.tint {
		position: absolute;
		inset: -1px;
		background: #023c40;
		mix-blend-mode: multiply;
		opacity: 0.62;
		pointer-events: none;
	}

	.scrim {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(90deg, rgba(2, 60, 64, 0.72) 0%, rgba(2, 60, 64, 0.32) 38%, rgba(2, 60, 64, 0.08) 72%, rgba(2, 60, 64, 0.22) 100%),
			linear-gradient(180deg, rgba(2, 60, 64, 0.42) 0%, rgba(2, 60, 64, 0.08) 22%, rgba(2, 60, 64, 0.1) 68%, rgba(2, 60, 64, 0.78) 100%);
		pointer-events: none;
	}

	.front {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		padding: 4.35rem max(1rem, calc((100% - 1120px) / 2)) 1.65rem;
		pointer-events: none;
	}

	.front-top {
		pointer-events: none;
		max-width: 42rem;
	}

	.front-cues {
		align-self: center;
		width: min(36rem, 100%);
		margin-top: auto;
		text-align: center;
	}

	.headline-kicker {
		margin: 0 0 0.4rem;
		font-size: 0.82rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		color: #b8f3e6;
		text-shadow: 0 1px 2px rgba(1, 12, 14, 0.75);
	}

	h2 {
		font-family: var(--font);
		font-size: clamp(1.7rem, 3.4vw, 2.4rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		line-height: 1.18;
		margin: 0 0 0.75rem;
		color: #f4fffc;
		max-width: 18ch;
		text-shadow: 0 1px 2px rgba(1, 12, 14, 0.7), 0 8px 28px rgba(1, 12, 14, 0.45);
	}

	.lede {
		max-width: 40rem;
		margin: 0 0 0.75rem;
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.5;
		color: #f4fffc;
		text-shadow: 0 1px 2px rgba(1, 12, 14, 0.75), 0 6px 20px rgba(1, 12, 14, 0.4);
	}

	.report-btn {
		position: relative;
		z-index: 5;
		display: inline-flex;
		align-items: center;
		appearance: none;
		margin: 0 0 0.85rem;
		padding: 0.5rem 0.95rem;
		min-height: 44px;
		border: 1px solid rgba(225, 252, 247, 0.55);
		border-radius: var(--radius);
		background: rgba(1, 22, 24, 0.55);
		color: #f4fffc;
		font: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		pointer-events: auto;
		text-shadow: none;
	}

	.report-btn:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
	}

	.explore-cue {
		margin: 0 0 0.45rem;
		font-size: clamp(1.35rem, 2.6vw, 1.85rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: 1.25;
		color: #f4fffc;
		text-shadow: 0 1px 2px rgba(1, 12, 14, 0.75), 0 8px 24px rgba(1, 12, 14, 0.45);
	}

	.click-cue {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: #e8fbf7;
		text-shadow: 0 1px 2px rgba(1, 12, 14, 0.75);
	}

	.depth-panel {
		position: absolute;
		inset: 4.15rem 0.85rem 0.85rem;
		z-index: 6;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 1.65rem 1.45rem 1.5rem;
		background: rgba(2, 60, 64, calc(0.55 + var(--p) * 0.38));
		opacity: var(--p);
		transform: translateY(calc((1 - var(--p)) * 3.5rem));
		pointer-events: none;
		border: 1px solid rgba(225, 252, 247, calc(var(--p) * 0.22));
		box-shadow: 0 18px 48px rgba(1, 12, 14, calc(var(--p) * 0.45));
		-webkit-mask-image: linear-gradient(180deg, #000 0, #000 calc(100% - 1.15rem), transparent 100%);
		mask-image: linear-gradient(180deg, #000 0, #000 calc(100% - 1.15rem), transparent 100%);
	}

	.depth-panel.active {
		pointer-events: none;
	}

	.depth-inner {
		width: min(42rem, 100%);
		margin: 0 auto 0 0;
		padding-bottom: 1.5rem;
		will-change: transform;
	}

	.depth-kicker {
		margin: 0 0 0.45rem;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-weight: 700;
		color: #b8f3e6;
	}

	.depth-heading {
		font-family: var(--font);
		font-size: clamp(1.5rem, 3vw, 1.95rem);
		font-weight: 600;
		letter-spacing: -0.03em;
		line-height: 1.2;
		margin: 0 0 0.75rem;
		color: #f4fffc;
	}

	.depth-lede {
		margin: 0 0 1.5rem;
		max-width: 40rem;
		font-size: 1.08rem;
		font-weight: 500;
		line-height: 1.55;
		color: #f4fffc;
	}

	.depth-section + .depth-section {
		margin-top: 1.45rem;
		padding-top: 1.35rem;
		border-top: 1px solid var(--line);
	}

	.depth-section h4 {
		margin: 0 0 0.55rem;
		font-size: 1.12rem;
		font-weight: 600;
		color: #f4fffc;
	}

	.depth-section p {
		margin: 0;
		color: #e8fbf7;
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.6;
	}

	.depth-section p + p {
		margin-top: 0.8rem;
	}

	.static-panel {
		position: relative;
		inset: auto;
		z-index: 1;
		margin-top: 1.5rem;
		height: auto;
		opacity: 1;
		transform: none;
		pointer-events: auto;
		overflow: visible;
		background: rgba(2, 60, 64, 0.92);
		border: 1px solid var(--line);
		box-shadow: none;
		-webkit-mask-image: none;
		mask-image: none;
	}

	.is-static .depth-track {
		height: auto;
	}

	.is-static .depth-stage {
		position: relative;
		height: auto;
		min-height: 0;
		overflow: visible;
	}

	.is-static .depth-stage,
	:global(body:has(.dev-preview-hint)) .is-static .depth-stage {
		height: auto;
	}

	.is-static .viewport {
		position: absolute;
		height: 100%;
	}

	.is-static .front {
		height: auto;
		padding-bottom: 1.5rem;
	}

	.is-static .front-cues {
		margin-top: 2.5rem;
	}

	@media (max-width: 720px) {
		h2 {
			max-width: none;
			font-size: 1.45rem;
		}

		.lede {
			font-size: 0.95rem;
		}

		.front {
			padding: 4.1rem 1rem 1.25rem;
		}

		.explore-cue {
			font-size: 1.22rem;
		}

		.depth-panel {
			padding: 1.15rem 0.95rem 1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.depth-panel {
			transform: none;
		}
	}
</style>

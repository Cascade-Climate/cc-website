<script>
	import { onDestroy, tick } from 'svelte';

	/** @type {Array<{ id: string, title: string, kicker?: string, paragraphs: string[], photo?: string, photoAlt?: string, kind?: string }>} */
	export let spots = [];
	/** @type {string} */
	export let heading = '';
	/** @type {string} */
	export let intro = '';
	/** @type {string} */
	export let variant = 'takeaways';
	/** @type {string} */
	export let headingId = 'explore-heading';

	let openIndex = -1;
	let dialogEl;
	let closeBtnEl;
	/** @type {HTMLElement | null} */
	let lastTrigger = null;
	let previouslyFocused = null;

	$: open = openIndex >= 0;
	$: current = open ? spots[openIndex] : null;
	$: spotCount = spots.length;
	$: stepLabel = open ? `${openIndex + 1} of ${spotCount}` : '';
	$: isCircle = variant === 'takeaways';
	$: isStack = variant === 'costStack';

	function startsEnablerGroup(i) {
		return spots[i]?.group === 'enabler' && spots[i - 1]?.group !== 'enabler';
	}

	function openAt(index, event) {
		if (index < 0 || index >= spots.length) return;
		lastTrigger = event?.currentTarget instanceof HTMLElement ? event.currentTarget : null;
		previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		openIndex = index;
		document.body.style.overflow = 'hidden';
		tick().then(() => {
			closeBtnEl?.focus();
		});
	}

	function close() {
		openIndex = -1;
		document.body.style.overflow = '';
		tick().then(() => {
			(lastTrigger || previouslyFocused)?.focus?.();
			lastTrigger = null;
			previouslyFocused = null;
		});
	}

	function go(delta) {
		if (!spotCount) return;
		openIndex = (openIndex + delta + spotCount) % spotCount;
		tick().then(() => {
			dialogEl?.querySelector('.modal-title')?.focus();
		});
	}

	function jumpTo(index) {
		openIndex = index;
	}

	function onDialogKeydown(event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			close();
			return;
		}
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			go(-1);
			return;
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			go(1);
			return;
		}
		if (event.key !== 'Tab' || !dialogEl) return;
		const focusable = [
			...dialogEl.querySelectorAll(
				'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		].filter((el) => el instanceof HTMLElement && el.offsetParent !== null);
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	function onBackdropClick(event) {
		if (event.target === event.currentTarget) close();
	}

	onDestroy(() => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = '';
	});
</script>

<svelte:window
	on:keydown={(e) => {
		if (open) onDialogKeydown(e);
	}}
/>

<section
	class="explore"
	class:is-circle={isCircle}
	class:is-stack={isStack}
	aria-labelledby={headingId}
	style="--n: {spotCount}"
>
	<h2 id={headingId}>{heading}</h2>
	<p class="explore-intro">{intro}</p>
	<p class="placeholder-note">Placeholder photographs · dummy copy</p>

	<div class="layout">
		{#if isCircle}
			<svg class="ring-guide" viewBox="0 0 100 100" aria-hidden="true">
				<circle cx="50" cy="50" r="36" fill="none" />
			</svg>
		{/if}

		{#each spots as spot, i}
			{#if isStack && startsEnablerGroup(i)}
				<p class="path-group">Equipment and facilities enable these activities</p>
			{/if}
			<article class="stop" id="lrm-stop-{spot.id}" style="--i: {i}">
				<button type="button" class="stop-btn" on:click={(e) => openAt(i, e)}>
					{#if isStack}
						<span class="stop-meta">
							<span class="hotspot-num">{i + 1}</span>
							<span class="stop-label">{spot.kicker || spot.title}</span>
							<span class="stop-hint">Read more</span>
						</span>
						<img src={spot.photo} alt={spot.photoAlt || ''} />
					{:else}
						<img src={spot.photo} alt={spot.photoAlt || ''} />
						<span class="stop-meta">
							<span class="hotspot-num">{i + 1}</span>
							<span class="stop-label">{spot.kicker || spot.title}</span>
							<span class="stop-hint">Read more</span>
						</span>
					{/if}
				</button>
			</article>
		{/each}
	</div>
</section>

{#if open && current}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="backdrop" on:click={onBackdropClick} role="presentation">
		<div
			class="dialog"
			class:half-page={isStack}
			bind:this={dialogEl}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title-{current.id}"
			tabindex="-1"
		>
			<button type="button" class="close" bind:this={closeBtnEl} on:click={close} aria-label="Close">
				×
			</button>

			<div class="dialog-grid">
				<nav class="jump" aria-label="Jump to a region">
					<p class="jump-label">Jump to</p>
					{#each spots as spot, i}
						<button
							type="button"
							class="jump-btn"
							class:active={i === openIndex}
							on:click={() => jumpTo(i)}
						>
							<span class="jump-num">{i + 1}</span>
							{spot.kicker || spot.title}
						</button>
					{/each}
				</nav>

				<div class="dialog-body">
					<p class="step">{stepLabel}</p>
					<h3 class="modal-title" id="modal-title-{current.id}" tabindex="-1">
						{current.title}
					</h3>
					{#each current.paragraphs as para}
						<p>{para}</p>
					{/each}

					<div class="dialog-nav">
						<button type="button" class="nav-btn" on:click={() => go(-1)}>Previous</button>
						<button type="button" class="nav-btn primary" on:click={() => go(1)}>Next</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.explore {
		color: var(--ink);
	}

	.explore h2 {
		font-family: var(--font);
		font-size: 1.45rem;
		font-weight: 600;
		margin: 0 0 0.35rem;
		color: var(--header);
		line-height: 1.25;
	}

	.explore-intro {
		color: var(--muted);
		font-size: 0.92rem;
		margin: 0 0 0.85rem;
		line-height: 1.45;
		max-width: 42rem;
	}

	.placeholder-note {
		margin: 0 0 0.35rem;
		font-size: 0.78rem;
		color: var(--muted);
	}

	.path-group {
		position: relative;
		z-index: 6;
		margin: 0.35rem 0 0.15rem;
		padding: 0.85rem 0.25rem 0.35rem;
		text-align: center;
		font-size: 0.78rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--muted);
		background: transparent;
	}

	.stop-btn {
		display: block;
		width: 100%;
		padding: 0;
		margin: 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg);
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
		overflow: hidden;
	}

	.stop-btn:hover,
	.stop-btn:focus-visible {
		border-color: var(--accent);
		outline: none;
	}

	.stop-meta {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.7rem 0.85rem 0.75rem;
		position: relative;
		z-index: 5;
		background: var(--bg);
	}

	.stop-label {
		font-weight: 600;
		color: var(--header);
		flex: 1;
	}

	.stop-hint {
		font-size: 0.78rem;
		color: var(--accent);
		font-weight: 600;
	}

	.hotspot-num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.25rem;
		height: 1.25rem;
		padding: 0 0.28rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		background: rgba(2, 60, 64, 0.72);
		color: var(--accent);
		border-radius: 2px;
	}

	/* Takeaways: photographs on a ring */
	.is-circle .layout {
		position: relative;
		width: min(42rem, 100%);
		aspect-ratio: 1;
		margin: 1.25rem auto 5.5rem;
	}

	.is-circle .ring-guide {
		position: absolute;
		inset: 8%;
		width: 84%;
		height: 84%;
		pointer-events: none;
		color: var(--accent);
		opacity: 0.28;
	}

	.is-circle .ring-guide circle {
		stroke: currentColor;
		stroke-width: 0.4;
	}

	.is-circle .stop {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 10.25rem;
		margin: 0;
		padding: 0;
		transform:
			translate(-50%, -50%)
			rotate(calc(var(--i) * 360deg / var(--n) - 90deg))
			translate(min(14.25rem, 34vw))
			rotate(calc(-1 * (var(--i) * 360deg / var(--n) - 90deg)));
	}

	.is-circle .stop-btn {
		background: transparent;
		border-color: transparent;
	}

	.is-circle .stop-btn img {
		display: block;
		width: 8.5rem;
		height: 8.5rem;
		margin: 0 auto;
		object-fit: cover;
		border-radius: 50%;
		border: 1px solid var(--line);
	}

	.is-circle .stop-btn:hover img,
	.is-circle .stop-btn:focus-visible img {
		border-color: var(--accent);
	}

	.is-circle .stop-meta {
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.2rem 0.4rem;
		padding: 0.5rem 0.15rem 0;
		background: transparent;
		text-align: center;
	}

	.is-circle .stop-label {
		flex: 1 1 100%;
		font-size: 0.82rem;
	}

	.is-circle .stop-hint {
		flex: 1 1 100%;
		font-size: 0.72rem;
	}

	/* Cost stack: overlapping pile, label + Read more always visible */
	.is-stack .layout {
		isolation: isolate;
		max-width: 34rem;
		margin: 1.15rem auto 2rem;
	}

	.is-stack .stop {
		position: relative;
		width: 100%;
		margin: 0;
		padding: 0;
		scroll-margin-bottom: 5.5rem;
	}

	.is-stack .stop + .stop {
		margin-top: -10.75rem;
	}

	.is-stack .path-group + .stop {
		margin-top: 0.85rem;
	}

	.is-stack .stop-btn {
		overflow: visible;
		background: transparent;
		border-color: transparent;
	}

	.is-stack .stop-btn img {
		display: block;
		position: relative;
		z-index: 0;
		width: 100%;
		height: 14.5rem;
		object-fit: cover;
		border: 1px solid var(--line);
		border-radius: 0 0 var(--radius) var(--radius);
		box-shadow: 0 12px 28px rgba(0, 8, 10, 0.35);
	}

	.is-stack .stop-meta {
		z-index: 5;
		background: #023c40;
		border: 1px solid var(--line);
		border-bottom: 0;
		border-radius: var(--radius) var(--radius) 0 0;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 1400;
		background: rgba(1, 24, 26, 0.72);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
	}

	.dialog {
		position: relative;
		width: min(960px, 100%);
		max-height: min(86vh, 820px);
		overflow: auto;
		background: #023c40;
		color: var(--ink);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		padding: 1.35rem 1.35rem 1.5rem;
	}

	.dialog.half-page {
		height: 50vh;
		min-height: 50vh;
		max-height: 50vh;
		overflow-y: auto;
	}

	.close {
		position: absolute;
		top: 0.65rem;
		right: 0.7rem;
		width: 2.1rem;
		height: 2.1rem;
		border: 0;
		background: transparent;
		color: var(--header);
		font-size: 1.6rem;
		line-height: 1;
		cursor: pointer;
	}

	.close:hover,
	.close:focus-visible {
		color: var(--accent);
		outline: none;
	}

	.dialog-grid {
		display: grid;
		grid-template-columns: minmax(11rem, 0.34fr) minmax(0, 1fr);
		gap: 1.25rem 1.5rem;
		align-items: start;
	}

	.jump-label {
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--muted);
		margin: 0 0 0.5rem;
	}

	.jump {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding-top: 0.15rem;
	}

	.jump-btn {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		width: 100%;
		text-align: left;
		font: inherit;
		font-size: 0.82rem;
		font-weight: 500;
		line-height: 1.3;
		color: var(--ink-soft);
		background: transparent;
		border: 1px solid transparent;
		border-radius: 2px;
		padding: 0.4rem 0.45rem;
		cursor: pointer;
	}

	.jump-btn:hover,
	.jump-btn:focus-visible {
		color: var(--header);
		border-color: var(--line);
		outline: none;
	}

	.jump-btn.active {
		color: var(--header);
		background: rgba(127, 214, 197, 0.14);
		border-color: rgba(127, 214, 197, 0.4);
	}

	.jump-num {
		flex: 0 0 auto;
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--accent);
	}

	.dialog-body {
		min-width: 0;
		padding-right: 1.5rem;
	}

	.step {
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--accent);
		margin: 0 0 0.4rem;
	}

	.modal-title {
		font-family: var(--font);
		font-size: 1.45rem;
		font-weight: 600;
		color: var(--header);
		margin: 0 0 0.85rem;
		line-height: 1.25;
		outline: none;
	}

	.dialog-body p {
		color: var(--ink-soft);
		font-size: 0.98rem;
		line-height: 1.55;
		margin: 0 0 0.85rem;
	}

	.dialog-nav {
		display: flex;
		gap: 0.6rem;
		margin-top: 1.15rem;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
	}

	.nav-btn {
		font: inherit;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--header);
		background: transparent;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 0.5rem 0.9rem;
		cursor: pointer;
	}

	.nav-btn:hover,
	.nav-btn:focus-visible {
		border-color: var(--accent);
		outline: none;
	}

	.nav-btn.primary {
		background: rgba(127, 214, 197, 0.16);
		border-color: rgba(127, 214, 197, 0.45);
	}

	@media (max-width: 860px) {
		.is-circle .layout {
			width: min(22.5rem, 100%);
		}

		.is-circle .stop {
			width: 7.6rem;
			transform:
				translate(-50%, -50%)
				rotate(calc(var(--i) * 360deg / var(--n) - 90deg))
				translate(min(9.4rem, 38vw))
				rotate(calc(-1 * (var(--i) * 360deg / var(--n) - 90deg)));
		}

		.is-circle .stop-btn img {
			width: 6.4rem;
			height: 6.4rem;
		}

		.is-stack .stop + .stop {
			margin-top: -8.25rem;
		}

		.is-stack .stop-btn img {
			height: 11.25rem;
		}

		.dialog {
			max-height: 92vh;
			padding: 1.1rem 1rem 1.2rem;
		}

		.dialog-grid {
			grid-template-columns: 1fr;
		}

		.jump {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.35rem;
		}

		.jump-btn {
			width: auto;
			font-size: 0.78rem;
		}

		.dialog-body {
			padding-right: 0;
		}
	}
</style>

<script>
	/** Settled background once the transition completes. */
	export let bg = '#023c40';
	/** Outgoing section color at the top of the bleed. */
	export let from = bg;
	/** Incoming section color at the bottom of the bleed. */
	export let to = bg;
	/** Transition zone height in px (clamped on smaller screens). */
	export let depth = 180;
	/** Incoming overlap onto the previous section, in px. 0 disables overlap. */
	export let overlap = 56;
	/** Incoming bleed. First section should be false. */
	export let bleed = true;
	export let last = false;
	export let intro = false;
	/** 0–3 hairlines inside the transition zone. */
	export let rules = 1;
	/** Stacking order; later sections should sit above earlier ones. */
	export let z = 1;
	export let id = '';
	/** @type {string | undefined} */
	export let labelledby = undefined;
	export let className = '';

	$: style = [
		`--section-bg: ${bg}`,
		`--bleed-from: ${from}`,
		`--bleed-to: ${to}`,
		`--bleed-depth-set: ${depth}px`,
		`--bleed-overlap-set: ${bleed ? overlap : 0}px`,
		`--bleed-z: ${z}`
	].join('; ');
</script>

<section
	{id}
	class="lrm-section {className}"
	class:is-bleed={bleed}
	class:is-last={last}
	class:is-intro={intro}
	style={style}
	data-rules={bleed ? String(rules) : '0'}
	aria-labelledby={labelledby}
>
	<slot />
</section>

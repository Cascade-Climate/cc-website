<script>
	import { onMount } from 'svelte';

	/** Extra delay in ms. Use only to clarify hierarchy. */
	export let delay = 0;

	let el;
	let armed = false;
	let shown = false;
	let settled = false;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let settleTimer;

	onMount(() => {
		if (typeof window === 'undefined' || !el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			shown = true;
			settled = true;
			return;
		}

		const reveal = () => {
			shown = true;
			io.disconnect();
			clearTimeout(settleTimer);
			settleTimer = setTimeout(() => {
				settled = true;
			}, 700 + delay);
		};

		const io = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!entry) return;
				if (entry.isIntersecting) {
					reveal();
				} else if (!shown) {
					armed = true;
				}
			},
			{ threshold: 0, rootMargin: '140px 0px 0px 0px' }
		);
		io.observe(el);
		return () => {
			io.disconnect();
			clearTimeout(settleTimer);
		};
	});
</script>

<div
	bind:this={el}
	class="lrm-reveal"
	class:is-armed={armed}
	class:is-in={shown}
	class:is-settled={settled}
	style="--reveal-delay: {delay}ms"
>
	<slot />
</div>

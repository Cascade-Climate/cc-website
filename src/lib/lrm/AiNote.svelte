<script>
	/** @type {string} */
	export let text = '';
</script>

<aside class="ai-note">
	<div class="label">A Note on AI</div>
	<p>{text}</p>
</aside>

<style>
	.ai-note {
		margin: 0;
		max-width: 68ch;
	}

	.label {
		margin: 0 0 0.35rem;
		font-size: 0.82rem;
		font-weight: 500;
		line-height: 1.35;
		color: var(--deep-teal, var(--teal, #023c40));
	}

	p {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.55;
		font-weight: 400;
	}
</style>

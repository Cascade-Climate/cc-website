<script>
	/** @type {{ parts: { text?: string, href?: string, external?: boolean, bold?: boolean, note?: string }[] }} */
	export let parts = [];
</script>

{#each parts as part}{#if part.note}<sup><a href={"#fn-" + part.note}>{part.note}</a></sup>{:else if part.href}<a href={part.href} target={part.external ? '_blank' : null} rel={part.external ? 'noopener noreferrer' : null}>{part.text}</a>{:else if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}{/each}

<script>
	import OurWorkLegacy from './OurWorkLegacy.svelte';
	import OurWorkHub from './OurWorkHub.svelte';

	export let data;
</script>

{#if data.previewBedrockOurWork}
	<OurWorkHub />
{:else}
	<OurWorkLegacy />
{/if}

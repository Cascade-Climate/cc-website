<script>
	import { setContext } from 'svelte';
	import FormModal from '$lib/components/FormModal.svelte';

	let showModal = false;
	let modalLink = '';

	function openModal(link = '') {
		showModal = true;
		modalLink = link;
	}

	setContext('modal', {
		openModal
	});
</script>

<slot />

<FormModal bind:showModal {modalLink} />

<script>
	import { setContext, onMount } from 'svelte';
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

<style>
	:global(h1, h3, h4) {
		line-height: initial;
		margin-bottom: 0.5rem;
	}

	:global(h2) {
		line-height: initial;
		font-weight: 300;
		margin-bottom: 0.5rem;
	}

	:global(h5) {
		line-height: initial;
		text-transform: uppercase;
		color: #187373;
	}

	:global(.intro a, main a) {
		text-decoration: none;
		color: var(--color-accent);
		font-weight: 420;
	}

	:global(img) {
		max-width: 100%;
		margin: 1rem auto;
	}

	:global(h1) {
		font-weight: 300;
		margin-top: 2rem;
		font-size: 2rem;
	}

	:global(ul) {
		padding-left: 1.5rem;
	}

	:global(li) {
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(h2) {
		font-weight: 500;
		font-size: 1.5rem;
	}

	:global(h3) {
		font-weight: 400;
		font-size: 1.25rem;
	}

	:global(strong) {
		font-weight: 550;
	}

	:global(.intro p, main p) {
		margin-bottom: 0;
	}

	:global(ol) {
		margin: 0;
	}

	:global(.content) {
		display: flex;
		gap: 2rem;
	}

	:global(.content img) {
		display: block;
		width: 40%;
		object-fit: cover;
		margin: 2rem 0;
		border-radius: 1rem;
	}

	:global(.links) {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: 1rem 0;
		width: fit-content;
	}

	:global(.links a) {
		border-radius: 2rem;
		padding: 0.4rem 1.2rem;
		text-align: center;
		text-decoration: none;
		color: var(--color-dark);
		background-color: var(--color-light);
		font-size: 1.2rem;
	}

	:global(.intro) {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	:global(main) {
		padding: 1rem 4rem;
		padding-bottom: 6rem;
		margin-left: 7rem;
		margin-right: 7rem;
	}

	:global(main section) {
		margin-top: -6rem;
		padding-top: 6rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -5rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(main section:last-child) {
		border-bottom: none;
	}

	@media (max-width: 960px) {
		:global(.content) {
			flex-direction: column;
			gap: 1rem;
		}

		:global(.content img) {
			width: 100%;
			margin: 0;
		}

		:global(main) {
			margin-left: 5rem;
			margin-right: 5rem;
		}
	}

	@media (max-width: 660px) {
		:global(main, .intro) {
			padding: 1rem 2rem;
		}

		:global(main) {
			padding-bottom: 6rem;
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
</style>

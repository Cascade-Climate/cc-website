<script>
  import { getContext } from 'svelte';
  import { pdfUrl } from '$lib/pdfUrl.js';

  const { openModal } = getContext('modal');

  export let link = '';
  export let variant = 'light';

  function openPdf(target) {
    const url = pdfUrl(target);
    const pdfWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!pdfWindow) {
      window.location.assign(url);
    }
  }

  function handleClick() {
		if (localStorage.getItem('cc-formSubmitted')) {
			openPdf(link);
		} else {
			openModal(link);
		}
  }
</script>

<button on:click={handleClick} class={variant} style="text-align: left;">
  <slot/>
</button>

<style>
  button {
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 30px;
		font-size: 1.2rem;
		flex-grow: 1;
		font-weight: 400;
  }

  .light {
    background-color: var(--color-light);
		color: var(--color-dark);
  }

  .accent {
    background-color: var(--color-accent);
    color: var(--color-light);
  }
</style>
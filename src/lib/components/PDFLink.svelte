<script>
  import { getContext } from 'svelte';

  const { openModal } = getContext('modal');

  export let link = '';
  export let variant = 'light';

  function handleClick() {
			openModal(link);
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
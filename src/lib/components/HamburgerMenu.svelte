<script>
	export let mobileOnly;
	export let callbackFn;
	export let active;

</script>

<button
	class="hamburger"
	class:mobile-only={mobileOnly && !active}
	class:active={active}
	on:click={callbackFn}
	type="button"
	aria-label="Toggle Hamburger Menu"
>
	<span class="hamburger-center"></span>
</button>

<style>
	.hamburger {
		background-color: transparent;
		display: flex;
		color: var(--color-light);
		border: none;
		height: 100%;
		align-items: center;
		cursor: pointer;
	}
	.hamburger-center {
		width: 24px;
		height: 2px;
		background-color: var(--color-light);
		transition: background-color 0.2s;
	}

	.active.hamburger .hamburger-center {
		background-color: transparent;
	}

	.hamburger-center::before,
	.hamburger-center::after {
		content: '';
		scale: 1;
		display: block;
		position: absolute;
		width: 24px;
		height: 2px;
		background-color: var(--color-light);
		transition: transform 0.3s;
	}

	.hamburger:hover .hamburger-center::before {
		transform: translateY(-8px);
	}

	.hamburger-center::before {
		transform: translateY(-6px);
	}

	.hamburger:hover .hamburger-center::after {
		transform: translateY(8px);
	}

	.hamburger-center::after {
		transform: translateY(6px);
	}

	.active.hamburger .hamburger-center::before {
		transform: rotate(45deg);
	}

	.active.hamburger .hamburger-center::after {
		transform: rotate(-45deg);
	}

	.mobile-only {
		display: none;
	}

	@media (max-width: 660px) {
		.mobile-only {
			display: flex;
		}
	}
</style>

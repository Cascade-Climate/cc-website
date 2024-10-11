<script>
	export let showModal = false;
	export let modalLink = '';

	let formData = {
		name: '',
		email: '',
		first_name: '',
		last_name: '',
		title: '',
		organization: '',
		link: modalLink
	};

	async function handleSubmit() {
		try {
			console.log('submit', formData);
			fetch('/api/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			localStorage.setItem('cc-formSubmitted', true);
			closeModal();
			setTimeout(() => {
				window.open(modalLink, '_blank');
			}, 100);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function closeModal() {
		showModal = false;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeModal();
		}
	}
</script>

{#if showModal}
	<div class="modal-backdrop" on:click={closeModal} on:keydown={handleKeydown} tabindex="0" role="button">
		<div class="modal-content" on:click|stopPropagation on:keydown={handleKeydown} tabindex="0" role="button">
			<button class="close-button" on:click={closeModal}>×</button>
			<h1>Download publication</h1>
			<form on:submit|preventDefault={handleSubmit}>
				<div>
						<label for="email">Email <span>*</span></label>
						<input id="email" type="email" bind:value={formData.email} required />
					</div>
					<div class="input-group">
						<div>
							<label for="name">First name <span>*</span></label>
							<input id="name" bind:value={formData.first_name} required />
						</div>
						<div>
							<label for="last_name">Last name <span>*</span></label>
							<input id="last_name" bind:value={formData.last_name} required />
						</div>
					</div>
					<div class="input-group">
						<div>
						<label for="title">Job title</label>
						<input id="title" bind:value={formData.title}/>
					</div>
					<div>
						<label for="organization">Organization</label>
						<input id="organization" bind:value={formData.organization}/>
						</div>
					</div>
					{#if modalLink}
						<input type="hidden" bind:value={formData.link} />
					{/if}
					By disclosing your information you agree to receive updates from Cascade Climate. You can change your email preferences at any time.
					<button type="submit">Sign up</button>
					{#if modalLink}
						<a href={modalLink}>No thanks, proceed to download.</a>
					{/if}
			</form>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		padding: 1rem;
		max-width: 660px;
		width: 90%;
	}

	.close-button {
		float: right;
		font-size: 1.5rem;
		border: none;
		background: none;
		cursor: pointer;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.8rem;
		line-height: 1.5;
		font-weight: 500;
	}

	.input-group {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.input-group div {
		flex: 1;
	}

	label {
		font-weight: 300;
		font-size: 0.75rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
	}

	span {
		color: var(--color-accent);
	}

	button[type="submit"] {
		align-self: flex-start;
		padding: 0.5rem 1rem;
		background-color: var(--color-accent);
		color: var(--color-light);
		border: none;
		border-radius: 1rem;
		cursor: pointer;
	}

	h1 {
		font-weight: 500;
		font-size: 1.5rem;
		margin-top: 0.25rem;
	}

	a {
		font-size: 0.75rem;
		color: var(--color-black);
	}
</style>
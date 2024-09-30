<script>
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';
	let submitStatus = '';

	async function handleSubmit() {
		submitStatus = 'Submitting...';
		try {
			const response = await fetch('/api/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
			});
			const result = await response.json();
			if (result.success) {
				submitStatus = 'Form submitted successfully!';
				name = '';
				email = '';
				message = '';
			} else {
				submitStatus = 'Error submitting form. Please try again.';
			}
		} catch (error) {
			console.error('Error:', error);
			submitStatus = 'Error submitting form. Please try again.';
		}
	}
	</script>

	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="name">Name:</label>
			<input id="name" bind:value={name} required />
		</div>
		<div>
			<label for="email">Email:</label>
			<input id="email" type="email" bind:value={email} required />
		</div>
		<div>
			<label for="message">Message:</label>
			<textarea id="message" bind:value={message} required></textarea>
		</div>
		<button type="submit">Submit</button>
	</form>

	{#if submitStatus}
		<p>{submitStatus}</p>
	{/if}

	<style>
		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		label {
			font-weight: bold;
		}
		input, textarea {
			width: 100%;
			padding: 0.5rem;
		}
		button {
			align-self: flex-start;
			padding: 0.5rem 1rem;
			background-color: #4CAF50;
			color: white;
			border: none;
			cursor: pointer;
		}
	</style>
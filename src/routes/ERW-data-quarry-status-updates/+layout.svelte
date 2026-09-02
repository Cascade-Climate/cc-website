<slot />

<style>
	:global(.dq-status-page) {
		background-color: var(--color-light);
		color: var(--color-text);
	}

	:global(.dq-status-page h1),
	:global(.dq-status-page h3),
	:global(.dq-status-page h4) {
		line-height: initial;
		margin-bottom: 0.5rem;
	}

	:global(.dq-status-page h1) {
		font-weight: 300;
		margin-top: 2rem;
		font-size: 2rem;
	}

	:global(.dq-status-page h2) {
		line-height: initial;
		font-weight: 500;
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.dq-status-page h3) {
		font-weight: 400;
		font-size: 1.25rem;
	}

	:global(.dq-status-page strong) {
		font-weight: 550;
	}

	:global(.dq-status-page .intro a),
	:global(.dq-status-page main a) {
		text-decoration: none;
		color: var(--color-accent);
		font-weight: 420;
	}

	:global(.dq-status-page img) {
		max-width: 100%;
		margin: 1rem auto;
	}

	:global(.dq-status-page ul) {
		padding-left: 1.5rem;
	}

	:global(.dq-status-page li) {
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.dq-status-page .intro p),
	:global(.dq-status-page main p) {
		margin-bottom: 0;
	}

	:global(.dq-status-page .content) {
		display: flex;
		gap: 2rem;
	}

	:global(.dq-status-page .content img) {
		display: block;
		width: 40%;
		object-fit: cover;
		margin: 2rem 0;
		border-radius: 1rem;
	}

	:global(.dq-status-page .links) {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: 1rem 0;
		width: fit-content;
	}

	:global(.dq-status-page .links a) {
		border-radius: 2rem;
		padding: 0.4rem 1.2rem;
		text-align: center;
		text-decoration: none;
		color: var(--color-dark);
		background-color: var(--color-light);
		font-size: 1.2rem;
	}

	:global(.dq-status-page .intro) {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	:global(.dq-status-page main) {
		padding: 1rem 16px;
		padding-bottom: 6rem;
		margin-left: 7rem;
		margin-right: 7rem;
		color: var(--color-text);
		background-color: var(--color-light);
	}

	:global(.dq-status-page main section) {
		margin-top: -6rem;
		padding-top: 6rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -5rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(.dq-status-page main section:last-child) {
		border-bottom: none;
	}

	@media (max-width: 960px) {
		:global(.dq-status-page .content) {
			flex-direction: column;
			gap: 1rem;
		}

		:global(.dq-status-page .content img) {
			width: 100%;
			margin: 0;
		}

		:global(.dq-status-page main) {
			margin-left: 5rem;
			margin-right: 5rem;
		}
	}

	@media (max-width: 660px) {
		:global(.dq-status-page main),
		:global(.dq-status-page .intro) {
			padding: 1rem 2rem;
			max-width: 100%;
		}

		:global(.dq-status-page main) {
			padding-bottom: 6rem;
			margin-left: 1rem;
			margin-right: 1rem;
		}

		:global(.dq-status-page .intro .content img) {
			max-width: 100%;
			width: 100%;
		}
	}
</style>

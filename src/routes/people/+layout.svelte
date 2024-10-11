
<div id="people">
	<a href="/people">← Back to Team</a>
	<slot />
</div>

<style>
	a {
		border: 1px solid var(--color-accent);
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    text-decoration: none;
    font-weight: 400;
    color: var(--color-accent);
		transition: all 0.2s ease-out;
	}

	a:hover {
		background-color: var(--color-accent);
		color: var(--color-light);
	}

	#people {
		padding: 2rem;
	}

	:global(.team-member) {
		display: flex;	
		gap: 4%;
	}

	:global(.member-info) {
		width: 60%;
	}

	:global(.member-info h1) {
		font-family: "Inter", sans-serif;
		font-weight: 600;
		font-size: 4rem;
		line-height: 4rem;
		margin-bottom: 1rem;
	}

	:global(.details) {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 2rem;
		font-size: 2rem;
		line-height: 2.4rem;
	}

	:global(.socials) {
		display: flex;
		gap: 0.8rem;
	}

	:global(.details a) {
		display: flex;
	}

	:global(.details img) {
		height: 32px;
	}

	:global(.headshot) {
		width: 36%;
	}

	:global(.headshot img) {
		border-radius: 2rem;
		width: 100%;
		margin-top: 2rem;
	}

	@media (max-width: 660px) {
		:global(.team-member) {
			flex-direction: column;
		}

		:global(.member-info) {
			width: 100%;
		}

		:global(.headshot) {
			width: 100%;
		}
	}

</style>
<script>
	import config from '$lib/config';
	import cascadeLogo from '$lib/images/cc-logo.png';
</script>

<footer>
	<a class="button" href={config.subscribeUrl} target="_blank">Subscribe</a>
	<a class="contact" href={'mailto:' + config.contactAddress} target="_blank">
		{config.contactAddress}
	</a>
	<div class="hr"></div>
	<a class="footer-logo" href="/">
		<img src={cascadeLogo} alt="Cascade Logo" />
		Cascade Climate
	</a>
</footer>

<style>
	footer {
		background-color: var(--color-dark);
		padding: 4.8rem 2rem;
	}

	.button {
		background-color: var(--color-accent);
		color: var(--color-light);
		border-radius: 32px;
		padding: 16px 32px;
		text-decoration: none;
		font-weight: 400;
		font-size: 16px;
	}

	.contact {
		display: block;
		margin-top: 2.8rem;
		margin-bottom: 2.4rem;
		font-family: 'Work Sans', sans-serif;
		font-size: 48px;
		overflow-wrap: break-word;
		color: var(--color-light);
		text-decoration-color: transparent;
		transition: text-decoration-color 0.2s ease-out;
		text-underline-offset: 4px;
	}

	.contact:hover {
		text-decoration-color: var(--color-accent);
	}

	.hr {
		width: 100%;
		border-top: 4px solid var(--color-light);
		margin-bottom: 1.6rem;
	}

	.footer-logo {
		font-family: 'Work Sans', sans-serif;
		font-size: 24px;
		color: var(--color-light);
		text-decoration: none;
		font-weight: 320;
		display: flex;
		align-items: center;
	}

	.footer-logo img {
		width: 24px;
		height: auto;
		margin-right: 8px;
	}
</style>

<script>
	import config from '$lib/config';
	import cascadeLogo from '$lib/images/cc-logo.webp';
</script>

<footer>
	<a
		class="button"
		href={'https://docs.google.com/forms/d/e/1FAIpQLScYIERiJVoobnCRYQ8uYmFuHm7_jsyR67Aw1XbfiFdzAYx-sw/viewform?pli=1&pli=1'}
		target="_blank">Subscribe</a
	>
	<a class="contact" href={'mailto:' + config.contactAddress} target="_blank">
		{config.contactAddress}
	</a>
	<div class="hr"></div>
	<div class="footer-bottom">
		<a class="footer-logo" href="/">
			<img width="24" height="24" src={cascadeLogo} alt="Cascade Logo" />
			Cascade Climate
		</a>
		<a href="/privacy" class="privacy-link">Privacy Policy</a>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-dark);
		padding: 4.8rem 4rem;
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
		line-height: 48px;
		overflow-wrap: break-word;
		color: var(--color-light);
		text-decoration-color: transparent;
		transition: text-decoration-color 0.2s ease-out;
		text-underline-offset: 4px;
		font-weight: 400;
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
		height: 24px;
		margin-right: 8px;
		margin-left: 0;
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.privacy-link {
		color: var(--color-light);
		text-decoration: none;
		transition: text-decoration-color 0.2s ease-out;
		text-underline-offset: 4px;
		font-weight: 100;
	}

	.privacy-link:hover {
		text-decoration-color: var(--color-accent);
	}

	@media (max-width: 660px) {
		footer {
			padding: 2.4rem 2rem;
		}
		.contact {
			font-size: 24px;
			line-height: 24px;
		}
	}
</style>

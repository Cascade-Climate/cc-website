<script>
	import heroImg from '$lib/images/nature/crn-hero-3.png';
</script>

<svelte:head>
	<title>Coordinated Research Network - Bedrock Initiative - Cascade Climate</title>
	<meta name="description" content="Standardized ERW field trials across global geographies to accelerate comparable learning." />
</svelte:head>

<div class="page">
	<section class="hero">
		<img src={heroImg} alt="" class="hero-img" width="1024" height="684" decoding="async" fetchpriority="high" />
	</section>
	<section class="preamble">
		<p class="crumb"><a href="/bedrock-initiative">Bedrock Initiative</a></p>
		<h1>Coordinated Research Network</h1>
	</section>
	<section class="body">
		<p>
			The Coordinated Research Network (CRN) consists of standardized experimental field trials across diverse global
			geographies, beginning with one or two pilot sites selected in 2026 with secured philanthropic funding for five years.
		</p>
		<p>
			By deploying standardized protocols, measurement strategies, and experimental designs, the CRN will achieve what
			isolated studies cannot: field-wide learning enabled by comparable datasets across global contexts.
		</p>
		<p>
			Host sites will receive operational funding, authorship opportunities on site-specific and network-wide
			publications, and access to a global community of ERW researchers.
		</p>
		<p>
			To learn more about the CRN, visit
			<a href="https://cascadeclimate.org/blog/crn-eoi" target="_blank" rel="noopener noreferrer">CRN Expression of Interest</a>.
		</p>
		<p><a class="back" href="/bedrock-initiative">← Back to Bedrock overview</a></p>
	</section>
</div>

<style>
	.page {
		padding-bottom: 4rem;
	}
	.preamble {
		padding: 1.25rem 4rem;
		background: var(--color-dark);
		color: var(--color-light);
	}
	.hero-img {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		display: block;
	}
	.crumb a {
		color: var(--color-highlight);
		text-decoration: none;
		font-size: 0.9rem;
	}
	h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem 0 0;
	}
	.body {
		padding: 1.75rem 4rem;
		max-width: 720px;
	}
	.back {
		color: var(--color-accent);
		text-decoration: none;
	}
	@media (max-width: 660px) {
		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>

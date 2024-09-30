<script>
	import erw from '$lib/images/rock-weathering.webp';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const sections = [
		{ id: 'context', title: 'Context' },
		{ id: 'etc', title: 'Other links etc' },
		{ id: 'acknowledgements', title: 'Acknowledgements' }
	];

	let activeSection = '';

	function handleScroll() {
		const scrollPosition = window.scrollY;
		activeSection = '';
		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + offsetHeight - 10) {
					activeSection = section.id;
					console.log(activeSection);
				}
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div>
	<section class="preamble">
		<div class="content">
			<div class="copy">
				<h1>Foundations for Carbon Removal Quantification in ERW Deployments</h1>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
					of classical Latin literature from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
					more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
					cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
					comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
					of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
					ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
					dolor sit amet..", comes from a line in section 1.10.32.
				</p>
				<p>
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
					interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
					are also reproduced in their exact original form, accompanied by English versions from the
					1914 translation by H. Rackham.
				</p>
			</div>
			<img src={erw} alt="Enhanced Rock Weathering" />
		</div>
		<div class="links">
			<a href="/pdfs/example.pdf">Download PDF</a>
			<a href="/pdfs/example.pdf">Technical Executive Summary</a>
			<a href="/pdfs/example.pdf">Buyer Summary</a>
			<a href="/pdfs/example.pdf">Policymaker Summary</a>
		</div>
	</section>
	<nav>
		{#each sections as section}
			<a class:active={activeSection === section.id} href={`${$page.url.pathname}#${section.id}`}>
				{section.title}
			</a>
		{/each}
	</nav>
	<div class="areas">
		<section id="context">
			<h1>Context</h1>
			<p>
				Philosophically, we put learning at the heart of our work—embracing rather than wishing away
				uncertainty and helping open-system climate intervention fields shift into virtuous
				learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
				chart if we hope to identify interventions that can be deployed safely, effectively, and
				responsibly.
			</p>
		</section>
		<section id="etc">
			<h1>Other links etc</h1>
			<p>
				Philosophically, we put learning at the heart of our work—embracing rather than wishing away
				uncertainty and helping open-system climate intervention fields shift into virtuous
				learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
				chart if we hope to identify interventions that can be deployed safely, effectively, and
				responsibly.
			</p>
		</section>
		<section id="acknowledgements">
			<h1>Acknowledgements</h1>
			<p>
				Philosophically, we put learning at the heart of our work—embracing rather than wishing away
				uncertainty and helping open-system climate intervention fields shift into virtuous
				learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
				chart if we hope to identify interventions that can be deployed safely, effectively, and
				responsibly.
			</p>
		</section>
	</div>
</div>

<style>
	h1 {
		font-weight: 300;
		margin-top: 2rem;
		font-size: 2rem;
	}

	.content {
		display: flex;
		gap: 2rem;
	}

	.content img {
		display: block;
		width: 40%;
		object-fit: cover;
		margin: 2rem 0;
		border-radius: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: 1rem 0;
	}

	.links a {
		border-radius: 2rem;
		padding: 0.4rem 1.2rem;
		text-align: center;
		text-decoration: none;
		color: var(--color-dark);
		background-color: var(--color-light);
		font-size: 0.8em;
		font-weight: 500;
	}

	.links a:first-child {
		background-color: var(--color-accent);
		color: var(--color-light);
	}

	nav {
		position: sticky;
		top: calc(4rem - 1px);
		background-color: var(--color-dark);
		color: var(--color-light);
		border-top: 1px solid var(--color-light);
		display: flex;
		flex-wrap: wrap;
	}

	nav a {
		padding: 0.8rem;
		margin: -1px;
		margin-left: 0;
		font-size: 1.25rem;
		text-decoration: none;
		color: inherit;
		max-width: 256px;
		flex-grow: 1;
		text-align: center;
		border: 1px solid var(--color-light);
	}

	nav a:first-child {
		border-left: none;
	}

	nav a.active {
		background-color: var(--color-light);
		color: var(--color-dark);
	}

	.preamble {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}

	.areas {
		padding: 1rem 4rem;
		padding-bottom: 6rem;
	}

	.areas section {
		margin-top: -6rem;
		padding-top: 8rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -5rem;
		padding-bottom: 3rem;
	}

	.areas section:last-child {
		border-bottom: none;
	}

	@media (max-width: 960px) {
		.content {
			flex-direction: column;
			gap: 1rem;
		}

		.content img {
			width: 100%;
			margin: 0;
		}
	}
</style>

<script>
	import erw from '$lib/images/rock-weathering.webp';
	import { onMount } from 'svelte';

	const sections = [
		{ id: 'erw', title: 'ERW' },
		{ id: 'mcdr', title: 'MCDR' },
		{ id: 'ice-sheet-stabilization', title: 'Ice Sheet Stabilization' }
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

<div class="container">
	<section class="preamble">
		<h1>Our Work</h1>
		<p>
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
			classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
			Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
			words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
			classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
			1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
			Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
			the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
			line in section 1.10.32.
		</p>
		<p>
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
			interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
			also reproduced in their exact original form, accompanied by English versions from the 1914
			translation by H. Rackham.
		</p>
	</section>
	<nav>
		{#each sections as section}
			<a class:active={activeSection === section.id} href="/our-work#{section.id}">
				{section.title}
			</a>
		{/each}
	</nav>
	<div class="areas">
		<h1>Programmatic Areas</h1>
		<section id="erw">
			<h3>Enhanced Rock Weathering</h3>
			<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
				of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
				a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
				word in classical literature, discovered the undoubtable source.
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Research</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Another Thing</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Secret Third Thing</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Cost</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
			</div>
		</section>
		<section id="mcdr">
			<h3>Marine Carbon Dioxide Removal</h3>
			<p>
				While Lorem Ipsum has been a staple in the design world for decades, many designers and
				content creators are exploring alternatives to this traditional placeholder text. These
				alternatives aim to address some of the limitations of Lorem Ipsum and provide more
				contextually relevant options for different design projects.
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Foundations</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Data Access</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Price</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Policy</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
			</div>
		</section>
		<section id="ice-sheet-stabilization">
			<h3>Ice Sheet Stabilization</h3>
			<p>
				Lorem ipsum is a valuable tool in the design process, allowing for focus on layout and
				typography without the distraction of meaningful content. However, it's important to replace
				it with actual content before finalizing a design to ensure the layout works with real text.
			</p>
			<h5>HIGHLIGHTS</h5>
			<div class="highlights">
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Policy</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Lorem</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Ipsum</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
				<div>
					<img src={erw} alt="Enhanced Rock Weathering" />
					<h2>Example</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
						piece of classical Latin literature from 45 BC, making it over 2000 years old.
					</p>
					<a href="/blog/foundations">Learn More</a>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.container {
		font-size: 1rem;
	}

	h1 {
		font-weight: 300;
		margin-top: 2rem;
		font-size: 2rem;
	}

	h3 {
		font-weight: 600;
		font-size: 1.6rem;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}

	h2 {
		font-weight: 300;
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		color: var(--color-dark);
	}

	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin-bottom: 1rem;
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

	.areas h1 {
		margin-bottom: -7rem;
		color: var(--color-dark);
	}

	.areas section {
		padding-top: 9rem;
		border-bottom: 1px solid var(--color-text);
		margin-bottom: -7rem;
		padding-bottom: 4rem;
	}

	.highlights {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		grid-gap: 2rem;
	}

	.highlights img {
		max-width: 100%;
		border-radius: 1rem;
	}

	.highlights a {
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-align: center;
		padding: 0.5rem 1.2rem;
		text-decoration: none;
		color: var(--color-light);
	}

	@media (max-width: 660px) {
		.areas, .preamble {
			padding: 1rem 2rem;
		}
	}
</style>

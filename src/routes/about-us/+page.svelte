<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import asteraLogo from '$lib/images/supporters/astera.webp';
	import czLogo from '$lib/images/supporters/chan-zuckerberg.webp';
	import granthamLogo from '$lib/images/supporters/grantham.webp';
	import kissickLogo from '$lib/images/supporters/kissick.webp';
	import mcgovernLogo from '$lib/images/supporters/mcgovern.webp';
	import quadratureLogo from '$lib/images/supporters/quadrature.webp';
	import spitzerLogo from '$lib/images/supporters/spitzer.webp';
</script>

<svelte:head>
    <title>About Us - Cascade Climate</title> 
    <meta
	name="description"
	content="Propelling high-potential climate solutions from the margins to the mainstream."
/>
</svelte:head>

<section class="intro">
	<h1>About Us</h1>
	<p>
		Cascade is a philanthropy-backed nonprofit helping mobilize a more comprehensive response to the climate crisis by advancing high-potential solutions that remain on the margins of mainstream climate action. We do this by leading ambitious initiatives spanning markets, policy and science to overcome the biggest bottlenecks to progress.</p>
</section>
<ScrollNav />
<main>
	<section id="motivation">
		<h1>Our motivation</h1>
		<h2>: the climate crisis needs a more holistic strategy.</h2>
		<p>
			The climate crisis has outpaced our response. While the world has rightly focused on rapid decarbonization in trying to limit warming to 1.5°C, we are already crossing that threshold. Earlier versions of our climate strategy are no longer sufficient in scope. We need dramatically expanded efforts on near-term warming mitigation, large-scale durable carbon removal for climate restoration, and measures to avoid triggering irreversible tipping points.
		</p>
		<p>
			Previously neglected approaches—from natural system climate interventions to super pollutant mitigation and more—must now be seriously pursued alongside urgent decarbonization. Many promising solutions remain sidelined not because they lack potential, but because they haven't gotten the push needed to overcome adoption bottlenecks. We founded Cascade to provide that push, accelerating high-potential solutions and catalyzing a full-spectrum response that matches the scale and urgency of the climate crisis.
		</p>
	</section>
	<section id="work">
		<h1>Our work</h1>
		<h2>
			: orchestrating ambitious initiatives across markets, policy, and science.
		</h2>
		<p>
			Cascade tackles the systemic bottlenecks that aren’t the “job” of any existing actor—challenges that markets, policy, and science can't solve in isolation. We coordinate across these spheres to overcome collective action problems, build novel tools and platforms that speed the pace of learning, and direct substantially more resources toward these critical emerging climate solutions. 
		</p>
		<p>
			Over the past two years, we've demonstrated this approach in enhanced rock weathering (ERW)—accelerating high-priority R&D, creating deployment-driven learning cycles through early voluntary markets, and building policy momentum for the field. Learn more about our work in ERW <a href="/our-work#erw">here</a>.
		</p>
		<p>
			We're now expanding this model to address the immediate challenge of near-term warming. Rapid temperature rise risks crossing planetary boundaries and cascading impacts across economies, food systems, geopolitics, and ecosystems. Averting the worst of this demands coordinated preparation and response across industry, governments, and scientists. Cascade is catalyzing early market development and policy foundations for super pollutant mitigation, applying some of the strategies that have advanced ERW and durable carbon removal in recent years.
		</p>
	</section>
	<section id="approach">
		<h1>Our approach</h1>
		<h2>: building deep, trust-based relationships across the ecosystem.</h2>
		<p>
			The “how” in our approach is every bit as important as the “what.” We orchestrate ambitious cross-sector initiatives that shape markets and policies. But first we have to earn the invitation to do this by building broad and deep relationships across any ecosystem we work in—establishing trust through humility, an independent voice, and always keeping climate impact as our north star. Philosophically, we put learning at the heart of our work, tackling complexity through learning-by-doing cycles rather than wishing it away.
		</p>
	</section>
</main>
<section id="supporters">
	Supported by:
	<div id="supporters-container">
		<a href="https://astera.org">
			<img width="680" height="365" src={asteraLogo} alt="Astera Institute Logo" />
		</a>
		<a href="https://chanzuckerberg.com/">
			<img width="680" height="365" src={czLogo} alt="Chan Zuckerberg Initiative Logo" />
		</a>
		<a href="https://www.granthamfoundation.org/">
			<img width="680" height="365" src={granthamLogo} alt="Grantham Foundation Logo" />
		</a>
		<span>
			<img width="680" height="365" src={kissickLogo} alt="Kissick Family Foundation Logo" />
		</span>
		<a href="https://www.mcgovern.org/">
			<img width="680" height="365" src={mcgovernLogo} alt="Patrick J McGovern Foundation Logo" />
		</a>
		<a href="https://qc.foundation/">
			<img width="680" height="365" src={quadratureLogo} alt="Quadrature Climate Foundation Logo" />
		</a>
		<span>
			<img
				width="680"
				height="365"
				src={spitzerLogo}
				alt="Bernard and Anne Spitzer Charitable Trust Logo"
			/>
		</span>
	</div>
</section>

<style>
	main h1,
	main h2 {
		line-height: initial;
		display: inline;
		font-size: 2rem;
		font-weight: 500;
	}

	main h2 {
		font-weight: 300;
		margin-left: -0.25rem;
	}

	a {
		text-decoration: none;
		color: var(--color-accent);
		font-weight: 420;
	}

	img {
		max-width: 100%;
		margin: 1rem auto;
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1;
	}

	.intro {
		padding: 1rem 4rem;
		background-color: var(--color-dark);
		color: var(--color-light);
	}
	
	.intro p {
		margin-bottom: 1rem;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 0;
	}

	main {
		padding: 1rem 4rem;
		padding-bottom: 6rem;
	}

	main section {
		margin-top: -6rem;
		padding-top: 9rem;
		margin-bottom: -5rem;
		padding-bottom: 1rem;
	}

	#supporters img {
		width: 480px;
		height: auto;
	}

	#supporters {
		padding: 4rem;
	}
	#supporters-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		border-top: 1px solid var(--color-text);
		margin-top: 1rem;
		width: 100%;
	}

	#supporters img {
		width: 256px;
		max-width: 100%;
		height: auto;
		transition: scale 0.2s ease-out;
	}

	#supporters img:hover {
		scale: 1.1;
	}

	@media (max-width: 660px) {
		main,
		.intro,
		#supporters {
			padding: 2rem;
		}

		main {
			padding-bottom: 6rem;
		}
	}
</style>

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

<section class="intro">
	<h1>About Us</h1>
	<p>
		Cascade is a philanthropically-backed nonprofit organization working across industry, government
		and science to coordinate ambitious multi-stakeholder initiatives, build tools and
		infrastructure that unlocks cycles of learning-by-doing, and resource high-leverage R&D and
		policy work.
	</p>
</section>
<ScrollNav />
<main>
	<section id="motivation">
		<h1>Our motivation</h1>
		<h2>: the climate crisis and power of Earth's natural systems.</h2>
		<p>
			As a species we are already—unintentionally and haphazardly—manipulating Earth’s climate
			system in ways that produce disastrous consequences for ourselves and the biosphere.
			Decarbonization must be our top priority but on its own cannot solve the climate emergency. We
			must embrace the need to harness Earth’s natural systems in the service of avoiding deeper
			harm. This will mean intervening in soils, rivers, oceans, glaciers and more—but doing so with
			great deliberation and care.
		</p>
		<p>
			Accelerating humanity’s readiness to responsibly enhance or modulate natural cycles requires
			us to approach the endeavor with profound humility. At the core of our motivation to start
			Cascade are the awe and wonder that come with deeper learning about Earth systems, the
			biosphere, and humanity’s connected history with them—an unimaginably complex set of
			interactions that have played out over eons through mass extinctions and extraordinary shifts
			in the planet’s climate system.
		</p>
	</section>
	<section id="work">
		<h1>Our work</h1>
		<h2>
			: coordinating ambitious initiatives across science, industry, philanthropy, and government.
		</h2>
		<p>
			Enhanced weathering and virtually all other open-system climate intervention fields are in
			their infancy. Scientific uncertainties regarding efficacy, quantification and ecological
			impacts loom large. Policy frameworks for government engagement remain on the drawing board.
			Immature markets in these fields—where they exist—struggle with “race-to-the-bottom” incentive
			problems as well as underdeveloped institutional and regulatory architecture.
		</p>
		<p>
			In these thorny contexts, Cascade coordinates ambitious initiatives across science, industry,
			philanthropy, and government to overcome the highest-priority bottlenecks hindering progress.
			Often this involves unlocking bigger flows of funding or talent, filling critical ecosystem
			gaps by incubating new systems and entities, or shaping the design of policies and markets. At
			Cascade, we make tackling system-level obstacles our job.
		</p>
	</section>
	<section id="approach">
		<h1>Our approach</h1>
		<h2>: building deep, trust-based relationships across the ecosystem.</h2>
		<p>
			The “how” in our approach is every bit as important as the “what.” We have to earn the right
			to play a system-engineer role. We do this by building deep trust-based relationships across
			the ecosystem, while maintaining scrupulous neutrality and unimpeachably clean incentives.
			Philosophically, we put learning at the heart of our work—embracing rather than wishing away
			uncertainty and helping open-system climate intervention fields shift into virtuous
			learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
			chart if we hope to identify interventions that can be deployed safely, effectively, and
			responsibly.
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

<script>
	import wavesPhoto from '$lib/images/waves.png';
	import asteraLogo from '$lib/images/supporters/astera.png';
	import czLogo from '$lib/images/supporters/chan-zuckerberg.png';
	import granthamLogo from '$lib/images/supporters/grantham.png';
	import kissickLogo from '$lib/images/supporters/kissick.png';
	import mcgovernLogo from '$lib/images/supporters/mcgovern.png';
	import quadratureLogo from '$lib/images/supporters/quadrature.png';
	import spitzerLogo from '$lib/images/supporters/spitzer.png';
</script>

<svelte:head>
	<title>Cascade Climate</title>
	<meta
		name="description"
		content="Cascade Climate accelerates progress in interventions that harness Earth’s natural systems—from soils, to oceans, to glaciers—to help stabilize our climate."
	/>
</svelte:head>
<div>
	<section id="hero">
		<div id="hero-content">
			<h1>
				Accelerating progress in interventions that harness Earth’s natural systems—from soils, to
				oceans, to glaciers—to stabilize our climate.
			</h1>
		</div>
	</section>
	<section id="near-term-focus">
		<div class="content">
			<h2>Near-term Focus: Enhanced Rock Weathering</h2>
			<p>
				Our initial focus is advancing the development of a healthy market for enhanced rock
				weathering (ERW), underpinned by its scientific evidence base and its potential for
				gigaton-scale, durable carbon dioxide removal (CDR).
			</p>
			<p>
				As commercial activity in ERW ramps up, it is essential that we collectively steer toward a
				healthy, virtuous market cycle wherein large-scale deployments provide a powerful engine for
				public scientific learning along with declining uncertainties and costs. For open-system CDR
				to succeed, ERW needs to thrive—with rigor and quality at its core.
			</p>
		</div>
	</section>
	<section id="initiatives">
		<h1>Cascade is leading the following initiatives in ERW:</h1>
		<div class="container">
			<div class="heading">Quantification standard development</div>
			<div class="content">
				<p>
					Orchestrating a methodical process to develop an industry-wide standard that ensures rigor
					and consistency in the measurement, reporting, and verification of ERW. This community
					quantification standard is developed in accordance with best available science and will be
					dynamically iterated as science evolves.
				</p>
			</div>
		</div>
		<div class="container">
			<div class="heading">Data access system</div>
			<div class="content">
				<p>
					Designing and instituting a community data access system that translates data from
					commercial deployments into public learning and trust-building, while preserving
					suppliers’ ability to differentiate competitively and attract investment.
				</p>
			</div>
		</div>
		<div class="container">
			<div class="heading">Quantification standard development</div>
			<div class="content">
				<p>
					Shaping the strategy and driving stakeholder alignment around an overall policy framework
					and specific levers to help ERW get over the early hump on farmer adoption, public
					confidence, uncertainty reduction, market buy-in, and cost decline.
				</p>
			</div>
		</div>
	</section>
	<div class="dividing-image">
		<img width="100%" height="128" src={wavesPhoto} alt="waves" />
	</div>
	<section id="ours">
		<div class="container">
			<div class="heading">
				<div class="our">Our motivation</div>
				The climate crisis and power of Earth's natural systems.
			</div>
			<div class="content">
				<p>
					As a species we are already—unintentionally and haphazardly—manipulating Earth’s climate
					system in ways that produce disastrous consequences for ourselves and the biosphere.
					Decarbonization must be our top priority but on its own cannot solve the climate
					emergency. We must embrace the need to harness Earth’s natural systems in the service of
					avoiding deeper harm. This will mean intervening in soils, rivers, oceans, glaciers and
					more—but doing so with great deliberation and care.
				</p>
				<p>
					Accelerating humanity’s readiness to responsibly enhance or modulate natural cycles
					requires us to approach the endeavor with profound humility. At the core of our motivation
					to start Cascade are the awe and wonder that come with deeper learning about Earth
					systems, the biosphere, and humanity’s connected history with them—an unimaginably complex
					set of interactions that have played out over eons through mass extinctions and
					extraordinary shifts in the planet’s climate system.
				</p>
			</div>
		</div>
		<div class="container">
			<div class="heading">
				<div class="our">Our work</div>
				Coordinating ambitious initiatives across science, industry, philanthropy, and government.
			</div>
			<div class="content">
				<p>
					Enhanced weathering and virtually all other open-system climate intervention fields are in
					their infancy. Scientific uncertainties regarding efficacy, quantification and ecological
					impacts loom large. Policy frameworks for government engagement remain on the drawing
					board. Immature markets in these fields—where they exist—struggle with
					“race-to-the-bottom” incentive problems as well as underdeveloped institutional and
					regulatory architecture.
				</p>
				<p>
					In these thorny contexts, Cascade coordinates ambitious initiatives across science,
					industry, philanthropy, and government to overcome the highest-priority bottlenecks
					hindering progress. Often this involves unlocking bigger flows of funding or talent,
					filling critical ecosystem gaps by incubating new systems and entities, or shaping the
					design of policies and markets. At Cascade, we make tackling system-level obstacles our
					job.
				</p>
			</div>
		</div>
		<div class="container">
			<div class="heading">
				<div class="our">Our approach</div>
				Building deep, trust-based relationships across the ecosystem.
			</div>
			<div class="content">
				The “how” in our approach is every bit as important as the “what.” We have to earn the right
				to play a system-engineer role. We do this by building deep trust-based relationships across
				the ecosystem, while maintaining scrupulous neutrality and unimpeachably clean incentives.
				Philosophically, we put learning at the heart of our work—embracing rather than wishing away
				uncertainty and helping open-system climate intervention fields shift into virtuous
				learning-by-doing cycles. This enables the kind of evidence-driven course we will need to
				chart if we hope to identify interventions that can be deployed safely, effectively, and
				responsibly.
			</div>
		</div>
	</section>
	<section id="supporters">
		Generously supported by:
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
				<img
					width="680"
					height="365"
					src={quadratureLogo}
					alt="Quadrature Climate Foundation Logo"
				/>
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
</div>

<style>
	#hero {
		background-image: url('$lib/images/hero.png');
		background-size: cover;
		color: var(--color-light);
		padding: 12.8rem 4rem 4.8rem 4rem;
		margin-top: -8rem;
	}

	#hero h1 {
		font-size: 48px;
		font-weight: 350;
		text-align: center;
		line-height: 52px;
		margin: 0;
	}

	#near-term-focus {
		background-image: url('$lib/images/rock-weathering.png');
		background-repeat: no-repeat;
		background-size: cover;
		padding: 2rem;
	}

	#near-term-focus .content {
		background-color: rgba(255, 255, 255, 0.88);
		color: var(--color-text);
		padding: 2rem;
		padding-bottom: 0.8rem;
		max-width: 100%;
		width: 670px;
	}

	#near-term-focus h2 {
		margin-top: 0;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.container {
		display: flex;
		margin-top: 2rem;
		margin-bottom: 3rem;
		justify-content: space-between;
	}

	#initiatives,
	#ours {
		padding: 1rem 4rem;
	}

	#initiatives h1 {
		color: var(--color-dark);
		font-weight: 400;
		margin-top: 3rem;
	}

	.heading {
		width: 32%;
		font-weight: 600;
		font-size: 24px;
	}

	.content {
		width: 64%;
	}

	.dividing-image img {
		width: 100%;
		object-fit: cover;
		height: 128px;
	}

	.our {
		font-weight: 300;
		margin-bottom: 2rem;
	}

	#supporters {
		padding: 4rem;
	}
	#supporters-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
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
		#hero h1 {
			font-size: 32px;
			line-height: 32px;
		}

		.container {
			flex-direction: column;
		}

		.heading {
			width: 100%;
			margin-bottom: 1rem;
		}

		.content {
			width: 100%;
		}

		#initiatives,
		#ours {
			padding: 1rem 2rem;
		}

		#supporters img {
			width: 480px;
			height: auto;
		}
	}
</style>

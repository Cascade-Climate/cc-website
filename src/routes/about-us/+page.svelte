<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import asteraLogo from '$lib/images/supporters/astera.webp';
	import czLogo from '$lib/images/supporters/chan-zuckerberg.webp';
	import granthamLogo from '$lib/images/supporters/grantham.webp';
	import kingLogo from '$lib/images/supporters/king.webp';
	import kissickLogo from '$lib/images/supporters/kissick.webp';
	import mcgovernLogo from '$lib/images/supporters/mcgovern.webp';
	import navigationLogo from '$lib/images/supporters/navigationfund.webp';
	import quadratureLogo from '$lib/images/supporters/quadrature.webp';
	import spitzerLogo from '$lib/images/supporters/spitzer.webp';
</script>

<svelte:head>
    <title>About Us - Cascade Climate</title> 
    <meta
	name="description"
	content="Cascade Climate helps overlooked climate solutions with outsized potential move from stuck to self-sustaining scale."
/>
</svelte:head>

<section class="intro">
	<h1>About Cascade</h1>
	<p>
		Cascade Climate is a global, philanthropy-backed nonprofit helping mobilize a more comprehensive response to the climate crisis. We help overlooked climate solutions with outsized potential move from stuck to self-sustaining scale. Our team is composed of scientists, policy strategists, field builders, and organizational leaders united by curiosity and humility.
	</p>
	<p>
		Our first two program areas are enhanced rock weathering, which durably removes carbon while benefiting agricultural productivity, and lifecycle refrigerant management, which curbs near-term warming by capturing potent greenhouse gases before they're vented.
	</p>
</section>
<ScrollNav />
<main>
	<section id="challenge">
		<h1>Our challenge</h1>
		<h2>: decarbonization alone isn't enough.</h2>
		<p>
			Ambitious efforts to reduce CO₂ emissions are accelerating. But to secure a livable future, we have a lot more work ahead.
		</p>
		<p>
			We must put the brakes on super pollutant emissions to limit near-term warming in the coming decades. We must remove carbon already accumulated in the atmosphere to help limit harm and lower temperatures over time. And we must protect the people and ecosystems most at risk from irreversible shifts in Earth systems.
		</p>
		<p>
			Yet these fronts remain critically underserved. Super pollutant mitigation is insufficiently prioritized relative to its potential impact on near-term warming. Our durable carbon removal capacity remains a tiny fraction of the planetary scale needed. And efforts to address escalating risks to the stability of Earth systems are still in their infancy.
		</p>
		<p>
			Many solutions already exist but require coordinated work across R&amp;D, market shaping, and policy development to reach meaningful scale. Excellent organizations are advancing individual pieces. The work that goes unowned is stitching those efforts together — and mobilizing partners to collectively build what's missing.
		</p>
		<p>Cascade is built for that work.</p>
	</section>
	<section id="how">
		<h1>How we work</h1>
		<h2>: Cascade operates as an independent hub for collective action.</h2>
		<p>
			Researchers answer scientific questions, companies build projects, buyers drive early demand, and policymakers create durable support and accountability. Each is rightly focused on its part of the puzzle.
		</p>
		<p>
			Cascade's role is to see the whole and mobilize partners to close the gaps that fall between institutional mandates.
		</p>
		<p>
			To do this, we partner closely with scientists, project developers, catalytic funders, governments, and other actors without being beholden to any interest group. We assess how advances across different parts of a field will need to stack upon one another; build key analytical, data, and evidence-based foundations whose absence prevents different actors from doing their part; and organize ambitious initiatives that spur field-wide action.
		</p>
		<p>
			Every intervention is designed backward from the conditions that make for durable climate solutions: rigorous science, viable economics, healthy markets, and supportive policy.
		</p>
		<p>
			In every field, we aim to work ourselves out of a job by setting a virtuous cycle in motion: self-reinforcing progress and impacts that cascade without us.
		</p>
	</section>
	<section id="programs">
		<h1>Current programs</h1>
		<h2>: we're focused on durable carbon removal and super pollutant mitigation.</h2>
		<p>
			Our first major focus is enhanced rock weathering (ERW). Cascade has accelerated the field by mobilizing partnerships around shared priorities to build the scientific and market foundations ERW needs to scale. We convened over 100 researchers and practitioners to lay the groundwork for rigorous carbon removal quantification; launched the ERW Data Quarry, the field's first system for sharing commercial data with academic researchers; and helped leading buyers build research and data sharing into their purchases. Our Bedrock Initiative builds on this to deliver the global evidence base ERW needs through standardized, multi-year field research across major agricultural regions.
		</p>
		<p>
			Through our lifecycle refrigerant management program, we're now applying our distinctive approach to reduce refrigerant emissions and help expand access to clean cooling. Potent greenhouse-trapping refrigerants in the world's cooling equipment are still vented by default, and the systems to recover them barely exist. In Asia, we're mobilizing catalytic funding for demonstration projects to establish the foundations for a refrigerant recovery, reuse, and disposal network, while working in parallel toward embedding lifecycle refrigerant management in policy and cooling industry practice.
		</p>
	</section>
</main>
<section id="supporters">
	Supported by:
	<div id="supporters-container">
		<a href="https://astera.org">
			<img width="680" height="365" src={asteraLogo} alt="Astera Institute Logo" />
		</a>
		<img width="680" height="365" src={spitzerLogo} alt="Bernard and Anne Spitzer Charitable Trust Logo" />
		<a href="https://chanzuckerberg.com/">
			<img width="680" height="365" src={czLogo} alt="Chan Zuckerberg Initiative Logo" />
		</a>
		<a href="https://www.granthamfoundation.org/">
			<img width="680" height="365" src={granthamLogo} alt="Grantham Foundation Logo" />
		</a>
		<a href="https://www.kingphilanthropies.org/">
			<img width="680" height="365" src={kingLogo} alt="King Philanthropies Logo" />
		</a>
		<!-- svelte-ignore a11y-missing-content -->
		<a href="https://kissickfamilyfoundation.org/">
			<img width="680" height="365" src={kissickLogo} alt="Kissick Family Foundation Logo" />
		</a>
		<a href="https://www.mcgovern.org/">
			<img width="680" height="365" src={mcgovernLogo} alt="Patrick J McGovern Foundation Logo" />
		</a>
		<a href="https://www.navigation.org/">
			<img width="680" height="365" src={navigationLogo} alt="Navigation Fund Logo" />
		</a>
		<a href="https://www.qc.foundation/">
			<img width="680" height="365" src={quadratureLogo} alt="Quadrature Capital Logo" />
		</a>
	</div>
</section>
<p class="work-more-wrap">
	<a class="work-more" href="/our-work">Learn more about our work</a>
</p>

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

	.work-more-wrap {
		margin: 0;
		padding: 0 4rem 4rem;
	}

	.work-more {
		display: inline-block;
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.5rem 1.2rem;
		border-radius: 2rem;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 500;
	}

	@media (max-width: 660px) {
		main,
		.intro,
		#supporters {
			padding: 2rem;
		}

		.work-more-wrap {
			padding: 0 2rem 3rem;
		}

		main {
			padding-bottom: 6rem;
		}
	}
</style>

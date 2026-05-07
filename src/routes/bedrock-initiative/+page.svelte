<script>
	import { onMount } from 'svelte';
	import BedrockWorkstreamCards from '$lib/components/bedrock/BedrockWorkstreamCards.svelte';
	import heroPoster from '$lib/images/nature/bedrock-initiative-hero.png';

	const navSections = [
		{ id: 'overview', label: 'The Challenge' },
		{ id: 'efforts', label: 'The Initiative' },
		{ id: 'funding-and-governance', label: 'Funding and Governance' },
		{ id: 'get-involved', label: 'Get Involved' },
		{ id: 'faq', label: 'FAQ' }
	];

	let active = 'overview';
	let navWrapper;
	let pinned = false;
	const headerOffset = 64;

	function tick() {
		const t = 160;
		active = '';
		for (const s of navSections) {
			const el = document.getElementById(s.id);
			if (el) {
				const r = el.getBoundingClientRect();
				if (r.top <= t && r.bottom > t) {
					active = s.id;
					break;
				}
			}
		}
		if (!active) {
			for (const s of navSections) {
				const el = document.getElementById(s.id);
				if (el) {
					const r = el.getBoundingClientRect();
					if (r.top < window.innerHeight && r.bottom > 0) {
						active = s.id;
						break;
					}
				}
			}
		}
		if (navWrapper) pinned = navWrapper.getBoundingClientRect().top <= headerOffset;
	}

	onMount(() => {
		window.addEventListener('scroll', tick);
		tick();
		return () => window.removeEventListener('scroll', tick);
	});
</script>

<svelte:head>
	<title>Bedrock Initiative - Cascade Climate</title>
	<meta
		name="description"
		content="Strengthening the scientific foundations of enhanced rock weathering through coordinated research and open science."
	/>
</svelte:head>

<div class="bedrock">
	<section id="overview" class="hero">
		<div class="hero-visual">
			<video
				class="hero-image"
				autoplay
				muted
				loop
				playsinline
				preload="metadata"
				poster={heroPoster}
				width="1600"
				height="900"
				aria-hidden="true"
			>
				<source src="/videos/basalt-iceland-video-bedrock.mp4" type="video/mp4" />
			</video>
		</div>
		<div class="hero-inner">
			<div class="hero-copy">
				<p class="eyebrow">ERW Science Acceleration</p>
				<h1>Bedrock Initiative</h1>
				<p class="lede">
					Generating the agronomic and carbon removal evidence needed to bring enhanced rock weathering into compliance carbon markets and government agricultural programs — where it can deliver the most value for farmers and the climate.
				</p>
			</div>
		</div>
	</section>

	<div class="scroll-nav-wrapper" class:pinned bind:this={navWrapper}>
		<div class="scroll-nav-spacer" aria-hidden="true"></div>
		<nav class="scroll-nav">
			{#each navSections as s}
				<a class:active={active === s.id} href="/bedrock-initiative#{s.id}">{s.label}</a>
			{/each}
		</nav>
	</div>

	<section id="challenge" class="band">
		<h2>The Challenge</h2>
		<p>
			ERW has enormous promise. But to conclusively determine its processes and benefits, ambitious and coordinated
			research across diverse geographies is needed. Enhanced Rock Weathering (ERW) builds on a centuries-old agricultural
			practice — applying agricultural lime to manage soil acidity — by using alternative minerals or improved application
			strategies that maximize the permanent removal of atmospheric carbon. The potential benefits are three-fold:
			healthier soils, higher crop yields, and accelerated carbon removal.
		</p>
		<p>
			But critical evidence gaps remain, and if ERW is going to earn the trust of policymakers, markets, and farming
			communities, those gaps need to close at the speed the climate demands.
		</p>
		<ul class="challenge-bullets">
			<li>
				Agronomic evidence is thin — farmers need to know whether ERW will reliably improve their soil or their harvests
			</li>
			<li>
				Carbon removal through ERW depends on local conditions — scientists need to better understand when it happens
				and how it differs across soils, climates, and farming systems.
			</li>
			<li>
				Measurement is expensive — proving carbon removal at scale is too expensive today, and we need to build and
				validate the models needed to bring these costs down
			</li>
		</ul>
	</section>

	<section id="efforts" class="band alt">
		<h2>The Initiative</h2>
		<p>
			Bedrock Initiative fills a gap in the evidence base for ERW — generating research more transparent than
			commercial projects, more coordinated than individual studies, and built to complement both. Across three efforts,
			Bedrock focuses on the questions that individual actors are structurally least able to tackle — longer time
			horizons, broader geographic coverage, and rigorous assessment of agronomic outcomes, with research designs built to
			surface null or inconclusive results alongside positive ones.
		</p>
		<p>
			The goal is to generate the scientific and economic case for ERW spanning the climates, soils, and farming systems
			where ERW shows the most promise, build trust among farmers, and advance the policy mechanisms — compliance carbon
			markets and government agricultural programs — that can drive durable adoption.
		</p>
		<BedrockWorkstreamCards />
	</section>

	<section id="funding-and-governance" class="band">
		<h2>Funding and Governance</h2>
		<p>Bedrock Initiative draws founding support from Frontier, Google, Chan Zuckerberg Initiative, Grantham Foundation, Patrick J. McGovern Foundation, King Philanthropies, Kissick Family Foundation, and Cascade Climate. These catalytic funders will crowd in additional sources of support as the program scales.</p>
		
		<p>
			Bedrock is governed through a Steering Committee for strategic planning and investment decision-making, a
			Scientific Advisory Board for scientific oversight, and fit-for-purpose working groups for on-the-ground
			coordination, experimental design, and data analysis. To learn more, please visit
			<a href="/bedrock-initiative/governance">Governance</a>.
		</p>
	</section>

	<section id="get-involved" class="band alt">
		<h2>Get Involved</h2>
		<p>
			For researchers: Bedrock Initiative is built to serve the scientific community working on ERW and we welcome partners. Email
			<a href="mailto:grants@cascadeclimate.org" target="_blank" rel="noopener">grants@cascadeclimate.org</a>
			to learn how you can get involved.
		</p>
		<p>
			For policymakers: Government agricultural programs, compliance carbon markets, and national GHG inventories all need the same thing from ERW: a reliable and independently validated evidence base. If you are developing policy frameworks where ERW could play a role, we’d welcome a chance to learn more about your needs — and look forward to building toward it. Email our Policy team at
			<a href="mailto:policy@cascadeclimate.org" target="_blank" rel="noopener">policy@cascadeclimate.org</a>.
		</p>
		<p>
			For all other inquiries — whether funding, partnerships, or something we haven't thought of yet — please email
			<a href="mailto:hello@cascadeclimate.org" target="_blank" rel="noopener">hello@cascadeclimate.org</a>.
		</p>
	</section>

	<section id="faq" class="band">
		<h2>FAQ</h2>
		<p class="faq-instruction">Click a question to view the answer</p>

		<details class="faq">
			<summary><span>What is enhanced rock weathering?</span></summary>
			<div class="answer">
				<p>
					ERW builds on a centuries-old agricultural practice — applying crushed minerals to farmland — to permanently
					remove CO<sub>2</sub> from the atmosphere while improving soil health and crop yields. It has particular potential in
					the Global South, where it can sequester carbon and strengthen farmer livelihoods at the same time.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>What is Bedrock Initiative?</span></summary>
			<div class="answer">
				<p>
					Bedrock Initiative is a coordinated research program generating the agronomic and carbon removal evidence that
					ERW needs to enter compliance carbon markets and government agricultural programs. It works across three fronts:
					a coordinated field research network, a model acceleration effort, and studies designed to produce answers
					that only emerge at scale.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>What is Bedrock Initiative not?</span></summary>
			<div class="answer">
				<p>
					Bedrock isn't trying to answer every open question in ERW science, and it isn't a substitute for the important
					work already happening across academic labs and commercial deployments. It fills a specific gap — coordinating
					standardized, transparent research across many geographies at a scale that no single actor is structured to do
					alone.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>Where will CRN sites be located?</span></summary>
			<div class="answer">
				<p>
					The Coordinated Research Network is prioritizing pilot sites in regions that combine high weathering potential,
					meaningful benefits to farmers, and signals of commercial activity — such as but not limited to Brazil, India,
					Kenya, and parts of the United States. The first pilot sites will be selected in 2026, scaling toward a larger
					network of sites over the coming years.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>How will data from CRN sites be shared?</span></summary>
			<div class="answer">
				<p>
					All data will be shared under a non-commercial use license on timelines designed to incentivize rapid,
					high-quality science that the global research community can build on. This data will also complement Cascade's
					broader <a href="https://data.cascadeclimate.org" target="_blank" rel="noopener">Data Quarry</a> platform. To
					learn more, visit the
					<a href="/blog/crn-eoi#faq">Coordinated Research Network FAQ</a>.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>How is Bedrock Initiative governed?</span></summary>
			<div class="answer">
				<p>
					Bedrock is governed through a structure convened and supported by Cascade Climate, including a Steering Committee
					with decision-making authority over funding and the annual operating plan, a Scientific Advisory Board of
					leading researchers providing scientific oversight, and fit-for-purpose working groups that support coordination,
					experimental design, and data analysis across research programs. To learn more, please visit
					<a href="/bedrock-initiative/governance">Governance</a>.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>Who funds Bedrock Initiative?</span></summary>
			<div class="answer">
				<p>
					Bedrock Initiative draws founding support from Frontier, Google, Chan Zuckerberg Initiative, Grantham
					Foundation, Patrick J. McGovern Foundation, King Philanthropies, Kissick Family Foundation, and Cascade
					Climate. These catalytic funders will crowd in additional sources of support as the program scales.
				</p>
			</div>
		</details>

		<details class="faq">
			<summary><span>How does Bedrock relate to Cascade Climate?</span></summary>
			<div class="answer">
				<p>
					Bedrock Initiative is convened and supported by Cascade Climate. This includes fundraising, the coordination
					of the research agenda across the three programs, and the convening of governance and working groups.
				</p>
			</div>
		</details>
	</section>
</div>

<style>
	.bedrock {
		font-size: 1rem;
		padding-bottom: 5rem;
	}

	.hero {
		background: var(--color-dark);
		color: var(--color-light);
		padding: 0;
		overflow: hidden;
		scroll-margin-top: 6rem;
	}

	.hero-visual {
		position: relative;
		line-height: 0;
	}

	.hero-visual::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			color-mix(in srgb, var(--color-dark) 0%, transparent) 0%,
			color-mix(in srgb, var(--color-dark) 0%, transparent) 42%,
			color-mix(in srgb, var(--color-dark) 72%, transparent) 85%,
			var(--color-dark) 100%
		);
	}

	.hero-image {
		width: 100%;
		height: min(42vw, 380px);
		object-fit: cover;
		display: block;
	}

	.hero-inner {
		padding: 2.75rem 4rem 2.65rem;
	}

	.hero-copy {
		max-width: 52rem;
		margin: 0 auto;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.75rem;
		margin: 0 0 0.85rem;
		opacity: 0.88;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0 0 1.15rem;
		max-width: 22ch;
		line-height: 1.15;
	}

	.lede {
		max-width: 52ch;
		margin: 0;
		line-height: 1.62;
		opacity: 0.96;
	}

	.scroll-nav-wrapper.pinned .scroll-nav-spacer {
		min-height: 2.75rem;
	}

	.scroll-nav-wrapper.pinned .scroll-nav {
		position: fixed;
		left: 0;
		right: 0;
		top: calc(4rem - 1px);
		width: 100%;
		z-index: 10;
		box-shadow: 0 6px 28px color-mix(in srgb, var(--color-dark) 35%, transparent);
	}

	nav.scroll-nav {
		position: sticky;
		top: calc(4rem - 1px);
		z-index: 10;
		background-color: var(--color-dark);
		color: var(--color-light);
		border-top: 1px solid color-mix(in srgb, var(--color-light) 65%, transparent);
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		transition: box-shadow 0.2s ease;
	}

	nav.scroll-nav a {
		flex: 1 1 0;
		min-width: 0;
		padding: 0.7rem 0.5rem;
		font-size: 1rem;
		text-decoration: none;
		color: inherit;
		text-align: center;
		border: 1px solid color-mix(in srgb, var(--color-light) 55%, transparent);
		margin: -1px 0 0 -1px;
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
	}

	nav.scroll-nav a.active {
		background: var(--color-light);
		color: var(--color-dark);
	}

	.band {
		padding: 3rem 4rem;
		scroll-margin-top: 6rem;
		border-top: 1px solid color-mix(in srgb, var(--color-dark) 8%, transparent);
	}

	.band.alt {
		background: color-mix(in srgb, var(--color-dark) 7.5%, var(--color-light) 92.5%);
	}

	.band > h2,
	.band > p,
	.band > ul.challenge-bullets {
		max-width: 52rem;
		margin-left: auto;
		margin-right: auto;
	}

	.band > h2 {
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--color-dark);
		margin: 0 auto 1.25rem;
		letter-spacing: -0.02em;
		line-height: 1.25;
	}

	.band > p {
		line-height: 1.62;
		margin: 0 auto 1.1rem;
		color: color-mix(in srgb, var(--color-text) 92%, var(--color-dark));
	}

	.band > p:last-child {
		margin-bottom: 0;
	}

	.band :global(.grid) {
		margin-top: 2.5rem;
		max-width: none;
		margin-left: 0;
		margin-right: 0;
	}

	.band a {
		color: var(--color-accent);
		text-decoration: underline;
		text-underline-offset: 0.18em;
		text-decoration-thickness: 1px;
		transition: opacity 0.15s ease;
	}

	.band a:hover {
		opacity: 0.88;
	}

	.challenge-bullets {
		margin: 1.25rem auto 0;
		padding-left: 1.45rem;
		list-style-type: disc;
	}

	.challenge-bullets li {
		margin-bottom: 0.75rem;
		line-height: 1.58;
		padding-left: 0.35rem;
	}

	.challenge-bullets li::marker {
		color: color-mix(in srgb, var(--color-accent) 75%, var(--color-dark));
	}

	.challenge-bullets li:last-child {
		margin-bottom: 0;
	}

	section#faq > h2,
	section#faq > .faq-instruction,
	section#faq > details.faq {
		max-width: 52rem;
		margin-left: auto;
		margin-right: auto;
	}

	.faq-instruction {
		margin: 0 auto 1.35rem;
		font-size: 0.95rem;
		color: color-mix(in srgb, var(--color-dark) 72%, transparent);
	}

	details.faq {
		scroll-margin-top: 6rem;
		margin: 0.65rem 0;
		border: 1px solid color-mix(in srgb, var(--color-dark) 16%, transparent);
		border-radius: 12px;
		background: color-mix(in srgb, var(--color-dark) 4.5%, var(--color-light));
		overflow: clip;
		box-shadow: 0 1px 0 color-mix(in srgb, var(--color-dark) 6%, transparent);
		transition:
			border-color 0.18s ease,
			box-shadow 0.18s ease;
	}

	details.faq[open] {
		border-color: color-mix(in srgb, var(--color-dark) 22%, transparent);
		box-shadow:
			0 1px 0 color-mix(in srgb, var(--color-dark) 6%, transparent),
			0 8px 28px color-mix(in srgb, var(--color-dark) 8%, transparent);
	}

	details.faq > summary {
		list-style: none;
		cursor: pointer;
		padding: 0.95rem 1.15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		color: var(--color-dark);
		transition: background-color 0.15s ease;
	}

	details.faq[open] > summary {
		background: color-mix(in srgb, var(--color-dark) 5%, var(--color-light));
	}

	details.faq > summary::-webkit-details-marker {
		display: none;
	}

	details.faq > summary > span {
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.38;
		letter-spacing: -0.015em;
	}

	details.faq > summary::after {
		content: '+';
		flex-shrink: 0;
		font-size: 1.15rem;
		line-height: 1;
		opacity: 0.72;
		font-weight: 400;
	}

	details.faq[open] > summary::after {
		content: '–';
		opacity: 0.85;
	}

	details.faq .answer {
		padding: 0 1.15rem 1.1rem;
		color: color-mix(in srgb, var(--color-text) 94%, var(--color-dark));
	}

	details.faq .answer :global(a) {
		color: var(--color-accent);
		text-underline-offset: 0.18em;
	}

	details.faq .answer :global(p) {
		margin: 0;
		line-height: 1.6;
	}

	details.faq .answer :global(p + p) {
		margin-top: 0.65rem;
	}

	details.faq > summary:focus-visible {
		outline: 2px solid color-mix(in srgb, var(--color-highlight) 85%, transparent);
		outline-offset: 2px;
		border-radius: 10px;
	}

	@media (max-width: 660px) {
		.hero-inner,
		.band {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.hero-image {
			height: min(48vw, 280px);
		}
	}
</style>

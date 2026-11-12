<script>
	import { onMount } from 'svelte';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import andes from '$lib/images/logos/andes.webp';
    import carbonaught from '$lib/images/logos/carbonaught.webp';
    import eion from '$lib/images/logos/eion.webp';
    import flux from '$lib/images/logos/flux.webp';
    import frontier from '$lib/images/logos/frontier.webp';
    import inplanet from '$lib/images/logos/inplanet.webp';
    import mati from '$lib/images/logos/mati.webp';
    import milkywire from '$lib/images/logos/milkywire.webp';
    import terradot from '$lib/images/logos/terradot.webp';
    import v6agronomy from '$lib/images/logos/v6agronomy.webp';
    import zeroex from '$lib/images/logos/zeroex.webp';
    import DSSprocess from '$lib/images/blog/data-sharing-system-process-schematic.webp';
    import data from '$lib/images/nature/data.webp';
    import basicdust from '$lib/images/logos/basicdust.webp';
    import carbony from '$lib/images/logos/carbony.webp';
    import cdi from '$lib/images/logos/CDI.webp';
    import searrp from '$lib/images/logos/SEARPP.webp';
    import silica from '$lib/images/logos/silica.webp';
    import ucanr from '$lib/images/logos/UCANR.webp';
    import uiuc from '$lib/images/logos/UIUC.webp';
    import undo from '$lib/images/logos/undo.webp';
    import varaha from '$lib/images/logos/varaha.webp';
    import terrasols from '$lib/images/logos/terrasols.webp';

	const rockFlourLogo = '/images/logos/rock-flour-transparent.png';

	const sections = [
		{ id: 'the-oppportunity', title: 'The Opportunity' },
		{ id: 'the-action', title: 'The Action' },
		{ id: 'the-data-quarry-solution', title: 'The ERW Data Quarry Solution' },
		{ id: 'next-steps', title: 'Next Steps' },
		{ id: 'post-script', title: 'Post Script: Additional Details' }
	];

	let active = sections[0].id;
	let navWrapper;
	let navEl;
	let navHeight = 0;
	let pinned = false;
	const headerOffset = 64;

	function tick() {
		const line = 160;
		let next = '';
		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			if (rect.top <= line && rect.bottom > line) {
				next = section.id;
				break;
			}
		}
		if (!next) {
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					next = section.id;
					break;
				}
			}
		}
		if (next) active = next;
		if (navEl) navHeight = navEl.offsetHeight;
		if (navWrapper) pinned = navWrapper.getBoundingClientRect().top <= headerOffset;
	}

	onMount(() => {
		window.addEventListener('scroll', tick, { passive: true });
		tick();
		return () => window.removeEventListener('scroll', tick);
	});
</script>

<svelte:head>
	<title>ERW Data Quarry: A Data Sharing System for Enhanced Rock Weathering - Cascade Climate</title>
</svelte:head>

<div class="dq-page">
	<section class="hero">
		<div class="hero-copy">
			<h1>ERW Data Quarry: A Data Sharing System for Enhanced Rock Weathering</h1>
			<div class="hero-actions">
				<a class="cta" href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">Access the ERW Data Quarry↗</a>
			</div>
			<p>
				Enhanced rock weathering (ERW) offers meaningful carbon removal alongside the promise of healthier soils and higher crop yields. Researchers need detailed field data to understand how much carbon it can remove, where and to what extent it benefits crops, and how to deploy and scale the practice safely and sustainably.
			</p>
			<p>
				Launched in May 2025, the ERW Data Quarry makes data from commercial projects and field trials available for non-commercial research.
			</p>
			<div class="hero-actions">
				<a class="cta" href="/erw/dq-updates">ERW Data Quarry: Latest Updates↗</a>
				<a class="cta" href="/erw-dq-upcoming">Explore available and forthcoming datasets↗</a>
			</div>
			<p>
				<strong>To learn more about the state of ERW science, how the Data Quarry works, and flagship contributors, scroll to read more.</strong>
			</p>
		</div>
		<img class="hero-photo" src={data} alt="Enhanced Rock Weathering" />
	</section>

	<div class="scroll-nav-wrapper" class:pinned bind:this={navWrapper}>
		<div class="scroll-nav-spacer" style:height={pinned ? `${navHeight}px` : '0'} aria-hidden="true"></div>
		<nav class="scroll-nav" aria-label="On this page" bind:this={navEl}>
			{#each sections as section}
				<a class:active={active === section.id} href="#{section.id}">{section.title}</a>
			{/each}
		</nav>
	</div>

	<main class="article">
		<section id="the-oppportunity" class="section">
			<h1>The Opportunity</h1>
			<p>
				Enhanced Rock Weathering (ERW) has the potential to deliver meaningful carbon removal alongside agriculture benefits. Yet there remains a number of open scientific questions related to <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>carbon removal quantification</em></a> and safety that will be critical to address to unlock this potential.
			</p>
			<p>
				Without addressing these open questions, the ERW field risks being stuck in a limited-demand future: one in which substantial uncertainty discounting, expensive, measurement-intensive quantification, field heterogeneity, and an incomplete health and safety regulatory framework limits ERW’s ability to scale. We don’t want this future for ERW. We want to quickly, transparently, and collaboratively answer these open questions to help ERW reach its full climate and agronomic impact potential.
			</p>
			<p>
				<strong>But answering these questions requires data. Granular, real-world data. And lots of it.</strong>
			</p>
			<p>
				Unlocking commercial ERW datasets to answer the most pressing scientific questions facing the field can help to jumpstart a virtuous cycle of <a href="https://cascadeclimate.org/blog/foundations-for-a-healthy-erw-market-cycle" target="_blank" rel="noopener">deployment-led learning</a>. In a deployment-led learning scenario, real-world deployments help further scientific understanding, which builds trust in the process, unlocking more deployments, and more carbon and farmer benefits.
			</p>

            <p><em>Why tap into commercial datasets?&nbsp;</em></p>
            <ul>
                <li>First, commercial datasets are <strong>big</strong>. The majority of academic research draws from just a handful of ERW trial locations. In contrast, commercial ERW deployments are expected to top 20,000 hectares this year, representing over 200x more area than all academic field trials combined.<sup><a id="citation1" href="#footnote1">1</a></sup></li>
                <li>Second, commercial datasets are <strong>diverse</strong>, set across a wide range of soil, climate, and feedstock types. This diversity is crucial to help understand ERW&rsquo;s effectiveness across a broad suite of contexts, and not just in the Global North where much of the academic research has taken place to date.&nbsp;</li>
                <li>Third, commercial datasets are <strong>detailed</strong>. Many ERW project developers are robustly sampling their ERW deployments to characterize the netCDR of these projects. Maximizing learning from these datasets will unlock the scientific understanding needed to scale the field.</li>
                </ul>

            <h2>The Challenge:</h2>
            <p>In practice, commercial data sharing is hard for three major reasons. First, ERW companies have invested millions of dollars into data collection. Data can be seen as proprietary; for example, helping companies identify optimal deployment locations or feedstocks. Second, these companies have responsibilities around farmer data privacy which need to be taken seriously, as ERW relies on the trust and collaboration of farmers around the world. Finally, there is a meaningful collective action issue for market participants: <i>“Why should I share? How do I know others will do the same?”</i></p>
            <p>Layer these challenges together, and it’s easy for the field to remain trapped in the status quo of limited researcher access to commercial data. Many ERW companies are engaged in individual research collaborations with external partners, leading to important, albeit slow, steps forward on specific research topics in specific regions. But to respond to the climate emergency, we need the power of multiple datasets, across multiple contexts, in the hands of multiple researchers to rapidly advance the state of ERW science.</p>
        </section>

            <section id="the-action" class="section">
            <h1>The Action</h1>
            <p>We are incredibly energized to launch the <a href="https://data.cascadeclimate.org" target="_blank" rel="noopener">ERW Data Quarry</a> – the first-ever ERW data sharing system – together with <b>9 leading ERW companies</b> who have proactively committed to sharing datasets as a part of this system. This is one of the first systems of its kind to proactively share commercial data for the benefit of broad scientific learning in the CDR space. Each of the following companies have committed to sharing specific dataset(s) tied to individual deployments, within a set time frame, through this system. </p>

            <h2>The 9 Flagship Data Quarry contributors included</h2>

            <section id="supporters">
                <div id="supporters-container">
                    <a href="https://www.andes.bio/" target="_blank" rel="noopener">
                        <img src={andes} alt="Andes" />
                    </a>
                    <a href="https://www.carbonaught.io/" target="_blank" rel="noopener">
                        <img src={carbonaught} alt="Carbonaught" />
                    </a>
                    <a href="https://eioncarbon.com/" target="_blank" rel="noopener">
                        <img src={eion} alt="Eion" />
                    </a>
                    <a href="https://www.fluxcarbon.earth/" target="_blank" rel="noopener">
                        <img src={flux} alt="Flux" />
                    </a>
                    <a href="https://inplanet.earth/" target="_blank" rel="noopener">
                        <img src={inplanet} alt="InPlanet" />
                    </a>
                    <a href="https://www.mati.earth/" target="_blank" rel="noopener">
                        <img src={mati} alt="Mati" />
                    </a>
                    <a href="https://terradot.earth/" target="_blank" rel="noopener">
                        <img src={terradot} alt="Terradot" />
                    </a>
                    <a href="https://v6agronomy.ca/" target="_blank" rel="noopener">
                        <img src={v6agronomy} alt="v6 Agronomyx" />
                    </a>
                    <a href="https://zeroex.com/" target="_blank" rel="noopener">
                        <img src={zeroex} alt="ZeroEx" />
                    </a>
                </div>
            </section>

            <h2>New Data Quarry contributors include:</h2>

            <section id="supporters">
                <div id="supporters-container">
                    <a href="https://basicdust.com/" target="_blank" rel="noopener">
                        <img src={basicdust} alt="Basic Dust" />
                    </a>
                    <a href="https://www.carbon-drawdown.de/home" target="_blank" rel="noopener">
                        <img src={cdi} alt="Carbon Drawdown Initiative" />
                    </a>
                    <a href="https://www.carbony.earth/" target="_blank" rel="noopener">
                        <img src={carbony} alt="Carbony" />
                    </a>
                    <a href="https://energyfarm.illinois.edu/" target="_blank" rel="noopener">
                        <img src={uiuc} alt="University of Illinois Urbana-Champaign" />
                    </a>
                    <a href="https://silica.earth/" target="_blank" rel="noopener">
                        <img src={silica} alt="Silica" />
                    </a>
                    <a href="https://www.searrp.org/" target="_blank" rel="noopener">
                        <img src={searrp} alt="South East Asia Rainforest Research Partnership" />
                    </a>
                    <div class="contributor-logo-stack">
                        <a href="https://www.terrasols.earth/" target="_blank" rel="noopener">
                            <img src={terrasols} alt="Terrasols" />
                        </a>
                        <a href="https://www.rockflour.co/" target="_blank" rel="noopener noreferrer">
                            <img class="rock-flour-logo" src={rockFlourLogo} alt="Rock Flour Company" />
                        </a>
                    </div>
                    <a href="https://ucanr.edu/research-and-extension-center/sierra-foothill-research-and-extension-center" target="_blank" rel="noopener">
                        <img src={ucanr} alt="UC Agriculture and Natural Resources Cooperative Extension" />
                    </a>
                    <a href="https://un-do.com/" target="_blank" rel="noopener">
                        <img src={undo} alt="UNDO" />
                    </a>
                    <a href="https://varaha.earth/" target="_blank" rel="noopener">
                        <img src={varaha} alt="Varaha" />
                    </a>
                </div>
            </section>

            <p>All projects supported through <a href="/blog/erw-field-grant-awardees" target="_blank" rel="noopener">Cascade's Field Data Partnership Grants program</a> will contribute datasets to DQ.</p>

            <p>Leading catalytic buyers have also committed to community-wide data sharing, requiring dataset contributions to the Data Quarry as part of future ERW purchases. These buyers include: 
            </p>

            <section id="supporters">
                <div id="supporters-container">
                    <a href="https://frontierclimate.com/" target="_blank" rel="noopener">
                        <img width="680" height="365" src={frontier} alt="Frontier" />
                    </a>
                    <a href="https://www.milkywire.com/" target="_blank" rel="noopener">
                        <img width="680" height="365" src={milkywire} alt="MilkyWire" />
                    </a>
                </div>
            </section>

            <p>These leading companies are committing to sharing data through the following system:</p>
        </section>

		<section id="the-data-quarry-solution" class="section">
			<h1>The ERW Data Quarry Solution</h1>
			<p>
				Finding the right balance between transparency, speed, and commercial interests is a delicate balancing act. Through dozens of stakeholder listening sessions and iterative designs, Cascade developed the ERW Data Quarry to navigate these tensions by building around the following core principles:
			</p>

            <ol>
                <li><strong>Focus on priority questions: </strong>Building on the <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>&ldquo;Foundations&rdquo;</em></a> process, we have identified four priority research topics that commercial datasets can help address. These questions informed the variables collected through the Data Quarry system.</li>
                <li><strong>Segment initial access: </strong>Health and safety data will be made fully public to build trust in the safety of ERW. Additional data will be made available to researchers through a proposal-based request system.</li>
                <li><strong>Fair use:</strong> A commitment to use data shared for advancing scientific learning &ndash; not for commercial purposes.</li>
                <li><strong>Build on existing data norms: </strong>Consistent with farmer data sharing norms, ensure farmers&rsquo; consent to data sharing and anonymize location data to protect farmer privacy. Consistent with academic norms, make datasets used for peer-reviewed articles public upon publication.&nbsp;</li>
                <li><strong>Complement to existing market infrastructure:</strong> The Data Quarry focuses on advancing the state of ERW science, and not on validating carbon claims. It is in no way a replacement for the critical role that registries, validation and verification bodies (VVBs), and other carbon market integrity initiatives play in the ecosystem.&nbsp;</li>
                </ol>

            <p>A detailed description of how we are putting these principles into action is available in the <a href="#post-script">post-script</a>.</p>

		</section>
		<section id="next-steps" class="section">
			<h1>Next Steps</h1>

            <p>Reach out to <a href="mailto:data@cascadeclimate.org" target="_blank" rel="noopener">data@cascadeclimate.org</a> if:</p>

            <ul>
                <li><strong>ERW Companies:</strong> You&rsquo;d like to be part of the movement to build a healthy ERW market.</li>
                <li><strong>Buyers:</strong> You are interested in playing a catalytic role in advancing the ERW field.</li>
                <li><strong>Researchers:&nbsp;</strong>If you are interested in accessing commercial ERW data and/or collaborating with leading ERW companies, go straight to <a href="http://data.cascadeclimate.org" target="_blank" rel="noopener">Data Quarry</a> and sign up for an account. You can also sign up for notifications when additional datasets are added by joining the Google Group <a href="https://groups.google.com/a/cascadeclimate.org/g/notifs-dataquarry" target="_blank" rel="noopener">here</a>.</li>
                <ul>
                <li>Commercial datasets are just one part of the puzzle. More complete and accessible datasets from non-commercial field trials can also help advance the state of the field. If you have data from an ERW field trial and would like to be part of advancing the state of ERW science, please reach out.&nbsp;</li>
                </ul>
                <li><strong>For Anyone Else:</strong> You are interested in following along in this journey, sign up for our general newsletter <a href="https://docs.google.com/forms/d/e/1FAIpQLScYIERiJVoobnCRYQ8uYmFuHm7_jsyR67Aw1XbfiFdzAYx-sw/viewform?pli=1&pli=1" target="_blank" rel="noopener">here</a>.&nbsp;</li>
            </ul>

			<p>
				We hope that this data sharing system is just the beginning. The organizations committing to the Data Quarry have recognized that the field will grow faster through collaboration and shared learning than if research is conducted in silos – and that they can tap into additional scientific resources as world class researchers build on their work. As researchers begin to connect with commercial datasets, new collaborations between partners proliferate, and scientific understanding of ERW advances, collectively, we’ll learn a lot more than we would have otherwise.
			</p>
			<p>
				At Cascade, we are committed to stewarding this data sharing process to support the ERW community in advancing the most pressing scientific questions. We expect to learn a few things about unlocking deployment-led learning that can help other climate pathways along the way.
			</p>
			<p>
				As of November 2026, ten unique datasets are available in the Data Quarry, each a window into a real-world ERW project. To preview these contributions and insights so far, see 'Latest Updates.'
			</p>
			<p class="section-cta">
				<a class="cta" href="/erw/dq-updates">ERW Data Quarry: Latest Updates↗</a>
			</p>
		</section>

        <section id="post-script" class="section">
			<h1>Post Script: Additional Details</h1>
            <h2>Data Flow</h2>
            <p>The data system is comprised of two components:</p>
                <ol>
                <li><strong>A Publicly Accessible Data Source: </strong>This includes: a) all health and safety data, and b) datasets that have been used for academic peer reviewed articles, released at the time of article publication. CarbonPlan has developed <a href="https://cdrxiv.org" target="_blank" rel="noopener">CDRXIV</a>, a new centralized hub for open academic and commercial CDR preprints and data, which is the public repository.</li>
                <li><strong>A Permissioned Data Catalog: </strong>Cascade hosts the ERW Data Quarry that provides a description of the datasets and variables available. Researchers are able to request access to individual datasets by submitting a brief research proposal and a conflict of interest statement. A neutral governing board determines dataset release based on: a) if there are any credible conflicts of interest, and b) if the research proposal relates to advancing ERW science. Research proposals will be shared with the Data Quarry community to facilitate collaboration across research groups. For more details, please visit <a href="https://data.cascadeclimate.org" target="_blank" rel="noopener">data.cascadeclimate.org</a>.</li>
                </ol>
            <p>See Figure 1 for a summary of the data flow described above.</p>
            <figure class="figure-block">
                <img class="figure-image" src={DSSprocess} alt="Figure 1: Data Sharing System Process Schematic" />
                <figcaption><em>Figure 1:</em> How datasets and information flow across organizations</figcaption>
            </figure>

<h2>Data Variables:</h2>
<p>Whenever possible, datasets in the Data Quarry will share a common set of core variables, as listed in the pdf below. These variables were selected based on their importance to answering the highest priority research questions that overlap with data collected in commercial deployments.</p>
<div class="variable-list">
	<PDFLink link="/cascadeclimate-data-quarry-variable-list.pdf" target="_blank" rel="noopener" variant="accent">ERW Data Quarry Variable List↗</PDFLink>
</div>
<p></p>
<p>Building on learnings from the <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>&ldquo;Foundations&rdquo;</em></a> process, these research themes are:&nbsp;&nbsp;</p>
<ol>
<li>Health and safety</li>
<li>Time lags in carbon removal</li>
<li>Dissolution rates</li>
<li>Soil organic carbon fluxes</li>
</ol>
<p>Data will be provided at the individual sample level, anonymized to the administrative district to protect farmer anonymity. Quality metadata, consistent with <a href="https://www.go-fair.org/fair-principles/" target="_blank" rel="noopener">FAIR principles</a>, will be enforced to ensure datasets are usable for research purposes.&nbsp;</p>
<h2>Outputs:</h2>
<p>Scientific understanding will be advanced primarily through peer-reviewed article publications to build our collective understanding of ERW processes. In addition, Cascade is committed to an annual &lsquo;State of the Science&rsquo; white paper to facilitate rapid dissemination of insights drawn from the full set of data available.</p>
<h2>How We Got Here:</h2>
<p>Cascade hosted over 50 listening sessions with academics, project developers, and buyers to develop a data sharing system that addresses each community&rsquo;s concerns. We also reviewed over twenty analog data sharing systems across a range of fields, from cancer research to ocean exploration to soil organic carbon.</p>


<h3>Footnotes</h3>
	<ol>
		<li id="footnote1">
            Based on a survey conducted with 16 project developers, analysis of publicly announced deployments and a scan of published ERW field trials.
			<a href="#citation1">↩</a>
		</li>
	</ol>

        </section>
	</main>
</div>

<style>
	.dq-page {
		background: var(--color-light);
		color: var(--color-text);
		font-size: 1rem;
		line-height: 1.62;
	}

	.dq-page img {
		max-width: 100%;
	}

	.hero {
		display: flex;
		align-items: center;
		gap: 2.5rem;
		background: var(--color-dark);
		color: var(--color-light);
		padding: calc(4rem + 2.75rem) 4rem 2.65rem;
	}

	.hero-copy {
		flex: 1 1 34rem;
		max-width: 48rem;
	}

	.hero-photo {
		flex: 1 1 22rem;
		width: 40%;
		max-width: 40%;
		height: 18rem;
		object-fit: cover;
		border-radius: 1rem;
		margin: 0;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1.15;
		margin: 0 0 0.85rem;
		max-width: 18em;
	}

	.hero p {
		max-width: 68ch;
		margin: 0 0 1rem;
		line-height: 1.62;
	}

	.hero strong {
		font-weight: 650;
	}

	.hero a {
		color: var(--color-highlight);
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: flex-start;
		margin: 1.35rem 0;
	}

	.hero-actions:last-child {
		margin-bottom: 0;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		padding: 0.55rem 1.35rem;
		border-radius: 2rem;
		background: var(--color-accent);
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.3;
		border: 1px solid transparent;
	}

	.cta:hover {
		opacity: 0.92;
	}

	.variable-list {
		margin: 0.35rem 0 1.25rem;
	}

	.variable-list :global(button) {
		display: inline-flex;
		align-items: center;
		width: auto;
		flex-grow: 0;
		padding: 0.55rem 1.35rem;
		border-radius: 2rem;
		background: var(--color-accent);
		color: var(--color-light);
		font-family: inherit;
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.3;
		border: 1px solid transparent;
		cursor: pointer;
	}

	.variable-list :global(button:hover) {
		opacity: 0.92;
	}

	.hero a.cta,
	.hero a.cta:hover {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
	}

	.scroll-nav-spacer {
		display: block;
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
		background: var(--color-dark);
		color: var(--color-light);
		border-top: 1px solid color-mix(in srgb, var(--color-light) 65%, transparent);
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	nav.scroll-nav a {
		flex: 1 1 0;
		min-width: 0;
		padding: 0.65rem 0.5rem;
		font-size: 0.84rem;
		line-height: 1.35;
		text-decoration: none;
		color: inherit;
		font-weight: 400;
		text-align: center;
		border: 1px solid color-mix(in srgb, var(--color-light) 55%, transparent);
		margin: -1px 0 0 -1px;
	}

	nav.scroll-nav a.active {
		background: var(--color-light);
		color: var(--color-dark);
	}

	.article {
		max-width: 78rem;
		margin: 0 auto;
		padding: 2rem 4rem 6rem;
	}

	.article p {
		margin: 0 0 1rem;
		line-height: 1.62;
	}

	.article h1,
	.article h2 {
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.25;
		margin: 0 0 1rem;
	}

	.article h3 {
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.25;
		margin: 2rem 0 1rem;
	}

	.section {
		scroll-margin-top: 9.5rem;
		margin-top: 2.5rem;
	}

	.section:first-of-type {
		margin-top: 1.5rem;
	}

	.article a {
		color: #023c40;
		font-weight: 500;
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.article a:hover {
		color: #023c40;
	}

	.article a.cta,
	.article a.cta:hover {
		color: var(--color-light);
		text-decoration: none;
		font-weight: 500;
	}

	.section-cta {
		margin: 0.35rem 0 1.25rem;
	}

	.article ul,
	.article ol {
		margin: 0 0 1rem;
		padding-left: 1.35rem;
		line-height: 1.58;
	}

	.article li {
		margin-bottom: 0.65rem;
	}

	.section h2 ~ h2 {
		margin-top: 2.5rem;
	}

	.figure-block {
		margin: 0 0 1.25rem;
	}

	.figure-image {
		display: block;
		width: 100%;
		height: auto;
		margin: 0 auto;
		border-radius: 0.5rem;
	}

	.figure-block figcaption {
		margin: 0.65rem 0 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	#supporters {
		padding: 0.25rem 0 1.25rem;
		border: none;
	}

	#supporters-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 0.25rem;
		width: 100%;
	}

	.contributor-logo-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	#supporters a {
		color: inherit;
		text-decoration: none;
		font-weight: 400;
	}

	#supporters img {
		width: 256px;
		height: 100px;
		object-fit: contain;
		transition: scale 0.2s ease-out;
		margin: auto;
		display: block;
	}

	#supporters img:hover {
		scale: 1.1;
	}

	.dq-page :focus-visible {
		outline: 2px solid color-mix(in srgb, var(--color-highlight) 85%, transparent);
		outline-offset: 3px;
	}

	@media (max-width: 960px) {
		.hero {
			flex-direction: column;
			align-items: stretch;
		}

		.hero-photo {
			width: 100%;
			max-width: none;
			height: 14rem;
		}
	}

	@media (max-width: 660px) {
		.hero,
		.article {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.hero {
			padding-top: calc(4rem + 1.5rem);
		}

		nav.scroll-nav,
		.scroll-nav-wrapper.pinned .scroll-nav {
			position: static;
			top: auto;
			left: auto;
			right: auto;
			width: auto;
			box-shadow: none;
		}

		.scroll-nav-spacer {
			display: none;
		}

		nav.scroll-nav a {
			flex: 1 1 100%;
			text-align: left;
			padding-left: 1rem;
		}
	}
</style>

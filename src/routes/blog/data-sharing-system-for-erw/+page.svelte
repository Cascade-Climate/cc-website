<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import altcarbon from '$lib/images/logos/altcarbon.webp';
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
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Introducing the ERW Data Quarry: A Data Sharing System for Enhanced Rock Weathering</h1>
                <div class="links">
                    <a href="/blog/data-quarry-announcement">Read about the ERW Data Quarry Launch↗</a>
                </div>
                <p></p>
				<p>
					Enhanced Rock Weathering (ERW) has the potential to deliver meaningful carbon removal alongside agriculture benefits. Yet there remains a number of open scientific questions related to <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener" style="color: white; text-decoration: underline;"><em> carbon removal quantification↗ </em></a> and safety that will be critical to address to unlock this potential.
				</p><br>
				<p>
					Without addressing these open questions, the ERW field risks being stuck in a limited-demand future: one in which substantial uncertainty discounting, expensive, measurement-intensive quantification, field heterogeneity, and an incomplete health and safety regulatory framework limits ERW’s ability to scale. We don’t want this future for ERW. We want to quickly, transparently, and collaboratively answer these open questions to help ERW reach its full climate and agronomic impact potential.
				</p><br>
                <strong>
                    But answering these questions requires data. Granular, real-world data. And lots of it.
                </strong>
                <p></p>
                <div class="links">
                    <a href="https://data.cascadeclimate.org/" target="_blank" rel="noopener">Access the ERW Data Quarry↗</a>
                </div>
			</div>
            <img src={data} alt="Enhanced Rock Weathering" />
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="the-oppportunity">
			<h1>The Opportunity</h1>
			<p>
				Unlocking commercial ERW datasets to answer the most pressing scientific questions facing the field can help to jumpstart a virtuous cycle of <a href="https://cascadeclimate.org/blog/foundations-for-a-healthy-erw-market-cycle" target="_blank" rel="noopener">deployment-led learning</a>. In a deployment-led learning scenario, real-world deployments help further scientific understanding, which builds trust in the process, unlocking more deployments, and more carbon and farmer benefits.
			</p>

            <p style="margin: 0;"><em>Why tap into commercial datasets?&nbsp;</em></p>
            <ul style="margin: 0;">
                <li>First, commercial datasets are <strong>big</strong>. The majority of academic research draws from just a handful of ERW trial locations. In contrast, commercial ERW deployments are expected to top 20,000 hectares this year, representing over 200x more area than all academic field trials combined.<sup><a id="citation1" href="#footnote1">1</a></sup></li>
                <li>Second, commercial datasets are <strong>diverse</strong>, set across a wide range of soil, climate, and feedstock types. This diversity is crucial to help understand ERW&rsquo;s effectiveness across a broad suite of contexts, and not just in the Global North where much of the academic research has taken place to date.&nbsp;</li>
                <li>Third, commercial datasets are <strong>detailed</strong>. Many ERW project developers are robustly sampling their ERW deployments to characterize the netCDR of these projects. Maximizing learning from these datasets will unlock the scientific understanding needed to scale the field.</li>
                </ul>

            <h2>The Challenge:</h2>
            <p>In practice, commercial data sharing is hard for three major reasons. First, ERW companies have invested millions of dollars into data collection. Data can be seen as proprietary; for example, helping companies identify optimal deployment locations or feedstocks. Second, these companies have responsibilities around farmer data privacy which need to be taken seriously, as ERW relies on the trust and collaboration of farmers around the world. Finally, there is a meaningful collective action issue for market participants: <i>“Why should I share? How do I know others will do the same?”</i></p>
            <p>Layer these challenges together, and it’s easy for the field to remain trapped in the status quo of limited researcher access to commercial data. Many ERW companies are engaged in individual research collaborations with external partners, leading to important, albeit slow, steps forward on specific research topics in specific regions. But to respond to the climate emergency, we need the power of multiple datasets, across multiple contexts, in the hands of multiple researchers to rapidly advance the state of ERW science.</p>
        </section>

            <section id="the-action">
            <h1>The Action</h1>
            <p>We are incredibly energized to launch the <a href="https://data.cascadeclimate.org" target="_blank" rel="noopener">ERW Data Quarry</a>–the first-ever ERW data sharing system–together with <b>10 leading ERW companies</b> who have proactively committed to sharing datasets as a part of this system. This is one of the first systems of its kind to proactively share commercial data for the benefit of broad scientific learning in the CDR space. Each of the following companies have committed to sharing specific dataset(s) tied to individual deployments, within a set time frame, through this system. </p>

            <h2>The 10 Flagship Data Quarry contributors include:</h2>
            <br>

            <section id="supporters">
                <div id="supporters-container">
                    <a href="https://www.alt-carbon.com/" target="_blank" rel="noopener">
                        <img src={altcarbon} alt="Alt Carbon" />
                    </a>
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
            <br>

            <h2>New Data Quarry contributors include:</h2>
            <br>

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
            <br>


            <p>All projects supported through <a href="/blog/erw-field-grant-awardees" target="_blank" rel="noopener">Cascade's Field Data Partnership Grants program</a> will contribute datasets to DQ.</p>

            <p></p>

            <p>Leading catalytic buyers have also committed to community-wide data sharing, requiring dataset contributions to the Data Quarry as part of future ERW purchases. These buyers include: 
            </p><br>

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
            <p></p><br>

            <p>These leading companies are committing to sharing data through the following system:</p>
        </section>

		<section id="the-data-quarry-solution">
			<h1>The ERW Data Quarry Solution</h1>
			<p>
				Finding the right balance between transparency, speed, and commercial interests is a delicate balancing act. Through dozens of stakeholder listening sessions and iterative designs, Cascade has developed the ERW Data Quarry to navigate these tensions by building around the following core principles:
			</p>

            <ol style="margin: 0;">
                <li><strong>Focus on priority questions: </strong>Building on the <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>&ldquo;Foundations&rdquo;↗ </em></a> process, we have identified four priority research topics that commercial datasets can help address. These questions informed the variables collected through the Data Quarry system.</li>
                <li><strong>Segment initial access: </strong>Health and safety data will be made fully public to build trust in the safety of ERW. Additional data will be made available to researchers through a proposal-based request system.</li>
                <li><strong>Fair use:</strong> A commitment to use data shared for advancing scientific learning&ndash;not for commercial purposes.</li>
                <li><strong>Build on existing data norms: </strong>Consistent with farmer data sharing norms, ensure farmers&rsquo; consent to data sharing and anonymize location data to protect farmer privacy. Consistent with academic norms, make datasets used for peer-reviewed articles public upon publication.&nbsp;</li>
                <li><strong>Complement to existing market infrastructure:</strong> The Data Quarry focuses on advancing the state of ERW science, and not on validating carbon claims. It is in no way a replacement for the critical role that registries, validation and verification bodies (VVBs), and other carbon market integrity initiatives play in the ecosystem.&nbsp;</li>
                </ol>

            <p>A detailed description of how we are putting these principles into action is available in the post-script below.</p>

		</section>
		<section id="next-steps">
			<h1>Next Steps</h1>

            <p>Reach out to <a href="mailto:data@cascadeclimate.org" target="_blank" rel="noopener">data@cascadeclimate.org</a> if:</p>

            <ul style="margin: 0;">
                <li><strong>ERW Companies:</strong> You&rsquo;d like to be part of the movement to build a healthy ERW market.</li>
                <li><strong>Buyers:</strong> You are interested in playing a catalytic role in advancing the ERW field.</li>
                <li><strong>Researchers:&nbsp;</strong>If you are interested in accessing commercial ERW data and/or collaborating with leading ERW companies, go straight to <a href="http://data.cascadeclimate.org" target="_blank" rel="noopener">Data Quarry</a> and sign up for an account. You can also sign up for notifications when additional datasets are added by joining the Google Group <a href="https://groups.google.com/a/cascadeclimate.org/g/notifs-dataquarry" target="_blank" rel="noopener">here</a>.</li>
                <ul>
                <li>Commercial datasets are just one part of the puzzle. More complete and accessible datasets from non-commercial field trials can also help advance the state of the field. If you have data from an ERW field trial and would like to be part of advancing the state of ERW science, please reach out.&nbsp;</li>
                </ul>
                <li><strong>For Anyone Else:</strong> You are interested in following along in this journey, sign up for our general newsletter <a href="https://docs.google.com/forms/d/e/1FAIpQLScYIERiJVoobnCRYQ8uYmFuHm7_jsyR67Aw1XbfiFdzAYx-sw/viewform?pli=1&pli=1" target="_blank" rel="noopener">here↗</a>.&nbsp;</li>
            </ul>

			<p>
				We hope that this data sharing system is just the beginning. The organizations committing to the Data Quarry have recognized that the field will grow faster through collaboration and shared learning than if research is conducted in silos–and that they can tap into additional scientific resources as world class researchers build on their work. As researchers begin to connect with commercial datasets, new collaborations between partners proliferate, and scientific understanding of ERW advances, collectively, we’ll learn a lot more than we would have otherwise.
			</p>
			<p>
				At Cascade, we are committed to stewarding this data sharing process to support the ERW community in advancing the most pressing scientific questions. We expect to learn a few things about unlocking deployment-led learning that can help other climate pathways along the way.
			</p>

            <p>
                In the meantime, tip your hat to the leading companies who have rolled up their sleeves, moved from talk to action, and are committing real data to advance the state of ERW science.
            </p>
		</section>

        <section id="post-script">
			<h1>Post Script: Additional Details</h1>
            <h2>Data Flow</h2>
            <p>The data system is comprised of two components:</p>
                <ol style="margin: 0;">
                <li><strong>A Publicly Accessible Data Source: </strong>This includes: a) all health and safety data, and b) datasets that have been used for academic peer reviewed articles, released at the time of article publication. CarbonPlan has developed <a href="https://cdrxiv.org" target="_blank" rel="noopener">CDRXIV</a>, a new centralized hub for open academic and commercial CDR preprints and data, which is the public repository.</li>
                <li><strong>A Permissioned Data Catalog: </strong>Cascade hosts the ERW Data Quarry that provides a description of the datasets and variables available. Researchers are able to request access to individual datasets by submitting a brief research proposal and a conflict of interest statement. A neutral governing board determines dataset release based on: a) if there are any credible conflicts of interest, and b) if the research proposal relates to advancing ERW science. Research proposals will be shared with the Data Quarry community to facilitate collaboration across research groups. For more details, please visit <a href="https://data.cascadeclimate.org" target="_blank" rel="noopener">data.cascadeclimate.org</a>.</li>
                </ol>
            <p>See Figure 1 for a summary of the data flow described above.</p>
            <img src={DSSprocess} alt="Figure 1: Data Sharing System Process Schematic" style="width: 80%;" />
            <p><em>Figure 1:</em> How datasets and information flow across organizations</p>

<h2>Data Variables:</h2>
<p>Whenever possible, datasets in the Data Quarry will share a common set of core variables, as listed in the pdf below. These variables were selected based on their importance to answering the highest priority research questions that overlap with data collected in commercial deployments.</p>
<PDFLink link="/cascadeclimate-data-quarry-variable-list.pdf" target="_blank" rel="noopener" variant="accent" style="display: block; text-align: left;">ERW Data Quarry Variable List ↗</PDFLink>
<p></p>
<p>Building on learnings from the <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>&ldquo;Foundations&rdquo;↗ </em></a>  process, these research themes are:&nbsp;&nbsp;</p>
<ol style="margin: 0;">
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
	<ol style="margin: 0;">
		<li id="footnote1">
            Based on a survey conducted with 16 project developers, analysis of publicly announced deployments and a scan of published ERW field trials.
			<a href="#citation1">↩</a>
		</li>
	</ol>

        </section>
	</main>
</div>

<style>
	#supporters img {
		width: 480px;
		height: auto;
	}

	#supporters {
		padding: 4rem;
        border: none;
	}

	#supporters-container {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 1rem;
		width: 100%;
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

</style>

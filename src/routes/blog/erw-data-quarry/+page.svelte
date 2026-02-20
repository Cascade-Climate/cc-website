<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
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
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Introducing the ERW Data Quarry: A Data Sharing System for Enhanced Rock Weathering</h1>
                <p></p>
                <div class="links">
                    <a href="/blog/data-sharing-system-for-erw">Note: this page is now deprecated. Please visit the most updated ERW Data Quarry Landing Page for the most up-to-date information.↗</a>
                </div>
				<p>
					Enhanced Rock Weathering (ERW) has the potential to deliver meaningful carbon removal alongside agriculture benefits. Yet there remains a number of open scientific questions related to <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em> carbon removal quantification↗ </em></a> and safety that will be critical to address to unlock this potential.
				</p><br>
				<p>
					Without addressing these open questions, the ERW field risks being stuck in a limited-demand future: one in which substantial uncertainty discounting, expensive, measurement-intensive quantification, field heterogeneity, and an incomplete health and safety regulatory framework limits ERW’s ability to scale. We don’t want this future for ERW. We want to quickly, transparently, and collaboratively answer these open questions to help ERW reach its full climate and agronomic impact potential.
				</p><br>
                <strong>
                    But answering these questions requires data. Granular, real-world data. And lots of it.
                </strong>
                <p></p>
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
            <p>We are incredibly energized to announce the ERW Data Quarry–the first-ever ERW data sharing system–together with <b>10 leading ERW companies</b> who have proactively committed to sharing datasets as a part of this system. This is one of the first systems of its kind to proactively share commercial data for the benefit of broad scientific learning in the CDR space. Each of the following companies have committed to sharing specific dataset(s) tied to individual deployments, within a set time frame, through this system. </p>

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
            <p></p>

            <p><b>Frontier</b>, as a leading catalytic buyer coalition in the space, has also committed to requiring dataset contributions to the Data Quarry as part of recent pre-purchases and future ERW offtakes. <b>MilkyWire</b>, another catalytic ERW buyer, will also incorporate data sharing requirements in their next major ERW purchase. These buyers are helping to signal the importance of community-wide data sharing in growing a quality ERW market. 
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
            <p></p>

            <p>More specifically, these leading companies are committing to sharing data through the following system:</p>
        </section>

		<section id="the-data-quarry-solution">
			<h1>The ERW Data Quarry Solution</h1>
			<p>
				A data sharing system that protects commercial and farmer interests while accelerating scientific progress. Finding the right balance between transparency, speed, and commercial interests is a delicate balancing act. Through dozens of stakeholder listening sessions and iterative designs, Cascade has developed the ERW Data Quarry to navigate these tensions by building around the following core principles:
			</p>

            <ol style="margin: 0;">
                <li><strong>Focus on priority questions: </strong>Building on the <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>&ldquo;Foundations&rdquo;↗ </em></a> process, we have identified four priority research topics that commercial datasets can help address. These questions informed the variables collected through the Data Quarry system.</li>
                <li><strong>Segment initial access: </strong>Health and safety data will be made fully public to build trust in the safety of ERW. Additional data will be made available to researchers through a proposal-based request system.</li>
                <li><strong>Fair use:</strong> A commitment to use data shared for advancing scientific learning&ndash;not for commercial purposes.</li>
                <li><strong>Build on existing data norms: </strong>Consistent with farmer data sharing norms, ensure farmers&rsquo; consent to data sharing and anonymize location data to protect farmer privacy. Consistent with academic norms, make datasets used for peer-reviewed articles public upon publication.&nbsp;</li>
                <li><strong>Complement to existing market infrastructure:</strong> The Data Quarry focuses on advancing the state of ERW science, and not on validating carbon claims. It is in no way a replacement for the critical role that registries, validation and verification bodies (VVBs), and other carbon market integrity initiatives play in the ecosystem.&nbsp;</li>
                </ol>

            <p>A detailed description of how we will be putting these principles into action is available in the post-script below. </p>

		</section>
		<section id="next-steps">
			<h1>Next Steps</h1>

            <p>Rocks take time to dissolve. And thus, datasets take time to collect. We will be announcing the formal launch of the system in the coming months. In the meantime, reach out to <a href="mailto:data@cascadeclimate.org" target="_blank" rel="noopener">data@cascadeclimate.org</a> if:</p>

            <ul style="margin: 0;">
                <li><strong>ERW Companies:</strong> You&rsquo;d like to be part of the movement to build a healthy ERW market.</li>
                <li><strong>Buyers:</strong> You are interested in playing a catalytic role in advancing the ERW field.</li>
                <li><strong>Researchers:&nbsp;</strong>You are interested in accessing commercial ERW data and/or collaborating with leading ERW companies. Please share your ERW-related research interests and expertise, and we will reach out with opportunities to engage.</li>
                <ul>
                <li>Commercial datasets are just one part of the puzzle. More complete and accessible datasets from non-commercial field trials can also help advance the state of the field. If you have data from an ERW field trial and would like to be part of advancing the state of ERW science, please reach out.&nbsp;</li>
                </ul>
                <li><strong>For Anyone Else:</strong> You are interested in following along in this journey, sign up for our newsletter <a href="https://docs.google.com/forms/d/e/1FAIpQLScYIERiJVoobnCRYQ8uYmFuHm7_jsyR67Aw1XbfiFdzAYx-sw/viewform?pli=1&pli=1" target="_blank" rel="noopener">here↗</a>.&nbsp;</li>
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
            <p>The data system will be comprised of two components:</p>
                <ol style="margin: 0;">
                <li><strong>A Publicly Accessible Data Source: </strong>This will include: a) all health and safety data, and b) datasets that have been used for academic peer reviewed articles, released at the time of article publication. CarbonPlan is leading development on <a href="https://cdrxiv.org" target="_blank" rel="noopener">CDRXIV</a>, a new centralized hub for open academic and commercial CDR preprints and data, which will be used as the public repository.</li>
                <li><strong>A Permissioned Data Catalog: </strong>Cascade will also host the ERW Data Quarry that provides a description of the datasets and variables available. Researchers will be able to request access to individual datasets by submitting a brief research proposal and a financial conflict of interest statement. Cascade will facilitate a neutral governing board to determine dataset release based on: a) if there are any credible conflicts of interest, and b) if the research proposal relates to advancing ERW science. Research proposals will be shared with the Data Quarry community to facilitate collaboration across research groups.</li>
                </ol>
            <p>See Figure 1 for a summary of the data flow described above.</p>
            <img src={DSSprocess} alt="Figure 1: Data Sharing System Process Schematic" style="width: 80%;" />
            <p><em>Figure 1:</em> How datasets and information will flow across organizations</p>

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

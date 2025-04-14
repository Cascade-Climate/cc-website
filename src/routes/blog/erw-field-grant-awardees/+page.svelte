<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
    import grants from '$lib/images/nature/grants.webp';
    import rfpmap from '$lib/images/blog/RFP-Grantees-Map-Final.webp'
    
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>ERW Field Data Partnership Grant Awardees</h1>
                <div class="links">
                    <a style="border: none; padding: 10px 20px; cursor: pointer; border-radius: 30px; font-size: 1.2rem; flex-grow: 1; font-weight: 400;" target="_blank" href="/blog/erw-field-grants">Original Solicitation Page↗</a>
                </div>
                <p></p>
                <p>In collaboration with the Grantham Foundation, Google, and Frontier, Cascade is excited to announce the awardees for our ERW Field Data Partnership Grants: over $1.2M in funding across 9 projects focused on addressing key research priorities in enhanced rock weathering (ERW).
                </p>

                <p>This funding initiative is intended to accelerate ERW science via a "piggybacking" model, where academic researchers layer scientific exploration onto existing ERW deployments. Together, these nine individual projects tackle several scientific priorities in ERW, including secondary phase formation, soil organic carbon stock changes, and the flow of weathering products. Each partnership also commits to making data available via the <a href="https://cascadeclimate.org/blog/erw-data-quarry"target="_blank" rel="noopener">ERW Data Quarry↗</a> and scientific publication, ensuring that more researchers have access to high quality ERW field data. The projects span multiple sites in nine different countries, covering a wide range of climate, soil, and crop types. 
                </p>

			</div>
            
		</div>

	</section>
	<ScrollNav />
	<main>
    
    <section id="introduction">
        <h1>Introduction</h1>
        <p>Alongside ERW's potential as a scalable carbon removal technology, the ERW community has recognized the need to accelerate scientific progress on the <a href="https://cascadeclimate.org/blog/foundations-for-carbon-removal-quantification-in-erw-deployments"target="_blank" rel="noopener">state of ERW carbon quantification↗</a>. In response, Cascade launched a request for proposals (RFP) for research designed to tackle carbon quantification research priorities.</p>

        <p><strong>In collaboration with the Grantham Foundation and leading catalytic carbon removal buyers Google and the Frontier Coalition, we are excited to announce over $1.2M in research grants spread across 9 project collaborations. 
        </strong></p>

        <img
		src={rfpmap}
		alt="Global Map Depicting 9 Project Collaborations and Pointing at Their Geographic Location. Detailed information below."
	/>

        <p>Recognizing the significant financial costs of conducting ERW field research, the request for research proposals was built on a <strong>"piggybacking" model</strong>, where additional measurements are added to existing or planned ERW deployments above and beyond what is currently being measured at a given site or is required by commercial protocols. This model saves time and resources, enabling research dollars to be used more efficiently by leveraging existing field sites, sampling processes, and rock deployment–while also deepening partnerships across academia and industry. Data sharing is an integral piece of this model, with each deployment partner committing to share sample-level data from their site with the <a href="https://cascadeclimate.org/blog/erw-data-quarry" target="_blank" rel="noopener">ERW Data Quarry↗</a>, and each research partner committing to share data publicly alongside the release of a preprint. This integration of data sharing into the grant design enables the data collected to be leveraged for additional public scientific learnings.</p>

    </section>

	<section id="research-priorities-funded">
        <h1>Research Priorities Funded</h1>
        <p>This RFP was highly competitive, with nearly 40 applications received. The selected projects form a portfolio that tackles three research priorities in ERW science: namely, the formation of secondary silicates and other secondary phases, soil organic carbon stock changes, and tracking the flow of weathering products. We are particularly excited about the diversity of methods and sites represented by these awardees, as we believe the fastest way to make progress on these complex topics is by approaching them via multiple angles.</p>

        <p>More specifically, ERW science priorities addressed in this portfolio are:</p>
        <ul style="margin: 0;">
            <li><strong style="color: #B10202;">Secondary silicates and other secondary phases</strong>: Secondary silicates and other secondary mineral phases are formed as a result of rock weathering processes and can temporarily or permanently trap weathering products, thus reducing CDR. As such, a better understanding of secondary phase formation in soil systems in the context of ERW deployments is a critical field learning objective. Funded projects explore a broad range of approaches for quantifying secondary phase formation, including lithium isotopes, micro-XRD, and several sequential extraction procedures. Because these phases often accumulate below the depth of traditional soil samples, funded projects apply these techniques to deeper soil cores of up to 1.3 meters.            </li>
            <li><strong style="color: #FF7F0E;">Soil organic carbon stock changes</strong>: Small changes in the dynamics of soil organic carbon could lead to significant variability in the net CDR of an ERW project. More research is needed to better predict how soil organic carbon stocks change under different conditions. Funded projects addressing this challenge explore the intersection of secondary phases and organic carbon, which may serve to stabilize soil organic carbon, as well as other potential stabilization mechanisms (e.g., phytoliths, aggregates).            </li>
            <li><strong style="color: #0502B1;">The flow of weathering products</strong>: The ultimate durable storage reservoir of carbon in ERW is deep groundwater systems and the ocean. There is still uncertainty in the timing of the movement of weathering products towards these durable reservoirs. Funded projects investigate hydrologically controlled research sites and multiple methods for tracking water and alkalinity flow through the deep vadose zone.             </li>
        </ul>

        <p>For more information on research priorities in ERW, please refer to <a href="https://cascadeclimate.org/Cascade%20Climate_Appendix%202_%20Foundations%20R&D%20Priorities.pdf" target="_blank" rel="noopener">Appendix 2: Foundations research and development priorities↗</a>, which was released alongside <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">Foundations for Carbon Dioxide Removal Quantification in ERW Deployments↗</a> in October of 2024.</p>

    </section>

    <section id="awardees">
        <h1>Awardees</h1>

        <p>The nine awarded project collaborations between Researchers and Deployment Partners include:</p>
            <ul style="margin: 0; margin-bottom: 20px;">
                <li style="margin-bottom: 20px;"><strong>Researchers </strong><a href="https://soilres.ethz.ch" target="_blank" rel="noopener"><strong>Prof. Dr. Sebastian D&ouml;tterl (ETH Zurich)↗ </strong></a><strong> and </strong><a href="https://www.egerton.ac.ke/faculty-of-agriculture-foa" target="_blank" rel="noopener"><strong>Prof. Dr. Patience Mlongo Mshenga (Egerton University)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://www.fluxcarbon.earth/" target="_blank" rel="noopener"><strong>Flux Carbon↗</strong></a>: This project is a detailed investigation of the interactions between ERW and <strong><span style="color: #FF7F0E;">soil organic carbon dynamics</span></strong> in deeply weathered tropical terranes in Kenya. They will quantify changes in a wide range of soil organic carbon stocks and fractions, including: trapped within silica structures in plant cells, protected within soil microaggregates, and bound to clay minerals and metal oxides.</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://globe.ku.dk/research/glacial-rock-flour-research/agriculture_research/" target="_blank" rel="noopener"><strong>Dr. Christiana Dietzen (University of Copenhagen)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://basicdust.com/" target="_blank" rel="noopener"><strong>Basic Dust↗</strong></a><strong>: </strong>This project investigates the <strong><span style="color: #0502B1;">flow of weathering products</span></strong> through the soil profile in the Pacific Northwest of the United States. They will compare data on weathering rates via multiple methods, including a novel sensor developed by Everest Carbon.</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://www.sheffield.ac.uk/biosciences/people/academic-staff/dimitar-epihov" target="_blank" rel="noopener"><strong>Dr. Dimitar Z. Epihov (University of Sheffield)↗</strong></a><strong>, in collaboration with Deployment Partners </strong><a href="https://sustainability.illinois.edu/" target="_blank" rel="noopener"><strong>University of Illinois Urbana-Champaign↗ </strong></a><strong> and </strong><a href="https://www.searrp.org/" target="_blank" rel="noopener"><strong>South East Asia Rainforest Research Partnership↗</strong></a><strong>: </strong>This project investigates <strong><span style="color: #B10202;">secondary mineral phase formation</span></strong> during basalt dissolution in long-term enhanced rock weathering trials at temperate and tropical agricultural sites. Using deep soil cores and a combination of standard and novel methods, they will quantify the formation of secondary phases, their interactions with <strong><span style="color: #FF7F0E;">soil organic carbon</span></strong>, and the incorporation of weathering products into these phases.</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://www.c4ns.com/" target="_blank" rel="noopener"><strong>Dr. Isabel Montanez (University of California Davis)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://ucanr.edu/research-and-extension-center/sierra-foothill-research-and-extension-center" target="_blank" rel="noopener"><strong>University of California Agricultural and Natural Resources Cooperative Extension↗</strong></a><strong>: </strong>This project investigates the <strong><span style="color: #0502B1">flow of weathering products</span></strong> through the soil column and their transition into the nearby stream. They will use novel stable and radiogenic isotope tracers and a comprehensive, site-wide hydrological monitoring and sampling system.</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://faculty.washington.edu/rbneum" target="_blank" rel="noopener"><strong>Dr. Rebecca B. Neumann (University of Washington)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://un-do.com/" target="_blank" rel="noopener"><strong>UNDO↗</strong></a><strong>: </strong>This project investigates the <strong><span style="color: #0502B1;">flow of weathering products</span></strong> through the soil column and into the lower vadose zone. They will combine detailed analyses of solid phases (<strong><span style="color: #B10202;">carbonates</span></strong>, exchangeable cations, <strong><span style="color: #FF7F0E;">organic carbon fractions</span></strong>) and aqueous phases (dissolved inorganic carbon, dissolved organic carbon, cations, etc.) to understand how deep soil processes affect weathering products.</li>
                <li style="margin-bottom: 20px;"><strong>Researchers </strong><a href="http://www.linkedin.com/in/harun-niron" target="_blank" rel="noopener"><strong>Dr. Harun Niron↗</strong></a><strong> and </strong><a href="http://www.linkedin.com/in/sara-vicca-43887799/" target="_blank" rel="noopener"><strong>Dr. Sara Vicca↗</strong></a><strong>&nbsp;</strong><a href="https://www.uantwerpen.be/en/research-groups/sustain/research/laboratories/climate-solutions/" target="_blank" rel="noopener"><strong>(University of Antwerp)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://inplanet.earth/" target="_blank" rel="noopener"><strong>InPlanet↗</strong></a><strong>: </strong>This project investigates <strong><span style="color: #B10202;">secondary mineral phase formation</span></strong>, <strong><span style="color: #FF7F0E;">soil organic carbon stock changes</span></strong>, and the <strong><span style="color: #0502B1">fate of weathering products</span></strong> in a Brazilian field site. They will analyze deep soil cores divided into layers to better understand the fate of dissolved cations, and to bridge the gap between the organic and inorganic effects of ERW.</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://past-climate-change.com/" target="_blank" rel="noopener"><strong>Dr. Philip Pogge von Strandmann↗ </strong></a><strong> </strong><a href="https://www.geosciences.uni-mainz.de/isotope-geology/" target="_blank" rel="noopener"><strong>(Johannes Gutenberg University)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://www.carbon-drawdown.de/" target="_blank" rel="noopener"><strong>Carbon Drawdown Initiative↗</strong></a><strong>: </strong>This project investigates <strong><span style="color: #B10202;">secondary mineral phase formation</span></strong> at 10 agricultural sites across central Germany. They will use a novel isotope approach to quantify newly formed secondary phases.</li>
                <li style="margin-bottom: 20px;"><strong>Researchers </strong><a href="https://people.unisa.edu.au/binoy.sarkar" target="_blank" rel="noopener"><strong>Dr. Binoy Sarkar (University of South Australia)↗ </strong></a><strong> and </strong><a href="https://portfolio.jcu.edu.au/researchers/paul.nelson" target="_blank" rel="noopener"><strong>Prof. Paul Nelson (James Cook University)↗</strong></a><strong>, in collaboration with Deployment Partner </strong><a href="https://www.carbonaught.io/about-1" target="_blank" rel="noopener"><strong>Carbonaught↗</strong></a><strong>: </strong>This project investigates <strong><span style="color: #B10202;">secondary phase formation</span></strong> and <strong><span style="color: #FF7F0E;">soil organic carbon</span></strong> in an Australian field site with a humid, subtropical climate. They will analyze deep soil cores divided into layers to quantify the formation and types of secondary phases, and examine how these newly formed phases interact with soil organic carbon.&nbsp;</li>
                <li style="margin-bottom: 20px;"><strong>Researcher </strong><a href="https://www.geol.umd.edu/facilities/sebg/" target="_blank" rel="noopener"><strong>Dr. Mengqiang Zhu (University of Maryland College Park)↗</strong></a><strong>, in collaboration with Deployment Partners </strong><a href="https://www.carbony.earth/" target="_blank" rel="noopener"><strong>Carbony↗</strong></a><strong>, </strong><a href="https://eioncarbon.com/" target="_blank" rel="noopener"><strong>Eion↗</strong></a><strong>, and </strong><a href="https://www.mati.earth/" target="_blank" rel="noopener"><strong>Mati↗</strong></a><strong>: </strong>This project investigates <strong><span style="color: #B10202;">secondary phase formation</span></strong> during enhanced rock weathering at a large variety of sites in Bulgaria, India, and the US. They will use novel research methods to identify secondary phases when they first form and are present only in trace amounts, and compare the results across different climate, soil, and crop types.&nbsp;</li>
            </ul>
    </section>

    <section id="process">
        <h1>Process</h1>
        <p>In order to select these awardees, we followed a two-stage review process, conducting a preliminary internal review followed by an external expert review. The primary criteria for internal review included that the proposed dataset would a) be additional to practices typically used in commercial MRV, and b) meaningfully advance scientific knowledge of ERW carbon quantification. The external reviewers also evaluated proposals for appropriate method selection (e.g., data is collected at the sufficient spatiotemporal resolution to capture a signal) and by how the proposal's deployment site conditions matched the research question. External review was conducted by 11 academic experts from various relevant backgrounds (e.g., stable isotopes, agronomy, geophysics) who were screened for commercial and academic conflicts of interest. In addition to the reviewers, Kate Maher and Noah Planavsky served as our advisory board, providing input on process governance to ensure the proposal application wasn't overly burdensome, and that the reviewer pool included the relevant expertise.
        </p>
    </section>  

    <section id="conclusion">
        <h1>Conclusion</h1>
        <p>This process is a reminder, yet again, of the importance of partnerships in tackling the climate challenge. We are energized by the ERW community's commitment to forging new partnerships–and deepening existing ones–in the effort to advance the state of ERW carbon quantification. We believe this collaborative piggybacking model, that enables critical research on the back of planned and existing deployments, has the potential to be a powerful model for rapid scientific advancement in the years to come, and in ensuring we get the maximal scientific benefit for each dollar spent.</p>
        <p>Thank you to all project applicants, each representing a thoughtful collaboration across disciplines and sectors. Thank you to our forward-looking funding partners, who see the importance of science acceleration to unlock the climate opportunity of ERW. Thank you to our external reviewers and our advisory committee who ensured this process was fair and deliberate. And we want to extend a special thanks to each awardee research and deployment partner for collaborating to tackle these tough topics and sharing data that will lead to additional insight generation.</p>
        <p>We are thrilled to see so many share our enthusiasm for addressing priority topics in ERW science, and are excited to build on the efforts of this RFP with the entire community.</p>
    </section>
    
</main>
<img style="width: 0%;" src={grants} alt="Enhanced Rock Weathering" />
</div>


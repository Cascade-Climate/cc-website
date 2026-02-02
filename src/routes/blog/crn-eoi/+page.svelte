<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
    import grants from '$lib/images/nature/grants.webp';
    import CRNblock from '$lib/images/blog/CRNblock.webp';
    
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>
					<strong>Call for Expressions of Interest:</strong> Coordinated Research Network for Enhanced Rock Weathering
				</h1>

				<p>
					Cascade Climate is seeking expressions of interest from institutions to host and operate field sites as part of a global Coordinated Research Network (CRN), through standardized field trials across diverse global geographies. We aim to establish up to 15 standardized sites in high-priority geographies, beginning with 1-2 pilot sites launching in 2026 with secured philanthropic funding for five years. By deploying standardized protocols, measurement strategies, and experimental designs across diverse geographies, the CRN will achieve what isolated studies cannot: field-wide learning enabled by comparable datasets. Host sites will receive operational funding, authorship opportunities on site-specific and network-wide publications, and access to a global community of enhanced rock weathering (ERW) researchers.
				</p>
			</div>

			<img src={CRNblock} alt="Example CRN block design" class="large-image" />
		</div>

		<h5 style="color:white">Deadline: March 10, 2026 at 11:59PM ET.</h5>
		<h5 style="color:white">
			Information Session: TBD
		</h5>

		<div class="links">
			<div style="text-align: center;">
				<PDFLink
					target="_blank"
					rel="noopener"
					link="/Cascade-Climate-Regranting-Solicitation.pdf">RFP Solicitation↗</PDFLink
				>
			</div>
			<a
				style="border: none; padding: 10px 20px; cursor: pointer; border-radius: 30px; font-size: 1.2rem; flex-grow: 1; font-weight: 400;"
				target="_blank"
				href="https://airtable.com/appcGyiQ7jehlyViG/pagFBoCoe32I9wJ87/form">Proposal Application
				Form↗</a
			>
			<a
				style="border: none; padding: 10px 20px; cursor: pointer; border-radius: 30px; font-size: 1.2rem; flex-grow: 1; font-weight: 400;"
				target="_blank"
				href="https://docs.google.com/forms/d/e/1FAIpQLSfBKrkh9e52YAT2R5z2rQ7_ZlqSWJiIzzIPIIOGKbB1qyOAsA/viewform">Networking
				List↗</a
			>
		</div>
	</section>
	<ScrollNav />
	<main>
    
    <section id="the-challenge">
        <h1>The Challenge</h1>
        <p>Enhanced rock weathering (ERW) is a carbon dioxide removal (CDR) strategy that involves the spreading of alkaline crushed rock feedstocks (including silicates, carbonates, or other alkaline materials) on agricultural soils. The quantification of carbon removal in an ERW deployment is complex, and involves a range of biogeochemical fluxes that can impact the net carbon balance across soil systems, groundwater, surface water systems, and the ocean. A brief explainer on enhanced rock weathering can be found <a href="https://cascadeclimate.org/Cascade%20Climate_Enhanced%20Rock%20Weathering%20101_vFinal.pdf" target="_blank" rel="noopener">here</a>.</p>

        <p>Rigorous work across an expanding ecosystem of stakeholders and approaches is driving real progress in ERW. Yet there remains a necessity for coordinated research across a range of site characteristics with consistent, mutually comparable site designs and measurement strategies to efficiently answer the key questions faced by the field.</p>


    </section>

	<section id="the-objective">
        <h1>The Objective</h1>
        <p>The Coordinated Research Network (CRN) is our response to this challenge. It aims to establish up to 15 highly standardized ERW field sites in high-priority geographies (i.e. sub-tropical or tropical climates). We are targeting 1-2 sites for a 2026 deployment for which we have secured philanthropic funding to support over a five year period.</p>

        <p>The Coordinated Research Network (CRN) intends to answer these questions:</p>
        <ol style="margin: 0;">
            <li>Across a range of soils and climates, what is the carbon removal potential of ERW and on what timescales? Field studies have produced divergent estimates<sup>1,2,3,4,7,8</sup>, and differences in measurement strategies, objectives, data reporting, and site conditions make it difficult to draw broad conclusions.</li>
            <li>How can different CDR quantification strategies (e.g., measuring changes in soil chemistry, measuring changes in porewater chemistry, using ion exchange resins) help us understand the full picture of feedstock weathering and transport of carbon? Deploying these methods side-by-side will help clarify the complexities of the weathering process and compare between different measurement methods.</li>
            <li>What are the agricultural benefits of ERW, and what factors drive them? Reported yield impacts<sup>1,5,6</sup> range from negligible to dramatic, but studies often lack proper controls or statistical power to isolate the mechanisms underpinning these effects.</li>
            <li>What happens to weathering products in deeper soils? Reactions below the commonly measured depths may reverse carbon removal, but these dynamics are difficult to observe and poorly represented in models.</li>
        <p> Across these sites, the network will attempt to reconcile different measurement strategies — solid phase, aqueous phase, and ion exchange resins — and to track the fate of cations in deeper (~1m) soils, where significant uncertainty remains. Agronomic parameters will also be measured on all sites in order to better understand what mechanisms lead to observed crop yield improvements.  Measurements will be geared toward sufficiently constraining the variability of key soil parameters to support the development, calibration, validation and intercomparison of geochemical models. <p>
        </ol>

        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
			<PDFLink link="/Cascade-Climate-Regranting-Solicitation.pdf" variant="accent">Link to Full RFP Solicitation PDF↗</PDFLink>
		</div>

    </section>

    <section id="our-approach">
        <h1>Our Approach</h1>

        <p>We are seeking expressions of interest from institutions that can host and operate a CRN field site. Strong candidates will have:</p>
        <ul style="margin: 0;">
        <li>Long-term, secure access to suitable agricultural research sites in areas with high weathering potential</li>
        <li>Institutional capacity to host, operate, and manage a multi-year field trial</li>
        <li>Relevant expertise in soil science, biogeochemistry, hydrology, agronomy, or other fields closely related to ERW science</li>
        <li>Willingness to collaborate in a global collaborative research network, follow standardized protocols and site design, and contribute to a global network-wide synthesis</li>
        </ul>
        <p><strong>For information on site selection criteria</strong> (required and preferred), personnel and partner requirements, trial design specifications, and additional details, <strong><a href="/Cascade%20Climate_CRN_EOI_Site_Selection_Criteria.pdf" target="_blank" rel="noopener">please review Document A: Site Selection Criteria.</a></strong></p>
        <p><strong>For more information on our conflict of interest policy</strong>, <a href="/Cascade%20Climate_CRN_EOI_Conflict%20of%20Interest_Policy.pdf" target="_blank" rel="noopener">please review Document B: Conflict of Interest Policy.</a></p>
        <p><strong>If you are potentially interested in hosting a CRN site</strong>, <strong><a href="https://forms.gle/WRgTqeFRHa8mBooJ7" target="_blank" rel="noopener">please complete the Expression of Interest form</a></strong> by the deadline: March 10, 2026.</p>
    </section>

    

    <section id="eoi-faq">

        <h1>EOI FAQ</h1>
      
    
        <details class="faq" id="why-participate">
            <summary><span>Participation: Why participate in the CRN?</span></summary>
            <div class="answer">
                <ul style="margin: 0;">
                    <li>Help advance science on the potential carbon dioxide removal (CDR) and agricultural benefits of enhanced rock weathering (ERW) globally.</li>
                    <li>Participating institutions and researchers will receive:
                        <ul style="margin: 0;">
                            <li>Funding to support site operations, personnel, and equipment. See the <a href="/Cascade%20Climate_CRN_EOI_Site_Selection_Criteria.pdf" target="_blank" rel="noopener">Site Selection Criteria</a> for more detail on the anticipated personnel roles and level of effort.</li>
                            <li>Lead or senior authorship on publications arising from their site</li>
                            <li>Co-authorship opportunities on global synthesis studies</li>
                            <li>Access to a global network of ERW researchers and support from Cascade Climate. This includes help developing standardized protocols and training; data management infrastructure; and connections to an international research community. Teams should anticipate that openness and collaboration are core to the CRN model as indicated by the Global Scientific Collaboration and Data Sharing and Publication statements that conclude the EOI form.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </details>

        <details class="faq" id="eligibility-who-should-submit">
            <summary><span>Eligibility: Who should submit an EOI form?</span></summary>
            <div class="answer">
                <ul style="margin: 0;">
                <li>Any person who has a field site that aligns with the site characteristics described in the <a href="/Cascade%20Climate_CRN_EOI_Site_Selection_Criteria.pdf" target="_blank" rel="noopener">Site Selection Criteria</a> should submit an EOI.</li>
                <li>See our <a href="/Cascade%20Climate_CRN_EOI_Conflict%20of%20Interest_Policy.pdf" target="_blank" rel="noopener">Conflict of Interest Policy</a> details for more information on who is eligible to host or manage a CRN site, including how ERW Project Developers can engage with the CRN</li>
                <li><strong>If you are a researcher (PI) who is interested in engaging with the CRN, but do not have a site to propose for a field trial, please email us at grants@cascadeclimate.org.<strong>Include your name, institution/organization, public profile (professional webpage, Google Scholar, ResearchGate, or similar), the specific geographies where you work, and a brief description of your interest in the CRN.</li>
                <li><strong>Please submit one EOI form per specific site.<strong> If you have identified multiple potentially eligible sites, you are encouraged to submit multiple EOIs so you can share information on each site individually. </li>
                <li>We prefer submissions in English and welcome materials translated from other languages. </li>
                <li><strong>We encourage you to submit an EOI form even if your site does not meet every preferred criterion.<strong>  The Site Selection Criteria  distinguishes between required and preferred characteristics. Sites that meet the required criteria but lack some preferred criteria will still be considered. For example, if your site is not within the preferred pH range, you should still apply, as there are other factors (such as soil buffer capacity) that may allow a lower pH soil to be accommodated.
                </li>
                <li>For the initial pilot phase, we are prioritizing sites in areas that combine high weathering potential, benefits to farmers, and signals of commercial activity (e.g. Brazil, India, Kenya, countries in Southeast Asia, etc.). As the network scales, we anticipate expanding to additional geographies, and will use submissions to this EOI to also identify sites that may be a fit later in our process.<strong>Therefore we encourage interested partners to submit an EOI for any potentially eligible trial site even if all partnerships are not yet in place.</strong> Please see the <a href="/Cascade%20Climate_CRN_EOI_Site_Selection_Criteria.pdf" target="_blank" rel="noopener">Site Selection Criteria</a> for more detail. 
                </li>
            </div>
        </details>

        <details class="faq" id="process-deadline">
            <summary><span>Process: What is the EOI deadline and next steps?</span></summary>
            <div class="answer">
                <ul style="margin: 0;">
                    <li>The deadline for <a href="https://forms.gle/WRgTqeFRHa8mBooJ7" target="_blank" rel="noopener">EOI submissions</a> is March 10, 2026.</li>
                    <li>We plan to only share submitted information among Cascade Climate staff and academics who are members of our global Scientific Advisory Board and Working Group as needed for review. Information submitted will not be otherwise shared or circulated unless with prior permission by the Primary Contact indicated in the form submission.</li>
                    <li>EOI forms will be reviewed by the Cascade team throughout the month of March 2026.</li>
                    <li>Submissions that best match the Site Selection Criteria will be contacted to discuss next steps in April and May of 2026.</li>
                    <li>While we intend to explore partnerships with all sites that sufficiently meet the criteria, we will need to prioritize formalizing partnerships, developing budgets and pursuing contracting with 1–2 sites that demonstrate a realistic path to full launch before a Fall 2026 or Spring 2027 planting period. A full launch requires a contract in place, onboarded personnel, baseline soil sampling, instrumentation installations, and rock spread before a locally relevant planting season that will happen ideally by March 2027.</li>
                </ul>
            </div>
        </details>

        <details class="faq" id="preperation-before-submitting">
            <summary><span>Preperation: What should I know before submitting the EOI form/?</span></summary>
            <div class="answer">
                <ul style="margin: 0;">
                <li>We hope and expect that most applicants will not need to spend more than 30 minutes completing the form, assuming you have the information below readily available. Please note the guidance in the form about refraining from sharing long paragraphs of text; simply listing information is expected and preferred where suitable to respond to a given prompt.</li>
                <li>Gathering information on the following will be useful in filling out the <a href="https://forms.gle/WRgTqeFRHa8mBooJ7" target="_blank" rel="noopener">EOI form</a> for specific prompts and which information are required versus preferred to share):</li>
                <ul style="margin: 0;">
                    <li>Basic site characteristics (location, area, soil type, soil characteristics, etc.) </li>
                    <li>Information about land access and ownership/management arrangements</li>
                    <li>Your institution’s capacity and relevant expertise to manage such a research trial</li>
                    <li>Any existing infrastructure or instrumentation at the site</li>



            </div>
        </details>

<h2>Funding</h2>
        <details class="faq" id="anticipated-funding-size">
            <summary><span>What is the anticipated funding size?</span></summary>
            <div class="answer">
                <p>We welcome research proposals between $20,000 and $200,000.&nbsp;&nbsp;</p>
            </div>
        </details>

        <details class="faq" id="funding-postdocs-students">
            <summary><span>Can the funding be used to support the salary of post-docs and students?</span></summary>
            <div class="answer">
                <p>For staff and research scientists not in non-PI or co-PI roles, as well as postdoctoral, graduate and/or undergraduate research assistants, the grant can provide salary support and related benefits, including graduate student tuition.&nbsp; Please refer to the Allowable Expenses section of the solicitation for full details.</p>
            </div>
        </details>

        <details class="faq" id="proposals-through-institutions-overhead">
            <summary><span>Researchers at universities are often required to submit proposals to RFPs through the institution at some agreed overhead rate. Will proposals be accepted through institutions and at what overhead rate?</span></summary>
            <div class="answer">
                <p>Indirect costs may be included but must not exceed 10% of the total project budget. Please refer to the Indirect Costs section of the solicitation for full details.</p>
            </div>
        </details>

        <details class="faq" id="proposal-co-funding">
            <summary><span>Can a proposal include co-funding?</span></summary>
            <div class="answer">
                <p>Applicants must include a proposed budget in their application. If this proposal includes other funding sources, the budget should explain how costs will be allocated between this proposal and other funding sources, and also include an explanation of the status of the other funding sources (i.e., funds received, awaiting funds, proposal submitted, etc.)</p>
            </div>
        </details>

<h2>Data</h2>
        <details class="faq" id="data-management-patents">
            <summary><span>How will data be managed? And potential patents treated?</span></summary>
            <div class="answer">
                <p>Please see the Data Sharing Requirements section of the solicitation for full details. Intellectual property will remain the property of the awardee, and we will work with awardees to define grant terms accordingly.</p>
            </div>
        </details>

<h2>Scope</h2>
        <details class="faq" id="erw-coastal-mine-tailings-scope">
            <summary><span>Are ERW deployments in coastal environments, mine tailings, and other settings beyond soils in scope?&nbsp;</span></summary>
            <div class="answer">
                <p>Only field data from ERW deployments on soils is in scope.</p>
            </div>
        </details>

        <details class="faq" id="new-field-trials-deployment-partner-funding">
            <summary><span>Does this solicitation support work on new field trials if the Deployment Partner is funding feedstock, spreading, and MRV?</span></summary>
            <div class="answer">
                <p>Yes.</p>
            </div>
        </details>

        <details class="faq" id="deployment-partners-no-mrv">
            <summary><span>How do you handle Deployment Partners that do not plan to conduct MRV?</span></summary>
            <div class="answer">
                <p>Measurements that are generally required for commercial MRV are not within the scope of this solicitation. For proposals where the Deployment Partner does not plan to conduct MRV, there should be an explanation for how relevant Contextual Data will be collected and the funding source for Contextual Data collection. Please refer to the Appendix A of the solicitation for a detailed description of Contextual Data.</p>
            </div>
        </details>

        <details class="faq" id="additional-proxies-scope">
            <summary><span>Are additional proxies (e.g. stable isotopes, granulometry) within scope?</span></summary>
            <div class="answer">
                <p>Yes. We welcome the creativity of the ERW community to propose the collection of any datasets that would advance the field.</p>
            </div>
        </details>
</section>

<section>
    <h3>Footnotes</h3>
	<ol style="margin: 0;">
		<li id="footnote1">
            For example, see <a href="https://registry.isometric.com/protocol/enhanced-weathering-agriculture/1.0" target="_blank" rel="noopener">Isometric&rsquo;s EW protocol</a> or <a href="https://7518557.fs1.hubspotusercontent-na1.net/hubfs/7518557/ERW%20Standards/Enhanced_Rock_Weathering_2022_2.pdf" target="_blank" rel="noopener">Puro&rsquo;s ERW methodology</a>.
			<a href="#citation1">↩</a>
		</li>
        <li id="footnote2">
            In addition to these “Near-Field Zone” measurements, models or geochemical calculations are frequently used to calculate conservative loss estimates associated with downstream loss processes in surface water and marine systems.
			<a href="#citation2">↩</a>
		</li>
	</ol>
</section>
</main>
<img style="width: 0%;" src={grants} alt="Enhanced Rock Weathering" />
</div>

<style>
	/* Simple, accessible FAQ dropdowns */
	details.faq {
		scroll-margin-top: 8rem; /* Keep anchor targets visible below fixed header + sticky nav */
		margin: 0.75rem 0;
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.04);
		overflow: clip;
	}

	details.faq > summary {
		list-style: none;
		cursor: pointer;
		padding: 0.9rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	details.faq > summary::-webkit-details-marker {
		display: none;
	}

	details.faq > summary > span {
		font-size: 1.05rem;
		font-weight: 600;
	}

	details.faq > summary::after {
		content: '+';
		font-size: 1.25rem;
		line-height: 1;
		opacity: 0.9;
	}

	details.faq[open] > summary::after {
		content: '–';
	}

	details.faq .answer {
		padding: 0 1rem 1rem;
	}

	details.faq .answer :global(p) {
		margin: 0.5rem 0 0;
	}

	details.faq > summary:focus-visible {
		outline: 2px solid rgba(0, 237, 174, 0.9);
		outline-offset: 2px;
		border-radius: 10px;
	}

	.large-image {
		border: 1px solid rgba(255, 255, 255, 0.8);
		border-radius: 8px;
	}

	/* Tighter gap between intro description and Deadline/buttons */
	:global(.intro .content) {
		margin-bottom: 0;
	}
	:global(.intro .content img) {
		margin-bottom: 0.5rem;
	}
	:global(.intro h5:first-of-type) {
		margin-top: 0.25rem;
	}
</style>

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

    <section id="important-dates">
        <h1>Important Dates</h1>
        <p>The proposals will be due on <strong>December 20th, 2024 at 11:59pm ET</strong>,<strong> </strong> and <strong> </strong>funding decisions will be made by no later than <strong>February 6th, 2025</strong>. For proposals that have a start date in Spring 2025, Cascade can provide a letter that specifies our intent to fund the project upon selection.</p>
        <p>Applications should be no longer than four to eight pages (exclusive of supporting information), and should be submitted via <a href="https://airtable.com/appcGyiQ7jehlyViG/pagFBoCoe32I9wJ87/form" target="_blank" rel="noopener">this form↗</a>.&nbsp; Applicants are welcome to include figures and references to papers, preprints, and similar as a part of the application; please have all citations at the end of the document. Applicants are advised to not share any information that is considered confidential or a trade secret.</p>
        <p>The Cascade team will also be hosting an open information and Q&A session on <strong>Thursday, November 14th, 2024 at 12:00PM ET.</strong> <a href="https://lu.ma/pjmx9xl1" target="_blank" rel="noopener">Register Here↗</a></p>
        <p>For additional questions related to this RfP or the proposal process, please contact the Cascade Climate RFP Team at <a href="mailto:grants@cascadeclimate.org" target="_blank" rel="noopener">grants@cascadeclimate.org↗</a>.&nbsp; Potential applicants are also encouraged to bring their questions to our webinar and Q&amp;A session for this RFP, scheduled for <strong>Thursday, November 14th at 12PM ET</strong>. This will be recorded and made available on the Cascade website.</p>
    </section>  

    <section id="eoi-faq">

        <h1>EOI FAQ</h1>
        <p>On Thursday, November 14th at 12PM ET, Cascade Climate held a webinar to answer questions about this solicitation. The webinar began with a short presentation of these slides <a href="https://docs.google.com/presentation/d/1ncKOkLSXRDSerllKkqCw-J8otlXS8SHKl95CVATFjuM/edit#slide=id.g2ee758cb786_0_0" target="_blank" rel="noopener">RFP webinar↗</a>, and then transitioned to Q&amp;A. The <a href="https://zoom.us/rec/share/hEmJbUupbGIH6luB2HLNtP27uKIdudfeRyhJ1WdK_Kb9g3O4qOjkF8sk4CS2Yitz.Oj3P7Hg0lI_oGuU6" target="_blank" rel="noopener">recording↗</a> of the Q&amp;A is available via the link (passcode: ae0ND@Yd); please note that we erroneously stated that &ldquo;the Researcher could only be from an academic or non-profit institution.&rdquo; This was not consistent with the wording of the solicitation, and we&rsquo;ve addressed this in the FAQ below.</p>
    
        <details class="faq" id="researcher-from-private-company">
            <summary><span>Can the Researcher be from a private company?</span></summary>
            <div class="answer">
                <p>Yes. Any scientific researcher with the necessary expertise and instrumentation to carry out the collection, analysis, and publication of a proposed dataset may apply to this RFP. (Note: During the webinar, we erroneously stated that the Researcher could only be from an academic or non-profit institution. This was not consistent with the wording of the solicitation.)</p>
            </div>
        </details>

        <details class="faq" id="eligibility-who-should-submit">
            <summary><span>Eligibility: Who should submit an EOI form?</span></summary>
            <div class="answer">
                <p>No. The Researcher and Deployment Partner cannot be from the same organization.</p>
            </div>
        </details>

        <details class="faq" id="researcher-from-northern-america-europe">
            <summary><span>If the Deployment Partner is from outside Northern America and Europe, can the Researcher be from Northern America and Europe?</span></summary>
            <div class="answer">
                <p>This solicitation has no limitations on the nationalities of either partner.&nbsp; There will be special consideration given to proposals that collect data on fields outside of Northern America and Europe. Please refer to the Selection Criteria section of the solicitation for full details on special considerations.</p>
            </div>
        </details>

        <details class="faq" id="limits-grant-applications">
            <summary><span>Are there limits on the number of grant applications per Deployment Partner, or institution?</span></summary>
            <div class="answer">
                <p>No. There are no limits on the number of grant applications per institution.</p>
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

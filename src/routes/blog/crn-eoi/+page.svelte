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
					<strong>Request for Expressions of Interest:</strong> Coordinated Research Network for ERW
				</h1>

				<p>
					Cascade is seeking expressions of interest to host and operate field sites as part of a global
					Coordinated Research Network (CRN) for enhanced rock weathering (ERW). Host sites will receive
					funding for operations, authorship opportunities on site-specific and network-wide studies, and
					access to a global community of ERW researchers and expert working groups. This coordinated
					approach — deploying standardized protocols, measurement strategies, and experimental designs
					across diverse geographies — will answer critical science questions and enable global analyses
					that accelerate progress for the entire field.
				</p>
			</div>

			<img src={CRNblock} alt="Example CRN block design" class="large-image" />
		</div>

		<p>
			Questions? Email us at
			<a
				style="color:#00EDAE;"
				href="mailto:grants@cascadeclimate.org"
				target="_blank"
				rel="noopener"
				>grants@cascadeclimate.org</a
			>.
		</p>

		<h5 style="color:white">Deadline: December 20th, 2024 at 11:59PM ET.</h5>
		<h5 style="color:white">
			Information/Q&amp;A Session: November 14th, 2024 at 12:00PM ET. Link to recording in Q&amp;A section
			below.
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
        <p>Enhanced rock weathering (ERW) is a carbon dioxide removal (CDR) strategy that involves the spreading of alkaline feedstocks (e.g., silicates, carbonates, or other alkaline materials) on agricultural soils. In the last few years, there has been a dramatic increase in the number of commercial ERW deployments globally driven by voluntary carbon market demand. The quantification of carbon removal in an ERW deployment is complex, and involves a range of biogeochemical fluxes that can impact the net carbon balance across soil systems, groundwater, surface water systems, and the ocean. (See Cascade’s recently published, <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>‘Foundations for Carbon Dioxide Removal Quantification in ERW Deployments’↗ </em></a>).</p>

        <p>For ERW deployments to be economically feasible at scale, it is highly likely that quantification of CDR will need to shift from “measurement-driven” to being increasingly reliant on biogeochemical models. Currently, models cannot reliably predict and quantify the net carbon balance resulting from ERW deployments, particularly across heterogeneous environments.</p>

        <p>In the context of commercial ERW deployments, common quantification practice today<sup><a id="citation1" href="#footnote1">1</a></sup> is to directly measure the release of base cations from the feedstock and subsequent cation or dissolved inorganic carbon (DIC) export within the top 20-30 cm of the soil profile<sup><a id="citation2" href="#footnote2">2</a></sup>.  A key bottleneck for present modeling efforts, and for our broader understanding of rock weathering and solute transport dynamics, is a lack of high-quality measurements of biogeochemical processes in ERW deployments beyond the initial dissolution of the feedstock in surface soils. While not typically measured at high resolution in commercial deployments, these processes are still critical to constraining the net climate impact of an ERW project, and so field data is needed to better calibrate and validate future models.</p>

    </section>

	<section id="the-objective">
        <h1>The Objective</h1>
        <p>We welcome <strong>research proposals between $20,000 and $200,000 that aim to collect and publish high-quality ERW field datasets on existing or planned deployments, that go beyond typical commercial expectations for CDR quantification (e.g., beyond feedstock dissolution measurements in shallow soils).</strong> In these scientific partnerships, <strong>Deployment Partners</strong> agree to open up an existing or upcoming deployment site for additional monitoring and help coordinate logistics, and <strong>Researchers</strong> co-propose a study, collect and analyze the data, and publish the results.</p>

        <p>We believe that this partnership model—in which researchers “piggyback” on existing deployments by carrying out measurements that go beyond what is already planned—will accelerate the collection of novel field datasets in ERW. It offers an attractive avenue for tackling high-priority research questions by decreasing the logistical and cost burden for researchers, while extracting even greater scientific learning value from the current wave of commercial ERW activity.</p>
        
        <p>We expect that initial measurements characterizing the feedstock and initial soil conditions, as well as measurements of feedstock dissolution rates in surface soils, are already paid for in the deployment through some other means (e.g. commercial carbon credit sales). Thus, this RFP will not fund the collection of these <strong>Contextual Data</strong> variables; it will fund only the collection of the ‘additional’ dataset (e.g., sample collection and lab analyses) along with associated research and analysis.</p>

        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
			<PDFLink link="/Cascade-Climate-Regranting-Solicitation.pdf" variant="accent">Link to Full RFP Solicitation PDF↗</PDFLink>
		</div>

    </section>

    <section id="priority-topic-areas">
        <h1>Priority Topic Areas</h1>

        <p>We seek proposals that build upon the data typically collected in ERW commercial deployments, beyond the initial release and export of cations from the feedstock in surface soils. <strong>We welcome the creativity of the ERW community to propose the collection of any datasets that would advance the field.</strong> Below are some topic areas of particular interest:</p>
        <ul style="margin: 0;">
        <li>Measurement of secondary phases (e.g., silicates, carbonates, Fe- and Al-oxyhydroxides, amorphous phases) in deep soil cores (&gt;50 cm)</li>
        <li>Measurement of the components of the carbonate system and/or cations in waters that drain ERW deployments (e.g., groundwater/porewater, tile drains, or low-order streams)</li>
        <li>Measurement of greenhouse gas fluxes (N2O, CH4, CO2)</li>
        <li>Cation sorption in deep soil cores</li>
        <li>Soil organic carbon stock monitoring</li>
        </ul>
        <p>Research proposals focused on collecting field data to inform health and safety impacts of ERW (e.g., the transport and speciation of trace metals) will also be considered.</p>
        <p>The following are <strong> not </strong>in scope for this RFP:</p>
        <ul style="margin: 0;">
        <li>Direct funding of new ERW deployments or field trials (e.g. feedstock transportation, logistics, spreading)</li>
        <li>Measurements that are often required for commercial MRV &mdash; see Appendix A for full list of Contextual Data expected at the deployment site. In some circumstances, if additional measurements of one or more of the Contextual Data variables is needed in order to increase the resolution of data collection already planned by the Deployment Partner, this request can be included in the proposal and funding will be considered on a case-by-case basis.</li>
        </ul>
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
    
        <h2>Partnership</h2>
        <details class="faq">
            <summary><span>Can the Researcher be from a private company?</span></summary>
            <div class="answer">
                <p>Yes. Any scientific researcher with the necessary expertise and instrumentation to carry out the collection, analysis, and publication of a proposed dataset may apply to this RFP. (Note: During the webinar, we erroneously stated that the Researcher could only be from an academic or non-profit institution. This was not consistent with the wording of the solicitation.)</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Can the Research Partner and Deployment Partner be at the same Organization?</span></summary>
            <div class="answer">
                <p>No. The Researcher and Deployment Partner cannot be from the same organization.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>If the Deployment Partner is from outside Northern America and Europe, can the Researcher be from Northern America and Europe?</span></summary>
            <div class="answer">
                <p>This solicitation has no limitations on the nationalities of either partner.&nbsp; There will be special consideration given to proposals that collect data on fields outside of Northern America and Europe. Please refer to the Selection Criteria section of the solicitation for full details on special considerations.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Are there limits on the number of grant applications per Deployment Partner, or institution?</span></summary>
            <div class="answer">
                <p>No. There are no limits on the number of grant applications per institution.</p>
            </div>
        </details>

<h2>Funding</h2>
        <details class="faq">
            <summary><span>What is the anticipated funding size?</span></summary>
            <div class="answer">
                <p>We welcome research proposals between $20,000 and $200,000.&nbsp;&nbsp;</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Can the funding be used to support the salary of post-docs and students?</span></summary>
            <div class="answer">
                <p>For staff and research scientists not in non-PI or co-PI roles, as well as postdoctoral, graduate and/or undergraduate research assistants, the grant can provide salary support and related benefits, including graduate student tuition.&nbsp; Please refer to the Allowable Expenses section of the solicitation for full details.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Researchers at universities are often required to submit proposals to RFPs through the institution at some agreed overhead rate. Will proposals be accepted through institutions and at what overhead rate?</span></summary>
            <div class="answer">
                <p>Indirect costs may be included but must not exceed 10% of the total project budget. Please refer to the Indirect Costs section of the solicitation for full details.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Can a proposal include co-funding?</span></summary>
            <div class="answer">
                <p>Applicants must include a proposed budget in their application. If this proposal includes other funding sources, the budget should explain how costs will be allocated between this proposal and other funding sources, and also include an explanation of the status of the other funding sources (i.e., funds received, awaiting funds, proposal submitted, etc.)</p>
            </div>
        </details>

<h2>Data</h2>
        <details class="faq">
            <summary><span>How will data be managed? And potential patents treated?</span></summary>
            <div class="answer">
                <p>Please see the Data Sharing Requirements section of the solicitation for full details. Intellectual property will remain the property of the awardee, and we will work with awardees to define grant terms accordingly.</p>
            </div>
        </details>

<h2>Scope</h2>
        <details class="faq">
            <summary><span>Are ERW deployments in coastal environments, mine tailings, and other settings beyond soils in scope?&nbsp;</span></summary>
            <div class="answer">
                <p>Only field data from ERW deployments on soils is in scope.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>Does this solicitation support work on new field trials if the Deployment Partner is funding feedstock, spreading, and MRV?</span></summary>
            <div class="answer">
                <p>Yes.</p>
            </div>
        </details>

        <details class="faq">
            <summary><span>How do you handle Deployment Partners that do not plan to conduct MRV?</span></summary>
            <div class="answer">
                <p>Measurements that are generally required for commercial MRV are not within the scope of this solicitation. For proposals where the Deployment Partner does not plan to conduct MRV, there should be an explanation for how relevant Contextual Data will be collected and the funding source for Contextual Data collection. Please refer to the Appendix A of the solicitation for a detailed description of Contextual Data.</p>
            </div>
        </details>

        <details class="faq">
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
</style>

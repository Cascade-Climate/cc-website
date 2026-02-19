<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
    import cost from '$lib/images/nature/cost.webp';
</script>

<svelte:head>
    <title>ERW MRV cost estimator and database</title> 
    <meta
	name="description"
	content="Cascade Climate has developed a free-to-use cost estimator and accompanying cost database for enhanced rock weathering deployments."
/>
</svelte:head>

 
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>ERW MRV cost estimator and database</h1>
                <p>A key question surrounding enhanced rock weathering (ERW) is the quantification of carbon removal. To tackle that question, we worked with more than 100 ERW researchers and practitioners to develop <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>Foundations for Carbon Dioxide Removal Quantification in Enhanced Rock Weathering Deployments↗</em></a>, a document that establishes best practices and core guidance for how to conduct carbon removal measurements and quantification in ERW deployments.</p>
                <p>In this piece, we break down the cost of deploying feedstock and carrying out these carbon removal measurements (particularly for those measurements in the upper soil regions where direct empirical measurements are required). We have collected over 1,000+ global, ERW-specific measurement cost estimates through compiling published quotes and sourcing quotes from quarries, academic and commercial laboratories, and ERW suppliers. These component-level quotes feed into a cost estimator that paints a comprehensive picture of the costs of sourcing, processing, hauling, and spreading feedstock, as well as the field sampling and laboratory analyses necessary for a small-scale deployment in the present day.</p>
			</div>
            <img src={cost} alt="Enhanced Rock Weathering" />
		</div>
		<div class="links">
			<a href="https://emce.cascadeclimate.org/">Link to Model↗</a>
            <a href="https://docs.google.com/spreadsheets/d/1mWgcD9wqkQpAhdb79h4AymDnmuCPAPM_mQFrN60RC2o/edit?gid=0#gid=0">Link to Database↗</a>
		</div>
	</section>
	<ScrollNav />
	<main class="emce">
		<section id="about">
			<h1>About</h1>
            <h3>0. About the ERW MRV Cost Estimator (EMCE):</h3>
            <p>As ERW continues to build momentum, practitioners need a common framework to rigorously quantify carbon removal. They also need tools and resources to better understand the cost implications of carrying out the measurements needed.&nbsp;</p>
            <p>In response, we have developed and released a free-to-use cost estimator and accompanying cost database, collectively known as the ERW MRV Cost Estimator (or &ldquo;EMCE&rdquo; for short). The Cascade team hopes that the estimator and database can help practitioners of ERW deployments to build an informed picture of stacked costs when pursuing different measurement options in quantifying carbon removal.</p>
            <p><span>EMCE allows users to choose among common measurement techniques for understanding carbon and cation fluxes in an ERW deployment, adjust costs for each technique, and see how stacked costs could be influenced by different spatial and temporal densities of measurement sampling. While preset cost ranges are given for each measurement technique based on our compilation of quotes, the estimator is best used with user-inputted cost data. The final output? An <b>estimated</b> total cost of removing a tonne of carbon dioxide by ERW.</span></p>
            <p><span>From the onset, EMCE can (rightfully!) appear overwhelming. What follows provides a walkthrough of why, when, and how to use EMCE.</span></p>
            <ul>
            <li>Part 1 covers what EMCE is and is not; and what cost components are covered.</li>
            <li>Part 2 provides a tab-by-tab user manual and walkthrough.</li>
            <li>Part 3 provides background on how we sourced the quotes in the cost database.</li>
            <li>Part 4 is a call for practitioners to participate in total stacked cost case studies.</li>
            <li>Part 5 lists the authors, coders and collaborators behind EMCE.</li>
            <li>An Appendix is also included that provides a detailed glossary of every variable in EMCE.</li>
            </ul>
            <p><span>Some knowledge on ERW and its quantification does make it easier to be oriented and feel situated in EMCE. If you are still relatively new to ERW quantification, we recommend reading the </span><a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>Technical Summary: Foundations for Carbon Dioxide Removal Quantification in ERW Deployments↗ </em></a><span> first.</span></p>
		</section>
		<section id="is-and-isnt">
			<h1>What EMCE Is/Isn't</h1>
            <h3>1: What EMCE Is(n&rsquo;t) and What EMCE Does(n&rsquo;t) Cover</h3>
            <p><span>EMCE comprises two major cost buckets: Rock, Hauling, and Spreading (RHS) and Measurement, Reporting and Verification (MRV). EMCE offers a detailed and comprehensive MRV cost estimator module, and a comparatively much more basic RHS module. MRV and RHS costs are the two primary direct cost components for an ERW project developer.&nbsp;</span></p>
            <p><span>What EMCE doesn&rsquo;t cover are (a) capital expenditures associated with any equipment (e.g., spreader, storage shed, spectrometry equipment), (b) sales, general and administrative expenses, (c) any type of financing costs.</span></p>
            <p><span>EMCE is primarily designed for practitioners to estimate the RHS and MRV costs for small-scale deployments, using a suite of direct empirical measurements, and paying for laboratory analyses on an &ldquo;&agrave; la carte&rdquo; basis. It can certainly be used by practitioners who have access to volume-discounted pricing, although it&rsquo;s advised that, in these cases, users input their own component cost data.&nbsp;</span></p>
            <p><span>What EMCE is explicitly not:</span></p>
            <ul>
            <li><span>EMCE is explicitly not a tool to project the future trajectory of ERW MRV costs. How ERW MRV costs evolve over time depends on many factors: economies of scale, advances in landing on optimal quantification approaches, progressive shifts from measurement-heavy to model-heavy quantification schemes, etc. Many nonlinear developments could occur in the coming years that cannot be captured by EMCE in its current iteration.</span></li>
            <li><span>EMCE should not be used to design sampling and measurement plans. Robust quantification and sample planning requires a strong understanding of the characteristics of a given deployment site (e.g., soil biogeochemistry, underlying baseline variability of key parameters, site hydrology, and cropping systems). Once the MRV plan is created, practitioners can use EMCE to estimate stacked cost based on desired measurement techniques and the spatial and temporal densities of the measurements.</span></li>
            <li><span>We do not recommend that buyers use EMCE as their sole window in understanding the total $/tonne price of carbon removal via ERW deployments. In some areas, EMCE will produce an underestimate: for example, EMCE doesn&rsquo;t include business operating costs or profit margins. In other areas, EMCE will produce an overestimate: for example, EMCE&rsquo;s preset values won&rsquo;t take into account volume-based pricing, cost reductions from co-located or vertically integrated laboratory facilities, etc.</span></li>
            </ul>
		</section>
		<section id="user-manual">
			<h1>User Manual</h1>
            <h3>2: Tab by Tab User Manual and Walkthrough</h3>
            <h5>Field &amp; Plot Design</h5>
            <p>The &ldquo;Field &amp; Plot Design&rdquo; tab allows users to input basic information about the deployment size and subplot set-up.</p>
            <p>Under &ldquo;Field Design&rdquo;, users can input total hectarage, tonnes of rock deployed per hectare, total project period in years, potential CDR of the feedstock materials (the value is preset to represent typical mafic feedstock), and number of applications over the project period.</p>
            <p>Under &ldquo;Plot Design&rdquo;, users can divide the total deployment area into four sub-plots by applying a percentage of total field to each of the plot areas.</p>
            <ul>
            <li><span><strong>Treatment Plot</strong></span><span>: a less densely monitored area of the deployment where ERW treatment is applied (the value is preset to 90%).</span></li>
            <li><span><strong>Densely Monitored Plot</strong></span><span>: a more densely monitored area of the deployment where ERW treatment is applied (the value is preset to 5%).</span></li>
            <li><span><strong>Control Plot</strong></span><span>: a monitored area of the deployment corresponding to business-as-usual counterfactual or negative controls (the value is preset to 5%).</span></li>
            <li><span><strong>Research Plot</strong></span><span>: a densely monitored area used for advancing specific outstanding research priorities (the value is preset to 0%).</span></li>
            </ul>
            <p>Users can choose to input different analytical techniques, cost ranges, time frequencies, sampling density, and sampling depth for the different types of plots described above.&nbsp;</p>
            <h5>Rock, Haul, and Spread</h5>
            <p><span>The &ldquo;Rock, Haul, Spread&rdquo; tab computes the cost of the raw feedstock, grinding and milling required to adjust the feedback to its desired grain size, transportation of the feedstock to the deployment site, and spreading the feedstock on soils. Within the transportation category, the tab allows users to choose a subset of long-haul, last-mile trucking, and terminal options, and adjust distances and cost ranges for each.&nbsp;</span></p>
            <h5>Feedstock Characterization</h5>
            <p><span>The &ldquo;Feedstock Characterization&rdquo; tab computes the cost of pre-deployment feedstock measurements, which are critical in understanding elemental composition and mineralogy of the feedstock, assessing theoretical maximum CDR potential, and evaluating heavy metal-associated ecological and human health risks. Users can adjust cost inputs associated with conducting measurements for the following feedstock properties:</span></p>
            <div>
            <table style="border-collapse: collapse; width: 100%; padding: 10px;">
            <tbody>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><strong>Feedstock property</strong></td>
            <td style="padding: 10px;"><strong>Analytical technique</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Mineralogy</td>
            <td style="padding: 10px;">Identification of minerals, with ability to quantify their relative composition. Common analytical techniques include petrography (by analyzing thin sections with a light microscope), XRD (by analyzing X-ray Diffraction spectra), and SEM/EDS (by surface imaging under an electron microscope).</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Elemental composition</td>
            <td style="padding: 10px;">Identifying composition of different elements in feedstock. Common analytical techniques include Inductively-Coupled Plasma Mass Spectroscopy (ICP-MS), Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES), and X-ray Fluorescence (XRF).</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Geotechnical properties</td>
            <td style="padding: 10px;">Characterizes the physical properties of the feedstock, including measurement of water content, specific gravity, particle density, bulk density and permeability.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Grain size</td>
            <td style="padding: 10px;">Measurement of the particle size distribution of the grains or particles in the feedstock (e.g. distribution of particular diameter). Common analytical techniques include gravimetric sieving and laser particle size analysis.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Surface area</td>
            <td style="padding: 10px;">Measurement of the specific surface area of a mineral. Common analytical technique is Brunauer-Emmett-Teller (BET) surface area analysis.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Radiation levels</td>
            <td style="padding: 10px;">Measurement of the radiation level of a mineral. Common analytical technique is the gas flow proportional counter.</td>
            </tr>
            </tbody>
            </table>
            </div>
            <p></p>
            <h5>Weathering Curve&nbsp;</h5>
            <p><span>In the &ldquo;Weathering Curve&rdquo; tab, users can adjust a logarithmic factor to generate a time-integrated estimate of feedstock weathering. This rudimentary simplification of how feedstock dissolves should only be used as a starting point.&nbsp;</span></p>
            <p><span>In the case that users have input 2 or above for the &ldquo;Numbers of Applications&rdquo; field in the &ldquo;Field &amp; Plot Design&rdquo; tab, the &ldquo;Weathering Curve&rdquo; tab will display the option to adjust the weathering factor for each of the applications independently. This is to reflect the fact that reapplication of feedstocks on the same field, especially multiple reapplications, will likely not have the same CDR efficiency as the prior application(s).</span></p>
            <p><span>In addition, when there are 2 or more applications, EMCE assumes that the first application takes place at </span><span><em>t</em></span><span> = 0, and any subsequent re-application is spread evenly across the project period (i.e.: specifying &ldquo;2&rdquo; under &ldquo;Number of Feedstock Applications&rdquo; when &ldquo;Project Period in Years&rdquo; is &ldquo;10&rdquo; would signify an application at </span><span><em>t</em></span><span> = 0 and </span><span><em>t</em></span><span> = 5.</span></p>
            <p><span>We want to be super clear that the &ldquo;Weathering Curve&rdquo; tab is used to generate a numerical &ldquo;Potential CDR&rdquo; estimate describing the release of base cations into solution upon feedstock dissolution over time. This is not netCDR. Users should account for the reduction in netCDR as a result of transient and permanent alkalinity sinks within the NFZ, carbon and cation losses in the FFZ, and upstream and ongoing life cycle emissions in the &ldquo;Losses &amp; Discounts&rdquo; tab.</span></p>
            <h5>Losses and Discounts&nbsp;</h5>
            <p><span>Users can input estimates of loss terms, as a percentage reduction of &ldquo;Potential CDR&rdquo;. These loss terms include the following. Section 8 of &ldquo;</span><a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener">Foundations↗</a><span>&rdquo; provides an overview of the state of science and guidance for accounting these loss terms in near-term deployments. These loss terms include the following:</span></p>
            <ul>
            <li><span>Within the NFZ: pH/Non-Carbonic Acid Weathering, Cation Sorption, Secondary Carbonate Formation, Secondary Silicate Formation, Biomass Uptake of Base Cations&nbsp;</span></li>
            <li><span>Within the FFZ: netCDR loss in rivers and in oceans</span></li>
            <li><span>Upstream and ongoing lifecycle emissions</span></li>
            <li><span>NetCDR in counterfactual scenarios</span></li>
            </ul>
            <p><span>These loss terms are additive, i.e. the percentages first are added together, and generated CDR in the deployment is reduced by the resulting sum.</span></p>
            <p><span>In addition, users can also input an uncertainty discount, capturing the statistical error of the end-to-end quantification. This percentage is deducted from the generated CDR after the above loss terms are first taken into account (i.e., if losses total 20%, and the uncertainty discount is 10%, netCDR will be (1-20%) x (1-10%) = 72% of potential CDR.)</span></p>
            <p><span>All of these loss and discount terms are user inputs and explicitly not computed from variables in other parts of the estimator.</span></p>
            <h5>Sidebar: Quick Overview of Near-Field Zone MRV</h5>
            <p><span>Before we deep-dive into the different tabs, it may be helpful to do a very quick recap of what we mean by Aqueous Phase Measurements and Solid Phase Measurements.</span></p>
            <p><span><strong>Aqueous Phase Measurements </strong></span><span> involve collecting and analyzing water samples, including soil porewater (via lysimeters), drainage waters, or water from downstream catchments. They can provide a direct measurement of dissolved weathering products as they are generated in, and exported from, the NFZ.</span></p>
            <p><span><strong>Solid Phase Measurements </strong></span><span> involve collecting and performing analyses on soil samples. In ERW deployments, CDR quantification can be performed by tracking cations released through feedstock dissolution in surface soils, with deductions then taken to account for the various carbon and cation loss pathways within the NFZ: pH/non-carbonic acid weathering, cation sorption, secondary mineral formation, and uptake of cations by biomass. Separately from the inorganic carbon fluxes, changes to soil organic carbon (SOC) stocks due to the ERW deployment can be tracked with solid-phase measurements as well.&nbsp;</span></p>
            <h5>Solid Phase Measurements&nbsp;</h5>
            <p><span>The Solid Phase Measurements tab computes the total stacked cost of an MRV plan using solid phase measurements.&nbsp;</span></p>
            <p><span>Users can adjust the sampling and measurement plan&mdash;by choosing the frequency of sampling events, number of soil samples pooled for each analysis, which analytical techniques are used to measure different properties, and whether these analytical techniques are taken on shallow composite soil samples (&lt;~30 cm) or deeper composite soil samples (50-100 cm) or both. There are also options to input a cost range (including a &ldquo;low&rdquo; and &ldquo;high&rdquo; cost estimate) for taking soil samples and for each analytical technique, and to adjust the temporal and spatial density of samples taken.</span></p>
            <p><span>The following table steps through what each of the solid-phase analytical techniques measures and how these techniques map to the fluxes that need to be constrained in the NFZ.</span></p>
            <div>
            <table style="border-collapse: collapse; width: 100%; padding: 10px;">
            <tbody>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span><strong>Measurement</strong></span></td>
            <td style="padding: 10px;"><span><strong>What does it measure?</strong></span></td>
            <td style="padding: 10px;"><span><strong>How does it apply to ERW?</strong></span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Inductively-Coupled Plasma Mass Spectrometry (ICP-MS)</span></td>
            <td style="padding: 10px;"><span>Feedstock/soil elemental composition</span></td>
            <td style="padding: 10px;"><span>Used in mass balance calculations to capture the loss of base cations from feedstock-amended surface soils relative to an immobile tracer, a method used to quantify feedstock dissolution rate. Acid digestion is a common laboratory procedure to prepare samples for elemental composition analysis.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>pH by slurry probe</span></td>
            <td style="padding: 10px;"><span>Soil pH</span></td>
            <td style="padding: 10px;"><span>Soil pH affects feedstock dissolution rate, cation exchange capacity, bioavailability of nutrients, and the speciation of the carbonic acid system (which will influence netCDR).</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Cation extraction</span></td>
            <td style="padding: 10px;"><span>Cation exchange capacity (CEC), base saturation, and exchangeable acidity</span></td>
            <td style="padding: 10px;"><span>Cation exchange capacity (CEC), base saturation, and exchangeable acidity in soils collectively offer a picture of current and potential base cation sorption, which can transiently &ldquo;undo&rdquo; CDR in the NFZ.&nbsp;</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>X-ray Diffraction (XRD)</span></td>
            <td style="padding: 10px;"><span>Mineralogical characterization</span></td>
            <td style="padding: 10px;"><span>Used to identify clay (and other secondary) minerals in soil. The formation of clay minerals modifies soil hydrology, creates additional base cation sorption sites, and changes porewater composition.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Plant tissue analysis</span></td>
            <td style="padding: 10px;"><span>Elemental composition (C, N, Ca</span><span><sup>2+</sup></span><span>, Mg</span><span><sup>2+</sup></span><span>, K</span><span><sup>+</sup></span><span>, and Na</span><span><sup>+</sup></span><span>) of plants</span></td>
            <td style="padding: 10px;"><span>Measures the amount of biomass uptake of base cations; biomass uptake is a reduction in netCDR.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Calcimetry</span></td>
            <td style="padding: 10px;"><span>Inorganic carbon</span></td>
            <td style="padding: 10px;"><span>Measures the amount of inorganic carbon in soils (primarily in the form of calcium carbonate). Carbonates can be a stable CO</span><span>2 </span><span>reservoir (if non-carbonate feedstocks are applied) but represent a reduction in netCDR compared to export of bicarbonate.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Dry combustion</span></td>
            <td style="padding: 10px;"><span>Organic carbon, total carbon, total sulfur</span></td>
            <td style="padding: 10px;"><span>Measures changes in soil organic carbon stocks, an important carbon reservoir in agricultural settings.&nbsp;</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Fluid displacement test</span></td>
            <td style="padding: 10px;"><span>Bulk density</span></td>
            <td style="padding: 10px;"><span>Bulk density is an important agronomic indicator for soil texture, porosity, and compaction and can be used as a proxy for secondary phase formation. Also necessary to calculate soil-based concentration measurements, including soil total carbon, soil inorganic carbon, soil organic carbon, trace elements, etc.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Gravimetric sieving</span></td>
            <td style="padding: 10px;"><span>Soil texture</span></td>
            <td style="padding: 10px;"><span>Soil texture&ndash;or the relative proportions of clay, silt, and sand&ndash;will influence soil hydrology, CEC, secondary phase formation, and is an important indicator of agronomic health.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Oven drying</span></td>
            <td style="padding: 10px;"><span>Soil moisture</span></td>
            <td style="padding: 10px;"><span>Soil moisture affects secondary phase precipitation, feedstock dissolution rate, and is an indicator of agronomic health.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Falling-head permeability test</span></td>
            <td style="padding: 10px;"><span>Permeability</span></td>
            <td style="padding: 10px;"><span>Soil permeability influences the flow rate of water through the soil, which influences feedstock dissolution rate, transport of weathering products, and secondary phase precipitation.</span></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p></p>
            <h5>Aqueous Phase Measurements&nbsp;</h5>
            <p><span>The Aqueous Phase Measurements tab computes the total stacked cost of an MRV plan using an aqueous measurement approach.&nbsp;</span></p>
            <p><span>Users can adjust the sampling and measurement plan by choosing the frequency of sampling events, number of porewater samples pooled for each analysis, and the analytical techniques used to measure different properties. There are also options to choose the cost ranges for Rhizons and lysimeters (equipment used for porewater sampling), the cost ranges for each analytical technique, and the temporal and spatial resolution required for analysis.</span></p>
            <p><span>The following table steps through what each of the below aqueous phase analytical techniques can measure, and how they map to the fluxes that need constraining in the NFZ.</span></p>
            <div>
            <table style="border-collapse: collapse; width: 100%; padding: 10px;">
            <tbody>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span><strong>Measurement</strong></span></td>
            <td style="padding: 10px;"><span><strong>What does it measure?</strong></span></td>
            <td style="padding: 10px;"><span><strong>How does it apply to ERW?</strong></span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>ICP-MS and ICP-OES</span></td>
            <td style="padding: 10px;"><span>Cation concentrations</span></td>
            <td style="padding: 10px;"><span>Cation, total alkalinity and DIC measurements can be used to estimate the amount of dissolved weathering products at the end of NFZ or in surface water or marine systems, the core component of the netCDR calculation for aqueous-based monitoring approaches.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Alkalinity titration</span></td>
            <td style="padding: 10px;"><span>Total alkalinity (including bicarbonate, aqueous carbonate, and hydroxide)</span></td>
            <td style="padding: 10px;"><span>Cation, total alkalinity and DIC measurements can be used to estimate the amount of dissolved weathering products at the end of NFZ or in surface water or marine systems, the core component of the netCDR calculation for aqueous-based monitoring approaches.</span></td>

            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Dissolved Inorganic Carbon Analyzer</span></td>
            <td style="padding: 10px;"><span>Dissolved inorganic carbon (DIC)</span></td>
            <td style="padding: 10px;"><span>Cation, total alkalinity and DIC measurements can be used to estimate the amount of dissolved weathering products at the end of NFZ or in surface water or marine systems, the core component of the netCDR calculation for aqueous-based monitoring approaches.</span></td>

            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span><em>p</em></span><span>CO</span><span>2</span><span> analyzers and sensors&nbsp;</span></td>
            <td style="padding: 10px;"><span>Partial pressure of CO</span><span>2</span><span> (</span><span><em>p</em></span><span>CO</span><span>2</span><span>)</span></td>
            <td style="padding: 10px;"><span>Partial pressure of CO</span><span>2</span><span> provides information on the carbonate equilibrium in the system and influences weathering rates.&nbsp;</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>pH probe</span></td>
            <td style="padding: 10px;"><span>pH</span></td>
            <td style="padding: 10px;"><span>Aqueous phase pH controls the speciation of carbon in the carbonic acid system, which affects netCDR. pH also affects nutrient availability and trace metal mobility.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Ion Chromatography</span></td>
            <td style="padding: 10px;"><span>Dissolved anions</span></td>
            <td style="padding: 10px;"><span>Measurement of dissolved anions (particularly nitrogen and sulfur species) can be used to constrain the amount of non-carbonic acid weathering and, along with measurements of cations, track alkalinity.</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;"><span>Temperature probe</span></td>
            <td style="padding: 10px;"><span>Temperature</span></td>
            <td style="padding: 10px;"><span>Aqueous phase temperature influences the speciation of the carbonic acid system and the feedstock weathering rate.</span></td>
            </tr>
            </tbody>
            </table>
            </div>
            <p></p>
            <h5>Validation and Verification</h5>
            <p><span>The "Validation and Verification" tab allows users to adjust the costs associated with third-party validation &amp; verification bodies.&nbsp;</span></p>
            <p><strong>Some additional notes on costs and time of costs</strong></p>
            <ul>
            <li><span>All currency units are in USD unless otherwise specified.&nbsp;</span></li>
            <li><span>Rock, Hauling, and Spreading costs, as well as Feedstock Characterization costs, are repeated for each application with the assumption that feedstocks are bought at the same pricing with the same transport route to the field. We opted for this option rather than a large upfront purchase (with storage), given that many current day ERW deployments optimize for short quarry-to-field distances and lean stores of feedstock on site.&nbsp;</span></li>
            <li><span>Measurement and verification costs are spread over the entire project period.</span></li>
            </ul>
        </section>
        <section id="cost-database-call-to-action">
			<h1>Cost Database/CTA</h1>
            <h3>3: What is the cost database and how did we collect the cost information for it?</h3>
            <p><span>Certain low and high unit cost ranges are set as preset inputs in the web app. Presets are provided if a significant number of cost quotes have been collected for that particular analytical approach (refer to the </span><a href="https://docs.google.com/spreadsheets/d/1mWgcD9wqkQpAhdb79h4AymDnmuCPAPM_mQFrN60RC2o/edit?gid=0#gid=0" target="_blank" rel="noopener">cost database </a><span> for the full set of cost quotes). Low and high unit cost presets represent the low and high values amongst the collected cost quotes, after outliers are excluded.</span></p>
            <p><span>We gathered cost data through email inquiries, phone interviews, and web scraping in the process of building the cost database. We collected 100+ direct, non-public cost quotes from academic and commercial laboratories across three continents, and a further 1,000+ cost quotes from publicly available sources. We list the data source for all the quotes. This cost quote collection is still an ongoing process.</span></p>
            <p><span>One limitation of this approach is that the available quotes in the cost database tend to be &ldquo;&agrave; la carte&rdquo; pricing, and do not account for volume-based discounts, or cost reduction as a result of vertically integrating or co-locating analytical laboratories close to the deployment site. The effect of such cost optimization warrants further exploration.</span></p>
            <p><span>In order to produce more accurate cost information, we reached out to a cross-section of ERW project developers. However, at this time, given that the number of cost datasets obtained from project developers is still low, we have chosen not to publish any averaged or ranged data on measurement costs from ERW project developers.&nbsp;</span></p>
            <p><span>We invite more project developers to submit their cost information via </span><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnJOXOxRPMKUFO8YoORzMlZN4y8p9ZbECnbehm7avMdn_OPA/viewform" target="_blank" rel="noopener">this form</a><span>, and will seek to publish aggregate industry averages if and only if we are able to adequately protect confidentiality by gathering sufficient data for each analytical approach per geographic region.</span></p>
            <h3>4: Call to action: cost case study using a real-world MRV scenario</h3>
            <p>EMCE will be most useful when applied to real-world deployment scenarios, cost data, and sampling and measurement plans. It could be very valuable to use real-world data to paint a grounded and evidence-based picture about the current costs and future cost trajectories of ERW, and share this picture with policymakers, buyers and investors.</p>
            <p>We need collaboration from you to make that happen! If you are a practitioner conducting ERW deployments, and you are open about the idea of jointly publishing a total stacked cost case study with Cascade, please reach out to us at <a href="mailto:emce@cascadeclimate.org" target="_blank" rel="noopener">emce@cascadeclimate.org</a>.</p>
		</section>
        <section id="credit-and-glossary">
			<h1>Credits/Glossary</h1>
            <h3>5: Credits</h3>
            <p>Development of the web app, and an earlier spreadsheet-based version of EMCE, was led by <a href="https://cascadeclimate.org/team/arielle-lok" target="_blank" rel="noopener">Arielle Lok</a> under the support of <a href="https://cascadeclimate.org/team/hara-wang" target="_blank" rel="noopener">Hara Wang</a>. <a href="https://github.com/xxmichaellong" target="_blank" rel="noopener">Xiao Xiao Long</a> and Arielle Lok wrote the code for the web app. Hara Wang, <a href="https://cascadeclimate.org/team/noah-anderson" target="_blank" rel="noopener">Noah Anderson</a>, and Arielle Lok drafted the technical documentation of EMCE, and <a href="https://cascadeclimate.org/team/john-sanchez" target="_blank" rel="noopener">John Sanchez</a> edited sections of the document.&nbsp;</p>
            <p>We want to also offer special gratitude to Benjamin M&ouml;ller, Tony Oehm, Kevin Sutherland, Ella Holme, Niklas Kluger, Tyler Kukla, Chris Tolles, Jonathan Lambert, Nate Beatty, Shane Scranton, Shrey Agarwal, Sparsh Agarwal, Maurice Bryson, Mohammad Madankan, Simon Manley, Alexander Rink, Phil Renforth, and Matt Villante who reviewed prior versions of EMCE and offered invaluable insights.</p>
            <p>If you identify any errors or have any suggested updates to the web app and the accompanying technical documentation, please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSccdBcMsAT4mnDh7c2x-Vq87QJtcHCL7EUXy1-RgfL2fAjBfg/viewform" target="_blank" rel="noopener">form here</a> or email <a href="mailto:emce@cascadeclimate.org" target="_blank" rel="noopener">emce@cascadeclimate.org</a>.</p>
            <h3>6: Glossary:</h3>
            <h5>&ldquo;Field &amp; Plot Design&rdquo; tab</h5>
            <p><span><strong>Total Hectarage</strong></span><span>: Total hectares of the field that encompasses all treatment, control and research plots. Upper bound is set at 10,000 hectares.</span></p>
            <p><span><strong>Tonne of Feedstock Deployed Per Hectare: </strong></span><span>Tonnes of feedstock deployed per hectare for each deployment.</span></p>
            <p><span><strong>Project Period in Years:</strong></span><span> Total years of monitoring the field. The output table columns adjust to this input.</span></p>
            <p><span><strong>Potential CDR:</strong></span><span> </span>Estimate of CDR, in tonne of CO<sub>2</sub> per tonne of feedstock, driven by feedstock dissolution in the Near-Field Zone, before accounting for any subsequent lags, losses, or inefficiencies.</p>
            <p><span><strong>Number of Feedstock Applications:</strong></span><span> Number of feedstock applications over the project period. In EMCE, the same amount of feedstock per hectare is deployed per application. Initial application occurs in t = 0, and any subsequent application occurs evenly throughout the project period.</span></p>
            <p><span><strong>Treatment Plot</strong></span><span>: Percentage of total area that is the less densely monitored area of the deployment where ERW treatment is applied.</span></p>
            <p><span><strong>Densely Monitored Plot</strong></span><span>: Percentage of total area that is the densely monitored area of the deployment where ERW treatment is applied.</span></p>
            <p><span><strong>Control Plot</strong></span><span>: Percentage of the total area that is the monitored area of the deployment corresponding to business as usual (counterfactual) plots or negative controls.</span></p>
            <p><strong>Research Plot:</strong>  Percentage of the total area that is the densely monitored area used for advancing specific research priorities. Excluded from netCDR quantification.</p>
            <h5>&ldquo;Losses &amp; Discount&rdquo; tab</h5>
            <p><span><strong>Lifecycle Emissions (% of Potential CDR): </strong></span><span>Percent reduction in potential CDR due to upstream and ongoing life cycle emissions. This deduction is taken at initial application (t = 0) and at the time of subsequent reapplications.</span></p>
            <p><span><strong>Control Losses:</strong></span><span> Percent reduction in potential CDR due to deductions from the counterfactual baseline netCDR. This deduction is taken over the project period, proportional to the potential CDR.&nbsp;</span></p>
            <p><span><strong>Cation Sorption Losses: </strong></span><span>Percent reduction in potential CDR due to adsorption of cations onto soil particle surfaces. This deduction is taken over the project period, proportional to the potential CDR.&nbsp;</span></p>
            <p><span><strong>pH/Non-Carbonic Acid Weathering Losses:</strong></span><span> Percent reduction in potential CDR due to </span>chemical weathering done by acids other than carbonic acid such as sulfuric, nitric, or organic acid, or in low pH soil. This deduction is taken over the project period, proportional to potential CDR<span>.&nbsp;</span></p>
            <p><span><strong>Biomass Uptake Losses:</strong></span><span> Percent reduction in potential CDR due to plant uptake of base cations in the soil solution. This deduction is taken over the project period, proportional to potential CDR.</span></p>
            <p><span><strong>Soil Organic Carbon Losses: </strong></span><span>Percent reduction in potential CDR due to soil organic carbon stock changes. This deduction is taken over the project period, proportional to potential CDR.&nbsp;</span></p>
            <p><span><strong>Secondary Carbonate Losses:</strong></span><span> Percent reduction in potential CDR due to precipitation of carbonate minerals in soils. This deduction is taken over the project period, proportional to potential CDR.&nbsp;</span></p>
            <p><span><strong>Secondary Silicate Losses: </strong></span><span>Percent reduction in potential CDR due to the formation of </span>secondary silicate minerals (e.g., clays), amorphous Si, and Fe/Al oxy-hydroxides in deployment sites. The deduction is taken over the project period, <span>proportional to potential CDR.</span></p>
            <p><span><strong>River Losses:</strong></span><span> Percent reduction in potential CDR due to losses in rivers. </span>The deduction is taken over the project period, <span>proportional to potential CDR.</span></p>
            <p><span><strong>Ocean Losses:</strong></span><span> Percent reduction in potential CDR due to losses in oceans. </span>The deduction is taken over the project period, <span>proportional to potential CDR.</span></p>
            <p><span><strong>Uncertainty Discount:</strong></span><span> Captures the statistical error of the end-to-end quantification. This percentage is deducted from the generated CDR after the above loss terms are first taken into account (i.e., if losses total 20%, and the uncertainty discount is 10%, netCDR will be (1-20%) x (1-10%) = 72% of potential CDR.)</span></p>
            <h5>&ldquo;Rock Haul Spread&rdquo; tab</h5>
            <p><span><strong>Long Haul Transportation Distance: </strong></span><span>Distance of all rail, river barge, and ocean barge transport. Input value can be in any unit of distance as long as associated cost values use the same unit of distance.</span></p>
            <p><span><strong>Last Mile Trucking Distance: </strong></span><span>Distance of last-mile trucking., Input value can be in any unit of distance as long as associated cost values use the same unit of distance.</span></p>
            <p><strong>Raw Feedstock Cost Per Tonne: </strong>Unit cost of the feedstock material before any processing, in currency unit per tonne.</p>
            <p><strong>Grinding &amp; Milling Cost Per Tonne</strong>: Unit cost of any processing to adjust the feedstock material to the desired grain size, in currency unit per tonne.</p>
            <p><strong>Long Haul Transportation Unit Cost: </strong>Unit cost of long haul transportation in unit of currency per tonne of feedstock per unit of distance.</p>
            <p><strong>Last Mile Trucking Unit Cost: </strong>Unit cost of last mile trucking in currency unit per tonne of feedstock per unit of distance.</p>
            <p><strong>Terminal In/Out Costs:</strong> Sum of all port terminal handling costs for a deployment, in currency unit.</p>
            <p><strong>Spreading Cost Per Hectare: </strong>The cost of labor and equipment to spread feedstock, in currency unit per hectare.</p>
            <h5>&ldquo;Weathering Curve&rdquo; tab</h5>
            <p><strong>Weathering Factors: </strong>The Y-axis is the percentage of feedstock that has been dissolved over the X-axis, the project period in years. The &ldquo;weathering factor&rdquo; is a logarithmic factor that adjusts the rate of feedstock dissolution.</p>
            <h5>&ldquo;Solid Phase Measurements&rdquo; tab</h5>
            <p><strong>Solid Phase Sampling Frequency:&nbsp;</strong>Occurrences of solid phase sampling events per year. (2 = biyearly, 1 = yearly, 0.5 = every 2 years, 0.25 = every 4 years, etc.)</p>
            <p><strong>Number of Solid Samples Pooled Per Analysis:</strong> Pooling soil samples for more resource-intensive analyses (all of the below except for permeability), with a maximum of 10 samples pooled per analysis.&nbsp;</p>
            <p><strong>Shallow Composite Soil Samples (15-20 cores):</strong> A composite soil sample of 15-20 soil cores with depths up to 30 cm. This unit cost term encompasses the cost of labor to take the sample, any equipment associated per soil core, and shipping costs of the sample. The unit cost is multiplied by the highest sampling density required by any shallow soil analytical techniques to compute the total cost of shallow composite soil samples.</p>
            <p><strong>Deep Composite Soil Sample (5 cores):</strong> A composite soil sample of 5 soil cores with depths &gt;50 cm. This encompasses the cost of labor to take the sample, any equipment associated per core, and shipping costs of the sample. The unit cost is multiplied by the highest sampling density required by any deep soil analytical techniques to compute the total cost of deep composite soil samples.</p>
            <p><strong>Soil Technician (Labor): </strong>Encompasses labor, travel, and other associated expenses for a technician to visit a deployment and take field samples. This unit cost is multiplied by the number of sampling events to compute the total cost of soil technicians.</p>
            <p><strong>Inductively-Coupled Plasma Mass Spectroscopy (ICP-MS): </strong><span>Performing mass balance calculations using elemental analysis via ICP-MS can capture the loss of base cations from feedstock-amended surface soils relative to an immobile tracer, a method used to quantify feedstock dissolution rate. Also used to analyze cation uptake in biomass.</span></p>
            <p><strong>pH by Slurry Probe:</strong> Measures soil pH, which affects f<span>eedstock dissolution rate, cation exchange capacity, bioavailability of nutrients, and the speciation of the carbonic acid system (which will influence netCDR).</span>Slurry pH probe (ISO 10390:2021), taken on shallow soil samples.</p>
            <p><strong>Cation Extraction:</strong> Measures cation exchange capacity (CEC), base saturation, and exchangeable acidity, which collectively offer a picture of current and potential base cation sorption, a transient &ldquo;undoing&rdquo; of CDR.</p>
            <p><span><strong>X-Ray Diffraction (XRD)</strong></span><span>: Identifies clay (and other secondary) minerals in soil. The formation of clay minerals modifies soil hydrology, creates additional base cation sorption sites, and changes porewater composition.</span></p>
            <p><strong>Plant tissue analysis</strong>: Measures the amount of biomass uptake of base cations <span>(e.g.: Ca</span><span>2+</span><span>, Mg</span><span>2+</span><span>, K</span><span>+</span><span>, and Na</span><span>+</span><span>). Biomass uptake of base cations is a reduction in netCDR.</span></p>
            <p><strong>Calcimetry</strong>: Measures the amount of <span>inorganic carbon in soils (primarily in the form of calcium carbonate). Carbonates can be a stable CO</span><span>2 </span><span>reservoir (if non-carbonate feedstocks are applied) but represent a reduction in netCDR compared to export of bicarbonate.</span></p>
            <p><strong>Dry Combustion</strong><span>: Measures total carbon, total sulfur, and changes in soil organic carbon stocks an important carbon reservoir in agricultural settings.&nbsp;</span></p>
            <p><strong>Fluid Displacement Test</strong>: Measures bulk density, which is an important agronomic indicator for soil texture, porosity, and compaction and can be used as a proxy for secondary phase formation. Also necessary to <span>calculate soil-based concentration measurements, including soil total carbon, soil inorganic carbon, soil organic carbon, trace elements, etc.</span></p>
            <p><span><strong>Gravimetric sieving</strong></span><span>: Measures soil texture&mdash;or the relative proportions of clay, silt, and sand. Soil texture influences soil hydrology, CEC, secondary phase formation, and is an important indicator of agronomic health.</span></p>
            <p><strong>Oven drying: </strong>Measures soil moisture. <span>Soil moisture affects secondary phase precipitation, feedstock dissolution rate, and is an indicator of agronomic health.</span></p>
            <p><span><strong>Falling-head permeability test</strong></span><span>: Measures soil permeability. Soil permeability influences the flow rate of water through the soil, which influences feedstock dissolution rate, transport of weathering products, and secondary phase precipitation.</span></p>
            <p><span><strong>Acid Digestion</strong></span><span>: Laboratory procedure used to prepare soil samples for elemental composition analysis.</span></p>
            <h5>&ldquo;Aqueous Phase Measurements&rdquo; tab</h5>
            <p><strong>Aqueous-Phase Sampling Frequency</strong>: Occurrences of aqueous phase sampling events per year. (52 = weekly, 26 = biweekly, 12 = monthly, 1 = yearly, 0.5 = every 2 years, and so on.) Note that aqueous sampling events usually occur multiple times a year.</p>
            <p><strong>Porewater Technician (Labor): </strong>Encompasses labor, travel, and other associated expenses for a technician to visit a deployment and take field samples. This unit cost is multiplied by the number of sampling events to compute the total cost of technicians.</p>
            <p><strong>Number of Aqueous Samples Pooled Per Analysis:</strong> Pooling aqueous samples for more resource-intensive analyses (ICP-MS and ion chromatography (only for non-DIC anions)), with a maximum of 10 samples pooled per analysis.&nbsp;</p>
            <p><strong>Rhizon (Equipment):</strong> Soil water sampling device. Costs can vary depending on functionality and ease of reusability. Costs are per Rhizon sampler.</p>
            <p><strong>Lysimeter (Equipment):</strong> Soil water sampling device. Costs can vary depending on functionality and ease of reusability. Costs are per lysimeter.</p>
            <p><strong>ICP-MS and ICP-OES:</strong> Measures cation concentrations, core components in estimating the amount of dissolved weathering projects for aqueous-based monitoring approaches.</p>
            <p><strong>Alkalinity titration:</strong> Measures total alkalinity (including bicarbonate, aqueous carbonate and hydroxide), core components in estimating the amount of dissolved weathering products for aqueous-based monitoring approaches.</p>
            <p><strong>Dissolved Inorganic Carbon Analyzer: </strong>Measured dissolved inorganic carbon (DIC), core components in estimating the amount of dissolved weathering products for aqueous-based monitoring approaches.</p>
            <p><strong>pCO</strong><strong>2</strong><strong> Devices:</strong> Measures partial pressure of CO<sub>2</sub>, which provides information on the carbonate equilibrium in the system and influences weathering rates.</p>
            <p><strong>pH probe: </strong><span>Aqueous phase pH controls the speciation of carbon in the carbonic acid system, which affects netCDR. pH also affects nutrient availability and trace metal mobility.</span></p>
            <p><strong>Ion Chromatography:</strong> Measures dissolved anions <span>(particularly nitrogen and sulfur species), which can be used to constrain the amount of non-carbonic acid weathering and, along with measurements of cations, track alkalinity.</span></p>
            <p><span><strong>Temperature probe: </strong></span><span>Measures aqueous phase temperature, which influences the speciation of the carbonic acid system and the feedstock weathering rate.</span></p>
            <h5>&ldquo;Feedstock Characterization&rdquo; tab</h5>
            <p><strong>Samples Required per X Tonne Feedstock</strong>: input the number of samples taken per X tonnes of feedstock materials.&nbsp;</p>
            <p><strong>Mineralogy:</strong> Identification of minerals, with ability to quantify their relative composition. Common analytical techniques include petrography (by analyzing thin sections with a light microscope), XRD (by analyzing X-ray Diffraction spectra), and SEM/EDS (by surface imaging under an electron microscope).&nbsp;</p>
            <p><strong>Elemental composition:</strong> Identifying composition of different elements in feedstock. Common analytical techniques include Inductively-Coupled Plasma Mass Spectroscopy (ICP-MS), Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES), and X-ray Fluorescence (XRF).</p>
            <p><strong>Geotechnical properties: </strong>Characterizes the physical properties of the feedstock, including measurement of water content, specific gravity, particle density, bulk density and permeability.</p>
            <p><strong>Grain size:</strong> Measurement of the particle size distribution of the grains or particles in the feedstock (e.g. distribution of particular diameter). Common analytical techniques include gravimetric sieving and laser particle size analysis.</p>
            <p><strong>Surface area:</strong> Measurement of the specific surface area of a mineral. Common analytical technique is Brunauer-Emmett-Teller (BET) surface area analysis.</p>
            <p><strong>Radiation levels:</strong> Measurement of the radiation level of a mineral. Common analytical technique is the gas flow proportional counter.&nbsp;</p>
            <h5>&ldquo;Validation &amp; Verification&rdquo; tab:&nbsp;</h5>
            <p><strong>Validation: </strong>Third-party assessment that determines whether a project meets the rules and requirements for carbon credit issuance. Typically occurs when the project is initialized (at t = 0) and at minimum once every 5 years during the project period.&nbsp;</p>
            <p><strong>Multiplier: </strong>Occurrences of validation per year. 2 = twice a year, 1 = annually, 0.5 = every 2 years, 0.2 = every 5 years, and so on.</p>
            <p><strong>Verification: </strong>Third-party assessment that reviews project developers&rsquo; monitoring, measurement and quantification data to confirm that the project is performing as planned and accurately computing the carbon removal volumes achieved. Typically occurs annually over the project period.</p>
            <p><strong>Multiplier: </strong>Occurrences of verification per year. 2 = twice a year, 1 = annually, 0.5 = every 2 years, 0.2 = every 5 years, and so on.</p>
		</section>
	</main>

<style>
  /* Reduce horizontal padding for this page's main */
  .emce {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .emce table,
  .emce th,
  .emce td {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  /* Remove horizontal padding completely on this page's tables */
  .emce table {
    padding: 0 !important;
    border-collapse: separate !important;
    border-spacing: 2px 0 !important; /* 2px between columns, no extra between rows */
  }
  .emce th,
  .emce td {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  /* Make first two columns wider */
  .emce table th:nth-child(1),
  .emce table td:nth-child(1) {
    width: 30%;
  }
  .emce table th:nth-child(2),
  .emce table td:nth-child(2) {
    width: 35%;
  }

  /* Center the titles (first row) for second and third columns */
  .emce table tbody tr:first-child td:nth-child(2),
  .emce table tbody tr:first-child td:nth-child(3) {
    text-align: center;
  }
</style>

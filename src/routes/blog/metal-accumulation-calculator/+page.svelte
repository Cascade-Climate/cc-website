<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import metals from '$lib/images/nature/metals.webp';
    import apprate from '$lib/images/equations/Application-Rate-EQ.webp';
    import massbalance from '$lib/images/equations/Basic-Mass-Balance-EQ.webp';
    import feedstockconc from '$lib/images/equations/HM-Concentration-Feedstock-EQ.webp';
    import soilconc from '$lib/images/equations/HM-Concentration-Soil-EQ.webp';
    import soilbd from '$lib/images/equations/Soil-BD-EQ.webp';
    import soildepth from '$lib/images/equations/Soil-Depth-EQ.webp';
</script>

<svelte:head>
    <title>ERW Metal Accumulation Calculator</title> 
    <meta
	name="description"
	content="Cascade Climate has developed a free-to-use maximally conservative mass-balance model."
/>
</svelte:head>


<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>ERW Metal Accumulation Calculator</h1>
                <p>Enhanced rock weathering (ERW) has emerged as a promising carbon dioxide removal approach that could meaningfully contribute to climate change mitigation while improving agricultural soils. However, as the crushed rocks from ERW deployments break down over time and carbon is removed from the atmosphere, various metals within these rocks are also released. If certain metals accumulate to high levels in soils, they can pose risks to environmental and human health. Our goal is to help the ERW community better understand metal accumulation risks by providing a tool that intentionally uses risk-maximizing assumptions to compare potential metal accumulation against existing soil regulations.&nbsp;</p>
                    <p><strong>In the course of this work, we came to three recommendations for the ERW community to pursue to safeguard soil health with respect to metal accumulation at this time:</strong></p>
                    <ol>
                    <li>Encourage broader sharing of deployment data in public repositories to enable further analysis and understanding of the risk of metal accumulation from ERW deployments.</li>
                    <li>Support the development of regulations that account for important biogeochemical dynamics of ERW, such as variable dissolution rates of metal-bearing minerals in feedstocks, characteristics that influence metal mobility in soils (pH, redox, organic content), and varying application rates across deployments.</li>
                    <li>Maintain conservative approaches to evaluating metal risks until ERW-specific regulatory frameworks are developed and/or until the fate of these metals in ERW deployments are better understood.&nbsp;</li>
                    </ol>
                    <p>By following these recommendations, we can safeguard soils while advancing ERW as a climate-smart practice until more specific regulatory frameworks are developed.</p>
			</div>
            <img src={metals} alt="Enhanced Rock Weathering" />
		</div>
		<div class="links">
			<a href="https://metals.cascadeclimate.org/">Link to Calculator↗</a>
            <a href="https://cascadeclimate.org/Cascade-Climate_ERW-MAC%20preset%20model%20results%20slides.pdf">Link to Preset Model Results↗</a>
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="introduction">
			<h1>Introduction</h1>
            <p>If metals accumulate to excessive levels in cropland soils, it can have negative effects on crop yields, soil quality, human health, and the safety of the environment more broadly (<a href="https://link.springer.com/book/10.1007/978-94-007-4470-7" target="_blank" rel="noopener">Alloway, 2013</a>; <a href="https://www.sciencedirect.com/science/article/pii/S0160412015301203" target="_blank" rel="noopener">T&oacute;th et al., 2016</a>; <a href="https://link.springer.com/article/10.1007/s11356-014-3849-9" target="_blank" rel="noopener">Anjum et al., 2014</a>; <a href="https://bsssjournals.onlinelibrary.wiley.com/doi/full/10.1111/ejss.13343" target="_blank" rel="noopener">Dupla et al., 2023</a>). However, due to the early stage of ERW, the actual risk of metals reaching harmful concentrations from ERW deployments remains largely unexplored via systematic research. The lack of comprehensive data on metal accumulation in soils from ERW deployments limits both policy support and market adoption, necessitating a better collective understanding of these risks.&nbsp;</p>
            <div style="background-color: #173B3F; color: white; padding: 20px; border-radius: 10px;">
                <h3>History of Contaminants in Agriculture</h3>
                <p>Obtaining clarity around the potential risk of metal accumulation in agricultural soils from ERW is key to safeguarding farmers' livelihoods while scaling ERW's potential climate and agronomic benefits. The agriculture sector has extensive experience managing toxicity risks from various crop inputs, and its track record demonstrates both successful and cautionary examples of risk management. Crop protection products (e.g., pesticides, herbicides) operate within well-defined safety frameworks that have evolved to protect soil, water, and human health, albeit <a href="https://www.epa.gov/international-cooperation/persistent-organic-pollutants-global-issue-global-response#:~:text=The%20DDT%20Dilemma&amp;text=In%20the%20United%20States%2C%20DDT,species%20recoveries%20in%20our%20history." target="_blank" rel="noopener">with mixed success</a>. An example that has recently come to light is the widespread contamination of agricultural land by sewage sludge fertilizers <a href="https://www.nytimes.com/2025/01/14/climate/epa-pfas-forever-chemicals-sludge-fertilizer.html" target="_blank" rel="noopener">containing PFAS compounds</a>, which illustrates the dire consequences of deploying materials without adequate prior risk assessment and appropriate regulations. Cautionary tales like these underscore a critical lesson for ERW implementation: establishing comprehensive safety parameters and monitoring protocols before deployments occur at scale is essential to mitigate and manage potential unintended consequences. By learning from the mixed history of agricultural amendments, we can develop proactive &ndash; rather than reactive &ndash; approaches to ERW risk management.</p>
            </div>
            <h3>Current Regulatory Landscape:&nbsp;</h3>
            <p>Due to the relatively recent rise of ERW, there are no legislative soil regulations that have been created solely with the practice of ERW in mind. Currently, there are two types of regulations that are the most relevant to ERW deployments:&nbsp;</p>
            <ol>
            <li><strong>Feedstock Regulations:</strong> These regulations set limits on the concentration of metals allowed in feedstocks, such as the <a href="https://www.epa.gov/sites/default/files/2018-12/documents/plain-english-guide-part503-biosolids-rule.pdf" target="_blank" rel="noopener">EPA&rsquo;s 503c Biosolids Rule</a> or the <a href="https://eur-lex.europa.eu/eli/reg/2019/1009/oj/eng" target="_blank" rel="noopener">EU Fertilizer Products Regulation</a>. However, these regulations are generally unsuitable for ERW deployments for a few reasons. In the case of the biosolids legislation, the regulated feedstock (liquid waste sludge) is more soluble and releases metals more readily than ERW feedstocks. As a result, applying the same regulatory thresholds to ERW materials can significantly underestimate the amount of rock that can be safely applied to land, unnecessarily restricting the carbon removal potential of ERW projects while not accurately reflecting the actual environmental risk. In the case of the EU Fertilizer Products Regulation, there are no limits on application rates for the inorganic feedstocks that are regulated. This can be problematic for ERW deployments because even if the concentration of metals in each application meets regulatory standards, without limits on total application amounts, excessive quantities of metals could still accumulate in soil over time. The environmental impact depends on the total metal load added to soil, not merely the concentration in individual applications. Therefore, concentration limits alone are insufficient to protect soil health when application rates remain unrestricted.</li>
            <li><strong>Soil Regulations: </strong>Metal threshold limits for soil concentrations regulate the concentration of metals present in soil. These regulations vary in their specificity: some are explicitly intended for industrial clean-up sites, others establish different thresholds based on soil pH ranges, and some are designated for specific land uses (residential, agricultural, etc). Soil concentrations also take into account background soil concentrations of metals, which in some cases could be elevated with respect to a given metal prior to an ERW deployment. In certain cases, baseline soil conditions can exceed soil regulatory thresholds, which could effectivel`y prohibit ERW deployments with any trace levels of the offending metals.
                <ul>
                    <li style="margin-top: 10px;">Globally, regulations include an assortment of soil thresholds for metals in an incomplete and uncoordinated way, and ERW practitioners are left to interpret these as guidelines for ecosystem safety at their deployment sites. Any one set of regulations only regulates some metals, and leaves out others that are also relevant to ERW &ndash; for example:&nbsp;
                        <ul>
                            <li style="margin-top: 10px;">The <a href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-agricolas/fertilizantes/legislacao/in-05-_ingles.pdf" target="_blank" rel="noopener">Brazilian Normative Instruction for Remineralizers</a> only lists thresholds for 5 metals (As, Cd, Pb, Cr, Hg).</li>
                            <li style="margin-top: 10px;">The <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:01986L0278-20220101" target="_blank" rel="noopener">EU Limit Values for Concentrations of Heavy Metals in Soils</a> only list thresholds for 6 metals (Cd, Cu, Ni, Pb, Zn, Hg).&nbsp;</li>
                            <li style="margin-top: 10px;">The <a href="https://www.finlex.fi/en/laki/kaannokset/2007/en20070214.pdf" target="_blank" rel="noopener">Ministry of the Environment Finland Assessment of Soil Contamination and Remediation Needs</a> is one of the most comprehensive, listing thresholds for 11 (Sb, As, Hg, Cd, Co, Cr, Cu, Pb, Ni, Zn, and V).</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>
            <h3>Ideal Regulatory Landscape:&nbsp;</h3>
            <p>Ideally, there would be established thresholds for both feedstock and soil metal concentrations regulating the practice of applying rock powders. However, due to the early nature of the ERW field, this does not currently exist. Establishing such thresholds requires comprehensive datasets from diverse feedstocks applied across different soil conditions, monitored over extended time periods to understand long-term impacts and ecosystem responses that governments can then use to develop country-specific regulations. In lieu of these ERW-specific thresholds, practitioners are forced to rely on regulations that were not created with the intent of regulating rock powder applications.</p>
            <p>Given that we do not have ERW-specific thresholds that span both feedstock and soil concentrations, we decided to opt for a conservative approach in modeling metal accumulation in soils from ERW deployments to proactively identify potential metal accumulation risks from a deployment. We focused on soil concentrations because they reflect what the soil system is experiencing, and they provide a more direct measure of potential ecological and agricultural impacts than feedstock concentrations alone. Soil concentration thresholds account for the cumulative effects of metal additions, existing background levels, and local soil chemistry that influence metal bioavailability, making them more relevant for assessing actual environmental risk than feedstock-only regulations.</p>
		</section>
		<section id="approach">
			<h1>Approach</h1>
            <p>To gain a better first-order understanding of the potential risks of metal accumulation in soils from ERW deployments, we developed a maximally conservative mass-balance model: the ERW-MAC (Enhanced Rock Weathering Metal Accumulation Calculator).&nbsp;</p>
            <p>In this case, &ldquo;maximally conservative&rdquo; means that the model purposefully reflects the highest metal accumulation scenarios that an ERW deployment could encounter, including: 1) the feedstock dissolves completely and immediately into the soil, 2) no metals leave the soil system, and 3) metals are distributed homogeneously throughout the soil. We chose the maximally conservative approach to establish the lowest threshold for risk assessment. If a modeled deployment is shown to be within regulatory limits even under these deliberately exaggerated assumptions, users can be confident that the deployment should remain within regulatory limits under more realistic conditions. Essentially, by passing this 'stress test,' users can understand their metal accumulation risk from a deployment with a reliable margin.&nbsp;&nbsp;</p>
            <p><strong>The ERW-MAC allows users to:&nbsp;</strong></p>
            <ol>
            <li>View preset scenarios using common feedstocks to visualize the risk of different metal accumulation in soils from a generic ERW deployment.</li>
            <li>Input their own feedstock and soil concentrations of 16 different metals and obtain an understanding of how those metals could accumulate in the soil over one or many ERW deployments.&nbsp;</li>
            <li>Gain insights into how resulting concentrations of metals in soil stack up against existing global soil regulations.&nbsp;</li>
            </ol>

            <h3>Methods &amp; Key Assumptions</h3>
                <p>The model addresses three main questions:&nbsp;&nbsp;</p>
                <ol>
                <li>What are the ranges of concentrations of metals in common feedstocks such as basalt and peridotite (used as a proxy for olivine)?&nbsp;</li>
                <li>What are the baseline concentrations of metals in agricultural soils?&nbsp;</li>
                <li>What are soil threshold values for metals in global regulations?&nbsp;</li>
                </ol>
                <p>This model identifies which metals from commonly-used peridotite and basalt feedstocks might warrant deeper investigation due to their risk of potential accumulation from rock powder applications. The model employs the maximally conservative approach with the following simplifying assumptions:</p>
                <ol>
                <li>Full, instantaneous dissolution of the feedstock over one application event with no partial metal release from the feedstock or time component to dissolution.</li>
                <li>No export of metals from soil after deposition (e.g., by plant uptake or transport through the soil column into the lower vadose zone).</li>
                <li>Homogenous vertical and lateral soil metal concentrations throughout the deployment site.</li>
                </ol>
                <h5>Data Sources&nbsp;</h5>
                <p>In the preset hypothetical scenarios presented in the ERW-MAC, the feedstock metal concentration data is being pulled from the <a href="https://georoc.eu/georoc/new-start.asp" target="_blank" rel="noopener">GEOROC</a> database (Geochemistry of Rocks of the Oceans and Continents) and the baseline agricultural soil metal concentration data is being pulled from the <a href="http://weppi.gtk.fi/publ/foregsatlas/" target="_blank" rel="noopener">FOREGS</a> (Geochemical Atlas of Europe) and <a href="https://mrdata.usgs.gov/metadata/ds-801.faq.html" target="_blank" rel="noopener">USGS</a> soil databases, as well as from several academic sources (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0045653518319210#appsec1" target="_blank" rel="noopener">Kumar et al., 2021</a>, <a href="https://www.researchgate.net/publication/230683184_Baseline_Concentration_of_Heavy_Metals_in_Brazilian_Latosols" target="_blank" rel="noopener">Campos et al., 2003</a>, and <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720325754?casa_token=vpmHiZBuFyIAAAAA:xwU_k3LVK6fEOyER7IorNpVX3iKXEVdMoBFWP-LVctILTWTTD9w9QwF4YQ-AZJZguvOO3ENc" target="_blank" rel="noopener">Wang et al., 2020</a>).&nbsp;</p>
                <p>We also compiled a preliminary global list of relevant soil metal concentration regulations that are included <a href="https://docs.google.com/spreadsheets/d/1MQA8FdG9xLh37TuyZXS_2EN4HbsUekXze6bpIWSkMT8/edit?gid=1743959116#gid=1743959116" target="_blank" rel="noopener">here</a>. If you have any regulations to add, please reach out to us at <a href="mailto:metals@cascadeclimate.org" target="_blank" rel="noopener">metals@cascadeclimate.org</a> so that we can update the list to ensure that it remains a useful community resource.&nbsp;</p>
                <h5>Maximally Conservative Mass Balance Function</h5>
                <p>The basic mass-balance equation underlying the ERW-MAC is:&nbsp;</p>
                <img src={massbalance} alt="Basic Mass-Balance Equation"/>
                <p>The key variables in the function are defined as follows:&nbsp;</p>
                <div>
                    <table style="border-collapse: collapse; width: 100%; padding: 10px;">
                    <tbody>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={feedstockconc} alt="Concentration of Metal Equation"/></td>
                    <td style="padding: 10px;">= concentration of metal in feedstock;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={apprate} alt="Feedstock Application Rate Equation"/></td>
                    <td style="padding: 10px;">= application rate of the feedstock in a given ERW deployment;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={soildepth} alt="Soil Depth Equation" style="width: 50%;"/></td>
                    <td style="padding: 10px;">= the soil depth at which the feedstock will be incorporated;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={soilbd} alt="Soil Bulk Density Equation"/></td>
                    <td style="padding: 10px;">= the bulk density of the soil the feedstock is being deployed on;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={soilconc} alt="Concentration of Feedstock Equation"/></td>
                    <td style="padding: 10px;">= the calculated concentration of a metal after complete dissolution of the feedstock and accumulation into the soil.</td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                <p>For each metal, a modeled distribution was fitted to the feedstock baseline values from GEOROC and to the collected global soil baseline values. A Monte Carlo simulation then randomly sampled 10,000 values from the modeled distributions of both soil and feedstock metal concentrations and used these as inputs to the mass balance model (see equations above).</p>
                <p>While using the ERW-MAC tool, it is important to note that the line depicting no feedstock application (0 t/ha) will occasionally show a slightly higher metal concentration than the modeled scenarios with feedstock addition. This is because of the Monte Carlo simulation used to create the distributions shown in&nbsp; the preset deployment scenarios. A Monte Carlo simulation takes a variable that has uncertainty and assigns it a random value within the uncertainty bounds, and this randomness will sometimes cause the 0 t/ha line to show a slightly elevated concentration of the selected metal.&nbsp;</p>
                <p>The Cascade team hopes that the ERW-MAC can help users build an informed picture of potential risks from metal accumulation in the soils of their deployment area. Users can access a more detailed description of the tool development methods <a href="https://docs.google.com/document/d/1aNBgdIHDXMeg_QYtfbsXSAB5AzD0Sjl95kmo2tldLN0/edit?tab=t.0" target="_blank" rel="noopener">here</a>.</p>
		</section>
		<section id="intended-users">
			<h1>Intended Users</h1>
            <p>The ERW-MAC is designed to be used by many ERW stakeholders, including:</p>
            <div>
            <table style="border-collapse: collapse; width: 100%; padding: 10px;">
            <tbody>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">ERW Practitioners</td>
            <td style="padding: 10px;">Project developers and researchers can use this tool for preliminary screening of feedstock-soil combinations before deployment, helping to identify potential regulatory concerns early in the planning process.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Buyers</td>
            <td style="padding: 10px;">Organizations investing in ERW offtakes can incorporate this tool into their diligence processes to assess if a project has the potential for metal accumulation in the soils of the project area, and if so, conduct follow-up diligence to understand these risks better.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Policymakers and Regulators</td>
            <td style="padding: 10px;">Those developing frameworks for ERW regulations can use this tool to better understand the relationship between various feedstocks, baseline soil metal concentrations, and existing soil regulations.</td>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 10px;">Farmers and Landowners</td>
            <td style="padding: 10px;">For those considering hosting an ERW project on their land, this tool can help them understand potential metal accumulation impacts and evaluate whether a proposed feedstock could potentially impact soil metal concentrations in the immediate or long term.</td>
            </tr>
            <tr>
            <td style="padding: 10px;"><strong>Important Note for Users</strong></td>
            <td style="padding: 10px;"><i>The ERW-MAC provides a conservative first assessment only. It is not a substitute for comprehensive site-specific analysis, expert review, or regulatory compliance verification. The simplified model intentionally excludes many factors that influence actual metal behavior in soils, and therefore should be used as one component of a broader safety assessment process, not as a definitive determination of deployment safety. This tool is not relevant for assessing risks from asbestiform minerals, silicosis, or radionuclides.</i></td>
            </tbody>
            </table>
            </div>
        </section>
        <section id="erw-mac-tool">
			<h1>ERW-MAC Tool</h1>
            <div class="links">
                <a href="https://metals.cascadeclimate.org/">Link to Calculator↗</a>
                <a href="https://cascadeclimate.org/Cascade-Climate_ERW-MAC%20preset%20model%20results%20slides.pdf">Link to Preset Model Results↗</a>
            </div>
		</section>
        <section id="takeaways">
			<h1>Takeaways</h1>
           
		</section>
	</main>
</div>


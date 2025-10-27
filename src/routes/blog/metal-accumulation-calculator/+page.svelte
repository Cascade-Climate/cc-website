<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import metals from '$lib/images/nature/metals.webp';
    import apprate from '$lib/images/equations/Application-Rate-EQ.webp';
    import massbalance from '$lib/images/equations/Basic-Mass-Balance-EQ.webp';
    import feedstockconc from '$lib/images/equations/HM-Concentration-Feedstock-EQ.webp';
    import soilconc from '$lib/images/equations/HM-Concentration-Soil-EQ.webp';
    import soilbd from '$lib/images/equations/Soil-BD-EQ.webp';
    import soildepth from '$lib/images/equations/Soil-Depth-EQ.webp';
    import finalsoil from '$lib/images/equations/HM-Concentration-Final-Soil.webp';
</script>

<svelte:head>
    <title>ERW Metal Accumulation Calculator</title> 
    <meta
	name="description"
	content="Cascade Climate has developed a free-to-use maximally conservative mass-balance model for assessing the risk of metal accumulation in soils."
/>
</svelte:head>


<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>ERW Metal Accumulation Calculator</h1>
                <p>Enhanced rock weathering (ERW) has emerged as a promising carbon dioxide removal approach that could meaningfully contribute to climate change mitigation while improving agricultural soils. However, as the crushed rocks from ERW deployments break down over time and carbon is removed from the atmosphere, various metals within these rocks are also released. If certain metals accumulate to high enough levels in soils, they can pose risks to environmental and human health. <strong>Our goal is to help the ERW community better understand metal accumulation risks by providing a tool that intentionally uses risk-maximizing assumptions to compare potential metal accumulation against existing soil regulations.</strong></p>
                <br>
                    <p><strong>In the course of this work, we came to three recommendations for the ERW community to pursue today:</strong></p>
                    <ol>
                    <li>Encourage broader sharing of deployment data in public repositories to enable further analysis and understanding of the risk of metal accumulation from ERW deployments.</li>
                    <li>Support the development of regulations that account for important biogeochemical dynamics of ERW, such as variable dissolution rates of metal-bearing minerals in feedstocks, characteristics that influence metal mobility in soils (pH, redox, organic content), varying application rates across deployments, and sensitivity to particular risk exposure pathways.</li>
                    <li>Maintain conservative approaches to evaluating metal risks until ERW-specific regulatory frameworks are developed and/or until the fate of these metals in ERW deployments are better understood.</li>
                    </ol>
                    <p>By following these recommendations, we can safeguard soils while advancing ERW as a climate-smart practice until more specific regulatory frameworks are developed.</p>
			</div>
            <img src={metals} alt="Enhanced Rock Weathering" />
		</div>
		<div class="links">
			<a href="https://erw-mac.cascadeclimate.org/">Link to Calculator↗</a>
            <a href="https://cascadeclimate.org/Cascade-Climate_ERW-MAC%20preset%20model%20results%20slides.pdf">Link to Preset Model Results↗</a>
            <a href="https://docs.google.com/spreadsheets/d/1GRJaidyt-xwzSfo-EoP9OpVmLbWjOdUnkXe0MdrXehM/edit?usp=sharing">Link to Global Soil Metal Concentration Regulation Database↗</a>
		</div>
	</section>
	<ScrollNav />
	<main>
		<section id="introduction">
			<h1>Introduction</h1>
            <p>Industrial contamination has led to excessive accumulation of some metals in many regions that are recognized to cause harm (<a href="https://link.springer.com/book/10.1007/978-94-007-4470-7" target="_blank" rel="noopener">Alloway, 2013</a>). If metals accumulate to excessive levels in cropland soils, it can have negative effects on crop yields, soil quality, human health, and the environment more broadly (<a href="https://link.springer.com/book/10.1007/978-94-007-4470-7" target="_blank" rel="noopener">Alloway, 2013</a>; <a href="https://www.sciencedirect.com/science/article/pii/S0160412015301203" target="_blank" rel="noopener">T&oacute;th et al., 2016</a>; <a href="https://link.springer.com/article/10.1007/s11356-014-3849-9" target="_blank" rel="noopener">Anjum et al., 2014</a>; <a href="https://bsssjournals.onlinelibrary.wiley.com/doi/full/10.1111/ejss.13343" target="_blank" rel="noopener">Dupla et al., 2023</a>). However, due to the early stage of the ERW field, the actual risk of metals reaching harmful concentrations from ERW deployments remains largely unexplored via systematic research. The lack of comprehensive data on metal accumulation in soils from ERW deployments limits both policy support and market adoption. We need a better collective understanding of these risks.</p>
            <div style="background-color: #173B3F; color: white; padding: 20px 20px 20px 20px; border-radius: 10px; margin-top: 20px;">
                <h3 style="margin-top: 0;">History of Contaminants in Agriculture</h3>
                <p>The agriculture sector has extensive experience managing toxicity risks from various crop inputs, and its track record demonstrates both successful and cautionary examples of risk management. Crop protection products (e.g., pesticides, herbicides) operate within well-defined safety frameworks that have evolved to protect soil, water, and human health, albeit <a href="https://www.epa.gov/international-cooperation/persistent-organic-pollutants-global-issue-global-response#:~:text=The%20DDT%20Dilemma&amp;text=In%20the%20United%20States%2C%20DDT,species%20recoveries%20in%20our%20history." target="_blank" rel="noopener">with mixed success</a>. An example that has recently come to light is the widespread contamination of agricultural land by sewage sludge fertilizers <a href="https://www.nytimes.com/2025/01/14/climate/epa-pfas-forever-chemicals-sludge-fertilizer.html" target="_blank" rel="noopener">containing PFAS compounds</a>, which illustrates the dire consequences of deploying materials without adequate prior risk assessment and appropriate regulations. Cautionary tales like these underscore a critical lesson for ERW implementation: <strong>establishing comprehensive safety parameters and monitoring protocols before deployments occur at scale is essential to mitigate and manage potential unintended consequences.</strong> By learning from the mixed history of agricultural amendments, we can develop proactive &ndash; rather than reactive &ndash; approaches to ERW risk management.</p>
            </div>
            <h3>Current Regulatory Landscape:&nbsp;</h3>
            <p>Due to the relatively recent rise of ERW, there are no legislative soil regulations that have been created solely with the practice of ERW in mind. Currently, there are two types of regulations that are the most relevant to ERW deployments:</p>
            <ol>
            <li><strong>Feedstock Regulations:</strong> These regulations set limits on the concentration of metals allowed in feedstocks, such as the <a href="https://www.epa.gov/sites/default/files/2018-12/documents/plain-english-guide-part503-biosolids-rule.pdf" target="_blank" rel="noopener">EPA&rsquo;s 503c Biosolids Rule</a> or the <a href="https://eur-lex.europa.eu/eli/reg/2019/1009/oj/eng" target="_blank" rel="noopener">EU Fertilizer Products Regulation</a>. However, these regulations are generally unsuitable for ERW deployments for a few reasons. In the case of the biosolids legislation, the regulated feedstock (liquid waste sludge) is more soluble and releases metals more readily than ERW feedstocks. As a result, applying the same regulatory thresholds to ERW materials can significantly underestimate the amount of rock powder that can be safely applied to land, unnecessarily restricting the carbon removal potential of ERW projects while not accurately reflecting the actual environmental risk. In the case of the EU Fertilizer Products Regulation, there are no limits on application rates for the inorganic feedstocks that are regulated. This can be problematic for ERW deployments because even if the concentration of metals in each application meets regulatory standards, without limits on total application amounts, excessive quantities of metals could still accumulate in soil over time. The concentration of metals in the soil after amendment application depends on the total metal load added to soil, not merely the concentration in individual applications. Therefore, feedstock concentration limits alone are insufficient to protect soils against excessive metal accumulation when application rates remain unrestricted.</li>
            <li><strong>Soil Regulations: </strong>Metal threshold limits for soils regulate the concentration of metals present in soil. These regulations vary in their specificity: some are explicitly intended for industrial clean-up sites, others establish different thresholds based on soil pH ranges, and some are designated for specific land uses (residential, industrial, agricultural, etc). In certain cases, baseline soil conditions can exceed soil regulatory thresholds, which could effectively prohibit ERW deployments with any trace levels of the offending metals.
                <ul>
                    <li style="margin-top: 10px;">Regulations around the world include soil thresholds for metals in an incomplete and uncoordinated way, and ERW practitioners are left to interpret these as guidelines for ecosystem safety at their deployment sites. Any one set of regulations only regulates some metals, and leaves out others that are also relevant to ERW. For example:
                        <ul>
                            <li style="margin-top: 10px;">The <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:01986L0278-20220101" target="_blank" rel="noopener">EU Limit Values for Concentrations of Heavy Metals in Soils</a> only list thresholds for 6 metals (Cd, Cu, Ni, Pb, Zn, Hg).&nbsp;</li>
                            <li style="margin-top: 10px;">The <a href="https://www.finlex.fi/en/laki/kaannokset/2007/en20070214.pdf" target="_blank" rel="noopener">Ministry of the Environment Finland Assessment of Soil Contamination and Remediation Needs</a> is one of the most comprehensive, listing thresholds for 11 (Sb, As, Hg, Cd, Co, Cr, Cu, Pb, Ni, Zn, and V), but does not include other metals that can be present in feedstocks such as Mn and Be.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>
            <h3>Target Regulatory Landscape:</h3>
            <p>Ideally, there would be established thresholds for both feedstock and soil metal concentrations regulating the practice of applying rock powders that take into account local soil types and metal concentration baselines. However, due to the early nature of the ERW field, this does not currently exist. Establishing such thresholds requires comprehensive datasets from diverse feedstocks applied across different soil conditions, monitored over extended time periods to understand long-term impacts and ecosystem responses that governments can then use to develop country-specific regulations. In lieu of these ERW-specific thresholds, practitioners are forced to rely on regulations that were not created with the intent of regulating rock powder applications.</p>
            <p>Given that we do not have ERW-specific thresholds that span both feedstock and soil concentrations, we decided to opt for a conservative approach in modeling metal accumulation in soils from ERW deployments to proactively identify potential metal accumulation risks from a deployment. We focused on soil concentrations because they reflect what the soil system is experiencing, and they provide a more direct measure of potential ecological and agricultural impacts than feedstock concentrations alone. Soil concentration thresholds account for the cumulative effects of metal additions, existing background levels, and local soil chemistry that influence metal transport and bioavailability, making them more relevant for assessing actual environmental risk than feedstock-only thresholds.</p>
		</section>
		<section id="approach">
			<h1>Approach</h1>
            <p>To gain a better first-order understanding of the potential risks of metal accumulation in soils from ERW deployments, we developed a maximally conservative mass-balance model: the ERW-MAC (Enhanced Rock Weathering Metal Accumulation Calculator).</p>
            <p>In this case, “maximally conservative” means that the model purposefully reflects the highest metal accumulation scenarios that an ERW deployment could encounter, including: 1) the feedstock dissolves completely and immediately into the soil, 2) no metals leave the soil system, and 3) metals are distributed homogeneously throughout a fixed depth interval in the soil. We chose the maximally conservative approach to establish the lowest threshold for risk assessment. If a modeled deployment is shown to be within regulatory limits even under these deliberately exaggerated assumptions, users can be confident that the deployment should remain within regulatory limits under more realistic conditions. Essentially, by passing this 'stress test,' users can understand their metal accumulation risk from a deployment with a reliable margin.</p>
            <p><strong>The ERW-MAC allows users to:&nbsp;</strong></p>
            <ol>
            <li>View preset scenarios using common feedstocks to visualize the risk of different metal accumulation in soils from a generic ERW deployment.</li>
            <li>Input their own feedstock and soil concentrations of 16 different metals and obtain an understanding of how those metals could accumulate in the soil over one or many ERW deployments.</li>
            <li>Gain insights into how resulting concentrations of metals in soil stack up against existing global soil regulations.</li>
            </ol>

            <h3>Methods &amp; Key Assumptions</h3>
                <p>The model integrates three main inputs:</p>
                <ol>
                <li>What are the ranges of concentrations of metals in common feedstocks such as basalt and peridotite (used as a proxy for olivine)?</li>
                <li>What are the baseline concentrations of metals in agricultural soils?&nbsp;</li>
                <li>What are soil threshold values for metals in global regulations?&nbsp;</li>
                </ol>
                <p>This model then identifies which metals from commonly-used peridotite and basalt feedstocks might warrant deeper investigation due to their risk of potential accumulation from rock powder applications. The model employs the maximally conservative approach with the following simplifying assumptions:</p>
                <ol>
                <li>Full, instantaneous dissolution of the feedstock over one application event with no partial metal release from the feedstock or time component to dissolution.</li>
                <li>No export of metals from soil after deposition (e.g., by plant uptake or transport through the soil column into the lower vadose zone).</li>
                <li>Homogenous vertical and lateral soil metal concentrations throughout the deployment site.</li>
                </ol>
                <h3>Data Sources&nbsp;</h3>
                <p>In the pre-set hypothetical scenarios presented in the ERW-MAC, the feedstock metal concentration data is being pulled from the <a href="https://georoc.eu/georoc/new-start.asp" target="_blank" rel="noopener">GEOROC</a> database (Geochemistry of Rocks of the Oceans and Continents). The baseline agricultural soil metal concentration data is being pulled from the <a href="http://weppi.gtk.fi/publ/foregsatlas/" target="_blank" rel="noopener">FOREGS</a> (Geochemical Atlas of Europe) and <a href="https://mrdata.usgs.gov/metadata/ds-801.faq.html" target="_blank" rel="noopener">USGS</a> soil databases, as well as from several academic sources (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0045653518319210#appsec1" target="_blank" rel="noopener">Kumar et al., 2021</a>, <a href="https://www.researchgate.net/publication/230683184_Baseline_Concentration_of_Heavy_Metals_in_Brazilian_Latosols" target="_blank" rel="noopener">Campos et al., 2003</a>, and <a href="https://www.sciencedirect.com/science/article/abs/pii/S0048969720325754?casa_token=vpmHiZBuFyIAAAAA:xwU_k3LVK6fEOyER7IorNpVX3iKXEVdMoBFWP-LVctILTWTTD9w9QwF4YQ-AZJZguvOO3ENc" target="_blank" rel="noopener">Wang et al., 2020</a>). Our search for baseline soil data revealed that there are fewer and more poorly-resolved soil datasets looking at metal concentrations in Global South countries when compared to Global North countries.&nbsp;</p>

                <p>We also compiled a preliminary global list of relevant soil metal concentration regulations that are included <a href="https://docs.google.com/spreadsheets/d/1GRJaidyt-xwzSfo-EoP9OpVmLbWjOdUnkXe0MdrXehM/edit?usp=sharing" target="_blank" rel="noopener">here</a>. If you have any regulations to add, please reach out to us at <a href="mailto:metals@cascadeclimate.org" target="_blank" rel="noopener">metals@cascadeclimate.org</a> so that we can update the list to ensure that it remains a useful community resource.</p>

                <h3>Maximally Conservative Mass Balance Function</h3>
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
                    <td style="padding: 10px;"><img src={soilconc} alt="Concentration of Feedstock Equation"/></td>
                    <td style="padding: 10px;">= the concentration of a metal in the baseline soil;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={apprate} alt="Feedstock Application Rate Equation"/></td>
                    <td style="padding: 10px;">= number of times a feedstock is deployed to the soil at the given application rate;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={soildepth} alt="Soil Depth Equation" style="width: 30%;"/></td>
                    <td style="padding: 10px;">= the soil depth at which the feedstock will be incorporated;</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #000;">
                    <td style="padding: 10px;"><img src={soilbd} alt="Soil Bulk Density Equation" style="width: 60%;"/></td>
                    <td style="padding: 10px;">= the bulk density of the soil the feedstock is being deployed on;</td>
                    </tr>
                    <tr>
                    <td style="padding: 10px;"><img src={finalsoil} alt="Concentration of Feedstock Equation"/></td>
                    <td style="padding: 10px;">= the calculated concentration of a metal after complete dissolution of the feedstock and accumulation into the soil.</td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                <p>For each metal, a modeled distribution was fitted to the feedstock baseline values from GEOROC and to the collected global soil baseline values. A Monte Carlo simulation then randomly sampled 10,000 values from the modeled distributions of both soil and feedstock metal concentrations and used these as inputs to the mass balance model (see equations above).</p>
                <p>While using the ERW-MAC tool, it is important to note that the line depicting no feedstock application (0 t/ha) will occasionally show a slightly higher metal concentration than the modeled scenarios with feedstock addition. This is because of the Monte Carlo simulation used to create the distributions shown in the preset deployment scenarios. A Monte Carlo simulation takes a variable that has uncertainty and assigns it a random value within the uncertainty bounds, and this randomness will sometimes cause the 0 t/ha line to show a slightly elevated concentration of the selected metal.</p>
                <p>The Cascade team hopes that the ERW-MAC can help users build an informed picture of potential risks from metal accumulation in the soils of their deployment area. Users can access a more detailed description of the tool development methods <a href="https://docs.google.com/document/d/1aNBgdIHDXMeg_QYtfbsXSAB5AzD0Sjl95kmo2tldLN0/edit?tab=t.0" target="_blank" rel="noopener">here</a>.</p>
		</section>
		<section id="intended-users">
			<h1>Intended Users</h1>
            <p>The ERW-MAC is designed to be used by many ERW stakeholders, including:</p>
            <h5 style="margin-bottom: 0.5rem;">ERW Practitioners:&nbsp;</h5>
            <p>Project developers and researchers can use this tool for preliminary screening of feedstock-soil combinations before deployment, helping to identify potential regulatory concerns early in the planning process.</p>
            <h5 style="margin-bottom: 0.5rem;">Buyers:&nbsp;</h5>
            <p>Organizations investing in ERW offtakes can incorporate this tool into their diligence processes to assess if a project has the potential for metal accumulation in the soils of the project area that could surpass regulatory limits, and if so, conduct follow-up diligence to understand these risks better.</p>
            <h5 style="margin-bottom: 0.5rem;">Policymakers and Regulators:&nbsp;</h5>
            <p>Those developing frameworks for ERW regulations can use this tool to better understand the relationship between various feedstocks, baseline soil metal concentrations, and existing soil regulations.</p>
            <h5 style="margin-bottom: 0.5rem;">Farmers and Landowners:&nbsp;</h5>
            <p>For those considering hosting an ERW project on their land, this tool can help them understand potential metal accumulation impacts and evaluate whether a proposed feedstock could potentially impact soil metal concentrations in the immediate or long term.</p>
            <h5 style="margin-bottom: 0.5rem;">Important Note for Users:&nbsp;</h5>
            <p>The ERW-MAC provides a conservative first assessment only. It is not a substitute for comprehensive site-specific analysis, expert review, or regulatory compliance verification. The simplified model intentionally excludes many factors that influence actual metal behavior in soils, and therefore should be used as one component of a broader safety assessment process, not as a definitive determination of deployment safety. This tool is not relevant for assessing risks from asbestiform minerals, silicosis, or radionuclides.</p>
            <br>
        </section>
        <section id="erw-mac-tool">
			<h1>ERW-MAC Tool</h1>
            <div class="links">
                <a href="https://erw-mac.cascadeclimate.org/">Link to Calculator↗</a>
                <a href="https://cascadeclimate.org/Cascade-Climate_ERW-MAC%20preset%20model%20results%20slides.pdf">Link to Preset Model Results↗</a>
            </div>
		</section>
        <section id="takeaways">
			<h1>Takeaways</h1>
            <p>Throughout the development of the ERW-MAC, we uncovered several important insights about metal accumulation dynamics and regulatory frameworks. Below, we summarize the key findings that emerged from our analysis, highlighting critical factors that ERW practitioners should consider when planning deployments and navigating the current regulatory landscape.</p>
            <h3>Regulatory Takeaways</h3>
            <ul>
                <li><strong>Extraction Type: </strong>Regulations vary in their required metal extraction methods for determining soil concentrations, creating challenges for comparison and potentially causing variations in measured metal concentration values. ERW practitioners must understand which specific digestion methods are required by regulations for determining soil metal concentrations to ensure valid comparisons.</li>
                <ul>
                <li>For example, if a regulation sets thresholds determined via a strong acid digest, but an ERW practitioner measures their metal concentrations using a weak acid digest, the ERW practitioner will have underestimated the concentration of metal in their soil and therefore may unknowingly be in non-compliance with the regulation. The reverse is also true: if a regulation sets thresholds determined using a strong acid digest, but an ERW practitioner uses a total digest, the ERW practitioner will have overestimated the soil metal concentration relative to the regulation&rsquo;s thresholds.</li>
                </ul>
                </ul>
                <ul>
                <li><strong>Regulatory Variance: </strong>For many of the regulated metals, there is a very wide range of threshold values across jurisdictions or regulating agencies. This variance highlights the importance that deployments are held to the appropriate regulation for that context and jurisdiction.</li>
                <ul>
                <li>For example, it may be inappropriate to hold a deployment in Brazil to a regulation set by Finland due to the stark differences in Finnish soils to those in the tropical areas of Brazil. Furthermore, the number of regulations available for a given metal varies widely, with some metals having thresholds established in many more countries than others. For example, we found that Ni is regulated in soils in at least 13 different nations, whereas Ba regulations were only available in 1 country in our database.</li>
                </ul>
                </ul>
                <ul>
                <li><strong>Limited Accessibility of Soil Regulations in Global South: </strong>Most of the regulations included in the ERW-MAC are from Global North areas, with the exception of Brazil. This geographic imbalance reflects the scarcity of such regulations in Global South jurisdictions. Many countries where ERW has high scale potential are in the Global South, where regulations on soil metal concentrations are either non-existent or weakly enforced (<a href="https://www.science.org/doi/10.1126/science.adr5214" target="_blank" rel="noopener">Hou et al., 2025</a>).&nbsp;</li>
                </ul>

            <h3>ERW Metal Accumulation Risk Takeaways</h3>
            <ul>
                <li><strong>Low Metal Accumulation Risk for Most Metals from ERW Deployments</strong></li>
                <ul>
                <li>In most deployment scenarios modeled in the ERW-MAC, feedstock addition to soils rarely causes metals to accumulate at high enough rates to cause concern. 13 out of the 16 metals consistently showed minimal accumulation in the model, with Ni, Cr*, and V being the 3 metals showing soil threshold overshoot in some scenarios.</li>
                <li>Because the ERW-MAC intentionally models the highest metal accumulation scenarios that an ERW deployment could face, and does not take into account dynamics that could further limit metal availability in soils, the actual risk of metal accumulation is likely lower than this model indicates.&nbsp;</li>
                <li>It's important to note that the ERW-MAC uses average metal concentrations from typical basalt and peridotite feedstocks and generalized soil conditions. Local feedstock sources may contain anomalously high concentrations of specific metals not identified as high-risk in our analysis. Similarly, some deployment sites may have elevated baseline concentrations of metals other than Ni, Cr, and V that could exceed regulatory thresholds with additional inputs.</li>
                <li>Therefore, the ERW-MAC does not obviate the need for thorough site-specific analyses of both baseline soils and feedstocks.</li>
                </ul>
                </ul>
                <p><em>*Note that the regulations for Cr listed in the ERW-MAC each refer to total Cr concentrations, which includes the two most common forms in the environment &ndash; Cr(III) and Cr(VI). Cr(III) is highly insoluble, immobile, and carries low safety risk at most concentrations found naturally in the environment. Conversely, Cr(VI) is highly soluble, mobile, and is toxic at comparatively low concentrations to Cr(III).</em></p>
		</section>
        <section id="next-steps">
			<h1>Next Steps</h1>
            
            <p>As ERW moves toward larger-scale deployment, establishing robust safety frameworks requires coordinated action across the ERW community. Our analysis highlights several critical paths forward:</p>
            <ol>
                <li><strong>Methodology development: </strong>We look forward to collaborating with credit issuers and methodology developers to refine feedstock and soil characterization requirements for ERW projects. We particularly encourage methodologies to incorporate appropriate sampling protocols and establish standardized analytical methods for metal assessment.</li>
                <li><strong>Data sharing</strong>: Making feedstock and soil metal concentration data publicly accessible is critical to both build buy-in from farmers, communities, and policymakers, and help to accelerate learnings on metal accumulation in ERW deployments. As organizations share data from real-world implementations of ERW, scientific knowledge advances, which then builds confidence in the safety and efficacy of deployments. This creates a positive feedback loop, where bolstered trust increases the amount of responsibly-deployed ERW projects &ndash; ultimately expanding both carbon and farmer benefits. We strongly urge all ERW practitioners to share their feedstock and soil metal data in a transparent, timely and easily accessible way. Platforms like the <a href="https://cascadeclimate.org/blog/erw-data-quarry" target="_blank" rel="noopener">ERW Data Quarry</a> can be a helpful centralizing hub to ensure all stakeholders can find this important data.</li>
                <li><strong>Policy &amp; Regulation: </strong>For policymakers and regulators, our findings demonstrate the need for ERW-specific frameworks that account for the unique characteristics of rock and mineral weathering in agricultural soils. Current regulations, largely adapted from other contexts, may not adequately address ERW's distinct risks and deployment patterns.</li>
                </ol>
            <p>Collaborative efforts to refine methodologies, promote data transparency, and develop ERW-specific regulations will help ensure that ERW delivers its climate benefits while maintaining farmer trust, soil health, and environmental safety. As the field evolves, we encourage all stakeholders to embrace both caution and innovation in equal measure, using tools like the ERW-MAC to guide evidence-based decision making. The path toward responsible ERW implementation requires ongoing vigilance, adaptive management strategies, and a commitment to continuous learning from field data. By balancing the urgency of climate action with thoughtful consideration of potential areas of risk, the ERW community can develop practices that maximize ERW&rsquo;s climate benefits while preserving the safety of the environment.</p>
            
        </section> 

	</main>
</div>


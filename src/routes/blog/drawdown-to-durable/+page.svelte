<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
    import grants from '$lib/images/nature/grants.webp';
    import landfill from '$lib/images/blog/landfill-gas-projects.webp';
    import basalteu from '$lib/images/nature/basalteu.webp';
    import NFZ from '$lib/images/nature/NFZ.webp';
    
</script>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>From Drawdown to Durable Storage: Understanding ERW in EU Carbon Removal Policy</h1>
                <p class="date" style="font-weight: 200;">Sep 17, 2025</p>

                <hr>
                
                <p>The European Commission has announced an upcoming workshop to assess the possibility of including enhanced rock weathering (ERW) in the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R3012">Carbon Removal and Carbon Farming</a>  (CRCF) regulation. The goal of this policy is to facilitate investment in carbon removal by establishing an EU-wide voluntary framework for certifying removals. In our last blog, we outlined four key recommendations for a potential CRCF methodology. Building on that work, we recognize the need for a deeper understanding of how ERW fits within climate policy and carbon market frameworks.</p>
                
                <br>

                <p>This blog bridges the gap between introductory ERW explainers and technical documents, offering an in-depth yet accessible look at ERW’s attributes as a high-integrity carbon removal pathway. While ERW has clear strengths relative to the criteria, realizing its significant potential for carbon removal and co-benefits requires addressing distinct challenges.
                </p>
			</div>

		</div>

	</section>
	<ScrollNav />
	<main>
    
    <section id="dtd-criteria">
        <h1>Criteria</h1>

        <p>This blog assesses ERW&rsquo;s performance against the CRCF&rsquo;s Qu.A.L.ITY criteria, the criteria the Commission is using to determine which removal methods qualify for inclusion:&nbsp;</p>
<ul>
<li>Quantification: How do we robustly quantify the amount of carbon that&nbsp; has been removed?</li>
<li>Long-term storage: Will carbon be durably stored for hundreds of years or more?</li>
<li>Additionality: Would this carbon have been removed absent carbon finance?</li>
<li>Sustainability: How does this practice affect the environment beyond carbon removal?</li>
</ul>

    </section>

	<section id="dtd-definitions">
        <h1>Definitions</h1>
    
      <p>Here we define several terms used in this blog. While consensus is building, these terms are not universally agreed upon across the carbon removal sector. Where possible we align with CRCF usage.&nbsp;</p>
<ul>
<li><strong>Carbon removal </strong>(also referred to as carbon dioxide removal, or CDR)<strong>: </strong>the anthropogenic removal of carbon dioxide from the atmosphere and its durable storage in geological, terrestrial, groundwater, or ocean reservoirs. For the purposes of ERW, we find it useful to break the process of carbon removal down into two steps:&nbsp;</li>
</ul>
<ol>
<li><strong>Drawdown: </strong>the transfer of carbon dioxide from the atmosphere to the soil system through the chemical processes of rock weathering.</li>
<li><strong>Storage: </strong>the addition of carbon to the durable reservoir of the ocean or groundwater, where it is stored in the form of dissolved bicarbonate or carbonate ions on the order of <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016RG000533" target="_blank" rel="noopener">10,000 years</a> or more.</li>
</ol>
<p>Note that ERW results in carbon removal, but the two steps of this process &ndash; drawdown and storage &ndash; do not happen simultaneously. Because ERW interacts with complex natural systems, carbon-containing molecules take time to move from the atmosphere, through soil and water systems, to the durable reservoir.&nbsp;</p>
<ul>
<li><strong>Reservoir: </strong>the durable storage location, typically the ocean (though sometimes groundwater).</li>
<li><strong>Loss</strong>: carbon that has been drawn down by reacting with applied rock, but that is lost before making it to the durable reservoir. Loss can occur through a variety of pathways in terrestrial and hydrological systems. While loss is not defined in the CRCF, we find it important to introduce this term to distinguish it from reversal.</li>
<li><strong>Reversal</strong>: the release of carbon from the durable reservoir back into the atmosphere. Reversal, therefore, can only occur after both carbon drawdown and durable storage have occurred.</li>
</ul>
    
    </section>

    <section id="dtd-quantification">
        <h1>Quantification</h1>

       <p>ERW accelerates the natural process of rock weathering that has regulated Earth&rsquo;s climate for billions of years. Finely crushed alkaline rock is applied to fields, where it dissolves in water from rain or irrigation. Alkaline rocks include both carbonates and silicates; here we focus primarily on silicate ERW. The dissolved rock interacts with carbon dioxide in the atmosphere, converting it into a dissolved form that is transported through the soil and eventually to the ocean (or, in some cases, groundwater) where it is stored for tens of thousands of years.&nbsp;</p>
<p><a href="https://cascadeclimate.org/CC_Foundations%20for%20CDR%20Quantification%20in%20ERW%20Deployments.pdf" target="_blank" rel="noopener">Quantification</a> of total carbon removed, sometimes called <em>net CDR</em>, occurs by:</p>
<ol>
<li>Measuring total drawdown (sometimes called <em>potential CDR</em>)</li>
<li>Deducting losses that occur between drawdown and storage, including:</li>
</ol>
<ul>
<li><strong>Near-field zone losses:</strong> carbon losses that occur in the upper portion of the soil. These losses can be directly measured.</li>
<li><strong>Far-field zone losses: </strong>losses that occur between the upper soil region and the durable carbon storage reservoir. At current deployment scale, these losses are difficult or impossible to measure and in most cases should be modeled.</li>
<li><strong>Life cycle emissions: </strong>greenhouse gas emissions associated with the production, transport, handling, and spreading of ERW feedstock materials.</li>
<li><strong>Counterfactual carbon removal:</strong> carbon removal (anthropogenic or natural) that would have occurred in the absence of an ERW project.&nbsp;</li>
</ul>
<p><em>For a more complete inventory of possible losses in each of these areas, see our recent </em><a href="https://cascadeclimate.org/blog/recommendations-from-foundations" target="_blank" rel="noopener"><em>blog post</em></a><em>.</em></p>

       <img
		src={NFZ}
		alt="Graphic that illustrates the journey from carbon drawdown to durable carbon storage"
	/>

<p><strong>How Measurement Works in the Near-Field Zone</strong></p>
<p>The &ldquo;near-field zone&rdquo; is the top layer of the soil, usually 15-30 cm, that is measurable over large areas with available tools. Carbon drawdown occurs in this zone as rock dissolves. A variety of tools measure either dissolved inorganic carbon (drawn down atmospheric carbon that is dissolved in water), or cations (positively charged particles from rock dissolution such as calcium or magnesium) as a <a href="https://cascadeclimate.org/Cascade%20Climate_Enhanced%20Rock%20Weathering%20101_vFinal.pdf" target="_blank" rel="noopener">proxy for carbon</a>. After drawdown, however, carbon can be lost through a variety of pathways.</p>
<p>Appropriate deductions to account for this lost carbon must be made, which depend on the measurement approach taken. These <a href="https://www.frontiersin.org/journals/climate/articles/10.3389/fclim.2024.1345224/full" target="_blank" rel="noopener">measurement tools</a>, and corresponding deductions, are <a href="https://cascadeclimate.org/CC_Foundations%20for%20CDR%20Quantification%20in%20ERW%20Deployments.pdf" target="_blank" rel="noopener">widely-accepted</a> to quantify losses in the near-field zone. However, care should be taken to ensure that the measurement and analytical approach are suited for a given soil system.&nbsp;</p>
<br>
<p><strong>How Modeling Works in the Far-Field Zone</strong></p>
<p>The far-field zone is the area between the end of the near-field zone and the durable reservoir. At current deployment scales, ERW&rsquo;s impact on river and ocean chemistry is too dilute to measure, making it impossible to directly track carbon all the way to its durable reservoir. Because of this, losses of carbon from surface waters in streams, rivers, and the ocean are modeled instead of measured. These models, which draw on decades of research, are capable of producing robust and conservative loss estimations for these downstream systems (<a href="https://academic.oup.com/pnasnexus/article/2/4/pgad059/7101163?login=false" target="_blank" rel="noopener">Kanzaki et al., 2023</a>; <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016RG000533" target="_blank" rel="noopener">Renforth and Henderson, 2017</a>; <a href="https://iopscience.iop.org/article/10.1088/1748-9326/ada398" target="_blank" rel="noopener">Zhang et al., 2025</a>). As our scientific understanding of earth systems continues to advance, we can expect models across earth sciences&mdash;including ERW&mdash;to continue improving over time.</p>
<br>
<p><strong>Deep Soil: The Biggest Measurement Challenge in the Far-Field Zone</strong></p>
<p>The deep soil, an area of the far-field zone that is too impractical to measure across an entire project, currently presents one of the thorniest challenges for ERW. As we noted in our recent <a href="https://cascadeclimate.org/blog/recommendations-from-foundations" target="_blank" rel="noopener">blog</a>, project developers can and should avoid deploying in places where deductions are expected to be large or difficult to constrain (i.e., uncertainty is high) based on the soil, hydroclimate, and deployment context. To further increase confidence in deep soil loss estimates, data from small, intensely monitored plots can be used to quantify and extrapolate these deep soil losses across a project site.&nbsp;</p>
<br>
<p><strong>Conservative Approaches to Quantification</strong>&nbsp; &nbsp;</p>
<p>Key quantification choices can ensure that only carbon we are <em>highly confident </em>reaches durable storage is accounted for. Conservative quantification accepts the risk of undercounting genuine carbon removal to maintain integrity and avoid overstating climate benefits. Not all of these choices are appropriate for every deployment scenario and may evolve as ERW certainty continues to improve. Conservative approaches to quantification may include:&nbsp;</p>
<ol>
<li><strong>Deeper measurement and extrapolation: </strong>where appropriate, using intensively monitored plots to better understand and reduce uncertainty around losses in the deep soil.&nbsp;</li>
<li><strong>Geographical exclusion:</strong> avoiding deployment in areas where losses are likely high or difficult to estimate. For example, certain soil types, particularly poorly-drained, clay-rich soils, can increase the risk of cation loss through mineral formation, lowering the amount of net CDR. In contrast, sandy, well-draining soils facilitate quick export of cations and bicarbonate ions from the soil, reducing the chance of carbon loss.&nbsp;</li>
<li><strong>Lower uncertainty bound:</strong> crediting at the lower bound of uncertainty rather than based on the mean or most likely amount of carbon sequestered. Credits can be calculated by selecting a lower error bound to credit on, such that, e.g., there is a very high chance that more carbon was removed from the atmosphere than is reported. This is one strategy for mitigating the risk of over-crediting and incentivizes practitioners to decrease the uncertainty of their deployments via careful site selection, research into new quantification approaches, and optimizing site and measurement design.&nbsp;</li>
<li><strong>Not accounting for likely carbon gains</strong>: disregarding additional carbon removal that happens outside of the measurement zone, even if there is a reasonable certainty that these gains are occurring as indicated by modeling.&nbsp;</li>
</ol>
<p>In summary, there are several layers of conservative accounting choices that protect the integrity of ERW quantification. ERW operates within complex natural systems, making it impossible to track every atom of carbon from the atmosphere to the storage reservoir.</p>
<p><strong>This inherent uncertainty does not make ERW unquantifiable; rather, it underscores the need for fit-for-purpose quantification approaches, relying on what </strong><strong><em>can </em></strong><strong>be measured along with conservative accounting choices.</strong></p>


    </section>  

    <section id="dtd-long-term-storage">
        <h1>Long-term Storage</h1>

        <p>Carbon removal from ERW is considered <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016RG000533" target="_blank" rel="noopener">long-term</a>, also referred to as &ldquo;durable&rdquo; or&nbsp; &ldquo;permanent&rdquo;, based on a robust body of scientific evidence. The carbon removed from the atmosphere through rock weathering is durably stored as dissolved bicarbonate (or carbonate) ions in the ocean or in groundwater, on the order of tens of thousands of years. Evidence for ERW&rsquo;s long-term storage is grounded in decades-long <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/JC086iC10p09776" target="_blank" rel="noopener">research</a> on natural weathering, which sequesters atmospheric carbon through the same geochemical pathway.&nbsp;</p>
        <br>
        <p><strong>Understanding Losses vs. Reversals</strong></p>
<p>As described above, carbon removal has two stages: the initial carbon drawdown and durable storage. The risk of reversal&mdash;carbon lost from the durable reservoir&mdash;is generally low to negligible for ERW projects due to the inherent stability of bicarbonate ions in the reservoir after initial equilibration with the atmosphere-ocean system. Losses, by contrast, occur before storage and must be explicitly accounted for in net carbon dioxide quantification, as described in the quantification section.</p>
<br>
<p><strong>Crediting Durable Removal</strong></p>
<p>Consider a hypothetical ERW project that initially draws down 10 tons of CO2 from the atmosphere, but loses two tons along the path to durable storage. Eight tons of CO2 are ultimately removed, with no tons reversed. By accurately measuring the initial 10 tons and conservatively deducting two or more tons of anticipated losses, we can ensure conservative crediting. In addition, there will be an estimate of uncertainty in the CDR quantification due to possible analytical error and inherent variability in the soil system. Another layer of conservatism can be added by considering the larger error in the estimate. In this simple example, if the uncertainty is +/- 1 ton of CO2, a conservative approach would credit seven units of CO2.</p>



        
    </section>

    <section id="dtd-additionality">
        <h1>Additionality</h1>

<p>Additionality examines whether carbon removal would occur without intervention. It includes both financial additionality (would the activity happen without payment?) and carbon additionality (how much additional carbon is removed compared to business as usual?). Carbon additionality is often referred to as &ldquo;baselining&rdquo; since it compares carbon removed from the activity to carbon removed in the baseline or business as usual scenario. While we are focused on silicate ERW here, carbonates can also be used as an ERW feedstock, but often present more complex additionality considerations.</p>
<br>
<p><strong>Financial Additionality</strong></p>
<p>ERW demonstrates strong financial additionality in Europe. At present, silicate amendments&mdash;the most common feedstock for ERW carbon removal&mdash;are rarely applied as part of typical farm management, and the current cost to benefit ratio of silicate feedstocks is not high enough to drive adoption at a wide scale unless combined with a carbon market payment.</p>
<br>
<p><strong>Baselining&nbsp;</strong></p>
<p>Because ERW works through the action of rock weathering, weathering from other sources that would have occurred in the absence of the ERW project must be considered. For example, silicate ERW projects may displace the use of ag-lime, a carbonate rock amendment used to manage soil acidity. Carbonate weathering, which occurs when farmers use ag-lime, also has the ability to <a href="https://carbonplan.org/research/carbonate-silicate-swap" target="_blank" rel="noopener">sequester carbon</a>, albeit at a lower rate than silicate weathering.&nbsp;</p>
<p>To assess carbon removal from ERW relative to the baseline, project developers and researchers use <a href="https://cascadeclimate.org/CC_Foundations%20for%20CDR%20Quantification%20in%20ERW%20Deployments.pdf" target="_blank" rel="noopener">business as usual plots</a> (BAU)&mdash;nearby farmland with typical agronomic practices that do not receive an ERW treatment. BAU plots enable comparison of the carbon removed from ERW to the carbon that would have been removed under baseline conditions, including ag-lime in geographies where it is commonly applied. Because ag-lime is typically less efficient at removing carbon than silicate ERW, ERW typically results in <em>additional </em>removal, which can be quantified with high integrity through the use of proper BAU controls.</p>

    </section>

    
    <section id="dtd-sustainability">
        <h1>Sustainability</h1>
        
<p>ERW offers significant environmental co-benefits alongside potential risks. These risks can often be mitigated through careful pre-application monitoring and site selection.</p>
<br>
<p><strong>Agricultural Benefits</strong></p>
<p>In areas with acidic soils, ERW neutralizes acidity, which can improve plant <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsbl.2016.0714#d1e556" target="_blank" rel="noopener">nutrient uptake</a>, <a href="https://www.pnas.org/doi/10.1073/pnas.2319436121" target="_blank" rel="noopener">increase</a> <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0295031" target="_blank" rel="noopener">yields</a>, and benefit farmers. ERW may even reduce the need for chemical fertilizers, which are carbon-intensive to produce. Some feedstocks also deliver micro- and macronutrients, improving plant health and potentially yields.</p>
<br>
<p><strong>Managing Heavy Metal Accumulation Risks</strong></p>
<p>Heavy metals such as nickel and chromium, present in some feedstocks, pose risks if concentrations accumulate (<a href="https://link.springer.com/book/10.1007/978-94-007-4470-7" target="_blank" rel="noopener">Alloway, 2013</a>; <a href="https://www.sciencedirect.com/science/article/pii/S0160412015301203" target="_blank" rel="noopener">T&oacute;th et al., 2016</a>; <a href="https://link.springer.com/article/10.1007/s11356-014-3849-9" target="_blank" rel="noopener">Anjum et al., 2014</a>; <a href="https://bsssjournals.onlinelibrary.wiley.com/doi/full/10.1111/ejss.13343" target="_blank" rel="noopener">Dupla et al., 2023</a>). As rocks dissolve, metals are released; at high concentrations these may cause environmental or health impacts. Pre-application sampling of soils and feedstocks, combined with conservative formulas to project post-application concentrations, helps ensure levels remain below regulatory and human safety thresholds. In a previous <a href="https://cascadeclimate.org/blog/recommendations-from-foundations" target="_blank" rel="noopener">blog</a>, we recommended that&mdash;alongside ongoing monitoring&mdash; the CRCF requires project developers to take such an approach to estimate post-application metal concentrations. Cascade has developed a <a href="https://cascadeclimate.org/blog/metal-accumulation-calculator" target="_blank" rel="noopener">tool</a> to make this process simple, replicable, and transparent.</p>
<br>
<p><strong>Broader Environmental Considerations</strong></p>
<p>Other human and environmental benefits and risks exist, including, on the benefit side, river and <a href="https://www.nature.com/articles/nclimate2882" target="_blank" rel="noopener">ocean acidification mitigation</a>, and, on the risk side, localized <a href="https://researchbriefings.files.parliament.uk/documents/POST-PN-0726/POST-PN-0726.pdf" target="_blank" rel="noopener">air quality concerns</a> from the handling of crushed rock. Project developers <a href="https://cascadeclimate.org/CC_Foundations%20for%20CDR%20Quantification%20in%20ERW%20Deployments.pdf" target="_blank" rel="noopener">should conduct</a> a comprehensive environmental risk assessment and develop a risk mitigation plan prior to deployment.</p>

  </section>

    
    <section id="dtd-looking-ahead">
        <h1>Looking Ahead</h1>

       <p>Enhanced rock weathering shows promise across the CRCF's Qu.A.L.ITY criteria. As the European Commission evaluates ERW for CRCF inclusion, the pathway's scientific foundation and scalability present a compelling case, provided robust safeguards ensure high-integrity accounting and environmental protections.</p>
<p>Cascade is committed to supporting this process through ongoing research and collaborative engagement.</p> 
    
    </section>
</main>
<img style="width: 0%;" src={grants} alt="Enhanced Rock Weathering" />
</div>


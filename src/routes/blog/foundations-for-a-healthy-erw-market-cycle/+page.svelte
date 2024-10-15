<script>
	import erw from '$lib/images/rock-weathering.webp';
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import image1 from '$lib/images/blog/increasing-trust-decreasing-cost.webp';
</script>

<svelte:head>
    <title>Foundations for a Healthy ERW Market Cycle</title> 
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Foundations for a Healthy ERW Market Cycle</h1>
				<p class="date">December 11, 2023</p>
				<a href="/people/john-sanchez" style="color: white;">John Sanchez</a>,
				<a href="/people/dai-ellis" style="color: white;">Dai Ellis</a>
				<hr>
				<p><b>October 16, 2024 Note</b>: Note: While most of the thinking captured in the blog post above still holds, Cascade has since changed course as regards the near-term development of an industry standard for quantifying carbon removal via enhanced rock weathering deployments. Our current perspective is captured in <a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments" target="_blank" rel="noopener"><em>Foundations for Carbon Dioxide Removal Quantification in ERW Deployments↗ </em></a>. We coordinated a very productive community process that produced strong alignment on the building blocks of rigorous quantification practices. However, we reached the conclusion that premature standardization—encoding generalizable rules that apply across all settings—posed risks at a moment when the ERW field is better served by a pre-standardization period and a measure of flexibility to adopt tailored quantification approaches in different settings. We are publishing foundational guidance on rigorous quantification to help ensure a common core of consistency in quantification as the community scales up deployment-driven learning.</p>
			</div>
		</div>
	</section>
	<main>
	<p></p>
		<p>	Last week marked a big moment in the short history of durable open-system carbon removal. The
			announcement of Frontier’s $57M offtake agreement to buy ~150,000 removed tons from Lithos, an
			enhanced rock weathering (ERW) supplier, is the world’s first truly large-scale, multi-year
			purchase of durable carbon removal via an open-system pathway.
		</p>
		<p>
			The public reaction to the offtake announcement has included a lot of excitement and also some
			apprehension. Fueling the excitement is a cocktail of features and attributes that make ERW
			attractive—including uncommonly strong co-benefits, a promising cost trajectory, big economic
			opportunities across the Global South, widely-available feedstock, and ability to piggyback on
			existing infrastructure<sup><a id="citation1" href="#footnote1">1</a></sup>. Some other durable
			CDR pathways have some of these features but none combine all of them.
		</p>
		<p>
			Like any open-system pathway, ERW faces some of the ‘sources of messiness’ we have <a
				target="_blank"
				href="https://greatunwind.substack.com/p/leveling-the-playing-field-for-open"
				>previously written about</a
			>
			but on some dimensions may have a more moderate case of these<sup
				><a id="citation2" href="#footnote2">2</a></sup
			>. The biggest source of messiness for ERW—and the subject of
			<a
				target="_blank"
				href="https://www.reuters.com/sustainability/land-use-biodiversity/can-enhanced-rock-weathering-weather-greater-scrutiny-solution-climate-change-2023-11-01/"
				>most current public scrutiny</a
			>—lies in the challenge of rigorously quantifying carbon removal amidst uncertainties. There exists quite a few drivers of uncertainty that require more scientific study and that must be addressed properly in quantifying ERW.
		</p>
		<p>
			To the extent that some observers are feeling concerned or anxious about the advent of
			commercial ERW offtake agreements, the crux question is whether substantial quantification
			uncertainty means that the ERW market is getting too far ahead of ERW science. Are defensible,
			high-confidence carbon removal claims with ERW possible at this stage? Should we put commercial
			offtake activity on ice until we hit certain future milestones in our scientific understanding?
		</p>
		<h1>Fork in the Road for the ERW Market</h1>
		<p>
			We believe the answer to these questions has more to do with how the commercial activity
			happens, rather than whether substantial commercial activity is appropriate. And in turn, the
			“how” analysis should have two primary thrusts:
		</p>
		<ul>
			<li>
				Can we approach ERW carbon removal quantification with rigor and consistency—measuring what we
				can measure, characterizing the remaining uncertainties in a manner reflecting best available
				science, and then (critically) discounting sufficiently conservatively to confidently err on
				the side of under- rather than overestimating net carbon removal?
			</li>
			<li>
				Can we turn commercially-funded ERW deployment into a powerful—perhaps even the most
				powerful—avenue to learn by doing and accelerate public scientific understanding of the ERW
				pathway?
			</li>
		</ul>
		<p>
			The natural human tendency will be to render instinctive and binary judgment: substantial early
			market activity is either a good thing or a bad thing. But if we’re honest, it’s too soon to
			know. The fork in the road between vicious and virtuous cycles in ERW’s future is still in front
			of us.
		</p>
		<p>
			One can easily imagine how a bad movie might play out over the next few years. In this variant
			of the future, early offtakes signal that ERW is ready for primetime in a way that quickly draws
			in new buyers and suppliers. More companies with logistical capability and access to alkaline
			feedstock start saying “I’ve got rock and will spread it on fields if you’ll pay me,” and the
			market starts to flood with low-quality, low-price ERW supply. Accordingly, it would become
			increasingly commonplace for ERW deployment to proceed with minimal rigor in quantification
			practices. Even suppliers capable of high-quality supply might end up getting caught up in
			race-to-the-bottom dynamics, cutting corners with their MRV practices and lowballing the
			discounts they apply to key sources of uncertainty in order to compete on price. Meanwhile, in a
			cutthroat environment with suppliers focused on fighting over pieces of the pie more than
			growing it, data from commercial deployments might well stay entirely locked up behind closed
			doors.
		</p>
		<p>
			If this scenario were to materialize, carbon removal claims made on the basis of insufficient
			measurement and dubious treatment of uncertainty will not stand up to scrutiny—or there might be
			no mechanism for public scrutiny to begin with. Accelerating erosion of public trust would
			accelerate amidst negative media coverage and a growing backlash amongst skeptical farmers,
			scientific researchers, and policymakers. With minimal access to data from commercial
			deployments, market activity would not succeed in boosting the pace of public learning about ERW
			and to chip away at its attendant uncertainties. To the extent that the ERW field starts to
			unravel, it could poison the well for open-system carbon removal pathways more generally.
		</p>
		<p>Needless to say, this is a scenario we should do everything in our power to avoid.</p>

		<h1>Good movie scenario: steering toward a virtuous market cycle</h1>
		<p>
			A good-movie scenario could equally well take root with deliberate and collaborative steering by
			leading market actors and other stakeholders in the ERW community. What might that look like?
		</p>
		<p>
			In this version of the future, the first wave of offtake agreements materializes in parallel
			with strong market-shaping efforts to establish a very different market cycle and public
			narrative. Two market-shaping pillars will be particularly crucial: 1) a <strong
				>dynamic industry-wide quantification standard</strong
			>
			for quantifying tons removed via ERW; and 2) a <strong>system for data access</strong>
			that makes it possible both to publicly assess carbon removal claims and to produce new scientific
			knowledge using data from commercially-funded deployments. Data access and consistent, rigorous quantification
			are not nice-to-have features for the ERW market—they are the lifeblood of public trust and scientific
			learning and we need to bake them into the market’s foundation.
		</p>
		<p>
			As these and other new collective arrangements get developed, early ERW buyers can use the full
			extent of their leverage to help them take root in the market, purchasing only from suppliers
			and registries that agree to participate. Even before such industry-wide arrangements have
			materialized, Frontier and Lithos have started to show the way down that path by including in
			their offtake contract provisions for select public data sharing, using <a
				target="_blank"
				href="https://frontierclimate.com/writing/enhanced-weathering-buyer-resources"
				>open-access rubrics</a
			> to assess quality and environmental-impact considerations, and more.
		</p>
		<p>
			By deploying their power to shape the market, early buyers can help ensure that burgeoning
			market activity and offtake agreements get harnessed for the public interest. And in following
			Frontier’s example by showing willingness to pay prices that reflect all true current costs and
			uncertainty sources—including COGS, measurement costs, and uncertainty discounts—early buyers
			will be (accurately) seen to be subsidizing the learning-by-doing required to reduce uncertainty
			and drive down ERW prices over time. Jigar Shah and others have called this paradigm
			<a
				target="_blank"
				href="https://medium.com/@fnauta/deployment-led-innovation-a-policy-algorithm-to-create-markets-that-fix-climate-change-with-4277f7b6e68d"
				>“deployment-led innovation,”</a
			> with the central premise being that the very act of deploying at growing scales is what drives
			the most important learning.
		</p>

		<h1>Quality and quantification rigor</h1>
		<p>
			Much of the scrutiny applied to commercial enhanced weathering activity is due to the fact that
			buyers intend to use their purchased carbon removal tons to compensate for their emissions, via
			ton-for-ton offsetting. These compensatory claims put a lot of pressure on the early market to
			ensure highly rigorous quantification, since overestimating the quantity of carbon removed means
			that buyer emissions will not have been fully and truly counterbalanced. As we will explore in
			future writing, this challenge/difficulty does raise the question of whether compensatory-claims
			demand should be the only—or primary—form of payment for ERW and other open-system in the
			earliest years of the market.
		</p>
		<p>
			At the heart of the quantification challenge is enhanced weathering’s extensive heterogeneity:
			diverse rock compositions, baseline soil chemistries, and local climate conditions all
			interacting with one another. Quantifying net carbon removal involves combining data from many
			different imperfect “windows into the system”—geochemical measurements, tracers, and models—in
			seeking to assemble a comprehensive picture of all carbon and cation fluxes as dissolved
			alkalinity moves throughout the soil column and into groundwater, river systems, and ultimately
			the ocean.
		</p>
		<p>
			Our goal for the purpose of voluntary carbon removal markets (and even for compensatory claims)
			doesn’t need to be quantifying tons removed with perfect accuracy, but rather quantifying tons
			removed conservatively enough that the chances of systematic overestimation are negligible. Even
			as scientific knowledge about enhanced weathering increases, the system is sufficiently complex
			and heterogeneous that we will never eradicate uncertainty. This requires discounting to
			conservatively account for known uncertainties (<a
				target="_blank"
				href="https://carbontravels.substack.com/p/quantification-uncertainty-and-discounting"
				>see prior blog post</a
			>). We need to get comfortable with the notion that persistent and manageable uncertainty in the
			system does not necessarily imply significant uncertainty about a conclusion that at least X
			tons have been removed.
		</p>
		<p>
			For a healthy market to develop, it is mission-critical that supplier quantification protocols
			fully address each carbon and cation flux within the system following best available science. To
			help scaffold consistency and rigor across the market, Cascade is facilitating a process to
			develop a Community ERW Quantification Standard. This standard will articulate a set of
			high-level requirements to which any supplier protocol must adhere—allowing protocols to vary in
			their specifics while creating a strong ‘common core’ as the foundation.This will explicitly be
			a “dynamic standard,” meaning that it will be regularly updated over time as more data is
			collected across deployments and as science progresses.
		</p>
		<p>
			Imposing a higher quality bar on ERW quantification will necessarily imply putting upward
			pressure on the price per ton sold on the market. Yet this is both healthy and temporary. Fully
			reflecting the implications of rigorous MRV and conservative discounting in near-term ERW prices
			creates a stronger foundation of quality in the market. ERW can then come down the cost curve in
			the coming years, through development of cheaper measurement approaches and growing ability to
			accurately model the system. Catalytic buyers like Frontier who are willing to pay higher prices
			in the early days unlock the learning-by-doing and innovation that will progressively make
			prices more affordable for the mass market.
		</p>

	<h1>Data access system</h1>
	<p>
		With the first wave of large commercial ERW purchases, the scale of privately-funded deployments
		is starting to dramatically outpace the scale of publicly-funded research field trials. This
		will produce a state of affairs where the bulk of ERW field data is held, in the first instance,
		by commercial suppliers. From our point of view, one of the biggest factors determining whether
		large-scale ERW offtakes represent healthy or unhealthy market activity is the extent to which
		this privately-collected data is accessible to the scientific community and the public, rather
		than locked behind proprietary doors.
	</p>
	<p>
		Accordingly, our second major initiative at Cascade is to help design and stand up a new data
		access system for commercial ERW deployment data. One primary aim of this effort is to help
		build public trust in enhanced weathering—both 1) earning the trust of farmers by showing
		through public data that it is a safe farming practice that will increase their yields and help
		their bottom line; and 2) building public and scientific trust in carbon claims made. Many
		carbon removal buyers today are still skeptical of enhanced weathering as a CDR pathway that can
		deliver them high-quality tons, and fear backlash if these purchased tons are later deemed bogus
		or poorly quantified. To reach sufficient levels of scientific trust in the quantification of
		such a complex open system, enough data needs to be shared to enable public reproducibility of
		suppliers’ crediting calculations from their deployment data, such that the scientific rigor of
		quantification methods can be reviewed, evaluated, and collaboratively improved by members of
		the scientific community.
	</p>
	<p>
		A second core way in which data access is critically important is by <strong
			>catalyzing public scientific learning.</strong
		> The primary way we can learn about enhanced weathering is by getting rocks on field and doing substantial
		measurement and observation, across heterogeneous baseline conditions. With a commercial data access
		system that engenders broad participation and makes data reported by different suppliers interoperable,
		this first wave of offtakes can become a massive engine for new learning, uncertainty reduction,
		and the development of new and improved quantification methods.
	</p>
	<p>
		The details of designing a data access system that meets these goals and that gets wide buy-in
		across the market will be complex—what data types will be shared, across what fraction of
		fields, and with what means of anonymization and aggregation to protect farmer privacy. Even
		where such a system creates tension for suppliers whose business model is partly based on
		building proprietary data moats, we as a whole field and industry need to shift into a mindset
		of massively growing the pie rather than fighting over who gets what slice of the relatively
		small existing market. Enabling this long-term growth of the market orders of magnitude beyond
		the current small set of early catalytic buyers requires the trust-building and learning that
		come with broad data sharing.
	</p>

	<h1>A pivotal year</h1>
	<p>
		The Community Quantification Standard and new data access system outlined above will launch in
		the coming year. If these two market-shaping efforts fail to gain traction, the likelihood of a
		bad-movie scenario materializing in coming years will grow.
	</p>
	<p>
		If 2024 brings widespread adoption of and participation in these community frameworks, we will
		have the best shot at a healthy market cycle. Rigorous quantification will give buyers
		confidence to engage in offtake agreements, which in turn trigger larger deployments, which in
		turn unlock cross-supplier data and peer-reviewed meta-analysis that deepen our knowledge base …
		thereby reducing uncertainties, driving down discounts and prices, further enhancing buyer
		appetite, and cultivating trust among farmers and the public one step at a time. The new
		market-shaping arrangements can also strengthen bridges between ERW suppliers and researchers in
		academia and civil society, with opportunities to collaboratively improve suppliers’
		quantification methods, MRV protocols, and the community standard itself.
	</p>
	<img
		src={image1}
		alt="Cyclical graph depicting Standards -> enable -> Deployment -> collect -> On-field Data -> science -> Fill knowledge gaps, reduce uncertainties -> iteratively improve -> Standards"
	/>
	<p>
		Other market-shaping arrangements are likely to emerge over time, and suppliers can be part of
		the vanguard. Both in ERW and beyond, we are already seeing great examples of suppliers taking
		the initiative in charting a path with quality and transparency at the heart. The recently
		published <a target="_blank" href="https://www.reykjavik-protocol.com/reykjavik-protocol"
			>Reykjavik Protocol</a
		> is one such example, with a group of suppliers coming together to articulate a wide-ranging set
		of shared commitments for responsible deployment and commercialization of carbon removal. The Reykjavik
		Protocol incorporates quality and data sharing as core principles that will enable a healthy market
		for negative-emissions technologies.
	</p>
	<p>
		Everyone in the ERW ecosystem has a hand on the steering wheel. If we steer effectively, early
		offtake agreements need not translate into a free-for-all in the market. In the right market
		context, they can instead serve as an invitation to high-quality supply and a recognition that a
		collective mindset of learning-by-doing and transparency is the fastest way forward for ERW.
	</p>

	<h3>Footnotes</h3>
	<ol>
		<li id="footnote1">
			As a form of soil pH management and substitute for traditional agricultural liming, ERW offers a set of potential agronomic co-benefits that could prove powerful for farmers in many cases. While ERW prices are currently in the hundreds-of-dollars range, there are many clear opportunities for cost reduction over time. With direct relevance for the agriculture, mining, and transport/logistics industries, farmers and heavy industry players will get more deeply involved in ERW over time. This can help create political constituencies and growing policy tailwinds. On a global scale, ERW is particularly well suited to deployment across large parts of the Global South, with the opportunity to improve farmer livelihoods while helping to ensure that the economic returns from a potentially enormous new industry don’t flow predominately to the Global North.
			<a href="#citation1">↩</a>
		</li>
		<li id="footnote2">
			For example, ERW does not face the same kind of permitting and international governance questions that bedevil some other open-system methods, because deployment happens on private agricultural land (as opposed to, e.g., the open ocean).
			<a href="#citation2">↩</a>
		</li>
	</ol>
</main>
</div>
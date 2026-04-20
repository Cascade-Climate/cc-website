<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import LrmCaseStudyCard from '$lib/components/LrmCaseStudyCard.svelte';
	import { lrmFinancingCaseStudies as cs } from '$lib/data/lrm-financing-case-studies.js';
</script>

<div class="lrm-financing-page">
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Financing the Recovery Economy: The First Step Towards Scaled Lifecycle Refrigerant Management</h1>
				<hr />
				<p>
					The <a href="/blog/LRM-gaps" style="color: #e1fcf7;">first post</a> in Cascade's refrigerant management and transition blog series laid out the many reasons why
					lifecycle refrigerant management (LRM) matters. Hydrofluorocarbons (HFCs) are among the most potent
					greenhouse gases; the cooling equipment that contains them will remain in use for decades, and the capacity needed to recover them at end-of-life is missing in much of the world. The problem is clear. The harder question, which this post explores, is how to build a solution that works
					in practice.
				</p>
			</div>
			<img src="/images/blog/christie-chau-OA07q0V2R94-unsplash.jpg" alt="Lifecycle Refrigerant Management" />
		</div>
	</section>
	<ScrollNav fixedUnderIntro />
	<main>
		<section id="what-are-we-building-toward">
			<h1>Introduction</h1>
			<p>
				The mechanics of LRM — leak prevention, recovery, reclamation, and destruction — are straightforward. Building the economic and institutional ecosystem required to implement those activities at scale is not. Across the LRM value chain, from technicians who need recovery machines, to aggregators who must build trucking and collection routes, to facilities capable of reclamation or destruction, the constraint is often the same: there is no reliable way to pay for it.
			</p>
			<p>
				Cascade's theory of change is that financing and policy mechanisms must be deliberately sequenced to build stepwise towards durable LRM ecosystems. Voluntary carbon markets can demonstrate feasibility; compliance mechanisms scale it; and policy and industry buy-in ultimately embeds it as standard practice. Each stage generates the infrastructure, data, and proof points the next stage requires. 
			</p>
			<p>
				Our 2026 roadmap is designed to move that progression forward — and to do so in a region with the largest climate opportunity and significant LRM infrastructure gaps. Our initial focus is in developing Asia, with a particular emphasis on Southeast Asia — where air conditioner deployment is projected to <a href="https://www.iea.org/commentaries/staying-cool-without-overheating-the-energy-system" target="_blank" rel="noopener noreferrer">increase ninefold</a> between 2020 and 2040 as incomes rise, economies develop, and extreme heat events become more common due to climate change. As is the case in much of the world, venting refrigerant directly into the atmosphere during equipment servicing and at end-of-life (EOL) decommissioning is the most common practice in this region. 
			</p>
		</section>

		<section id="what-are-we-actually-building-toward">
			<h1>What Are We Building Toward?</h1>
			<p>
				The <a href="https://ozone.unep.org/kigali-amendment-overview" target="_blank" rel="noopener noreferrer">Kigali Amendment to the Montreal Protocol</a> sets a clear directional trajectory: HFCs are phased down over time, and lower-GWP alternatives replace them. Unfortunately, this transition alone doesn't solve all emissions concerns. HFC refrigerants already contained inside billions of air conditioning units and refrigeration systems will continue circulating, leaking, and being vented for decades — a problem which will only be exacerbated as cooling demand skyrockets. Under the Kigali Amendment, developing countries, referred to as “Article 5 parties,” have a delayed phasedown timetable, meaning that HFC banks in these countries will continue to grow over the next several years. This underscores Cascade’s focus on LRM in Article 5 countries. 
			</p>
			<p>
				Sustained, economically viable LRM practices are the ultimate goal. Within LRM, the most certain path to mitigate emissions from legacy high-GWP refrigerants is destruction. A single kilogram of R-410A — an HFC widely used in commercial and residential air-conditioning equipment — contains a global warming potential 2,088 times that of CO₂. Recovering and destroying these gases permanently eliminates their warming potential from the atmosphere. Under appropriate guardrails, voluntary or compliance carbon financing can be a tool to support the development of recovery-to-destruction infrastructure while providing high-quality emissions reduction credits to buyers. Recovering and reclaiming refrigerant for reuse can be economically valuable where virgin gas prices are high; it can also reduce the need for virgin gas production or consumption, which helps governments meet national Kigali Amendment HFC phasedown targets.
			</p>
			<p>
				The core need — whether for destruction or for reclamation — is refrigerant recovery infrastructure: trained technicians equipped with appropriate equipment, and reliable access to downstream reclamation or destruction facilities.
			</p>
		</section>

		<section id="theory-of-change">
			<h1 data-nav-title="Building Recovery Markets">Building Recovery Markets: A Theory of Change</h1>
			<p>
				Multiple mechanisms can support LRM – including carbon markets, compliance finance, industry investments, and policy. These mechanisms can operate individually or in parallel as market readiness and policy timelines allow. They can also be highly effective when sequenced as stages in an intentional, system-building process, where one mechanism supports the foundation for the next.
			</p>
			<p>
				The underlying logic is cumulative: policy is most effective when it can build on demonstrated feasibility, and capital flows most reliably into markets whose economics have already been proven at the project level. Below, we share our hypothesis for a staged approach that we believe has the potential to be feasible and high impact. This is only one possible approach; progress will unfold via different pathways in different countries. This view is shared by the Montreal Protocol's Technology and Economic Assessment Panel (TEAP), whose 2024 <a href="https://ozone.unep.org/system/files/documents/TEAP-May2024-DecXXXV-11-TF-Report.pdf" target="_blank" rel="noopener noreferrer">report</a> on LRM barriers notes that "expanding current financing mechanisms, including utilizing carbon markets and creating innovative ones plus enacting policy changes, may reduce cost challenges linked to implementing LRM, especially in Article 5 parties."
			</p>
		</section>

		<section id="voluntary-carbon-financing">
			<h2>Voluntary Carbon Financing: The Zero-to-One Entry Point</h2>
			<p>
				In the absence of regulation or policy incentives, refrigerant recovery has no natural revenue stream. It requires significant investment in equipment, trained technicians, transportation logistics, and destruction or reclamation facilities — and those costs fall on actors with no financial incentive to bear them, particularly in developing markets. Existing mechanisms address parts of this gap: the Multilateral Fund (MLF) has supported destruction facility development and technician training in Article 5 countries, and extended producer responsibility (EPR) programs have worked in some developed markets. But MLF support leaves gaps in covering ongoing operational costs, and EPR schemes remain limited in global adoption, tend not to directly incentivize destruction, and are difficult to implement where the regulatory and industry infrastructure to administer them is still emerging. 
			</p>
			<p>
				Voluntary carbon markets (VCM) offer a different entry point, closing this incentive gap by monetizing the climate value of destroyed refrigerants that would otherwise be vented — making recovery economically viable before any mandate requires it.

				In practice, carbon finance can directly or indirectly fund the infrastructure layer of an LRM ecosystem — recovery machines and cylinders, technician training, aggregation logistics, chain-of-custody tracking, and measurement, reporting, and verification (MRV) systems — standing up recovery capacity while generating measurable climate outcomes in the form of carbon credits. Alongside the credits themselves, VCM-funded projects also generate real-world operational experience and data: how much recovery costs in different country contexts, which MRV approaches are feasible on the ground, and what is required to build a functioning supply chain where almost none exists. This is the evidence base that policymakers, compliance markets, and development finance institutions need to justify sustained, scaled LRM investment. The infrastructure those early projects build doesn't disappear when the first credits are issued; it becomes the operational foundation the next stage of the market can build on.
			</p>
			<p>
				As with all carbon markets, crediting integrity matters enormously. LRM carbon credits are only as valuable as the measurement behind them, requiring rigorous additionality assessments, refrigerant-specific emissions factors, and documented chain of custody from recovery through destruction, along with guardrails against perverse incentives. Methodology quality is not technical housekeeping; it is core to how we evaluate the climate effectiveness of the activity in question, and weak methodologies undermine confidence in LRM at exactly the moment that case needs to be made most clearly.
			</p>
			<p>
				Voluntary markets also have real limits: credit prices can be volatile and buyer-dependent, and no country can anchor a national LRM system on voluntary demand from private corporations alone. Some critical facets of LRM — such as leak detection — may be difficult to support via VCM and would be better served through other mechanisms. Voluntary finance is a launchpad for select interventions, not a landing pad for sustained, long-term support, and understanding what it can and cannot achieve across different project types is critical to sequencing what comes next. 
			</p> 

			<LrmCaseStudyCard {...cs.voluntary} />
		</section>

		<section id="compliance-markets">
			<h2>Compliance Markets: Enabling Scale</h2>
			<p>
				Voluntary projects that have demonstrated the technical feasibility and financial viability of LRM carbon credits can open pathways to compliance-grade carbon mechanisms. Under Article 6.2 of the Paris Agreement, countries can enter bilateral agreements to transfer carbon credits — known as Internationally Transferred Mitigation Outcomes, or ITMOs — for use toward their respective national climate targets. This serves as a government-to-government version of voluntary carbon credit purchases; however, because these credits are being used for meeting Paris Agreement goals, requirements around credibility, MRV, and durability are particularly scrutinized. Tested, high-integrity voluntary market methodologies are often adapted for use in compliance market contexts. 
			</p>
			<p>
				Compliance markets bring three things to LRM that voluntary markets cannot: longer time horizons (multi-year sovereign agreements versus annual voluntary purchasing), larger and more predictable demand, and a stronger signal to industry actors — project developers, technicians, chemical manufacturers, and reclaimers — that LRM is not a fleeting corporate buyer interest but a recognized part of national climate implementation planning. That signal is often what shifts industry from watching from the sidelines to actively investing in the supply chain. There is also a practical advantage that goes beyond the credit purchase itself: Article 6 buyer governments often bring additional tools to support host country programs, including technician training, bilateral aid, and co-financing through development institutions. Voluntary corporate buyers, whose only instrument is the carbon credit transaction, cannot offer such comprehensive and sustained market support.
			</p>
			<p>
				Compliance-scale activity also has an important logistical effect. As recovery volumes grow, supported by larger and more predictable revenue streams, supply chains begin to strengthen and densify. More technicians are trained, more collection routes become economically viable, and destruction and reclamation infrastructure expands as a result. This growing route density is what ultimately makes LRM accessible and affordable for all actors, including the small service businesses that do most of the actual recovery work. Building a resilient LRM ecosystem requires the kind of sustained, predictable demand that compliance mechanisms are positioned to provide.
			</p>

			<LrmCaseStudyCard {...cs.compliance} />
		</section>

		<section id="industry-leaders">
			<h2>Industry Leaders: Driving Economies of Scale</h2>
			<p>
				It is worth being precise about what carbon finance can and cannot do for LRM. Carbon markets — voluntary or compliance — are best suited to supporting the recovery and destruction pathways. These activities generate measurable, verifiable emissions reductions, present a clear case for additionality, and can be credibly monetized as carbon credits. A fully realized LRM system, however, encompasses much more than destruction: leak detection and repair during equipment operation, on-site refrigerant reuse and recycling, reclamation to virgin-equivalent specification for resale, and the logistics infrastructure to connect all these activities. That broader system requires industry actors operating at economies of scale, which does not materialize through carbon finance alone. It requires sustained commercial engagement that only becomes rational when the underlying market and policy conditions make it so.
			</p>
			<p>
				For industry actors — refrigerant manufacturers, HVACR original equipment manufacturers (OEMs), chemical distributors — participation in LRM is often framed as a matter of voluntary goodwill or extended social responsibility. While this is true in some cases, industry engagement can also be driven by economics: when recovery is happening at meaningful scale, when logistics networks exist for aggregating refrigerants, and when the commercial case for reclamation or certified destruction is clear, industry actors have both the incentive and the infrastructure to participate. The problem is that those conditions are not yet fully met anywhere in the world, including in markets with relatively advanced regulatory frameworks like Japan and Australia.
			</p>
			<p> 
			In Southeast Asia, where regulatory infrastructure is at an earlier stage, the economics are weaker still — making the case for intentional, layered financial intervention particularly strong. Using that layered approach, voluntary carbon finance proves the model and seeds early infrastructure; compliance market revenues provide the longer time horizons and bankable demand that justify larger commitments; policy frameworks progressively tighten requirements and reduce investment risk. Each layer strengthens the case for the next. Without that deliberate architecture, industry economics will remain insufficient to drive the scale of engagement the problem requires.
			</p> 
			<p>
			When that investment does materialize, the impact goes beyond capital. An OEM that requires verified refrigerant recovery as a condition of warranty service changes technician behavior at scale — across every service visit, for every unit under warranty, across an entire national market. A distributor that builds equipment take-back infrastructure into its refrigerant sales operation creates a structural return pathway that doesn't depend on technician initiative or carbon credit prices. These norm-setting effects are among the most powerful levers in LRM system-building — but they are most likely to emerge once the surrounding financial and policy architecture has made the underlying economics viable enough to act on.
			</p>
			<LrmCaseStudyCard {...cs.industry} />
		</section>

		<section id="policy">
			<h2>Policy: Codifying What Markets Demonstrate</h2>
			<p>
				Voluntary climate finance and compliance carbon market mechanisms can build the operational foundations of a recovery system, but without a policy framework that embeds LRM as a legal and institutional norm, those foundations remain dependent on external finance and private sector initiatives. The most durable policy frameworks pair legal obligations — recovery mandates, extended producer responsibility programs, or both — with the capacity building, financial incentives, and infrastructure investment that make compliance economically viable.
			</p>
			<p>
				For Global South governments, designing and implementing holistic LRM policies presents a real fiscal challenge. The cost of building regulatory governance capacity compounds with the cost of funding the incentive structures that make mandates workable, straining limited domestic budgets. It's important to note that these costs will most likely be passed on to consumers, as they are across most regulated products. In markets where cooling access is still expanding, cost pass-through deserves careful design attention. Funding through the Multilateral Fund, Global Environment Facility (GEF), or regional development banks can help bridge this gap, covering some governance and capacity building costs, but pipelines are often slow, competitive, and rarely sufficient at the scale required.
			</p>
			<p>
				This is where carbon finance has a distinct and time-limited role to play: absorbing some initial infrastructure buildout costs while policy frameworks are being constructed and resourced. Well-designed regulatory frameworks typically take years to develop, pass, and implement, and enforcement capacity and infrastructure must be built alongside the rules themselves. Carbon finance can support LRM operations and market development during this period, functioning as a bridge rather than a permanent substitute.
			</p>
			<p>
				Developed-market frameworks offer instructive precedents on robust LRM policy development. The EU F-Gas Regulation established comprehensive refrigerant use restrictions, leak checks, and certified technician requirements across Europe. Japan's Act on Rational Use and Proper Management of Fluorocarbons mandates recovery at equipment end-of-life and includes an end-user fee mechanism to fund the system. While these frameworks cannot be directly transplanted to the Global South, they offer policy design principles that could be adapted to local regulatory and market conditions.
			</p> 
			<p>
			Policy defines the endgame: a well-designed regulatory framework eventually reduces reliance on carbon finance and establishes LRM as a durable part of national cooling infrastructure. When recovery is mandated, and when Extended Producer Responsibility (EPR) schemes or technician incentive programs are funded by the value chain rather than by carbon credit buyers, LRM becomes a standard cost of doing business rather than an effort solely dependent on external subsidy. Carbon markets may continue to play a targeted role — particularly for the destruction of high-GWP legacy stocks with outsized climate value — but they are no longer load-bearing for the whole system. The Montreal Protocol TEAP <a href="https://ozone.unep.org/system/files/documents/TEAP-May2024-DecXXXV-11-TF-Report.pdf" target="_blank" rel="noopener noreferrer">report</a> puts it well: LRM "efforts, when combined with growing destruction capacity and deployment of financing mechanisms such as [EPR] and carbon markets, could create robust systems for ODS and HFC destruction." That transition is the goal. Getting there requires building backward from it.
			</p>
			<LrmCaseStudyCard {...cs.policy} />
		</section>

		<section id="roadmap-2026">
			<h1 data-nav-title="Cascade's 2026 Roadmap">Cascade&apos;s 2026 Roadmap: Testing the Theory in Practice</h1>
			<p>Cascade's near-term work is designed to move the progression described above forward, starting in a handful of Southeast Asian countries where the LRM infrastructure gap is significant and cooling demand is accelerating rapidly. We recognize that entering new markets requires sustained investment in relationships, the buy-in of local actors, and a genuine understanding of local context — the structure of each country's cooling sector, the capacity of its regulatory institutions, and the needs of the community, government, and industry stakeholders whose cooperation determines whether any system-building effort takes hold. Our goal is to accelerate the transitions between stages: from voluntary pilots to compliance markets, from compliance markets to industry engagement, and from industry engagement to durable policy. The four workstreams below are oriented to that purpose.</p>
			
			<h2>Ensuring a Foundation of High-Quality, Fit-for-Purpose Voluntary LRM Methodologies</h2>
			<p>
				As methodologies for HFC destruction in Article 5 countries evolve, and an initial wave of VCM-funded projects gets off the ground, the field faces a foundational challenge: proving that these first projects are delivering verifiable climate impacts, avoiding unintended perverse outcomes, and generating the reliable, accessible data that Article 5 project contexts require.
			</p>
			<p>
				Cascade is actively engaged in that methodology development process. We recently hosted a workshop at the Yale Cooling Conference, bringing together carbon credit registries, methodology developers, project developers, and civil society organizations to stress-test emerging approaches and develop guardrails against perverse incentives. We are also preparing public comments for emerging HFC destruction methodology drafts currently under review. Our goal is not only to improve individual methodologies, but to help build a community of practice around high-integrity LRM crediting — one that raises the floor for the field as a whole and ensures that early voluntary projects generate the proof points that spur further compliance market or policy action.
			</p>
			<h2>Demand and Supply Aggregation for Initial Catalytic Voluntary Transactions</h2>
			<p>
			Cascade is working to connect motivated voluntary buyers, primarily from the U.S. technology sector, with early-stage LRM projects in the Global South, including priority countries in Southeast Asia. The goal of this initial tranche of carbon financing is not only to generate credits, but also to produce high-quality data and operational proof points required to increase confidence in embedding LRM practices into compliance markets and increase commitments under Article 6.2. Credibly issued and transacted LRM credits from the region serve as the starting gun to the next stage of market development.</p>

			<p>Critically, we are approaching this work with local country stakeholders at the center. Cascade is committed to ensuring that project design and implementation incorporate the perspectives of in-country partners — from national regulators and industry associations to the technicians and small businesses that form the backbone of any functioning recovery system. Done well, this first wave of voluntary financing does more than validate a carbon accounting methodology: it seeds the in-country infrastructure, trained workforce, and institutional relationships that attract the larger flows of international investment to follow. As compliance buyers and development finance institutions look for credible LRM programs to support, countries with demonstrated operational track records and local stakeholder buy-in will be best positioned to benefit — capturing not just climate value, but jobs, technical capacity, and long-term economic activity in the cooling sector.</p>
			
			<h2>Engaging Compliance Market Buyers and Industry Value Chain Leaders</h2>
			<p>
				Cascade is building relationships with Article 6 country buyers ahead of the proof points from voluntary market projects to better understand their requirements and learn from projects that are already underway through programs like the JCM. The goal is mutual knowledge sharing to align rulesets across jurisdictions that ensure climate integrity, reduce perverse incentives risks, and clearly demonstrate additionality — leading to sustained demand. In parallel, we are engaging LRM project developers, HVAC equipment OEMs and chemical distributors operating in Southeast Asia to build a shared understanding of LRM economics and operational requirements, positioning them to participate as market conditions mature.
			</p>
			<p>
			The medium-term goal is to transition from project-level crediting to programmatic, country-level approaches — where government-to-government crediting operates at scale and industry actors are mobilized to recover, destroy, or reclaim refrigerants in line with that expansion.
			</p>
			<h2>Supporting Effective Policies</h2>
			<p>
			Cascade's policy analysis and engagement will run in parallel with our voluntary and compliance market work, with the understanding that effective policy engagement in new countries requires sustained upfront investment in relationships and credibility building with government counterparts. Much of our early work will involve listening directly to environment and industry ministries in priority Southeast Asian countries to understand their needs and assess the enabling conditions for LRM policy. This includes identifying where data exists, where capacity gaps lie, and which policy instruments are most feasible given the country context — recovery mandates, technician training, refrigerant tracking registries, or EPR schemes. We also aim to identify and translate lessons from LRM policy in other jurisdictions as well as analogous sectors such as e-waste and plastic waste management, where developing country regulatory frameworks are more mature.
			</p>
			<p>
			Not all aspects of LRM are well suited to carbon market finance. Leak prevention and routine servicing practices face greater challenges around additionality and a higher risk of perverse incentives, making policy the primary lever for driving adoption in those areas, whether through direct incentives or regulatory requirements. Aspects of reclamation face similar issues, so a hybrid approach of reclaimed gas mandates and carbon financing may be the best approach. For these gaps, and for the broader governance and capacity-building costs that carbon finance cannot cover, we will engage multilateral funders and regional development institutions to identify concessional finance opportunities. The goal is to ensure that as voluntary and compliance market activity generates proof points, the policy groundwork is already being laid, so that the transition from carbon-financed demonstration to mandated standard practice is a deliberate handoff rather than a gap.
			</p>
		</section>

		<section id="conclusion">
			<h1>Conclusion</h1>
			<p>
				The sequencing we've described — voluntary pilots, compliance markets, industry engagement, robust policy — is a hypothesis, not a proven playbook. Regulatory contexts, industry structures, and government capacity vary widely across Southeast Asia; the right starting point will look different in every jurisdiction. A government that is already engaged and has capacity for robust policies may be ready to legislate before voluntary markets have fully matured. An industry actor with existing regional infrastructure may be ready to invest ahead of compliance-scale project volumes. Cascade is working to accelerate all these transitions simultaneously, not to enforce a rigid sequence. 
			</p>
			<p>
			What makes the current moment particularly consequential is that the window for getting ahead of the problem is still open, but not for long. Southeast Asia is projected to add hundreds of millions of air conditioners over the next fifteen years. The refrigerants going into those systems today will still be circulating, leaking, and reaching end-of-life decades from now. The recovery infrastructure, trained workforce, and policy frameworks built now will determine whether those refrigerants are responsibly managed or vented to the atmosphere. Building that infrastructure after the fact — once cooling demand has already exploded and venting is entrenched as standard practice — will be far harder and far more expensive than building it now.
			</p>
			<p>
				If you are a stakeholder interested in accelerating the LRM transition in developing countries, particularly in Southeast Asia, we want to hear from you. Please reach out to <a href="mailto:refrigerantmanagement@cascade.org">refrigerantmanagement@cascade.org</a>.
			</p>
		</section>
	</main>
</div>

<style>
	/* LRM intro hero image - fixed size, no shrink with viewport */
	:global(.lrm-financing-page .intro .content img) {
		width: 45%;
		min-width: 400px;
		aspect-ratio: 3 / 2;
		object-fit: cover;
	}

	:global(main section) {
		scroll-margin-top: 7rem;
		border-bottom: none !important;
		margin-top: 2rem;
		margin-bottom: 0;
		padding-top: 0;
		padding-bottom: 1rem;
	}
	:global(main section h1) {
		margin-top: 0;
		margin-bottom: 1rem;
	}
	:global(main section h2) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	:global(main section p) {
		margin-top: 0;
		margin-bottom: 1rem;
	}
	:global(main section ul) {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
	:global(main section.acknowledgments) {
		margin-bottom: 1rem;
	}

</style>

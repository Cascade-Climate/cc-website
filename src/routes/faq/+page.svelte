<script>
	import heroImage from '$lib/images/rock-weathering.webp';

	function openAnswer(event) {
		const answer = event.target.nextElementSibling;
		answer.classList.toggle('open');
		let symbolElement = event.target.firstElementChild;
		if (answer.classList.contains('open')) {
			symbolElement.textContent = '–';
		} else {
			symbolElement.textContent = '+';
		}
	}
</script>

<svelte:head>
	<title>FAQ - Cascade Climate</title>
	<meta
		name="description"
		content="Answers to frequently asked questions about Cascade Climate and its work."
	/>
</svelte:head>
<div>
	<div id="hero">
		<img width="100%" height="384" src={heroImage} alt="Rock weathering" />
	</div>
	<div id="faq">
		<h1>Frequently Asked Questions</h1>
		<div id="description">
			<h3>What is Cascade Climate?</h3>
			<p>
				Cascade Climate is an independent, philanthropically funded NGO focused on dramatically
				accelerating progress across a range of open-system climate interventions (OSCI). OSCI are
				approaches that enhance or modulate natural systems already operating at planetary scale to
				mitigate climate change and its impacts.
			</p>
			<p>
				In 2023, our focus is enhanced rock weathering (ERW) — specifically, the development of a
				healthy, thriving ERW market built on a foundation of robust science and rigorous
				measurement. We plan to expand our focus to include additional OSCI pathways in 2024 and
				beyond.
			</p>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What are "open systems climate interventions"?
			</button>
			<div class="answer">
				<br />
				<p>
					For deeper thinking on OSCI and some of the key challenges that must be navigated as these
					nascent fields develop, read our founder’s writing <a
						target="_blank"
						href="https://greatunwind.substack.com/p/leveling-the-playing-field-for-open">here</a
					>. By ‘open system’, we mean interventions undertaken ‘out in the open’, in natural
					ecosystems. Oftentimes working with or tapping into natural cycles and existing earth
					system processes. These interventions could be for the purposes of:
				</p>
				<ul>
					<li>
						Durably removing CO2 from the atmosphere, through approaches like enhanced rock
						weathering or ocean alkalinity enhancement.
					</li>
					<li>
						Reducing near-term warming, by focusing on short lived climate pollutants and albedo
						management.
					</li>
					<li>
						Mitigating some of the direct adverse impacts of climate change, like delaying or
						preventing catastrophic sea level rise through ice sheet stabilization.
					</li>
				</ul>
				<p>
					One example of an open system carbon removal pathway is Enhanced Rock Weathering (ERW).
					ERW takes advantage of an existing natural process: the weathering of certain rocks (e.g.
					basalt, olivine) wherein the interaction of water, CO2 (from the atmosphere), and minerals
					from the rock react to form dissolved ionic pairings in water (E.g. Ca2+ and 2 HCO3-).
					These chemical weathering reactions already consume over 1Gt CO2 from the atmosphere every
					year. ERW accelerates the process by grinding the rocks to dust and spreading them, often
					on agricultural fields, so that the reaction is radically accelerated. That grinding and
					deployment in an environment amenable to weathering is the “intervention” undertaken in an
					“open system” where CO2 is removed from the atmosphere through carbon cycle interactions
					between the atmosphere, soil, water, and rock.
				</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What kind of work does Cascade do, and what has it been working on so far?
			</button>
			<div class="answer">
				<br />
				<p>
					As a field-building nonprofit, we act as a catalytic orchestrator, identifying and
					addressing the highest-priority bottlenecks or risks holding a field back. We see
					ourselves as an independent problem-solver and partner to the field, helping tackle thorny
					issues that individual parties cannot address alone.
				</p>
				<p>
					You could also think of us as the connective tissue working across government, industry,
					researchers, communities to identify & resolve bottlenecks.
				</p>
				Core areas of focus include:
				<ul>
					<li>
						Coordinating multi-actor efforts to overcome collective action problems holding back
						progress
					</li>
					<li>
						Building ecosystem infrastructure needed for functioning markets and thriving scientific
						fields
					</li>
					<li>Resourcing targeted scientific investigations to reduce uncertainties</li>
				</ul>
				In ERW, our early focus has been:
				<ul>
					<li>
						Coordinating a community-wide effort to develop a rigorous, dynamic v1 quantification
						standard; and
					</li>
					<li>
						Helping develop a data-access paradigm for the first big wave of ERW deployment to
						unlock a virtuous cycle of deployment-driven learning and growing policy support.
					</li>
				</ul>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What are Cascade's goals in accelerating OSCI?
			</button>
			<div class="answer">
				<br />
				<p>
					Our goal is to help these new fields and approaches develop in a healthy, high-rigor,
					science-first, and—as appropriate—fast way. In cases where the science behind an OSCI is
					deep, robust, and clear, Cascade’s work might focus on helping develop the market (e.g.
					coordinating among buyers and suppliers to establish a healthy marketplace) or helping
					build social license to deploy at increasing scale. In (many) other cases, the science is
					still developing. When this occurs, Cascade will work with (social) scientists, engineers,
					and community groups to accelerate their work: identifying gaps and helping to direct
					focus, data + resources towards closing those gaps.
				</p>
				<p>
					Sometimes, there may be pre-existing or fast-growing commercial activity while science
					gaps remain. When this happens, Cascade will try to help both sides in tandem (e.g.
					helping ensure that CDR purchases in the category are high-rigor, and helping ensure that
					deployments / commercial activity are feeding quality data back to the scientific
					community).
				</p>
				<p>
					Ultimately, if Cascade encounters cases where scientific developments indicate that a
					given approach is unsound, unscalable or too risky, we would seek to flag that approach as
					undesirable and one that the market should not pursue.
				</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				Why is Cascade focusing on enhanced rock weathering first?
			</button>
			<div class="answer">
				<br />
				We are focused initially on ERW as our first ‘vertical’ anchor program for several reasons:
				<ul>
					<li>
						ERW will be the first open-system durable CDR pathway to be deployed at substantial
						scale, potentially reaching the megaton threshold globally in as little as two years.
						Many of the market frameworks and arrangements—such as dynamic MRV standards,
						discounting frameworks that account for quantification uncertainty in crediting tons
						removed, and stage-gated deployment—that will need to be developed for any open-system
						pathway to be viable will be hashed out for the first time in the context of ERW.
						Precedents established in ERW will carry over into numerous other OSCI fields.
					</li>
					<li>
						The ERW field currently suffers from daunting coordination challenges and existential
						risks—and yet no existing field-building or market-shaping organization has emerged to
						take the lead on coordinating progress in ERW.
					</li>
					<li>
						ERW is subject to the same open-system CDR pathway “sources of messiness” as many other
						OSCI; but from several perspectives (e.g. ecosystem risk and governance) it has a more
						mild or moderate case of these sources of messiness than other OSCI.
					</li>
					<li>
						ERW offers a suite of powerful agronomic co-benefits beyond just jobs and economic
						development. ERW is also one of the most obvious economic opportunities for the Global
						South to play a big role in CDR deployment—with many countries having plentiful
						feedstock, optimal weathering conditions, and unusually strong co-benefits for farmers
						because of limited baseline access to agricultural lime and fertilizer.
					</li>
				</ul>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What does market shaping and field building involve? What can be learned from market shaping
				and field building in other fields?
			</button>
			<div class="answer">
				<br />
				<p>
					For more thinking on this topic, read the Stanford Social Innovation Review article
					<a
						target="_blank"
						href="https://ssir.org/articles/entry/the_missing_tool_in_the_climate_fight#"
						>“The Missing Tool in the Climate Fight”
					</a> by our founder and his longtime collaborator, Oliver Sabot. In short, efforts in global
					public health have shown that some promising but nascent fields can get caught in market distortions
					or bottlenecks (e.g. the “chicken and egg” dynamic in which buyers want to wait until costs
					come down with scale, but manufacturers won’t scale up production without guaranteed buyer
					demand). In these cases, field builders and market shapers can work to unstick these bottlenecks,
					helping the nascent market overcome its initial distortions and challenges.
				</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				How is Cascade funded?
			</button>
			<div class="answer">
				<br />
				<p>
					Cascade is a nonprofit, funded entirely by grants or donations from a number of leading
					philanthropies interested in fighting climate change. See the bottom of the front page for
					a list of our supporters.
				</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				Is Cascade a registry, verification body, marketplace, or consultant?
			</button>
			<div class="answer">
				<br />
				<p>
					No. We do not register, sell, verify, or partake in any other market activity in carbon
					credits or carbon removal, in part to avoid any misaligned incentives for our work. All of
					our funding comes from purely philanthropic grants or donations. Also, while we are
					helping to develop the v1 Community Quantification Standard for MRV in Enhanced Rock
					Weathering, we do not intend to become a standards body. Instead, we plan to help seek out
					and/or aid in the development of an appropriate standards body to hold the CQS and keep it
					up to date.
				</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				Does Cascade provide grants in the area of open-system climate interventions?
			</button>
			<div class="answer">
				<br />
				<p>
					Cascade Climate considers proposals for grants by invitation only and does not consider
					proposals with indirect costs above 10%.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	a {
		color: var(--color-accent);
	}
	#hero img {
		width: 100%;
		height: 384px;
		object-fit: cover;
		margin-top: -256px;
	}

	#faq {
		padding: 3rem 4rem;
	}

	#faq h1 {
		font-weight: 550;
		margin-bottom: 2rem;
	}

	#description {
		border-bottom: 1px dotted var(--color-accent);
	}

	h3 {
		margin: 1rem 0rem;
		font-family: 'Inter', sans-serif;
		color: var(--color-accent);
		font-size: 1.6rem;
		font-weight: 420;
	}

	.faq-item {
		padding-bottom: 1rem;
		border-bottom: 1px dotted var(--color-accent);
	}

	.question {
		border: none;
		background-color: transparent;
		border-radius: 0;
		width: 100%;
		text-align: start;
		padding: 1rem 0;
		font-family: 'Inter', sans-serif;
		font-weight: 420;
		color: var(--color-accent);
		font-size: 1.6rem;
		cursor: pointer;
		margin-bottom: -1rem;
	}

	.question span {
		float: right;
		z-index: -1;
		position: relative;
		margin: 0 1rem;
		color: var(--color-dark);
		opacity: 0.5;
		font-size: 2rem;
		line-height: 1.8rem;
		font-weight: 200;
	}

	.answer {
		overflow: hidden;
		max-height: 0px;
		transition: max-height 0.2s ease-in-out;
	}

	:global(div.answer.open) {
		max-height: 1080px !important;
	}
</style>

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
				Cascade is a philanthropically-backed nonprofit organization focused on accelerating progress across a range of natural system climate interventions. These are approaches that enhance or modulate natural systems already operating at planetary scale to prevent or undo deep climate harms. Working across industry, government, and science, we coordinate bottleneck-breaking initiatives, build tools and infrastructure that unlock deployment-driven learning cycles, and resource high-leverage R&D and public policy efforts.
			</p>
			<p>
				Since our founding in 2023, our initial focus has been on Enhanced Rock Weathering (ERW) — specifically, the development of a healthy ERW field built on a foundation of robust science. We are actively expanding our focus into additional natural system climate interventions, including within oceans and rivers.
			</p>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What kind of work does Cascade do, and what has it been working on so far? 
			</button>
			<div class="answer">
				<br />
				<p>
					Cascade is a philanthropically-backed non-profit, working to identify and address the highest-priority bottlenecks or risks to progress facing natural system intervention fields. We operate as an independent problem-solver and partner to the field, helping tackle thorny issues that aren’t the “job” of any individual actor, with a commitment to scientific integrity and incentives fully tied to the defense of our climate system.</p>
					
					<p>We serve as the connective tissue coordinating ambitious initiatives across government, industry, researchers, and communities.</p>

					<p>Our core activities include:</p>

				<ul>
					<li>
						Coordinating multi-actor efforts to overcome collective action problems holding back progress.
					</li>
					<li>
						Building ecosystem infrastructure needed for functioning markets and thriving scientific fields.
					</li>
					<li>
						Resourcing targeted scientific investigations to reduce uncertainties.
					</li>
					<li>
						Advancing policies that supporting CDR research and responsible deployment.
					</li>
				</ul>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What are “natural system climate interventions" and Enhanced Rock Weathering?
			</button>
			<div class="answer">
				<br />
				<p>
					By ‘natural system’, we mean interventions that tap into existing natural cycles and earth systems. These “interventions” could be for the purposes of:
				</p>
				<ul>
					<li>
						Durably removing CO2 from the atmosphere, through approaches like enhanced rock weathering or ocean alkalinity enhancement.
					</li>
					<li>
						Reducing near-term warming, by focusing on short lived climate pollutants and albedo management.
					</li>
					<li>Mitigating some of the direct adverse impacts of climate change, such as catastrophic sea level rise.</li>
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
				<p>Cascade’s first focus is in Enhanced Rock Weathering (ERW). ERW takes advantage of an existing natural process: the weathering of certain rocks (e.g., basalt, olivine) wherein the interaction of water, CO2 from the atmosphere, and minerals from the rock react to form dissolved pairings in water (e.g., calcium ions and bicarbonate), removing atmospheric carbon for thousands of years. These chemical weathering reactions already naturally remove over 1 gigaton (Gt) of CO2 from the atmosphere every year (<a href="https://www.nature.com/articles/s41586-020-2448-9">Beerling et al., 2020</a>). ERW accelerates this process by grinding the rocks into fine particles and spreading them, often on agricultural fields, so that the reaction is dramatically accelerated. These minerals provide a powerful benefit to farmers managing those fields – adding critical nutrients and countering the broad-based acidification of soils from fertilizers. This intervention thus has potential for both large-scale climate and farmer benefit.</p>

				<p>For more detail on natural system climate interventions and some of the key challenges that must be navigated as these nascent fields develop, you can read more <a href="https://greatunwind.substack.com/p/leveling-the-playing-field-for-open">here</a>.</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				Why did Cascade choose to focus on enhanced rock weathering first?
			</button>
			<div class="answer">
				<br />
				<p>
					We chose to focus on ERW first for several reasons:
				</p>
				<ul>
					<li>ERW has a high likelihood of being the first natural system climate intervention to be deployed at substantial scale. Many of the frameworks needed across carbon removal pathways and natural system climate interventions more generally–such as quantification under uncertainty, mitigating risks to environmental ecosystems and human health, policy support and regulation–will be hashed out for the first time in the context of ERW. The precedents established in ERW may carry over into numerous other fields.</li>
					<li>The ERW field currently holds the weight of daunting field-wide coordination challenges and risks—with no pre-existing field-building organization to provide the connective tissue and field leadership.</li>
					<li>ERW offers an uncommonly powerful suite of potential benefits. Given its contribution to soil health and rural jobs, ERW has a value proposition to farmers and their communities beyond its climate impact. Furthermore, ERW has enormous potential to improve livelihoods in the Global South—with many countries having plentiful feedstock, optimal weathering conditions, and limited existing access to agricultural lime and fertilizer.</li>
				</ul>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				What are Cascade’s goals in accelerating natural system climate interventions?
			</button>
			<div class="answer">
				<br />
				<p>Our goal is to help these new fields and approaches develop in a healthy, high-rigor, evidence-based, and—as appropriate—rapid manner. In cases where the science underlying a natural system climate intervention is deep, robust, and clear, Cascade’s work might focus on helping to shape the market (e.g., coordinating among buyers and suppliers to establish a healthy marketplace), or helping to build social license to deploy that approach at increasing scale. In other cases, the science underpinning these innovative approaches may still be developing. When this occurs, Cascade works with scientists, engineers, community groups, and others to accelerate their work: identifying gaps and helping to direct focus, data, and resources towards closing those gaps.</p>

				<p>Sometimes, there may be pre-existing or fast-growing commercial activity within a field, despite outstanding scientific gaps. When this happens, Cascade works to maximize the learning potential of that activity, build public trust through transparency, and establish appropriate safeguards. This involves connecting industry, academics, and policymakers in ways that may not ordinarily happen.</p>
				
				<p>Ultimately, when Cascade encounters cases where scientific developments indicate that a given approach is unsound, unscalable, or too risky, we would seek to flag that approach as one that should not be pursued.</p>
			</div>
		</div>
		<div class="faq-item">
			<button class="question" on:click={openAnswer}>
				<span>+</span>
				How is Cascade funded? Is Cascade a registry, verification body, marketplace, or consultant?
			</button>
			<div class="answer">
				<br />
				<p>
					Cascade is a nonprofit, funded entirely by grants or donations from a number of leading philanthropies focused on addressing climate change. See the bottom of our about page for a list of our supporters. We do not register, sell, verify, or partake in any other market activity in carbon credits or carbon removal, in part to avoid any misaligned incentives for our work. All of our funding comes from purely philanthropic grants or donations.
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

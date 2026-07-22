<script>
	import ScrollNav from '$lib/components/ScrollNav.svelte';
</script>

<svelte:head>
	<title>Mapping the Terrain: Notes from the ERW Modeling Workshop - Cascade Climate</title>
	<meta
		name="description"
		content="Notes from Cascade Climate’s first-of-its-kind ERW modeling workshop convening modelers and empiricists to chart critical hypotheses and data needs."
	/>
</svelte:head>

<div class="may-workshop-page">
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Mapping the Terrain: Notes from the ERW Modeling Workshop</h1>
				<p class="date" style="font-weight: 200;">July 22, 2026</p>
				<hr />
			</div>
		</div>
	</section>
	<ScrollNav fixedUnderIntro />
	<main>
		<section id="intro">
			<h1>Intro</h1>
			<p>
				The premise of ERW is simple: add crushed rocks to soil and allow the weathering of these
				rocks to draw down carbon dioxide from our atmosphere. But to understand the total climate
				impact of ERW, we must follow carbon&rsquo;s complex path through the earth system: from the
				surface of the dissolving rock itself, through the chemical reactions in the soil, into the
				groundwater that carries it to rivers and, eventually, the ocean — where it can stay stored
				for thousands of years. This winding journey is impossible to directly observe, but computer
				models can help scientists see what shovels can&rsquo;t.
			</p>
			<p>
				But for practitioners and policymakers to trust model-based CDR quantification, seeing
				isn&rsquo;t believing — yet. These models must first be compared against one another and
				validated with high-quality datasets so that their predictions reflect the real underworld
				beneath our feet.
			</p>
			<p>
				In a first-of-its-kind convening, Cascade Climate brought together fifteen ERW modelers and
				empiricists from academic, government, and nonprofit institutions in New York City to begin
				answering those questions. Over two days, the group took up two tasks: first to pin down the
				key hypotheses that soil geochemical models can test to build confidence in estimates of the
				magnitude and durability of CDR via ERW, and then to determine what model capabilities and
				field data are needed to put those hypotheses to the test. Co-chairs Kate Maher (Stanford) and
				Becca Neumann (University of Washington) steered the scope and framing of the workshop
				alongside Cascade&rsquo;s Richard Marinos and Will Nguyen.
			</p>
		</section>

		<figure class="workshop-photo">
			<img
				src="/images/blog/erw-modeling-workshop-hero.jpg"
				alt="Participants of the ERW Modeling Workshop gathered for a group photo"
			/>
		</figure>

		<section id="charting-critical-questions">
			<h1>Charting critical questions</h1>
			<p>
				The group distilled several testable hypotheses across four themes — feedstock dissolution
				rates, accounting for different sources of acidity in the soil, hydrologic controls on the
				export of alkalinity, and interactions between soil organisms and geochemical outcomes —
				coalescing around modeling experiments that can decisively advance understanding. These
				hypotheses touched on questions such as: Does water end up flowing along the surfaces of
				feedstock grains once they&rsquo;re mixed into the soil? These seemingly simple questions can
				profoundly affect CDR outcomes, and the right geochemical models help us ask them. The
				workshop&rsquo;s agenda created space to acknowledge the hard things — how a model&rsquo;s
				structure shapes what it can reveal, and how to compare models when they arrive at differing
				conclusions.
			</p>
			<p>
				&ldquo;The ERW modeling community represents an incredibly diverse suite of soil modeling
				approaches,&rdquo; said Marinos. &ldquo;Understanding the assumptions that make these models
				agree or disagree in their predictions is central to interpreting their quantitative results,
				and the workshop was a great opportunity to really drill down into these assumptions.&rdquo;
			</p>
		</section>

		<section id="pinpointing-missing-data">
			<h1>Pinpointing missing data</h1>
			<p>
				The group also identified the key empirical data that modelers will require to test these
				hypotheses. Rich field datasets are needed to calibrate and validate soil geochemical models,
				but not only can these datasets be difficult to produce over multiple years at a field site,
				modelers often run into issues when data is not purpose-collected with a model-based, testable
				hypothesis in mind. The group worked with Cascade to develop a model-centered field research
				agenda for the next five years, to be realized in part through Cascade&rsquo;s
				<a href="/bedrock-initiative/CRN">Coordinated Research Network</a>. Priority data needs include
				a detailed characterization of flowpath heterogeneity, extensive characterization of
				ERW&rsquo;s impact on plant-soil-microbe interactions, and better information on how agronomic
				practice drives geochemical change.
			</p>
			<p>
				While most participants viewed the CDR predictions from ERW models as too uncertain to use in
				carbon accounting presently, ensemble modeling backed by robust, standardized field datasets
				offered a clear path to reducing these uncertainties and building trust in model predictions. A
				consistent theme that ran through these discussions was that if models are going to see wider
				application outside of academic studies, model development and validation need to take place
				in transparent frameworks that are open to the broader scientific and policymaking
				communities. Participants were eager to start running model ensembles to begin comparing
				outputs and stress-testing assumptions.
			</p>
			<p>
				To build toward model intercomparison, the next phase will focus on sharpening hypotheses,
				making the empirical measurements that models need to test them, and developing a
				collaborative technical paper.
			</p>
			<p>
				&ldquo;The ultimate goal here is not just better models, but clearer evidence,&rdquo; said
				Neumann, &ldquo;about where enhanced weathering works, how durable the carbon removal is, and
				what it will take to deploy it responsibly at a meaningful scale.&rdquo;
			</p>
			<p>
				The workshop coincided with the launch of
				<a href="/bedrock-initiative">Bedrock Initiative</a>, a coordinated global research program to
				unlock the climate and agricultural potential of enhanced rock weathering. The
				participants&rsquo; contributions will help lay the groundwork for Bedrock&rsquo;s model
				intercomparison effort, which will draw on empirical data from a coordinated network of field
				research sites, another core pillar of the Bedrock Initiative.
			</p>
			<p>
				Cascade Climate would like to thank the Environmental Defense Fund for hosting this workshop at
				their New York office.
			</p>
			<p><a class="back" href="/bedrock-initiative/modeling">← Back to Model Acceleration</a></p>
		</section>
	</main>
</div>

<style>
	:global(.may-workshop-page main section) {
		scroll-margin-top: 7rem;
		border-bottom: none !important;
		margin-top: 2rem;
		margin-bottom: 0;
		padding-top: 0;
		padding-bottom: 1rem;
	}

	:global(.may-workshop-page main section h1) {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	:global(.may-workshop-page main section p) {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.workshop-photo {
		margin: 2rem auto;
		padding: 0;
		max-width: 720px;
		text-align: center;
	}

	.workshop-photo img {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
		border-radius: 1rem;
		object-fit: cover;
	}

	.back {
		color: var(--color-accent);
		text-decoration: none;
		font-weight: 420;
	}
</style>

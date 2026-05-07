<script>
	import zekeHeadshot from '$lib/images/people/zeke-hausfather.png';
	import daiHeadshot from '$lib/images/people/dai-ellis.png';
	import elenaHeadshot from '$lib/images/people/elena-cavallero.png';
	import placeholderHeadshot from '$lib/images/people/person-placeholder.svg';
</script>

<svelte:head>
	<title>Governance - Bedrock Initiative - Cascade Climate</title>
	<meta
		name="description"
		content="Governance structure for the Bedrock Initiative: leadership and advisory roles supporting strategy, scientific integrity, and execution."
	/>
</svelte:head>

<div class="page">
	<section class="preamble">
		<p class="crumb"><a href="/bedrock-initiative">Bedrock Initiative</a></p>
		<h1>Governance</h1>
	</section>
	<section class="body">
		<p>
			Bedrock is governed through a structure convened and supported by Cascade Climate. A Steering Committee holds
			decision-making authority over funding and annual operating priorities, and a Scientific Advisory Board provides
			scientific oversight and independent guidance.
		</p>
		<p>
			Fit-for-purpose working groups support on-the-ground coordination, experimental design, and data analysis across
			Bedrock research programs.
		</p>

		<section class="team" aria-labelledby="team-h">
			<h2 id="team-h" class="team-heading">Steering Committee</h2>
			<div class="team-grid">
				<article class="person-card">
					<img src={elenaHeadshot} alt="Elena Cavallero" />
					<h3>Elena Cavallero</h3>
					<p>Venture Advisor, The Grantham Foundation for the Protection of the Environment and Board Member, Cascade Climate</p>
				</article>

				<article class="person-card">
					<img src={daiHeadshot} alt="Dai Ellis" />
					<h3>Dai Ellis</h3>
					<p>CEO, Co-Founder, Cascade Climate</p>
				</article>

				<article class="person-card">
					<img src={zekeHeadshot} alt="Zeke Hausfather" />
					<h3>Zeke Hausfather</h3>
					<p>Climate Research Lead, Frontier</p>
				</article>
			</div>
		</section>

		<section class="team" aria-labelledby="sab-h">
			<h2 id="sab-h" class="team-heading">Science Advisory Board</h2>
			<div class="team-grid">
				<article class="person-card">
					<img src={placeholderHeadshot} alt="Placeholder portrait for Kate Maher" />
					<h3>Kate Maher</h3>
					<p>Scientific Advisory Board Member</p>
				</article>

				<article class="person-card">
					<img src={placeholderHeadshot} alt="Placeholder portrait for Isabel Montañez" />
					<h3>Isabel Montañez</h3>
					<p>Scientific Advisory Board Member</p>
				</article>
			</div>
		</section>

		<p><a class="back" href="/bedrock-initiative">← Bedrock Initiative Home</a></p>
	</section>
</div>

<style>
	.page {
		padding-bottom: 4rem;
	}
	.preamble {
		padding: 1.25rem 4rem;
		background: var(--color-dark);
		color: var(--color-light);
	}
	.crumb a {
		color: var(--color-highlight);
		text-decoration: none;
		font-size: 0.9rem;
	}
	h1 {
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem 0 0;
	}
	.body {
		padding: 1.75rem 4rem;
		max-width: 980px;
	}
	.team {
		margin-top: 1.5rem;
		margin-bottom: 1.25rem;
	}
	.team-heading {
		margin: 0 0 1rem;
		font-weight: 500;
		font-size: 1.25rem;
		color: var(--color-dark);
	}
	.team-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}
	.person-card {
		display: flex;
		flex-direction: column;
	}
	.person-card img {
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 0.9rem;
		border: 1px solid color-mix(in srgb, var(--color-dark) 15%, transparent);
	}
	.person-card h3 {
		margin: 0.7rem 0 0.35rem;
		font-weight: 500;
		font-size: 1.15rem;
		color: var(--color-dark);
	}
	.person-card p {
		margin: 0;
		line-height: 1.45;
		font-size: 0.95rem;
	}
	.person-card blockquote {
		margin: 0.7rem 0 0;
		padding-left: 0.65rem;
		border-left: 2px solid color-mix(in srgb, var(--color-accent) 60%, transparent);
		font-style: italic;
		font-size: 0.92rem;
		line-height: 1.45;
		color: color-mix(in srgb, var(--color-dark) 80%, transparent);
	}
	.back {
		color: var(--color-accent);
		text-decoration: none;
	}
	@media (max-width: 900px) {
		.team-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 660px) {
		.preamble,
		.body {
			padding-left: 2rem;
			padding-right: 2rem;
		}
		.team-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

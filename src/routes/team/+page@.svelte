<script>
	import daiEllis from '$lib/images/team/dai-ellis.png';
	import jenniferMills from '$lib/images/team/jennifer-mills.png';
	import vilasRao from '$lib/images/team/vilas-rao.png';
	import haraWang from '$lib/images/team/hara-wang.png';
	import johnSanchez from '$lib/images/team/john-sanchez.png';
	import taylorChapman from '$lib/images/team/taylor-chapman.png';
	import alexPrice from '$lib/images/team/alex-price.png';
	import noemmaOlagaray from '$lib/images/team/noemma-olagaray.png';
	import arielleLok from '$lib/images/team/arielle-lok.png';

	import noahPlanavsky from '$lib/images/team/noah-planavsky.png';
	import chrisReinhard from '$lib/images/team/chris-reinhard.png';

	import anilSoni from '$lib/images/team/anil-soni.png';
	import antoniusGagern from '$lib/images/team/antonius-gagern.jpeg';
	import elaineHsieh from '$lib/images/team/elaine-hsieh.png';
	import elenaCavallero from '$lib/images/team/elena-cavallero.png';
</script>

<div id="team-container">
	<section id="cta">
		<h1>Join Cascade Climate</h1>
		<p>
			To accelerate progress in our shared climate fight, Cascade is building a new kind of climate
			organization. We work across science, civil society, markets, and policy to advance critical
			fields and pathways. Come join a passionate, smart and dedicated team.
		</p>
		<p>
			We’re committed to being one of the best places to work on climate — that means competitive
			compensation and benefits, a focus on professional and personal growth, and outstanding
			culture.
		</p>
		<a href="https://jobs.lever.co/cascade-climate">Work with us</a>
	</section>
	<section id="team">
		<h1>Founding team</h1>
		<a class="team-card" href="/team/dai-ellis">
			<img src={daiEllis} alt="Dai Ellis" />
			<h1>Dai Ellis</h1>
			<span>Co-founder + CEO</span>
		</a>
		<a class="team-card" href="/team/jennifer-mills">
			<img src={jenniferMills} alt="Jennifer Mills" />
			<h1>Jennifer Mills</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/vilas-rao">
			<img src={vilasRao} alt="Vilas Rao" />
			<h1>Vilas Rao</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/hara-wang">
			<img src={haraWang} alt="Hara Wang" />
			<h1>Hara Wang</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/john-sanchez">
			<img src={johnSanchez} alt="John Sanchez" />
			<h1>John Sanchez</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/taylor-chapman">
			<img src={taylorChapman} alt="Taylor Chapman" />
			<h1>Taylor Chapman</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/alex-price">
			<img src={alexPrice} alt="Alex Price" />
			<h1>Alex Price</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/noemma-olagaray">
			<img src={noemmaOlagaray} alt="Noemma Olagaray" />
			<h1>Noemma Olagaray</h1>
			<span>Founding team</span>
		</a>
		<a class="team-card" href="/team/arielle-lok">
			<img src={arielleLok} alt="Arielle Lok" />
			<h1>Arielle Lok</h1>
			<span>Founding team</span>
		</a>

		<h1>Contributors</h1>
		<a class="team-card" href="/team/noah-planavsky">
			<img src={noahPlanavsky} alt="Noah Planavsky" />
			<h1>Noah Planavsky</h1>
			<span>Senior Contributing Scientist</span>
		</a>
		<a class="team-card" href="/team/chris-reinhard">
			<img src={chrisReinhard} alt="Chris Reinhard" />
			<h1>Chris Reinhard</h1>
			<span>Senior Contributing Scientist</span>
		</a>

		<h1>Our Board</h1>
		<a class="team-card" href="/team/anil-soni">
			<img src={anilSoni} alt="Anil Soni" />
			<h1>Anil Soni</h1>
			<span>CEO, World Health Organization Foundation</span>
		</a>
		<a class="team-card" href="/team/antonius-gagern">
			<img src={antoniusGagern} alt="Antonius Gagern" />
			<h1>Antonius Gagern</h1>
			<span>Executive Director, Carbon to Sea</span>
		</a>
		<a class="team-card" href="/team/elaine-hsieh">
			<img src={elaineHsieh} alt="Elaine Hsieh" />
			<h1>Elaine Hsieh</h1>
			<span
				>Senior Advisor to the Under Secretary for Infrastructure - U.S. Department of Energy</span
			>
		</a>
		<a class="team-card" href="/team/elena-cavallero">
			<img src={elenaCavallero} alt="Elena Cavallero" />
			<h1>Elena Cavallero</h1>
			<span>Grantham Foundation </span>
		</a>
	</section>
</div>

<style>

	#team-container {
		padding: 2rem;
	}

	#cta {
		border-radius: 2rem;
		background-color: var(--color-dark);
		color: var(--color-light);
		padding: 2rem;
		margin-bottom: 2rem;
	}

	#cta h1 {
		margin-top: 0;
	}

	#cta a {
		display: block;
		padding: 1rem 2rem;
		text-align: center;
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-decoration: none;
		color: var(--color-light);
		transition: all 0.2s ease-out;
	}

	#cta a:hover {
		background-color: var(--color-light);
		color: var(--color-accent);
	}

	#team {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem 2%;
	}

	h1 {
		width: 100%;
		margin-bottom: 0;
	}

	.team-card {
		display: flex;
		flex-direction: column;
		width: 23.5%;
		text-decoration-color: transparent;
		color: var(--color-text);
		transition: all 0.2s ease-out;
	}

	.team-card img {
		border-radius: 2rem;
	}

	.team-card h1 {
		margin-top: 1rem;
		margin-bottom: 0.4rem;
	}

	.team-card span {
		font-size: 0.88rem;
		margin-left: 2px;
		line-height: 1.2rem;
	}

	.team-card:hover {
		color: var(--color-accent);
		scale: 1.02;
	}

	@media (max-width: 1080px) {
		.team-card {
			width: 32%;
		}
	}

	@media (max-width: 880px) {
		.team-card {
			width: 48%;
		}
	}

	@media (max-width: 660px) {
		.team-card {
			width: 100%;
		}
	}
</style>

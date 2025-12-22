<script>
	import daiEllis from '$lib/images/people/dai-ellis.webp';
	import jenniferMills from '$lib/images/people/jennifer-mills.webp';
	import jonathanMoore from '$lib/images/people/jonathan-moore.webp';
	import johnSanchez from '$lib/images/people/john-sanchez.webp';
	import haraWang from '$lib/images/people/hara-wang.webp';
	import vilasRao from '$lib/images/people/vilas-rao.webp';
	import arielleLok from '$lib/images/people/arielle-lok.webp';
	import alisonTune from '$lib/images/people/alison-tune.webp';
	import bradRochlin from '$lib/images/people/brad-rochlin.webp';
	import cathyLuo from '$lib/images/people/cathy-luo.webp';
	import annaSophiaRoberts from '$lib/images/people/anna-sophia-roberts.webp';
	import alexPrice from '$lib/images/people/alex-price.webp';
	import jamieNewman from '$lib/images/people/jamie-newman.webp';
	import noahAnderson from '$lib/images/people/noah-anderson.webp';
	import noemmaOlagaray from '$lib/images/people/noemma-olagaray.webp';
	import nicGubbins from '$lib/images/people/nic-gubbins.webp';
	import prithaGhosh from '$lib/images/people/pritha-ghosh.webp';
	import rachelSmith from '$lib/images/people/rachel-smith.webp';
	import richardMarinos from '$lib/images/people/richard-marinos.webp';
	import tannisThorlakson from '$lib/images/people/tannis-thorlakson.webp';
	import leahBridle from '$lib/images/people/leah-bridle.webp';
	import chrisReinhard from '$lib/images/people/chris-reinhard.webp';
	import noahPlanavsky from '$lib/images/people/noah-planavsky.webp';

	import anilSoni from '$lib/images/people/anil-soni.webp';
	import antoniusGagern from '$lib/images/people/antonius-gagern.webp';
	import elaineHsieh from '$lib/images/people/elaine-hsieh.webp';
	import elenaCavallero from '$lib/images/people/elena-cavallero.webp';
	import saraBoettiger from '$lib/images/people/sara-boettiger.webp';
	import etoshaCave from '$lib/images/people/etosha-cave.webp';
	import aliWhite from '$lib/images/people/ali-white.webp';

	import { onMount } from 'svelte';

	let activeSection = '';

	function handleScroll() {
		const scrollPosition = window.scrollY;
		activeSection = '';
		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				if (scrollPosition >= offsetTop - 10 && scrollPosition < offsetTop + offsetHeight - 10) {
					activeSection = section.id;
				}
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const sections = [
		{ id: 'team', title: 'Team' },
		{ id: 'board', title: 'Board of Directors' }
	];
</script>

<svelte:head>
	<title>Team - Cascade Climate</title>
	<meta
		name="description"
		content="Information about the founding team, contributors, and board members of Cascade Climate."
	/>
</svelte:head>
<div id="people">
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
		<a href="/careers">Work with us</a>
	</section>
	<section id="team">
		<h1>Team</h1>
		<a class="team-card" href="/people/dai-ellis">
			<img src={daiEllis} alt="Dai Ellis" />
			<h1>Dai Ellis</h1>
			<span>Co-founder, Chief Executive Officer</span>
		</a>
		<a class="team-card" href="/people/hara-wang">
			<img src={haraWang} alt="Hara Wang" />
			<h1>Hara Wang</h1>
			<span>Co-founder, Chief Programs Officer</span>
		</a>
		<a class="team-card" href="/people/vilas-rao">
			<img src={vilasRao} alt="Vilas Rao" />
			<h1>Vilas Rao</h1>
			<span>Co-founder, Chief Operating Officer</span>
		</a>
		<a class="team-card" href="/people/alison-tune">
			<img src={alisonTune} alt="Alison Tune" />
			<h1>Alison Tune</h1>
			<span>ERW Scientist</span>
		</a>
		<a class="team-card" href="/people/ali-white">
			<img src={aliWhite} alt="Ali White" />
			<h1>Ali White</h1>
			<span>Program Manager</span>
		</a>
		<a class="team-card" href="/people/anna-sophia-roberts">
			<img src={annaSophiaRoberts} alt="Anna Sophia Roberts" />
			<h1>Anna Sophia Roberts</h1>
			<span>Policy Associate</span>
		</a>
		<a class="team-card" href="/people/arielle-lok">
			<img src={arielleLok} alt="Arielle Lok" />
			<h1>Arielle Lok</h1>
			<span>Program Manager</span>
		</a>
		<a class="team-card" href="/people/brad-rochlin">
			<img src={bradRochlin} alt="Brad Rochlin" />
			<h1>Brad Rochlin</h1>
			<span>Program Director, Carbon Markets</span>
		</a>
		<a class="team-card" href="/people/jamie-newman">
			<img src={jamieNewman} alt="Jamie Newman" />
			<h1>Jamie Newman</h1>
			<span>Recruiting & Operations Manager</span>
		</a>
		<a class="team-card" href="/people/jonathan-moore">
			<img src={jonathanMoore} alt="Jon Jon Moore" />
			<h1>Jon Jon Moore</h1>
			<span>Communications Manager</span>
		</a>
		<a class="team-card" href="/people/leah-bridle">
			<img src={leahBridle} alt="Leah Bridle" />
			<h1>Leah Bridle</h1>
			<span>Operations Manager, ERW</span>
			</a>
		<a class="team-card" href="/people/nic-gubbins">
			<img src={nicGubbins} alt="Nic Gubbins" />
			<h1>Nic Gubbins</h1>
			<span>Geochemical Data Science Fellow</span>
		</a>
		<a class="team-card" href="/people/noah-anderson">
			<img src={noahAnderson} alt="Noah Anderson" />
			<h1>Noah Anderson</h1>
			<span>ERW Scientist</span>
		</a>
		<a class="team-card" href="/people/noemma-olagaray">
			<img src={noemmaOlagaray} alt="Noemma Olagaray" />
			<h1>Noemma Olagaray</h1>
			<span>Program Manager</span>
		</a>
		<a class="team-card" href="/people/rachel-smith">
			<img src={rachelSmith} alt="Rachel Smith" />
			<h1>Rachel Smith</h1>
			<span>Policy Director</span>
		</a>
		<a class="team-card" href="/people/richard-marinos">
			<img src={richardMarinos} alt="Richard Marinos" />
			<h1>Richard Marinos</h1>
			<span>ERW Scientist</span>
		</a>
		<a class="team-card" href="/people/tannis-thorlakson">
			<img src={tannisThorlakson} alt="Tannis Thorlakson" />
			<h1>Tannis Thorlakson</h1>
			<span>Senior Program Director, ERW</span>
		</a>
		
	</section>

	<section id="board">
		<h1 id="board">Our Board</h1>
		<a class="team-card" href="/people/anil-soni">
			<img src={anilSoni} alt="Anil Soni" />
			<h1>Anil Soni</h1>
			<span>CEO, World Health Organization Foundation</span>
		</a>
		<a class="team-card" href="/people/antonius-gagern">
			<img src={antoniusGagern} alt="Antonius Gagern" />
			<h1>Antonius Gagern</h1>
			<span>Executive Director, Carbon to Sea</span>
		</a>
		<a class="team-card" href="/people/elaine-hsieh">
			<img src={elaineHsieh} alt="Elaine Hsieh" />
			<h1>Elaine Hsieh</h1>
			<span
				>COO and Partner at VoLo Earth Ventures</span
			>
		</a>
		<a class="team-card" href="/people/elena-cavallero">
			<img src={elenaCavallero} alt="Elena Cavallero" />
			<h1>Elena Cavallero</h1>
			<span>Grantham Foundation </span>
		</a>
		<a class="team-card" href="/people/sara-boettiger">
			<img src={saraBoettiger} alt="Sara Boettiger" />
			<h1>Sara Boettiger</h1>
			<span>Sustainability, climate change, and agrifood advisor</span>
		</a>
		<a class="team-card" href="/people/etosha-cave">
			<img src={etoshaCave} alt="Etosha Cave" />
			<h1>Etosha Cave</h1>
			<span>Co-founder and Chief Scientific Officer at Twelve</span>
		</a>
	</section>
</div>

<style>
	#people {
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
		margin-bottom: 1rem;
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

	#team, #board {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem 2%;
	}

	h1 {
		width: 100%;
		margin-bottom: -0.5rem;
		font-weight: 500;
		margin-top: 2rem;
	}

	.team-card {
		display: flex;
		flex-direction: column;
		width: 23.5%;
		text-decoration-color: transparent;
		color: var(--color-text);
		transition:
			color 0.2s ease-out,
			scale 0.2s ease-out;
	}

	.team-card img {
		border-radius: 2rem;
		width: 100%;
		height: auto;
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

<script>
	import careersImage from '$lib/images/careers.webp';
	import medicalImage from '$lib/images/icons/medical.webp';
	import retirementImage from '$lib/images/icons/401k.webp';
	import ptoImage from '$lib/images/icons/pto.webp';
	import learningImage from '$lib/images/icons/learning.webp';
	import wfhImage from '$lib/images/icons/wfh.webp';
	import perksImage from '$lib/images/icons/perks.webp';
	import hubsImage from '$lib/images/hubs.webp';
</script>

<section id="intro">
	<div class="content">
		<h1>Careers</h1>
		<p>
			Join a passionate, curious, and dedicated team working to address one of the most pressing
			challenges of our time. At Cascade Climate, we are committed to being one of the best places
			to work in climate—that means competitive compensation, comprehensive benefits, and a vibrant
			culture where you can grow.
		</p>
		<a target="_blank" href="/TODO">Current Openings ↗</a>
	</div>
	<div class="image">
		<img src={careersImage} alt="Careers" />
	</div>
</section>
<section id="culture">
	<h1>Culture</h1>
	<p>
		At Cascade Climate, creating a dynamic and fulfilling work environment is at the heart of
		everything we do. Guided by the principles of curiosity, collaboration, and a bias for action,
		we empower each team member to make meaningful contributions to our mission. Every individual
		plays an important role in cultivating an inclusive and thriving culture - we hope you’ll be
		part of it.
	</p>
	<div class="cards">
		<div class="card">
			<img src={careersImage} alt="diversity" />
			<h2>Commitment to Diversity</h2>
			<p>
				Hiring and retaining a diverse workforce is core to our mission. We strive to listen, learn,
				and foster an environment where our team feels empowered and valued. Externally, we aim to
				elevate the voices of those disproportionately affected by climate change, making
				environmental justice a focus of our work.
			</p>
		</div>
		<div class="card">
			<img src={careersImage} alt="collaboration" />
			<h2>Team Collaboration</h2>
			<p>
				Collaboration - whether it’s internally or with our partners - is the backbone of our team.
				We provide the tools and support to collaborate effectively, no matter the location. We
				prioritize regular in-person gatherings, from retreats and whiteboarding sessions, that
				strengthen our connective tissue and fuel creativity.
			</p>
		</div>
		<div class="card">
			<img src={careersImage} alt="learning" />
			<h2>Continuous Learning</h2>
			<p>
				We believe that personal and professional growth go hand-in-hand. At Cascade Climate, we
				promote a culture of continuous learning, offering consistent feedback, coaching, and
				resources to help every employee set ambitious goals and reach them. Your development is as
				important to us as the work we do together.
			</p>
		</div>
	</div>
</section>
<section id="process">
	<h1>Interested? Here's what to expect during the interview process*</h1>
	<div class="steps-wrapper">
		<div id="steps">
			<div class="step">
				<h2>Screen</h2>
				<p>
					CA 30-minute video call to get to know you, your background, and your interest in Cascade.
				</p>
			</div>
			<div class="step">
				<h2>Culture</h2>
				<p>
					A 30-minute video call to share about Cascade’s culture and explore your working style,
					personal interests, and what energizes you.
				</p>
			</div>
			<div class="step">
				<h2>Topgrade</h2>
				<p>A 1-hour deep-dive into your academic and professional background and career goals.</p>
			</div>
			<div class="step">
				<h2>Assignment</h2>
				<p>A take-home exercise to offer a glimpse into Cascade’s programmatic work.</p>
			</div>
			<div class="step">
				<h2>Final</h2>
				<p>
					A debrief of your assignment and an opportunity to ask questions and connect with more
					team members. In-person, when possible!
				</p>
			</div>
		</div>
	</div>
	<p class="footnote">*illustrative and will depend on role</p>
</section>
<section id="benefits">
	<h1>Benefits & Perks</h1>
	<div class="items">
		<div class="item">
			<img src={medicalImage} alt="Medical" />
			<span> Medical, dental, and vision benefits and One Medical access </span>
		</div>
		<div class="item">
			<img src={retirementImage} alt="401k" />
			<span> 401k with employer-match</span>
		</div>
		<div class="item">
			<img src={ptoImage} alt="PTO" />
			<span>Unlimited time off and holiday shutdown</span>
		</div>
		<div class="item">
			<img src={learningImage} alt="Learning" />
			<span>Learning & development stipend</span>
		</div>
		<div class="item">
			<img src={wfhImage} alt="Wfh" />
			<span>Coworking spaces and home-office stipend</span>
		</div>
		<div class="item">
			<img src={perksImage} alt="Perks" />
			<span>Other perks like Peloton memberships, home-office stipend</span>
		</div>
	</div>
</section>
<section id="hubs">
	<img src={hubsImage} alt="Hubs" />
	<div class="content">
		<h1>Our Hubs:</h1>
		<ul>
			<li>Boston, MA</li>
			<li>San Francisco, CA</li>
			<li>Washington, DC</li>
			<li>New York City, NY</li>
		</ul>
	</div>
</section>

<style>
	#intro {
		display: flex;
		justify-content: space-between;
		background-color: var(--color-dark);
		padding: 1rem 4rem;
		padding-bottom: 3rem;
	}

	#intro .content {
		color: var(--color-light);
		width: 45%;
	}

	#intro .image {
		padding-top: 1.5rem;
		width: 50%;
	}

	#intro .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}

	a {
		color: var(--color-dark);
		font-weight: 420;
		text-decoration: none;
		background-color: var(--color-light);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		display: inline-block;
		margin-top: 1rem;
	}

	h1 {
		font-weight: 300;
		font-size: 2rem;
		line-height: 1;
		margin-bottom: 1rem;
	}

	section {
		padding: 1rem 4rem;
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	#culture {
		color: var(--color-dark);
	}

	#culture .cards {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
	}

	#culture .card {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 25%;
	}

	#culture .card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 1rem;
	}

	h2 {
		font-weight: 550;
		font-size: 1.5rem;
		line-height: 1;
		margin-bottom: 1rem;
	}

	#process {
		background-color: var(--color-dark);
		width: 100%;
		overflow-x: auto;
		color: var(--color-light);
	}

	#steps {
		display: flex;
		gap: 2rem;
		border-top: 4px solid var(--color-light);
		width: fit-content;
		margin-top: 2rem;
		margin-bottom: 1rem;
		position: relative;
	}

	#steps::after {
		content: '';
		position: absolute;
		top: -4px;
		right: -12px;
		width: 0;
		height: 0;
		border-left: 12px solid var(--color-light);
		border-top: 12px solid transparent;
		border-bottom: 12px solid transparent;
		transform: translateY(-10px);
	}

	#process h1,
	#process p {
		position: sticky;
		left: 0;
	}

	.steps-wrapper {
		padding-right: 4rem;
		width: fit-content;
	}

	.step {
		width: 200px;
	}

	.step::before {
		content: '';
		display: block;
		width: 12px;
		height: 12px;
		background-color: var(--color-light);
		border-radius: 50%;
		transform: translateY(-8px);
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 3rem;
	}

	.item {
		display: flex;
		flex-basis: 320px;
		flex-grow: 1;
		gap: 1rem;
		align-items: center;
	}

	#hubs {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--color-dark);
		border-bottom: 1px solid var(--color-light);
		padding: 2rem 4rem;
		gap: 2rem;
	}

	#hubs img {
		width: 70%;
	}

	#hubs .content {
		color: var(--color-light);
	}

	@media (max-width: 660px) {
		section {
			padding-left: 2rem;
			padding-right: 2rem;
		}

		#intro,
		#process,
		#benefits,
		#hubs {
			padding-left: 2rem;
			padding-right: 2rem;
		}
		#intro {
			flex-direction: column;
		}

		#intro .image {
			width: 100%;
		}

		#intro .content {
			width: 100%;
		}

		#culture .cards {
			flex-direction: column;
		}

		#culture .card {
			width: 100%;
		}

		#hubs {
			flex-direction: column-reverse;
		}

		#hubs img {
			width: 100%;
		}

		#hubs .content {
			width: 100%;
		}
	}
</style>

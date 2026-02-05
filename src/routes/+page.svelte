<script>
	import erwPhoto from '$lib/images/nature/erw.webp';
	import farm1 from '$lib/images/nature/farm1.webp';
	import farm2 from '$lib/images/nature/farm2.webp';
	import ocean1 from '$lib/images/nature/ocean1.webp';
	import ocean2 from '$lib/images/nature/ocean2.webp';
	import data from '$lib/images/nature/data.webp';
	import policy from '$lib/images/nature/policy.webp';
	import cost from '$lib/images/nature/cost.webp';
	import bridge from '$lib/images/nature/bridge.webp';
	import heroPhoto4 from '$lib/images/hero.webp';
	import newblock1 from '$lib/images/supporters/newblock-1.webp';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import herophoto3 from '$lib/images/nature/heroPhoto3.webp';
</script>

<svelte:head>
	<title>Cascade Climate</title>
	<meta
		name="description"
		content="Cascade is a philanthropy-backed nonprofit helping mobilize a comprehensive response to the climate crisis by accelerating high-potential solutions that remain on the margins of mainstream climate action."
	/>
</svelte:head>
<div>
	<section id="headline" style="width: 100%;">
		<h1>
			Propelling high-potential climate solutions from the margins to the mainstream.
		</h1>
	</section>
	<section id="about">
		<img src={heroPhoto4} alt="Cascade Climate" />
		<div>
			<p style="font-weight: 200;">
				Intensifying global warming demands a faster and smarter response. We need to sustain focus on rapid decarbonization while pursuing a broader range of interventions to prevent and manage the worst effects of climate change. This holistic strategy must encompass near-term warming mitigation, large-scale durable carbon removal for climate restoration, and measures to avoid triggering irreversible tipping points.
				<br><br>
				Cascade is a philanthropy-backed nonprofit helping mobilize a comprehensive response to the climate crisis by <b>accelerating high-potential solutions that remain on the margins of mainstream climate action</b>. We do this by leading ambitious initiatives spanning markets, policy and science to overcome the biggest bottlenecks to progress.
			</p>
			<hr style="margin: 64px;">
		</div>
	</section>

	<section id="our-work">
		<!-- <h3><a href="about-us">ABOUT US ↗</a></h3>
		<h4 style="text-align: center; margin: 18px; font-weight: 200; line-height: 1.4; font-size: 150%;">
			Cascade is a philanthropy-backed nonprofit helping mobilize a comprehensive response to the climate crisis by <b>accelerating high-potential solutions that remain on the margins of mainstream climate action</b>. We do this by leading ambitious initiatives spanning markets, policy and science to overcome the biggest bottlenecks to progress.
		</h4>

		<hr style="margin: 48px;"> -->

		<h3>SPOTLIGHT ON <a href="/our-work">OUR WORK ↗</a></h3>
		<div class="spotlights">
			<div class="spotlight">
				<img src={herophoto3} alt="CRN EOI"/>
				<h2>Seeking hosts for coordinated ERW research
				</h2>
				<p>
					To answer critical field questions, Cascade is standing up a new global network of standardized ERW experimental field trials and seeking partners to host and operate sites.

				</p>
				<a href="/blog/crn-eoi" target="_blank">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={asiasmoke} alt="Asia Smoke"/>
					<h2>Accounting and claims for short-lived and long-lived pollutants
					</h2>
					<p>
						Learn more about why today's climate actions must go beyond CO2 mitigation and prioritize activities that can reduce near-term warming in the coming decades.
	
					</p>
				<a href="/blog/accounting-and-claims-for-super-pollutants" target="_blank">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={bridge} alt="Crossing The Bridge"/>
				<h2>Voluntary climate financing as a bridge to scale
				</h2>
				<p>
					Voluntary finance is one of the few tools we can deploy at speed to de-risk climate technologies and close gaps to scale. Here's how we're thinking about it.

				</p>
				<a href="/blog/crossing-the-bridge" target="_blank">Learn More</a>
			</div>
			<div class="spotlight">
				<img src={data} alt="Data Sharing System" />
				<h2>A data sharing system to advance ERW research</h2>
				<p>
					Learn how the ERW Data Quarry is connecting researchers to data from commercial ERW deployments and unlocking deployment-led learning.
				</p>
				<a href="/blog/data-sharing-system-for-erw" target="_blank">Learn More</a>
			</div>
		</div>

		<hr style="margin: 64px;">

		<h3>SPOTLIGHT ON <a href="/blog">OUR BLOG ↗</a></h3>
		<div id="blog">
	<div id="post-list">

		<div class="post">
			<h1>
				<a href="/blog/crn-eoi" target="_blank" style="color: var(--color-accent);">
					Call for Expressions of Interest: Coordinated Research Network for Enhanced Rock Weathering
				</a>
			</h1>
			<p>
				Cascade is standing up a global Coordinated Research Network (CRN) of standardized ERW experimental field trials across diverse global geographies.
			</p>
			<p class="details">
				<span class="date">02/05/2026</span>
				·
				<span class="read-time">5 MIN READ</span>
			</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="/blog/accounting-and-claims-for-super-pollutants" target="_blank" style="color: var(--color-accent);">
					Beyond GWP100: Accounting and Claims for Short-Lived and Long-Lived Climate Pollutants
				</a>
			</h1>
			<p>
				Learn how Cascade is driving strong community alignment on the credibility of corporate and international credit claims, and read our latest report.
			</p>
			<p class="details">
				<span class="date">01/21/2026</span>
				·
				<span class="read-time">4 MIN READ</span>
			</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="/blog/drawdown-to-durable" target="_blank" style="color: var(--color-accent);">
					From Drawdown to Durable Storage: Understanding ERW in EU Carbon Removal Policy
				</a>
			</h1>
			<p>
				Briding the gap between introductory ERW explainers and technical documents, this blog offers an in-depth look at ERW’s attributes as a high-integrity carbon removal pathway. While ERW has clear strengths relative to the criteria, realizing its significant potential for carbon removal and co-benefits requires addressing distinct challenges.
			</p>
			<p class="details">
				<span class="date">09/17/2025</span>
				·
				<span class="read-time">12 MIN READ</span>
			</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="/blog/weathering-potential-explorer" target="_blank" style="color: var(--color-accent);">
					Introducing the Weathering Potential Explorer: A Global Screening Tool for Enhanced Rock Weathering Potential
				</a>
			</h1>
			<p>
				We built the Weathering Potential Explorer, an interactive global map that can support successful ERW deployments by pinpointing regions where relative environmental conditions could favor rapid silicate weathering.
			</p>
				<p class="details">
					<span class="date">08/14/2025</span>
					·
					<span class="read-time">2 TO 20 MIN READ</span>
				</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="/blog/recommendations-from-foundations" target="_blank" style="color: var(--color-accent);">
					Recommendations from <em>Foundations</em> as the EU Explores Enhanced Rock Weathering
				</a>
			</h1>
			<p>
				As the EU explores enhanced rock weathering under the Carbon Removal and Carbon Farming (CRCF) we highlight four key recommendations from Foundations. A high quality methodology under the EU CRCF will send a clear signal to the market about minimum requirements for robust quantification and environmental health and safety.			</p>
				<p class="details">
					<span class="date">06/02/2025</span>
					·
					<span class="read-time">8 MIN READ</span>
				</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="/blog/metal-accumulation-calculator" target="_blank" style="color: var(--color-accent);">
					ERW Metal Accumulation Calculator
				</a>
			</h1>
			<p>
				As enhanced rock weathering gains momentum as a promising carbon removal approach, we need to ensure it remains environmentally sound. The ERW-MAC helps practitioners understand potential metal accumulation risks in soils from ERW deployments using intentionally conservative assumptions.
			</p>
				<p class="details">
					<span class="date">04/30/2025</span>
					·
					<span class="read-time">18 MIN READ</span>
				</p>
		</div>

		<hr>

		<div class="post">
			<h1>
				<a href="https://cascadeclimate.org/CRA0225_Enhanced_Rock_Weathering.pdf" target="_blank" style="color: var(--color-accent);">
					Farming with Rocks: Research Priorities for Enhanced Weathering
				</a>
			</h1>
			<p>
				The purpose of this report is to introduce policy stakeholders—particularly those in the U.S. and EU—to ERW, and to highlight opportunities to further support this promising carbon removal and agricultural land management practice through both new and existing policy levers.
			</p>
			<p class="details">
				<span class="date">02/20/2025</span>
				·
				<span class="read-time">10 MIN READ</span>
			</p>
		</div>

	</section>
</div>

<style>
	#headline h1 {
		padding: 4rem 4rem;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
	}

	h1 {
		margin-top: 2rem;
		margin-bottom:2rem;
		font-weight: 300;
		line-height: 1.4;
	}

	#about div {
		background-color: var(--color-dark);
		padding: 1rem 4rem;
		color: var(--color-light);
	}

	#about img {
		margin: 0;
		display: block;
	}

	#about {
		display: flex;
		flex-direction: column;
	}

	h3 {
		font-weight: 300;
		font-size: 1.2rem;
	}

	h3 a {
		font-weight: 550;
		color: var(--color-text);
	}

	#our-work {
		padding: 2rem 4rem;
	}

	.spotlights {
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
	}

	.spotlight {
		width: 25%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.spotlight img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.spotlight h2 {
		font-weight: 300;
		margin: 1rem 0;
	}

	.spotlight a {
		background-color: var(--color-accent);
		color: var(--color-light);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		margin-top: auto;
		margin-bottom: 1rem;
		font-size: 1rem;
		width: 100%;
	}

	@media (max-width: 660px) {
		.spotlights {
			flex-direction: column;
		}

		.spotlight {
			width: 100%;
		}

		#our-work,
		#headline h1,
		#about div {
			padding: 1rem 2rem;
		}
	}
</style>

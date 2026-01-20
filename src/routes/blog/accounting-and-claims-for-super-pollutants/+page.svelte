<script>
	import PDFLink from '$lib/components/PDFLink.svelte';
	import ScrollNav from '$lib/components/ScrollNav.svelte';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp'
</script>

<svelte:head>
    <title>Accounting and Claims</title> 
</svelte:head>

<div>
	<section class="intro">
		<div class="content">
			<div class="copy">
				<h1>Accounting and Claims for Short-Lived and Long-Lived Climate Pollutants 
				</h1>
				<p>
					Long-lived (CO2) and short-lived climate pollutant (SLCP) mitigation address two related but distinct goals: CO2 mitigation limits long-term warming and stabilizes temperatures, while SLCP mitigation reduces the risk of overshooting temperature thresholds with irreversible impacts in the near term. Achieving both goals requires treating CO2 and SLCP mitigation as complementary rather than interchangeable, and applying consistent, rigorous accounting across all greenhouse gases. 
				</p>
			</div>
			<img src={asiasmoke} alt="Kon Tum, Vietnam" class="large-image" />
		</div>
				<h4>Latest updates</h4>
				<div class="links">
					<PDFLink link="/CC_Foundations for CDR Quantification in ERW Deployments.pdf">[WORKSHOP SUMMARY AND RECOMMENDATIONS] "Beyond GWP100: Accounting and Claims for Short-Lived Climate Pollutants"↗</PDFLink>
					<PDFLink link="/CC_Foundations for CDR Quantification in ERW Deployments.pdf">[APPENDIX: RECOMMENDATIONS ONLY] Accounting and Claims for SLCPs↗</PDFLink>
				</div>
			</section>
			<ScrollNav />
			<main>
				<section id="short-lived-climate-pollutants">
			<h1>Short-Lived Climate Pollutants</h1>
			<br>
			<p>
				<a href="https://www.ccacoalition.org/news/super-pollutants" target="_blank" rel="noopener noreferrer">Super pollutants</a> are atmospheric pollutants — including methane, tropospheric ozone, tropospheric ozone precursors, fluorinated gases, nitrous oxide, and black carbon — that have greater impacts on atmospheric warming than carbon dioxide per tonne. These pollutants contribute to roughly half of current warming and often pose additional risks to human health and the environment. Many super pollutants remain in the atmosphere for only years to several decades, compared to centuries for carbon dioxide. Because of their short residence time, mitigation of these short-lived climate pollutants (SLCPs) presents perhaps the most effective tool for meaningfully reducing <a href="https://atmosphere.copernicus.eu/climate-forcing" target="_blank" rel="noopener noreferrer">radiative forcing</a> in the near-term. To avert the accelerating risks of near-term warming and the overshoot of temperature goals, today's climate actions <b>must go beyond mitigation of CO2 to also prioritize activities that can substantially reduce near-term warming in the coming decades.</b>
			</p>
		</section>
		<section id="ghg-accounting-and-metrics">
			<h1>GHG Accounting and Metrics</h1>
			<br>
			<p>
				Credible accounting is the foundation for building confidence in the climate impact of any mitigation approach. The choice of GHG accounting framework is not just a technical detail: it embeds value judgments and shapes which climate goals we prioritize, how companies and nations claim progress, and what mitigation approaches receive funding and attention.
			</p>
			<p>
				GHG accounting and metrics are valuable tools insofar as they serve specific intended climate goals and outcomes; there is no scientifically "correct" metric or accounting approach, and the framework selected inherently introduces subjectivity and tradeoffs between different climate priorities. Current climate action frameworks are oriented primarily toward long-term outcomes, without sufficient acknowledgement of the need for near-term radiative forcing mitigation.
			</p>
			<p>
				It is critical for the climate community to evaluate accounting and metrics choices in the context of whether they are serving their intended goals, and both goals — limiting warming in the long term and reducing the risk of overshooting temperature thresholds with irreversible impacts in the near term — matter for climate stability. Ideally, we should be working toward a system of impact measurement that accurately reflects the effects an intervention has on the climate, the duration of that impact, and when that impact occurs.
			</p>
		</section>
		<section id="Climate Week 2025 Workshop">
			<h1>Climate Week 2025 Workshop</h1>
			<br>
			<p> At Climate Week in September 2025, Cascade Climate hosted a workshop convening key climate and carbon market stakeholders across academia, civil society, and the private sector to discuss how to ensure consistent and rigorous accounting and claims-making for both short-lived and long-lived mitigation activities in a net-zero framework. The workshop addressed several key questions, epsecially in corporate greenhouse gas accounting and voluntary carbon markets, including:
				<ul>
					<li>
						<p>
							Should companies and voluntary market participants consider transitioning to accounting approaches that better value near term warming</p>
					</li>
					<li>
						<p>Should we continue to allow compensation of remaining CO2 emissions with short-lived climate pollutant mitigation actions?</p>
					</li>
					<li>
						<p>Can super pollutant reduction credits play a role in achieving net zero targets? If so, how? </p>
					</li>
				</ul>
				<p>
					The resources below were developed for and from the workshop.<p>
	<div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
			<br>
			<PDFLink link="/Feedback on EU CRCF Review Paper on Carbon Removal through ERW.pdf" variant="accent" style="display: block; text-align: left;">[WORKSHOP SUMMARY AND RECOMMENDATIONS] "Beyond GWP100: Accounting and Claims for Short-Lived Climate Pollutants"↗</PDFLink>
			<br>
			<PDFLink link="/Response to EU ETS Review Consultation_ Integrating Carbon Removal with Safeguards.pdf" variant="accent" style="display: block; text-align: left;">[APPENDIX: RECOMMENDATIONS ONLY] Accounting and Claims for SLCPs↗</PDFLink>
			<br>
			<PDFLink link="/Response to UNFCCC Article 6.4 Addressing Non-Permanence Reversals.pdf" variant="accent" style="display: block; text-align: left;">[APPENDIX: WORKSHOP PRIMER] Balancing short-lived and long-lived climate pollutants within net-zero frameworks↗</PDFLink>
			<br>
		</section>
		<section id="nexthorizons">
			<h1>Next Horizons</h1>
			<br>
			<p> For Cascade, a key goal of this accounting and claims effort is to drive towards strong community alignment on the credibility of corporate and international credit claims. In turn, this will enable higher overall participation in <a href="https://cascadeclimate.org/blog/crossing-the-bridge" target="_blank" rel="noopener noreferrer">climate finance efforts</a> directed towards high impact mitigation approaches across the public and private sectors — with strong guardrails in place against perverse incentives.<p> 
				
			<p>Another goal of this work is to help create the enabling conditions for promising emerging GHG accounting approaches to be tested, refined, and eventually scaled. In addition to the workshop, Cascade is in the process of exploring which market and policy mechanisms can serve as testing grounds for high potential accounting approaches — helping to address the gap between early pilots and integration into market and government standards.</p>		</section>
	</main>
</div>

<style>
	:global(.content .large-image) {
		width: 54% !important;
	}
</style>
<script>
	import headshot from '$lib/images/people/alex-price.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Alex Price - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Alex Price's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Alex Price</h1>
		<div class="details">
			<span>Founding Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/alexandraprice/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			An experienced project and program manager with a deep-seated interest in climate tech
			innovation. Most recently, she was the Assistant Director for Net Zero + Nature Positive
			Solutions at Jacobs where she helped large organizations decarbonize their real estate
			portfolios. She also oversaw multidisciplinary design teams developing mission-critical and
			sustainable infrastructure. Alex is currently pursuing her MBA at The Wharton School. She
			holds a B.S. in Environmental Science from Spelman College and a B.S.E. in Environmental
			Engineering from the University of Michigan.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Alex Price" />
	</div>
</div>

<script>
	import headshot from '$lib/images/team/pritha-ghosh.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Pritha Ghosh - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Pritha Ghosh's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Pritha Ghoshe</h1>
		<div class="details">
			<span>Program Director</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/prithaghosh/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A scientist passionate about unlocking discoveries to solve real world problems.  She was most recently a partner at Prime Movers Lab, a venture capital firm investing in breakthrough science and engineering startups. Prior to that, she served on the research staff of the Institute for Defense Analyses, a federally funded research and development center that supports the US Department of Defense.  There she assessed emerging technologies, informed decision-making on logistics investments, and worked closely with US partner nations to build institutional capacity. Pritha holds a PhD in Chemical Engineering  from Northwestern University where she focused on computational simulations of gases in novel porous materials under humid conditions, and a Bachelors in Chemistry from Princeton University.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Pritha Ghosh" />
	</div>
</div>

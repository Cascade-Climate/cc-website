<script>
	import headshot from '$lib/images/people/nic-gubbins.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Nic Gubbins - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Nic Gubbins's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Nic Gubbins</h1>
		<div class="details">
			<span>Geochemical Data Science Fellow</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/nic-gubbins-241762377/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			Nic is a freshwater biogeochemist and data scientist specializing in large-scale data synthesis. They are a PhD candidate at Colorado State University and hold a BS in Environmental Science from the University of Wisconsin–Madison. Based in Fort Collins, Colorado, Nic’s work focuses on understanding watershed-scale biogeochemical processes through integrative data analysis. Outside of work, they enjoy spending time with family, skiing, and designing tabletop games.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Nic Gubbins" />
	</div>
</div>

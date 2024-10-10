<script>
	import headshot from '$lib/images/team/alison-tune.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Alison Tune - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Alison Tune's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Alison Tune</h1>
		<div class="details">
			<span>ERW Scientist</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/alison-tune-34a679bb/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A hydro-biogeochemist working to develop climate solutions and promote stewardship of natural resources across the land-sea continuum. Most recently, she led the Earth Science and Ecology group at Running Tide building a research program to address environmental impact of ocean-based CDR pathways and integrate environmental assessment throughout the value chain of CDR deployments. She holds a PhD in Geological Sciences from the University of Texas at Austin where she studied weathering in forested ecosystems within the thin skin of the Earth’s surface known as the ‘Critical Zone’. Alison is now back in the midwest in Minneapolis, MN where she loves to be in, or on, the water with her two dogs, listening to music, hanging with friends, and laying under the evening summer sun.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Alison Tune" />
	</div>
</div>

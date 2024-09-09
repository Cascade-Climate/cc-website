<script>
	import headshot from '$lib/images/team/noah-anderson.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Noah Anderson - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Noah Anderson's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Noah Anderson</h1>
		<div class="details">
			<span>ERW Scientist</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/noah-anderson-1883a3144/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A geochemist and carbonate sedimentologist working on open-system solutions to the climate crisis. He was most recently a Visiting Assistant Professor at Bates College where he taught courses on Earth’s climate system and climate solutions. He holds a PhD in Geochemistry from MIT with a focus on carbonate systems and a BA in Geology from Carleton College. Originally from the Pacific Northwest, Noah is now lives in Minneapolis, MN, where he rides bikes, sews, and swims in as many of the 10,000 lakes as possible.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Noah Anderson" />
	</div>
</div>

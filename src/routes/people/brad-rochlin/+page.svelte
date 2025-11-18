<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/people/brad-rochlin.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Brad Rochlin - Cascade Climate</title>
	<meta name="description" content="Learn more about Brad Rochlin's role at Cascade Climate." />
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Brad Rochlin</h1>
		<div class="details">
			<span>Program Director, Carbon Markets</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/brad-rochlin-a8a637121/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A climate and carbon removal expert with experience working across the private sector, policy,
			and academia to bring first-of-their-kind climate projects into the world. Most recently, Brad
			was responsible for environmental market development and climate policy and governance at
			Running Tide, an ocean-based carbon removal company, and was a co-author of the Reykjavik
			Protocol, a self-regulation initiative for nature-deployed carbon removal companies. Earlier
			in his career, Brad worked on carbon markets, supply chain sustainability, and policy in the
			food and agriculture sector, and helped bring to market a first-of-its-kind environmental
			asset for working agricultural lands at Indigo Ag.
		</p>
		<p>
			Brad holds a B.S. from the Haas School of Business at U.C. Berkeley with an emphasis on
			sustainability and social impact strategy, and lives in San Francisco with his wife and his
			dog, Pacha.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Brad Rochlin" />
	</div>
</div>

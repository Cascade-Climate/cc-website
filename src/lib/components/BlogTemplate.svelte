<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/team/arielle-lok.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
	import twitterIcon from '$lib/images/twitter-icon.webp';
</script>

<svelte:head>
	<title>Jane Doe - Cascade Climate</title>
	<meta name="description" content="Learn more about Jane Doe's role at Cascade Climate." />
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Jane Doe</h1>
		<div class="details">
			<span>Sample Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/JANE-DOE/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
				<a target="_blank" href="https://twitter.com/JANE-DOE">
					<img src={twitterIcon} alt="Twitter" />
				</a>
			</div>
		</div>
		<p>Bio information about Jane Doe here.</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Jane Doe" />
	</div>
</div>

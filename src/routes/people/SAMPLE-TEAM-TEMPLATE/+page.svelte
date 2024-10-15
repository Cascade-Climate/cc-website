<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/people/arielle-lok.webp'; // Update this line & make sure the new image is present in the src/lib/images/people folder
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
	import twitterIcon from '$lib/images/twitter-icon.webp';
</script>

<svelte:head>
	<title>Jane Doe - Cascade Climate</title> <!-- Update this line -->
	<meta name="description" content="Learn more about Jane Doe's role at Cascade Climate." /> <!-- Update this line -->
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Jane Doe</h1> <!-- Update this line -->
		<div class="details">
			<span>Sample Team</span> <!-- Update this line -->
			<div class="socials">																					
				<a target="_blank" href="https://www.linkedin.com/in/JANE-DOE/"> <!--                              -->
					<img src={linkedinIcon} alt="LinkedIn" />											 <!--                              -->
				</a>																														 <!--                              -->
				<a target="_blank" href="https://twitter.com/JANE-DOE">          <!-- Update or delete these lines -->
					<img src={twitterIcon} alt="Twitter" />                        <!--                              -->
				</a> 																														 <!--                              -->
			</div>
		</div>
		<p>Bio information about Jane Doe here.</p> <!-- Update this line -->
	</div>
	<div class="headshot">
		<img src={headshot} alt="Jane Doe" /> <!-- Update this line -->
	</div>
</div>

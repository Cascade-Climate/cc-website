<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/people/leah-bridle.webp'; // Update this line & make sure the new image is present in the src/lib/images/people folder
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
	import twitterIcon from '$lib/images/twitter-icon.webp';
</script>

<svelte:head>
	<title>Leah Bridle - Cascade Climate</title> <!-- Update this line -->
	<meta name="description" content="Learn more about Leah Bridle's role at Cascade Climate." /> <!-- Update this line -->
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Leah Bridle</h1> <!-- Update this line -->
		<div class="details">
			<span>Operations Manager, ERW</span> <!-- Update this line -->
			<div class="socials">																					
				<a target="_blank" href="www.linkedin.com/in/leah-bridle-6526a244/"> <!--                              -->
					<img src={linkedinIcon} alt="LinkedIn" />											 <!--                              -->
				</a>																														 <!--                              -->
	                       <!--                              -->																											 <!--                              -->
			</div>
		</div>
		<p>A program operations manager focused on scaling high-integrity, evidence-based climate solutions aligned with nature and global food systems. Leah formerly managed multi-million dollar research regranting and evidence synthesis portfolios as Associate Director of Research at UC Berkeley’s Center for Effective Global Action. With government and NGO partners across the Global South, her work coordinated social impact evaluation field trials to advance effective agricultural technology adoption, economic development, climate resilience, and institutional reforms. She has also advised nonprofit and philanthropic leaders including the Climate and Land Use Alliance and Landesa on strengthening community rights, governance, and benefits as carbon markets incentivize land-based carbon sequestration. Leah holds a Master of Public Policy from the University of California, Berkeley, and bachelor's degrees in International Studies and Anthropology from Michigan State University. Leah lives in the San Francisco Bay Area where she enjoys hiking with her dog, being an aunt, playing volleyball, and making yet another ceramic mug.</p> <!-- Update this line -->
	</div>
	<div class="headshot">
		<img src={headshot} alt="Leah Bridle" /> <!-- Update this line -->
	</div>
</div>

<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/team/rachel-smith.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
	import twitterIcon from '$lib/images/twitter-icon.webp';
</script>

<svelte:head>
	<title>Rachel Smith - Cascade Climate</title>
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
		<p>
			An action-oriented policy and program manager tackling climate change through evidence-based
			policy design and execution. Most recently, Rachel led the implementation of the Qualifying
			Advanced Energy Project Credit (48C) Program at the U.S. Department of Energy which was
			expanded with a $10 billion investment under the Inflation Reduction Act of 2022 (IRA). Prior
			to joining DOE, Rachel led climate impact due diligence assessments on $1.5 billion of TPG
			Rise Climate investments and advised senior investors on the impact of the IRA. Earlier in her
			career, she supported climate policy initiatives across the energy and agriculture sectors at
			the Bipartisan Policy Center. She has also contributed to international policy research on
			climate adaptation and nature-based solutions at the Basque Centre for Climate Change in
			Bilbao, Spain and the Helmholtz Centre for Environmental Research – UFZ in Leipzig, Germany.
		</p>
		<p>
			Rachel holds a MS in Global Change: Ecosystem Science and Policy from a dual degree program
			through the University College Dublin and Justus Liebig University Giessen and a BS in Civil
			Engineering from Bucknell University. Rachel grew up in rural Pennsylvania and currently
			resides in Washington, DC.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Jane Doe" />
	</div>
</div>

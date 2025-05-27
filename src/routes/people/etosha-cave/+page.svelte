<script>
	import headshot from '$lib/images/people/etosha-cave.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Etosha Cave</title>
	<meta
		name="description"
		content="Learn more about Etosha Cave's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Etosha Cave</h1>
		<div class="details">
			<span>Twelve</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/etoshac/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			Etosha (Eee-tah-sha) is the co-founder and chief science officer of <a target="_blank" href="https://www.twelve.co/">Twelve</a>, a carbon transformation company that is creating a future through the science of electrochemistry. Twelve has raised over $800M to advance its mission to make fuels anywhere in the world from air. At Twelve, Etosha leads efforts applying her research in electrocatalysis to convert captured carbon dioxide into valuable chemicals, fuels, and other essential products. Her discoveries in electrochemistry have led to groundbreaking technology with applications across a variety of global industries, including automotive, aviation, fashion, and consumer-packaged goods.</p>
        <p>
            Etosha has been recognized as a visionary by the Smithsonian Institution and the U.S. Department of Energy, and featured by media outlets such as Rolling Stone and Vanity Fair. She has spoken at summits including the Jeff Bezos-hosted MARS Conference, Fortune Brainstorm, and Aspen Ideas Festival. Most recently, CNBC named her to its 2024 Changemakers list for women transforming business. Etosha earned a Master's and a Ph.D. in Mechanical Engineering from Stanford University. She spent a summer in Antarctica as a handywoman at McMurdo Station and conducted research for a NASA Mars Rover mission.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Etosha Cave" />
	</div>
</div>

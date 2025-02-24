<script>
	import headshot from '$lib/images/people/richard-marinos.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Richard Marinos - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Richard Marinos' role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Richard Marinos</h1>
		<div class="details">
			<span>ERW Scientist</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/richard-marinos-461b11177/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			Richard is a terrestrial biogeochemist working to leverage carbon cycle science for the benefit of humankind. Before joining Cascade, he was an Assistant Professor of Earth Sciences at SUNY Buffalo, where his research program focused on how roots, minerals and microbes drive the production and stabilization of soil carbon. He holds a Ph.D. in Environment from Duke University, where he studied how enhanced rock weathering impacts carbon and nitrogen cycling in the soils and headwater streams of temperate forests. Richard’s favorite pastimes include cycling, woodworking, hiking, camping, skiing, diving, and crossword puzzles. He is based out of the NYC hub.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Richard Marinos" />
	</div>
</div>

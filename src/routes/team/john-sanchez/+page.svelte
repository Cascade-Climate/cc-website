<script>
	import headshot from '$lib/images/team/john-sanchez.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>John Sanchez - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about John Sanchez's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>John Sanchez</h1>
		<div class="details">
			<span>Founding Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/john-sanchez-aa60151b1/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			An organizer and thought leader in durable carbon removal for the past two years. He has
			helped drive Lowercarbon’s thinking on CDR MRV, culminating in a conference that brought the
			field together to align on how to build verification systems with good incentives. He also
			worked with Spark Climate to convene methane removal researchers to develop a research agenda
			for the emerging field. John previously developed the Carbon Removal Academy curriculum and
			put together an online course that has introduced carbon removal to over 1000 people. He is an
			undergrad at Harvard College studying Statistics and Earth Science.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="John Sanchez" />
	</div>
</div>

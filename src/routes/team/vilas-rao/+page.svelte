<script>
	import headshot from '$lib/images/team/vilas-rao.png';
	import linkedinIcon from '$lib/images/linkedin-icon.png';
</script>

<svelte:head>
	<title>Vilas Rao - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Vilas Rao's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Vilas Rao</h1>
		<div class="details">
			<span>Founding Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/vilasrao/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A business leader in the sustainability technology space for the past fifteen years, where he
			has focused on ways to apply technology to agricultural production systems to drive a more
			sustainable and secure food supply. Most recently, Vilas was the Chief Revenue Officer for
			Arable Labs, which delivers a real-time crop monitoring, reporting, and verification solution
			for farming. Earlier in his career, Vilas led the scale up of FieldView, the largest data
			platform and partner ecosystem in agriculture while at The Climate Corporation. During his
			years at McKinsey, he advised agribusinesses, food companies, and international governments
			and development agencies on food security and technology investments. Vilas holds a Masters in
			Public Policy from the Harvard Kennedy School and a Bachelors in Economics from Stanford
			University, lives in San Francisco with his wife and daughter, and enjoys adventure travel,
			skiing, and continuously learning about the natural world.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Vilas Rao" />
	</div>
</div>

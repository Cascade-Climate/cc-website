<script>
	import headshot from '$lib/images/team/chris-reinhard.png';
	import linkedinIcon from '$lib/images/linkedin-icon.png';
</script>

<svelte:head>
	<title>Chris Reinhard - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Chris Reinhard's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Chris Reinhard</h1>
		<div class="details">
			<span>Senior Contributing Scientist</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/chris-reinhard-a113b3178/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			Associate Professor and Georgia Power Chair in the School of Earth and Atmospheric Sciences at
			the Georgia Institute of Technology. Chris is a biogeochemist and Earth system scientist who
			focuses on empirical and model-based tracking and reconstruction of Earth’s carbon and oxygen
			cycles. His recent work centers on the design and validation of tracers and numerical models
			for tracking carbon dioxide removal in terrestrial and marine systems, and the development of
			end-to-end frameworks for quantifying carbon removal rates and long-term durability in ERW
			deployments. Chris was also a science co-founder of the ERW startup Lithos, and has a strong
			interest in the development robust standards of quality in ERW and the logistics of bringing
			open-system CDR to scale.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Chris Reinhard" />
	</div>
</div>

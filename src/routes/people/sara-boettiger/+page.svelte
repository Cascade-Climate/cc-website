<script>
	import headshot from '$lib/images/people/sara-boettiger.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Sara Boettiger</title>
	<meta
		name="description"
		content="Learn more about Sara Boettiger's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Sara Boettiger</h1>
		<div class="details">
			<span>Gates Foundation</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/saraboettiger/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			Sara works across public and private sectors to address complex challenges in food systems, global poverty, and climate change. She currently advises multinational companies in sustainability, climate and ag startups in growth, private equity investors in climate investments, and supports philanthropic work in the agriculture and nutrition teams at the Gates Foundation. Previously Sara was SVP at Bayer Crop Science as Global Head of Sustainability and Public Affairs, Deputy Director at the Gates Foundation, on the advisory board for the Export-Import Bank of the US, taught economics at UC Berkeley, and has advised 40+ national governments on policies and investments in agriculture, climate, and trade. She holds a PhD in agriculture and resource economics.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Sara Boettiger" />
	</div>
</div>

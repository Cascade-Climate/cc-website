<script>
	import headshot from '$lib/images/team/dai-ellis.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Dai Ellis - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Dai Ellis's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Dai Ellis</h1>
		<div class="details">
			<span>Founder & CEO</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/daiellis/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			An entrepreneur with deep experience founding and scaling high-performing nonprofit and
			for-profit ventures across climate, health, and education. He is a thought leader on field
			building and market shaping for social impact. Earlier in his career, Dai led the Clinton
			Health Access Initiative’s pioneering work on market shaping for drugs, vaccines, and other
			health products in the Global South. More recently, he has been at the forefront of efforts to
			import learning and tools from global health market shaping into climate tech, including a
			major new initiative to shape the market for clean cooling products. Dai is also an executive
			coach to climate tech founders and CEOs with a wide range of clients including Arcadia,
			Sealed, Running Tide, and David Energy. Between his time in global health and climate, Dai
			spent the better part of a decade building education ventures, including a VC-backed
			pan-African network of K-12 schools called Nova Pioneer offering world-class education at
			affordable tuition levels.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Dai Ellis" />
	</div>
</div>

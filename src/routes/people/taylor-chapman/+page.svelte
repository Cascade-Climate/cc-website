<script>
	import headshot from '$lib/images/people/taylor-chapman.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Taylor Chapman - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Taylor Chapman's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Taylor Chapman</h1>
		<div class="details">
			<span>Founding Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/taylorchapmanedu/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			An operator + investor in mission-driven businesses. He entered the climate world as an
			investor and advisor in 2021 after a career in education technology, most recently overseeing
			corporate VC and M&A at SEI, a publicly traded education conglomerate. Previously, he was a
			team leader at McKinsey’s NYC office; an operator at two VC-backed startups in NYC and SF;
			and, before graduate school, a public school teacher with Teach for America + the JET Program.
			In 2023, he returned to his hometown of Houston after 12 years in NYC. He holds a BA from Yale
			University and a Masters in Public Policy from Harvard’s Kennedy School. When not at work, you
			can find him home with his wife and two kids, paddleboarding down a river, or out
			photographing; his most recent longform project involved photographing the 44 communities at
			the final stops in the NYC subway system.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Taylor Chapman" />
	</div>
</div>

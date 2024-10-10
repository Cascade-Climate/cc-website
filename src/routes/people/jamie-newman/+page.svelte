<!-- Be sure to rename this file to +page.svelte after copying it! -->
<script>
	import headshot from '$lib/images/team/jamie-newman.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
</script>

<svelte:head>
	<title>Jamie Newman - Cascade Climate</title>
	<meta name="description" content="Learn more about Jamie Newman's role at Cascade Climate." />
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Jamie Newman</h1>
		<div class="details">
			<span>Recruiting & Operations Manager</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/jamienewm/">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
			</div>
		</div>
		<p>
			A specialist in organizational development and social impact. Prior to joining Cascade
			Climate, Jamie spent 6 years at LinkedIn as part of the LinkedIn for Nonprofits team. During
			this time, she consulted nonprofits on their hiring, employee learning, and culture
			initiatives. In addition, she partnered closely with the social impact team to drive progress
			on accessibility, employee volunteering, and community building across the nonprofit sector.
			Jamie holds a Bachelor's degree in Learning and Organizational Change from Northwestern's
			School of Education and Social Policy, where she found a passion for understanding how
			organizations can function efficiently to create maximum impact on their communities. Outside
			of work, Jamie enjoys running, biking, skiing, cooking, and exploring her hometown of
			Providence, Rhode Island.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Jamie Newman" />
	</div>
</div>

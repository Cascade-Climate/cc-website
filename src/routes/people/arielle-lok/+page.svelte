<script>
	import headshot from '$lib/images/team/arielle-lok.webp';
	import linkedinIcon from '$lib/images/linkedin-icon.webp';
	import twitterIcon from '$lib/images/twitter-icon.webp';
</script>

<svelte:head>
	<title>Arielle Lok - Cascade Climate</title>
	<meta
		name="description"
		content="Learn more about Arielle Look's role at Cascade Climate."
	/>
</svelte:head>
<div class="team-member">
	<div class="member-info">
		<h1>Arielle Lok</h1>
		<div class="details">
			<span>Founding Team</span>
			<div class="socials">
				<a target="_blank" href="https://www.linkedin.com/in/ariellelok">
					<img src={linkedinIcon} alt="LinkedIn" />
				</a>
				<a target="_blank" href="https://twitter.com/ariellelok">
					<img src={twitterIcon} alt="Twitter" />
			</div>
		</div>
		<p>
			An exited founder in the ag/food industry. Arielle was the co-founder & COO of Peko Produce,
			Western Canada's leading sustainable grocery service (now under Fresh Prep Foods). She started
			multiple businesses as a teenager, but was notable more for her strides in Canada’s food
			policy, her advocacy work resulting in the additional allocation of hundreds of millions of
			dollars directly towards accessible food projects. She concurrently worked within Shopify’s
			venture fund, investing in the future of ecommerce. She holds a B.Com from McGill University
			and calls Hong Kong & Calgary, Alberta her homes. Arielle also has a running list of <a
				target="_blank"
				href="https://ariellelok.com/sidepages/recipes/appleratings.html">apple reviews</a
			>, with an ambitious goal of eating 500 varieties of apples in her lifetime.
		</p>
	</div>
	<div class="headshot">
		<img src={headshot} alt="Arielle Lok" />
	</div>
</div>

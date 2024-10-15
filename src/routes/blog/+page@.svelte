<svelte:head>
	<title>Blog - Cascade Climate</title>
	<meta
		name="description"
		content="Collection of blog posts published by Cascade Climate."
	/>
</svelte:head>
<div id="blog">
	<div id="post-list">
		<div class="post">
			<h1>
				<a href="/blog/foundations-for-carbon-removal-quantification-in-erw-deployments">
					Foundations for Carbon Dioxide Removal Quantification in ERW Deployments
				</a>
			</h1>
			<p>
				After a year-long process involving over 100 stakeholders, we produced a comprehensive technical reference on the “hows” of rigorous carbon removal quantification in an ERW deployment.
			</p>
			<p class="details">
				<span class="date">10/16/2024</span>
				·
				<span class="read-time">60+ MIN READ</span>
			</p>
		</div>
		<div class="post">
			<h1>
				<a href="/blog/erw-measurement-cost-stack-estimator-and-database">
					ERW MRV cost estimator and database
				</a>
			</h1>
			<p>
				We built a tool to help inform practitioners of the stacked costs of different analytical measurement choices in an ERW deployment, as well as a database of cost quotes to help practitioners compare costs for leverage.
			</p>
			<p class="details">
				<span class="date">10/16/2024</span>
				·
				<span class="read-time">10 MIN READ</span>
			</p>
		</div>
		<div class="post">
			<h1>
				<a href="/blog/foundations-for-a-healthy-erw-market-cycle">
					Foundations for a Healthy ERW Market Cycle
				</a>
			</h1>
			<p>
				Last week marked a big moment in the short history of durable open-system carbon removal.
				The announcement of Frontier’s $57M offtake agreement to buy ~150,000 removed tons from
				Lithos, an enhanced rock weathering (ERW) supplier, is the world’s first truly large-scale,
				multi-year purchase of durable carbon removal via an open-system …
			</p>
			<p class="details">
				<span class="date">12/11/2023</span>
				·
				<span class="read-time">11 MIN READ</span>
			</p>
		</div>
		<div class="post">
			<h1>
				<a href="/blog/core-principles">
					Introducing the Core Principles on Quantifying Net Carbon Removal Via Enhanced Rock
					Weathering
				</a>
			</h1>
			<p>
				In November, 93 leaders in enhanced rock weathering (ERW)–including scientists, suppliers,
				buyers, credit issuers, civil society and more–publicly signed on to a set of Core
				Principles on the quantification of net carbon removal via ERW. The Core Principles
				represent an ERW community-wide view on rigorous quantification and set a shared …
			</p>
			<p class="details">
				<span class="date">11/10/2023</span>
				·
				<span class="read-time">2 MIN READ</span>
			</p>
		</div>
		<div class="post">
			<h1>
				<a href="/blog/introducing-the-cqs">
					Launching the Community Enhanced Rock Weathering Quantification Standard Process
				</a>
			</h1>
			<p>
				2023 and 2024 represent a critical time in the development of agricultural enhanced rock
				weathering (ERW) as an industry and pathway. Increasingly large-scale field trials and
				deployments are beginning globally, major buyers are signing the first ERW offtake
				agreements, and new suppliers are entering the market at a rapid clip. …
			</p>
			<p class="details">
				<span class="date">11/02/2023</span>
				·
				<span class="read-time">11 MIN READ</span>
			</p>
		</div>
	</div>
</div>

<style>
	#blog {
		padding: 2rem;
		display: flex;
		justify-content: center;
	}
	#post-list {
		max-width: 1080px;
	}

	.post {
		padding: 2rem;
		border-bottom: 1px solid var(--color-text);
	}

	.post:last-child {
		border-bottom: none;
	}

	.post a {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;
		line-height: 3rem;
		transition: color 0.2s ease-out;
	}

	.post a:hover {
		color: var(--color-accent);
	}

	.date,
	.read-time {
		font-size: 0.8rem;
	}
</style>

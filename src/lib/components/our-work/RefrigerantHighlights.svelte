<script>
	import slcp from '$lib/images/nature/slcp-entry.webp';
	import LRMblog1 from '$lib/images/blog/LRMblog1.webp';
</script>

<h5>HIGHLIGHTS</h5>
<div class="highlights">
	<div>
		<img src="/images/blog/christie-chau-OA07q0V2R94-unsplash.jpg" alt="Lifecycle Refrigerant Management" />
		<h2>Can the right sequence unlock refrigerant recovery at scale?</h2>
		<p>
			Learn how Cascade is sequencing financing, policy, and markets to build practical refrigerant recovery systems in
			Southeast Asia.
		</p>
		<a href="/blog/lrm-financing">Learn More</a>
	</div>
	<div>
		<img src={LRMblog1} alt="Lifecycle Refrigerant Management" />
		<h2>Why lifecycle refrigerant management matters</h2>
		<p>
			Learn about the benefits, what's blocking progress, and how strategic interventions can unlock immediate climate wins
			and build economic resilience.
		</p>
		<a href="/blog/LRM-gaps">Learn More</a>
	</div>
	<div>
		<img src={slcp} alt="Super Pollutants" />
		<h2>Super pollutant mitigation needs a bigger push — and we're joining the effort</h2>
		<p>
			Meeting the climate challenge requires cutting super pollutants for near-term impact while scaling carbon removal for
			the long term. Cascade is expanding its work to advance this dual strategy.
		</p>
		<a href="/blog/cascade-entry-into-slcp-mitigation">Learn More</a>
	</div>
</div>

<style>
	h5 {
		font-weight: 300;
		font-size: 1.2rem;
		color: var(--color-dark);
		margin-top: 1.25rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-weight: 300;
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		line-height: 2.2rem;
		color: var(--color-dark);
	}

	.highlights {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		grid-gap: 2rem;
	}

	.highlights > div {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.highlights img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: 1rem;
	}

	.highlights a {
		display: inline-block;
		margin-top: auto;
		border-radius: 2rem;
		background-color: var(--color-accent);
		text-align: center;
		padding: 0.5rem 1.2rem;
		text-decoration: none;
		color: var(--color-light);
	}
</style>

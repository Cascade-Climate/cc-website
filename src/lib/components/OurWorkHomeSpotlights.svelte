<script>
	import erwPhoto from '$lib/images/nature/erw.webp';
	import asiasmoke from '$lib/images/blog/asiasmoke.webp';
	import bedrockInitiativeHero from '$lib/images/nature/bedrock-initiative-hero.png';
	import SpotlightGrid from '$lib/components/SpotlightGrid.svelte';

	const items = [
		{
			image: '/images/blog/christie-chau-OA07q0V2R94-unsplash.jpg',
			imageAlt: 'Lifecycle Refrigerant Management',
			title: 'Can the right sequence unlock refrigerant recovery at scale?',
			excerpt:
				'Learn how Cascade is sequencing financing, policy, and markets to build practical refrigerant recovery systems in Southeast Asia.',
			href: '/blog/lrm-financing',
			linkTarget: '_blank'
		},
		{
			image: erwPhoto,
			imageAlt: 'Enhanced rock weathering',
			title: 'Spring quarry update: more data, more partners',
			excerpt:
				'Three new datasets are now available in the ERW Data Quarry — and two new project developers have joined the effort.',
			href: '/blog/data-quarry-update-spring-26',
			linkTarget: '_blank'
		},
		{
			image: asiasmoke,
			imageAlt: 'Asia Smoke',
			title: 'Accounting and claims for short-lived and long-lived pollutants',
			excerpt:
				"Learn more about why today's climate actions must go beyond CO₂ mitigation and prioritize activities that can reduce near-term warming in the coming decades.",
			href: '/blog/accounting-and-claims-for-super-pollutants',
			linkTarget: '_blank'
		},
		{
			image: bedrockInitiativeHero,
			imageAlt: 'Bedrock Initiative',
			title: 'Cascade announces Bedrock Initiative to unlock potential of enhanced rock weathering',
			excerpt:
				'Learn how the Bedrock Initiative will critically strengthen the evidence base for ERW',
			href: '/bedrock-initiative'
		}
	];
</script>

<SpotlightGrid sectionTitle="OUR WORK" sectionHref="/our-work" {items} />

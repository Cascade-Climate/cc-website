import erw from '$lib/images/nature/erw-hero-2.png';
import slcp from '$lib/images/nature/refrigerant-hero-3.png';
import policy from '$lib/images/nature/market-development-policy-hero-3.png';

/** Primary program areas on the Our Work hub. */
export const ourWorkHubPillarPrograms = [
	{
		title: 'Enhanced Rock Weathering',
		href: '/our-work/enhanced-rock-weathering',
		image: erw,
		imageAlt: 'Enhanced rock weathering field',
		teaser:
			'Advancing the science, tools, and policy needed to make ERW a credible, scalable pathway for carbon removal and agricultural benefit'
	},
	{
		title: 'Refrigerant Management and Transition',
		href: '/our-work/refrigerant-management-and-transition',
		image: slcp,
		imageAlt: 'Cooling and refrigerants',
		teaser:
			'Narrowing the finance, policy, and infrastructure gaps preventing effective refrigerant management — one of the fastest ways to slow near-term warming'
	}
];

/**
 * Market & policy work shown as cross-cutting support for the two pillars above,
 * not a third parallel “program lane.”
 */
export const ourWorkHubSupportingProgram = {
	eyebrow: 'Cross-cutting',
	title: 'Policy and Market Development',
	href: '/our-work/market-development-and-policy',
	image: policy,
	imageAlt: 'Policy and markets',
	teaser:
		'Partnering with policymakers, industry, and civil society to build the market and policy foundations high-potential climate solutions need to scale'
};

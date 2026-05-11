import base from './config.json';

const ourWorkPreviewChildren = [
	{ label: 'Overview', url: '/our-work' },
	{
		label: 'Enhanced Rock Weathering',
		url: '/our-work/enhanced-rock-weathering',
		children: [{ label: 'The Bedrock Initiative', url: '/bedrock-initiative' }]
	},
	{
		label: 'Refrigerant Management and Transition',
		url: '/our-work/refrigerant-management-and-transition'
	},
	{
		label: 'Policy and Market Development',
		url: '/our-work/market-development-and-policy'
	},
	{ label: 'Blog', url: '/blog' }
];

/**
 * @param {boolean} preview
 * @returns {typeof base.navItems}
 */
export function getNavItems(preview) {
	if (!preview) return base.navItems;
	return base.navItems.map((item) => {
		if (item.label !== 'Our Work') return item;
		return { ...item, url: '/our-work', children: ourWorkPreviewChildren };
	});
}

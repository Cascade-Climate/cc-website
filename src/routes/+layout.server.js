import { getNavItems } from '$lib/navForPreview.js';

export function load() {
	return {
		previewBedrockOurWork: true,
		navItems: getNavItems()
	};
}

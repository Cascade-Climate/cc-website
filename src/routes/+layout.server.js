import { env } from '$env/dynamic/public';
import { previewBedrockOurWorkEnabled } from '$lib/server/previewBedrockOurWork.js';
import { getNavItems } from '$lib/navForPreview.js';

export function load({ url }) {
	const previewBedrockOurWork = previewBedrockOurWorkEnabled(url, env);
	return {
		previewBedrockOurWork,
		navItems: getNavItems(previewBedrockOurWork)
	};
}

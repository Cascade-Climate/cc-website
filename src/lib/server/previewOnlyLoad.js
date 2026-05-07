import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
import { previewBedrockOurWorkEnabled } from './previewBedrockOurWork.js';

/** @returns {import('@sveltejs/kit').ServerLoad} */
export function previewOnlyLoad() {
	return function loadPreviewGated({ url }) {
		if (!previewBedrockOurWorkEnabled(url, env)) throw error(404);
		return {};
	};
}

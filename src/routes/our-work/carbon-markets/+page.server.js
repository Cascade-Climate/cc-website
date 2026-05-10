import { redirect } from '@sveltejs/kit';

/** Legacy URL: carbon markets page now lives under /archive/our-work/carbon-markets */
export function load() {
	throw redirect(308, '/archive/our-work/carbon-markets');
}

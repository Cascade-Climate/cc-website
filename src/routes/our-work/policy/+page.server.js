import { redirect } from '@sveltejs/kit';

/** Legacy URL: policy page now lives under /archive/our-work/policy */
export function load() {
	throw redirect(308, '/archive/our-work/policy');
}

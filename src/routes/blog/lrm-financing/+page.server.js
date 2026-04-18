import { error } from '@sveltejs/kit';

/**
 * Draft / unpublish switch for this post.
 * Set to `true` when you want `/blog/lrm-financing` live again.
 * The `+page.svelte` file stays in the repo unchanged.
 */
const LRM_FINANCING_PUBLISHED = false;

/** @type {import('./$types').PageServerLoad} */
export function load() {
	if (!LRM_FINANCING_PUBLISHED) {
		error(404, 'Not found');
	}
}

import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	redirect(301, '/erw/dq-updates');
}

import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, '/blog/introducing-the-cqs');
}
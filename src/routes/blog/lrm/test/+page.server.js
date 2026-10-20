import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(308, '/our-work/refrigerant-management-and-transition/costs/explorer');
}

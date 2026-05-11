import { dev } from '$app/environment';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Redirect lowercase blog URL to actual route (Windows keeps folder as LRM-gaps)
	if (event.url.pathname === '/blog/lrm-gaps') {
		return Response.redirect(new URL('/blog/LRM-gaps', event.url), 302);
	}
	const response = await resolve(event);
	if (dev) {
		response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
		response.headers.set('Pragma', 'no-cache');
		response.headers.set('Expires', '0');
	}
	return response;
}

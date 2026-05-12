import { dev } from '$app/environment';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Redirect lowercase blog URL to actual route (Windows keeps folder as LRM-gaps)
	if (event.url.pathname === '/blog/lrm-gaps') {
		return Response.redirect(new URL('/blog/LRM-gaps', event.url), 302);
	}
	// Static PDF under /bedrock-initiative/ can be handled by the worker on Cloudflare; serve from root static like other PDFs.
	if (event.url.pathname === '/bedrock-initiative/pressrelease.pdf') {
		return Response.redirect(
			new URL('/Cascade_Climate_Bedrock_Initiative_Press_Release.pdf', event.url),
			302
		);
	}
	const response = await resolve(event);
	if (dev) {
		response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
		response.headers.set('Pragma', 'no-cache');
		response.headers.set('Expires', '0');
	}
	return response;
}

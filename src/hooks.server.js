import { dev } from '$app/environment';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const path = event.url.pathname.replace(/\/$/, '') || '/';
	const dqUpdates = '/erw/dq-updates';
	if (
		path === '/blog/data-quarry-update-summer-26' ||
		path.toLowerCase() === '/erw/dq-overview' ||
		(path.toLowerCase() === '/erw/dq-updates' && path !== dqUpdates)
	) {
		return Response.redirect(new URL(dqUpdates, event.url), 301);
	}
	// Redirect lowercase blog URL to actual route (Windows keeps folder as LRM-gaps)
	if (event.url.pathname === '/blog/lrm-gaps') {
		return Response.redirect(new URL('/blog/LRM-gaps', event.url), 302);
	}
	if (event.url.pathname.toLowerCase() === '/blog/erw-data-quarry-status-updates') {
		return Response.redirect(new URL('/ERW-data-quarry-status-updates', event.url), 302);
	}
	if (event.url.pathname === '/erw-data-quarry-status-updates') {
		return Response.redirect(new URL('/ERW-data-quarry-status-updates', event.url), 302);
	}
	// Legacy / alternate press PDF URLs → canonical static file
	if (event.url.pathname === '/bedrock-initiative/pressrelease.pdf') {
		return Response.redirect(new URL('/Bedrock.PressRelease.pdf', event.url), 302);
	}
	if (event.url.pathname === '/HFC-Destruction-in-Article-5-Countries.pdf') {
		return Response.redirect(
			new URL('/Cascade Climate - HFC Destruction in Article 5 Countries.pdf', event.url),
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

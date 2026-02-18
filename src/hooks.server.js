/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Redirect lowercase blog URL to actual route (Windows keeps folder as LRM-gaps)
	if (event.url.pathname === '/blog/lrm-gaps') {
		return Response.redirect(new URL('/blog/LRM-gaps', event.url), 302);
	}
	return resolve(event);
}

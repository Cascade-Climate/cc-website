import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Stable local URL for previews: always http://localhost:5177
		port: 5177,
		strictPort: true,
		// Discourage the browser from keeping a stale HTML/JS shell (esp. embedded browsers)
		headers: {
			'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
			Pragma: 'no-cache',
			Expires: '0'
		}
	}
});

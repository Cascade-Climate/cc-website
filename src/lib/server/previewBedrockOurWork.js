/**
 * When true, show Bedrock + Our Work hub/program routes and extended nav.
 * Production (custom domain): false unless PUBLIC_PREVIEW_BEDROCK_OUR_WORK=1.
 * Preview deploys: hostname ends with .pages.dev.
 * Local: any Vite dev server (`import.meta.env.DEV`), or common loopback hostnames for `vite preview`.
 */
export function previewBedrockOurWorkEnabled(url, publicEnv = {}) {
	if (import.meta.env.DEV) return true;
	const host = url.hostname;
	if (
		host === 'localhost' ||
		host === '127.0.0.1' ||
		host === '::1' ||
		host === '[::1]'
	) {
		return true;
	}
	if (host.endsWith('.pages.dev')) return true;
	if (publicEnv.PUBLIC_PREVIEW_BEDROCK_OUR_WORK === '1') return true;
	return false;
}

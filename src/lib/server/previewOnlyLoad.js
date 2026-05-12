/** @returns {import('@sveltejs/kit').ServerLoad} */
export function previewOnlyLoad() {
	return function loadPreviewGated() {
		return {};
	};
}

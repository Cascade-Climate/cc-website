/** Encode site-root PDF paths so spaces and special characters work in links and window.open. */
export function pdfUrl(link) {
	if (!link) return link;
	return link.startsWith('http') ? link : encodeURI(link);
}

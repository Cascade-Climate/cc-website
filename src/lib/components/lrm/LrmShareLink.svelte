<script>
	import { explorerIntroUrl } from '$lib/lrm/explorerContent.js';

	let copied = false;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let resetTimer;

	function fallbackCopy(text) {
		const ta = document.createElement('textarea');
		ta.value = text;
		ta.setAttribute('readonly', '');
		ta.style.position = 'fixed';
		ta.style.top = '0';
		ta.style.left = '0';
		ta.style.opacity = '0';
		document.body.appendChild(ta);
		ta.select();
		const ok = document.execCommand('copy');
		document.body.removeChild(ta);
		if (!ok) throw new Error('copy failed');
	}

	async function copyLink() {
		const url = explorerIntroUrl();
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(url);
			} else {
				fallbackCopy(url);
			}
			copied = true;
			clearTimeout(resetTimer);
			resetTimer = setTimeout(() => {
				copied = false;
			}, 2200);
		} catch {
			copied = false;
		}
	}
</script>

<div class="share">
	<p class="share-kicker">Share</p>
	<p class="share-copy">Copy a link to the start of this explorer.</p>
	<button type="button" class="share-btn" on:click={copyLink}>
		{copied ? 'Link copied' : 'Copy link'}
	</button>
</div>

<style>
	.share {
		margin: 0 0 1.75rem;
		padding: 1.1rem 0 0;
	}

	.share-kicker {
		margin: 0 0 0.3rem;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--accent);
	}

	.share-copy {
		margin: 0 0 0.75rem;
		max-width: 36rem;
		color: var(--ink-soft);
		font-size: 0.95rem;
		line-height: 1.45;
	}

	.share-btn {
		appearance: none;
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0.5rem 0.95rem;
		border: 1px solid rgba(225, 252, 247, 0.55);
		border-radius: var(--radius);
		background: rgba(1, 22, 24, 0.35);
		color: var(--header);
		font: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
	}

	.share-btn:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
</style>

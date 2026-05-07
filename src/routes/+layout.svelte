<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/theme.css';

	export let data;
</script>

{#if import.meta.env.DEV}
	<div class="dev-preview-hint" role="status">
		Vite dev — saves should hot-reload. If this page looks old: hard-refresh (⌘⇧R) or run
		<code>npm run dev:fresh</code>
	</div>
{/if}

<div id="root-layout" class:dev-hint-active={import.meta.env.DEV}>
	<Header navItems={data.navItems} />
	<slot />
	<Footer />
</div>

<style>
	.dev-preview-hint {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1200;
		padding: 0.35rem 0.75rem;
		font-size: 12px;
		line-height: 1.35;
		text-align: center;
		background: #fff8e6;
		color: #3d3d3d;
		border-top: 1px solid #e6d9b8;
		font-family: system-ui, sans-serif;
	}

	.dev-preview-hint code {
		font-size: 11px;
		background: rgba(0, 0, 0, 0.06);
		padding: 0.1rem 0.35rem;
		border-radius: 4px;
	}

	#root-layout.dev-hint-active {
		padding-bottom: 2.75rem;
	}

	:global(body) {
		margin: 0;
		font-weight: 300;
		font-size: 18px;
		overflow-x: hidden;
	}

	/* Use native smooth scroll so in-page anchors account for sticky elements correctly */
	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}
	:global(body:has(#nav-modal.active)) {
		overflow: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(p) {
		margin-top: 0;
		line-height: 28px;
	}

	:global(p a) {
		color: var(--color-accent);
		text-decoration: none;
		font-weight: 420;
	}

	:global(div) {
		line-height: 28px;
	}
</style>

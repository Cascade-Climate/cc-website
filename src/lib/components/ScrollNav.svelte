<script>
  import { onMount } from 'svelte';

  /** Optional list of section IDs to exclude from the nav (e.g. ['gap-installed-bank', 'gap-implementation-risks']) */
  export let excludeIds = [];

  /** When true, nav stays fixed at the top of the viewport while scrolling (always visible) */
  export let fixed = false;

  /** When true, nav is in the flow under the intro and becomes fixed only after you scroll past it */
  export let fixedUnderIntro = false;

  let sections = [];
  let activeSection = '';
  let wrapper;
  let pinned = false;
  const headerOffset = 64; // 4rem – nav sticks just below site header

  function generateSections() {
    const headings = document.body.querySelector('main').querySelectorAll('h1');
    sections = Array.from(headings)
      .map(heading => ({
        id: heading.parentNode.id,
        title: heading.innerText
      }))
      .filter(s => s.id && !excludeIds.includes(s.id));
  }

  function handleScroll() {
    // Use viewport-relative position so active state works regardless of layout/offsetParent.
    // Consider the section "being read" when a point near the top of the viewport (below fixed nav) is inside it.
    const activeThreshold = 200; // px from top of viewport – below header + scroll nav
    activeSection = '';
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= activeThreshold && rect.bottom > activeThreshold) {
          activeSection = section.id;
          break;
        }
      }
    }
    // If no section contains the threshold line (e.g. at top of page), highlight the first section that's in view.
    if (!activeSection) {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            activeSection = section.id;
            break;
          }
        }
      }
    }
    // Pin nav below header once user has scrolled past it (when using fixedUnderIntro).
    if (fixedUnderIntro && wrapper) {
      pinned = wrapper.getBoundingClientRect().top <= headerOffset;
    }
  }

  onMount(() => {
    generateSections();
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="scroll-nav-wrapper" class:fixed class:pinned={fixedUnderIntro && pinned} bind:this={wrapper}>
  <div class="scroll-nav-spacer" aria-hidden="true"></div>
  <nav class="scroll-nav">
    {#each sections as section}
      <a class:active={activeSection === section.id} href={`#${section.id}`}>
        {section.title}
      </a>
    {/each}
  </nav>
</div>

<style>
  .scroll-nav-wrapper.fixed .scroll-nav-spacer,
  .scroll-nav-wrapper.pinned .scroll-nav-spacer {
    min-height: 2.75rem;
  }

  .scroll-nav-wrapper.fixed .scroll-nav,
  .scroll-nav-wrapper.pinned .scroll-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: calc(4rem - 1px);
    width: 100%;
  }

  nav.scroll-nav {
    position: sticky;
    top: calc(4rem - 1px);
    background-color: var(--color-dark);
    color: var(--color-light);
    border-top: 1px solid var(--color-light);
    display: flex;
    flex-wrap: wrap;
    z-index: 10;
    width: 100%;
  }

  nav a {
    padding: 0.6rem;
    margin: -1px;
    margin-left: 0;
    font-size: 1rem;
    text-decoration: none;
    color: inherit;
    flex: 1 1 0;
    min-width: 0;
    text-align: center;
    border: 1px solid var(--color-light);
		font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
  }

  nav a:first-child {
    border-left: none;
  }

  nav a.active {
    background-color: var(--color-light);
    color: var(--color-dark);
  }

  @media (max-width: 660px) {
    nav a {
      padding: 0.4rem;
      font-size: 0.875rem;
    }
  }
</style>
<script>
  import { onMount } from 'svelte';

  let sections = [];
  let activeSection = '';

  function generateSections() {

    const headings = document.body.querySelector('main').querySelectorAll('h1');
    sections = Array.from(headings).map(heading => ({
      id: heading.parentNode.id,
      title: heading.innerText
    }));
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;
    activeSection = '';
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
          activeSection = section.id;
          break;
        }
      }
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

<nav class="scroll-nav">
  {#each sections as section}
    <a class:active={activeSection === section.id} href={`#${section.id}`}>
      {section.title}
    </a>
  {/each}
</nav>

<style>
  nav {
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
    max-width: 256px;
    flex-grow: 1;
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
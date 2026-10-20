<script lang="ts">
  import { onMount } from 'svelte';
  let theme: 'dark' | 'light' = 'dark';

  onMount(() => {
    const stored = localStorage.getItem('samid-theme');
    if (stored === 'light' || stored === 'dark') theme = stored;
    else theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    updateThemeColor(theme);
  });

  function updateThemeColor(nextTheme: 'dark' | 'light') {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = nextTheme === 'dark' ? '#111313' : '#f7f8f5';
  }

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('samid-theme', theme);
    updateThemeColor(theme);
  }
</script>

<button class="theme-toggle" type="button" onclick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Light theme' : 'Dark theme'}>
  <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
</button>

<style>
  .theme-toggle { width: 36px; height: 36px; border: 1px solid var(--border); background: var(--surface); color: var(--text); display: grid; place-items: center; border-radius: 10px; cursor: pointer; transition: transform .18s ease, background .2s ease, border-color .2s ease; }
  .theme-toggle:hover { transform: translateY(-2px); border-color: var(--muted); }
  .theme-toggle span { font-size: 21px; line-height: 1; }
</style>

// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Every page is pre-rendered to plain HTML at build time, so search engines
// read full content without running JavaScript.
export default defineConfig({
  site: 'https://190onmaple.co.za',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    responsiveStyles: false,
  },
  vite: {
    // Cast: @tailwindcss/vite resolves a newer Vite than Astro bundles; runtime is compatible.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});

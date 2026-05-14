// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fecarlovich13.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

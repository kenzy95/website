// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://agencesimple.fr',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-light' },
    gfm: true,
  }), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    filter: (page) =>
      !page.includes('/legal/') &&
      !page.includes('/404') &&
      !page.includes('/draft') &&
      // Explorations design methode : noindex, donc hors sitemap (signaux coherents)
      !/\/methode-[0-9a-z]/.test(page),
    i18n: undefined,
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  experimental: {},
});
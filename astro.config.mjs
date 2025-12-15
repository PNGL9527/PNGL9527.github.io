import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  // 你现在部署到 GitHub Pages（PNGL9527.github.io）时建议改成这个：
  site: 'https://PNGL9527.github.io',
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      // 你目前路由结构是 /[language]/...，为了不大改路由，建议先保留 /en 前缀：
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});


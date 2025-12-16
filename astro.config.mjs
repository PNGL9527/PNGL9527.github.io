import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
//import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

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
  
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});


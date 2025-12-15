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
  site: 'https://weweweb.pages.dev',
  build: {
    inlineStylesheets: 'always',
  },
i18n: {
  locales: ['en'],
  defaultLocale: 'en',
  // 其他跟路由前缀相关的配置按你项目现状保留
},
  },
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});

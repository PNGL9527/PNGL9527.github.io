import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  output: 'static',
  site: 'https://PNGL9527.github.io',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn', 'zh-tw']
  },

  integrations: [icon()],

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    }
  }
});

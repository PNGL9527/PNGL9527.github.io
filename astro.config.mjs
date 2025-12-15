import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',

  // GitHub Pages 用户主页仓库：PNGL9527.github.io 通常不需要 base
  site: 'https://PNGL9527.github.io',

  // 如果你仍保留多语言路由，先保持原模板的 locale 列表
  // 等你确认只做英文，再把 locales 改为 ['en']，并同步改你的 i18n 文件
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn', 'zh-tw']
  },

  integrations: [
    tailwind(),
    icon()
  ]
});

// eslint-disable-next-line import/prefer-default-export
export const favicons = {
  '16': '/favicon/favicon-16x16.png',
  '32': '/favicon/favicon-32x32.png',
  '512': '/favicon/favicon-512x512.png',
  'android-chrome-192': '/favicon/android-chrome-192x192.png',
  'android-chrome-512': '/favicon/android-chrome-512x512.png',
  'apple-touch-icon': '/favicon/apple-touch-icon.png',
};


export const globalOgImage = {
  url: '/og/og-image.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
};

export const website = {
  name: 'PengWeb',
  email: 'lupeng95@hotmail.com',
  emojiStatus: '📷',

  // 全站背景纹理（本地）
  globalBackgroundTextureImage: '/assets/global/natural-paper.webp',
  globalHighlightTextureImage: '/assets/global/highlight-texture.webp',
  
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/peng-lu-54288b174',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pngl9527',
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=KaqQ8gIAAAAJ',
    },
  ],
  get copyright() {
    return `© ${new Date().getFullYear()} ${
      this.name
    } All rights reserved. Theme <a class="underline" href='https://github.com/riceball-tw/letter'>Letter</a> licensed under MIT.`;
  },
};

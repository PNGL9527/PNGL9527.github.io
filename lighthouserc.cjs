module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'pnpm astro preview',
      url: [
        'http://localhost:4321/',
        'http://localhost:4321/portfolio/',
        'http://localhost:4321/research/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
      // target: 'lhci',
      // serverBaseUrl: process.env.PUBLIC_LHCI_BASE_URL,
      // token: process.env.LHCI_TOKEN,
    },
  },
};

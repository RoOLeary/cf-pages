module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
  images: {
    loader: 'imgix',
    path: 'https://isabelvaz.com/',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}


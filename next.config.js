// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/assets/', // Ruta pública de tus videos
          outputPath: 'static/assets/', // Ruta en tu directorio de salida
          esModule: false,
        },
      },
    });

    return config;
  },
};



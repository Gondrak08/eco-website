/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withImages = require('next-images')
module.exports = withImages()
module.exports = nextConfig


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
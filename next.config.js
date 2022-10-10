/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/diary",
  assetPrefix: "/diary",
  publicRuntimeConfig: {
    ASSET_PREFIX: "/diary",
  },
};

module.exports = nextConfig;

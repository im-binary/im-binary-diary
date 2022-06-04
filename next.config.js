/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/diary-list",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

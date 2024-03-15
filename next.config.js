/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      // {
      //   source: '/:path*',
      //   destination: 'http://13.124.249.174:8080/:path*',
      // },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/post/edit/:path',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

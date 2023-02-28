/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};

module.exports = nextConfig;

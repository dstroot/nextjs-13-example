/** @type {import('next').NextConfig} */

// importing env.mjs in your next.config.mjs will make sure
// your environment variables are validated at build time
// https://env.t3.gg/
import './data/env.mjs';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};

export default nextConfig;

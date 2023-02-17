/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'lh3.googleusercontent.com'],
  },
  serverRuntimeConfig: {
    cacheControl: {
      // cache assets for a year
      browserMaxAge: 31536000,
      // cache API responses for 1 minute
      apiMaxAge: 60,
    },
  },
};

module.exports = withBundleAnalyzer(nextConfig);

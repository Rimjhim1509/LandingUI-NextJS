/** @type {import('next').NextConfig} */
const nextConfig = {
  
  experimental: {
    appDir: true,
  },
  
  
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transpilePackages: [],
};

module.exports = nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/nextjs-portfolio',
  images: { unoptimized: true }
};
module.exports = nextConfig;

export default nextConfig;

import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/exelentic/' : '',
  basePath: isProd ? '/exelentic' : '',
  output: 'export'
};

export default nextConfig;

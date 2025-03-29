/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/exelentic", 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
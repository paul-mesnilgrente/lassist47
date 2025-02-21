import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lassist47',
  // I can improve this part
  // Check out https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

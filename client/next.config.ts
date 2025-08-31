import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/cintegre",
  assetPrefix: "/cintegre/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

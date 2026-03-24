import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.newyorksash.com",
        pathname: "/assets/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

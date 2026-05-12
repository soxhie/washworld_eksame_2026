import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "washworld-wordpress-production.storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;

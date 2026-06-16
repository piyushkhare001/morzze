import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2icu6klh68l1z.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "morzze.s3.ap-south-1.amazonaws.com",
      }

    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";
import redirectLinks from "@/const/redirectionLinks";

const nextConfig: NextConfig = {

  async redirects() {
    return redirectLinks.map(({ oldUrl, newUrl, permanent }) => ({
      source: oldUrl.replace("https://www.morzze.com", ""),
      destination: "https://d2icu6klh68l1z.cloudfront.net" + newUrl,
      permanent: permanent,
    }))
    // [
    //   {
    //     source: '/seminar',
    //     destination: '/rh-healthcare-ntai-conference-ric-jaipur-2026',
    //     permanent: true, // 308 — tells Google to update its index
    //   },
    // ]
  },
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
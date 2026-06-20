import type { NextConfig } from "next";
import redirectLinks from "@/const/redirectionLinks";

const nextConfig: NextConfig = {

  async redirects() {
    return [
      // links for Documents need to redirect
      ...redirectLinks.map(({ oldUrl, newUrl, permanent }) => ({
        source: oldUrl.replace("https://www.morzze.com", ""),
        destination: "https://d2icu6klh68l1z.cloudfront.net" + newUrl,
        permanent: permanent,
      })),

      // links for nested categories to redirect to single one
      {
        source: '/kitchen/Kitchen-Sinks/Granite-Sinks',
        destination: '/kitchen/Granite-Sinks',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Sinks/Steel-Sinks',
        destination: '/kitchen/stainless-steel-sinks',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Accessories/Drain-Pipe',
        destination: '/kitchen/drain-pipe',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Faucets/Wall-Mounted-Maucet',
        destination: '/kitchen/Kitchen-Faucets',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Faucets/Pull-Down--Faucet',
        destination: '/kitchen/Kitchen-Faucets',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Faucets/Single-Handle-Kitchen-Faucet',
        destination: '/kitchen/Kitchen-Faucets',
        permanent: true,
      },
      {
        source: '/kitchen/Kitchen-Faucets/Faucet-with-Filtered-Drinking-Water',
        destination: '/kitchen/Kitchen-Faucets',
        permanent: true,
      },
    ]
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
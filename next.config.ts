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

      // 23_June_redirects
      { source: '/bathroom/Bathroom-Basin-Collection', destination: '/bathroom/Bathroom-Basins', permanent: true },

      // Kitchen Sinks
      { source: '/kitchen/Kitchen-Sink-Collection', destination: '/kitchen', permanent: true },
      { source: '/kitchen/Kitchen-Sinks', destination: '/kitchen/stainless-steel-sinks', permanent: true },
      { source: '/kitchen/Kitchen-Sinks/Granite-Sinks', destination: '/kitchen/Granite-Sinks', permanent: true },
      { source: '/kitchen/Kitchen-Sinks/Steel-Sinks', destination: '/kitchen/stainless-steel-sinks', permanent: true },

      // Case fixes
      { source: '/kitchen/Neo', destination: '/kitchen/neo', permanent: true },
      { source: '/kitchen/Pulse', destination: '/kitchen/pulse', permanent: true },

      // Accessories
      { source: '/kitchen/Kitchen-Accessories/Drain-Pipe', destination: '/kitchen/drain-pipe', permanent: true },
      { source: '/kitchen/Kitchen-Accessories/Liquid-Soap-Dispenser', destination: '/kitchen/Kitchen-Accessories', permanent: true },
      { source: '/kitchen/Kitchen-Accessories/Sink-Strainer', destination: '/kitchen/Kitchen-Accessories', permanent: true },
      { source: '/kitchen/Kitchen-Accessories/Sink-Strainer-Cover', destination: '/kitchen/Kitchen-Accessories', permanent: true },
      { source: '/kitchen/Kitchen-Accessories/Sink-Drainer-Adapter', destination: '/kitchen/Kitchen-Accessories', permanent: true },
      { source: '/kitchen/Kitchen-Accessories/Hand-Shower', destination: '/kitchen/Kitchen-Accessories', permanent: true },

      // Faucets
      { source: '/kitchen/Kitchen-Faucets/Pull-Down--Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Faucet-with-Filtered-Drinking-Water', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Multi-Angle-Rotating-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Cold-Water-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Wall-Mounted-Maucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Flexible-Spout-Kitchen-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Telescopic-Spout-Kitchen-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Pull-Down-Spring-Kitchen-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/Single-Handle-Kitchen-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/360-Degree-Kitchen-Faucet', destination: '/kitchen/Kitchen-Faucets', permanent: true },
      { source: '/kitchen/Kitchen-Faucets/All-Faucets', destination: '/kitchen/Kitchen-Faucets', permanent: true }


    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2icu6klh68l1z.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "morzze.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },

    ],
  },
};

export default nextConfig;
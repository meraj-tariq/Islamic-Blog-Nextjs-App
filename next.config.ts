import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   output: 'standalone',
   experimental: {
    optimizePackageImports: [],
  },
  typescript: {
    ignoreBuildErrors: true // Temporary if you have TS errors
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "mlena6qa4grg.i.optimole.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
        search: "",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

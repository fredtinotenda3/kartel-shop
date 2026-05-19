import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during production builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optional: Disable strict mode if causing issues
  reactStrictMode: false,
  
  // Optional: Add image domains if you're using external images
  images: {
    domains: [], // Add any external image domains here
    unoptimized: false,
  },
  
  // Optional: Configure output for better debugging
  output: 'standalone',
  
  // Optional: Disable telemetry (stops Next.js from sending anonymous data)
  // You can also run: npx next telemetry disable
};

export default nextConfig;
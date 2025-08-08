/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".next/cache"),
      buildDependencies: {
        config: [__filename],
      },
    };
    return config;
  },
  // Add configuration for static generation
  experimental: {
    // Enable static generation for dynamic routes
    staticGenerationAsyncStorage: true,
  },
  // Configure which pages should be statically generated
  generateStaticParams: async () => {
    return [];
  },
};

export default nextConfig;

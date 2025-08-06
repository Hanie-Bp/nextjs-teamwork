/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: 'standalone',
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
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
};

export default nextConfig;

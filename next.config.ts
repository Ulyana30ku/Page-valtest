import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ошибки ESLint во время сборки
  },
};
export default nextConfig;
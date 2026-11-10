import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que o Next use o pnpm-lock.yaml da pasta pai (GitHub/) como raiz do projeto.
  turbopack: { root: process.cwd() },
};

export default nextConfig;

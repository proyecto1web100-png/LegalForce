import type { NextConfig } from "next";

const isGHPages = process.env.DEPLOY_TARGET === "github-pages";
const BASE_PATH = isGHPages ? "/LegalForce" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGHPages && {
    basePath: BASE_PATH,
    assetPrefix: BASE_PATH,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

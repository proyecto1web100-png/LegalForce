import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/LegalForce",
  assetPrefix: "/LegalForce",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/LegalForce",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

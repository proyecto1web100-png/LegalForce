import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/LegalForce",
  assetPrefix: "/LegalForce",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/medical-spa-and-aesthetics-clinics",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

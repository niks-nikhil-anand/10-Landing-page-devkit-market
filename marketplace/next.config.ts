import type { NextConfig } from "next";

const isStandaloneVercelBuild =
  process.env.VERCEL === "1" && process.env.MARKETPLACE_STATIC_EXPORT !== "1";

const nextConfig: NextConfig = {
  output: isStandaloneVercelBuild ? undefined : "export",
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/repo-name only when previewing on github.io without a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  // lets you open the dev server from a phone/other device on the same Wi-Fi
  allowedDevOrigins: ["192.168.1.152"],
};

export default nextConfig;

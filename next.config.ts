import type { NextConfig } from "next";

/*
  STATIC_EXPORT=1 produces a fully static build in ./out for GitHub
  Pages, served under NEXT_PUBLIC_BASE_PATH (the repo name). Local dev
  and `npm start` are unaffected.
*/
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
};

export default nextConfig;

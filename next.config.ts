import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ חובה עבור Netlify
  },
};

export default nextConfig;

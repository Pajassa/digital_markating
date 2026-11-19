import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  poweredByHeader: false,
  // One canonical host: send www.tesoap.com to tesoap.com with a permanent redirect.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tesoap.com" }],
        destination: "https://tesoap.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/:file(.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|woff2))", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
    ];
  },
};

export default nextConfig;

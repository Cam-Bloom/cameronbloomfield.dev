import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cameronbloomfield.dev" }],
        destination: "https://cameronbloomfield.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

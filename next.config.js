/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tosinojo.com",
          },
        ],
        destination: "https://www.tosinojo.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

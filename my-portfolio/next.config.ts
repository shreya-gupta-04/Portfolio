/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // ✅ Add the external hostname here
  },
};

module.exports = nextConfig;
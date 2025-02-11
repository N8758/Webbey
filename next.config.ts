/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "cdn.example.com"], // Add domains if using external images
  },
};

module.exports = nextConfig;

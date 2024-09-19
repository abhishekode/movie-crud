/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        port: "8000",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Add this 'images' configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    APIKEY: process.env.APIKEY,
    APIURL: process.env.APIURL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ia.media-imdb.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'batgle.com',
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;

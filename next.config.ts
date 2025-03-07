import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    APIKEY: process.env.APIKEY,
    APIURL: process.env.APIURL,
  },
  images: {
    domains: [
      "ia.media-imdb.com",
      "images-na.ssl-images-amazon.com",
      "batgle.com"
    ]
  }
};

export default nextConfig;

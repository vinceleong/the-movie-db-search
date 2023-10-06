/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  env: {
    THE_MOVIE_DB_HOST: process.env.THE_MOVIE_DB_HOST,
    THE_MOVIE_DB_API_KEY: process.env.THE_MOVIE_DB_API_KEY,
  },
};

module.exports = nextConfig;

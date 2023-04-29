/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "image.tmdb.org",
      "api.themoviedb.org"
    ]
  }
}

module.exports = nextConfig

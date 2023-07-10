/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
    images: {
        domains: ["images.pexels.com", "cdn.sanity.io"]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'employetable-nextjsapp.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig

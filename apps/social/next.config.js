/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  outputFileTracing: false,
  basePath: '/get-started',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get-started',
        permanent: true,
        locale: false,
        basePath: false,
      },
    ]
  },
}

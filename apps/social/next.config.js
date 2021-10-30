// const securityHeaders = [
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
//   },
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload',
//   },
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY',
//   },
//   {
//     key: 'X-XSS-Protection',
//     value: '1; mode=block',
//   },
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
//   },
//   {
//     key: 'Content-Security-Policy',
//     value: require('./utils/csp'),
//   },
// ]

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  outputFileTracing: false,
  basePath: '/getting-started',
  experimental: {
    // urlImports: ['https://cdn.skypack.dev/'],
    externalDir: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: securityHeaders,
  //     },
  //     {
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ]
  // },
}

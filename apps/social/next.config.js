const { withSentryConfig } = require('@sentry/nextjs')
const { SOCIAL_URL } = process.env

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Security-Policy',
    value: require('./utils/csp'),
  },
]

const SentryWebpackPluginOptions = {
  silent: true,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  experimental: {
    urlImports: ['https://cdn.skypack.dev/'],
    externalDir: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      },
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: `${SOCIAL_URL}/api/auth:path*`,
      },
      {
        source: '/login',
        destination: SOCIAL_URL,
      },
      {
        source: '/login/:path*',
        destination: `${SOCIAL_URL}/:path*`,
      },
    ]
  },
}

module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions)

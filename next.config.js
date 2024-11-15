const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
module.exports = withBuilderDevTools({
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        hostname: process.env.BIGCOMMERCE_CDN_HOSTNAME ?? '*.bigcommerce.com'
      },
      {
        hostname: 'cdn.builder.io'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
});

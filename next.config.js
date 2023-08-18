/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    output: 'export',
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.resolve.fallback = {
            fs: false,
          };
        }
    
        return config;
      },
  };  

module.exports = nextConfig;
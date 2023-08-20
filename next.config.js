module.exports = {
    env: {
      AUTH0_SECRET: process.env.AUTH0_SECRET,
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
      AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    },
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

  
  
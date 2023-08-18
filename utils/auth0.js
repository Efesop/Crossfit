import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: process.env.AUTH0_SCOPE || 'openid profile',
    redirectUri: process.env.REDIRECT_URI || 'https://crossfit-efesop.vercel.app/api/auth/callback',
    postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI || 'https://crossfit-efesop.vercel.app/',
    session: {
      // The secret used to encrypt the cookie.
      cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
      storeAccessToken: process.env.AUTH0_STORE_ACCESS_TOKEN || false
    }
  });
  

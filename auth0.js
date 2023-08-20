import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.REDIRECT_URI,
  postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieDomain: 'crossfit-efesop.vercel.app',
    cookieSecure: true,
    cookieLifetime: 60 * 60 * 8,
    storeIdToken: true,
    storeAccessToken: true,
    storeRefreshToken: true,
    persistSession: true,
    // Add the following lines:
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      secure: true,
      sameSite: 'none',
    },
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000
  }
});



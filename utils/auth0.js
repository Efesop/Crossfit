// utils/auth0.js
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'dev-to536ufgipngcm31.us.auth0.com',
  clientId: '1ihqi1KdvUMwUXFtVvia5NBYdIyED5cu',
  clientSecret: 'UAMoiKsdfYT9KS7uTsI8VuAiCMo0ChT1vHKKXmDPG2fIDROTpcSGa-FmdR-Hkx8x',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: 'A_LONG_RANDOM_STRING',
    storeAccessToken: true
  }
});

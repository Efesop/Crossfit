import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../app/globals.css';
import RootLayout from '../app/layout';


export default function MyApp({ Component, pageProps }) {
    return (
      <UserProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </UserProvider>
    );
}

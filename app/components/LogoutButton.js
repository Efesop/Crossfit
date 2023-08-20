import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton() {
    const { user, getIdTokenClaims } = useUser();

    if (!user) return null;

    const handleLogout = async () => {
        const tokenClaims = await getIdTokenClaims();
        const idToken = tokenClaims.__raw;

        // Initialize Auth0 WebAuth
        const webAuth = new auth0.WebAuth({
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID
        });

        // Use the logout method from WebAuth
        webAuth.logout({
            post_logout_redirect_uri: process.env.POST_LOGOUT_REDIRECT_URI,
            id_token_hint: idToken
        });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

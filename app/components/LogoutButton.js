import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton() {
    const { user, logout, getIdTokenClaims } = useUser();

    if (!user) return null;

    const handleLogout = async () => {
        const tokenClaims = await getIdTokenClaims();
        const idToken = tokenClaims.__raw;
        logout({ 
            returnTo: window.location.origin,
            id_token_hint: idToken
        });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

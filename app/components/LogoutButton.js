import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
    const { user } = useUser();
    const { logout } = useAuth0();

    if (!user) return null;

    const handleLogout = () => {
        logout({ returnTo: 'https://crossfit-efesop.vercel.app/' });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}


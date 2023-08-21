import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton() {
    const { user } = useUser();
    const { logout } = useAuth0();

    if (!user) return null;

    const handleLogout = () => {
        logout({ returnTo: 'https://crossfit-efesop.vercel.app/api/auth/logout' });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

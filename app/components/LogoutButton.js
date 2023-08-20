import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton() {
    const { user, logout } = useUser();

    if (!user) return null;

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

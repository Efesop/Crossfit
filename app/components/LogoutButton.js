import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton() {
    const { user } = useUser();

    if (!user) return null;

    const handleLogout = () => {
        window.location.href = "https://dev-to536ufgipngcm31.auth0.com/v2/logout?returnTo=https%3A%2F%2Fcrossfit-efesop.vercel.app%2F";
    };    

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

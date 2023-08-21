import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton({ logoutDestination }) {
  const { user, logout } = useUser();

  if (!user) return null;

  const handleLogout = () => {
    try {
      logout({ returnTo: logoutDestination });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

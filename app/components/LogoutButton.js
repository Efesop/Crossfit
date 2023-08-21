import { useAuth0 } from '@auth0/nextjs-auth0/client';

export default function LogoutButton({ logoutDestination }) {
  const { logout } = useAuth0();

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

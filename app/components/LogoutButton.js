import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton({ logoutDestination = '/api/auth/logout' }) {
  const { user } = useUser();

  const handleLogout = () => {
    try {
      // Use the provided logoutDestination or default to '/api/auth/logout'
      window.location.href = logoutDestination;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // If there's no user, don't render the button
  if (!user) return null;

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

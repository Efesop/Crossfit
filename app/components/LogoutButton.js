import { useUser } from '@auth0/nextjs-auth0/client';

export default function LogoutButton({ logoutDestination }) {
  const { user, logout } = useUser();

  if (!user) return null;

  const handleLogout = () => {
    logout({ returnTo: logoutDestination });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

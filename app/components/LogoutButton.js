// components/LogoutButton.js
import { useUser } from '@auth0/nextjs-auth0';

export default function LogoutButton() {
  const { user, logout } = useUser();

  if (!user) return null;

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
}

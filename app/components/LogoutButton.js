// components/LogoutButton.js
// import { useUser } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function LogoutButton() {
    const { user, logout = () => console.error("Logout function is not defined") } = useUser();

  if (!user) return null;

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
  Logout
</button>

  );
}



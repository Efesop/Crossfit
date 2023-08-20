// components/LogoutButton.js
// import { useUser } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function LogoutButton() {
  const { user, logout } = useUser();

  if (!user) return null;

  return (
    <button onClick={() => {
        if (logout) {
            logout({ returnTo: window.location.origin });
        } else {
            console.error("Logout function is not defined");
        }
    }}
    >
      Logout
    </button>
  );
}



import { useUser } from '@auth0/nextjs-auth0/client';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

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
    <div onClick={handleLogout} className="group flex items-center px-3 py-2 text-sm leading-6 font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer">
      <ExitToAppOutlinedIcon className="h-6 w-6 text-gray-400 group-hover:text-white" aria-hidden="true" />
      <span className="ml-3">Logout</span>
    </div>
  );
}

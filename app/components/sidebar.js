import { useUser } from '@auth0/nextjs-auth0/client';
import LogoutButton from './LogoutButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Sidebar() {
    const { user } = useUser();

    if (!user) {
        console.error("User not found in Sidebar component.");
    }

    return (
        <aside className="w-1/4 float-left pr-4 bg-gray-200 h-screen">
            {user ? (
                <>
                    <div className="flex flex-col items-center p-4">
                        <a href="/profile">
                            <img src={user?.picture} alt={user?.name} className="w-16 h-16 rounded-full mb-2" />
                            <span className="font-bold">{user?.name}</span>
                        </a>
                        <span className="text-sm text-gray-600">@{user?.nickname}</span>
                    </div>
                    <ul className="space-y-4 p-4">
                        <li>
                            <a href="/" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <HomeOutlinedIcon />
                                <span>Feed</span>
                            </a>
                        </li>
                        <li>
                            <a href="/submit" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <AddCircleOutlineOutlinedIcon />
                                <span>Submit a Design</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <SettingsOutlinedIcon />
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <LogoutButton className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded" logoutDestination="https://crossfit-efesop.vercel.app/api/auth/logout" />
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <div className="p-4">
                        <a href="/api/auth/login" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                            <ExitToAppOutlinedIcon />
                            <span>Sign in</span>
                        </a>
                    </div>
                    <ul className="space-y-4 p-4">
                        <li>
                            <a href="/api/auth/login" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <AddCircleOutlineOutlinedIcon />
                                <span>Submit a Design (Login Required)</span>
                            </a>
                        </li>
                    </ul>
                </>
            )}
        </aside>
    );
}

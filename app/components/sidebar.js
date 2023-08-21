import { useUser } from '@auth0/nextjs-auth0/client';
import LogoutButton from './LogoutButton';
import { HomeIcon, PlusIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'; // Importing the outline versions

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
                                <HomeIcon className="h-6 w-6" />
                                <span>Feed</span>
                            </a>
                        </li>
                        <li>
                            <a href="/submit" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <PlusIcon className="h-6 w-6" />
                                <span>Submit a Design</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <CogIcon className="h-6 w-6" />
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
                            <LogoutIcon className="h-6 w-6" /> {/* Using LogoutIcon for the login button as a placeholder. You might want to choose a different icon. */}
                            <span>Sign in</span>
                        </a>
                    </div>
                    <ul className="space-y-4 p-4">
                        <li>
                            <a href="/api/auth/login" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                                <PlusIcon className="h-6 w-6" />
                                <span>Submit a Design (Login Required)</span>
                            </a>
                        </li>
                    </ul>
                </>
            )}
        </aside>
    );
}

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Sidebar() {
    const { user } = useUser();

    return (
        <aside className="w-1/4 float-left pr-4 bg-gray-200 h-screen">
            {user && (
                <div className="flex justify-end items-center p-4">
                    <img src={user?.picture} alt={user?.name} className="w-10 h-10 rounded-full mr-2" />
                    <span>{user?.name}</span>
                </div>
            )}
            <ul className="space-y-4 p-4">
                <li><a href="/feed" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Feed</a></li>
                {user && <li><a href="/profile" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Profile</a></li>}
                {user && <li><a href="/settings" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Settings</a></li>}
                {user && <li><a href="/submit" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Submit Design</a></li>}
            </ul>
        </aside>
    );
}

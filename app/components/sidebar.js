import { useUser } from '@auth0/nextjs-auth0/client/use-user';

export default function Sidebar() {
    const { user } = useUser();

    return (
        <aside className="w-1/4 float-left pr-4 bg-gray-200 h-screen">
            {user && (
                <div className="flex flex-col items-center p-4">
                    <img src={user?.picture} alt={user?.name} className="w-16 h-16 rounded-full mb-2" />
                    <span className="font-bold">{user?.name}</span>
                    <span className="text-sm text-gray-600">@{user?.nickname}</span>
                </div>
            )}
            <ul className="space-y-4 p-4">
                <li><a href="/" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                    <span>Feed</span>
                </a></li>
                {user && <li><a href="/submit" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                    <span>Submit a Design</span>
                </a></li>}
                {user && <li><a href="/settings" className="flex items-center space-x-2 p-2 hover:bg-blue-500 hover:text-white rounded">
                    <span>Settings</span>
                </a></li>}
            </ul>
        </aside>
    );
}

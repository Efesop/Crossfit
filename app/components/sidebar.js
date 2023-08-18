export default function Sidebar() {
    return (
        <aside className="w-1/4 float-left pr-4">
            <ul>
                <li><a href="/feed">Feed</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                {/* ... add more links as needed */}
            </ul>
        </aside>
    );
}

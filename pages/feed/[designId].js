import { useUser } from '@auth0/nextjs-auth0';
import Sidebar from '../../components/Sidebar';

export default function Feed() {
    const { user, isLoading } = useUser();

    // Sample data for designs
    const designs = [
        // ... add 6 sample designs
    ];

    return (
        <div className="container mx-auto p-4">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="w-3/4 float-right">
                {/* Search Bar */}
                <div className="mb-4">
                    <input type="text" placeholder="Search designs..." className="w-full p-2 border rounded" />
                </div>

                {/* Tags */}
                <div className="mb-4">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Tag 1</button>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Tag 2</button>
                    {/* ... add more tags */}
                </div>

                {/* Feed */}
                <div>
                    {designs.map(design => (
                        // Render each design. You can create a Design component for this.
                    ))}
                </div>
            </main>
        </div>
    );
}

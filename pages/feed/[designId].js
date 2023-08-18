// ... other imports
import DesignCard from '../../components/DesignCard';

export default function Feed() {
    const { user, isLoading } = useUser();

    // Sample data for designs
    const designs = [
        {
            id: 1,
            title: 'Design 1',
            description: 'This is a sample description for Design 1',
            imageUrl: '/path/to/image1.jpg',
            tags: ['tag1', 'tag2'],
            likes: 10
        },
        // ... add 5 more sample designs similarly
    ];

    return (
        <div className="container mx-auto p-4 flex">
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content */}
            <main className="w-3/4 ml-4">
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
                        <DesignCard key={design.id} design={design} />
                    ))}
                </div>
            </main>
        </div>
    );
}

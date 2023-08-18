import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import DesignCard from '../components/DesignCard';
import Sidebar from '../components/Sidebar';

export default function Feed() {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        fetchDesigns();
    }, []);

    const fetchDesigns = async () => {
        let { data, error } = await supabase.from('designs').select('*');
        if (error) console.error("Error fetching designs:", error);
        else setDesigns(data);
    };

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
                        <DesignCard key={design.id} design={design} />
                    ))}
                </div>
            </main>
        </div>
    );
}

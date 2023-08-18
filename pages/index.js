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
            <Sidebar />
            <main className="w-3/4 float-right">
                <div className="mb-4">
                    <input type="text" placeholder="Search designs..." className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    {/* Add your tags here */}
                </div>
                <div>
                    {designs.map(design => (
                        <DesignCard key={design.id} design={design} />
                    ))}
                </div>
            </main>
        </div>
    );
}

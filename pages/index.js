import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import DesignCard from '../app/components/DesignCard';

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
            <main className="w-full">
                <div className="mb-4 flex space-x-2">
                    {/* Sample tags, you can fetch these dynamically */}
                    <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">UI</span>
                    <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">UX</span>
                    <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">Web</span>
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


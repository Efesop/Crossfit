import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import DesignCard from '../app/components/DesignCard';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Feed() {
    const [designs, setDesigns] = useState([]);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetchDesigns();
    }, []);

    const fetchDesigns = async () => {
        let { data, error } = await supabase.from('designs').select('*');
        if (error) console.error("Error fetching designs:", error);
        else setDesigns(data);
    };

    // Sample tags, you can fetch these dynamically and structure them accordingly
    const tags = {
      UI: designs.filter(design => design.tags.includes('UI')),
      UX: designs.filter(design => design.tags.includes('UX')),
      Web: designs.filter(design => design.tags.includes('Web'))
    };

    return (
        <div className="container mx-auto p-4">
            <main className="w-full">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(tags).map((tag) => (
                            <Tab
                                key={tag}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {tag}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(tags).map((designsForTag, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div>
                                    {designsForTag.map(design => (
                                        <DesignCard key={design.id} design={design} />
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </main>
        </div>
    );
}

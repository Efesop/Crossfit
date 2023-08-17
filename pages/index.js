import { useState } from 'react';
import DesignCard from '../app/components/DesignCard';

export default function Feed({ designs }) {
  const [filter, setFilter] = useState('popular'); // default filter
  const [tags, setTags] = useState([]); // selected tags

  const filteredDesigns = designs.filter(design => {
    if (tags.length > 0 && !tags.some(tag => design.tags.includes(tag))) {
      return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">UI Design Inspiration</h1>
      <div>
        <button onClick={() => setFilter('popular')}>Most Popular</button>
        {/* Add more filter buttons as needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDesigns.map(design => (
          <DesignCard key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}

// Fetch designs from your database or API
export async function getStaticProps() {
  const designs = []; // Fetch designs here
  return {
    props: {
      designs
    }
  };
}

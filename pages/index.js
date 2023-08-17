import { useState, useEffect } from 'react';
import DesignCard from '../components/DesignCard';

export default function Feed() {
  const [designs, setDesigns] = useState([]);
  const [filter, setFilter] = useState('popular'); // default filter

  useEffect(() => {
    async function fetchDesigns() {
      const response = await fetch('/api/designs');
      const data = await response.json();
      setDesigns(data);
    }
    fetchDesigns();
  }, []);

  return (
    <div className="p-4">
      {/* Filter logic can be added here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {designs.map(design => (
          <DesignCard key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}

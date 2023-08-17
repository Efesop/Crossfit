// pages/index.js
import DesignCard from '../components/DesignCard';

export default function Feed({ designs }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">UI Design Inspiration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {designs.map(design => (
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

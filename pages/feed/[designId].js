import DesignCard from '../../components/DesignCard';

export default function Feed({ designs }) {
  return (
    <div className="container mx-auto p-4">
      {/* ... other components ... */}
      <div>
        {designs.map(design => (
          <DesignCard key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('/api/designs');
  const designs = await res.json();

  return {
    props: { designs },
  };
}

import DesignDetail from '../../components/DesignDetail';

export default function DesignPage({ design }) {
  return (
    <div className="container mx-auto p-4">
      <DesignDetail design={design} />
    </div>
  );
}

// Fetch design details based on designId
export async function getStaticProps({ params }) {
  const design = {}; // Fetch design details using params.designId
  return {
    props: {
      design
    }
  };
}

// Define paths for static generation
export async function getStaticPaths() {
  const paths = []; // Fetch design IDs and create paths
  return {
    paths,
    fallback: false
  };
}

import { useRouter } from 'next/router';

export default function DesignPage({ design }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">{design.title}</h1>
      <img src={design.imageUrl} alt={design.title} />
      <p>{design.description}</p>
      {/* Display tags, comments, likes, etc. */}
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
    fallback: true
  };
}

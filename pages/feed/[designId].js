import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function DesignDetail() {
  const [design, setDesign] = useState(null);
  const router = useRouter();
  const { designId } = router.query;

  useEffect(() => {
    if (designId) {
      const fetchDesign = async () => {
        const db = getFirestore();
        const designRef = doc(db, 'designs', designId);
        const designDoc = await getDoc(designRef);
        if (designDoc.exists()) {
          setDesign(designDoc.data());
        } else {
          console.error("Design not found");
        }
      };

      fetchDesign();
    }
  }, [designId]);

  if (!design) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">{design.title}</h1>
      <img src={design.imageUrl} alt={design.title} className="w-full h-auto mb-4" />
      <p className="mb-4">{design.description}</p>
      <div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{design.tag}</span>
        {/* Repeat for other tags */}
      </div>
      {/* Add sections for comments, likes, etc. */}
    </div>
  );
}

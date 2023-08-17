import { useState, useEffect } from 'react';
import DesignCard from '../app/components/DesignCard';

export default function Profile() {
  const [userDesigns, setUserDesigns] = useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const fetchUserDesigns = async () => {
        const db = getFirestore();
        const designsQuery = query(collection(db, 'designs'), where('userId', '==', currentUser.uid));
        const designsSnapshot = await getDocs(designsQuery);
        const designs = designsSnapshot.docs.map(doc => doc.data());
        setUserDesigns(designs);
      };

      fetchUserDesigns();
    }
  }, [currentUser]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">My Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userDesigns.map(design => (
          <DesignCard key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}

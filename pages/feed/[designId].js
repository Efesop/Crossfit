import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DesignDetail from '../../components/DesignDetail';

export default function Design() {
  const router = useRouter();
  const { designId } = router.query;
  const [design, setDesign] = useState(null);

  useEffect(() => {
    if (designId) {
      async function fetchDesign() {
        const response = await fetch(`/api/designs/${designId}`);
        const data = await response.json();
        setDesign(data);
      }
      fetchDesign();
    }
  }, [designId]);

  if (!design) return <p>Loading...</p>;

  return <DesignDetail design={design} />;
}

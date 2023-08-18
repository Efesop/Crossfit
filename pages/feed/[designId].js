import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DesignDetail() {
  const router = useRouter();
  const { designId } = router.query;
  const [design, setDesign] = useState(null);

  useEffect(() => {
    async function fetchDesign() {
      const response = await fetch(`/api/design?id=${designId}`);
      const data = await response.json();
      setDesign(data);
    }
    if (designId) {
      fetchDesign();
    }
  }, [designId]);

  // Render your design details here using the `design` state
}



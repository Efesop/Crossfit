import { useState, useEffect } from 'react';

export default function Home() {
    const [designs, setDesigns] = useState([]);
  
    useEffect(() => {
      async function fetchDesigns() {
        const response = await fetch('/api/designs');
        const data = await response.json();
        setDesigns(data);
      }
      fetchDesigns();
    }, []);
  
    // Render your designs here using the `designs` state
  }

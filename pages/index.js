import { useState, useEffect } from 'react';
import auth0 from '../utils/auth0';

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

    return (
      <div>
        {/* Render your designs here using the `designs` state */}
        <button onClick={() => auth0.signIn()}>Login</button>
      </div>
    );
}

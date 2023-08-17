import { useState, useEffect } from 'react';

export default function Profile() {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const data = await fetchDesignsByUserFromBackend();
        setDesigns(data);
      }
      fetchData();
    }, []);
  
    return (
      <div>
        {/* Render user's designs here */}
      </div>
    );
  }
  
  async function fetchDesignsByUserFromBackend() {
    const userId = 'YOUR_USER_ID';
    const response = await fetch(`YOUR_BACKEND_URL/users/${userId}/designs`);
    const data = await response.json();
    return data;
  }

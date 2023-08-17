export default function Profile() {
    const designs = fetchDesignsByUserFromBackend();
  
    return (
      <div>
        {/* Render user's designs here */}
      </div>
    );
  }
  
  async function fetchDesignsByUserFromBackend() {
    const userId = 'YOUR_USER_ID'; // Replace with logic to get the current user's ID
    const response = await fetch(`YOUR_BACKEND_URL/users/${userId}/designs`);
    const data = await response.json();
    return data;
  }
  
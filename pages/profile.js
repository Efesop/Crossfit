export default function Profile() {
    const designs = fetchDesignsByUserFromBackend();
  
    return (
      <div>
        {/* Render user's designs here */}
      </div>
    );
  }
  
  async function fetchDesignsByUserFromBackend() {
    // Replace 'YOUR_USER_ID' and 'YOUR_BACKEND_URL' with actual values
    const userId = 'YOUR_USER_ID';
    const response = await fetch(`YOUR_BACKEND_URL/users/${userId}/designs`);
    const data = await response.json();
    return data;
  }
  
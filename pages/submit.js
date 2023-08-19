import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default function SubmitDesign() {
    const [formData, setFormData] = useState({});
    const { user } = useUser();
    const router = useRouter();

    // Redirect to login if user is not logged in
    if (!user) {
        router.push('/api/auth/login');
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        // Handle successful submission
      } else {
        // Handle error
      }
    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Design Title" onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-2 border rounded mb-4" />
                <textarea placeholder="Design Description" onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full p-2 border rounded mb-4"></textarea>
                <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full p-2 border rounded mb-4" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
}

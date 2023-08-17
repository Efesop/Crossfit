import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function SubmitForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // ... other state variables for images, tags, URL, etc.

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const designsCollection = collection(db, 'designs');

    const newDesign = {
      title,
      description,
      // ... other fields
    };

    await addDoc(designsCollection, newDesign);
    alert('Design submitted!');
  };

  return (
    <form className="border rounded-lg p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input type="text" className="border rounded-lg w-full p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      {/* Repeat similar blocks for description, images, tags, URL, etc. */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Submit
      </button>
    </form>
  );
}

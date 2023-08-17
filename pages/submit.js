export default function SubmitForm() {
    return (
      <form className="border rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input type="text" className="border rounded-lg w-full p-2" />
        </div>
        {/* Repeat similar blocks for description, images, tags, URL, etc. */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Submit
        </button>
      </form>
    );
  }
  
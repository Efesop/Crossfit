export default function DesignCard({ design }) {
    return (
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src={design.imageUrl} alt={design.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{design.title}</h2>
          <p className="text-gray-600 truncate">{design.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              {design.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-300">
              ❤️ {design.likes}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
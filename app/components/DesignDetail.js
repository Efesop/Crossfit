export default function DesignDetail({ design }) {
    return (
      <div className="border rounded-lg p-4">
        <img src={design.imageUrl} alt={design.title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{design.title}</h2>
        <p className="text-gray-600 mb-4">{design.description}</p>
        <div className="flex space-x-2 mb-4">
          {design.tags.map(tag => (
            <span key={tag} className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <button className="text-red-500 hover:text-red-600 transition-colors duration-300">
          ❤️ {design.likes}
        </button>
        {/* Add comments section here */}
      </div>
    );
}

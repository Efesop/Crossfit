export default function Profile({ user }) {
    return (
      <div className="border rounded-lg p-4">
        <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2 text-center">{user.name}</h2>
        <p className="text-center text-gray-600">{user.bio}</p>
        {/* Add more user details as needed */}
      </div>
    );
}

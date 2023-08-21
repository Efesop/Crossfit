import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
    const { user: authUser, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;

    if (!authUser) {
        console.error("User not found in Profile component.");
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={authUser?.picture} alt={authUser?.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-center">{authUser?.name}</h2>
            {/* Add more user details as needed */}
        </div>
    );
}

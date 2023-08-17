import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
    const { user, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (user) {
      console.log(user.sub); // This is the user's ID
    }

    return (
      <div>
        {/* Render user's designs here */}
      </div>
    );
}

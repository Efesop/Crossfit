import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
    const { user, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (!user) return <div>Please log in.</div>;

    return (
        <div>
            Welcome {user.name}!
            {/* Rest of your component logic */}
        </div>
    );
}

// Use server-side rendering for this page
export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}

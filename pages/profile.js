import { useUser } from '@auth0/nextjs-auth0/client';
import { supabase } from '../lib/supabaseClient';
import { useEffect } from 'react';

export default function Profile() {
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (user) {
            const checkAndCreateUser = async () => {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('auth0_id', user.sub);

                if (error) {
                    console.error("Error fetching user:", error);
                    return;
                }

                if (data.length === 0) {
                    // User doesn't exist, create a new entry
                    const { error: insertError } = await supabase
                        .from('users')
                        .insert([{ auth0_id: user.sub, name: user.name, avatar: user.picture }]);

                    if (insertError) {
                        console.error("Error creating user:", insertError);
                    }
                }
            };

            checkAndCreateUser();
        }
    }, [user]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="border rounded-lg p-4">
            <img src={user?.picture} alt={user?.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-center">{user?.name}</h2>
            {/* Add more user details as needed */}
        </div>
    );
}

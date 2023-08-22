import { useUser } from '@auth0/nextjs-auth0/client';
import { supabase } from '../lib/supabaseClient';
import { useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

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
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                    {/* ... [Rest of your provided profile layout code] */}
                </div>
                {/* ... [Rest of the sections from your provided profile layout code] */}
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

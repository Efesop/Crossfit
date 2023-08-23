import { getSession } from '@auth0/nextjs-auth0';

export default async function getAuthToken(req, res) {
    const session = getSession(req, res);
    res.status(200).json({ accessToken: session?.accessToken });
}

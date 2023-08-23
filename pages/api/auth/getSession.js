import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    if (session) {
        res.status(200).json({ accessToken: session.accessToken });
    } else {
        res.status(401).json({ error: 'Not authenticated' });
    }
}

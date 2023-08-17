import { db } from '../../firebase';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { title, description, imageUrl, tags, url } = req.body;
    try {
      await db.collection('designs').add({
        title,
        description,
        imageUrl,
        tags,
        url,
        likes: 0,
        comments: [],
        timestamp: new Date().toISOString(),
      });
      res.status(200).json({ message: 'Design submitted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit design.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};

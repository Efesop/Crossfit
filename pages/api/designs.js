import { db } from '../../firebase';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const designsSnapshot = await db.collection('designs').get();
      const designs = [];
      designsSnapshot.forEach(doc => {
        designs.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(designs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch designs.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};

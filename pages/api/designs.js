let designs = [
    {
      id: 1,
      title: 'Design 1',
      description: 'This is a sample design description.',
      imageUrl: '/path/to/image1.jpg',
      tags: ['web', 'mobile'],
      likes: 10,
      comments: [],
    },
    // ... more designs
  ];
  
  export default (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json(designs);
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  };

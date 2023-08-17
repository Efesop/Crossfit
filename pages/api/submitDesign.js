export default (req, res) => {
    if (req.method === 'POST') {
      const design = req.body;
      // Here, you'd typically save the design to a database.
      // For now, we'll just return a success message.
      res.status(200).json({ message: 'Design submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
};

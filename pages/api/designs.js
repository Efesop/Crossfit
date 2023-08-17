import designs from '../../data/designs.json';

export default (req, res) => {
  const { id } = req.query;
  // Replace the following logic with a call to your new backend or database
  const design = designs.find((design) => design.id === id);
  if (design) {
    res.status(200).json(design);
  } else {
    res.status(404).json({ message: 'Design not found' });
  }
};

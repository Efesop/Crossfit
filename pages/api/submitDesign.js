// pages/api/submitDesign.js
import { supabase } from '../../utils/supabaseClient';

export default async (req, res) => {
  const { title, description, imageUrl, tags } = req.body;
  const { data, error } = await supabase.from('designs').insert([{ title, description, imageUrl, tags }]);

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
};

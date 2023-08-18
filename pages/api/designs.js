// pages/api/designs.js
import { supabase } from '../../lib/supabaseClient';

export default async (req, res) => {
  const { data, error } = await supabase.from('designs').select('*');

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
};

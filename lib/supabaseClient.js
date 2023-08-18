import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cusfnweslpjztwddwwzm.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1c2Zud2VzbHBqenR3ZGR3d3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzNzczNTIsImV4cCI6MjAwNzk1MzM1Mn0.kvM4f3JMQWQ_6TblrwLs7n-YTST0UN2JF5bJhk8wkJo'; // Replace with your public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);




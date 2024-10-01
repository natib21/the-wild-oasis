import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qfzoqiejrlvjehltbnks.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmem9xaWVqcmx2amVobHRibmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NTgxOTgsImV4cCI6MjA0MjQzNDE5OH0.RI2j6_qBlFGI05sFrVrbfjCDx6i287b_29OI3xkLKUE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://klkuzxlwfzcoulkedtoc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsa3V6eGx3Znpjb3Vsa2VkdG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4Mzk1MzgsImV4cCI6MjA2MzQxNTUzOH0.Vy_PMJ9carIUuf-84GMBbxqAyBBQdOvqjEqEouwTcCc";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;

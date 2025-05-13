import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dborqnscgbtjxeqqcjyd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib3JxbnNjZ2J0anhlcXFjanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMjYwMjgsImV4cCI6MjA2MjcwMjAyOH0.I_ZIyJjOlvngM9XneCCeRE7BQc2u_ZLM2X1OXbrJo1Q";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;

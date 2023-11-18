import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hbmlrdmhjbmJyZWJwb3p1c2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMzUwMzEsImV4cCI6MjAxMDkxMTAzMX0.vsvKsACsu1DiFy6tVPfc5sNp7XCFf0hfadXZ0JhEIDQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

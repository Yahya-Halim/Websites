import { createClient } from "@supabase/supabase-js";

// PUBLIC_ prefix is required so the publishable key is available in the
// browser bundle (the Contact form inserts client-side). The publishable
// key is safe to expose; row-level security on the table controls access.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

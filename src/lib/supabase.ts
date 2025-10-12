import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client with service role (admin privileges)
// NEVER expose this on the client side
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);


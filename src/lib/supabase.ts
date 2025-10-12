import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client with service role (admin privileges)
// NEVER expose this on the client side
const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE || 'placeholder_service_role_key';

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRole,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);


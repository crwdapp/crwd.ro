import { NextResponse } from "next/server";
import { userLeadSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabase";
import { upsertContact } from "@/lib/brevo";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    // Rate limiting
    const ip = getClientIp(req);
    const rateLimitResult = rateLimit(ip);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Prea multe cereri. Încearcă din nou mai târziu." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": new Date(rateLimitResult.reset).toISOString(),
          },
        }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.website) {
      // Silent success for bots
      return NextResponse.json({ 
        ok: true, 
        message: "Mulțumim! Verifică emailul pentru confirmare." 
      });
    }

    // Validate input
    const parse = userLeadSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parse.error.format() },
        { status: 400 }
      );
    }

    const { email, city } = parse.data;

    // Insert into Supabase
    const { error: dbError } = await supabaseAdmin.from("leads_users").insert({
      email,
      city: city || null,
      marketing_consent: true,
      source: "landing-user",
    });

    // Ignore duplicate key errors (idempotent)
    if (dbError && !dbError.message.includes("duplicate key")) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Eroare la salvarea datelor. Încearcă din nou." },
        { status: 500 }
      );
    }

    // Add to Brevo mailing list
    try {
      await upsertContact(
        email,
        Number(process.env.BREVO_LIST_ID_USERS),
        {
          EMAIL: email,
          CITY: city || "",
        },
        ["user_waitlist"]
      );
    } catch (brevoError) {
      // Don't block UX if Brevo fails, but log it
      console.error("Brevo error:", brevoError);
      // Still return success to user since we saved to DB
    }

    return NextResponse.json({
      ok: true,
      message: "Mulțumim! Verifică emailul pentru confirmare.",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Eroare neașteptată. Încearcă din nou." },
      { status: 500 }
    );
  }
}


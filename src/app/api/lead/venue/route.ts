import { NextResponse } from "next/server";
import { venueLeadSchema } from "@/lib/validators";
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
        message: "Mulțumim! Te vom contacta în curând." 
      });
    }

    // Validate input
    const parse = venueLeadSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parse.error.format() },
        { status: 400 }
      );
    }

    const {
      contact_name,
      email,
      phone,
      city,
    } = parse.data;

    // Insert into Supabase
    const { error: dbError } = await supabaseAdmin.from("leads_venues").insert({
      contact_name,
      email,
      phone: phone || null,
      city: city || null,
      marketing_consent: true,
      source: "landing-venue",
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
        Number(process.env.BREVO_LIST_ID_VENUES || "2"),
        {
          EMAIL: email,
          CONTACT_NAME: contact_name,
          PHONE: phone || "",
          CITY: city || "",
        },
        ["venue_waitlist"]
      );
    } catch (brevoError) {
      // Don't block UX if Brevo fails, but log it
      console.error("Brevo error:", brevoError);
      // Still return success to user since we saved to DB
    }

    return NextResponse.json({
      ok: true,
      message: "Mulțumim! Te vom contacta în curând.",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Eroare neașteptată. Încearcă din nou." },
      { status: 500 }
    );
  }
}


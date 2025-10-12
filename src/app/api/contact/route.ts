import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
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
      return NextResponse.json({ 
        ok: true, 
        message: "Mesajul a fost trimis cu succes!" 
      });
    }

    // Validate input
    const parse = contactFormSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json(
        { error: "Date invalide", details: parse.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parse.data;

    // Here you could send an email via Brevo transactional API
    // or save to a database. For now, just log it.
    console.log("Contact form submission:", { name, email, subject, message });

    // TODO: Implement email sending via Brevo transactional API
    // or save to database for manual follow-up

    return NextResponse.json({
      ok: true,
      message: "Mesajul a fost trimis cu succes! Te vom contacta în curând.",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Eroare neașteptată. Încearcă din nou." },
      { status: 500 }
    );
  }
}


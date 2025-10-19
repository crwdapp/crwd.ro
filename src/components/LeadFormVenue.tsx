"use client";

import { useState, FormEvent } from "react";
import GlassButton from "@/components/ui/GlassButton";
import LiquidGlass from "@/components/ui/LiquidGlass";

export default function LeadFormVenue() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      venue_name: form.get("venue_name"),
      contact_name: form.get("contact_name"),
      email: form.get("email"),
      phone: form.get("phone"),
      marketing_consent: form.get("marketing_consent") === "on",
      website: form.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/lead/venue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
        setErrorMessage(data.error || "A apărut o eroare. Încearcă din nou.");
      }
    } catch (error) {
      setState("error");
      setErrorMessage("Eroare de conexiune. Verifică internetul și încearcă din nou.");
    }
  }

  if (state === "success") {
    return (
      <LiquidGlass tone="purple" elevation={2} border="glow" className="p-6 sm:p-8 text-center rounded-2xl">
        <div className="text-white text-lg sm:text-xl font-gotham font-bold mb-2 sm:mb-3">
          ✓ Mulțumim pentru interes!
        </div>
        <p className="text-white/80 text-xs sm:text-sm font-gotham">
          Te vom contacta în curând pentru a discuta despre parteneriat.
        </p>
      </LiquidGlass>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl max-w-md mx-auto shadow-lg">
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        <div>
        <label htmlFor="venue_name" className="block text-xs font-gotham font-semibold text-black mb-2 uppercase tracking-wider">
          Nume Local *
        </label>
        <input
          type="text"
          id="venue_name"
          name="venue_name"
          required
          placeholder="Numele localului"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-white border border-black/30 text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="contact_name" className="block text-xs font-gotham font-semibold text-black mb-2 uppercase tracking-wider">
          Numele tău *
        </label>
        <input
          type="text"
          id="contact_name"
          name="contact_name"
          required
          placeholder="Numele tău"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-white border border-black/30 text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-gotham font-semibold text-black mb-2 uppercase tracking-wider">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="contact@local.ro"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-white border border-black/30 text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-gotham font-semibold text-black mb-2 uppercase tracking-wider">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="0712 345 678"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-white border border-black/30 text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors font-gotham"
        />
      </div>

      <div className="flex items-start pt-1">
        <input
          type="checkbox"
          id="marketing_consent"
          name="marketing_consent"
          required
          className="mt-1 h-4 w-4 rounded-none border-black/30 bg-white text-black focus:ring-black flex-shrink-0"
        />
        <label htmlFor="marketing_consent" className="ml-2 text-xs text-black/70 font-gotham leading-relaxed">
          Sunt de acord cu{" "}
          <a href="/politica-confidentialitate" className="text-black underline hover:text-black/70">
            prelucrarea datelor
          </a>{" "}
          și să primesc informații despre parteneriat. *
        </label>
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {errorMessage && (
        <div className="rounded-none border border-black p-3 sm:p-4 text-xs sm:text-sm text-black/70 font-gotham">
          {errorMessage}
        </div>
      )}

        <GlassButton
          type="submit"
          disabled={state === "loading"}
          fullWidth
          tone="aqua"
          elevation={3}
          size="lg"
          className="font-gotham font-bold uppercase tracking-wider text-white text-sm sm:text-base"
        >
          {state === "loading" ? "Se trimite..." : "Devino Partener"}
        </GlassButton>
      </form>
    </div>
  );
}


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
      contact_name: form.get("contact_name"),
      email: form.get("email"),
      phone: form.get("phone"),
      city: form.get("city"),
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
    <LiquidGlass tone="neutral" elevation={2} className="p-4 sm:p-6 md:p-8 rounded-2xl max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        <div>
        <label htmlFor="contact_name" className="block text-xs font-gotham font-semibold text-white mb-2 uppercase tracking-wider">
          Nume contact *
        </label>
        <input
          type="text"
          id="contact_name"
          name="contact_name"
          required
          placeholder="Ion Popescu"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-black border border-white/30 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-gotham font-semibold text-white mb-2 uppercase tracking-wider">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="contact@local.ro"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-black border border-white/30 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-gotham font-semibold text-white mb-2 uppercase tracking-wider">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="0712 345 678"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-black border border-white/30 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors font-gotham"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-xs font-gotham font-semibold text-white mb-2 uppercase tracking-wider">
          Oraș
        </label>
        <select
          id="city"
          name="city"
          className="w-full px-3 sm:px-4 py-3.5 sm:py-4 text-sm sm:text-base rounded-none bg-black border border-white/30 text-white focus:outline-none focus:border-white transition-colors font-gotham"
        >
          <option value="">Alege orașul...</option>
          <option value="București">București</option>
          <option value="Cluj-Napoca">Cluj-Napoca</option>
          <option value="Timișoara">Timișoara</option>
          <option value="Iași">Iași</option>
          <option value="Constanța">Constanța</option>
          <option value="Brașov">Brașov</option>
          <option value="Craiova">Craiova</option>
          <option value="Galați">Galați</option>
          <option value="Ploiești">Ploiești</option>
          <option value="Oradea">Oradea</option>
          <option value="Sibiu">Sibiu</option>
          <option value="Altul">Altul</option>
        </select>
      </div>

      <div className="flex items-start pt-1">
        <input
          type="checkbox"
          id="marketing_consent"
          name="marketing_consent"
          required
          className="mt-1 h-4 w-4 rounded-none border-white/30 bg-black text-white focus:ring-white flex-shrink-0"
        />
        <label htmlFor="marketing_consent" className="ml-2 text-xs text-white/70 font-gotham leading-relaxed">
          Sunt de acord cu{" "}
          <a href="/politica-confidentialitate" className="text-white underline hover:text-white/70">
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
        <div className="rounded-none border border-white p-3 sm:p-4 text-xs sm:text-sm text-white/70 font-gotham">
          {errorMessage}
        </div>
      )}

        <GlassButton
          type="submit"
          disabled={state === "loading"}
          fullWidth
          tone="purple"
          elevation={3}
          size="lg"
          className="font-gotham font-bold uppercase tracking-wider text-white text-sm sm:text-base"
        >
          {state === "loading" ? "Se trimite..." : "Aplică pentru parteneriat"}
        </GlassButton>

        <p className="text-xs text-white/60 text-center mt-2 font-gotham">
          Sau{" "}
          <a
            href="https://calendly.com/crwd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-white/90 transition-colors"
          >
            programează un demo
          </a>
        </p>
      </form>
    </LiquidGlass>
  );
}


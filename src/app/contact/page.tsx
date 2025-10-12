"use client";

import Hero from "@/components/Hero";
import { useState, FormEvent } from "react";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact - CRWD",
  description: "Ai întrebări? Contactează echipa CRWD. Suntem aici să te ajutăm!",
};

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
      marketing_consent: form.get("marketing_consent") === "on",
      website: form.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
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

  return (
    <>
      <Hero
        title="Contactează-ne"
        subtitle="Ai întrebări sau sugestii? Suntem aici să te ajutăm!"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informații contact</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Email</h3>
                  <a
                    href="mailto:hello@crwd.ro"
                    className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    hello@crwd.ro
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <div>
                      <a
                        href="https://linkedin.com/company/crwd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://instagram.com/crwd.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Program</h3>
                  <p className="text-gray-300">Luni - Vineri: 9:00 - 18:00</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Răspundem de obicei în maxim 24h
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🚀 Vrei să devii partener?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dacă ai o cafenea, bar sau restaurant și vrei să te alături CRWD,
                  vizitează pagina de parteneri.
                </p>
                <a
                  href="/parteneri"
                  className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                >
                  Vezi detalii parteneri
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Trimite un mesaj</h2>

              {state === "success" ? (
                <div className="rounded-lg bg-green-900/20 border border-green-700 p-6">
                  <div className="text-green-400 text-lg font-semibold mb-2">
                    ✓ Mesaj trimis!
                  </div>
                  <p className="text-gray-300 text-sm">
                    Mulțumim pentru mesaj! Te vom contacta în curând.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nume *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subiect *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={1000}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing_consent"
                      name="marketing_consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="marketing_consent" className="ml-2 text-sm text-gray-400">
                      Sunt de acord cu{" "}
                      <a href="/politica-confidentialitate" className="text-purple-400 hover:text-purple-300 underline">
                        prelucrarea datelor
                      </a>. *
                    </label>
                  </div>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {errorMessage && (
                    <div className="rounded-lg bg-red-900/20 border border-red-700 p-4 text-sm text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state === "loading" ? "Se trimite..." : "Trimite mesaj"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


"use client";

import Hero from "@/components/Hero";
import MapAnimationWhite from "@/components/MapAnimationWhite";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollRevealBlack from "@/components/ScrollRevealBlack";
import { useState, FormEvent } from "react";

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
      {/* Hero Section - BLACK */}
      <Hero
        title={
          <div className="text-center">
            <div className="text-8xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none">
              HAI SA VORBIM
            </div>
          </div>
        }
        subtitle="Ai întrebări sau sugestii? Suntem aici să te ajutăm!"
      />

      {/* Contact Section - WHITE */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-black/60 font-gotham text-xs sm:text-sm uppercase tracking-wider mb-2">
                  INFORMAȚII CONTACT
                </p>
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-left"
                  textClassName="text-black font-gotham-condensed font-bold uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  PUNE-NE INTREBARI
                </ScrollFloat>
              </div>

              <div className="max-w-xl">
                <ScrollRevealBlack
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={8}
                  blurStrength={15}
                >
                  Suntem mereu bucuroși să auzim de la tine. Fie că ești utilizator curios sau potențial partener, echipa CRWD e aici pentru tine.
                </ScrollRevealBlack>
              </div>

              <div className="space-y-6 pt-4">
                <div className="aqua-glass rounded-2xl p-6">
                  <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-3">Email</h3>
                  <a
                    href="mailto:hello@crwd.ro"
                    className="text-2xl sm:text-3xl md:text-4xl font-gotham-condensed font-bold text-white hover:text-white/80 transition-colors"
                  >
                    hello@crwd.ro
                  </a>
                </div>

                <div className="aqua-glass rounded-2xl p-6">
                  <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-3">Social Media</h3>
                  <div className="space-y-3">
                    <div>
                        <a
                          href="https://linkedin.com/company/crwd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg sm:text-xl md:text-2xl font-gotham text-white hover:text-white/80 transition-colors inline-flex items-center gap-2"
                        >
                          LinkedIn →
                        </a>
                    </div>
                    <div>
                      <a
                        href="https://instagram.com/crwd.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl md:text-2xl font-gotham text-white hover:text-white/80 transition-colors inline-flex items-center gap-2"
                      >
                        Instagram →
                      </a>
                    </div>
                  </div>
                </div>

                  <div className="aqua-glass rounded-2xl p-6">
                    <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-3">Program</h3>
                    <p className="text-white font-gotham text-lg sm:text-xl md:text-2xl mb-1">Luni - Vineri: 9:00 - 18:00</p>
                    <p className="text-white/60 font-gotham text-sm sm:text-base">
                      Răspundem de obicei în maxim 24h
                    </p>
                  </div>
              </div>

              <div className="mt-8 p-6 bg-black/5 border-2 border-black/20 rounded-2xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-gotham-condensed font-bold text-black mb-2 uppercase">
                  Vrei să devii partener?
                </h3>
                <p className="text-black/70 font-gotham text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                  Dacă ai o cafenea, bar sau restaurant și vrei să te alături CRWD, vizitează pagina de parteneri.
                </p>
                <a
                  href="/parteneri"
                  className="inline-block px-6 py-3 bg-black hover:bg-black/90 text-white font-gotham-condensed font-bold rounded-2xl transition-all text-sm sm:text-base uppercase tracking-wide"
                >
                  Vezi detalii parteneri
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="sticky top-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gotham-condensed font-bold text-black mb-6 uppercase tracking-tight">Trimite un mesaj</h2>

                {state === "success" ? (
                  <div className="rounded-2xl aqua-glass p-8">
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl font-gotham-condensed font-bold mb-3 uppercase">
                      ✓ Mesaj trimis!
                    </div>
                    <p className="text-white/80 font-gotham text-base sm:text-lg md:text-xl">
                      Mulțumim pentru mesaj! Te vom contacta în curând.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2">
                        Nume *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/30 focus:outline-none focus:border-black transition-all font-gotham text-base sm:text-lg"
                        placeholder="Numele tău"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/30 focus:outline-none focus:border-black transition-all font-gotham text-base sm:text-lg"
                        placeholder="email@exemplu.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm sm:text-base font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2">
                        Subiect *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/30 focus:outline-none focus:border-black transition-all font-gotham text-base sm:text-lg"
                        placeholder="Despre ce vrei să vorbim?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        maxLength={1000}
                        className="w-full px-4 py-4 rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/30 focus:outline-none focus:border-black transition-all resize-none font-gotham text-base sm:text-lg"
                        placeholder="Spune-ne mai multe..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketing_consent"
                        name="marketing_consent"
                        required
                        className="mt-1 h-5 w-5 rounded border-2 border-black/20 bg-white text-black focus:ring-black focus:ring-2"
                      />
                      <label htmlFor="marketing_consent" className="text-sm sm:text-base text-black/70 font-gotham leading-relaxed">
                        Sunt de acord cu{" "}
                        <a href="/politica-confidentialitate" className="text-black font-semibold underline hover:text-black/70">
                          prelucrarea datelor
                        </a>
                        . *
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
                      <div className="rounded-2xl bg-red-100 border-2 border-red-300 p-4 text-sm sm:text-base text-red-700 font-gotham">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="w-full px-8 py-4 rounded-2xl bg-black text-white font-gotham-condensed font-bold uppercase tracking-wide hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg sm:text-xl md:text-2xl"
                    >
                      {state === "loading" ? "Se trimite..." : "Trimite mesaj"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


"use client";

import Hero from "@/components/Hero";
import MapAnimationWhite from "@/components/MapAnimationWhite";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollRevealBlack from "@/components/ScrollRevealBlack";
import { useState, FormEvent, useEffect } from "react";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
        // Reset form
        e.currentTarget.reset();
        setTouched({});
      } else {
        setState("error");
        setErrorMessage(data.error || "A apărut o eroare. Încearcă din nou.");
      }
    } catch (error) {
      setState("error");
      setErrorMessage("Eroare de conexiune. Verifică internetul și încearcă din nou.");
    }
  }

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (state === "success") {
      const timer = setTimeout(() => setState("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleBlur = (fieldName: string) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  return (
    <>
      {/* Hero Section - BLACK */}
      <Hero
        title={
          <div className="text-center">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none">
              HAI SA VORBIM
            </div>
          </div>
        }
        subtitle="Ai întrebări sau sugestii? Suntem aici să te ajutăm!"
      />

      {/* Contact Categories Section - DARK GREEN */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-950 via-green-900 to-green-950 border-b border-white/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none mb-4">
              CONTACT <span className="text-green-400">US</span>
            </h2>
            <p className="text-white/70 font-gotham text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Alege categoria potrivită pentru a primi răspuns rapid
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Consumer Inquiries */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full bg-green-400/10 border-2 border-green-400/30 flex items-center justify-center group-hover:bg-green-400/20 group-hover:border-green-400/50 transition-all duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-gotham-condensed font-bold text-white uppercase tracking-tight mb-3">
                  Întrebări<br/>Utilizatori
                </h3>

                {/* Subtitle */}
                <p className="text-white/70 font-gotham text-sm sm:text-base mb-8 flex-grow">
                  Ai întrebări despre aplicație sau cum funcționează CRWD?
                </p>

                {/* Button */}
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const subjectInput = document.getElementById('subject') as HTMLInputElement;
                    if (subjectInput) subjectInput.value = 'Întrebare Utilizator';
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-3.5 sm:py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-gotham-condensed font-bold uppercase tracking-wide transition-all active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-500/30"
                >
                  <span>Trimite mesaj</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2: Restaurant/Venue Owner Inquiries */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full bg-green-400/10 border-2 border-green-400/30 flex items-center justify-center group-hover:bg-green-400/20 group-hover:border-green-400/50 transition-all duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-gotham-condensed font-bold text-white uppercase tracking-tight mb-3">
                  Întrebări<br/>Parteneri
                </h3>

                {/* Subtitle */}
                <p className="text-white/70 font-gotham text-sm sm:text-base mb-8 flex-grow">
                  Vrei să aduci localul tău în rețeaua CRWD?
                </p>

                {/* Button */}
                <a
                  href="/parteneri"
                  className="w-full px-6 py-3.5 sm:py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-gotham-condensed font-bold uppercase tracking-wide transition-all active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-500/30"
                >
                  <span>Devino partener</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3: General Support */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full bg-green-400/10 border-2 border-green-400/30 flex items-center justify-center group-hover:bg-green-400/20 group-hover:border-green-400/50 transition-all duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-gotham-condensed font-bold text-white uppercase tracking-tight mb-3">
                  Suport<br/>General
                </h3>

                {/* Subtitle */}
                <p className="text-white/70 font-gotham text-sm sm:text-base mb-8 flex-grow">
                  Colaborări, presă sau alte întrebări generale
                </p>

                {/* Button */}
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const subjectInput = document.getElementById('subject') as HTMLInputElement;
                    if (subjectInput) subjectInput.value = 'Suport General';
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-3.5 sm:py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-gotham-condensed font-bold uppercase tracking-wide transition-all active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-green-500/30"
                >
                  <span>Trimite mesaj</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section - WHITE - Mobile First Design */}
      <section id="contact-form" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Mobile-First: Form First on Mobile, Info First on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">

            {/* Contact Form - Priority on Mobile */}
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-8 space-y-6 sm:space-y-8">
                {/* Section Header */}
                <div>
                  <p className="text-black/50 font-gotham text-xs uppercase tracking-widest mb-3">
                    FORMULAR CONTACT
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-gotham-condensed font-bold text-black uppercase tracking-tight leading-tight">
                    Trimite un mesaj
                  </h2>
                </div>

                {/* Success State */}
                {state === "success" && (
                  <div className="rounded-2xl aqua-glass p-6 sm:p-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-gotham-condensed font-bold mb-2 uppercase">
                          Mesaj trimis!
                        </h3>
                        <p className="text-white/80 font-gotham text-sm sm:text-base md:text-lg leading-relaxed">
                          Mulțumim pentru mesaj! Te vom contacta în curând.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2.5"
                    >
                      Nume *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onBlur={() => handleBlur("name")}
                      aria-required="true"
                      aria-invalid={touched.name && !(document.getElementById("name") as HTMLInputElement | null)?.validity.valid}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-gotham text-base sm:text-lg min-h-[48px] touch-manipulation"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onBlur={() => handleBlur("email")}
                      aria-required="true"
                      aria-invalid={touched.email && !(document.getElementById("email") as HTMLInputElement | null)?.validity.valid}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-gotham text-base sm:text-lg min-h-[48px] touch-manipulation"
                      placeholder="ion@exemplu.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2.5"
                    >
                      Subiect *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      onBlur={() => handleBlur("subject")}
                      aria-required="true"
                      aria-invalid={touched.subject && !(document.getElementById("subject") as HTMLInputElement | null)?.validity.valid}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all font-gotham text-base sm:text-lg min-h-[48px] touch-manipulation"
                      placeholder="Întrebare despre CRWD"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-gotham font-semibold text-black/70 uppercase tracking-wider mb-2.5"
                    >
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={1000}
                      onBlur={() => handleBlur("message")}
                      aria-required="true"
                      aria-invalid={touched.message && !(document.getElementById("message") as HTMLTextAreaElement | null)?.validity.valid}
                      className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all resize-none font-gotham text-base sm:text-lg min-h-[120px] touch-manipulation"
                      placeholder="Scrie-ne mesajul tău aici..."
                    />
                    <p className="text-xs sm:text-sm text-black/40 font-gotham mt-2">
                      Maxim 1000 caractere
                    </p>
                  </div>

                  {/* Consent Checkbox - Touch Friendly */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-black/5 rounded-xl sm:rounded-2xl border border-black/10">
                    <input
                      type="checkbox"
                      id="marketing_consent"
                      name="marketing_consent"
                      required
                      aria-required="true"
                      className="mt-0.5 sm:mt-1 h-6 w-6 sm:h-5 sm:w-5 rounded border-2 border-black/30 bg-white checked:bg-black checked:border-black focus:ring-4 focus:ring-black/10 transition-all cursor-pointer touch-manipulation flex-shrink-0"
                    />
                    <label
                      htmlFor="marketing_consent"
                      className="text-sm sm:text-base text-black/70 font-gotham leading-relaxed cursor-pointer select-none"
                    >
                      Sunt de acord cu{" "}
                      <a
                        href="/politica-confidentialitate"
                        className="text-black font-semibold underline hover:text-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        prelucrarea datelor personale
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

                  {/* Error Message */}
                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-xl sm:rounded-2xl bg-red-50 border-2 border-red-200 p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-300"
                    >
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm sm:text-base text-red-700 font-gotham leading-relaxed">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button - Touch Optimized */}
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    aria-busy={state === "loading"}
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl aqua-glass text-white font-gotham-condensed font-bold uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl active:scale-[0.98] text-base sm:text-lg md:text-xl min-h-[56px] touch-manipulation flex items-center justify-center gap-3"
                  >
                    {state === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Se trimite...</span>
                      </>
                    ) : (
                      <>
                        <span>Trimite mesaj</span>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Shows After Form on Mobile */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              {/* Header Section */}
              <div>
                <p className="text-black/50 font-gotham text-xs uppercase tracking-widest mb-3">
                  INFORMAȚII CONTACT
                </p>
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-left"
                  textClassName="text-black font-gotham-condensed font-bold uppercase tracking-tight leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  PUNE-NE INTREBARI
                </ScrollFloat>
              </div>

              {/* Description */}
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

              {/* Contact Cards - Improved Mobile Spacing */}
              <div className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
                {/* Email Card */}
                <div className="aqua-glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 hover:scale-[1.02] transition-all duration-300 min-h-[80px] flex flex-col justify-center">
                  <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@crwd.ro"
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-gotham-condensed font-bold text-white hover:text-white/80 transition-colors break-all focus:outline-none focus:ring-4 focus:ring-white/20 rounded"
                  >
                    hello@crwd.ro
                  </a>
                </div>

                {/* Social Media Card */}
                <div className="aqua-glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-4">
                    Social Media
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="https://linkedin.com/company/crwd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-lg sm:text-xl md:text-2xl font-gotham text-white hover:text-white/80 transition-all inline-flex items-center gap-2 sm:gap-3 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-white/20 rounded"
                    >
                      <span>LinkedIn</span>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/crwd.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-lg sm:text-xl md:text-2xl font-gotham text-white hover:text-white/80 transition-all inline-flex items-center gap-2 sm:gap-3 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-white/20 rounded"
                    >
                      <span>Instagram</span>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="aqua-glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xs font-gotham font-semibold text-white/80 uppercase tracking-wider mb-3">
                    Program
                  </h3>
                  <p className="text-white font-gotham text-lg sm:text-xl md:text-2xl mb-2 font-semibold">
                    Luni - Vineri: 9:00 - 18:00
                  </p>
                  <p className="text-white/70 font-gotham text-sm sm:text-base">
                    Răspundem de obicei în maxim 24h
                  </p>
                </div>
              </div>

              {/* Partner CTA - Enhanced Mobile Design */}
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 md:p-7 bg-black/5 border-2 border-black/20 rounded-xl sm:rounded-2xl hover:bg-black/10 hover:border-black/30 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-gotham-condensed font-bold text-black mb-3 uppercase leading-tight">
                  Vrei să devii partener?
                </h3>
                <p className="text-black/70 font-gotham text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed">
                  Dacă ai o cafenea, bar sau restaurant și vrei să te alături CRWD, vizitează pagina de parteneri.
                </p>
                <a
                  href="/parteneri"
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 bg-black hover:bg-black/90 text-white font-gotham-condensed font-bold rounded-xl sm:rounded-2xl transition-all text-sm sm:text-base uppercase tracking-wide min-h-[48px] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-black/20 touch-manipulation"
                >
                  <span>Vezi detalii parteneri</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


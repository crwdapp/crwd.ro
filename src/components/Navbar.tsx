"use client";

import Link from "next/link";
import MapAnimation from "@/components/MapAnimation";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 overflow-hidden">
      {/* Map Animation Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <MapAnimation />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Centered on mobile, left on desktop */}
          <Link
            href="/"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-gotham-condensed font-bold text-white tracking-tight hover:text-black hover:[-webkit-text-stroke:0.5px_white] transition-all duration-300"
          >
            CRWD
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10">
            <Link
              href="/parteneri"
              className="text-white hover:text-black hover:[-webkit-text-stroke:0.5px_white] transition-all duration-300 text-xl md:text-2xl lg:text-3xl font-gotham-condensed font-bold tracking-tight uppercase"
            >
              Parteneri
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-black hover:[-webkit-text-stroke:0.5px_white] transition-all duration-300 text-xl md:text-2xl lg:text-3xl font-gotham-condensed font-bold tracking-tight uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-white/70 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4 items-center">
              <Link
                href="/parteneri"
                className="text-white hover:text-black hover:[-webkit-text-stroke:0.5px_white] transition-all duration-300 text-xl sm:text-2xl font-gotham-condensed font-bold tracking-tight uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Parteneri
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-black hover:[-webkit-text-stroke:0.5px_white] transition-all duration-300 text-xl sm:text-2xl font-gotham-condensed font-bold tracking-tight uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-6xl md:text-6xl font-gotham-condensed font-bold text-white mb-3 md:mb-4">
              CRWD
            </h3>
            <p className="text-white/50 text-sm md:text-base font-gotham max-w-xs mx-auto lg:mx-0">
              Platforma care conectează oamenii cu cele mai interesante locuri din oraș.
            </p>
          </div>

          {/* Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/parteneri" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Parteneri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-confidentialitate" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Termeni și condiții
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-base md:text-lg uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:office@crwd.ro" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  office@crwd.ro
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/crwd.ro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@crwd.ro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/crwd.ro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h3V8.5C10 6.57 11.57 5 13.5 5H17v4h-3a1 1 0 00-1 1V10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm md:text-base font-gotham">
          <p>&copy; {new Date().getFullYear()} CRWD. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}


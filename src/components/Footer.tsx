import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-gotham-condensed font-bold text-white mb-3 md:mb-4">
              CRWD
            </h3>
            <p className="text-white/50 text-sm md:text-base font-gotham max-w-xs mx-auto lg:mx-0">
              Platforma care conectează oamenii cu cele mai interesante locuri din oraș.
            </p>
          </div>

          {/* Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-sm uppercase tracking-wider">Navigare</h4>
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
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-sm uppercase tracking-wider">Legal</h4>
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
              <li>
                <Link href="/cookies" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  Politica de cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-gotham-condensed font-semibold mb-3 md:mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@crwd.ro" className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors">
                  hello@crwd.ro
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/crwd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/crwd.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm md:text-base font-gotham transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm md:text-base font-gotham">
          <p>&copy; {new Date().getFullYear()} CRWD. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}


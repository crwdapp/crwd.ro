import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Cum folosește CRWD cookies și tehnologii similare.",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Politica de cookies</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Ce sunt cookies?</h2>
            <p>
              Cookies sunt fișiere text mici stocate pe dispozitivul tău când vizitezi un site web.
              Ele ajută site-ul să-și &ldquo;amintească&rdquo; preferințele tale și să îmbunătățească experiența
              de navigare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Ce cookies folosim?</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1. Cookies esențiale</h3>
            <p>
              Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Cookie-uri de sesiune pentru securitate</li>
              <li>Cookie-uri pentru preferințe de navigare</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2. Cookies de analiză</h3>
            <p>
              Ne ajută să înțelegem cum vizitatorii folosesc site-ul nostru.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Plausible Analytics (respectă privacitatea, fără identificare personală)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3. Cookies funcționale</h3>
            <p>
              Îmbunătățesc experiența ta pe site, reținând alegerile tale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Servicii terțe</h2>
            <p>Folosim următoarele servicii care pot seta cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Plausible Analytics</strong> - pentru statistici anonime de trafic
                (nu folosește cookies personale)
              </li>
              <li>
                <strong>Vercel</strong> - pentru hosting și optimizare performanță
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Gestionarea cookies</h2>
            <p>
              Poți controla și șterge cookies prin setările browserului tău:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Chrome</strong>: Settings → Privacy and security → Cookies
              </li>
              <li>
                <strong>Firefox</strong>: Options → Privacy & Security → Cookies
              </li>
              <li>
                <strong>Safari</strong>: Preferences → Privacy → Cookies
              </li>
              <li>
                <strong>Edge</strong>: Settings → Cookies and site permissions
              </li>
            </ul>
            <p className="mt-4 text-yellow-400">
              Atenție: Dezactivarea cookies poate afecta funcționalitatea site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Actualizări</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică. Te încurajăm să verifici
              periodic această pagină pentru a fi la curent cu eventualele modificări.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact</h2>
            <p>Pentru întrebări despre cookies, contactează-ne la:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: <a href="mailto:privacy@crwd.ro" className="text-purple-400 hover:text-purple-300 underline">privacy@crwd.ro</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


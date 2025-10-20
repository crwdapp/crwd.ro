import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termeni și condiții de utilizare CRWD.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 font-special-gothic-condensed">Termeni și condiții</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">1. Acceptarea termenilor</h2>
            <p>
              Prin accesarea și utilizarea site-ului CRWD (&ldquo;Serviciul&rdquo;), acceptați să fiți
              obligat de acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni,
              vă rugăm să nu utilizați Serviciul.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">2. Descrierea serviciului</h2>
            <p>
              CRWD este o platformă în curs de dezvoltare care va conecta utilizatorii cu
              cafenele, baruri și restaurante din România.
            </p>
            <p>
              În prezent, oferim înscrierea pe waitlist pentru early access la platformă.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">3. Înregistrare și cont</h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3 font-special-gothic-condensed">3.1. Waitlist</h3>
            <p>
              Prin înscrierea pe waitlist, ne furnizați adresa de email și alte informații
              opționale. Vă angajați să furnizați informații corecte și actuale.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3 font-special-gothic-condensed">3.2. Parteneri</h3>
            <p>
              Prin aplicarea ca partener, furnizați informații despre afacerea dumneavoastră.
              Ne rezervăm dreptul de a accepta sau refuza orice aplicație de parteneriat.
            </p>
            <p className="mt-2">
              Serviciile nu vizează în mod special persoanele sub 16 ani. Nu colectăm în mod
              intenționat date ale minorilor. Pentru detalii privind prelucrarea datelor consultați
              <a href="/politica-confidentialitate" className="underline text-purple-400 hover:text-purple-300"> Politica de confidențialitate</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">4. Utilizarea serviciului</h2>
            <p>Vă angajați să:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nu folosiți Serviciul în scopuri ilegale</li>
              <li>Nu transmiteți spam sau conținut nedorit</li>
              <li>Nu încercați să compromiteți securitatea Serviciului</li>
              <li>Nu furnizați informații false sau înșelătoare</li>
            </ul>
            <p className="mt-2">
              Este interzisă orice încercare de inginerie inversă, scrapping excesiv sau utilizare a
              serviciului în moduri care afectează integritatea și disponibilitatea acestuia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">5. Proprietate intelectuală</h2>
            <p>
              Tot conținutul din cadrul Serviciului (texte, grafice, logo-uri, imagini, cod)
              este proprietatea CRWD și este protejat de legile dreptului de autor din România
              și internaționale.
            </p>
            <p className="mt-2">
              Nu dobândiți niciun drept de proprietate asupra conținutului. Orice feedback transmis
              poate fi utilizat de CRWD pentru îmbunătățirea serviciilor, fără obligația de
              compensare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">6. Confidențialitate</h2>
            <p>
              Utilizarea datelor dumneavoastră personale este guvernată de{" "}
              <a href="/politica-confidentialitate" className="text-purple-400 hover:text-purple-300 underline">
                Politica noastră de confidențialitate
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">7. Limitarea răspunderii</h2>
            <p>
              CRWD nu este responsabil pentru:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orice daune directe, indirecte sau consecvente rezultate din utilizarea Serviciului</li>
              <li>Întreruperi temporare ale Serviciului</li>
              <li>Informații furnizate de utilizatori sau parteneri</li>
            </ul>
            <p className="mt-4">
              Serviciul este furnizat &ldquo;ca atare&rdquo; fără nicio garanție expresă sau implicită.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">8. Modificări ale serviciului</h2>
            <p>
              Ne rezervăm dreptul de a modifica, suspenda sau întrerupe orice parte a Serviciului
              în orice moment, fără notificare prealabilă.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">9. Reziliere</h2>
            <p>
              Ne rezervăm dreptul de a rezilia sau suspenda accesul dumneavoastră la Serviciu
              în orice moment, fără notificare prealabilă, pentru încălcarea acestor termeni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">10. Legea aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legile României. Orice dispută va fi soluționată
              de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">11. Modificări ale termenilor</h2>
            <p>
              Ne rezervăm dreptul de a actualiza acești termeni în orice moment. Modificările
              vor intra în vigoare imediat după publicarea pe site.
            </p>
            <p>
              Continuarea utilizării Serviciului după modificări constituie acceptarea noilor termeni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4 font-special-gothic-condensed">12. Contact</h2>
            <p>Pentru întrebări despre acești termeni, contactați-ne la:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: <a href="mailto:office@crwd.ro" className="text-purple-400 hover:text-purple-300 underline">office@crwd.ro</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


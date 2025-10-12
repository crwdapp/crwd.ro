import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Politica de confidențialitate CRWD - Cum prelucrăm și protejăm datele tale personale.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          Politica de confidențialitate
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introducere</h2>
            <p>
              CRWD (&ldquo;noi&rdquo;, &ldquo;nouă&rdquo; sau &ldquo;nostru&rdquo;) respectă confidențialitatea utilizatorilor
              (&ldquo;tu&rdquo;, &ldquo;dumneavoastră&rdquo;) și se angajează să protejeze datele personale pe care
              le colectăm prin intermediul site-ului nostru web și al aplicației.
            </p>
            <p>
              Această politică de confidențialitate explică ce date colectăm, cum le folosim,
              cu cine le împărtășim și drepturile tale în legătură cu aceste date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              2. Date pe care le colectăm
            </h2>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1. Date furnizate direct</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresa de email</li>
              <li>Nume (pentru parteneri și formular de contact)</li>
              <li>Telefon (opțional, pentru parteneri)</li>
              <li>Orașul în care te afli</li>
              <li>Preferințele tale (tipul de băutură preferat)</li>
              <li>Informații despre afacere (pentru parteneri: CUI, nume firmă, categorie local)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2. Date colectate automat</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresa IP</li>
              <li>Tipul de browser și dispozitiv</li>
              <li>Pagini vizitate și timpul petrecut pe site</li>
              <li>Data și ora vizitei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              3. Cum folosim datele
            </h2>
            <p>Folosim datele colectate pentru:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A-ți trimite informații despre lansarea platformei CRWD</li>
              <li>A-ți oferi recomandări personalizate (când platforma va fi lansată)</li>
              <li>A comunica cu tine despre aplicația ta ca partener</li>
              <li>A îmbunătăți serviciile noastre și experiența utilizatorului</li>
              <li>A respecta obligațiile legale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              4. Baza legală pentru prelucrare
            </h2>
            <p>Prelucrăm datele tale personale pe baza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consimțământului tău</strong> - când te înscrii pe waitlist sau completezi
                formulare
              </li>
              <li>
                <strong>Interesului nostru legitim</strong> - pentru a îmbunătăți serviciile și
                a comunica despre produsele noastre
              </li>
              <li>
                <strong>Executarea unui contract</strong> - pentru parteneri, în scopul furnizării
                serviciilor
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              5. Partajarea datelor
            </h2>
            <p>Partajăm datele tale doar cu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Furnizori de servicii</strong>: Brevo (email marketing), Supabase (stocare date),
                Vercel (hosting)
              </li>
              <li>
                <strong>Autorități</strong>: când suntem obligați legal să facem acest lucru
              </li>
            </ul>
            <p className="mt-4">
              Nu vindem și nu închiriem niciodată datele tale personale către terți.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              6. Drepturile tale (GDPR)
            </h2>
            <p>Conform GDPR, ai următoarele drepturi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dreptul de acces</strong> - poți solicita o copie a datelor tale</li>
              <li><strong>Dreptul la rectificare</strong> - poți corecta datele incorecte</li>
              <li><strong>Dreptul la ștergere</strong> - poți cere ștergerea datelor</li>
              <li><strong>Dreptul la restricționare</strong> - poți limita prelucrarea</li>
              <li><strong>Dreptul la portabilitate</strong> - poți primi datele într-un format structurat</li>
              <li><strong>Dreptul la opoziție</strong> - te poți opune prelucrării</li>
              <li><strong>Retragerea consimțământului</strong> - poți retrage consimțământul oricând</li>
            </ul>
            <p className="mt-4">
              Pentru a-ți exercita drepturile, contactează-ne la{" "}
              <a href="mailto:privacy@crwd.ro" className="text-purple-400 hover:text-purple-300 underline">
                privacy@crwd.ro
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              7. Păstrarea datelor
            </h2>
            <p>
              Păstrăm datele tale atât timp cât este necesar pentru scopurile descrise în această
              politică sau cât timp este necesar din punct de vedere legal.
            </p>
            <p>
              Datele de pe waitlist vor fi păstrate până la lansarea platformei și 12 luni după,
              după care vor fi șterse dacă nu te-ai înregistrat în platformă.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Securitate</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale
              împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Cookies</h2>
            <p>
              Site-ul nostru folosește cookies pentru analiză și îmbunătățirea experienței.
              Pentru detalii, consultă{" "}
              <a href="/cookies" className="text-purple-400 hover:text-purple-300 underline">
                Politica de cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică. Modificările vor fi publicate
              pe această pagină cu data actualizării.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Contact</h2>
            <p>
              Pentru întrebări despre această politică sau despre datele tale personale,
              contactează-ne:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: <a href="mailto:privacy@crwd.ro" className="text-purple-400 hover:text-purple-300 underline">privacy@crwd.ro</a></li>
              <li>Email general: <a href="mailto:hello@crwd.ro" className="text-purple-400 hover:text-purple-300 underline">hello@crwd.ro</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


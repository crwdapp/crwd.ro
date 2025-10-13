'use client';

import Hero from "@/components/Hero";
import BenefitCard from "@/components/BenefitCard";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import LeadFormVenue from "@/components/LeadFormVenue";
import MagneticPeopleAnimation from "@/components/MagneticPeopleAnimation";
import TiltedCard from "@/components/TiltedCard";
import MessageLoop from "@/components/MessageLoop";

const benefits = [
  {
    icon: "📈",
    title: "Crește traficul",
    description: "Atragem clienți noi către localul tău prin recomandări personalizate și notificări targetate.",
  },
  {
    icon: "🎯",
    title: "Audiență calificată",
    description: "Ajungi la clienți care caută exact tipul de experiență pe care o oferi tu.",
  },
  {
    icon: "💰",
    title: "Zero cost inițial",
    description: "Fără taxe de înscriere. Modelul nostru se bazează pe succes partajat.",
  },
  {
    icon: "📊",
    title: "Analytics detaliat",
    description: "Dashboard complet cu statistici despre vizitatori, conversii și feedback.",
  },
  {
    icon: "⚡",
    title: "Integrare rapidă",
    description: "Setup în mai puțin de 24h. Nu necesită echipament sau training complex.",
  },
  {
    icon: "🤝",
    title: "Suport dedicat",
    description: "Echipa CRWD te ajută să optimizezi prezența și să maximizezi rezultatele.",
  },
];

const steps = [
  {
    title: "Aplică în câteva minute",
    description: "Completează datele localului – nume, contact și oraș. Echipa noastră aprobă noii parteneri în cel mult 48 de ore.",
    icon: "📝"
  },
  {
    title: "Configurează-ți profilul",
    description: "Adaugă meniul de băuturi și evenimentele tale. Le vom afișa direct în aplicația CRWD, ca să fii descoperit de oameni din zonă.",
    icon: "⚙️"
  },
  {
    title: "Primește comenzi fără bătăi de cap",
    description: "Clienții scanează tag-ul NFC CRWD de la bar și comandă direct de pe telefon. Fără echipamente noi, fără comisioane.",
    icon: "📱"
  },
  {
    title: "Încasează și atrage mai mulți clienți",
    description: "Păstrezi 100% din vânzări. Vezi statistici, ore de vârf și clienți recurenți — și adu mai mult trafic prin evenimentele listate în aplicație.",
    icon: "💰"
  },
];

export default function ParteneriPage() {
  return (
    <>
      {/* Hero Section - BLACK with Magnetic People Animation */}
      <Hero
        title="CREȘTE-ȚI AFACEREA CU CRWD"
        subtitle="Alătură-te rețelei de cafenele, baruri și restaurante care atrag clienți prin CRWD. Zero cost inițial, suport dedicat, audiență calificată."
        backgroundAnimation={<MagneticPeopleAnimation />}
      />

      {/* How It Works - LIQUID GLASS CARDS */}
      <section className="py-20 md:py-32 px-4 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black mb-6 uppercase tracking-tight">
              How It Works Pentru Parteneri
            </h2>
            <p className="text-black/70 font-gotham text-lg max-w-2xl mx-auto leading-relaxed">
              Patru pași simpli pentru a te alătura rețelei noastre și a începe să primești comenzi
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-12 h-px bg-black/20 z-0"></div>
                )}
                
                {/* Tilted Card with Aqua Glass */}
                <TiltedCard
                  imageSrc=""
                  altText={step.title}
                  captionText={step.title}
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-0 aqua-glass rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="text-5xl md:text-6xl mb-4 text-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-gotham-condensed font-bold text-black mb-3 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-black/70 font-gotham text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infinite Scrolling Messages */}
      <section className="py-4 px-4 bg-black border-y border-white/10">
        <MessageLoop 
          messages={[
            "Plătești promovare, dar clienții nu vin?",
            "Vrei mai mult trafic, dar fără costuri în plus?",
            "Vrei să știi ce merge și când?"
          ]}
          className="messageloop--fade"
        />
      </section>

      

      {/* 6 Cards Section - 7 Shape Pattern */}
      <section className="py-20 md:py-32 px-4 bg-black border-b border-white/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-white mb-6 uppercase tracking-tight">
              De ce să devii partener CRWD?
            </h2>
            <p className="text-white/70 font-gotham text-lg max-w-2xl mx-auto leading-relaxed">
              Descoperă avantajele care fac CRWD alegerea perfectă pentru afacerea ta
            </p>
          </div>

          {/* 3-Column Layout with Image Placeholder */}
          <div className="flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16">
            {/* Top Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 w-full max-w-6xl">
              {/* Left Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '0ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">📈</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Crește Traficul
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Atragem clienți noi către localul tău prin recomandări personalizate
                  </p>
                </div>
              </div>
              
              {/* Middle Column - Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-white/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm font-gotham">Image Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Right Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '200ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🎯</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Audiență Calificată
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Ajungi la clienți care caută exact tipul de experiență pe care o oferi
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 w-full max-w-6xl">
              {/* Left Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '400ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">💰</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Zero Cost Inițial
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Fără taxe de înscriere. Modelul nostru se bazează pe succes partajat
                  </p>
                </div>
              </div>
              
              {/* Middle Column - Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-white/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm font-gotham">Image Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Right Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '600ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">📊</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Analytics Detaliat
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Dashboard complet cu statistici despre vizitatori și conversii
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 w-full max-w-6xl">
              {/* Left Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '800ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">⚡</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Integrare Rapidă
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Setup în mai puțin de 24h. Nu necesită echipament complex
                  </p>
                </div>
              </div>
              
              {/* Middle Column - Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-white/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm font-gotham">Image Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Right Card */}
              <div 
                className="group relative"
                style={{ animationDelay: '1000ms' }}
              >
                <div className="aqua-glass rounded-2xl p-4 sm:p-6 md:p-8 w-full h-40 sm:h-48 md:h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 opacity-0 animate-fade-in-up">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🤝</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-gotham-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                    Suport Dedicat
                  </h3>
                  <p className="text-white/70 font-gotham text-xs sm:text-sm leading-relaxed">
                    Echipa CRWD te ajută să optimizezi prezența și maximizezi rezultatele
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animation Styles */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Benefits Section - WHITE */}
      <section className="py-16 md:py-32 px-4 bg-white border-b border-black/10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 md:mb-20">
            <p className="text-black/30 font-gotham-condensed uppercase tracking-widest text-xs mb-4">
              Beneficii
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black mb-6 uppercase tracking-tight">
              Pentru parteneri
            </h2>
            <p className="text-black/50 max-w-2xl font-gotham text-base md:text-lg leading-relaxed">
              CRWD nu e doar o platformă de descoperire. E un parteneriat real care te ajută să atragi
              mai mulți clienți și să construiești o comunitate loială.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {benefits.map((benefit, index) => (
              <div key={index} className="group border border-black/10 p-6 md:p-8 hover:border-black/30 transition-all duration-300 bg-white">
                <div className="text-black/20 font-gotham-condensed text-sm mb-6 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-5xl md:text-6xl mb-6 grayscale">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-gotham-condensed font-bold text-black mb-4 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-black/50 font-gotham leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
                <div className="h-px bg-black/0 group-hover:bg-black/20 transition-all duration-300 mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats/Estimations - WHITE */}
      <section className="py-16 md:py-32 px-4 bg-white border-b border-black/10">
        <div className="container mx-auto max-w-6xl">
          <div className="border-2 border-black p-8 md:p-12 lg:p-16 bg-white">
            <div className="text-center mb-12 md:mb-20">
              <p className="text-black/30 font-gotham-condensed uppercase tracking-widest text-xs mb-4">
                Impact
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black uppercase tracking-tight">
                Rezultate estimate
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div className="text-center border border-black/10 p-6 md:p-8 hover:border-black/30 transition-colors">
                <div className="text-5xl md:text-6xl lg:text-7xl font-gotham-condensed font-bold text-black mb-4">
                  +30%
                </div>
                <p className="text-black font-gotham-condensed uppercase tracking-wider text-xs md:text-sm mb-2">Creștere trafic</p>
                <p className="text-[10px] md:text-xs text-black/30 font-gotham">în primele 3 luni</p>
              </div>
              <div className="text-center border border-black/10 p-6 md:p-8 hover:border-black/30 transition-colors">
                <div className="text-5xl md:text-6xl lg:text-7xl font-gotham-condensed font-bold text-black mb-4">
                  500+
                </div>
                <p className="text-black font-gotham-condensed uppercase tracking-wider text-xs md:text-sm mb-2">Clienți noi</p>
                <p className="text-[10px] md:text-xs text-black/30 font-gotham">în medie per local</p>
              </div>
              <div className="text-center border border-black/10 p-6 md:p-8 hover:border-black/30 transition-colors">
                <div className="text-5xl md:text-6xl lg:text-7xl font-gotham-condensed font-bold text-black mb-4">
                  24h
                </div>
                <p className="text-black font-gotham-condensed uppercase tracking-wider text-xs md:text-sm mb-2">Setup rapid</p>
                <p className="text-[10px] md:text-xs text-black/30 font-gotham">de la aplicare la activare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - BLACK */}
      <section className="py-16 md:py-32 px-4 bg-black border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <div className="border-2 border-white p-8 md:p-12 lg:p-16 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-white text-center mb-6 uppercase tracking-tight leading-none">
                Pregătit să crești?
              </h2>
              <p className="text-white/70 text-center mb-8 md:mb-12 font-gotham text-base md:text-lg">Completează formularul sau programează un demo pentru a discuta detaliile.</p>
              <LeadFormVenue />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - WHITE */}
      <section className="py-16 md:py-32 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-black/10 p-8 md:p-12 text-center bg-white">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-gotham-condensed font-bold text-black mb-6 uppercase tracking-tight">
              Early Access Exclusive
            </h2>
            <p className="text-black/70 mb-8 font-gotham max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Localurile care se alătură în perioada early access vor primi vizibilitate
              premium, suport personalizat și zero comisioane în primele 6 luni.
            </p>
            <div className="inline-flex items-center gap-3 border border-black/30 px-4 md:px-6 py-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-black"></span>
              </span>
              <span className="text-xs md:text-sm text-black font-gotham-condensed uppercase tracking-wider">Locuri limitate</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


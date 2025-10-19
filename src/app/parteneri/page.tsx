'use client';

import Image from 'next/image';
import Hero from "@/components/Hero";
import BenefitCard from "@/components/BenefitCard";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import LeadFormVenue from "@/components/LeadFormVenue";
import MagneticPeopleAnimation from "@/components/MagneticPeopleAnimation";
import TiltedCard from "@/components/TiltedCard";
import MessageLoop from "@/components/MessageLoop";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollRevealWhite from "@/components/ScrollRevealWhite";
import ScrollRevealBlack from "@/components/ScrollRevealBlack";
import BlurText from "@/components/BlurText";
import MapAnimationWhite from "@/components/MapAnimationWhite";
import MapAnimation from "@/components/MapAnimation";
import BenefitsTabbed from "@/components/BenefitsTabbed";
import RotatingText from "@/components/RotatingText";

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
        title={
          <div className="text-center">
            <div className="text-8xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none">CLIENTI NOI</div>
            <div className="flex justify-center mt-2 sm:mt-3 md:mt-4">
              <RotatingText
                texts={['in fiecare zi', 'fara comision']}
                mainClassName="inline-block text-black bg-gradient-to-r from-green-700/80 via-green-800/60 to-green-900/50 backdrop-blur-md border-2 border-green-700/90 font-gotham-condensed font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-3xl text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        }
        subtitle={`Tu faci atmosfera, noi aducem oamenii care o caută. Vizibilitate, evenimente, trafic real.`}
        backgroundAnimation={<MapAnimation />}
      >
        <div className="[&_input]:bg-white [&_input]:border-black/30 [&_input]:text-black [&_input]:placeholder-black/30 [&_input:focus]:border-black [&_select]:bg-white [&_select]:border-black/30 [&_select]:text-black [&_select:focus]:border-black [&_label]:text-black [&_button]:bg-black [&_button]:text-white [&_button:hover]:bg-black/90 [&_a]:text-black [&_div[class*='border-white']]:border-black">
          <LeadFormVenue />
        </div>
      </Hero>

      {/* Benefits Tabbed Section */}
      <BenefitsTabbed />

      {/* How It Works - LIQUID GLASS CARDS */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <p className="text-black/60 font-gotham text-xs text-center sm:text-sm uppercase tracking-wider">
            CUM FUNCȚIONEAZĂ
          </p>
          <div className="text-center mb-12 sm:mb-16 md:mb-20 mt-0">
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="text-center"
              textClassName="text-black font-gotham-condensed font-bold uppercase tracking-tight leading-none text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              PENTRU PARTENERI
            </ScrollFloat>
            <div className="max-w-3xl mx-auto mt-6">
              <ScrollRevealBlack
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={8}
                blurStrength={15}
              >
                Patru pași simpli pentru a te alătura rețelei noastre și a începe să primești comenzi
              </ScrollRevealBlack>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
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
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-black/20 z-0"></div>
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
                    <div className="absolute inset-0 aqua-glass rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 text-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-special-gothic-condensed font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide text-center" style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                      }}>
                        <BlurText
                          text={step.title}
                          delay={100}
                          animateBy="words"
                          direction="top"
                          className="text-center"
                        />
                      </h3>
                      <p className="text-white font-gotham text-sm md:text-base leading-relaxed text-center" style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                      }}>
                        <BlurText
                          text={step.description}
                          delay={150}
                          animateBy="words"
                          direction="bottom"
                          className="text-center"
                        />
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

      

      {/* CRWD For Partners - BLACK */}
      <section id="crwd-for-partners" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-center order-2 lg:order-1">
              <div className="relative w-64 h-[500px] sm:w-80 sm:h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(255,255,255,0.5),0_0_0_1px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Partner Screenshot Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-blue-900/20 flex items-center justify-center">
                    <div className="text-center text-black/60">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-sm font-gotham">Partner Dashboard</p>
                    </div>
                  </div>

                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-full"></div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-black rounded-full"></div>
                </div>

                {/* Phone Buttons */}
                <div className="absolute -left-1 top-16 w-1 h-8 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-44 w-1 h-12 bg-gray-400 rounded-l-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white/60 font-gotham text-xs sm:text-sm uppercase tracking-wider">
                  Beneficii
                </p>
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-center lg:text-left"
                  textClassName="text-white font-gotham-condensed font-bold uppercase tracking-tight leading-none text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                  DE CE CRWD?
                </ScrollFloat>
              </div>

              
              {/* 6 Key Points */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">🛡️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Zero risc financiar</h4>
                    <p className="text-white/70 font-gotham text-sm">Plătești doar pentru băuturile revendicate prin aplicație. Fără abonamente lunare, fără comisioane, fără surprize.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Date reale, în timp real</h4>
                    <p className="text-white/70 font-gotham text-sm">Primești un dashboard complet cu statistici despre clienți, ore de vârf și performanța meniului — tot ce ai nevoie ca să iei decizii inteligente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Crește traficul din prima lună</h4>
                    <p className="text-white/70 font-gotham text-sm">Vezi rezultate rapid. În doar câteva săptămâni, localul tău atrage clienți noi, mai ales în orele moarte ale zilei.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Clienți de calitate</h4>
                    <p className="text-white/70 font-gotham text-sm">CRWD aduce tineri activi, conectați și loiali — oameni care ies des și apreciază localurile cu vibe.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Optimizare automată cu AI</h4>
                    <p className="text-white/70 font-gotham text-sm">Sistemul analizează comportamentul clienților și îți recomandă orele, ofertele și produsele care aduc cel mai mult profit.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-gotham-condensed font-bold text-lg mb-1">Fără integrări POS. Fără echipamente speciale.</h4>
                    <p className="text-white/70 font-gotham text-sm">Totul funcționează direct din aplicația CRWD — rapid, sigur și ușor de folosit pentru echipa ta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  


      {/* CTA Section - BLACK */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-black border-b border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-12 lg:p-16 bg-black relative overflow-hidden" style={{
            boxShadow: '0 4px 16px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-center"
                  textClassName="text-white font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-3xl md:text-4xl lg:text-6xl"
                >
                  PREGĂTIT SĂ CREȘTI?
                </ScrollFloat>
              </div>
              <p className="text-white/70 text-center mb-8 md:mb-12 font-gotham text-base md:text-lg">Completează formularul sau programează un demo pentru a discuta detaliile.</p>
              <div className="[&_input]:bg-black [&_input]:border-white/30 [&_input]:text-white [&_input]:placeholder-white/30 [&_input:focus]:border-white [&_select]:bg-black [&_select]:border-white/30 [&_select]:text-white [&_select:focus]:border-white [&_label]:text-white [&_button]:bg-white [&_button]:text-black [&_button:hover]:bg-white/90 [&_a]:text-white [&_div[class*='border-black']]:border-white">
                <LeadFormVenue />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      
    </>
  );
}


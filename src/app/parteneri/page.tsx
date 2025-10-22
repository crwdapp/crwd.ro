'use client';

import Image from 'next/image';
import Hero from "@/components/Hero";
import LeadFormVenue from "@/components/LeadFormVenue";
import TiltedCard from "@/components/TiltedCard";
import MessageLoop from "@/components/MessageLoop";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollRevealBlack from "@/components/ScrollRevealBlack";
import ScrollRevealWhite from "@/components/ScrollRevealWhite";
import BlurText from "@/components/BlurText";
import SplitText from "@/components/SplitText";
import MapAnimationWhite from "@/components/MapAnimationWhite";
import MapAnimation from "@/components/MapAnimation";
import BenefitsTabbed from "@/components/BenefitsTabbed";
import RotatingText from "@/components/RotatingText";
import FAQ from "@/components/FAQ";



const steps = [
  {
    title: "Aplică în câteva minute",
    description: "Completează datele localului – nume, date de contact și oraș. Îți trimitem un NFC pe care il pui in localul tău.",
    icon: "/images/hiw-venues-1.png"
  },
  {
    title: "Configurează-ți profilul",
    description: "Adaugă meniul de băuturi și evenimentele tale. Le vom afișa direct în aplicația CRWD, ca să fii descoperit de oameni din zonă.",
    icon: "/images/hiw-venues-2.png"
  },
  {
    title: "Comenzi prin aplicație",
    description: "Clienții scanează tag-ul NFC și comandă direct de pe telefon. Comanda iți intră in aplicație, o onorezi și o încasezi direct cu POS-ul tău.",
    icon: "/images/hiw-venues-3.png"
  },
  {
    title: "Atrage mai mulți clienți",
    description: "Păstrezi 100% din vânzări. Vezi statistici, ore de vârf și clienți recurenți — și adu mai mult trafic prin evenimentele listate în aplicație.",
    icon: "/images/hiw-venues-4.png"
  },
];

const faqItems = [
  {
    question: "Cât costă să devin partener CRWD?",
    answer: "Absolut nimic! Nu plătești comisioane, abonamente lunare sau taxe de înregistrare. CRWD iți aduce oamenii, tu oferi băuturile reduse."
  },
  {
    question: "De ce echipamente am nevoie?",
    answer: "„Ai nevoie doar de tag-ul NFC, pe care îl primești gratuit de la noi. Nu ai nevoie de echipamente noi sau integrări POS. Aplicația funcționează pe baza unui link și poate fi accesată de pe orice dispozitiv.”"
  },
  {
    question: "Ce este un NFC tag?",
    answer: "NFC-ul este un cip electronic pe care îl plasezi în localul tău. Prin intermediul lui ne asigurăm că primești comenzi doar de la clienții care se află fizic în local. Clienții îl scanează pentru a activa funcția de comandă în aplicație."
  },
  {
    question: "Cum funcționează sistemul de plată?",
    answer: "Clienții plătesc 50% din prețul băuturii pe care o setezi în aplicație, direct în POS-ul tău. Se generează automat un număr de comandă, care îți apare imediat în aplicație. Cu acest număr, clientul vine la tine pentru a achita și a primi băutura."
  },
  {
    question: "Pot să setez propriile reduceri?",
    answer: "Da! Ai posibilitatea să adaugi mai multe meniuri, fiecare cu tipul lui de băuturi, potrivit pentru fiecare zi sau eveniment."
  },
  {
    question: "Cum pot urmări performanța?",
    answer: "Ai acces la un dashboard complet cu statistici în timp real: numărul de comenzi, orele de vârf, băuturile populare și clienții recurenți."
  },
  {
    question: "5 băuturi reduse pe zi? Nu e mult?",
    answer: "„Pentru un singur local poate părea mult, însă pentru altele poate fi o nouă tactică de marketing. Nu ești obligat să le oferi pe toate! Fiecare tip de local are un minim recomandat. Dacă ai o cafenea, știm că nu poți oferi 5 băuturi pe zi, per client, dar o băutură este chiar recomandată. Iar dacă ai un pub și te-ai săturat ca singurele zile aglomerate să fie în weekend, oferind mai multe băuturi reduse poți atrage clienți și în restul zilelor."
  }
];

export default function ParteneriPage() {
  return (
    <>
      {/* Hero Section - BLACK with Map Animation */}
      <Hero
        title={
          <div className="text-center">
            <div className="text-8xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none">CLIENTI NOI</div>
            <div className="flex justify-center mt-2 sm:mt-3 md:mt-4">
              <RotatingText
                texts={['zilnic', 'gratuit', 'garantat']}
                mainClassName="inline-block text-white aqua-glass font-gotham-condensed font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-3xl text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
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
        <LeadFormVenue />
      </Hero>
      {/* CRWD For Partners - WHITE */}
      <section id="crwd-for-partners" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white flex items-center relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-center order-1 lg:order-1">
              <div className="relative w-64 h-[500px] sm:w-80 sm:h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
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
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 pb-4 sm:pb-0">
              <p className="text-black/60 font-gotham text-xs text-center sm:text-sm uppercase tracking-wider">
                  WHY YOU SHOULD
                </p>
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-center lg:text-left"
                  textClassName="text-black font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-6xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl"
                >
                  GROW WITH CRWD
                </ScrollFloat>
              </div>

              
              {/* 6 Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mt-1">
                    <Image src="/images/1-local.png" alt="Date reale" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-special-gothic-condensed font-bold text-xl mb-1 uppercase text-left">Date reale, în timp real</h4>
                    <p className="text-black/70 font-gotham text-md text-left">Primești un dashboard complet cu statistici despre clienți, ore de vârf și performanța meniului — tot ce ai nevoie ca să iei decizii inteligente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mt-1">
                    <Image src="/images/2-local.png" alt="Crește traficul" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-special-gothic-condensed font-bold text-xl mb-1 uppercase text-left">Crește traficul din prima lună</h4>
                    <p className="text-black/70 font-gotham text-md text-left">Vezi rezultate rapid. În doar câteva săptămâni, localul tău atrage clienți noi.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mt-1">
                    <Image src="/images/3-local.png" alt="Clienți de calitate" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-special-gothic-condensed font-bold text-xl mb-1 uppercase text-left">Clienți de calitate</h4>
                    <p className="text-black/70 font-gotham text-md text-left">CRWD aduce tineri activi, conectați și loiali — oameni care ies des și apreciază localurile de calitate.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mt-1">
                    <Image src="/images/4-local.png" alt="Zero risc financiar" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-special-gothic-condensed font-bold text-xl mb-1 uppercase text-left">Zero risc financiar</h4>
                    <p className="text-black/70 font-gotham text-md text-left">Plătești doar pentru băuturile revendicate prin aplicație. Fără abonamente lunare, fără comisioane, fără surprize.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden mt-1">
                    <Image src="/images/5-local.png" alt="Fără integrări POS" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-black font-special-gothic-condensed font-bold text-xl mb-1 uppercase text-left">Fără integrări POS. Fără echipamente speciale.</h4>
                    <p className="text-black/70 font-gotham text-md text-left">Totul funcționează direct din aplicația CRWD — rapid, sigur și ușor de folosit pentru echipa ta.</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* How It Works - LIQUID GLASS CARDS */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-black border-b border-white/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimation />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <p className="text-white/60 font-gotham text-xs text-center sm:text-sm uppercase tracking-wider">
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
              textClassName="text-white font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-6xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl"
            >
              SETEAZĂ-ȚI LOCALUL PE MODUL CRWD
            </ScrollFloat>
           
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
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-white/20 z-0"></div>
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
                    <div className="absolute inset-0 aqua-glass rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="text-lg sm:text-xl lg:text-2xl font-special-gothic-condensed font-bold text-white mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-wide text-center whitespace-pre-line" style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                      }}>
                        <SplitText
                          text={step.title}
                          delay={50}
                          duration={0.6}
                          ease="power3.out"
                          splitType="words"
                          from={{ opacity: 0, y: -40 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          rootMargin="-100px"
                          textAlign="center"
                          tag="h3"
                          className="text-center"
                        />
                      </div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-1.5 sm:mb-2 md:mb-3 text-center flex items-center justify-center">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={112}
                          height={112}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-white font-gotham text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed text-center" style={{
                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                      }}>
                        <SplitText
                          text={step.description}
                          delay={50}
                          duration={0.6}
                          ease="power3.out"
                          splitType="words"
                          from={{ opacity: 0, y: 40 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          rootMargin="-100px"
                          textAlign="center"
                          tag="p"
                          className="text-center"
                        />
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      

      {/* Benefits Tabbed Section */}
      <BenefitsTabbed />


   

      

     

  


      {/* FAQ - WHITE */}
      <section className="py-8 md:py-16 sm:py-6 px-4 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
           {/* Mobile version - two lines */}
           <div className="block sm:hidden">
             <ScrollFloat
               animationDuration={1.2}
               ease="back.inOut(2)"
               scrollStart="center bottom+=50%"
               scrollEnd="bottom bottom-=40%"
               stagger={0.03}
               containerClassName="text-center"
               textClassName="text-black font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-5xl"
             >
               întrebări
             </ScrollFloat>
             <ScrollFloat
               animationDuration={1.2}
               ease="back.inOut(2)"
               scrollStart="center bottom+=50%"
               scrollEnd="bottom bottom-=40%"
               stagger={0.03}
               containerClassName="text-center -mt-4"
               textClassName="text-black font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-5xl"
             >
               frecvente
             </ScrollFloat>
           </div>
           
           {/* Desktop version - one line */}
           <div className="hidden sm:block">
             <ScrollFloat
               animationDuration={1.2}
               ease="back.inOut(2)"
               scrollStart="center bottom+=50%"
               scrollEnd="bottom bottom-=40%"
               stagger={0.03}
               containerClassName="text-center"
               textClassName="text-black font-gotham-condensed font-bold uppercase tracking-tight leading-none text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
             >
               intrebari frecvente
             </ScrollFloat>
           </div>
          <div className="space-y-px pt-8">
            {faqItems.map((item, index) => (
              <FAQ key={index} items={[item]} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - WHITE */}
      <section className="py-16 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="p-8 md:p-12 lg:p-16 bg-white relative overflow-hidden" style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <ScrollFloat
                  animationDuration={1.2}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                  containerClassName="text-center"
                  textClassName="text-black font-special-gothic-condensed font-bold uppercase tracking-tight leading-none text-3xl md:text-4xl lg:text-6xl"
                >
                  ALĂTURA-TE GRATUIT
                </ScrollFloat>
              </div>
              <p className="text-black/70 text-center mb-8 md:mb-12 font-gotham text-base md:text-lg">Completează formularul pentru a discuta detaliile.</p>
                <LeadFormVenue />
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
}


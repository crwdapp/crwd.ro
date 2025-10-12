'use client';

import Hero from "@/components/Hero";
import BenefitCard from "@/components/BenefitCard";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import LogoWall from "@/components/LogoWall";
import LeadFormUser from "@/components/LeadFormUser";
import MapAnimation from "@/components/MapAnimation";
import MapAnimationWhite from "@/components/MapAnimationWhite";
import ScrollRevealWhite from "@/components/ScrollRevealWhite";
import ScrollRevealBlack from "@/components/ScrollRevealBlack";
import LiquidGlass from "@/components/ui/LiquidGlass";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import MessageLoop from "@/components/MessageLoop";
import CircularGallery from "@/components/CircularGallery";
import TiltedCard from "@/components/TiltedCard";
import LightRays from "@/components/LightRays";
import TextType from "@/components/TextType";
import ScrollReveal from "@/components/ScrollReveal";
import RotatingText from "@/components/RotatingText";

const benefits = [
  {
    icon: "🎯",
    title: "Recomandări personalizate",
    description: "Descoperă locuri care se potrivesc perfect preferințelor tale și stării tale de moment.",
  },
  {
    icon: "🎁",
    title: "Oferte exclusive",
    description: "Acces la reduceri și oferte speciale disponibile doar pentru membrii CRWD.",
  },
  {
    icon: "🌟",
    title: "Experiențe curate",
    description: "Fiecare local e verificat și evaluat de comunitatea noastră pentru a-ți garanta calitatea.",
  },
  {
    icon: "🤝",
    title: "Networking spontan",
    description: "Conectează-te cu oameni care împărtășesc aceleași interese în locuri care vă plac amândurora.",
  },
];

const steps = [
  {
    title: "Descoperă",
    description: "Explorează locuri curate și bijuterii ascunse din orașul tău cu recomandări personalizate.",
    icon: "🔍"
  },
  {
    title: "Evenimente",
    description: "Alătură-te evenimentelor exclusive și întâlnește oameni cu gândire similară în locații minunate.",
    icon: "🎉"
  },
  {
    title: "Scanează & Comandă",
    description: "Scanare QR rapidă pentru o experiență de comandare fără probleme la orice local.",
    icon: "📱"
  },
  {
    title: "Happy Hour",
    description: "Bucură-te de reduceri speciale și oferte pe tot parcursul zilei, în fiecare zi.",
    icon: "🍻"
  },
];

const faqItems = [
  {
    question: "Când va fi lansat CRWD?",
    answer: "Lucrăm intens la finalizarea platformei. Înscrie-te pe waitlist pentru a fi printre primii care vor avea acces!",
  },
  {
    question: "Este gratuit?",
    answer: "Da! CRWD este gratuit pentru utilizatori. Vei avea acces la toate funcțiile de bază și la ofertele exclusive ale partenerilor noștri.",
  },
  {
    question: "În ce orașe va fi disponibil?",
    answer: "Inițial vom lansa în București și Cluj-Napoca, apoi ne extindem rapid în alte orașe majore din România.",
  },
  {
    question: "Cum funcționează ofertele exclusive?",
    answer: "Partenerii noștri oferă reduceri și promoții speciale pentru membrii CRWD. Vei vedea ofertele disponibile în aplicație și le vei putea accesa direct la local.",
  },
  {
    question: "Cum vă asigurați de calitatea localurilor?",
    answer: "Fiecare local partener trece printr-un proces de verificare. Plus, comunitatea noastră evaluează și recomandă cele mai bune experiențe.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - BLACK with Map Animation */}
      <Hero
        title={
          <div className="text-center">
            <div className="text-9xl md:text-8xl lg:text-9xl font-gotham-condensed font-bold text-white uppercase tracking-tight leading-none">5 bauturi</div>
            <div className="flex justify-center">
              <RotatingText
                texts={['pe zi', 'în fiecare zi']}
                mainClassName="inline-block text-black bg-gradient-to-r from-green-700/80 via-green-800/60 to-green-900/50 backdrop-blur-md border border-green-700/90 font-gotham-condensed font-bold px-3 py-1 rounded-full text-8xl md:text-7xl lg:text-8xl uppercase"
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
        subtitle="Ai 5 băuturi pe zi, cu 50% reducere, în toate localurile partenere. De la cafeaua de dimineață la cocktailul de seară — totul într-o singură aplicație."
        backgroundAnimation={<MapAnimation />}
      >
        <LeadFormUser />
      </Hero>

      {/* How It Works - LIQUID GLASS CARDS */}
      <section className="py-20 md:py-32 px-4 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black mb-6 uppercase tracking-tight">
              Cum Funcționează
            </h2>
            <p className="text-black/70 font-gotham text-lg max-w-2xl mx-auto leading-relaxed">
              Patru pași simpli pentru a descoperi locuri minunate și a te conecta cu oameni cu gândire similară
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

      {/* CRWD By Day - WHITE */}
      <section id="crwd-by-day" className="py-8 md:py-16 px-4 bg-white flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-black/60 font-gotham text-sm uppercase tracking-wider">
                  Descoperă
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-gotham-condensed font-bold  uppercase tracking-tight leading-none">
                  CRWD By Day
                </h2>
              </div>
              <ScrollRevealBlack
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={8}
                blurStrength={15}
              >
                În timpul zilei, CRWD îți găsește cele mai bune locuri pentru cafea, 
                lucru remote și întâlniri de business. Descoperă cafenele cu WiFi rapid, 
                atmosferă perfectă pentru productivitate și băuturi de calitate.
              </ScrollRevealBlack>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-black/80 font-gotham">Cafenele cu WiFi rapid</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-black/80 font-gotham">Atmosferă perfectă pentru lucru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-black/80 font-gotham">Băuturi de calitate superioară</span>
                </div>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Day Screenshot */}
                  <img 
                    src="/images/app-day-screenshot.jpg" 
                    alt="CRWD By Day Screenshot"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
                
                {/* Phone Buttons */}
                <div className="absolute -left-1 top-16 w-1 h-8 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-44 w-1 h-12 bg-gray-400 rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRWD By Night - BLACK */}
      <section id="crwd-by-night" className="py-8 md:py-16 px-4 bg-black flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(255,255,255,0.5),0_0_0_1px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Night Screenshot */}
                  <img 
                    src="/images/app-night-screenshot.jpg" 
                    alt="CRWD By Night Screenshot"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
                
                {/* Phone Buttons */}
                <div className="absolute -left-1 top-16 w-1 h-8 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-400 rounded-l-full"></div>
                <div className="absolute -left-1 top-44 w-1 h-12 bg-gray-400 rounded-l-full"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-white/60 font-gotham text-sm uppercase tracking-wider">
                  Explorează
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-gotham-condensed font-bold uppercase tracking-tight leading-none">
                  CRWD By Night
                </h2>
              </div>
              <ScrollRevealWhite
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={8}
                blurStrength={15}
              >
                Când seara coboară, CRWD îți dezvăluie lumea nocturnă a orașului. 
                De la baruri trendy și restaurante fine dining la cluburi și evenimente 
                exclusive - descoperă unde se întâmplă viața noaptea.
              </ScrollRevealWhite>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-white/80 font-gotham">Baruri și restaurante premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-white/80 font-gotham">Evenimente și petreceri exclusive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                  <span className="text-white/80 font-gotham">Atmosferă vibrantă și energică</span>
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
            "Descoperă locuri noi în fiecare zi",
            "Cafenele cu WiFi rapid", 
            "Baruri și restaurante premium",
            "Evenimente exclusive",
            "Viața nocturnă vibrantă",
            "Întâlniri de business",
            "Locuri perfecte pentru tine",
            "Descoperă locuri noi în fiecare zi",
            "Cafenele cu WiFi rapid", 
            "Baruri și restaurante premium",
            "Evenimente exclusive",
            "Viața nocturnă vibrantă",
            "Întâlniri de business",
            "Locuri perfecte pentru tine"
          ]}
          className="messageloop--fade"
        />
      </section>


      {/* Testimonials - WHITE */}
      <section className="py-16 md:py-32 bg-white border-b border-black/10">
        <div className="text-center  md:mb-20 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-gotham-condensed font-bold text-black uppercase tracking-tight">
            Ce spun utilizatorii
          </h2>
        </div>
        <div style={{ height: '600px', position: 'relative', width: '100vw' }}>
          <CircularGallery 
            bend={-1} 
            textColor="#000000" 
            borderRadius={0.05} 
            scrollEase={0.02}
            items={[
              { image: 'https://picsum.photos/seed/1/800/600?grayscale', text: '' },
              { image: 'https://picsum.photos/seed/2/800/600?grayscale', text: '' },
              { image: 'https://picsum.photos/seed/3/800/600?grayscale', text: '' },
              { image: 'https://picsum.photos/seed/4/800/600?grayscale', text: '' },
              { image: 'https://picsum.photos/seed/5/800/600?grayscale', text: '' },
              { image: 'https://picsum.photos/seed/6/800/600?grayscale', text: '' }
            ]}
          />
        </div>
      </section>


      {/* Coming Soon Section - Background Image */}
      <section 
        className="py-20 md:py-32 px-4 bg-black border-b border-white/10 relative overflow-hidden flex items-center justify-center min-h-[80vh]"
        style={{
          backgroundImage: 'url(/images/bg-download-section.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-gotham-condensed font-bold text-white mb-8 md:mb-12 uppercase tracking-tight leading-none">
              Coming Soon
            </h2>
            <p className="text-white/80 font-gotham text-lg md:text-xl mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
              Descarcă aplicația CRWD și descoperă cele mai bune locuri din orașul tău cu reduceri exclusive și experiențe memorabile.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#final-cta" 
                className="hover:scale-105 transition-transform duration-300"
                aria-label="Download from App Store"
              >
                <img 
                  src="/images/download app store.png" 
                  alt="Download from App Store" 
                  className="h-14 md:h-16 w-auto"
                />
              </a>
              <a 
                href="#final-cta" 
                className="hover:scale-105 transition-transform duration-300"
                aria-label="Download from Google Play"
              >
                <img 
                  src="/images/download google play.png" 
                  alt="Download from Google Play" 
                  className="h-14 md:h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA Section - BLACK with Light Rays */}
      <section className="py-16 md:py-32 px-4 bg-black border-b border-white/10 relative overflow-hidden">
        {/* Light Rays Background */}
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.2}
            lightSpread={0.6}
            rayLength={2.5}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0.05}
            distortion={0.03}
            fadeDistance={2.0}
            saturation={1.5}
            className="custom-rays"
          />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-white mb-6 uppercase tracking-tight leading-none">
              Ai un local?
            </h2>
            <p className="text-white/70 font-gotham text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Alătură-te rețelei CRWD și oferă clienților tăi experiențe memorabile cu reduceri exclusive și evenimente speciale.
            </p>
            
            {/* Partner CTA Button */}
            <div className="flex justify-center">
              <button className="aqua-glass inline-flex items-center justify-center font-semibold tracking-tight shadow-lg select-none px-8 md:px-12 py-4 md:py-5 text-white font-gotham-condensed font-bold text-lg md:text-xl uppercase tracking-wide transition-transform duration-200 will-change-transform hover:scale-105 rounded-2xl">
                Devino Partener
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - WHITE */}
      <section className="py-16 md:py-32 px-4 bg-white border-b border-black/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black mb-12 md:mb-20 uppercase tracking-tight">
            Întrebări frecvente
          </h2>
          <div className="space-y-px">
            {faqItems.map((item, index) => (
              <FAQ key={index} items={[item]} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - WHITE */}
      <section id="final-cta" className="py-16 md:py-32 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="border-2 border-black p-8 md:p-12 lg:p-16 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-gotham-condensed font-bold text-black text-center mb-6 uppercase tracking-tight leading-none">
                Pregătit să descoperi noi locuri?
              </h2>
              <p className="text-black/70 text-center mb-8 md:mb-12 font-gotham text-base md:text-lg">Înscrie-te pe waitlist și primește early access la CRWD!</p>
              <div className="[&_input]:bg-white [&_input]:border-black/30 [&_input]:text-black [&_input]:placeholder-black/30 [&_input:focus]:border-black [&_select]:bg-white [&_select]:border-black/30 [&_select]:text-black [&_select:focus]:border-black [&_label]:text-black [&_button]:bg-black [&_button]:text-white [&_button:hover]:bg-black/90 [&_a]:text-black [&_div[class*='border-white']]:border-black">
                <LeadFormUser />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


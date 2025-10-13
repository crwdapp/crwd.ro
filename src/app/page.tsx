'use client';

import Image from 'next/image';
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
import TiltedCard from "@/components/TiltedCard";
import LightRays from "@/components/LightRays";
import TextType from "@/components/TextType";
import ScrollReveal from "@/components/ScrollReveal";
import RotatingText from "@/components/RotatingText";
import Masonry from "@/components/Masonry";

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
    description: "Descoperă cele mai tari localuri din oraș. Cafenele, restaurante, baruri, într-o singură aplicație.",
    icon: "🔍"
  },
  {
    title: "Evenimente",
    description: "Gata cu \"Ce facem diseară?\" Ai toate evenimentele din zona ta, într-un singur loc.",

    icon: "🎉"
  },
  {
    title: "Scan & Order",
    description: "Scanezi NFC-ul din localurile partenere și comandă direct din aplicație.",
    icon: "📱"
  },
  {
    title: "Happy Hour Every Hour",
    description: "Reduceri la băuturile tale preferate, pe tot parcursul zilei, in fiecare zi.",
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
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-special-gothic-condensed font-bold text-white uppercase tracking-tight leading-none">5 băuturi</div>
            <div className="flex justify-center mt-2 sm:mt-3 md:mt-4">
              <RotatingText
                texts={['pe zi', 'în fiecare zi']}
                mainClassName="inline-block text-black bg-gradient-to-r from-green-700/80 via-green-800/60 to-green-900/50 backdrop-blur-md border border-green-700/90 font-special-gothic-condensed font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
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
        subtitle="Ai 50% reducere la 5 băuturi pe zi, în toate localurile partenere."
        backgroundAnimation={<MapAnimation />}
      >
        <LeadFormUser />
      </Hero>

      {/* How It Works - LIQUID GLASS CARDS */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 relative overflow-hidden">
        {/* Map Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MapAnimationWhite />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-special-gothic-condensed font-bold text-black mb-4 sm:mb-6 uppercase tracking-tight">
              Cum Funcționează
            </h2>
           
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
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
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-center">
                        {step.icon}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-special-gothic-condensed font-bold text-black mb-2 sm:mb-3 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-black/70 font-gotham  text-xs sm:text-sm md:text-base leading-relaxed">
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
      <section id="crwd-by-day" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-black/60 font-gotham text-xs sm:text-sm uppercase tracking-wider">
                  Descoperă
                </p>
                <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-gotham-condensed font-bold uppercase tracking-tight leading-none">
                  CRWD By Day
                </h2>
              </div>
              <div className="max-w-xl mx-auto lg:mx-0">
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
              </div>
              
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-[500px] sm:w-80 sm:h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Day Screenshot */}
                  <Image
                    src="/images/app-day-screenshot.jpg"
                    alt="CRWD By Day Screenshot"
                    fill
                    className="object-cover"
                  />

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
          </div>
        </div>
      </section>

      {/* CRWD By Night - BLACK */}
      <section id="crwd-by-night" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-64 h-[500px] sm:w-80 sm:h-[600px] bg-black rounded-[3rem] p-2 shadow-[0_30px_60px_-8px_rgba(255,255,255,0.5),0_0_0_1px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Night Screenshot */}
                  <Image
                    src="/images/app-night-screenshot.jpg"
                    alt="CRWD By Night Screenshot"
                    fill
                    className="object-cover"
                  />

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
                  Explorează
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-gotham-condensed font-bold uppercase tracking-tight leading-none">
                  CRWD By Night
                </h2>
              </div>
              <div className="max-w-xl mx-auto lg:mx-0">
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
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Messages */}
      <section className="py-4 pb-8 sm:pb-12 md:pb-16 px-4 bg-black border-y border-white/10">
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

      {/* Masonry Gallery Section */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:pt-8 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="space-y-3 sm:space-y-4 mb-8">
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-gotham-condensed font-bold uppercase tracking-tight leading-none">
                WHERE THE CRWD'S AT
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <ScrollRevealWhite
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={8}
                blurStrength={15}
              >
                Adunăm toate evenimentele din oraș, ca tu să alegi ce ți se potrivește.
              </ScrollRevealWhite>
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="h-[800px] sm:h-[900px] md:h-[1000px]">
            <Masonry
              items={[
                {
                  id: "1",
                  img: "https://images.pexels.com/photos/844928/pexels-photo-844928.jpeg",
                  height: 400,
                  title: "DJ SET"
                },
                {
                  id: "2", 
                  img: "https://media.istockphoto.com/id/1405017797/vector/karaoke-night-neon-signboard-microphone-in-frame-talent-show-celebration-idea-song-singer.jpg?s=612x612&w=0&k=20&c=dGJfi_9KouUlq_UM8mBbivUzQeQsdBgB7QohNmGYwdM=",
                  height: 250,
                  title: "KARAOKE"
                },
                {
                  id: "3",
                  img: "https://www.shutterstock.com/image-illustration/empty-stage-awaits-lit-by-600nw-2411375655.jpg", 
                  height: 600,
                  title: "STAND-UP COMEDY"
                },
                {
                  id: "4",
                  img: "https://img.freepik.com/free-photo/3d-music-related-scene_23-2151125037.jpg?semt=ais_hybrid&w=740&q=80",
                  height: 350,
                  title: "MUZICĂ LIVE"
                },
                {
                  id: "5",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwKTpDP4BRvIrcTfQy4u6Y2WOreKmIOIeQfCl7WXowDRoHlmlBSxxCzFJpcqOfOWHA9c&usqp=CAU",
                  height: 500,
                  title: "MIERCUREA BERII"
                },
                {
                  id: "6",
                  img: "https://hips.hearstapps.com/hmg-prod/images/movie-night-ideas-1608824743.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
                  height: 300,
                  title: "MOVIE NIGHT"
                },
                {
                  id: "7",
                  img: "https://www.remindmagazine.com/wp-content/uploads/2024/05/wildcats-1014x570.jpg",
                  height: 450,
                  title: "NOSTALGIA"
                },
                {
                  id: "8",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZGJ67YoqjUFeK60Bwdu8Saggfao5T_lBeQ&s",
                  height: 400,
                  title: "BEACH PARTY"
                },
              
                {
                  id: "9",
                  img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=900&fit=crop",
                  height: 480,
                  title: "FESTIVAL"
                },
               
                {
                  id: "10",
                  img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop",
                  height: 450,
                  title: "DEGUSTĂRI"
                },
                {
                  id: "11",
                  img: "https://www.jaqueslondon.co.uk/cdn/shop/collections/BoardGames-Collection-Header-Banner.jpg?v=1688051248",
                  height: 380,
                  title: "BOARDGAMES"
                }
              ]}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
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
                <Image 
                  src="/images/download app store.png" 
                  alt="Download from App Store" 
                  width={200}
                  height={64}
                  className="h-14 md:h-16 w-auto"
                />
              </a>
              <a 
                href="#final-cta" 
                className="hover:scale-105 transition-transform duration-300"
                aria-label="Download from Google Play"
              >
                <Image 
                  src="/images/download google play.png" 
                  alt="Download from Google Play" 
                  width={200}
                  height={64}
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


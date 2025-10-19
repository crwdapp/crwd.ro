'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import MapAnimationWhite from './MapAnimationWhite';

const tabs = [
  { id: 'users', label: 'Meniuri Digitale' },
  { id: 'bars', label: 'Evenimente' },
  { id: 'brands', label: 'Date Analitice' },
] as const;

type TabId = typeof tabs[number]['id'];

const UsersContent = (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-gotham-condensed font-bold text-black uppercase tracking-tight leading-none">
          Meniuri Digitale
        </h2>
        <p className="text-center text-black/70 font-gotham text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
        Creează meniuri personalizate pentru fiecare zi, eveniment sau promoție, și activează doar ce-ți trebuie! Adaptează-ți strategia de meniu digital în timp real, în funcție de publicul țintă și ora zilei. 
        </p>
      </div>

    
    </div>

    <div className="w-full h-[300px] lg:h-[400px] bg-black/5 rounded-2xl flex items-center justify-center">
      <span className="text-black/30 font-gotham text-sm sm:text-base">Image Placeholder</span>
    </div>
  </div>
);

const BarsContent = (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-gotham-condensed font-bold text-black uppercase tracking-tight leading-none">
          Evenimente
        </h2>
        <p className="text-center text-black/70 font-gotham text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
        Evenimentele tale apar instant în feed-ul utilizatorilor locali, atrăgând noi potențiali vizitatori care caută să iasă în oraș. Fără algoritmi complicați și plini de ads-uri care îngroapă postările tale în haosul platformelor mari. În CRWD, ești listat garantat în aplicație fără niciun cost de promovare, totul organic și direct la publicul țintă.
        </p>
      </div>

      
    </div>

    <div className="w-full h-[300px] lg:h-[400px] bg-black/5 rounded-2xl flex items-center justify-center">
      <span className="text-black/30 font-gotham text-sm sm:text-base">Image Placeholder</span>
    </div>
  </div>
);

const BrandsContent = (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-gotham-condensed font-bold text-black uppercase tracking-tight leading-none">
          Date Analitice
        </h2>
        <p className="text-center text-black/70 font-gotham text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
        Analizele generale detaliate din dashboard-ul CRWD îți oferă insights zilnice despre ce băuturi se vând cel mai bine, către ce segmente de clienți (vârstă, gen, preferințe) și în ce momente ale zilei sau săptămânii, ajutându-te să optimizezi stocuri, promoții și vânzări cu până la 30% creștere, totul bazat pe date reale.
        </p>
      </div>

      
    </div>

    <div className="w-full h-[300px] lg:h-[400px] bg-black/5 rounded-2xl flex items-center justify-center">
      <span className="text-black/30 font-gotham text-sm sm:text-base">Image Placeholder</span>
    </div>
  </div>
);

const contentByTab: Record<TabId, React.ReactElement> = {
  users: UsersContent,
  bars: BarsContent,
  brands: BrandsContent,
};

export default function BenefitsTabbed() {
  const [activeTab, setActiveTab] = useState<TabId>('bars');

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10 relative overflow-hidden">
      {/* Map Animation Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <MapAnimationWhite />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-4 md:mb-8  text-center">
          <p className="text-black/60 font-gotham text-xs sm:text-sm uppercase tracking-wider mb-4">
            ECOSISTEMUL CRWD
          </p>
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-gotham-condensed font-bold text-black mb-4 sm:mb-6 uppercase tracking-tight leading-none">
          Beneficii
          </h1>
          
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1 grid grid-cols-3 gap-1 border border-black/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-gotham-condensed font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center text-center  md:text-xl lg:text-2xl ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-700/80 via-green-800/60 to-green-900/50 text-white shadow-lg border border-green-700/90'
                    : 'text-black/70 hover:text-green-800 hover:bg-green-50/50'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content - No Card Background */}
        <div className="">
          {contentByTab[activeTab]}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';

interface PhoneMockupProps {
  screenshots: {
    day: string;
    night: string;
  };
}

export default function PhoneMockup({ screenshots }: PhoneMockupProps) {
  const [currentImage, setCurrentImage] = useState(screenshots.day);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const phoneElement = document.getElementById('phone-mockup');
      if (!phoneElement) return;

      const rect = phoneElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if phone is in viewport
      const inViewport = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(inViewport);

      // Determine which section is currently in view
      const daySection = document.getElementById('crwd-by-day');
      const nightSection = document.getElementById('crwd-by-night');
      
      if (daySection && nightSection) {
        const dayRect = daySection.getBoundingClientRect();
        const nightRect = nightSection.getBoundingClientRect();
        
        // Check which section is more in view
        const dayInView = dayRect.top < windowHeight / 2 && dayRect.bottom > windowHeight / 2;
        const nightInView = nightRect.top < windowHeight / 2 && nightRect.bottom > windowHeight / 2;
        
        if (dayInView) {
          setCurrentImage(screenshots.day);
        } else if (nightInView) {
          setCurrentImage(screenshots.night);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [screenshots.day, screenshots.night]);

  return (
    <div 
      id="phone-mockup"
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(-50%)' : 'translateY(-50%) translateX(-100px)'
      }}
    >
      {/* Phone Frame */}
      <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Phone Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Dynamic Image */}
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
            <img 
              src={currentImage} 
              alt="App Screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          
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
  );
}


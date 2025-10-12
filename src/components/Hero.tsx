import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle: string;
  children?: ReactNode;
  showMockup?: boolean;
  backgroundAnimation?: ReactNode;
}

export default function Hero({ title, subtitle, children, showMockup = false, backgroundAnimation }: HeroProps) {
  return (
    <section className="min-h-screen lg:min-h-[70vh] flex items-center justify-center px-4 py-20 md:py-32 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background Animation */}
      {backgroundAnimation && (
        <div className="absolute inset-0 opacity-40 w-full h-full min-h-screen">
          {backgroundAnimation}
        </div>
      )}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-gotham-condensed font-bold text-white mb-6 md:mb-8 leading-none tracking-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-white mb-8 md:mb-12 font-gotham leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


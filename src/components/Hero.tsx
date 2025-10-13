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
    <section className="min-h-[90vh] sm:min-h-screen lg:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background Animation */}
      {backgroundAnimation && (
        <div className="absolute inset-0 opacity-40 w-full h-full">
          {backgroundAnimation}
        </div>
      )}
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center">
            <h1 className="mb-6 sm:mb-8 leading-none tracking-tight">
              {title}
            </h1>
            <p className=" text-white mb-8 sm:mb-10 md:mb-12 font-gotham leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="max-w-md w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


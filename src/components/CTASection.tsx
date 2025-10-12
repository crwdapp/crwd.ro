import { ReactNode } from "react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function CTASection({ title, subtitle, children }: CTASectionProps) {
  return (
    <section className="py-32 px-4 border-b border-white/10">
      <div className="container mx-auto max-w-3xl">
        <div className="border-2 border-white p-12 md:p-16 bg-black relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-gotham-condensed font-bold text-white text-center mb-6 uppercase tracking-tight leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/70 text-center mb-12 font-gotham text-lg">{subtitle}</p>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}


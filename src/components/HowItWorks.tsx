interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  title?: string;
}

export default function HowItWorks({ steps, title = "Cum funcționează?" }: HowItWorksProps) {
  return (
    <section className="py-32 px-4 border-b border-white/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-gotham-condensed font-bold text-white mb-20 uppercase tracking-tight">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line - horizontal on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-16 h-px bg-white/10"></div>
              )}

              {/* Step Number - Large */}
              <div className="text-8xl font-gotham-condensed font-bold text-white/10 leading-none mb-4">
                {String(step.number).padStart(2, '0')}
              </div>

              {/* Step Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-gotham-condensed font-bold text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/50 font-gotham text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Line */}
              <div className="h-px bg-white/0 group-hover:bg-white/30 transition-all duration-300 mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


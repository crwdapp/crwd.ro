interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function BenefitCard({ icon, title, description, index }: BenefitCardProps) {
  return (
    <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300 bg-black">
      {/* Index Number */}
      <div className="text-white/20 font-gotham-condensed text-sm mb-6 font-bold">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Icon */}
      <div className="text-6xl mb-6 grayscale">{icon}</div>
      
      {/* Title */}
      <h3 className="text-2xl font-gotham-condensed font-bold text-white mb-4 uppercase tracking-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/50 font-gotham leading-relaxed">
        {description}
      </p>

      {/* Bottom Line Animation */}
      <div className="h-px bg-white/0 group-hover:bg-white/20 transition-all duration-300 mt-8"></div>
    </div>
  );
}


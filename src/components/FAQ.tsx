"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-px">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 bg-black overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span className="text-white font-special-gothic-condensed font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wide pr-4 sm:pr-6 md:pr-8">
              {item.question}
            </span>
            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>

          {openIndex === index && (
            <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-7 md:pb-8 text-white/70 font-gotham border-t border-white/10 pt-4 sm:pt-5 md:pt-6">
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


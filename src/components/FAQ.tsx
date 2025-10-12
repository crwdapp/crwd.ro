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
            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span className="text-white font-gotham-condensed font-bold text-lg md:text-xl uppercase tracking-wide pr-8">
              {item.question}
            </span>
            <div className="flex-shrink-0 w-10 h-10 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <svg
                className={`w-4 h-4 text-white transition-transform duration-300 ${
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
            <div className="px-8 pb-8 text-white/70 font-gotham border-t border-white/10 pt-6">
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


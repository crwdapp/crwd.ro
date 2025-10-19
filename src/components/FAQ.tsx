"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  theme?: 'black' | 'white';
}

export default function FAQ({ items, theme = 'black' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isWhiteTheme = theme === 'white';

  return (
    <div className="space-y-px">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border overflow-hidden ${
            isWhiteTheme
              ? 'border-black/10 bg-white'
              : 'border-white/10 bg-black'
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className={`w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between transition-colors group ${
              isWhiteTheme
                ? 'hover:bg-black/5'
                : 'hover:bg-white/5'
            }`}
          >
            <span className={`font-special-gothic-condensed font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wide pr-4 sm:pr-6 md:pr-8 ${
              isWhiteTheme ? 'text-black' : 'text-white'
            }`}>
              {item.question}
            </span>
            <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border flex items-center justify-center transition-colors ${
              isWhiteTheme
                ? 'border-black/30 group-hover:border-black'
                : 'border-white/30 group-hover:border-white'
            }`}>
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                } ${isWhiteTheme ? 'text-black' : 'text-white'}`}
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
            <div className={`px-4 sm:px-6 md:px-8 pb-6 sm:pb-7 md:pb-8 font-gotham border-t pt-4 sm:pt-5 md:pt-6 ${
              isWhiteTheme
                ? 'text-black/70 border-black/10'
                : 'text-white/70 border-white/10'
            }`}>
              <p className="leading-relaxed text-sm sm:text-base md:text-lg">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


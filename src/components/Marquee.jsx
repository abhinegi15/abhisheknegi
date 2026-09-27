import React from 'react';
import { marqueeItems } from '../data/portfolioData';

export default function Marquee() {
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/10 bg-dark-900/60 backdrop-blur-md">
      {/* Side gradients for soft fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase select-none hover:text-cyan-300 transition-colors"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

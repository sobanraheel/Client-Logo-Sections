
import React from 'react';
import { LayoutProps } from '../../types';
import { LogoWrapper } from '../LogoWrapper';

export const InfiniteMarquee: React.FC<LayoutProps> = ({ logos, title }) => {
  // Double the logos for seamless loop
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          {title || "Trusted by Industry Leaders"}
        </h2>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {displayLogos.map((logo, idx) => (
            <LogoWrapper 
              key={`${logo.id}-${idx}`} 
              logo={logo} 
              className="mx-12 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

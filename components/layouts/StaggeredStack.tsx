
import React from 'react';
import { LayoutProps } from '../../types';
import { LogoWrapper } from '../LogoWrapper';

export const StaggeredStack: React.FC<LayoutProps> = ({ logos, title }) => {
  return (
    <div className="py-24 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-xl font-medium opacity-70 mb-16">
          {title || "The world's most innovative companies use our platform"}
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="transition-transform hover:scale-110">
              <div className="flex items-center justify-center grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300">
                 <div className="h-12 w-12 text-indigo-300">
                    {logo.svg}
                 </div>
                 <span className="ml-4 text-2xl font-bold tracking-tight text-white">
                    {logo.name}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { LayoutProps } from '../../types';
import { LogoWrapper } from '../LogoWrapper';

export const MinimalRow: React.FC<LayoutProps> = ({ logos, title }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/4">
          <h2 className="text-lg font-semibold text-gray-900 border-l-4 border-indigo-600 pl-4">
            {title || "Featured In"}
          </h2>
        </div>
        <div className="md:w-3/4 flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-8">
          {logos.slice(0, 5).map((logo) => (
            <div key={logo.id} className="opacity-50 hover:opacity-100 transition-opacity">
                <div className="h-8 w-8 text-gray-800">
                  {logo.svg}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

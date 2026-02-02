
import React from 'react';
import { LayoutProps } from '../../types';
import { LogoWrapper } from '../LogoWrapper';

export const ClassicGrid: React.FC<LayoutProps> = ({ logos, title }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base font-semibold text-gray-500 mb-10">
          {title || "Powering teams at these amazing companies"}
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="col-span-1 flex justify-center py-8 px-8 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <LogoWrapper logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

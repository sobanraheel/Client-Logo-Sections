
import React from 'react';
import { LayoutProps } from '../../types';
import { LogoWrapper } from '../LogoWrapper';

export const BorderedTable: React.FC<LayoutProps> = ({ logos, title }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
           <h3 className="text-2xl font-bold text-gray-900">{title || "Our Partners"}</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-gray-100">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex justify-center items-center p-12 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors group"
            >
              <LogoWrapper logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

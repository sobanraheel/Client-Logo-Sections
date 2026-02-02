
import React from 'react';
import { ClientLogo } from '../types';

interface LogoWrapperProps {
  logo: ClientLogo;
  className?: string;
}

export const LogoWrapper: React.FC<LogoWrapperProps> = ({ logo, className = '' }) => {
  return (
    <div 
      className={`flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out ${className}`}
      title={logo.name}
    >
      <div className="h-10 w-10 md:h-12 md:w-12 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        {logo.svg}
      </div>
      <span className="ml-3 font-semibold text-lg text-gray-600 hidden md:block">
        {logo.name}
      </span>
    </div>
  );
};

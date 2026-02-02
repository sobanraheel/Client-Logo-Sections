import React from 'react';

export interface ClientLogo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

export interface LayoutProps {
  logos: ClientLogo[];
  title?: string;
}
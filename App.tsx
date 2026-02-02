
import React from 'react';
import { CLIENT_LOGOS } from './constants';
import { InfiniteMarquee } from './components/layouts/InfiniteMarquee';
import { ClassicGrid } from './components/layouts/ClassicGrid';
import { BorderedTable } from './components/layouts/BorderedTable';
import { StaggeredStack } from './components/layouts/StaggeredStack';
import { MinimalRow } from './components/layouts/MinimalRow';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Introduction */}
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Client Logo Sections
        </h1>
        <p className="text-lg text-gray-600">
          Five professional, production-ready layouts for displaying partner and client logos.
          Built with React, Tailwind CSS, and Framer-like CSS animations.
        </p>
      </div>

      <div className="space-y-16 pb-24">
        {/* Layout 1: Infinite Marquee */}
        <section>
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Layout 1: Infinite Marquee</span>
          </div>
          <InfiniteMarquee logos={CLIENT_LOGOS} title="Used by teams worldwide" />
        </section>

        {/* Layout 2: Classic Grid */}
        <section>
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Layout 2: Clean Grid Cards</span>
          </div>
          <ClassicGrid logos={CLIENT_LOGOS} title="Trusted by companies of all sizes" />
        </section>

        {/* Layout 3: Bordered Table */}
        <section>
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Layout 3: Minimalist Bordered Table</span>
          </div>
          <BorderedTable logos={CLIENT_LOGOS} title="Our Strategic Partners" />
        </section>

        {/* Layout 4: Dark Staggered Stack */}
        <section>
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Layout 4: High Contrast Staggered</span>
          </div>
          <StaggeredStack logos={CLIENT_LOGOS} />
        </section>

        {/* Layout 5: Minimal Row */}
        <section>
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">Layout 5: Inline Sidebar Branding</span>
          </div>
          <MinimalRow logos={CLIENT_LOGOS} title="As Seen on TechDaily" />
        </section>
      </div>

      {/* Footer Info */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>Hand-crafted UI Components for React & Tailwind CSS projects.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

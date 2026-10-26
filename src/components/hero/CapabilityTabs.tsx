import { useState } from 'react';

const CAPABILITY_TABS = [
  'WEBSITE DEVELOPMENT',
  'WEBSITE DESIGN',
  'MOBILE DEVELOPMENT',
  'MOBILE DESIGN',
  'WEBSITE MANAGEMENT',
  'E-COMMERCE DEVELOPMENT',
];

export function CapabilityTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-8">
      {/* Interactive Capability Tabs (Figma #204:432) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-y border-dashed border-border-dashed">
        {CAPABILITY_TABS.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`relative flex items-center justify-center px-4 py-5 text-center font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all border-r border-dashed border-border-dashed last:border-r-0 ${
                isActive
                  ? 'bg-primary-400 dark:bg-primary-800 text-white shadow-inner'
                  : 'bg-transparent text-text-muted hover:text-text-primary hover:bg-gray-500/5'
              }`}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-300" />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Capability Preview Surface */}
      <div className="mt-8 rounded-xl border border-border-dashed bg-gray-900/60 p-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-secondary-300 uppercase">
              Capability 0{activeTab + 1}
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold text-white">
              {CAPABILITY_TABS[activeTab]}
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-300">
              Modern full-stack engineering and bespoke architectural design
              focused on performance, accessibility, and high conversion rates.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary-300 animate-ping" />
            <span className="text-xs font-mono text-gray-400">Interactive Canvas Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

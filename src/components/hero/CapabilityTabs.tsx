import { useState } from 'react';
import { BlueprintFrame } from '../common/BlueprintFrame';
import { HeroShowcase } from './HeroShowcase';

const CAPABILITY_TABS = [
  'WEBSITE DEVELOPMENT',
  'WEBSITE DESIGN',
  'MOBILE DEVELOPMENT',
  'MOBILE DESIGN',
  'WEBSITE MANAGEMENT',
];

export function CapabilityTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-6 sm:mt-8">
      {/* 5-Column Capability Tabs wrapped in Blueprint Frame */}
      <BlueprintFrame
        showNodes={true}
        showHorizontalGuides={true}
        borderStyle="y"
        className="w-full"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-dashed divide-border-dashed">
          {CAPABILITY_TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center justify-center px-3 sm:px-4 py-3 sm:py-3.5 text-center font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-tab-active-bg text-tab-active-text shadow-inner'
                    : 'bg-transparent text-text-muted hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-300" />
                )}
              </button>
            );
          })}
        </div>
      </BlueprintFrame>

      {/* Hero Showcase (Code Editor + Web Mockup) */}
      <HeroShowcase />
    </div>
  );
}

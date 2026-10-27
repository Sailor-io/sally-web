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
        <div className="flex overflow-x-auto scrollbar-none divide-x divide-dashed divide-border-dashed lg:grid lg:grid-cols-5">
          {CAPABILITY_TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center justify-center shrink-0 w-1/2 lg:w-auto px-3 sm:px-4 py-3 sm:py-3.5 text-center font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-tab-active-bg text-tab-active-text shadow-inner'
                    : 'bg-transparent text-text-muted hover:text-text-primary hover:bg-white/5'
                }`}
              >
                <span className="truncate">{tab}</span>
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

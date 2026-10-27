import { AnnouncementTicker } from './AnnouncementTicker';
import { CapabilityTabs } from './CapabilityTabs';

interface HeroContentProps {
  onNavigateToProjects?: () => void;
}

export function HeroMainContent({ onNavigateToProjects }: HeroContentProps) {
  return (
    <div className="w-full">
      {/* Hero Headline & Actions */}
      <div className="max-w-205 pt-2 sm:pt-3 pb-6 sm:pb-8">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-text-primary">
          Digital experiences built for ambitious businesses.
        </h1>
        <p className="mt-4 sm:mt-5 max-w-170 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
          Custom websites, digital products and user experiences designed to help your business stand out, connect with customers and grow.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-secondary-300 px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm sm:text-base font-semibold text-gray-800 shadow-sm transition-all hover:brightness-105 active:scale-[0.98]"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={onNavigateToProjects}
            className="inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm sm:text-base font-semibold border border-border-subtle shadow-sm transition-all hover:bg-gray-200 active:scale-[0.98] cursor-pointer"
          >
            Our projects
          </button>
        </div>
      </div>

      <CapabilityTabs />
    </div>
  );
}

export function HeroContent({ onNavigateToProjects }: HeroContentProps) {
  return (
    <div className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-2 sm:pt-4 pb-12 sm:pb-16">
      <AnnouncementTicker />
      <HeroMainContent onNavigateToProjects={onNavigateToProjects} />
    </div>
  );
}

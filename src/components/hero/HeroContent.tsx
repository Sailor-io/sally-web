import { AnnouncementTicker } from './AnnouncementTicker';
import { CapabilityTabs } from './CapabilityTabs';

export function HeroContent() {
  return (
    <div className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-4 pb-20">
      {/* Announcement Marquee Ticker (Figma #204:98989) */}
      <AnnouncementTicker />

      {/* Hero Headline & Actions */}
      <div className="max-w-205 pt-4 pb-12">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-text-primary">
          Digital experiences built for ambitious businesses.
        </h1>
        <p className="mt-6 max-w-170 font-sans text-lg sm:text-xl text-text-secondary leading-relaxed">
          Custom websites, digital products and user experiences designed to help your business stand out, connect with customers and grow.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-secondary-300 px-7 py-3.5 font-sans text-base font-semibold text-gray-800 shadow-sm transition-all hover:brightness-105 active:scale-[0.98]"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-primary-800/80 px-7 py-3.5 font-sans text-base font-semibold text-text-primary border border-border-subtle transition-all hover:bg-gray-200 dark:hover:bg-primary-700 active:scale-[0.98]"
          >
            Our projects
          </a>
        </div>
      </div>

      {/* Interactive Capability Tabs (Figma #204:432) */}
      <CapabilityTabs />
    </div>
  );
}

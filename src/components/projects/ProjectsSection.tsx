import { BlueprintFrame } from '../common/BlueprintFrame';
import { AnnouncementTicker } from '../hero/AnnouncementTicker';

export function ProjectsTopContent() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mx-auto max-w-220 text-center pt-8 pb-14">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text-primary">
          Our works focus on helping businesses move forward
        </h2>
        <p className="mt-5 mx-auto max-w-160 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
          Explore the collection of digital experiences we've built for businesses combining design, technology, and business-focused execution.
        </p>
      </div>

      {/* Row 1 of Project Cards */}
      <BlueprintFrame
        showNodes={true}
        showHorizontalGuides={true}
        borderStyle="all"
        className="w-full bg-bg-subtle/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-dashed divide-border-dashed">
          {/* Card 1: Wide Featured Card */}
          <div className="md:col-span-5 bg-white p-7 sm:p-9 flex flex-col justify-between min-h-90 text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-44 w-full rounded-sm bg-linear-to-br from-gray-100 to-gray-200 border border-border-subtle flex items-center justify-center p-4">
              <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Featured Case Study
              </span>
            </div>
            <div className="pt-6">
              <h3 className="font-display text-xl font-bold text-gray-900 tracking-tight">
                Project title
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 font-sans">
                One line write up about the project
              </p>
              <a
                href="#case-study"
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Card 2: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">01</span>
            </div>
          </div>

          {/* Card 3: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">02</span>
            </div>
          </div>

          {/* Card 4: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">03</span>
            </div>
          </div>
        </div>
      </BlueprintFrame>
    </div>
  );
}

export function ProjectsBottomContent() {
  return (
    <div className="w-full">
      {/* Row 2 of Project Cards */}
      <BlueprintFrame
        showNodes={true}
        showHorizontalGuides={true}
        borderStyle="all"
        className="w-full bg-bg-subtle/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-dashed divide-border-dashed">
          {/* Card 1: Wide Featured Card */}
          <div className="md:col-span-5 bg-white p-7 sm:p-9 flex flex-col justify-between min-h-90 text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-44 w-full rounded-sm bg-linear-to-br from-gray-100 to-gray-200 border border-border-subtle flex items-center justify-center p-4">
              <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Featured Case Study
              </span>
            </div>
            <div className="pt-6">
              <h3 className="font-display text-xl font-bold text-gray-900 tracking-tight">
                Project title
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 font-sans">
                One line write up about the project
              </p>
              <a
                href="#case-study"
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Card 2: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">04</span>
            </div>
          </div>

          {/* Card 3: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">05</span>
            </div>
          </div>

          {/* Card 4: Vertical Card */}
          <div className="md:col-span-2.33 bg-white p-6 min-h-90 flex flex-col justify-end text-gray-900 group transition-all hover:bg-gray-50">
            <div className="h-full w-full rounded-sm bg-linear-to-br from-gray-50 to-gray-100 border border-border-subtle flex items-center justify-center">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">06</span>
            </div>
          </div>
        </div>
      </BlueprintFrame>

      {/* Bottom Sticker Pills Pile */}
      <div className="relative mt-20 pt-12 pb-8 overflow-hidden select-none">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {/* websites */}
          <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-full bg-primary-400 px-6 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg">
            websites
          </div>

          {/* mobile apps */}
          <div className="transform rotate-3 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-3xl bg-secondary-300 px-7 py-3 text-gray-950 font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg">
            mobile apps
          </div>

          {/* dashboards */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-full bg-primary-700 px-7 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg">
            dashboards
          </div>

          {/* e-commerce */}
          <div className="transform rotate-1 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-full bg-emerald-800 px-7 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg">
            e-commerce
          </div>

          {/* maintenance */}
          <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-2xl bg-primary-300 px-6 py-2 text-white font-sans text-lg sm:text-xl font-bold tracking-tight shadow-lg">
            maintenance
          </div>

          {/* devops */}
          <div className="transform -rotate-18 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-2xl bg-lime-700 px-5 py-1.5 text-white font-sans text-base sm:text-lg font-bold tracking-tight shadow-lg">
            devops
          </div>

          {/* cloud infrastructure */}
          <div className="transform rotate-2 hover:rotate-0 transition-transform duration-200 cursor-pointer rounded-full bg-primary-400 px-8 py-3 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg">
            cloud infrastructure
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <div className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-6 pb-24">
      <ProjectsTopContent />
      <div className="my-8">
        <AnnouncementTicker showGuides={true} />
      </div>
      <ProjectsBottomContent />
    </div>
  );
}

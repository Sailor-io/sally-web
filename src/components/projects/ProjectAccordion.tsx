import { useState } from 'react';
import { BlueprintFrame } from '../common/BlueprintFrame';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  link?: string;
}

interface ProjectAccordionProps {
  projects: ProjectItem[];
  defaultActiveIndex?: number;
  className?: string;
  onSelectProject?: (projectId: string) => void;
}

export function ProjectAccordion({
  projects,
  defaultActiveIndex = 0,
  className = '',
  onSelectProject,
}: ProjectAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleCardClick = (idx: number, projectId: string) => {
    if (activeIndex === idx && onSelectProject) {
      onSelectProject(projectId);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <BlueprintFrame
      showNodes={true}
      showHorizontalGuides={true}
      borderStyle="all"
      className={`w-full bg-bg-card/40 ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 p-0 w-full min-h-120 md:h-110 lg:h-115">
        {projects.map((project, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => handleCardClick(idx, project.id)}
              onFocus={() => setActiveIndex(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`${project.title} (${project.tag})`}
              style={{
                flexGrow: isActive ? 3.8 : 1,
                flexShrink: 1,
                flexBasis: '0%',
              }}
              className={`group relative overflow-hidden bg-white text-gray-900 transition-[flex-grow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none ${
                isActive
                  ? 'p-6 sm:p-7 md:p-8 shadow-md'
                  : 'p-4 md:p-6 hover:bg-gray-50/95'
              }`}
            >
              {/* Active State View (Expanded Card matching the design) */}
              <div
                className={`w-full h-full flex flex-col justify-between transition-opacity duration-300 ${
                  isActive
                    ? 'opacity-100 delay-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none absolute inset-0 p-6 sm:p-7 md:p-8'
                }`}
              >
                {/* Top Image Box */}
                <div className="relative h-44 sm:h-52 md:h-56 w-full shrink-0 overflow-hidden rounded-sm bg-linear-to-br from-gray-100 to-gray-200 border border-gray-200/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xs text-[11px] font-semibold tracking-wider text-gray-800 uppercase shadow-xs">
                    {project.tag}
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-xs font-bold text-gray-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                    {project.number}
                  </div>
                </div>

                {/* Bottom Details Box */}
                <div className="pt-4 sm:pt-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-sans line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectProject) {
                        onSelectProject(project.id);
                      }
                    }}
                    className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group/link cursor-pointer bg-transparent border-0 p-0"
                  >
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Inactive State View: Desktop Vertical Strip / Mobile Compact Row */}
              <div
                className={`w-full h-full transition-opacity duration-300 ${
                  !isActive
                    ? 'opacity-100 delay-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                }`}
              >
                {/* Desktop: Vertical Strip (Index + Vertical Title + Indicator) */}
                <div className="hidden md:flex flex-col items-center justify-between h-full py-4 select-none">
                  <span className="font-mono text-xs font-bold tracking-wider text-gray-400 group-hover:text-gray-700 transition-colors">
                    {project.number}
                  </span>
                  <div className="flex items-center justify-center my-auto">
                    <span className="font-display text-xs font-bold tracking-wider text-gray-700 uppercase [writing-mode:vertical-lr] rotate-180 opacity-70 group-hover:opacity-100 transition-opacity truncate max-h-48">
                      {project.title}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 opacity-50 group-hover:scale-150 group-hover:opacity-100 transition-all" />
                </div>

                {/* Mobile: Compact Horizontal Row */}
                <div className="flex md:hidden items-center justify-between w-full py-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-gray-400">
                      {project.number}
                    </span>
                    <span className="font-display text-sm font-bold text-gray-800">
                      {project.title}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary-400">
                    View
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </BlueprintFrame>
  );
}


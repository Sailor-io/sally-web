import { useRef } from 'react';
import { motion } from 'motion/react';
import { AnnouncementTicker } from '../hero/AnnouncementTicker';
import { ProjectAccordion } from './ProjectAccordion';
import { ROW_1_PROJECTS, ROW_2_PROJECTS } from '../../data/projectsData';

const STICKER_PILLS = [
  {
    id: 'websites',
    label: 'websites',
    baseRotate: -3,
    className:
      'rounded-full bg-primary-400 px-6 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg',
  },
  {
    id: 'mobile-apps',
    label: 'mobile apps',
    baseRotate: 3,
    className:
      'rounded-3xl bg-secondary-300 px-7 py-3 text-gray-950 font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg',
  },
  {
    id: 'dashboards',
    label: 'dashboards',
    baseRotate: -2,
    className:
      'rounded-full bg-primary-700 px-7 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg',
  },
  {
    id: 'ecommerce',
    label: 'e-commerce',
    baseRotate: 1,
    className:
      'rounded-full bg-emerald-800 px-7 py-2.5 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg',
  },
  {
    id: 'maintenance',
    label: 'maintenance',
    baseRotate: -12,
    className:
      'rounded-2xl bg-primary-300 px-6 py-2 text-white font-sans text-lg sm:text-xl font-bold tracking-tight shadow-lg',
  },
  {
    id: 'devops',
    label: 'devops',
    baseRotate: -18,
    className:
      'rounded-2xl bg-lime-700 px-5 py-1.5 text-white font-sans text-base sm:text-lg font-bold tracking-tight shadow-lg',
  },
  {
    id: 'cloud-infrastructure',
    label: 'cloud infrastructure',
    baseRotate: 2,
    className:
      'rounded-full bg-primary-400 px-8 py-3 text-white font-sans text-xl sm:text-2xl font-bold tracking-tight shadow-lg',
  },
];

interface ProjectsContentProps {
  onSelectProject?: (projectId: string) => void;
}

export function ProjectsTopContent({ onSelectProject }: ProjectsContentProps = {}) {
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

      {/* Row 1 Interactive Project Accordion */}
      <ProjectAccordion
        projects={ROW_1_PROJECTS}
        defaultActiveIndex={0}
        onSelectProject={onSelectProject}
      />
    </div>
  );
}

export function ProjectsBottomContent({ onSelectProject }: ProjectsContentProps = {}) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      {/* Row 2 Interactive Project Accordion */}
      <ProjectAccordion
        projects={ROW_2_PROJECTS}
        defaultActiveIndex={0}
        onSelectProject={onSelectProject}
      />

      {/* Bottom Interactive Bouncy Sticker Pills Pile */}
      <div
        ref={constraintsRef}
        className="relative mt-20 pt-12 pb-12 select-none"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto p-4">
          {STICKER_PILLS.map((pill) => (
            <motion.div
              key={pill.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.65}
              dragTransition={{
                bounceStiffness: 450,
                bounceDamping: 20,
                power: 0.2,
              }}
              whileHover={{
                scale: 1.09,
                rotate: pill.baseRotate + (pill.baseRotate >= 0 ? -4 : 4),
                cursor: 'grab',
                transition: { type: 'spring', stiffness: 400, damping: 15 },
              }}
              whileTap={{
                scale: 0.93,
                cursor: 'grabbing',
                transition: { type: 'spring', stiffness: 500, damping: 15 },
              }}
              whileDrag={{
                scale: 1.15,
                zIndex: 50,
                cursor: 'grabbing',
                boxShadow: '0 25px 35px -5px rgba(0, 0, 0, 0.5)',
              }}
              initial={{ rotate: pill.baseRotate }}
              className={`touch-none cursor-grab active:cursor-grabbing select-none transition-shadow ${pill.className}`}
            >
              {pill.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsContentProps = {}) {
  return (
    <div className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-6 pb-24">
      <ProjectsTopContent onSelectProject={onSelectProject} />
      <div className="my-8">
        <AnnouncementTicker showGuides={true} />
      </div>
      <ProjectsBottomContent onSelectProject={onSelectProject} />
    </div>
  );
}

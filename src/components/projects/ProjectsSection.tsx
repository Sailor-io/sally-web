import { useRef } from 'react';
import { motion } from 'motion/react';
import { AnnouncementTicker } from '../hero/AnnouncementTicker';
import { ProjectAccordion, type ProjectItem } from './ProjectAccordion';

const DUMMY_PROJECTS_ROW_1: ProjectItem[] = [
  {
    id: 'kroma',
    number: '01',
    title: 'Kroma Digital Studio',
    description: 'Modern portfolio and interactive digital experience for an avant-garde design agency.',
    tag: 'Web Design / UI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'apex',
    number: '02',
    title: 'Apex Cloud Platform',
    description: 'Unified infrastructure management console and real-time observability suite.',
    tag: 'SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'verve',
    number: '03',
    title: 'Verve Mobile Pay',
    description: 'Next-generation frictionless mobile banking and global cross-border payments.',
    tag: 'Mobile App / Fintech',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'aura',
    number: '04',
    title: 'Aura Living Commerce',
    description: 'Immersive headless e-commerce storefront for sustainable luxury lifestyle.',
    tag: 'E-Commerce / Brand',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
];

const DUMMY_PROJECTS_ROW_2: ProjectItem[] = [
  {
    id: 'nexus',
    number: '05',
    title: 'Nexus AI Engine',
    description: 'Enterprise generative AI platform for autonomous customer workflows and analytics.',
    tag: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'strata',
    number: '06',
    title: 'Strata Supply Chain',
    description: 'End-to-end supply chain visibility and automated inventory dispatch system.',
    tag: 'Logistics Enterprise',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'beacon',
    number: '07',
    title: 'Beacon Health Tracker',
    description: 'Biometric telemetry monitoring and proactive health intelligence mobile app.',
    tag: 'HealthTech / Mobile',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
  {
    id: 'lumina',
    number: '08',
    title: 'Lumina Smart Living',
    description: 'Connected IoT home management suite with intuitive voice & touch automation.',
    tag: 'IoT / Hardware UI',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    link: '#case-study',
  },
];

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

      {/* Row 1 Interactive Project Accordion */}
      <ProjectAccordion projects={DUMMY_PROJECTS_ROW_1} defaultActiveIndex={0} />
    </div>
  );
}

export function ProjectsBottomContent() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      {/* Row 2 Interactive Project Accordion */}
      <ProjectAccordion projects={DUMMY_PROJECTS_ROW_2} defaultActiveIndex={0} />

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

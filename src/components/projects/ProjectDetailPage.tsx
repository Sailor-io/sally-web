import { motion } from 'motion/react';
import { BlueprintFrame } from '../common/BlueprintFrame';
import { type ProjectDetail, getNextProject } from '../../data/projectsData';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onBackToProjects: () => void;
  onSelectProject: (projectId: string) => void;
}

export function ProjectDetailPage({
  project,
  onBackToProjects,
  onSelectProject,
}: ProjectDetailPageProps) {
  const nextProject = getNextProject(project.id);

  const handleNextProject = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSelectProject(nextProject.id);
  };

  const handleBackToProjects = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onBackToProjects();
  };

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-2 sm:pt-4 pb-24"
    >
      {/* 1. Breadcrumbs Nav wrapped with Blueprint Horizontal Guides */}
      <BlueprintFrame
        showNodes={false}
        showHorizontalGuides={true}
        borderStyle="y"
        className="w-full py-3 sm:py-3.5 mb-6 sm:mb-8 bg-transparent"
      >
        <div className="flex items-center gap-2 text-xs sm:text-sm font-sans">
          <button
            type="button"
            onClick={handleBackToProjects}
            className="font-semibold text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
          >
            <span>All Projects</span>
          </button>
          <span className="text-text-muted select-none">&gt;</span>
          <span className="font-medium text-text-secondary truncate max-w-64 sm:max-w-md">
            {project.title}
          </span>
        </div>
      </BlueprintFrame>

      {/* 2. Full-Width Hero Media / Banner Showcase */}
      <BlueprintFrame
        showNodes={true}
        showHorizontalGuides={true}
        borderStyle="all"
        className="w-full overflow-hidden bg-bg-card shadow-2xl rounded-sm"
      >
        <div className="relative w-full aspect-16/8 sm:aspect-16/7 md:aspect-16/6 bg-primary-950 overflow-hidden group">
          <img
            src={project.heroImage}
            alt={`${project.title} Hero Banner`}
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-102"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill Details */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center gap-2">
            <span className="bg-primary-900/90 backdrop-blur-md border border-border-subtle/40 px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wide shadow-md">
              {project.tag}
            </span>
            <span className="hidden sm:inline-block bg-primary-900/90 backdrop-blur-md border border-border-subtle/40 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-200 shadow-md">
              Case Study #{project.number}
            </span>
          </div>
        </div>
      </BlueprintFrame>

      {/* 3. Two-Column Case Study Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-10 sm:pt-14 pb-12">
        {/* Left Column: Sticky Project Metadata & Brief */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 sm:space-y-8">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.12]">
              {project.title}
            </h1>
            <p className="mt-4 sm:mt-5 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Client & Sector Metadata */}
          <div className="space-y-4 pt-4 border-t border-dashed border-border-dashed">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                Client
              </div>
              <div className="font-display text-lg sm:text-xl font-bold text-text-primary mt-1">
                {project.client}
              </div>
            </div>

            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                Sector
              </div>
              <div className="font-sans text-sm sm:text-base font-medium text-text-secondary mt-1">
                {project.sector}
              </div>
            </div>

            {project.services && project.services.length > 0 && (
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Scope of Work
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="inline-block rounded-md bg-bg-card border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Narrative Case Study Deep Dive */}
        <div className="lg:col-span-7 space-y-12 sm:space-y-16">
          {/* Section 1: The Problem */}
          <section className="space-y-5">
            <div className="w-full overflow-hidden rounded-sm border border-border-subtle bg-bg-card aspect-16/10] sm:aspect-16/9] shadow-sm">
              <img
                src={project.problem.image}
                alt="The problem visual"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                {project.problem.title}
              </h2>
              <p className="mt-3 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                {project.problem.description}
              </p>
            </div>
          </section>

          {/* Section 2: The Solution */}
          <section className="space-y-5">
            <div className="w-full overflow-hidden rounded-sm border border-border-subtle bg-bg-card aspect-16/10 sm:aspect-video shadow-sm">
              <img
                src={project.solution.image}
                alt="The solution visual"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                {project.solution.title}
              </h2>
              <p className="mt-3 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                {project.solution.description}
              </p>
            </div>
          </section>

          {/* Section 3: The Impact */}
          <section className="space-y-5">
            <div className="w-full overflow-hidden rounded-sm border border-border-subtle bg-bg-card aspect-16/10 sm:aspect-video shadow-sm">
              <img
                src={project.impact.image}
                alt="The impact visual"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                {project.impact.title}
              </h2>
              <p className="mt-3 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                {project.impact.description}
              </p>
            </div>
          </section>

          {/* Next Project Footer Link */}
          <div className="pt-8 border-t border-dashed border-border-dashed">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 rounded-sm border border-border-subtle bg-bg-card hover:bg-bg-subtle/50 transition-colors">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Next Project
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mt-1">
                  {nextProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleNextProject}
                className="inline-flex items-center gap-2 font-sans text-sm sm:text-base font-semibold text-primary-400 hover:text-primary-300 transition-colors cursor-pointer group bg-transparent border-0 p-0 self-start sm:self-center"
              >
                <span>Read case study</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
        </div>
      </div>
    </motion.article>
  );
}

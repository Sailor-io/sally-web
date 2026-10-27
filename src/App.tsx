import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { LandingLayout } from './components/layout/LandingLayout';
import { HeroContent } from './components/hero/HeroContent';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { BlueprintStarNode } from './components/common/BlueprintFrame';

export function App() {
  const [activeView, setActiveView] = useState<'hero' | 'projects'>('hero');

  const handleNavigateToProjects = () => {
    setActiveView('projects');
    const projectsEl = document.getElementById('projects-view');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToHome = () => {
    setActiveView('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPos > windowHeight * 0.45) {
        if (activeView !== 'projects') setActiveView('projects');
      } else {
        if (activeView !== 'hero') setActiveView('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  return (
    <ThemeProvider>
      <LandingLayout
        onNavigateToProjects={handleNavigateToProjects}
        onNavigateToHome={handleNavigateToHome}
      >
        {/* Single-Page Animated View Container */}
        <div className="relative w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {/* Hero Section View */}
          <section
            id="hero-view"
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activeView === 'hero'
                ? 'opacity-100 translate-y-0'
                : 'opacity-40 -translate-y-8'
            }`}
          >
            <HeroContent onNavigateToProjects={handleNavigateToProjects} />
          </section>

          {/* Section Divider Line with Blueprint corner nodes */}
          <div className="relative mx-auto max-w-300 px-6 lg:px-12 my-8">
            <div className="h-px w-full border-t border-dashed border-border-dashed opacity-60" />
            <BlueprintStarNode className="left-6 lg:left-12 top-0 -translate-x-1/2 -translate-y-1/2" />
            <BlueprintStarNode className="right-6 lg:right-12 top-0 translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Projects Section View */}
          <section
            id="projects-view"
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activeView === 'projects'
                ? 'opacity-100 translate-y-0'
                : 'opacity-90'
            }`}
          >
            <ProjectsSection onBackToHome={handleNavigateToHome} />
          </section>
        </div>
      </LandingLayout>
    </ThemeProvider>
  );
}

export default App;

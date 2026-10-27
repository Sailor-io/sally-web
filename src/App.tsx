import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeProvider';
import { LandingLayout } from './components/layout/LandingLayout';
import { HeroMainContent } from './components/hero/HeroContent';
import { AnnouncementTicker } from './components/hero/AnnouncementTicker';
import { ProjectsTopContent, ProjectsBottomContent } from './components/projects/ProjectsSection';

export function App() {
  const [activeView, setActiveView] = useState<'hero' | 'projects'>('hero');

  const handleNavigateToProjects = () => {
    if (activeView === 'projects') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveView('projects');
  };

  const handleNavigateToHome = () => {
    if (activeView === 'hero') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveView('hero');
  };

  return (
    <ThemeProvider>
      <LandingLayout
        activeView={activeView}
        onNavigateToProjects={handleNavigateToProjects}
        onNavigateToHome={handleNavigateToHome}
      >
        <div className="mx-auto w-full max-w-300 px-6 lg:px-12 pt-2 sm:pt-4 pb-24">
          {/* Projects View Top: Header & Row 1 (Expands smoothly above the marquee ticker) */}
          <AnimatePresence initial={false}>
            {activeView === 'projects' && (
              <motion.div
                key="projects-top"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <ProjectsTopContent />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shared Marquee Ticker: Physically glides from the top down to the center between Row 1 and Row 2 */}
          <motion.div
            layout="position"
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full my-6 sm:my-8"
          >
            <AnnouncementTicker showGuides={true} />
          </motion.div>

          {/* Hero View Content: Headline & Capability Tabs (Collapses when going to projects) */}
          <AnimatePresence initial={false}>
            {activeView === 'hero' && (
              <motion.div
                key="hero-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <HeroMainContent onNavigateToProjects={handleNavigateToProjects} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects View Bottom: Row 2 & Sticker Pills (Expands smoothly below the marquee ticker) */}
          <AnimatePresence initial={false}>
            {activeView === 'projects' && (
              <motion.div
                key="projects-bottom"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="overflow-hidden"
              >
                <ProjectsBottomContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LandingLayout>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { StarfieldBackground } from '../background/StarfieldBackground';
import { PerspectiveLines } from '../background/PerspectiveLines';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
  activeView?: 'hero' | 'projects' | 'project-detail';
  onNavigateToProjects?: () => void;
  onNavigateToHome?: () => void;
}

export function LandingLayout({
  children,
  activeView = 'hero',
  onNavigateToProjects,
  onNavigateToHome,
}: LandingLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-bg text-text-primary transition-colors duration-300">
      {/* Interactive Starfield Canvas Background */}
      <StarfieldBackground />

      {/* Blueprint grid guide lines */}
      <PerspectiveLines />

      {/* Fixed/Sticky Top Navigation */}
      <Navbar
        activeView={activeView}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToHome={onNavigateToHome}
      />

      {/* Main Content Viewport */}
      <main className="relative z-10 flex min-h-[calc(100vh-160px)] flex-col">
        {children}
      </main>

      {/* Branded Footer */}
      <Footer />
    </div>
  );
}

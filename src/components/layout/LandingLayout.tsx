import React from 'react';
import { StarfieldBackground } from '../background/StarfieldBackground';
import { PerspectiveLines } from '../background/PerspectiveLines';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-bg text-text-primary transition-colors duration-300">
      {/* Interactive 60-120FPS Starfield Canvas */}
      <StarfieldBackground />

      {/* Subtle perspective layout grid lines */}
      <PerspectiveLines />

      {/* Fixed/Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="relative z-10 flex min-h-[calc(100vh-160px)] flex-col">
        {children}
      </main>

      {/* Branded Footer */}
      <Footer />
    </div>
  );
}

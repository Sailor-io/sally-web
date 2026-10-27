import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { BlueprintFrame } from '../common/BlueprintFrame';
import logoDark from '../../assets/svgs/Logo.svg';
import logoLight from '../../assets/svgs/LogoLight.svg';

interface NavbarProps {
  onNavigateToProjects?: () => void;
  onNavigateToHome?: () => void;
  activeView?: 'hero' | 'projects';
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center rounded-full p-1 transition-colors duration-200 bg-gray-100 dark:bg-primary-800 border border-border-subtle cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sliding Pill Indicator */}
      <div
        className={`absolute top-1 bottom-1 w-7 rounded-full bg-primary-300 shadow-sm transition-transform duration-300 ease-out ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      />

      {/* Sun Icon (Light Mode) */}
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center transition-colors duration-200 ${
          theme === 'light' ? 'text-white' : 'text-gray-500'
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </span>

      {/* Moon Icon (Dark Mode) */}
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center transition-colors duration-200 ${
          theme === 'dark' ? 'text-white' : 'text-gray-500'
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}

export function Navbar({ onNavigateToProjects, onNavigateToHome, activeView = 'hero' }: NavbarProps) {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-colors duration-300 backdrop-blur-md bg-bg/85">
        <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-6 lg:px-12">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={onNavigateToHome}
            className="group flex items-center transition-opacity hover:opacity-80 cursor-pointer bg-transparent border-0 p-0"
            aria-label="Sally Home"
          >
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Sally"
              className="h-9 w-auto"
            />
          </button>

          {/* Action Controls & Navigation */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={onNavigateToProjects}
                className={`rounded-lg px-3.5 py-2 font-sans text-base font-semibold transition-colors cursor-pointer bg-transparent border-0 ${
                  activeView === 'projects'
                    ? 'text-primary-400 font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Projects
              </button>

              <a
                href="#contact"
                className="rounded-lg px-3.5 py-2 font-sans text-base font-semibold text-text-secondary transition-colors hover:text-text-primary"
              >
                Get in touch
              </a>
            </nav>

            {/* Theme Toggle Pill Switch */}
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="10" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg text-text-primary overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="mx-auto flex h-20 w-full max-w-300 items-center justify-between px-6 lg:px-12">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToHome?.();
                }}
                className="group flex items-center transition-opacity hover:opacity-80 cursor-pointer bg-transparent border-0 p-0"
                aria-label="Sally Home"
              >
                <img
                  src={theme === 'dark' ? logoDark : logoLight}
                  alt="Sally"
                  className="h-9 w-auto"
                />
              </button>

              <div className="flex items-center gap-3">
                <ThemeToggle />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close mobile menu"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Blueprint Frame Overlay Container matching Screenshot 2 */}
            <div className="flex-1 px-6 pb-12 pt-2">
              <BlueprintFrame
                showNodes={true}
                showHorizontalGuides={true}
                borderStyle="all"
                className="h-full min-h-[65vh] p-8 sm:p-12 flex flex-col justify-start"
              >
                <nav className="flex flex-col space-y-10 pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToHome?.();
                    }}
                    className={`text-left font-sans text-2xl font-medium tracking-tight underline decoration-1 underline-offset-8 transition-colors cursor-pointer ${
                      activeView === 'hero'
                        ? 'text-primary-400 font-bold'
                        : 'text-text-primary hover:text-primary-300'
                    }`}
                  >
                    Home
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToProjects?.();
                    }}
                    className={`text-left font-sans text-2xl font-medium tracking-tight underline decoration-1 underline-offset-8 transition-colors cursor-pointer ${
                      activeView === 'projects'
                        ? 'text-primary-400 font-bold'
                        : 'text-text-primary hover:text-primary-300'
                    }`}
                  >
                    Projects
                  </button>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left font-sans text-2xl font-medium tracking-tight text-text-primary underline decoration-1 underline-offset-8 hover:text-primary-300 transition-colors"
                  >
                    Get in touch
                  </a>
                </nav>
              </BlueprintFrame>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

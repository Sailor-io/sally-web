import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../assets/svgs/Logo.svg';
import logoLight from '../../assets/svgs/LogoLight.svg';

interface NavbarProps {
  onNavigateToProjects?: () => void;
  onNavigateToHome?: () => void;
}

export function Navbar({ onNavigateToProjects, onNavigateToHome }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur-md bg-bg/85">
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
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={onNavigateToProjects}
              className="rounded-lg px-3.5 py-2 font-sans text-base font-semibold text-text-secondary transition-colors hover:text-text-primary cursor-pointer bg-transparent border-0"
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
        </div>
      </div>
    </header>
  );
}

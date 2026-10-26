export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-12">
        {/* Top dashed divider */}
        <div className="h-px w-full border-t border-dashed border-border-dashed/40 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm text-text-secondary">
          {/* Copyright notice */}
          <p>© Copyright {currentYear} Sally. All rights reserved.</p>

          {/* Secondary links / badge */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-text-primary"
            >
              Terms of Service
            </a>
            <span className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-primary-800 text-text-secondary border border-border-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-300" />
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

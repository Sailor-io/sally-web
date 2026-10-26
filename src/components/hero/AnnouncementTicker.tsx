export function AnnouncementTicker() {
  return (
    <div className="relative mb-12 overflow-hidden rounded-md bg-ticker-bg py-2.5 text-ticker-text shadow-sm">
      <div className="flex w-max animate-marquee items-center gap-4 text-xs sm:text-sm font-semibold tracking-wider uppercase">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <span>World-Class Digital Products</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

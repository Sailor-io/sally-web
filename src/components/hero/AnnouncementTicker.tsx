import { BlueprintFrame } from '../common/BlueprintFrame';

interface AnnouncementTickerProps {
  className?: string;
  showGuides?: boolean;
}

export function AnnouncementTicker({
  className = '',
  showGuides = true,
}: AnnouncementTickerProps) {
  return (
    <BlueprintFrame
      showNodes={true}
      showHorizontalGuides={showGuides}
      borderStyle="y"
      className={`my-6 w-full ${className}`}
    >
      <div className="relative overflow-hidden bg-ticker-bg py-2.5 text-ticker-text shadow-sm select-none">
        <div className="flex w-max animate-marquee items-center gap-6 text-[13px] font-bold tracking-[0.16em] uppercase">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span>World-Class Digital Products</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="opacity-90"
              >
                <path d="M8 0C8 4.418 11.582 8 16 8C11.582 8 8 11.582 8 16C8 11.582 4.418 8 0 8C4.418 8 8 4.418 8 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </BlueprintFrame>
  );
}

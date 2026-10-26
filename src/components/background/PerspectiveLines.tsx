export function PerspectiveLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-360 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1200px centered grid lines container */}
      <div className="relative mx-auto h-full w-full max-w-300">
        {/* Left container edge line */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-border-dashed/30" />
        {/* Right container edge line */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-border-dashed/30" />
        {/* Center alignment guide */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border-dashed/15" />
        {/* 1/3 and 2/3 column guides */}
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-border-dashed/10" />
        <div className="absolute top-0 bottom-0 left-2/3 w-px bg-border-dashed/10" />

        {/* Subtle horizontal dashed lines */}
        <div className="absolute top-20 left-0 right-0 h-px border-t border-dashed border-border-dashed/30" />
        <div className="absolute top-122.5 left-0 right-0 h-px border-t border-dashed border-border-dashed/30" />
        <div className="absolute 142.5 left-0 right-0 h-px border-t border-dashed border-border-dashed/30" />
      </div>
    </div>
  );
}

export function PerspectiveLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-300 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1200px centered grid blueprint guides */}
      <div className="relative mx-auto h-full w-full max-w-300">
        {/* Left container edge line */}
        <div className="absolute top-0 bottom-0 left-0 w-px border-l border-dashed border-border-dashed opacity-40" />
        {/* Right container edge line */}
        <div className="absolute top-0 bottom-0 right-0 w-px border-r border-dashed border-border-dashed opacity-40" />
        {/* Center alignment guide */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-border-dashed opacity-20" />
        {/* 1/4 and 3/4 column guides */}
        <div className="absolute top-0 bottom-0 left-1/4 w-px border-l border-dashed border-border-dashed opacity-15" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px border-l border-dashed border-border-dashed opacity-15" />
      </div>
    </div>
  );
}

import React from 'react';

interface BlueprintFrameProps {
  children?: React.ReactNode;
  className?: string;
  showNodes?: boolean;
  showHorizontalGuides?: boolean;
  borderStyle?: 'all' | 'x' | 'y' | 'none';
}

export function BlueprintStarNode({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-300 drop-shadow-[0_0_6px_var(--color-primary-300)] ${className}`}
    >
      <path d="M8 0C8 4.418 11.582 8 16 8C11.582 8 8 11.582 8 16C8 11.582 4.418 8 0 8C4.418 8 8 4.418 8 0Z" />
    </svg>
  );
}

export function BlueprintFrame({
  children,
  className = '',
  showNodes = true,
  showHorizontalGuides = false,
  borderStyle = 'all',
}: BlueprintFrameProps) {
  const borderClasses = {
    all: 'border border-dashed border-border-dashed',
    x: 'border-x border-dashed border-border-dashed',
    y: 'border-y border-dashed border-border-dashed',
    none: '',
  }[borderStyle];

  return (
    <div className={`relative ${borderClasses} ${className}`}>
      {/* Horizontal Alignment Guide Lines extending to viewport edges */}
      {showHorizontalGuides && (
        <>
          <div className="pointer-events-none absolute left-[-200vw] right-[-200vw] top-0 h-px border-t border-dashed border-border-dashed opacity-60" />
          <div className="pointer-events-none absolute left-[-200vw] right-[-200vw] bottom-0 h-px border-b border-dashed border-border-dashed opacity-60" />
        </>
      )}

      {/* Blueprint Corner Selection / Anchor Nodes (4-point Stars) */}
      {showNodes && (
        <>
          {/* Top-Left */}
          <BlueprintStarNode className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
          {/* Top-Right */}
          <BlueprintStarNode className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
          {/* Bottom-Left */}
          <BlueprintStarNode className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
          {/* Bottom-Right */}
          <BlueprintStarNode className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        </>
      )}

      {children}
    </div>
  );
}

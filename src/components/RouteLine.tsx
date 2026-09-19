import React from 'react';

interface RouteLineProps {
  origin?: string;
  destination?: string;
  className?: string;
  variant?: 'minimal' | 'full' | 'compact';
  animated?: boolean;
}

export const RouteLine: React.FC<RouteLineProps> = ({
  origin = 'PICKUP',
  destination = 'DESTINATION',
  className = '',
  variant = 'full',
  animated = false,
}) => {
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0B1830]/70 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-[#FF6A00] shrink-0" />
        <span className="h-[2px] w-8 sm:w-12 bg-[#0B1830]/20" />
        <span className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-[#0B1830]/50 shrink-0" />
        <span className="w-2 h-2 rounded-full bg-[#0B1830] shrink-0" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#0B1830] ${className}`}>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span>{origin}</span>
        </div>
        <div className="relative flex-1 flex items-center min-w-[36px]">
          <div className="h-[2px] w-full bg-[#0B1830]/20" />
          <span className="absolute right-0 w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-[#0B1830]" />
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#0B1830]" />
          <span>{destination}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-between w-full max-w-xl mx-auto py-3 px-4 sm:px-6 rounded-full bg-[#0B1830]/5 border border-[#0B1830]/10 ${className}`}
      role="img"
      aria-label={`${origin} to ${destination} route line`}
    >
      {/* Origin Checkpoint */}
      <div className="flex items-center gap-2 sm:gap-2.5 z-10 shrink-0">
        <span className="relative flex h-3 w-3 items-center justify-center">
          {animated && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6A00]" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0B1830] uppercase">
          {origin}
        </span>
      </div>

      {/* Connecting Directional Line */}
      <div className="relative flex-1 mx-3 sm:mx-6 flex items-center">
        <div className="h-[2px] w-full bg-[#0B1830]/25 rounded-full" />
        {/* Subtle center marker or pulse */}
        <div className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest font-semibold text-[#0B1830]/60 bg-[#F4F1EA] border border-[#0B1830]/10 hidden sm:block">
          ROUTE
        </div>
        {/* Arrowhead */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-[#0B1830]" />
      </div>

      {/* Destination Checkpoint */}
      <div className="flex items-center gap-2 sm:gap-2.5 z-10 shrink-0">
        <span className="h-3 w-3 rounded-full bg-[#0B1830]" />
        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0B1830] uppercase">
          {destination}
        </span>
      </div>
    </div>
  );
};

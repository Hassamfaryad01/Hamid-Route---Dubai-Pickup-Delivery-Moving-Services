import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${alignmentClasses} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 ${
          dark ? 'bg-white/10 text-[#FF6A00]' : 'bg-[#0B1830]/5 text-[#FF6A00]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
          {badge}
        </div>
      )}

      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#0B1830]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-white/75' : 'text-[#0B1830]/75'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

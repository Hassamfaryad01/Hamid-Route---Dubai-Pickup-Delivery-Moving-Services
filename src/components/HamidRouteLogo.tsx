import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: 'dark' | 'light';
}

export const HamidRouteLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  textColor,
}) => {
  const isLightText = textColor === 'light' || variant === 'light';

  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl sm:text-5xl',
  }[size];

  return (
    <div className={`inline-flex items-center select-none font-display font-black tracking-tight leading-none ${sizeClasses} ${className}`}>
      <span className={isLightText ? 'text-white' : 'text-[#0B1830]'}>
        HAMID
      </span>
      <span className="text-[#FF6A00] ml-1.5 sm:ml-2">
        ROUTE
      </span>
    </div>
  );
};


import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { trackEvent } from '../utils/analytics';

interface CallButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  label?: string;
}

export const CallButton: React.FC<CallButtonProps> = ({
  className = '',
  variant = 'secondary',
  size = 'md',
  showNumber = false,
  label = 'CALL NOW',
}) => {
  const handleClick = () => {
    trackEvent('phone_click', {
      destinationNumber: BUSINESS_INFO.primaryPhone,
      source: label,
    });
    trackEvent('cta_click', {
      type: 'phone',
      label,
    });
  };

  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 rounded-xl gap-2 min-h-[44px]',
    lg: 'text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl gap-2.5 min-h-[50px]',
  }[size];

  const variantStyles = {
    primary: 'bg-[#FF6A00] text-white hover:bg-[#E55F00] shadow-sm active:scale-[0.98]',
    secondary: 'bg-[#0B1830] text-white hover:bg-[#152545] shadow-sm active:scale-[0.98]',
    outline: 'border-2 border-[#0B1830] text-[#0B1830] hover:bg-[#0B1830] hover:text-white active:scale-[0.98]',
    pill: 'bg-[#0B1830] text-white hover:bg-[#152545] rounded-full active:scale-[0.98]',
  }[variant];

  return (
    <a
      href={BUSINESS_INFO.telLink}
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      aria-label={`Call Hamid Route directly at ${BUSINESS_INFO.primaryPhone}`}
    >
      <Phone className="w-4 h-4 shrink-0" />
      <span>{label}</span>
      {showNumber && (
        <span className="opacity-90 font-mono tracking-normal text-xs ml-1 hidden sm:inline">
          ({BUSINESS_INFO.primaryPhone})
        </span>
      )}
    </a>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_INFO } from '../data/content';
import { trackEvent } from '../utils/analytics';

interface WhatsAppButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  prefilledMessage?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  prefilledMessage,
  label = 'WHATSAPP NOW',
}) => {
  const url = getWhatsAppUrl(prefilledMessage);

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      destination: BUSINESS_INFO.primaryPhone,
      messageSnippet: prefilledMessage || BUSINESS_INFO.primaryWhatsAppMessage,
      label,
    });
    trackEvent('cta_click', {
      type: 'whatsapp',
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
    primary: 'bg-[#FF6A00] text-white hover:bg-[#E55F00] shadow-sm hover:shadow active:scale-[0.98]',
    secondary: 'bg-[#0B1830] text-white hover:bg-[#152545] shadow-sm active:scale-[0.98]',
    outline: 'border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white active:scale-[0.98]',
    teal: 'bg-[#11B8A5] text-white hover:bg-[#0EA291] shadow-sm active:scale-[0.98]',
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      aria-label={`WhatsApp Hamid Route at ${BUSINESS_INFO.primaryPhone}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
};

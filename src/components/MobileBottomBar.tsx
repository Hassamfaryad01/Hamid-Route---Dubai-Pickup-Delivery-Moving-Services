import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/content';
import { trackEvent } from '../utils/analytics';

interface MobileBottomBarProps {
  currentPrefilledMessage?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentPrefilledMessage,
}) => {
  const whatsappUrl = getWhatsAppUrl(currentPrefilledMessage);

  const handlePhoneClick = () => {
    trackEvent('phone_click', {
      source: 'sticky_mobile_bottom_bar',
      number: BUSINESS_INFO.primaryPhone,
    });
    trackEvent('cta_click', {
      type: 'phone',
      source: 'sticky_mobile_bottom_bar',
    });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      source: 'sticky_mobile_bottom_bar',
      message: currentPrefilledMessage || BUSINESS_INFO.primaryWhatsAppMessage,
    });
    trackEvent('cta_click', {
      type: 'whatsapp',
      source: 'sticky_mobile_bottom_bar',
    });
  };

  return (
    <aside
      aria-label="Quick contact mobile bar"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0B1830] text-white p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl border-t border-[#FFFFFF]/10 backdrop-blur-lg"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.telLink}
          onClick={handlePhoneClick}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#13254A] hover:bg-[#1A3160] active:scale-[0.98] text-white font-display font-bold text-xs tracking-wider transition-transform border border-white/10"
          aria-label={`Call Hamid Route now at ${BUSINESS_INFO.primaryPhone}`}
        >
          <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FF6A00] hover:bg-[#E55F00] active:scale-[0.98] text-white font-display font-bold text-xs tracking-wider transition-transform shadow-md"
          aria-label="Chat with Hamid Route on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span>WHATSAPP NOW</span>
        </a>
      </div>
    </aside>
  );
};

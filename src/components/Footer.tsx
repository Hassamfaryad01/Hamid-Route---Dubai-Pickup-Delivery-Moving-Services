import React from 'react';
import { HamidRouteLogo } from './HamidRouteLogo';
import { CallButton } from './CallButton';
import { WhatsAppButton } from './WhatsAppButton';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  navigate: (path: string) => void;
  showPreFooterCTA?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  navigate,
  showPreFooterCTA = true,
}) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#0B1830] text-white pt-12 sm:pt-16 pb-24 md:pb-12 border-t border-white/10">
      {/* SECTION 17 / 57: PRE-FOOTER FINAL CTA */}
      {showPreFooterCTA && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
              FINAL STEP
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              READY TO MOVE IT?
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Tell us what needs moving and where it needs to go.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
              <CallButton variant="primary" size="lg" className="w-full sm:w-auto" label="CALL NOW" />
              <WhatsAppButton variant="teal" size="lg" className="w-full sm:w-auto" label="WHATSAPP NOW" />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-white/60">
              <span>Direct Phone: <strong className="text-white">{BUSINESS_INFO.primaryPhone}</strong></span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="text-[#FF6A00] font-bold tracking-widest uppercase">MOVE THE RIGHT WAY.</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Typography & Identity */}
          <div className="space-y-4">
            <div>
              <HamidRouteLogo size="lg" textColor="light" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              UAE pickup, delivery, moving and transport services. Founded by Hamid Bajwa. Simple, direct communication from pickup to destination.
            </p>
            <div className="pt-2 text-xs text-[#FF6A00] font-bold tracking-widest uppercase">
              MOVE THE RIGHT WAY.
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Movement Services
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="/furniture-pickup-delivery-dubai/" onClick={(e) => handleNav('/furniture-pickup-delivery-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Furniture Pickup & Delivery
                </a>
              </li>
              <li>
                <a href="/appliance-pickup-delivery-dubai/" onClick={(e) => handleNav('/appliance-pickup-delivery-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Appliance Pickup & Delivery
                </a>
              </li>
              <li>
                <a href="/single-item-pickup-dubai/" onClick={(e) => handleNav('/single-item-pickup-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Single-Item Transport
                </a>
              </li>
              <li>
                <a href="/moving-shifting-dubai/" onClick={(e) => handleNav('/moving-shifting-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Moving & Shifting Services
                </a>
              </li>
              <li>
                <a href="/office-moving-dubai/" onClick={(e) => handleNav('/office-moving-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Office Moving
                </a>
              </li>
              <li>
                <a href="/large-load-transport-dubai/" onClick={(e) => handleNav('/large-load-transport-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Large Load Transport
                </a>
              </li>
              <li>
                <a href="/junk-clearance-dubai/" onClick={(e) => handleNav('/junk-clearance-dubai/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Pickup & Clearance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Areas */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Explore & Areas
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="/how-it-works/" onClick={(e) => handleNav('/how-it-works/', e)} className="hover:text-[#FF6A00] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/reviews/" onClick={(e) => handleNav('/reviews/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/about/" onClick={(e) => handleNav('/about/', e)} className="hover:text-[#FF6A00] transition-colors">
                  About Hamid Bajwa
                </a>
              </li>
              <li>
                <a href="/areas/" onClick={(e) => handleNav('/areas/', e)} className="hover:text-[#FF6A00] transition-colors">
                  UAE Coverage Areas
                </a>
              </li>
              <li>
                <a href="/contact/" onClick={(e) => handleNav('/contact/', e)} className="hover:text-[#FF6A00] transition-colors">
                  Contact Hamid Route
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Business Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Direct Contact
            </h3>
            <p className="text-xs text-white/70">
              No quote calculators or booking forms. Speak with us directly:
            </p>
            <div className="space-y-2.5">
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center gap-2.5 text-sm text-white font-bold hover:text-[#FF6A00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6A00]" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white font-bold hover:text-[#FF6A00] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#11B8A5]" />
                <span>WhatsApp Available</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-white/70">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span>Active routes serving residential and commercial communities across UAE.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Hamid Route. All rights reserved. Founded by Hamid Bajwa.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy/" onClick={(e) => handleNav('/privacy/', e)} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms/" onClick={(e) => handleNav('/terms/', e)} className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

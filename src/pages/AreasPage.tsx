import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { DUBAI_AREAS, BUSINESS_INFO } from '../data/content';
import { MapPin, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

interface AreasPageProps {
  navigate: (path: string) => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            DUBAI GEOGRAPHIC COVERAGE
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            PICKUP & MOVING ACROSS DUBAI.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed">
            Active daily pickup and delivery routes connecting towers, villa communities, and business centers across Dubai.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="ALL DUBAI COMMUNITIES"
              destination="ANY DESTINATION"
              variant="compact"
              className="max-w-md mx-auto bg-white/60"
            />
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {DUBAI_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#0B1830]/10 shadow-xs flex items-start gap-3.5 hover:border-[#FF6A00]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0B1830]/5 flex items-center justify-center text-[#FF6A00] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base text-[#0B1830]">
                  {area.name}
                </h2>
                <p className="text-xs text-[#0B1830]/60 mt-1">
                  {area.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Access & Permit Note */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-[#0B1830]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6A00]">
            <ShieldCheck className="w-4 h-4" />
            <span>Building & Community Access</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
            Familiar With Dubai Security & Loading Bays
          </h2>
          <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
            Many Dubai properties — such as high-rise residences in Downtown, Marina, and DIFC, or gated communities in Arabian Ranches and Palm Jumeirah — require service elevator bookings or security gate permits. We assist in aligning pickup times with your building access requirements so moves proceed without hitches.
          </p>
          <div className="pt-2 text-xs text-[#0B1830]/70 font-semibold">
            ✓地下 parking clearance check • ✓ Service elevator loading coordination • ✓ Clean handling
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-10 bg-[#0B1830] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4">
          <h3 className="font-display font-extrabold text-2xl text-white">
            Need an item moved in your area today?
          </h3>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            Contact Hamid Route directly to check today&apos;s active vehicle routes and available timing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CallButton variant="primary" size="md" label="CALL 050 741 9304" />
            <WhatsAppButton variant="teal" size="md" label="WHATSAPP NOW" />
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../data/content';
import { CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HowItWorksPageProps {
  navigate: (path: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            THE HAMID ROUTE PROCESS
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            A SIMPLE ROUTE FROM PICKUP TO DESTINATION.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed">
            Moving should not require endless paperwork, opaque pricing, or call center queues. We keep the route direct and transparent.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="STEP 1"
              destination="STEP 3"
              variant="compact"
              className="max-w-xs mx-auto bg-white/60"
            />
          </div>
        </div>

        {/* 3 Step Breakdown */}
        <div className="space-y-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-7 sm:p-10 border border-[#0B1830]/10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-3 text-center md:text-left">
                <div className="inline-block font-display font-black text-5xl sm:text-6xl text-[#FF6A00]">
                  {step.number}
                </div>
                <div className="text-xs font-mono font-bold text-[#0B1830]/50 tracking-widest uppercase mt-1">
                  CHECKPOINT {idx + 1}
                </div>
              </div>

              <div className="md:col-span-6 space-y-2">
                <div className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                  {step.subtitle}
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
                  {step.title}
                </h2>
                <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center items-center md:items-end">
                <div className="bg-[#F4F1EA] p-3 rounded-2xl text-center w-full">
                  <span className="text-xs font-bold text-[#0B1830] block">
                    {step.action}
                  </span>
                  <span className="text-[11px] text-[#11B8A5] font-semibold mt-0.5 block">
                    ✓ Direct & Simple
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What to Prepare Section */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#0B1830]/10 shadow-sm space-y-6">
          <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
            Helpful Details to Have Ready
          </h2>
          <p className="text-sm sm:text-base text-[#0B1830]/80">
            When you call or WhatsApp, sharing these few details helps us confirm vehicle suitability and timing immediately:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F4F1EA] space-y-1">
              <strong className="text-sm text-[#0B1830] block font-display">1. Pickup & Drop-Off Locations</strong>
              <span className="text-xs text-[#0B1830]/75">Building names or community areas (e.g., Marina Gate to JVC District 12).</span>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F1EA] space-y-1">
              <strong className="text-sm text-[#0B1830] block font-display">2. Photo or Description of Items</strong>
              <span className="text-xs text-[#0B1830]/75">A quick phone photo on WhatsApp shows dimensions and handling needs instantly.</span>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F1EA] space-y-1">
              <strong className="text-sm text-[#0B1830] block font-display">3. Building Access & Elevators</strong>
              <span className="text-xs text-[#0B1830]/75">Elevator access vs. stairs, and whether service lift permits are required.</span>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F1EA] space-y-1">
              <strong className="text-sm text-[#0B1830] block font-display">4. Preferred Date & Time Window</strong>
              <span className="text-xs text-[#0B1830]/75">Same-day urgent moves or scheduled upcoming weekend shifts.</span>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 bg-[#0B1830] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Ready to start your route?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto">
            Contact Hamid Bajwa now on 050 741 9304 to discuss your movement requirements.
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

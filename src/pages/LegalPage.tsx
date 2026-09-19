import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { RouteLine } from '../components/RouteLine';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  navigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            LEGAL NOTICE
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1830] tracking-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>
          <p className="mt-2 text-xs text-[#0B1830]/60 font-mono">
            Hamid Route • UAE • Effective Date: {new Date().getFullYear()}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0B1830]/10 shadow-sm space-y-6 text-sm sm:text-base text-[#0B1830]/85 leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  1. Information We Receive
                </h2>
                <p>
                  Hamid Route operates exclusively through direct customer telephone calls and WhatsApp messaging. We collect only the operational information necessary to execute pickup and delivery services: your name, telephone number, pickup location, delivery address, and photographs or descriptions of cargo you share voluntarily with us.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  2. Purpose of Communication
                </h2>
                <p>
                  Your information is used strictly to coordinate transit, dispatch vehicles, provide updates regarding arrival times, and confirm successful delivery. We do not sell, lease, or share personal contact details with marketing brokers or unsolicited third parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  3. Messaging Platforms
                </h2>
                <p>
                  When communicating via WhatsApp, standard WhatsApp security and encryption apply. We treat all shared property addresses and gate entry details with strict professional confidentiality.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  4. Contact
                </h2>
                <p>
                  For questions concerning your data or privacy, contact Hamid Bajwa directly at {BUSINESS_INFO.primaryPhone}.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  1. Service Scope
                </h2>
                <p>
                  Hamid Route provides practical transport, pickup, moving, and delivery services within UAE. All service arrangements, timings, and vehicular assignments are agreed upon individually via phone or WhatsApp prior to execution.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  2. Customer Responsibilities
                </h2>
                <p>
                  Customers are responsible for ensuring accurate pickup and destination addresses, securing any necessary building move-in/move-out permits or gate security passes, and declaring fragile or high-value items prior to transit so appropriate padding and strapping can be utilized.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  3. Cargo Care & Limitation
                </h2>
                <p>
                  We treat all possessions with care, utilizing protective blankets and tie-down straps. In the event of unforeseen transit delays due to regional UAE traffic or building security access hold-ups, we keep the customer directly informed.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
                  4. Direct Agreement
                </h2>
                <p>
                  By initiating a pickup or moving request via telephone or WhatsApp with Hamid Route, you acknowledge and accept these straightforward operational terms.
                </p>
              </section>
            </>
          )}

          <div className="pt-6 border-t border-[#0B1830]/10">
            <RouteLine origin="TRANSPARENT" destination="RESPECTFUL" variant="compact" />
          </div>
        </div>

      </div>
    </div>
  );
};

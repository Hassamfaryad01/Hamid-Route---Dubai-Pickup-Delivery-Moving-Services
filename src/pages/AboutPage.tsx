import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BUSINESS_INFO } from '../data/content';
import { ShieldCheck, Route, PhoneCall, Compass, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            FOUNDER & PHILOSOPHY
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            THE STORY BEHIND HAMID ROUTE.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed">
            Founded by Hamid Bajwa to bring straightforward communication and practical care to UAE pickup and moving services.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="OUR START"
              destination="YOUR ROUTE"
              variant="compact"
              className="max-w-xs mx-auto bg-white/60"
            />
          </div>
        </div>

        {/* Founder Story Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0B1830]/10 shadow-sm space-y-6">
          <div className="border-b border-[#0B1830]/10 pb-6 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              FOUNDER & OPERATOR
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1830]">
              Hamid Bajwa
            </h2>
            <p className="text-xs sm:text-sm text-[#0B1830]/70 font-medium">
              Founder, Hamid Route UAE • Direct Line: {BUSINESS_INFO.primaryPhone}
            </p>
          </div>

          <div className="space-y-4 text-base text-[#0B1830]/85 leading-relaxed">
            <p>
              Hamid Route was built around a simple observation: moving items around UAE shouldn&apos;t be an exercise in frustration.
            </p>
            <p>
              Too often, people dealing with transport services encounter endless automated forms, anonymous call centers, unexpected delays, and personnel who treat delicate furniture like rough freight.
            </p>
            <p>
              I founded Hamid Route with a direct commitment: when you need something moved in UAE, you speak with the person coordinating the journey. You receive honest assessments of vehicle suitability, punctual arrival, and genuine care for your possessions.
            </p>
            <p>
              Whether it&apos;s a single marketplace sofa, an upright refrigerator move, an office transfer, or shifting an apartment across town, we treat every job as a complete route that deserves respect.
            </p>
            <div className="pt-2 font-display font-extrabold text-xl text-[#FF6A00]">
              MOVE THE RIGHT WAY.
            </div>
          </div>
        </div>

        {/* Mission and Vision Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#0B1830]/10 shadow-sm space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
              OUR GUIDING PURPOSE
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#0B1830]">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
              To make moving things around UAE simpler, clearer and easier to arrange. We aim to connect pickup points with destinations through practical transportation, direct communication and a service experience built around getting the job done properly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#0B1830]/10 shadow-sm space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
              THE LONG HORIZON
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#0B1830]">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
              To build Hamid Route into a recognized UAE movement brand people think of whenever something needs to get from one place to another.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mt-10 bg-[#0B1830] text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
              HOW WE OPERATE
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white mt-1">
              Core Operational Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <div className="font-display font-bold text-white text-base">
                Direct Contact
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                One number: 050 741 9304. Direct answers and realistic scheduling without ticketing systems.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-display font-bold text-white text-base">
                Proper Equipment
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Transit blankets, heavy-duty ratchet straps, and dollies on every run to safeguard cargo.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-display font-bold text-white text-base">
                UAE Familiarity
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Knowledge of community gate access, service elevators, and peak highway traffic windows.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 text-center space-y-4">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1830]">
            Speak Directly With Hamid Bajwa
          </h3>
          <p className="text-sm text-[#0B1830]/75 max-w-md mx-auto">
            Let us know what needs moving and where it needs to go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CallButton variant="secondary" size="md" label="CALL 050 741 9304" />
            <WhatsAppButton variant="primary" size="md" label="MESSAGE ON WHATSAPP" />
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/content';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2, Camera, Navigation, Calendar } from 'lucide-react';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            DIRECT BOOKING & ENQUIRY
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            LET&apos;S GET IT MOVING.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed font-medium">
            No booking forms or quote delays. Reach out directly by phone or WhatsApp to arrange your route across UAE.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="YOUR LOCATION"
              destination="YOUR DESTINATION"
              variant="compact"
              className="max-w-sm mx-auto bg-white/60"
            />
          </div>
        </div>

        {/* Primary Contact Cards (NO FORM AS MANDATED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Phone Call */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#0B1830]/10 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#0B1830]/30 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1830] text-white flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#FF6A00]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/50">
                  Immediate Voice Contact
                </span>
                <h2 className="font-display font-extrabold text-2xl text-[#0B1830] mt-1">
                  Call Hamid Route
                </h2>
                <p className="text-sm text-[#0B1830]/75 mt-2 leading-relaxed">
                  Speak directly with Hamid Bajwa to explain what you need moved and discuss available time windows.
                </p>
              </div>

              <div className="p-4 bg-[#F4F1EA] rounded-2xl">
                <div className="text-xs text-[#0B1830]/60 font-semibold uppercase tracking-wider">
                  Direct Line:
                </div>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="font-mono font-extrabold text-xl sm:text-2xl text-[#0B1830] hover:text-[#FF6A00] transition-colors block mt-0.5"
                >
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
            </div>

            <CallButton
              variant="secondary"
              size="lg"
              label="CALL NOW"
              className="w-full"
            />
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#FF6A00]/20 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#FF6A00] transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00] text-white flex items-center justify-center shadow-sm">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">
                  Fastest Way To Share Details
                </span>
                <h2 className="font-display font-extrabold text-2xl text-[#0B1830] mt-1">
                  Message on WhatsApp
                </h2>
                <p className="text-sm text-[#0B1830]/75 mt-2 leading-relaxed">
                  The most efficient starting point. Send photos, map pins, or items list to receive practical timing.
                </p>
              </div>

              <div className="p-4 bg-[#F4F1EA] rounded-2xl">
                <div className="text-xs text-[#0B1830]/60 font-semibold uppercase tracking-wider">
                  WhatsApp Available:
                </div>
                <div className="font-mono font-extrabold text-xl sm:text-2xl text-[#0B1830] mt-0.5">
                  {BUSINESS_INFO.primaryPhone}
                </div>
              </div>
            </div>

            <WhatsAppButton
              variant="primary"
              size="lg"
              label="WHATSAPP NOW"
              className="w-full"
            />
          </div>

        </div>

        {/* Helpful Details Checklist */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-[#0B1830]/10 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
            <h3 className="font-display font-extrabold text-xl text-[#0B1830]">
              What Information Speeds Up Your Booking?
            </h3>
          </div>
          <p className="text-sm text-[#0B1830]/80">
            Tell us what needs moving, where it is, and where it needs to go. For the fastest response on WhatsApp, simply share:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F1EA]">
              <Camera className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#0B1830] block">Photo of the item(s)</strong>
                <span className="text-xs text-[#0B1830]/70">Allows us to assess size, weight, and vehicle space instantly.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F1EA]">
              <Navigation className="w-5 h-5 text-[#0B1830] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#0B1830] block">Pickup location & floor</strong>
                <span className="text-xs text-[#0B1830]/70">Building or area name, plus elevator or stairs status.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F1EA]">
              <MapPin className="w-5 h-5 text-[#11B8A5] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#0B1830] block">Destination location</strong>
                <span className="text-xs text-[#0B1830]/70">Target community and whether access permit is needed.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F1EA]">
              <Calendar className="w-5 h-5 text-[#0B1830] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#0B1830] block">Preferred timing</strong>
                <span className="text-xs text-[#0B1830]/70">Immediate same-day or upcoming planned date window.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Note */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0B1830] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-display font-bold text-sm text-white flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF6A00]" />
              <span>Service Area Coverage</span>
            </div>
            <p className="text-xs text-white/70">
              Active routes throughout all residential and commercial zones across UAE.
            </p>
          </div>
          <a
            href="/areas/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/areas/');
            }}
            className="text-xs font-bold text-[#FF6A00] hover:underline shrink-0"
          >
            View all UAE areas →
          </a>
        </div>

      </div>
    </div>
  );
};

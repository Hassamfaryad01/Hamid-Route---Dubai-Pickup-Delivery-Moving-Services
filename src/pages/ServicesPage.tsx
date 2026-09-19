import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { RouteLine } from '../components/RouteLine';
import {
  Armchair,
  Tv,
  Package,
  Truck,
  Building2,
  Container,
  Trash2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Armchair': return <Armchair className="w-6 h-6 text-[#FF6A00]" />;
      case 'Tv': return <Tv className="w-6 h-6 text-[#FF6A00]" />;
      case 'Package': return <Package className="w-6 h-6 text-[#FF6A00]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#FF6A00]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#FF6A00]" />;
      case 'Container': return <Container className="w-6 h-6 text-[#FF6A00]" />;
      case 'Trash2': return <Trash2 className="w-6 h-6 text-[#FF6A00]" />;
      default: return <Package className="w-6 h-6 text-[#FF6A00]" />;
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            MOVEMENT SOLUTIONS ACROSS DUBAI
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            ONE ROUTE. MANY WAYS TO MOVE.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed">
            Direct, practical pickup, delivery, moving and transport services arranged simply by Call or WhatsApp. No middlemen, no quote forms, no unnecessary delays.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="PICKUP"
              destination="DESTINATION"
              variant="compact"
              className="max-w-md mx-auto bg-white/70"
            />
          </div>
        </div>

        {/* Detailed Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#0B1830]/10 shadow-sm flex flex-col justify-between hover:border-[#FF6A00]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1830]/5 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0B1830]/50 tracking-wider">
                    DUBAI ACTIVE
                  </span>
                </div>

                <div>
                  <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* What You Get */}
                <div className="bg-[#F4F1EA] p-4 rounded-xl space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/60">
                    What You Get:
                  </div>
                  {service.whatYouGet.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0B1830]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#11B8A5] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Scenarios */}
                <div className="space-y-1 text-xs text-[#0B1830]/75">
                  <span className="font-bold text-[#0B1830]/50 uppercase tracking-wider">Common Scenarios: </span>
                  <span>{service.scenarios.slice(0, 2).join(' • ')}</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-5 border-t border-[#0B1830]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <WhatsAppButton
                  variant="primary"
                  size="sm"
                  label="WHATSAPP"
                  prefilledMessage={service.whatsappMessage}
                  className="flex-1"
                />
                <CallButton
                  variant="secondary"
                  size="sm"
                  label="CALL"
                  className="flex-1"
                />
                <a
                  href={`/${service.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${service.slug}/`);
                  }}
                  className="py-2 px-3 text-center text-xs font-bold text-[#FF6A00] hover:bg-[#FF6A00]/5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#0B1830] text-white p-8 sm:p-10 rounded-2xl sm:rounded-3xl text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Have a unique transport request?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            From single custom furniture items to specialized multi-stop relocations, call or message Hamid Bajwa directly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CallButton variant="primary" size="md" label="CALL 050 741 9304" />
            <WhatsAppButton variant="teal" size="md" label="MESSAGE ON WHATSAPP" />
          </div>
        </div>
      </div>
    </div>
  );
};

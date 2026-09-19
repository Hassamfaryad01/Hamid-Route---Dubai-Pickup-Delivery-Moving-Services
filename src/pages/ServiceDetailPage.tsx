import React from 'react';
import { ServiceItem } from '../types';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SectionHeading } from '../components/SectionHeading';
import { REAL_PROOF_ROUTES, FAQS, BUSINESS_INFO } from '../data/content';
import {
  CheckCircle2,
  Armchair,
  Tv,
  Package,
  Truck,
  Building2,
  Container,
  Trash2,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  MapPin,
  ArrowLeft,
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  navigate,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Armchair': return <Armchair className="w-8 h-8 text-[#FF6A00]" />;
      case 'Tv': return <Tv className="w-8 h-8 text-[#FF6A00]" />;
      case 'Package': return <Package className="w-8 h-8 text-[#FF6A00]" />;
      case 'Truck': return <Truck className="w-8 h-8 text-[#FF6A00]" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-[#FF6A00]" />;
      case 'Container': return <Container className="w-8 h-8 text-[#FF6A00]" />;
      case 'Trash2': return <Trash2 className="w-8 h-8 text-[#FF6A00]" />;
      default: return <Package className="w-8 h-8 text-[#FF6A00]" />;
    }
  };

  // Find relevant proof route
  const relatedProof = REAL_PROOF_ROUTES.find((p) => p.category.toLowerCase().includes(service.shortTitle.toLowerCase())) || REAL_PROOF_ROUTES[0];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate('/services/')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1830]/70 hover:text-[#FF6A00] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </button>
        </div>

        {/* Hero Block */}
        <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#0B1830]/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1830]/5 flex items-center justify-center">
              {getServiceIcon(service.iconName)}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-mono font-bold text-[#0B1830]">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              DUBAI SERVICE
            </div>
          </div>

          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1830] tracking-tight leading-tight">
              {service.h1}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-[#0B1830]/80 leading-relaxed font-medium">
              {service.summary}
            </p>
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <CallButton
              variant="secondary"
              size="lg"
              showNumber={true}
              label="CALL NOW"
              className="w-full sm:w-auto"
            />
            <WhatsAppButton
              variant="primary"
              size="lg"
              prefilledMessage={service.whatsappMessage}
              label="WHATSAPP DETAILS"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Route Line */}
          <div className="pt-4 border-t border-[#0B1830]/10">
            <RouteLine
              origin="PICKUP"
              destination="DESTINATION"
              variant="full"
              className="bg-[#F4F1EA]"
            />
          </div>
        </div>

        {/* What This Solves & Detailed Explanation */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#0B1830]/10 shadow-sm space-y-4">
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1830]">
                Practical, Reliable Transport
              </h2>
              {service.detailsParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t border-[#0B1830]/10">
                <h3 className="font-display font-bold text-base text-[#0B1830] mb-3">
                  The Problem We Solve:
                </h3>
                <p className="text-sm text-[#0B1830]/85 bg-[#F4F1EA] p-4 rounded-xl leading-relaxed">
                  {service.problemSolved}
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#0B1830]/10 shadow-sm space-y-4">
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1830]">
                What You Get With Hamid Route
              </h2>
              <div className="space-y-3 pt-2">
                {service.whatYouGet.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#0B1830]/85">
                    <CheckCircle2 className="w-5 h-5 text-[#11B8A5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Scenarios */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#0B1830]/10 shadow-sm space-y-4">
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1830]">
                Common Scenarios We Handle
              </h2>
              <ul className="space-y-2.5 pt-2">
                {service.scenarios.map((sc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#0B1830]/80">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00] shrink-0 mt-2" />
                    <span>{sc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-[#0B1830] text-white rounded-3xl p-6 sm:p-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF6A00]">
                Direct Coordination
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">
                Book This Service
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Send a photo or call directly with your pickup and destination details.
              </p>

              <div className="space-y-2.5 pt-2">
                <CallButton
                  variant="primary"
                  size="md"
                  label="CALL 050 741 9304"
                  className="w-full"
                />
                <WhatsAppButton
                  variant="teal"
                  size="md"
                  prefilledMessage={service.whatsappMessage}
                  label="WHATSAPP PHOTO"
                  className="w-full"
                />
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-white/60 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Prompt daily availability across UAE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#11B8A5]" />
                  <span>Padded blankets & ratchet tie-downs included</span>
                </div>
              </div>
            </div>

            {/* Related Proof Box */}
            <div className="bg-white rounded-3xl p-6 border border-[#0B1830]/10 shadow-sm space-y-3">
              <div className="text-[11px] font-mono font-bold text-[#FF6A00] tracking-wider uppercase">
                Recent Route Example
              </div>
              <h4 className="font-display font-bold text-sm text-[#0B1830]">
                {relatedProof.whatNeededMoving}
              </h4>
              <div className="text-xs text-[#0B1830]/70 space-y-1 pt-1">
                <div>From: <strong>{relatedProof.from}</strong></div>
                <div>To: <strong>{relatedProof.to}</strong></div>
              </div>
              <p className="text-xs text-[#0B1830]/75 pt-2 border-t border-[#0B1830]/10">
                {relatedProof.whatHamidRouteDid}
              </p>
              <div className="text-[11px] font-bold text-[#11B8A5]">
                ✓ {relatedProof.result}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-[#F4F1EA] rounded-3xl p-8 border border-[#0B1830]/10 text-center space-y-3">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B1830]">
            Ready to arrange {service.shortTitle.toLowerCase()} transport?
          </h3>
          <p className="text-sm text-[#0B1830]/75 max-w-md mx-auto">
            Call or message Hamid Bajwa directly at 050 741 9304 to set your pickup time.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CallButton variant="secondary" size="md" label="CALL NOW" />
            <WhatsAppButton
              variant="primary"
              size="md"
              label="WHATSAPP NOW"
              prefilledMessage={service.whatsappMessage}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

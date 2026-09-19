import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SectionHeading } from '../components/SectionHeading';
import {
  BUSINESS_INFO,
  SERVICES,
  VEHICLE_CAPACITIES,
  WHEN_TO_CALL_ITEMS,
  HOW_IT_WORKS_STEPS,
  WHY_HAMID_ROUTE,
  REAL_PROOF_ROUTES,
  REVIEWS,
  FAQS,
  getWhatsAppUrl,
} from '../data/content';
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
  PhoneCall,
  Compass,
  Wrench,
  ShieldCheck,
  MapPin,
  Route,
  MessageCircle,
  Phone,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
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

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-[#FF6A00]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#FF6A00]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#FF6A00]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#FF6A00]" />;
      case 'Route': return <Route className="w-5 h-5 text-[#FF6A00]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#FF6A00]" />;
    }
  };

  const whatNeedsMovingCards = [
    { title: 'Furniture', desc: 'Sofas, beds, tables, wardrobes', path: '/furniture-pickup-delivery-dubai/', msg: 'Hello Hamid Route, I need furniture pickup/delivery in Dubai.' },
    { title: 'Appliances', desc: 'Fridges, washers, cookers, dryers', path: '/appliance-pickup-delivery-dubai/', msg: 'Hello Hamid Route, I need appliance pickup/delivery in Dubai.' },
    { title: 'Single Items', desc: 'Gym equipment, desks, TV units', path: '/single-item-pickup-dubai/', msg: 'Hello Hamid Route, I need single-item pickup/delivery in Dubai.' },
    { title: 'Household Loads', desc: 'Boxes, suitcases, room contents', path: '/moving-shifting-dubai/', msg: 'Hello Hamid Route, I need moving/shifting service in Dubai.' },
    { title: 'Office Equipment', desc: 'Workstations, files, monitors', path: '/office-moving-dubai/', msg: 'Hello Hamid Route, I need office moving/transport in Dubai.' },
    { title: 'Large Loads', desc: 'Multi-room loads, commercial cargo', path: '/large-load-transport-dubai/', msg: 'Hello Hamid Route, I need larger-load transport in Dubai.' },
    { title: 'Clearance', desc: 'Unwanted furniture & bulky items', path: '/junk-clearance-dubai/', msg: 'Hello Hamid Route, I need pickup/clearance service in Dubai.' },
    { title: 'More Scenarios', desc: 'Any item needing transport in Dubai', path: '/contact/', msg: 'Hello Hamid Route, I need pickup/delivery service in Dubai.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================================
          SECTION 2: HERO
          ============================================================ */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#0B1830]/10 bg-gradient-to-b from-[#F4F1EA] via-[#F4F1EA] to-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Core Message & Direct CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Service Subheadline tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1830]/5 border border-[#0B1830]/10 text-xs font-bold text-[#0B1830] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                Pickup, delivery & moving services across Dubai
              </div>

              {/* H1 & Supporting Headline */}
              <div>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0B1830] leading-[1.05]">
                  NEED IT MOVED?
                </h1>
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF6A00] tracking-tight mt-1.5">
                  LET&apos;S GET IT THERE.
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#0B1830]/80 leading-relaxed max-w-2xl font-medium">
                Furniture, appliances, single items, household loads, moving, office items, larger loads and more — arranged simply through direct Call or WhatsApp.
              </p>

              {/* Direct CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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
                  label="WHATSAPP NOW"
                  className="w-full sm:w-auto"
                />
              </div>

              {/* Microcopy */}
              <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-[#0B1830]/70 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#11B8A5] shrink-0 mt-0.5 sm:mt-0" />
                <span>Tell us what needs moving, where it is, and where it needs to go.</span>
              </div>

              {/* Subtle Route Line device */}
              <div className="pt-2">
                <RouteLine
                  origin="PICKUP"
                  destination="DESTINATION"
                  variant="compact"
                  className="max-w-md bg-white/60 p-2.5 rounded-xl border border-[#0B1830]/10"
                />
              </div>
            </div>

            {/* Right Column: Authentic Transport Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#0B1830]">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Hamid Route transport vehicle loaded and ready for delivery in Dubai"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1830]/90 via-[#0B1830]/20 to-transparent" />
                
                {/* Overlay Card on Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#0B1830]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF6A00]">
                        Direct Dubai Transport
                      </div>
                      <div className="text-sm font-extrabold text-[#0B1830] font-display">
                        MOVE THE RIGHT WAY.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-[#0B1830]/60 font-mono">050 741 9304</div>
                      <div className="text-xs font-bold text-[#11B8A5]">Active Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: WHAT NEEDS MOVING?
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="UNIVERSAL CATEGORIES"
            title="WHAT NEEDS MOVING?"
            subtitle="Whatever the job looks like, start with the same simple step: tell us what needs to move and where it needs to go."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whatNeedsMovingCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#0B1830]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                    <span className="text-[11px] font-mono text-[#0B1830]/50 tracking-wider">DUBAI ROUTE</span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0B1830] group-hover:text-[#FF6A00] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#0B1830]/70 leading-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1830]/5 space-y-2">
                  <a
                    href={getWhatsAppUrl(card.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[#FF6A00] hover:bg-[#E55F00] text-white text-xs font-bold tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                  <div className="flex items-center justify-between px-1">
                    <a
                      href={BUSINESS_INFO.telLink}
                      className="text-xs font-semibold text-[#0B1830]/80 hover:text-[#0B1830] flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#0B1830]" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={card.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(card.path);
                      }}
                      className="text-xs font-bold text-[#FF6A00] hover:underline flex items-center gap-0.5"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: OUTCOME
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-[#0B1830] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-[#FF6A00] uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            THE REAL OUTCOME
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            YOU&apos;RE NOT REALLY LOOKING FOR A TRUCK.
          </h2>
          <p className="font-display text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF6A00] tracking-tight mt-2">
            YOU&apos;RE LOOKING FOR THE JOB TO BE DONE.
          </p>

          <div className="mt-6 max-w-2xl mx-auto space-y-2 text-base sm:text-lg text-white/80 leading-relaxed">
            <p>The item needs collecting.</p>
            <p>It needs moving.</p>
            <p>It needs to arrive where it is supposed to go.</p>
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-white/70">
            Hamid Route is built around making that journey simpler to arrange — from the first conversation to the final destination.
          </p>

          {/* Signature Route Line Visual */}
          <div className="mt-10">
            <RouteLine
              origin="PICKUP"
              destination="DESTINATION"
              variant="full"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: SERVICES (ONE ROUTE. MANY WAYS TO MOVE.)
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="COMPREHENSIVE SERVICES"
            title="ONE ROUTE. MANY WAYS TO MOVE."
            subtitle="Clear solutions for moving items across Dubai, arranged directly without third-party commission or delay."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0B1830]/10 shadow-sm flex flex-col justify-between hover:border-[#0B1830]/30 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1830]/5 flex items-center justify-center mb-5">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-[#0B1830]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#0B1830]/70 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/50">
                      What You Get:
                    </div>
                    {service.whatYouGet.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0B1830]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#11B8A5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#0B1830]/10 flex items-center gap-2.5">
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/services/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services/');
              }}
              className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#0B1830] hover:text-[#FF6A00] transition-colors"
            >
              <span>Explore all services and full details</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: VEHICLE / CAPACITY
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#0B1830]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CAPACITY & EQUIPMENT"
            title="THE RIGHT VEHICLE FOR THE JOB."
            subtitle="Transparent matching of transport space to your specific load requirements across Dubai."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VEHICLE_CAPACITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-[#F4F1EA] rounded-2xl p-7 sm:p-8 border border-[#0B1830]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#FF6A00] bg-white mb-4">
                    {cap.title}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#0B1830]">
                    {cap.subtitle}
                  </h3>
                  <p className="mt-3 text-sm text-[#0B1830]/80 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/60">
                      Ideal For:
                    </div>
                    {cap.idealFor.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0B1830]/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#0B1830]/10 text-xs text-[#0B1830]/70 italic">
                  {cap.note}
                </div>
              </div>
            ))}
          </div>

          {/* Support block & CTA */}
          <div className="mt-10 max-w-2xl mx-auto bg-[#0B1830] text-white p-6 sm:p-7 rounded-2xl text-center space-y-4">
            <h4 className="font-display font-bold text-lg text-white">
              Not sure what capacity you need?
            </h4>
            <p className="text-sm text-white/80 max-w-md mx-auto">
              Send us a photo on WhatsApp and we&apos;ll help you determine the practical option.
            </p>
            <WhatsAppButton
              variant="primary"
              size="md"
              label="WHATSAPP NOW"
              prefilledMessage="Hello Hamid Route, I have an item to move and would like to confirm the right vehicle capacity."
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: WHEN YOU NEED US
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EVERYDAY SCENARIOS"
            title="CALL HAMID ROUTE WHEN…"
            subtitle="Movement jobs come in all shapes and sizes. Whenever something needs to go from A to B, we are one message away."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {WHEN_TO_CALL_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#0B1830]/10 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] shrink-0 font-display font-extrabold text-xs">
                  {idx + 1}
                </div>
                <span className="font-medium text-sm sm:text-base text-[#0B1830]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center space-y-3">
            <div className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1830]">
              JUST TELL US WHAT NEEDS MOVING.
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <CallButton variant="secondary" size="md" label="CALL 050 741 9304" />
              <WhatsAppButton variant="primary" size="md" label="WHATSAPP DETAILS" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: HOW IT WORKS
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-white border-y border-[#0B1830]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STRAIGHTFORWARD PROCESS"
            title="THREE STEPS. ONE CLEAR ROUTE."
            subtitle="No multi-step booking software or automated queues. Simple human coordination from pickup to destination."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-[#F4F1EA] rounded-2xl p-6 sm:p-7 border border-[#0B1830]/10 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#FF6A00]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#0B1830]/50 tracking-wider">
                      CHECKPOINT
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-[#0B1830]">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-[#FF6A00] tracking-wider uppercase mt-0.5 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-[#0B1830]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1830]/10 text-xs font-bold text-[#0B1830] flex items-center justify-between">
                  <span>{step.action}</span>
                  <span className="w-2 h-2 rounded-full bg-[#11B8A5]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <RouteLine
              origin="STEP 1: TELL US"
              destination="STEP 3: GET IT MOVING"
              variant="full"
              className="bg-[#F4F1EA]"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: WHY HAMID ROUTE
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR COMMITMENT"
            title="BUILT AROUND WHAT MATTERS."
            subtitle="Direct communication, careful cargo handling, and dependable service across Dubai."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {WHY_HAMID_ROUTE.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#0B1830]/10 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1830]/5 flex items-center justify-center mb-4">
                  {getWhyIcon(item.iconName)}
                </div>
                <h3 className="font-display font-extrabold text-base text-[#0B1830] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#0B1830]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: PROOF (REAL JOBS. REAL ROUTES.)
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-white border-y border-[#0B1830]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AUTHENTIC SERVICE LOG"
            title="REAL JOBS. REAL ROUTES."
            subtitle="Verified movement jobs completed across Dubai residential towers, villas, and commercial hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {REAL_PROOF_ROUTES.map((proof) => (
              <div
                key={proof.id}
                className="bg-[#F4F1EA] rounded-2xl p-6 border border-[#0B1830]/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B1830] text-white text-[10px] font-extrabold uppercase tracking-wider">
                      {proof.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#0B1830]/50 font-bold">COMPLETED</span>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/50">
                      What Needed Moving:
                    </div>
                    <div className="font-display font-extrabold text-base text-[#0B1830] mt-0.5">
                      {proof.whatNeededMoving}
                    </div>
                  </div>

                  {/* Route Indicator */}
                  <div className="bg-white p-3 rounded-xl border border-[#0B1830]/10 space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6A00] shrink-0" />
                      <span className="text-[#0B1830]/60">FROM:</span>
                      <span className="font-semibold text-[#0B1830]">{proof.from}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0B1830] shrink-0" />
                      <span className="text-[#0B1830]/60">TO:</span>
                      <span className="font-semibold text-[#0B1830]">{proof.to}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0B1830]/50">
                      What Hamid Route Did:
                    </div>
                    <p className="text-xs sm:text-sm text-[#0B1830]/80 mt-1 leading-relaxed">
                      {proof.whatHamidRouteDid}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0B1830]/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#11B8A5]">Result: {proof.result}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#11B8A5]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: REVIEWS
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AUTHENTIC EXPERIENCES"
            title="WHAT PEOPLE SAY AFTER THE JOB IS DONE."
            subtitle="Verified feedback from customers across Dubai who arranged their moves directly with Hamid Route."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0B1830]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#FF6A00] tracking-wider uppercase">
                      {rev.serviceContext}
                    </span>
                    <span className="text-[11px] text-[#0B1830]/40 font-medium">{rev.date}</span>
                  </div>

                  <blockquote className="text-sm sm:text-base text-[#0B1830]/85 leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1830]/10 flex items-center justify-between">
                  <div className="font-display font-extrabold text-sm text-[#0B1830]">
                    {rev.author}
                  </div>
                  <div className="text-xs text-[#0B1830]/60 font-medium">
                    {rev.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/reviews/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/reviews/');
              }}
              className="text-xs font-bold text-[#0B1830] hover:text-[#FF6A00] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Read more customer feedback</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: BRAND DIFFERENTIATION
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#0B1830] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
              THE HAMID ROUTE STANDARD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
              LESS RUNAROUND. MORE ROUTE.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs font-bold text-[#FF6A00] tracking-widest uppercase">01</div>
              <h3 className="font-display font-extrabold text-base text-white">
                ONE DIRECT NUMBER.
              </h3>
              <p className="font-mono text-sm text-[#FF6A00] font-bold">
                050 741 9304
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs font-bold text-[#FF6A00] tracking-widest uppercase">02</div>
              <h3 className="font-display font-extrabold text-base text-white">
                ONE SIMPLE CONVERSATION.
              </h3>
              <p className="text-xs text-white/70">
                Call or WhatsApp without call center runaround.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs font-bold text-[#FF6A00] tracking-widest uppercase">03</div>
              <h3 className="font-display font-extrabold text-base text-white">
                ONE CLEAR STARTING POINT.
              </h3>
              <p className="text-xs text-white/70">
                Tell us what needs moving and where it needs to go.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs font-bold text-[#FF6A00] tracking-widest uppercase">04</div>
              <h3 className="font-display font-extrabold text-base text-white">
                ONE DESTINATION.
              </h3>
              <p className="text-xs text-white/70">
                We coordinate the journey and get it done properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: FOUNDER (MEET HAMID BAJWA)
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-white border-b border-[#0B1830]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Founder Editorial Info */}
            <div className="md:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                FOUNDER & OPERATOR
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1830]">
                MEET HAMID BAJWA
              </h2>

              <div className="space-y-4 text-base text-[#0B1830]/80 leading-relaxed">
                <p>
                  Hamid Route was built around a simple idea: moving something from one place to another shouldn&apos;t become unnecessarily complicated.
                </p>
                <p>
                  I&apos;m Hamid Bajwa, and I built Hamid Route around practical pickup, delivery, transport and moving services across Dubai.
                </p>
                <p>
                  Every job starts with the same basic question: what needs moving, where does it need to go, and what is the simplest practical way to make that happen?
                </p>
                <p>
                  The goal is straightforward: make the process easier to arrange, communicate clearly, and handle each job with care from pickup to destination.
                </p>
                <p className="font-display font-bold text-[#FF6A00] text-lg">
                  That&apos;s the route.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <CallButton variant="secondary" size="md" label="SPEAK WITH HAMID" />
                <WhatsAppButton variant="primary" size="md" label="MESSAGE ON WHATSAPP" />
              </div>
            </div>

            {/* Direct Operational Commitment Card (No Photo) */}
            <div className="md:col-span-4 bg-[#F4F1EA] p-6 sm:p-7 rounded-2xl border border-[#0B1830]/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0B1830]/10">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#FF6A00] tracking-wider uppercase block">
                    FOUNDER & OPERATOR
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-[#0B1830] mt-0.5">
                    Hamid Bajwa
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#11B8A5]/10 text-[11px] font-bold text-[#11B8A5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11B8A5]" />
                  Active
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#0B1830]/80">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-1 shrink-0" />
                  <span>Direct point of contact for daily pickups, relocations, and deliveries across Dubai.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-1 shrink-0" />
                  <span>Transit blankets & heavy-duty ratchet straps on every route.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-1 shrink-0" />
                  <span>7:00 AM – 10:00 PM Daily availability across all Dubai zones.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#0B1830]/10">
                <div className="text-[11px] text-[#0B1830]/60 font-semibold uppercase tracking-wider">
                  Direct Line:
                </div>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="font-mono text-lg font-black text-[#0B1830] hover:text-[#FF6A00] transition-colors block mt-0.5"
                >
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14 & 15: MISSION & VISION
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-7 border border-[#0B1830]/10 shadow-xs space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
                PURPOSE
              </span>
              <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
                OUR MISSION
              </h2>
              <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
                To make moving things around Dubai simpler, clearer and easier to arrange. We aim to connect pickup points with destinations through practical transportation, direct communication and a service experience built around getting the job done properly.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-7 border border-[#0B1830]/10 shadow-xs space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">
                FUTURE
              </span>
              <h2 className="font-display font-extrabold text-2xl text-[#0B1830]">
                OUR VISION
              </h2>
              <p className="text-sm sm:text-base text-[#0B1830]/80 leading-relaxed">
                To build Hamid Route into a recognized Dubai movement brand people think of whenever something needs to get from one place to another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 16: FAQ
          ============================================================ */}
      <section className="py-16 sm:py-22 bg-white border-y border-[#0B1830]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="HELPFUL QUESTIONS"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Straightforward answers about arranging pickup, transport, and moving in Dubai."
          />

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#F4F1EA] rounded-2xl p-5 sm:p-6 border border-[#0B1830]/10 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base sm:text-lg text-[#0B1830] select-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="w-6 h-6 rounded-full bg-white border border-[#0B1830]/10 flex items-center justify-center text-xs text-[#0B1830] shrink-0 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-[#0B1830]/80 leading-relaxed pt-3 border-t border-[#0B1830]/10">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0B1830]/5 text-center space-y-2">
            <div className="font-display font-bold text-sm text-[#0B1830]">
              Still deciding what you need?
            </div>
            <p className="text-xs text-[#0B1830]/70">
              Send us a WhatsApp. Tell us what needs moving and we&apos;ll help with the practical next step.
            </p>
            <div className="pt-2">
              <WhatsAppButton variant="primary" size="sm" label="SEND A WHATSAPP" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

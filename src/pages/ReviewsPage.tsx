import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/content';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { RouteLine } from '../components/RouteLine';
import { Star, CheckCircle2, MessageSquare } from 'lucide-react';

interface ReviewsPageProps {
  navigate: (path: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            CUSTOMER FEEDBACK
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B1830] tracking-tight">
            WHAT PEOPLE SAY AFTER THE JOB IS DONE.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0B1830]/80 leading-relaxed">
            Direct, reliable feedback from Dubai residents and businesses who coordinated their moves with Hamid Route.
          </p>
          <div className="mt-6">
            <RouteLine
              origin="FIRST CONTACT"
              destination="JOB COMPLETED"
              variant="compact"
              className="max-w-sm mx-auto bg-white/60"
            />
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#0B1830]/10 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6A00] tracking-wider uppercase">
                    {review.serviceContext}
                  </span>
                  <div className="flex items-center gap-1 text-[#11B8A5]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-semibold">Verified Job</span>
                  </div>
                </div>

                <blockquote className="text-base text-[#0B1830]/85 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#0B1830]/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-extrabold text-base text-[#0B1830]">
                    {review.author}
                  </div>
                  <div className="text-xs text-[#0B1830]/60 font-medium">
                    {review.location}
                  </div>
                </div>
                <div className="text-xs text-[#0B1830]/40 font-mono">
                  Dubai, UAE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-14 bg-white rounded-3xl p-8 border border-[#0B1830]/10 text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-extrabold text-xl text-[#0B1830]">
            Experience Direct, Reliable Service Yourself
          </h2>
          <p className="text-sm text-[#0B1830]/75 leading-relaxed max-w-xl mx-auto">
            We do not publish artificial review scores or fake badge counters. We judge our work by whether each customer&apos;s cargo arrives safely and on schedule.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CallButton variant="secondary" size="md" label="CALL 050 741 9304" />
            <WhatsAppButton variant="primary" size="md" label="MESSAGE ON WHATSAPP" />
          </div>
        </div>

      </div>
    </div>
  );
};

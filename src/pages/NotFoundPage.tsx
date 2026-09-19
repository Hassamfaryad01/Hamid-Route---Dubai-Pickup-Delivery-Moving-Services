import React from 'react';
import { RouteLine } from '../components/RouteLine';
import { CallButton } from '../components/CallButton';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Compass, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center">
          <Compass className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1830]/5 text-xs font-bold text-[#FF6A00] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
          404 ERROR
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B1830]">
          WRONG ROUTE?
        </h1>

        <p className="text-base text-[#0B1830]/75 max-w-md mx-auto">
          The page or destination you are looking for does not exist or has been shifted. Let&apos;s get you back on the right route.
        </p>

        <div className="pt-2">
          <RouteLine origin="OFF ROUTE" destination="MAIN ROUTE" variant="compact" className="max-w-xs mx-auto" />
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B1830] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#152545] transition-colors cursor-pointer w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME</span>
          </button>
          <CallButton variant="primary" size="md" label="CALL HAMID ROUTE" />
        </div>
      </div>
    </div>
  );
};

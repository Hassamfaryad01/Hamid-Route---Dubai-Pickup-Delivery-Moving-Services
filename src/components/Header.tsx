import React, { useState } from 'react';
import { HamidRouteLogo } from './HamidRouteLogo';
import { CallButton } from './CallButton';
import { WhatsAppButton } from './WhatsAppButton';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'How It Works', href: '/how-it-works/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[#0B1830]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Exact Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] rounded-lg py-1"
            aria-label="Hamid Route Home"
          >
            <HamidRouteLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#FF6A00] bg-[#0B1830]/5 font-bold'
                      : 'text-[#0B1830]/80 hover:text-[#0B1830] hover:bg-[#0B1830]/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <CallButton variant="secondary" size="sm" showNumber={false} label="CALL NOW" />
            <WhatsAppButton variant="primary" size="sm" label="WHATSAPP NOW" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.telLink}
              className="p-2 text-[#0B1830] bg-[#0B1830]/5 rounded-lg sm:hidden hover:bg-[#0B1830]/10"
              aria-label="Call Hamid Route"
            >
              <Phone className="w-5 h-5 text-[#0B1830]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B1830] hover:bg-[#0B1830]/10 rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F1EA] border-b border-[#0B1830]/10 shadow-lg px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#0B1830] text-white'
                      : 'text-[#0B1830] hover:bg-[#0B1830]/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#0B1830]/10 grid grid-cols-2 gap-2">
            <CallButton variant="secondary" size="md" label="CALL NOW" />
            <WhatsAppButton variant="primary" size="md" label="WHATSAPP" />
          </div>

          <p className="text-center text-xs text-[#0B1830]/70 font-medium">
            Direct Phone & WhatsApp: <span className="font-bold text-[#0B1830]">{BUSINESS_INFO.primaryPhone}</span>
          </p>
        </div>
      )}
    </header>
  );
};

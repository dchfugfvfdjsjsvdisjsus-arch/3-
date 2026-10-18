import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestQuote: () => void;
  onOpenEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onRequestQuote,
  onOpenEmergency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับเรา' },
    { id: 'services', label: 'บริการ' },
    { id: 'track-record', label: 'ผลงานโครงการ' },
    { id: 'standards', label: 'จุดเด่น' },
    { id: 'calculator', label: 'คำนวณ BTU' },
    { id: 'contact', label: 'ติดต่อเรา' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(15,41,66,0.06)] border-b border-outline-variant/30 transition-all">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Zone 1: Brand & Wordmark (Zero wrapping, strict shrink-0) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer shrink-0 whitespace-nowrap"
          title="3T Intercool & Service"
        >
          <img
            alt="3T Intercool & Service Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRy1OzkIMpI71VvSLTpewUWpU4v0vX8iI7Op8o6m4iTV6pcbsO_oa9gcsOgU8hJ_WIxWFb7gXmC_ki_xqwn6AgGK7vx3jxtAX9JSD5T_AYaGa_wFCtjJvaXDApwqQJQk_IHcfCw95VhqRlpMnvelQU5r9eZQgg5jJdtGEl9XM5pHIFH_zZCgmmFR8GTc1M0VJ4ZKgvKBum0yaGNW0XMhFgy5wZ6K_Sro1dOBrRzZgWG7bgSAiVJXwaHo_bOl5uoqGUIQ"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col justify-center shrink-0 whitespace-nowrap">
            <span className="font-headline-md text-base sm:text-lg leading-tight font-bold tracking-tight text-primary uppercase whitespace-nowrap">
              3T INTERCOOL
            </span>
            <span className="font-label-eyebrow text-[9.5px] sm:text-[10px] text-secondary tracking-widest uppercase whitespace-nowrap leading-none mt-0.5">
              Engineering &amp; Service
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Clean, single-line, non-wrapping) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-body-md text-xs xl:text-sm px-2.5 xl:px-3 py-1.5 rounded transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Right Action Zone */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 whitespace-nowrap">
          {/* Hotline Quick Contact */}
          <div className="hidden md:flex flex-col text-right shrink-0 whitespace-nowrap">
            <span className="font-label-eyebrow text-on-surface-variant text-[9.5px] tracking-wider uppercase leading-none">
              HOTLINE 24/7
            </span>
            <a
              className="font-label-technical text-secondary hover:underline font-bold text-xs sm:text-sm tracking-wide mt-0.5 whitespace-nowrap"
              href={`tel:${COMPANY_INFO.hotline}`}
              title="โทรติดต่อสายด่วน 24 ชั่วโมง"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>

          {/* Primary RFQ CTA Button */}
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-container hover:bg-primary text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded font-title-md text-xs sm:text-sm transition-all duration-150 shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-sm sm:text-base text-secondary-container">
              request_quote
            </span>
            <span>ขอใบเสนอราคา</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:outline-none cursor-pointer shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface px-4 py-4 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded font-title-md text-sm cursor-pointer transition-colors ${
                activeSection === item.id
                  ? 'bg-primary text-white font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
            <span className="font-label-eyebrow text-on-surface-variant">HOTLINE 24/7</span>
            <a
              href={`tel:${COMPANY_INFO.hotline}`}
              className="font-label-technical text-secondary font-bold text-sm"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEmergency();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-tertiary-container/10 text-on-tertiary-container text-xs font-semibold cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">emergency</span>
            <span>แจ้งซ่อมด่วนฉุกเฉิน 24 ชั่วโมง</span>
          </button>
        </div>
      )}
    </header>
  );
};

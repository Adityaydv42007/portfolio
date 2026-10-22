import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onOpenResume,
  onOpenContact,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'journal', label: 'Insights' },
    { id: 'resume', label: 'Resume', isSpecial: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          scrolled ? 'shadow-md shadow-black/40 border-white/20' : ''
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border */}
        <button
          onClick={() => onNavigate('hero')}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          aria-label="Aditya Yadav Home"
          className="relative w-9 h-9 rounded-full p-[2px] transition-transform duration-300 hover:scale-110 flex items-center justify-center shrink-0"
        >
          {/* Gradient ring */}
          <div
            className={`absolute inset-0 rounded-full transition-transform duration-500 ${
              logoHovered
                ? 'bg-gradient-to-l from-[#89AACC] to-[#4E85BF] rotate-180'
                : 'bg-gradient-to-r from-[#89AACC] to-[#4E85BF]'
            }`}
          />
          {/* Inner circle */}
          <div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center z-10">
            <span className="font-display italic text-[13px] text-text-primary tracking-wider font-semibold">
              AY
            </span>
          </div>
        </button>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 3. Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  if (link.isSpecial) {
                    onOpenResume();
                  } else {
                    onNavigate(link.id);
                  }
                }}
                className={`text-xs sm:text-sm font-medium rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-text-primary bg-stroke/50 shadow-sm'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1" />

        {/* 5. "Say hi" button with hover gradient border */}
        <div className="relative group p-[2px] rounded-full inline-flex items-center">
          {/* Gradient border behind on hover */}
          <span
            className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            aria-hidden="true"
          />
          <button
            onClick={onOpenContact}
            className="relative z-10 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-primary bg-surface/90 hover:bg-surface rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md transition-colors whitespace-nowrap"
          >
            <span>Say hi</span>
            <span className="text-[11px] leading-none text-muted group-hover:text-text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

import React from 'react';
import { ArrowUp, Mail, Linkedin, Phone } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, currentTheme }) => {
  const p = portfolioData.personal;
  const t = portfolioData.translations[currentLang];
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-16 relative transition-colors ${
      currentTheme === 'light'
        ? 'bg-[#EFEBE2] border-stone-300 text-stone-900'
        : 'bg-[#080B0A] border-white/10 text-[#F3F5F2]'
    }`}>
      {/* Subtle emerald gradient line at the very top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D6A0]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-white/5">
          {/* Brand & Monogram */}
          <div className="md:col-span-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-[#00D6A0]/40 bg-[#0D1713] flex items-center justify-center font-heading font-bold text-sm text-[#00D6A0] shrink-0 shadow-[0_0_15px_rgba(0,214,160,0.2)]">
              AY
            </div>
            <div>
              <div className={`font-heading font-bold text-lg ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                Aditya Yadav
              </div>
              <p className={`text-xs max-w-sm mt-1 leading-relaxed ${
                currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
              }`}>
                {currentLang === 'hi'
                  ? 'वित्तीय लेखांकन, एआई सिस्टम, मात्रात्मक विश्लेषण और तकनीकी शिक्षा का एक अनुशासित समन्वय।'
                  : 'Synthesizing quantitative data modeling, modern AI systems, financial accounting, and technical education.'}
              </p>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 text-xs">
            <a
              href={`mailto:${p.email}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-stone-300 text-stone-700 hover:border-[#0A8F6C] hover:bg-stone-50'
                  : 'border-white/10 text-[#A5AEA9] hover:text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:bg-white/5'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-[#00D6A0]" />
              <span>Email</span>
            </a>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-stone-300 text-stone-700 hover:border-[#0A8F6C] hover:bg-stone-50'
                  : 'border-white/10 text-[#A5AEA9] hover:text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:bg-white/5'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5 text-[#00D6A0]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`tel:${p.phone.replace(/\s+/g, '')}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-stone-300 text-stone-700 hover:border-[#0A8F6C] hover:bg-stone-50'
                  : 'border-white/10 text-[#A5AEA9] hover:text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:bg-white/5'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#00D6A0]" />
              <span>Phone</span>
            </a>

            {/* Back to Top Button */}
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D6A0] hover:bg-[#00D6A0]/90 text-[#080B0A] font-bold transition-all shadow-[0_0_15px_rgba(0,214,160,0.3)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6A0]"
              aria-label={t.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Copyright & Meta strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5AEA9]">
          <div>
            &copy; {currentYear} {portfolioData.personal.name}. Verified records sourced from official academic credentials & certifications.
          </div>

          <div className="flex items-center gap-4 text-[#A5AEA9] font-mono text-[11px]">
            <span>Kanpur &middot; India</span>
            <span>&middot;</span>
            <span className="text-[#00D6A0]">AI &middot; Data &middot; Finance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

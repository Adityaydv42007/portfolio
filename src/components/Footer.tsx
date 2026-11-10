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
        ? 'bg-slate-100 border-slate-200 text-slate-900'
        : 'bg-[#090A0F] border-slate-800 text-[#F8FAFC]'
    }`}>
      {/* Red, Blue, Green chromatic gradient line at the top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-slate-700/30">
          {/* Brand & Monogram */}
          <div className="md:col-span-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border border-[#38BDF8]/40 bg-gradient-to-br from-[#F43F5E]/20 via-[#38BDF8]/20 to-[#10B981]/20 flex items-center justify-center font-heading font-bold text-sm text-[#38BDF8] shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
              AY
            </div>
            <div>
              <div className={`font-heading font-bold text-lg ${
                currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
              }`}>
                Aditya Yadav
              </div>
              <p className={`text-xs max-w-sm mt-1 leading-relaxed ${
                currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {currentLang === 'hi'
                  ? 'वित्तीय लेखांकन, एआई सिस्टम, मात्रात्मक विश्लेषण और तकनीकी शिक्षा का एक अनुशासित समन्वय।'
                  : 'Synthesizing quantitative data modeling, modern AI systems, financial accounting, and technical education.'}
              </p>
            </div>
          </div>

          {/* Direct Channels with RGB styling */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 text-xs">
            <a
              href={`mailto:${p.email}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-slate-300 text-slate-700 hover:border-[#F43F5E] hover:bg-white'
                  : 'border-slate-800 text-slate-300 hover:text-white hover:border-[#F43F5E]/60 hover:bg-white/5'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-[#F43F5E]" />
              <span>Email</span>
            </a>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-slate-300 text-slate-700 hover:border-[#38BDF8] hover:bg-white'
                  : 'border-slate-800 text-slate-300 hover:text-white hover:border-[#38BDF8]/60 hover:bg-white/5'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`tel:${p.phone.replace(/\s+/g, '')}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                currentTheme === 'light'
                  ? 'border-slate-300 text-slate-700 hover:border-[#10B981] hover:bg-white'
                  : 'border-slate-800 text-slate-300 hover:text-white hover:border-[#10B981]/60 hover:bg-white/5'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Phone</span>
            </a>

            {/* Back to Top Button */}
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#10B981] text-[#090A0F] font-bold transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] active:scale-95 focus:outline-none"
              aria-label={t.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Copyright & Meta strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {portfolioData.personal.name}. Verified records sourced from official academic credentials & certifications.
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Kanpur &middot; India</span>
            <span>&middot;</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]">
              AI &middot; Data &middot; Finance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

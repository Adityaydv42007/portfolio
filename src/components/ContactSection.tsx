import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, currentTheme }) => {
  const p = portfolioData.personal;
  const t = portfolioData.translations[currentLang];
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting with Red and Blue */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#F43F5E]/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              07 &middot; {t.contactKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.contactHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Introduction note */}
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-14 font-normal ${
          currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {currentLang === 'hi'
            ? 'एआई सिस्टम, वित्तीय विश्लेषण, स्प्रेडशीट मॉडलिंग या नए व्यावसायिक अवसरों के बारे में सीधी बातचीत के लिए मुझसे सीधे संपर्क करें।'
            : 'Available for AI solutions, data modeling discussions, financial analysis, and technology collaborations. Connect directly via email, phone, WhatsApp, or LinkedIn.'}
        </p>

        {/* Direct Contact Cards Grid with Red, Blue, Green chromatic distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Email Card (Red Accent) */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#F43F5E]/50 hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)] ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 shadow-md text-slate-900'
                : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F43F5E]/10 border border-[#F43F5E]/30 flex items-center justify-center text-[#F43F5E] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-wider">Email Direct</div>
              <div className={`font-mono text-xs break-all mb-5 ${
                currentTheme === 'light' ? 'text-slate-900 font-semibold' : 'text-[#F8FAFC]'
              }`}>
                {p.email}
              </div>
            </div>

            <div className={`flex items-center gap-2 pt-4 border-t ${
              currentTheme === 'light' ? 'border-slate-100' : 'border-slate-700/30'
            }`}>
              <a
                href={`mailto:${p.email}`}
                className="flex-1 py-2.5 px-3 text-xs font-bold rounded-xl bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white transition-all text-center shadow-[0_0_15px_rgba(244,63,94,0.3)] active:scale-95"
              >
                Send Email
              </a>
              <button
                onClick={() => handleCopy(p.email, 'email')}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentTheme === 'light'
                    ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                    : 'border-slate-700 hover:border-[#F43F5E]/50 hover:bg-white/5 text-slate-300'
                }`}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-[#F43F5E]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Card (Blue Accent) */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#38BDF8]/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)] ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 shadow-md text-slate-900'
                : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-wider">Phone / Mobile</div>
              <div className={`font-mono text-sm mb-5 ${
                currentTheme === 'light' ? 'text-slate-900 font-semibold' : 'text-[#F8FAFC]'
              }`}>
                {p.phone}
              </div>
            </div>

            <div className={`flex items-center gap-2 pt-4 border-t ${
              currentTheme === 'light' ? 'border-slate-100' : 'border-slate-700/30'
            }`}>
              <a
                href={`tel:${p.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-2.5 px-3 text-xs font-bold rounded-xl bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#090A0F] font-bold transition-all text-center shadow-[0_0_15px_rgba(56,189,248,0.3)] active:scale-95"
              >
                Call Now
              </a>
              <button
                onClick={() => handleCopy(p.phone, 'phone')}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentTheme === 'light'
                    ? 'border-slate-200 hover:bg-slate-100 text-slate-700'
                    : 'border-slate-700 hover:border-[#38BDF8]/50 hover:bg-white/5 text-slate-300'
                }`}
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-[#38BDF8]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card (Green Accent) */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 shadow-md text-slate-900'
                : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-wider">WhatsApp Direct</div>
              <div className={`font-mono text-sm mb-5 ${
                currentTheme === 'light' ? 'text-slate-900 font-semibold' : 'text-[#F8FAFC]'
              }`}>
                {p.phone}
              </div>
            </div>

            <div className={`pt-4 border-t ${
              currentTheme === 'light' ? 'border-slate-100' : 'border-slate-700/30'
            }`}>
              <a
                href={p.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card (Blue Sapphire Accent) */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#38BDF8]/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)] ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 shadow-md text-slate-900'
                : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[#38BDF8] mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-wider">LinkedIn Network</div>
              <div className={`font-mono text-xs truncate mb-5 ${
                currentTheme === 'light' ? 'text-slate-900 font-semibold' : 'text-[#F8FAFC]'
              }`}>
                in/adityayadav42007
              </div>
            </div>

            <div className={`pt-4 border-t ${
              currentTheme === 'light' ? 'border-slate-100' : 'border-slate-700/30'
            }`}>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(2,132,199,0.3)] active:scale-95"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Trust Verification Banner */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          currentTheme === 'light'
            ? 'bg-slate-50 border-slate-200 text-slate-600 shadow-sm'
            : 'bg-[#121624] border-slate-800 text-slate-400'
        }`}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F43F5E]" />
            <span>
              Primary Base: <strong className={currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}>Kanpur, Uttar Pradesh, India</strong> (Open to on-site and remote opportunities)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#10B981] font-mono font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Direct verified phone & email communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

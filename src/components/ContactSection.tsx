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
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D6A0]/8 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              07 &middot; {t.contactKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.contactHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Introduction note */}
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-14 font-normal ${
          currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
        }`}>
          {currentLang === 'hi'
            ? 'एआई सिस्टम, वित्तीय विश्लेषण, स्प्रेडशीट मॉडलिंग या नए व्यावसायिक अवसरों के बारे में सीधी बातचीत के लिए मुझसे सीधे संपर्क करें।'
            : 'Available for AI solutions, data modeling discussions, financial analysis, and technology collaborations. Connect directly via email, phone, WhatsApp, or LinkedIn.'}
        </p>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Email Card */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0D1713] border border-[#00D6A0]/25 flex items-center justify-center text-[#00D6A0] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#A5AEA9] font-mono mb-1 uppercase tracking-wider">Email Direct</div>
              <div className={`font-mono text-xs break-all mb-5 ${
                currentTheme === 'light' ? 'text-stone-900 font-semibold' : 'text-[#F3F5F2]'
              }`}>
                {p.email}
              </div>
            </div>

            <div className={`flex items-center gap-2 pt-4 border-t ${
              currentTheme === 'light' ? 'border-stone-100' : 'border-white/5'
            }`}>
              <a
                href={`mailto:${p.email}`}
                className="flex-1 py-2.5 px-3 text-xs font-bold rounded-xl bg-[#00D6A0] hover:bg-[#00D6A0]/90 text-[#080B0A] transition-all text-center shadow-[0_0_15px_rgba(0,214,160,0.25)] active:scale-95"
              >
                Send Email
              </a>
              <button
                onClick={() => handleCopy(p.email, 'email')}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentTheme === 'light'
                    ? 'border-stone-200 hover:bg-stone-100 text-stone-700'
                    : 'border-white/10 hover:border-[#00D6A0]/40 hover:bg-white/10 text-[#A5AEA9]'
                }`}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-[#00D6A0]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0D1713] border border-[#00D6A0]/25 flex items-center justify-center text-[#00D6A0] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#A5AEA9] font-mono mb-1 uppercase tracking-wider">Phone / Mobile</div>
              <div className={`font-mono text-sm mb-5 ${
                currentTheme === 'light' ? 'text-stone-900 font-semibold' : 'text-[#F3F5F2]'
              }`}>
                {p.phone}
              </div>
            </div>

            <div className={`flex items-center gap-2 pt-4 border-t ${
              currentTheme === 'light' ? 'border-stone-100' : 'border-white/5'
            }`}>
              <a
                href={`tel:${p.phone.replace(/\s+/g, '')}`}
                className="flex-1 py-2.5 px-3 text-xs font-bold rounded-xl bg-[#00D6A0] hover:bg-[#00D6A0]/90 text-[#080B0A] transition-all text-center shadow-[0_0_15px_rgba(0,214,160,0.25)] active:scale-95"
              >
                Call Now
              </a>
              <button
                onClick={() => handleCopy(p.phone, 'phone')}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentTheme === 'light'
                    ? 'border-stone-200 hover:bg-stone-100 text-stone-700'
                    : 'border-white/10 hover:border-[#00D6A0]/40 hover:bg-white/10 text-[#A5AEA9]'
                }`}
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-[#00D6A0]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#A5AEA9] font-mono mb-1 uppercase tracking-wider">WhatsApp Direct</div>
              <div className={`font-mono text-sm mb-5 ${
                currentTheme === 'light' ? 'text-stone-900 font-semibold' : 'text-[#F3F5F2]'
              }`}>
                {p.phone}
              </div>
            </div>

            <div className={`pt-4 border-t ${
              currentTheme === 'light' ? 'border-stone-100' : 'border-white/5'
            }`}>
              <a
                href={p.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div
            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#A5AEA9] font-mono mb-1 uppercase tracking-wider">LinkedIn Network</div>
              <div className={`font-mono text-xs truncate mb-5 ${
                currentTheme === 'light' ? 'text-stone-900 font-semibold' : 'text-[#F3F5F2]'
              }`}>
                in/adityayadav42007
              </div>
            </div>

            <div className={`pt-4 border-t ${
              currentTheme === 'light' ? 'border-stone-100' : 'border-white/5'
            }`}>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(2,132,199,0.3)] active:scale-95"
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
            ? 'bg-stone-50 border-stone-200 text-stone-600 shadow-sm'
            : 'bg-[#141B18] border-[#00D6A0]/15 text-[#A5AEA9]'
        }`}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00D6A0]" />
            <span>
              Primary Base: <strong className={currentTheme === 'light' ? 'text-stone-900' : 'text-[#F3F5F2]'}>Kanpur, Uttar Pradesh, India</strong> (Open to on-site and remote opportunities)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#00D6A0] font-mono font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct verified phone & email communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

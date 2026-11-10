import React, { useEffect, useState } from 'react';

interface MonogramIntroProps {
  onComplete: () => void;
  lang: 'en' | 'hi';
}

export const MonogramIntro: React.FC<MonogramIntroProps> = ({ onComplete, lang }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if user requested to skip or autostart
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      onComplete();
      return;
    }

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setExiting(true);
      const exitTimer = setTimeout(onComplete, 400);
      return () => clearTimeout(exitTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(onComplete, 150);
  };

  return (
    <div
      role="dialog"
      aria-label="Introduction"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080B0A] transition-opacity duration-500 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#00D6A0]/10 blur-3xl pointer-events-none animate-emerald-glow" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram emblem */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#00D6A0]/25 animate-ping opacity-25" />
          <div className="absolute inset-0 rounded-full border border-[#C9A96E]/40 shadow-[0_0_20px_rgba(0,214,160,0.2)]" />
          <span className="font-heading text-3xl font-bold tracking-widest text-[#F3F5F2]">
            A<span className="text-[#00D6A0]">Y</span>
          </span>
        </div>

        {/* Champagne gold & emerald gradient line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mb-4 transition-all duration-700" />

        {/* Identity & Subtitle */}
        <h1 className="font-heading text-xl md:text-2xl font-bold tracking-wide text-[#F3F5F2] mb-1">
          Aditya Yadav
        </h1>
        <p className="text-xs uppercase tracking-widest text-[#00D6A0] font-medium">
          AI &middot; Data Analytics &middot; Technical Education
        </p>

        {/* Skip button for accessibility */}
        <button
          onClick={handleSkip}
          className="mt-8 px-4 py-1.5 text-xs text-[#A5AEA9] hover:text-[#F3F5F2] transition-colors border border-white/10 hover:border-[#00D6A0]/40 rounded-full focus:outline-none focus:ring-1 focus:ring-[#00D6A0]"
          aria-label="Skip introductory animation"
        >
          {lang === 'hi' ? 'छोड़ें (Skip)' : 'Skip Intro'} &rarr;
        </button>
      </div>
    </div>
  );
};

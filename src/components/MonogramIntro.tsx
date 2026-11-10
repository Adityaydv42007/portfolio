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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090A0F] transition-opacity duration-500 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient Red, Blue, Green RGB glow orbs */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#F43F5E]/15 blur-3xl pointer-events-none -top-10 -left-10 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#38BDF8]/15 blur-3xl pointer-events-none top-1/3 right-0 animate-rgb-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#10B981]/15 blur-3xl pointer-events-none -bottom-10 left-1/3 animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram emblem with RGB chromatic layers */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#F43F5E]/30 animate-ping opacity-30" />
          <div className="absolute inset-1 rounded-full border border-[#38BDF8]/50 shadow-[0_0_20px_rgba(56,189,248,0.3)]" />
          <div className="absolute inset-0 rounded-full border border-[#10B981]/40" />
          <span className="font-heading text-3xl font-extrabold tracking-widest text-[#F8FAFC]">
            <span className="text-[#38BDF8]">A</span>
            <span className="text-[#F43F5E]">Y</span>
          </span>
        </div>

        {/* Tri-color Red-Blue-Green gradient line */}
        <div className="w-28 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mb-5 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.4)]" />

        {/* Identity & Subtitle */}
        <h1 className="font-heading text-2xl md:text-3xl font-extrabold tracking-wide text-[#F8FAFC] mb-2">
          Aditya Yadav
        </h1>
        <p className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="text-[#F43F5E]">AI</span>
          <span className="text-white/30">&middot;</span>
          <span className="text-[#38BDF8]">Data Analytics</span>
          <span className="text-white/30">&middot;</span>
          <span className="text-[#10B981]">Technical Education</span>
        </p>

        {/* Skip button for accessibility */}
        <button
          onClick={handleSkip}
          className="mt-8 px-4 py-1.5 text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors border border-white/10 hover:border-[#38BDF8]/50 rounded-full focus:outline-none focus:ring-1 focus:ring-[#38BDF8]"
          aria-label="Skip introductory animation"
        >
          {lang === 'hi' ? 'छोड़ें (Skip)' : 'Skip Intro'} &rarr;
        </button>
      </div>
    </div>
  );
};

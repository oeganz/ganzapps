"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean dark background with subtle radial gradient */}
      <div className="absolute inset-0 bg-[var(--page-bg)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(74,222,128,0.03)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-brand/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 w-full">
        
        {/* Text block - full width on mobile, left on desktop */}
        <div className={`text-center lg:text-left ${mounted ? 'hero-content' : 'opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-6 sm:mb-8">
            <Zap className="w-3.5 h-3.5 text-brand" fill="#4ADE80" />
            <span className="text-brand text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              AI-Powered Development Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8 px-0">
            <span className="text-[var(--heading-color)]">Build&nbsp;</span>
            <span className="text-[var(--heading-color)]">AI&nbsp;Products.</span>
            <br />
            <span className="gradient-text">Ship&nbsp;Them.</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 px-4 sm:px-0 mb-8 sm:mb-12 leading-relaxed">
            We design and ship SaaS products, autonomous AI agents, and end-to-end digital
            solutions — from spark to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-0 sm:px-0">
            <a href="#contact" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-center">
              Start a Project →
            </a>
            <a href="#portfolio" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-center">
              See Our Work
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--border-color)]">
            <p className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3 sm:mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 opacity-40 px-0">
              {['StartupX', 'TechCorp', 'DataFlow', 'CloudBase', 'AI Labs'].map((brand) => (
                <span key={brand} className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)] tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product mockup - below text on mobile */}
        <div className={`mt-12 sm:mt-16 ${mounted ? 'hero-content' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-lg mx-auto">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-3xl" />
            
            {/* Product card */}
            <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
              {/* Mock dashboard header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[var(--border-color)]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400/60" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="h-3 sm:h-4 w-32 sm:w-48 bg-[var(--surface-200)] rounded" />
              </div>
              
              {/* Mock stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { label: 'Agents', value: '24', color: 'bg-brand/20' },
                  { label: 'Uptime', value: '99.9%', color: 'bg-blue-500/20' },
                  { label: 'Tasks', value: '1.2k', color: 'bg-purple-500/20' },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.color} rounded-xl p-2 sm:p-4 text-center`}>
                    <div className="text-lg sm:text-2xl font-bold text-[var(--heading-color)]">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5 sm:mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mock activity chart */}
              <div className="bg-[var(--surface-100)] rounded-xl p-3 sm:p-4">
                <div className="flex items-end gap-1 sm:gap-2 h-16 sm:h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand/40 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] sm:text-xs text-[var(--text-muted)]">
                  <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
              </div>

              {/* AI badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-brand text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                AI ACTIVE
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">Agents running</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

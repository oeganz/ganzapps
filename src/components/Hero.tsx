"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean dark background */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--body-bg)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(74,222,128,0.03)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-brand/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero image - clean SaaS dashboard visual */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-mockup.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 blur-px"
          style={{ filter: 'blur(1px) brightness(0.6)' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--body-bg)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--body-bg)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 w-full">
        
        {/* Text block */}
        <div className={`text-center lg:text-left ${mounted ? 'hero-content' : 'opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-6 sm:mb-8">
            <Zap className="w-3.5 h-3.5 text-brand" fill="#4ADE80" />
            <span className="text-brand text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              AI-Powered Development Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 sm:mb-8">
            <span style={{ color: "var(--heading-color)" }}>Build&nbsp;</span>
            <span style={{ color: "var(--heading-color)" }}>AI&nbsp;Products.</span>
            <br />
            <span className="gradient-text">Ship&nbsp;Them.</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 px-4 sm:px-0 mb-8 sm:mb-12 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            We design and ship SaaS products, autonomous AI agents, and end-to-end digital
            solutions — from spark to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-center">
              Start a Project →
            </a>
            <a href="#portfolio" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-center">
              See Our Work
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

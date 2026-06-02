"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Animated gradient mesh ── */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* ── Particle overlay ── */}
      <div className="absolute inset-0 particles" />

      {/* ── Radial glow orbs ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Floating geometric shapes ── */}
      <div className="absolute top-28 right-[12%] w-24 h-24 border border-brand/15 rotate-45 animate-shape-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-44 left-[7%] w-14 h-14 border border-brand/10 rounded-full animate-shape-float-delayed" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-36 right-[18%] w-20 h-20 border border-brand/20 rotate-12 animate-shape-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-52 left-[5%] w-10 h-10 bg-brand/5 rounded-lg rotate-45 animate-shape-float-delayed" style={{ animationDelay: '-1s' }} />
      <div className="absolute top-[40%] right-[6%] w-8 h-8 border border-brand/10 rotate-30 animate-shape-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-[60%] left-[15%] w-16 h-16 border border-brand/10 rounded-full animate-shape-float-delayed" style={{ animationDelay: '-5s' }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
        <div className={mounted ? 'hero-content' : 'opacity-0'}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-8">
            <Zap className="w-3.5 h-3.5 text-brand" fill="#4ADE80" />
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">
              AI-Powered Development Studio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] mb-8">
            <span className="text-white">Build&nbsp;</span>
            <span className="text-white">AI&nbsp;Products.</span>
            <br />
            <span className="gradient-text">Ship&nbsp;Them.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We design and ship SaaS products, autonomous AI agents, and end-to-end digital
            solutions — from spark to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Start a Project →
            </a>
            <a href="#portfolio" className="btn-secondary text-base text-center px-8 py-4">
              See Our Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

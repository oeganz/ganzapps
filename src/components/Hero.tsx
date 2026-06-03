"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Clean dark background with subtle radial gradient ── */}
      <div className="absolute inset-0 bg-[var(--page-bg)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(74,222,128,0.03)]" />
      
      {/* ── Subtle grid pattern ── */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* ── Ambient glow — bottom center ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand/8 rounded-full blur-[180px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className={`flex-1 text-center lg:text-left ${mounted ? 'hero-content' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-8">
            <Zap className="w-3.5 h-3.5 text-brand" fill="#4ADE80" />
            <span className="text-brand text-xs font-semibold tracking-widest uppercase">
              AI-Powered Development Studio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold tracking-tight leading-[1.0] mb-8">
            <span className="text-[var(--heading-color)]">Build&nbsp;</span>
            <span className="text-[var(--heading-color)]">AI&nbsp;Products.</span>
            <br />
            <span className="gradient-text">Ship&nbsp;Them.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            We design and ship SaaS products, autonomous AI agents, and end-to-end digital
            solutions — from spark to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Start a Project →
            </a>
            <a href="#portfolio" className="btn-secondary text-base text-center px-8 py-4">
              See Our Work
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-40">
              {['StartupX', 'TechCorp', 'DataFlow', 'CloudBase', 'AI Labs'].map((brand) => (
                <span key={brand} className="text-sm font-semibold text-[var(--text-secondary)] tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Floating product visual */}
        <div className={`flex-1 relative ${mounted ? 'hero-content' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-lg mx-auto">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-3xl" />
            
            {/* Product card mockup */}
            <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 shadow-2xl">
              {/* Mock dashboard header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="h-4 w-48 bg-[var(--surface-200)] rounded" />
              </div>
              
              {/* Mock stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Agents', value: '24', color: 'bg-brand/20' },
                  { label: 'Uptime', value: '99.9%', color: 'bg-blue-500/20' },
                  { label: 'Tasks', value: '1.2k', color: 'bg-purple-500/20' },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.color} rounded-xl p-4 text-center`}>
                    <div className="text-2xl font-bold text-[var(--heading-color)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mock activity chart */}
              <div className="bg-[var(--surface-100)] rounded-xl p-4">
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand/40 rounded-t transition-all"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-[var(--text-muted)]">
                  <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
              </div>

              {/* AI badge */}
              <div className="absolute -top-4 -right-4 bg-brand text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                AI ACTIVE
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -bottom-4 -left-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-4 py-3 shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-[var(--text-secondary)]">Agents running</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

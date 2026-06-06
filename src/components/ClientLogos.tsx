"use client";

import ScrollReveal from "./ScrollReveal";

export default function ClientLogos() {
  return (
    <section className="py-16 border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            {/* Gradient line */}
            <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, #4F7CFF, transparent)" }} />
            
            <p className="text-center text-sm font-medium tracking-wide" style={{ color: "var(--text-muted)" }}>
              From idea to production — AI-native from day one
            </p>
            
            <p className="text-center text-xs leading-relaxed max-w-lg" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              We build autonomous agents, SaaS products, and AI-powered systems that run 24/7 — so your team ships faster and scales smarter.
            </p>
            
            {/* Gradient line */}
            <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, #4F7CFF, transparent)" }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "GanzApps turned our vague idea into a fully functional SaaS in six weeks. The AI agent they built handles 80% of our customer queries automatically. Revenue up 3x.",
    name: "Marcus Chen",
    role: "CTO",
    company: "Nexflow",
  },
  {
    quote:
      "They shipped our MVP in record time. The code quality is exceptional — clean, typed, well-documented. We've already started phase two with them.",
    name: "Sarah Okonkwo",
    role: "Founder",
    company: "StartupLabs",
  },
  {
    quote:
      "The dashboard they delivered replaced five different spreadsheets. Our ops team can finally make decisions in real-time. Total game-changer.",
    name: "David Park",
    role: "Head of Product",
    company: "ScaleOps",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Social Proof
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              What <span className="gradient-text">Clients Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="glass-card p-8 flex flex-col h-full group relative overflow-hidden">
                {/* Top accent glow */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent group-hover:via-brand/70 transition-all duration-500" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-brand text-brand"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="var(--text-body) text-base leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <span className="text-brand font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

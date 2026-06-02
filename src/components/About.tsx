"use client";

import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "GanzApps shipped our entire MVP in three weeks — auth, billing, AI agent pipeline, and deployment. We went from idea to paying customers faster than I thought possible.",
    author: "Rizky Pratama",
    role: "CEO, Nexusflow — AI Analytics Startup",
    initials: "RP",
  },
  {
    quote:
      "We needed a partner who understood both the AI layer and the product layer. GanzApps delivered a complete system with LangGraph agents and a polished SaaS dashboard — on time and on budget.",
    author: "Sarah Chen",
    role: "Founder, DataStream AI",
    initials: "SC",
  },
  {
    quote:
      "The ADLC setup transformed how we ship. Our dev cycle went from 3 weeks per feature to 4 days. The AI agents they built handle 80% of our testing and deployment work automatically.",
    author: "Dimas Wijaya",
    role: "CTO, RetailSense — E-commerce Platform",
    initials: "DW",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Left: text */}
          <div>
            <ScrollReveal>
              <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
                AI-first.{" "}
                <span className="gradient-text">Execution-first.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                GanzApps is a lean, AI-powered development studio. We don&apos;t just
                consult — we build. Every project ships with production-grade code,
                automated pipelines, and AI agents woven into the stack from day one.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you&apos;re launching a SaaS product, digitizing operations, or
                deploying autonomous agents — we move fast, cut complexity, and deliver
                systems that run themselves.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: orb visual */}
          <div className="flex items-center justify-center lg:pt-10">
            <ScrollReveal delay={150}>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Outer glow rings */}
                <div className="absolute inset-0 rounded-full border border-brand/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-brand/6 animate-[spin_15s_linear_infinite_reverse]" />
                {/* Core orb */}
                <div className="absolute inset-8 rounded-full about-orb flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-brand mb-1">50+</div>
                    <div className="text-sm text-gray-400 font-medium tracking-wide">Projects Shipped</div>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_rgba(74,222,128,0.8)] animate-[spin_8s_linear_infinite]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] animate-[spin_10s_linear_infinite]" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Testimonials — rotating */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 rounded-full blur-3xl pointer-events-none" />

              {/* Quote icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 mb-6">
                <Quote className="w-5 h-5 text-brand" fill="#4ADE80" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 justify-center mb-8">
                {[1,2,3,4,5].map(n => (
                  <Star key={n} className="w-4 h-4 text-brand" fill="#4ADE80" />
                ))}
              </div>

              {/* Testimonial text */}
              <div className="relative min-h-[120px]">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "translateY(0)" : "translateY(12px)",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed italic mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>

              {/* Author */}
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `translateX(-50%) translateY(${i === active ? 0 : 8}px)`,
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
                    {t.initials}
                  </div>
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              ))}

              {/* Dots */}
              <div className="flex gap-2 justify-center mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-brand" : "w-1.5 bg-gray-600"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

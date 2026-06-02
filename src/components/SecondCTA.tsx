"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SecondCTA() {
  return (
    <section className="py-24 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
            {/* Gradient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.06] via-transparent to-violet-500/[0.04] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
                Ready?
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-white leading-tight">
                Your next project starts today.
              </h2>
              <p className="text-gray-400 text-base mb-10 max-w-lg mx-auto">
                Talk to us. No commitment, just clarity.
              </p>
              <a
                href="#contact"
                className="btn-primary text-base px-10 py-5 inline-flex items-center gap-3"
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SecondCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden rounded-[24px]" style={{ border: "1px solid rgba(42,51,73,0.7)" }}>
            {/* Gradient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.06] via-transparent to-violet-500/[0.04] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-brand/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <p
                className="font-semibold tracking-[0.2em] uppercase text-xs mb-5"
                style={{ color: "#4F7CFF" }}
              >
                READY TO START
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight"
                style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
              >
                Your next project starts today.
              </h2>
              <p
                className="text-base mb-10 max-w-lg mx-auto"
                style={{ color: "#8392A8", lineHeight: 1.65 }}
              >
                Talk to us. No commitment, just clarity.
              </p>
              <a
                href="#contact"
                className="btn-gradient text-base inline-flex items-center gap-3 px-10 py-4"
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

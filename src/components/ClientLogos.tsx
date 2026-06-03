"use client";

import ScrollReveal from "./ScrollReveal";

const logos = [
  "StartupLabs",
  "Nexflow",
  "DataForge",
  "CloudNova",
  "ScaleOps",
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.05] bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-xs text-[var(--text-muted)] font-semibold tracking-[0.2em] uppercase mb-10">
            Trusted by
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((name, i) => (
              <span
                key={name}
                className="text-[var(--text-muted)] font-bold text-base md:text-lg tracking-wide hover:var(--text-body) transition-colors cursor-default select-none"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

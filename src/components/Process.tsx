"use client";

import { MessageSquare, Layers, Rocket, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Audit",
    desc: "We dig into your goals, constraints, and vision. Define scope, stack, and timeline together.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Prototype",
    desc: "Rapid wireframes and mockups. Validate flows before writing a single line of production code.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build",
    desc: "Full-stack development with AI agents handling code, tests, and deployment pipelines.",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Launch",
    desc: "Production deployment, monitoring setup, and handoff. Your system runs, we stay on call.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-surface-50/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Four steps. <span className="gradient-text">Zero fluff.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/[0.06] z-0">
            <div className="absolute inset-0 process-line" />
          </div>

          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="glass-card p-8 h-full relative z-10 group text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 text-brand font-mono text-xs font-bold mb-6 group-hover:bg-brand/20 transition-colors">
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand/20 transition-colors">
                  <step.icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
                </div>

                {/* Title + desc */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex gap-5 w-max" style={{ WebkitOverflowScrolling: "touch" }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80}>
                <div className="glass-card p-7 w-64 flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand/10 text-brand font-mono text-xs font-bold mb-5">
                    {step.num}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand">{step.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

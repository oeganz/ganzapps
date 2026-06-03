"use client";

import { Globe, BrainCircuit, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    icon: Globe,
    title: "SaaS Platform",
    type: "Full-Stack SaaS",
    desc: "Multi-tenant SaaS products with authentication, subscription billing, and real-time dashboards. From MVP to 10,000+ users.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    color: "var(--primary)",
  },
  {
    icon: BrainCircuit,
    title: "AI Agent System",
    type: "Agentic AI",
    desc: "Autonomous AI agents that handle customer service, data processing, and business workflows — running 24/7 without human intervention.",
    tags: ["Python", "LangGraph", "LangChain", "AWS"],
    color: "#a78bfa",
  },
  {
    icon: TrendingUp,
    title: "Business Dashboard",
    type: "Digitalization",
    desc: "End-to-end business process automation — from legacy spreadsheets to modern data pipelines, dashboards, and automated reporting.",
    tags: ["React", "Node.js", "AI Integration", "CI/CD"],
    color: "#fb923c",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-surface-50/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Results
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              What we <span className="gradient-text">deliver</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="glass-card p-8 h-full flex flex-col group relative overflow-hidden">
                {/* Top color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                />

                {/* Type label */}
                <span
                  className="text-xs font-semibold tracking-wider uppercase mb-4 inline-block"
                  style={{ color: p.color }}
                >
                  {p.type}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: `${p.color}12` }}
                >
                  <p.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: p.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {p.title}
                </h3>

                {/* Desc */}
                <p className="text-[var(--text-muted)] leading-relaxed mb-6 flex-grow group-hover:var(--text-body) transition-colors">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300"
                      style={{
                        color: p.color,
                        background: `${p.color}10`,
                        border: `1px solid ${p.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

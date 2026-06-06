"use client";

import { Server, Brain, Cpu, Workflow, Compass, Network } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Server,
    title: "SaaS Building",
    desc: "Full-stack products — auth, billing, dashboards, APIs. From spark to production.",
    badge: "Popular",
    accent: "#4F7CFF",
    gradient: "linear-gradient(90deg, #4F7CFF, #22D3EE)",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    desc: "Autonomous agents that handle workflows and decisions — 24/7, without human input.",
    badge: "High Demand",
    accent: "#8B5CF6",
    gradient: "linear-gradient(90deg, #8B5CF6, #4F7CFF)",
  },
  {
    icon: Cpu,
    title: "ADLC Setup",
    desc: "AI Development Lifecycle integration — from code generation to CI/CD, testing, and deployment.",
    badge: null,
    accent: "#22D3EE",
    gradient: "linear-gradient(90deg, #22D3EE, #8B5CF6)",
  },
  {
    icon: Workflow,
    title: "AI Digitalization",
    desc: "Legacy processes into modern data pipelines, dashboards, and automated reporting.",
    badge: null,
    accent: "#fb923c",
    gradient: "linear-gradient(90deg, #fb923c, #4F7CFF)",
  },
  {
    icon: Compass,
    title: "Tech Consulting",
    desc: "Architecture review, stack selection, scaling strategy. Expert guidance before you commit.",
    badge: null,
    accent: "#f472b6",
    gradient: "linear-gradient(90deg, #f472b6, #8B5CF6)",
  },
  {
    icon: Network,
    title: "Agent Infrastructure",
    desc: "Hermes & OpenClaw setup — orchestrate multi-agent systems, deploy persistent agents, and build production-grade AI pipelines.",
    badge: "New",
    accent: "#34D399",
    gradient: "linear-gradient(90deg, #34D399, #22D3EE)",
  },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="group glass-card rounded-[16px] p-0 h-full relative overflow-hidden cursor-default transition-all duration-300"
        style={{
          border: "1px solid rgba(42,51,73,0.7)",
        }}
      >
        {/* Top gradient accent bar */}
        <div
          className="w-full h-0.5"
          style={{ background: s.gradient }}
        />

        {/* Icon + content area */}
        <div className="p-6 pb-7">
          {/* Badge */}
          {s.badge && (
            <span
              className="inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full mb-5"
              style={{
                color: s.accent,
                background: `${s.accent}12`,
                border: `1px solid ${s.accent}30`,
                letterSpacing: "0.04em",
              }}
            >
              {s.badge}
            </span>
          )}

          {/* Icon tile */}
          <div
            className="w-12 h-12 rounded-[11px] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
            style={{
              background: `${s.accent}15`,
            }}
          >
            <s.icon
              className="w-5 h-5"
              style={{ color: s.accent }}
              strokeWidth={1.5}
            />
          </div>

          {/* Title */}
          <h3
            className="text-[17px] font-semibold tracking-tight mb-2.5 leading-snug"
            style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
          >
            {s.title}
          </h3>

          {/* Description */}
          <p
            className="text-[13px] leading-relaxed"
            style={{ color: "#8392A8", lineHeight: 1.6 }}
          >
            {s.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5"
              style={{ color: "#4F7CFF" }}
            >
              WHAT WE BUILD
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
            >
              From spark to <span className="gradient-text">scale</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

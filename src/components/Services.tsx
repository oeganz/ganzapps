"use client";

import { useEffect, useRef, useState } from "react";
import { Server, Brain, Cpu, Workflow, Compass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Server,
    title: "SaaS Building",
    desc: "Full-stack SaaS products — auth, billing, dashboards, APIs. We build the whole thing, not just the UI.",
    badge: "Popular",
    accent: "#4ADE80",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    desc: "Deploy autonomous AI agents that handle workflows, make decisions, and scale your operations 24/7.",
    badge: "High Demand",
    accent: "#a78bfa",
  },
  {
    icon: Cpu,
    title: "ADLC Setup",
    desc: "AI Development Lifecycle integration — from code generation to CI/CD, testing, and production deployment.",
    badge: null,
    accent: "#38bdf8",
  },
  {
    icon: Workflow,
    title: "AI Digitalization",
    desc: "Transform manual processes into automated digital systems. CRM, ERP, internal tools — we build what you need.",
    badge: null,
    accent: "#fb923c",
  },
  {
    icon: Compass,
    title: "Tech Consulting",
    desc: "Architecture review, stack selection, scaling strategy. Get expert guidance before you commit resources.",
    badge: null,
    accent: "#f472b6",
  },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group glass-card p-8 h-full relative overflow-hidden cursor-default">
        {/* Subtle top-left corner accent */}
        <div
          className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(180deg, ${s.accent}, transparent)` }}
        />

        {/* Badge */}
        {s.badge && (
          <div className="absolute top-5 right-5">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border"
              style={{
                color: s.accent,
                borderColor: `${s.accent}30`,
                background: `${s.accent}10`,
              }}
            >
              {s.badge}
            </span>
          </div>
        )}

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
          style={{ background: `${s.accent}15` }}
        >
          <s.icon
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: s.accent }}
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
          {s.desc}
        </p>

        {/* Bottom hover line */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
        />
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
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

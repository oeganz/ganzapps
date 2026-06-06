"use client";

import { Cloud, Bot, LineChart, Zap, Shield, Code2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  {
    icon: Cloud,
    title: "Multi-Tenant SaaS Platforms",
    type: "Full-Stack SaaS",
    desc: "Auth, billing, dashboards, APIs. We build products that scale from MVP to thousands of users — with AI agents woven into the stack from day one.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AI Integration"],
    color: "#4F7CFF",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agent Systems",
    type: "Agentic AI",
    desc: "Multi-agent workflows that handle customer service, data processing, and business operations — running 24/7 without human intervention. Built on LangGraph/LangChain.",
    tags: ["Python", "LangGraph", "LangChain", "AWS", "OpenAI"],
    color: "#8B5CF6",
  },
  {
    icon: LineChart,
    title: "Legacy Modernization & AI Integration",
    type: "Digitalization",
    desc: "Turn legacy spreadsheets and manual processes into automated data pipelines, real-time dashboards, and AI-powered reporting. Your data, finally working for you.",
    tags: ["Python", "React", "Node.js", "AI APIs", "CI/CD"],
    color: "#22D3EE",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance Systems",
    type: "AI Security",
    desc: "Build AI systems with enterprise-grade security, audit trails, and compliance checks. SOC2-ready architectures, data isolation, and role-based access control.",
    tags: ["PostgreSQL", "Auth0", "Encryption", "Audit Logs"],
    color: "#34D399",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation Pipelines",
    type: "AI Automation",
    desc: "End-to-end AI workflows — from data ingestion to model inference to business action. CI/CD for AI systems with automated testing and rollback.",
    tags: ["GitHub Actions", "Docker", "AWS", "Python", "LangChain"],
    color: "#FBBF24",
  },
  {
    icon: Code2,
    title: "Custom AI Development & Consulting",
    type: "AI Consulting",
    desc: "Architecture review, tech stack selection, and AI strategy. We advise before committing — and build after. From proof-of-concept to production deployment.",
    tags: ["Tech Strategy", "Architecture", "PoC", "LLM Integration"],
    color: "#F472B6",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-surface-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
 <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              What we <span className="gradient-text">build</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto leading-relaxed">
              Our current engagements are private. Below is a showcase of our capabilities and what we've built across SaaS, AI agents, and digital transformation.
</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <div className="glass-card p-8 h-full flex flex-col group relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                />

                <span
                  className="text-xs font-semibold tracking-wider uppercase mb-4 inline-block"
                  style={{ color: p.color }}
                >
                  {p.type}
                </span>

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

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {p.title}
                </h3>

                <p className="text-[var(--text-muted)] leading-relaxed mb-6 flex-grow group-hover:var(--text-body) transition-colors">
                  {p.desc}
                </p>

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

"use client";

import { Server, Bot, RefreshCw, GitBranch, Compass, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  { icon: Server, label: "Full-Stack SaaS Development", desc: "Auth, billing, dashboards, APIs — production-grade from day one." },
  { icon: Bot, label: "AI Agent Systems", desc: "Autonomous agents that run 24/7 without human input." },
  { icon: RefreshCw, label: "Legacy Modernization", desc: "Turn manual processes into automated, AI-powered systems." },
  { icon: GitBranch, label: "CI/CD & DevOps", desc: "Automated pipelines from code to production with rollback." },
  { icon: Compass, label: "Tech Strategy Consulting", desc: "Architecture review and stack selection before you commit." },
  { icon: Users, label: "AI Integration & Embedding", desc: "Weave AI into your existing products and workflows." },
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: studio story */}
          <div>
            <ScrollReveal>
              <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
                WHO WE ARE
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
                AI-first.{" "}
                <span className="gradient-text">Execution-first.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base text-[var(--text-muted)] leading-relaxed mb-5">
                GanzApps is a lean, AI-powered development studio. We don't just consult — we build. Every project ships with production-grade code, automated pipelines, and AI agents woven into the stack from day one.
              </p>
              <p className="text-base text-[var(--text-muted)] leading-relaxed mb-8">
                Whether you're launching a SaaS product, digitizing operations, or deploying autonomous agents — we move fast, cut complexity, and deliver systems that run themselves. Our default is execution over slides.
              </p>
            </ScrollReveal>

            {/* Founder card */}
            <ScrollReveal delay={150}>
              <div className="glass-card p-8 flex flex-col sm:flex-row gap-6">
                <img
                  src="/images/profile-real.png"
                  alt="Ugan Saripudin"
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold mb-1">Ugan Saripudin</h3>
                  <p className="text-brand text-sm font-medium mb-3">Founder — GanzApps</p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">
                    Tech Lead specializing in SaaS architecture, agentic AI systems, and rapid full-stack development. Available for projects that need real execution, not just slides.
                  </p>
                  <a
                    href="https://ugan.ganzapps.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm font-medium hover:underline"
                  >
                    ugan.ganzapps.my.id →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: capabilities grid */}
          <div>
            <ScrollReveal>
              <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
 WHAT WE DO
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Our<span className="gradient-text">capabilities</span>
              </h3>
            </ScrollReveal>

            <div className="grid gap-4">
              {capabilities.map((cap, i) => (
                <ScrollReveal key={cap.label} delay={i * 60}>
                  <div className="glass-card p-5 flex items-start gap-4 group hover:border-brand/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                      <cap.icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-white transition-colors">{cap.label}</h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

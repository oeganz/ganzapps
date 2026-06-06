"use client";

import { Code2, Database, Cloud, Bot, Palette } from "lucide-react";
import type { ElementType } from "react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    label: "Frontend",
    icon: Code2,
    color: "#4F7CFF",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    label: "Backend& Database",
    icon: Database,
    color: "#22D3EE",
    items: ["Node.js", "PostgreSQL", "Prisma", "Python", "REST APIs"],
  },
  {
    label: "AI & Agents",
    icon: Bot,
    color: "#8B5CF6",
    items: ["LangChain", "LangGraph", "OpenAI", "Claude", "AI Agents"],
  },
  {
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "#FBBF24",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Cloudflare"],
  },
  {
    label: "Design",
    icon: Palette,
    color: "#F472B6",
    items: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,124,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,124,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              OUR STACK
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Built with <span className="gradient-text">modern tools</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.label} delay={i * 80}>
                <div
                  className="glass-card p-6 group hover:shadow-[0_0_40px_-8px_rgba(79,124,255,0.25)] transition-all duration-300"
                  style={{ borderColor: "rgba(42,51,73,0.7)" }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${cat.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: cat.color }} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: cat.color }}>
                      {cat.label}
                    </span>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_12px_-2px_rgba(79,124,255,0.3)]"
                        style={{
                          color: "var(--text-body)",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

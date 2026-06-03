"use client";

import { Code2, Database, Cloud, Bot } from "lucide-react";
import type { ElementType } from "react";
import ScrollReveal from "./ScrollReveal";

const stacks = [
  { label: "Next.js", category: "Framework" },
  { label: "TypeScript", category: "Language" },
  { label: "Tailwind CSS", category: "Styling" },
  { label: "Python", category: "AI & Backend" },
  { label: "PostgreSQL", category: "Database" },
  { label: "AWS", category: "Cloud" },
  { label: "Docker", category: "DevOps" },
  { label: "LangChain", category: "AI Agents" },
  { label: "Prisma", category: "ORM" },
  { label: "React", category: "Frontend" },
  { label: "GitHub Actions", category: "CI/CD" },
  { label: "Vercel", category: "Hosting" },
  { label: "Cloudflare", category: "Edge" },
  { label: "Node.js", category: "Backend" },
  { label: "Figma", category: "Design" },
  { label: "LangGraph", category: "AI Agents" },
];

const iconMap: Record<string, ElementType> = {
  Framework: Code2,
  Language: Database,
  Styling: Code2,
  "AI & Backend": Bot,
  Database: Database,
  Cloud: Cloud,
  DevOps: Cloud,
  "AI Agents": Bot,
  ORM: Database,
  Frontend: Code2,
  "CI/CD": Cloud,
  Hosting: Cloud,
  Edge: Cloud,
  Backend: Bot,
  Design: Code2,
};

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Our Stack
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Built with <span className="gradient-text">modern tools</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {stacks.map((stack) => {
              const Icon = iconMap[stack.category] || Code2;
              return (
                <div
                  key={stack.label}
                  className="glass-card tech-badge flex flex-col items-center gap-2 p-5 text-center group"
                >
                  <Icon
                    className="w-5 h-5 text-brand/50 group-hover:text-brand transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="font-semibold text-sm text-[var(--text-body)] group-hover:text-white transition-colors duration-300">
                    {stack.label}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">{stack.category}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { Check, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Starter",
    tagline: "Idea to Prototype",
    price: "$2,500",
    highlight: false,
    features: [
      "2-week rapid prototype",
      "Core feature scoping & wireframes",
      "Frontend + basic backend",
      "1 revision round",
      "Source code & deployment",
    ],
    cta: "Start Small",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Growth",
    tagline: "MVP to Launch",
    price: "$7,500",
    highlight: true,
    features: [
      "6-week end-to-end build",
      "Auth, payments & database",
      "AI integration (chatbots, summarizers)",
      "3 revision rounds",
      "CI/CD + production deployment",
    ],
    cta: "Most Popular",
    ctaVariant: "primary" as const,
  },
  {
    name: "Scale",
    tagline: "AI Agent Systems",
    price: "$15,000+",
    highlight: false,
    features: [
      "Custom AI agent architecture",
      "Multi-agent workflows",
      "Enterprise integrations (API, webhooks)",
      "Unlimited revisions",
      "Ongoing support SLA",
    ],
    cta: "Go Big",
    ctaVariant: "secondary" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Investment
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Invest in Your <span className="gradient-text">Build</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`glass-card relative p-8 flex flex-col h-full ${
                  plan.highlight
                    ? "border-brand/30 shadow-[0_0_60px_-12px_rgba(74,222,128,0.22)]"
                    : ""
                }`}
              >
                {/* Most Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand text-black text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                      <Zap className="w-3 h-3 fill-black" strokeWidth={0} />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name + tagline */}
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-wider uppercase text-brand mb-2">
                    {plan.name}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm var(--text-body)">
                      <Check className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center font-semibold text-sm px-6 py-3.5 rounded-xl transition-all ${
                    plan.ctaVariant === "primary"
                      ? "bg-brand text-black hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.5)]"
                      : "border border-white/[0.1] var(--text-body) hover:border-brand/30 hover:text-white hover:shadow-[0_0_30px_-8px_rgba(74,222,128,0.2)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

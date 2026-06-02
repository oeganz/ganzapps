"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How does payment work?",
    a: "We split it into milestones. Typically 50% upfront, 50% on delivery. For larger projects, we break it into 3-4 milestone payments tied to defined deliverables. No surprise bills.",
  },
  {
    q: "What's the typical timeline?",
    a: "A prototype takes 2-3 weeks. An MVP takes 6-8 weeks. AI agent systems take 8-12 weeks depending on complexity. We agree on a timeline upfront and stick to it.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every package includes 30 days of post-launch support at no extra cost. After that, we offer monthly retainer plans for ongoing maintenance, updates, and SLA coverage.",
  },
  {
    q: "Can we sign an NDA?",
    a: "Absolutely. We treat every project with strict confidentiality. NDA is standard on all engagements — we sign yours or provide ours.",
  },
  {
    q: "What if we need revisions?",
    a: "All packages include defined revision rounds. Starter covers 1 round, Growth covers 3, Scale has unlimited. Extra revisions beyond the contract are charged at a flat hourly rate — no surprise pricing.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "We adapt to your stack, not the other way around. Tell us what you're running — we integrate with your existing infrastructure, databases, and APIs. We also advise if your stack needs an upgrade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
              Support
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">Questions</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-sm text-gray-100 group-hover:text-white">
                    {item.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "border-brand/50 bg-brand/10 text-brand"
                      : "border-white/10 text-gray-500"
                  }`}>
                    {openIndex === i ? (
                      <Minus className="w-3 h-3" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-3 h-3" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

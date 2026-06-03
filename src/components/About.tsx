"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <ScrollReveal>
              <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
                AI-first.{" "}
                <span className="gradient-text">Execution-first.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                GanzApps is a lean, AI-powered development studio. We don't just
                consult — we build. Every project ships with production-grade code,
                automated pipelines, and AI agents woven into the stack from day one.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Whether you're launching a SaaS product, digitizing operations, or
                deploying autonomous agents — we move fast, cut complexity, and deliver
                systems that run themselves.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: founder card */}
          <ScrollReveal delay={150}>
            <div className="glass-card p-10 flex flex-col gap-5">
              <div className="w-20 h-20 rounded-2xl bg-brand/10 flex items-center justify-center text-brand text-3xl font-bold">
                U
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Ugan Saripudin</h3>
                <p className="text-brand text-sm font-medium mb-4">Founder — GanzApps</p>
                <p className="text-[var(

--text-muted)] text-sm leading-relaxed">
                  Tech Lead building AI-first products. Specializes in SaaS architecture, agentic AI systems, and rapid full-stack development. Available for projects that need real execution, not just slides.
                </p>
              </div>
              <a
                href="https://ganzapps.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand text-sm font-medium hover:underline"
              >
                ganzapps.my.id →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

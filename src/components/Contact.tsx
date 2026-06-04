"use client";

import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-brand font-semibold tracking-[0.2em] uppercase text-xs mb-5">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Let&apos;s ship something <span className="gradient-text">great</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Tell us about your project. We&apos;ll respond within 24 hours with a
            clear plan and honest timeline.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:oeganz1999@gmail.com"
              className="btn-primary text-base flex-row"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

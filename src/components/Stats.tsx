"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "AI Agents Running" },
  { value: 3, suffix: "x", label: "Faster Delivery" },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="counter-num stat-glow">
      {count}{suffix}
    </span>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="glass-card flex flex-col items-center justify-center p-7 text-center relative overflow-hidden"
    >
      {/* Subtle top glow on active */}
      {active && (
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      )}
      <div className="text-3xl md:text-4xl font-bold text-brand mb-1">
        <Counter target={stat.value} suffix={stat.suffix} active={active} />
      </div>
      <p className="text-[var(--text-muted)] text-sm font-medium">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 border-y border-white/[0.05] bg-surface/60 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/3 via-transparent to-brand/3 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

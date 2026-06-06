"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  hue: number;
}

export default function HeroScrollReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = 300;

    const resize = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles — brand blue/violet/cyan
    const hues = [220, 260, 190]; // blue, violet, cyan-ish
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.5,
        speed: 0.3 + Math.random() * 0.8,
        opacity: 0.1 + Math.random() * 0.35,
        hue: hues[Math.floor(Math.random() * hues.length)],
      });
    }
    particlesRef.current = particles;

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      const scrollProgress = Math.min(scrollRef.current / 400, 1);

      for (const p of particles) {
        // Drift upward — speed up slightly with scroll
        const drift = p.speed * (1 + scrollProgress * 1.5);
        p.y -= drift;
        // Gentle horizontal wave
        p.x += Math.sin(p.y * 0.01) * 0.3;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const alpha = p.opacity * (0.5 + scrollProgress * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha})`;
        ctx.fill();
      }

      // Draw a soft horizontal gradient line that "draws" with scroll
      if (scrollProgress < 1) {
        const lineY = height * 0.5;
        const lineWidth = scrollProgress * width * 0.6;
        const lineX = (width - lineWidth) / 2;
        const grad = ctx.createLinearGradient(lineX, 0, lineX + lineWidth, 0);
        grad.addColorStop(0, "rgba(79,124,255,0)");
        grad.addColorStop(0.2, "rgba(79,124,255,0.4)");
        grad.addColorStop(0.5, "rgba(139,92,246,0.5)");
        grad.addColorStop(0.8, "rgba(79,124,255,0.4)");
        grad.addColorStop(1, "rgba(79,124,255,0)");
        ctx.beginPath();
        ctx.moveTo(lineX, lineY);
        ctx.lineTo(lineX + lineWidth, lineY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[300px] overflow-hidden">
      {/* Gradient fade at top */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #0A0E1A 0%, transparent 30%, transparent 70%, #0A0E1A 100%)",
        }}
      />
      {/* Brand glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,124,255,0.06) 0%, transparent 70%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ height: "300px" }}
      />
    </div>
  );
}

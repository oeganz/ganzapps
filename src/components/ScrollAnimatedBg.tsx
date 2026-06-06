"use client";

import { useEffect, useRef } from "react";

type AnimationType = "particles" | "orbs" | "grid" | "lines";

interface ScrollAnimatedBgProps {
  type?: AnimationType;
  density?: number;
}

function runParticles(canvas: HTMLCanvasElement, density: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const hues = [220, 260, 190];

  const resize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const particles: {
    x: number; y: number; size: number;
    speed: number; opacity: number; hue: number;
    drift: number; phase: number;
  }[] = [];

  const init = () => {
    resize();
    particles.length = 0;
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.6,
        opacity: 0.08 + Math.random() * 0.25,
        hue: hues[Math.floor(Math.random() * hues.length)],
        drift: (Math.random() - 0.5) * 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }
  };

  let active = false;
  const observer = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) active = true; },
    { threshold: 0 }
  );
  observer.observe(canvas);
  init();
  window.addEventListener("resize", resize, { passive: true });

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const t = Date.now() * 0.001;
    for (const p of particles) {
      p.y -= p.speed;
      p.x += Math.sin(t + p.phase) * 0.3 + p.drift;
      if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      const pulse = 0.7 + Math.sin(t * 2 + p.phase) * 0.3;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 75%, 65%, ${p.opacity * pulse})`;
      ctx.fill();
    }
  };
  animate();

  return () => { cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener("resize", resize); };
}

function runOrbs(canvas: HTMLCanvasElement, density: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const colors = [{ h: 220, s: 80, l: 65 }, { h: 260, s: 75, l: 65 }, { h: 190, s: 80, l: 60 }];

  const orbs: { x: number; y: number; baseX: number; baseY: number; size: number; color: typeof colors[0]; speed: number; phase: number; }[] = [];

  const resize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const init = () => {
    resize();
    orbs.length = 0;
    for (let i = 0; i < density; i++) {
      const cx = Math.random() * width;
      const cy = Math.random() * height;
      orbs.push({ x: cx, y: cy, baseX: cx, baseY: cy, size: 60 + Math.random() * 140, color: colors[i % colors.length], speed: 0.3 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2 });
    }
  };

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);
  init();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const t = Date.now() * 0.0008;
    for (const orb of orbs) {
      orb.x = orb.baseX + Math.sin(t * orb.speed + orb.phase) * 60;
      orb.y = orb.baseY + Math.cos(t * orb.speed * 0.7 + orb.phase) * 40;
      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size);
      grad.addColorStop(0, `hsla(${orb.color.h}, ${orb.color.s}%, ${orb.color.l}%, 0.07)`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  animate();

  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

function runGrid(canvas: HTMLCanvasElement, density: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const spacing = 60;

  const resize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);
  resize();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const t = Date.now() * 0.001;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing;
        const y = r * spacing;
        const wave = Math.sin(t * 0.5 + c * 0.3 + r * 0.3) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(79, 124, 255, ${0.03 + wave * 0.06})`;
        ctx.fillRect(x - 1, y - 1, 2, 2);
      }
    }
  };
  animate();

  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

function runLines(canvas: HTMLCanvasElement, density: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;

  const lines: { x: number; y: number; len: number; angle: number; speed: number; opacity: number; hue: number; }[] = [];

  const resize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const init = () => {
    resize();
    lines.length = 0;
    for (let i = 0; i < density; i++) {
      lines.push({ x: Math.random() * width, y: Math.random() * height, len: 40 + Math.random() * 80, angle: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5, opacity: 0.05 + Math.random() * 0.15, hue: 220 + Math.random() * 40 });
    }
  };

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);
  init();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const t = Date.now() * 0.001;
    for (const line of lines) {
      line.y -= line.speed;
      line.x += Math.sin(t + line.angle) * 0.2;
      if (line.y < -line.len) { line.y = height + line.len; line.x = Math.random() * width; }
      if (line.x < 0) line.x = width;
      if (line.x > width) line.x = 0;
      ctx.beginPath();
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x + Math.cos(line.angle) * line.len, line.y + Math.sin(line.angle) * line.len);
      ctx.strokeStyle = `hsla(${line.hue}, 80%, 65%, ${line.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };
  animate();

  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

export default function ScrollAnimatedBg({ type = "particles", density = 30 }: ScrollAnimatedBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const frame = requestAnimationFrame(() => {
      switch (type) {
        case "particles": cleanupRef.current = runParticles(canvas, density); break;
        case "orbs": cleanupRef.current = runOrbs(canvas, density); break;
        case "grid": cleanupRef.current = runGrid(canvas, density); break;
        case "lines": cleanupRef.current = runLines(canvas, density); break;
      }
    });
    return () => { cancelAnimationFrame(frame); cleanupRef.current?.(); };
  }, [type, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

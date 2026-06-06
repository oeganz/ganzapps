"use client";

import { useEffect, useRef } from "react";

type AnimationType = "particles" | "orbs" | "grid" | "lines" | "ribbon";

function runParticles(
  canvas: HTMLCanvasElement,
  scrollProgress: () => number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const density = 35;
  const hues = [220, 260, 190];

  const resize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const particles = Array.from({ length: density }, () => ({
    x: Math.random() * 0,
    y: Math.random() * height,
    size: 1 + Math.random() * 2.5,
    speed: 0.2 + Math.random() * 0.7,
    opacity: 0.08 + Math.random() * 0.2,
    hue: hues[Math.floor(Math.random() * hues.length)],
    drift: (Math.random() - 0.5) * 0.6,
    phase: Math.random() * Math.PI * 2,
    baseX: Math.random() * 0,
  }));

  let active = false;
  const observer = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) active = true; },
    { threshold: 0 }
  );
  observer.observe(canvas);
  resize();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const sp = scrollProgress();
    const t = Date.now() * 0.001;

    for (const p of particles) {
      // Scroll-driven: particles speed up and fade in as section scrolls into view
      const drift = p.speed * (0.5 + sp * 2);
      p.y -= drift;
      p.x = p.baseX + Math.sin(t * 0.5 + p.phase) * 30 + sp * width * 0.1;

      if (p.y < -10) { p.y = height + 10; p.baseX = Math.random() * width; p.x = p.baseX; }
      if (p.x > width + 20) p.x = -20;

      const alpha = p.opacity * (0.4 + sp * 0.6);
      const pulse = 0.6 + Math.sin(t * 2 + p.phase) * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 + sp * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 75%, 65%, ${alpha * pulse})`;
      ctx.fill();
    }
  };
  animate();
  return () => { cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener("resize", resize); };
}

function runOrbs(
  canvas: HTMLCanvasElement,
  scrollProgress: () => number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const colors = [{ h: 220, s: 80, l: 65 }, { h: 260, s: 75, l: 65 }, { h: 190, s: 80, l: 60 }];

  const resize = () => { width = canvas.offsetWidth; height = canvas.offsetHeight; canvas.width = width; canvas.height = height; };

  const orbs = Array.from({ length: 4 }, (_, i) => ({
    x: Math.random() * width, y: Math.random() * height,
    baseX: 0, baseY: 0,
    size: 80 + Math.random() * 120, color: colors[i % colors.length],
    speed: 0.2 + Math.random() * 0.4, phase: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.2,
  }));

  // Set base positions after resize
  const init = () => { resize(); orbs.forEach(o => { o.baseX = o.x; o.baseY = o.y; }); };
  init();

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const sp = scrollProgress();
    const t = Date.now() * 0.0006;

    for (const orb of orbs) {
      orb.x = orb.baseX + Math.sin(t * orb.speed + orb.phase) * (50 + sp * 30);
      orb.y = orb.baseY + Math.cos(t * orb.speed * 0.7 + orb.phase) * (30 + sp * 20);
      // Drift with scroll
      orb.baseX += orb.vx * sp * 0.5;
      orb.baseY += orb.vy * sp * 0.3;

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * (1 + sp * 0.3));
      grad.addColorStop(0, `hsla(${orb.color.h}, ${orb.color.s}%, ${orb.color.l}%, ${0.06 + sp * 0.04})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.size * (1 + sp * 0.3), 0, Math.PI * 2);
      ctx.fill();
    }
  };
  animate();
  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

function runGrid(
  canvas: HTMLCanvasElement,
  scrollProgress: () => number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const spacing = 50;

  const resize = () => { width = canvas.offsetWidth; height = canvas.offsetHeight; canvas.width = width; canvas.height = height; };
  resize();

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const sp = scrollProgress();
    const t = Date.now() * 0.001;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing;
        const y = r * spacing;
        const wave = Math.sin(t * 0.4 + c * 0.25 + r * 0.25) * 0.5 + 0.5;
        // Size pulses with scroll
        const size = 1.5 + wave * (1 + sp);
        const alpha = (0.02 + wave * 0.05) * (0.3 + sp * 0.7);
        ctx.fillStyle = `rgba(79, 124, 255, ${alpha})`;
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }
    }
  };
  animate();
  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

function runLines(
  canvas: HTMLCanvasElement,
  scrollProgress: () => number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;
  const density = 20;

  const resize = () => { width = canvas.offsetWidth; height = canvas.offsetHeight; canvas.width = width; canvas.height = height; };

  const lines = Array.from({ length: density }, () => ({
    x: Math.random() * 0, y: Math.random() * height,
    len: 30 + Math.random() * 70, angle: Math.random() * Math.PI * 2,
    speed: 0.2 + Math.random() * 0.5,
    opacity: 0.04 + Math.random() * 0.12, hue: 220 + Math.random() * 40,
    baseX: Math.random() * 0,
  }));

  const init = () => { resize(); lines.forEach(l => { l.baseX = l.x; }); };
  init();

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const sp = scrollProgress();
    const t = Date.now() * 0.001;

    for (const line of lines) {
      line.y -= line.speed * (0.5 + sp);
      line.baseX += (Math.random() - 0.5) * 0.1 * sp;
      line.x = line.baseX + Math.sin(t + line.angle) * 20 + sp * width * 0.05;

      if (line.y < -line.len) { line.y = height + line.len; line.baseX = Math.random() * width; line.x = line.baseX; }
      if (line.x < -10) line.x = width + 10;
      if (line.x > width + 10) line.x = -10;

      ctx.beginPath();
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x + Math.cos(line.angle) * line.len, line.y + Math.sin(line.angle) * line.len);
      ctx.strokeStyle = `hsla(${line.hue}, 80%, 65%, ${line.opacity * (0.4 + sp * 0.6)})`;
      ctx.lineWidth = 0.5 + sp * 0.5;
      ctx.stroke();
    }
  };
  animate();
  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

function runRibbon(
  canvas: HTMLCanvasElement,
  scrollProgress: () => number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let width = 0;
  let height = 0;

  const resize = () => { width = canvas.offsetWidth; height = canvas.offsetHeight; canvas.width = width; canvas.height = height; };
  resize();

  let active = false;
  const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) active = true; }, { threshold: 0 });
  observer.observe(canvas);

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!active) return;
    ctx.clearRect(0, 0, width, height);
    const sp = scrollProgress();
    const t = Date.now() * 0.001;

    // Draw a ribbon/flowing wave that morphs with scroll
    const points = 60;
    for (let band = 0; band < 3; band++) {
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        const yBase = height * (0.3 + band * 0.2);
        const amp = 20 + band * 10;
        const freq = 0.008 + band * 0.002;
        const y = yBase + Math.sin(x * freq + t * (0.5 + band * 0.2) + sp * 3) * amp * (0.5 + sp * 0.5);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const alpha = (0.03 + band * 0.015) * (0.4 + sp * 0.6);
      ctx.strokeStyle = `rgba(79, 124, 255, ${alpha})`;
      ctx.lineWidth = 1 + sp;
      ctx.stroke();
    }
  };
  animate();
  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}

interface ScrollAnimatedBgProps {
  type?: AnimationType;
  density?: number;
}

export default function ScrollAnimatedBg({ type = "particles" }: ScrollAnimatedBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);
  const sectionProgressRef = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Find parent section
    let section = canvas.parentElement;
    while (section && !section.id) section = section.parentElement;
    sectionRef.current = section || null;

    const scrollProgress = () => sectionProgressRef.current;

    const frame = requestAnimationFrame(() => {
      switch (type) {
        case "particles": cleanupRef.current = runParticles(canvas, scrollProgress); break;
        case "orbs": cleanupRef.current = runOrbs(canvas, scrollProgress); break;
        case "grid": cleanupRef.current = runGrid(canvas, scrollProgress); break;
        case "lines": cleanupRef.current = runLines(canvas, scrollProgress); break;
        case "ribbon": cleanupRef.current = runRibbon(canvas, scrollProgress); break;
      }
    });

    return () => { cancelAnimationFrame(frame); cleanupRef.current?.(); };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

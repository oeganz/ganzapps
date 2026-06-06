"use client";

import { useEffect, useRef } from "react";

type AnimationType = "particles" | "orbs" | "grid" | "lines" | "ribbon";

// Helper: draw a horizontal gradient line that "draws" based on scroll progress
function drawScrollLine(ctx: CanvasRenderingContext2D, W: number, H: number, pg: number) {
  if (pg < 0.01) return;
  const lineY = H * 0.5;
  const lineWidth = pg * W * 0.6;
  const lineX = (W - lineWidth) / 2;
  const g = ctx.createLinearGradient(lineX, 0, lineX + lineWidth, 0);
  g.addColorStop(0, "rgba(79,124,255,0)");
  g.addColorStop(0.15, `rgba(79,124,255,${0.5 * pg})`);
  g.addColorStop(0.5, `rgba(139,92,246,${0.6 * pg})`);
  g.addColorStop(0.85, `rgba(79,124,255,${0.5 * pg})`);
  g.addColorStop(1, "rgba(79,124,255,0)");
  ctx.beginPath();
  ctx.moveTo(lineX, lineY);
  ctx.lineTo(lineX + lineWidth, lineY);
  ctx.strokeStyle = g;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function runParticles(canvas: HTMLCanvasElement, getProgress: () => number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let W = 0;
  let H = 0;
  const N = 35;
  const hues = [220, 260, 190];

  const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };

  const ps = Array.from({ length: N }, () => ({
    x: 0, y: 0, size: 1 + Math.random() * 2.5,
    speed: 0.2 + Math.random() * 0.7, opacity: 0.12 + Math.random() * 0.28,
    hue: hues[Math.floor(Math.random() * hues.length)],
    drift: (Math.random() - 0.5) * 0.6, phase: Math.random() * Math.PI * 2,
  }));

  let active = false;
  const obs = new IntersectionObserver(([e]) => { active = e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);
  resize();

  const draw = () => {
    raf = requestAnimationFrame(draw);
    if (!active) return;
    ctx.clearRect(0, 0, W, H);
    const sp = getProgress();
    const t = Date.now() * 0.001;
    for (const p of ps) {
      p.y -= p.speed * (0.5 + sp * 2);
      p.x += Math.sin(t + p.phase) * 0.3 + p.drift;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y === 0) { p.y = Math.random() * H; p.x = Math.random() * W; }
      const a = p.opacity * (0.5 + sp * 0.5);
      const pulse = 0.6 + Math.sin(t * 2 + p.phase) * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 + sp * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},75%,70%,${a * pulse})`;
      ctx.fill();
    }
    drawScrollLine(ctx, W, H, sp);
  };
  draw();
  return () => { cancelAnimationFrame(raf); obs.disconnect(); };
}

function runOrbs(canvas: HTMLCanvasElement, getProgress: () => number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let W = 0;
  let H = 0;
  const cols = [{ h: 220, s: 80, l: 70 }, { h: 260, s: 75, l: 70 }, { h: 190, s: 80, l: 65 }];

  const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
  resize();

  const orbs = cols.map((c, i) => ({
    ox: W * (0.2 + i * 0.3), oy: H * (0.3 + (i % 2) * 0.4),
    x: 0, y: 0,
    size: 80 + i * 40, color: c, speed: 0.2 + i * 0.1, phase: i * 2,
  }));
  orbs.forEach(o => { o.x = o.ox; o.y = o.oy; });

  let active = false;
  const obs = new IntersectionObserver(([e]) => { active = e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);

  const draw = () => {
    raf = requestAnimationFrame(draw);
    if (!active) return;
    ctx.clearRect(0, 0, W, H);
    const sp = getProgress();
    const t = Date.now() * 0.0006;
    for (const o of orbs) {
      o.x = o.ox + Math.sin(t * o.speed + o.phase) * (50 + sp * 30);
      o.y = o.oy + Math.cos(t * o.speed * 0.7 + o.phase) * (30 + sp * 20);
      const sz = o.size * (1 + sp * 0.3);
      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, sz);
      g.addColorStop(0, `hsla(${o.color.h},${o.color.s}%,${o.color.l}%,${0.1 + sp * 0.06})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(o.x, o.y, sz, 0, Math.PI * 2);
      ctx.fill();
    }
    drawScrollLine(ctx, W, H, sp);
  };
  draw();
  return () => { cancelAnimationFrame(raf); obs.disconnect(); };
}

function runGrid(canvas: HTMLCanvasElement, getProgress: () => number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let W = 0;
  let H = 0;
  const sp2 = 50;

  const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
  resize();

  let active = false;
  const obs = new IntersectionObserver(([e]) => { active = e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);

  const draw = () => {
    raf = requestAnimationFrame(draw);
    if (!active) return;
    ctx.clearRect(0, 0, W, H);
    const pg = getProgress();
    const t = Date.now() * 0.001;
    const cols = Math.ceil(W / sp2) + 1;
    const rows = Math.ceil(H / sp2) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * sp2;
        const y = r * sp2;
        const wave = Math.sin(t * 0.4 + c * 0.25 + r * 0.25) * 0.5 + 0.5;
        const sz = 1.5 + wave * (1 + pg);
        const a = (0.03 + wave * 0.07) * (0.4 + pg * 0.6);
        ctx.fillStyle = `rgba(79,124,255,${a})`;
        ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
      }
    }
    drawScrollLine(ctx, W, H, pg);
  };
  draw();
  return () => { cancelAnimationFrame(raf); obs.disconnect(); };
}

function runLines(canvas: HTMLCanvasElement, getProgress: () => number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let W = 0;
  let H = 0;
  const N = 20;

  const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
  resize();

  const ls = Array.from({ length: N }, () => ({
    x: 0, y: 0, len: 30 + Math.random() * 70,
    angle: Math.random() * Math.PI * 2, speed: 0.2 + Math.random() * 0.5,
    opacity: 0.06 + Math.random() * 0.15, hue: 220 + Math.random() * 40,
  }));
  ls.forEach(l => { l.x = Math.random() * 1000; l.y = Math.random() * 1000; });

  let active = false;
  const obs = new IntersectionObserver(([e]) => { active = e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);

  const draw = () => {
    raf = requestAnimationFrame(draw);
    if (!active) return;
    ctx.clearRect(0, 0, W, H);
    const pg = getProgress();
    const t = Date.now() * 0.001;
    for (const l of ls) {
      l.y -= l.speed * (0.5 + pg);
      l.x += Math.sin(t + l.angle) * 0.2;
      if (l.y < -l.len) { l.y = H + l.len; l.x = Math.random() * W; }
      if (l.x < 0) l.x = W; if (l.x > W) l.x = 0;
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + Math.cos(l.angle) * l.len, l.y + Math.sin(l.angle) * l.len);
      ctx.strokeStyle = `hsla(${l.hue},80%,70%,${l.opacity * (0.5 + pg * 0.5)})`;
      ctx.lineWidth = 0.5 + pg * 0.5;
      ctx.stroke();
    }
    drawScrollLine(ctx, W, H, pg);
  };
  draw();
  return () => { cancelAnimationFrame(raf); obs.disconnect(); };
}

function runRibbon(canvas: HTMLCanvasElement, getProgress: () => number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let raf = 0;
  let W = 0;
  let H = 0;

  const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
  resize();

  let active = false;
  const obs = new IntersectionObserver(([e]) => { active = e.isIntersecting; }, { threshold: 0 });
  obs.observe(canvas);

  const draw = () => {
    raf = requestAnimationFrame(draw);
    if (!active) return;
    ctx.clearRect(0, 0, W, H);
    const pg = getProgress();
    const t = Date.now() * 0.001;
    for (let band = 0; band < 3; band++) {
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const x = (i / 60) * W;
        const yB = H * (0.3 + band * 0.2);
        const amp = 20 + band * 10;
        const freq = 0.008 + band * 0.002;
        const y = yB + Math.sin(x * freq + t * (0.5 + band * 0.2) + pg * 3) * amp * (0.5 + pg * 0.5);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(79,124,255,${(0.04 + band * 0.02) * (0.5 + pg * 0.5)})`;
      ctx.lineWidth = 1 + pg;
      ctx.stroke();
    }
    drawScrollLine(ctx, W, H, pg);
  };
  draw();
  return () => { cancelAnimationFrame(raf); obs.disconnect(); };
}

interface ScrollAnimatedBgProps { type?: AnimationType; }

export default function ScrollAnimatedBg({ type = "particles" }: ScrollAnimatedBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateProgress = () => {
      const rect = canvas.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = rect.top - vh;
      const end = rect.bottom;
      const range = end - start;
      if (range <= 0) { progressRef.current = 0; return; }
      progressRef.current = Math.max(0, Math.min(1, -start / range));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const getProgress = () => progressRef.current;

    const frame = requestAnimationFrame(() => {
      switch (type) {
        case "particles": cleanupRef.current = runParticles(canvas, getProgress); break;
        case "orbs": cleanupRef.current = runOrbs(canvas, getProgress); break;
        case "grid": cleanupRef.current = runGrid(canvas, getProgress); break;
        case "lines": cleanupRef.current = runLines(canvas, getProgress); break;
        case "ribbon": cleanupRef.current = runRibbon(canvas, getProgress); break;
      }
    });

    return () => { cancelAnimationFrame(frame); cleanupRef.current?.(); window.removeEventListener("scroll", updateProgress); };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

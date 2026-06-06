"use client";

import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import * as THREE from "three";

interface FloatingObject {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  basePosition: THREE.Vector3;
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const WORD_SETS = [
  ["AI Products", "AI Agents", "Your Future"],
  ["Securely", "Quality", "It Smart"],
  ["More Time", "The Code", "Your Future"],
];

function Typewriter({ words, delay }: { words: string[]; delay: number }) {
  return (
    <span className="relative inline-block" style={{ minWidth: "5ch" }}>
      {words.map((word, i) => (
        <span
          key={word}
          className="typewriter"
          style={{
            animationDelay: `${delay + i * (7 / 3)}s`,
            animationFillMode: "both",
            display: i === 0 ? "inline-block" : "none",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglOk, setWebglOk] = useState(true);
  const objectsRef = useRef<FloatingObject[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglOk(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 6);

      const matBlue = new THREE.MeshStandardMaterial({ color: 0x4f7cff, transparent: true, opacity: 0.35 });
      const matViolet = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 });
      const matCyan = new THREE.MeshStandardMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.35 });
      const matBlueWire = new THREE.MeshStandardMaterial({ color: 0x4f7cff, transparent: true, opacity: 0.15, wireframe: true });
      const matVioletWire = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.15, wireframe: true });

      const geoSphere = new THREE.SphereGeometry(1, 16, 16);
      const geoBox = new THREE.BoxGeometry(1, 1, 1);
      const geoTorus = new THREE.TorusGeometry(0.8, 0.25, 8, 24);
      const geoOctahedron = new THREE.OctahedronGeometry(1);
      const geoIcosahedron = new THREE.IcosahedronGeometry(1, 0);
      const geoTorusKnot = new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8);

      const allMats = [matBlue, matViolet, matCyan, matBlueWire, matVioletWire];
      const allGeos = [geoSphere, geoBox, geoTorus, geoOctahedron, geoIcosahedron, geoTorusKnot];

      const objects: FloatingObject[] = [];
      for (let i = 0; i < 18; i++) {
        const geo = allGeos[i % allGeos.length];
        const mat = allMats[i % allMats.length].clone();
        const mesh = new THREE.Mesh(geo, mat);
        const spread = 8;
        mesh.position.set(
          (Math.random() - 0.5) * spread * 2,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * 4 - 2
        );
        mesh.scale.setScalar(0.15 + Math.random() * 0.5);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        objects.push({
          mesh,
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.003,
            (Math.random() - 0.5) * 0.003,
            0
          ),
          rotationSpeed: new THREE.Vector3(
            (Math.random() - 0.5) * 0.008,
            (Math.random() - 0.5) * 0.008,
            (Math.random() - 0.5) * 0.005
          ),
          basePosition: mesh.position.clone(),
        });
        scene.add(mesh);
      }
      objectsRef.current = objects;

      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const blueLight = new THREE.PointLight(0x4f7cff, 3, 20);
      blueLight.position.set(4, 3, 4);
      scene.add(blueLight);
      const violetLight = new THREE.PointLight(0x8b5cf6, 2, 20);
      violetLight.position.set(-4, -2, 3);
      scene.add(violetLight);
      const cyanLight = new THREE.PointLight(0x22d3ee, 1.5, 15);
      cyanLight.position.set(0, 4, 2);
      scene.add(cyanLight);

      const handleMouseMove = (e: MouseEvent) => {
        targetMouseRef.current = {
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: -(e.clientY / window.innerHeight - 0.5) * 2,
        };
      };
      window.addEventListener("mousemove", handleMouseMove);

      const handleResize = () => {
        if (!canvas || !renderer || !camera) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      let t = 0;
      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);
        t += 0.01;
        mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.04;
        mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.04;
        camera.position.x += (mouseRef.current.x * 0.8 - camera.position.x) * 0.05;
        camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        for (const obj of objects) {
          obj.mesh.position.x = obj.basePosition.x + Math.sin(t + obj.basePosition.y) * 0.3;
          obj.mesh.position.y = obj.basePosition.y + Math.cos(t * 0.7 + obj.basePosition.x) * 0.4;
          obj.mesh.position.add(obj.velocity);
          if (obj.mesh.position.x > 9) obj.mesh.position.x = -9;
          if (obj.mesh.position.x < -9) obj.mesh.position.x = 9;
          if (obj.mesh.position.y > 5) obj.mesh.position.y = -5;
          if (obj.mesh.position.y < -5) obj.mesh.position.y = 5;
          obj.mesh.rotation.x += obj.rotationSpeed.x;
          obj.mesh.rotation.y += obj.rotationSpeed.y;
          obj.mesh.rotation.z += obj.rotationSpeed.z;
        }
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        objects.forEach((obj) => {
          obj.mesh.geometry.dispose();
          if (obj.mesh.material instanceof THREE.Material) obj.mesh.material.dispose();
          scene.remove(obj.mesh);
        });
        allGeos.forEach((g) => g.dispose());
        allMats.forEach((m) => m.dispose());
        renderer.dispose();
      };
    } catch {
      setWebglOk(false);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#0A0E1A" }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: webglOk ? "block" : "none" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0A0E1A 0%, rgba(10,14,26,0.75) 45%, rgba(10,14,26,0.20) 70%, transparent 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 w-full"
        style={{ zIndex: 10 }}
      >
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-6 sm:mb-8">
            <Zap className="w-3.5 h-3.5 text-brand" fill="#4F7CFF" />
            <span className="text-brand text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              AI DEVELOPMENT STUDIO
            </span>
          </div>

          {/* H1 — single line typewriter */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {/* Line 1 */}
            <div className="hero-tagline text-center lg:text-left">
              <span className="hero-tagline-item text-[#F8FAFC]">We Build.&nbsp;</span>
              <span className="hero-tagline-item"><Typewriter words={WORD_SETS[0]} delay={0} /></span>
            </div>
            {/* Line 2 */}
            <div className="hero-tagline text-center lg:text-left mt-2">
              <span className="hero-tagline-item text-[#F8FAFC]">We Ship.&nbsp;</span>
              <span className="hero-tagline-item"><Typewriter words={WORD_SETS[1]} delay={0} /></span>
            </div>
            {/* Line 3 */}
            <div className="hero-tagline text-center lg:text-left mt-2">
              <span className="hero-tagline-item text-[#F8FAFC]">You Own.&nbsp;</span>
              <span className="hero-tagline-item"><Typewriter words={WORD_SETS[2]} delay={0} /></span>
            </div>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mb-8 leading-relaxed">
            AI-first development studio building SaaS products, autonomous agents, and digital systems — from spark to production.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-start">
            <a href="#contact" className="btn-gradient text-sm px-6 py-3 inline-flex items-center gap-2">
              Start a Project →
            </a>
            <a href="#portfolio" className="btn-secondary text-sm px-6 py-3 inline-flex items-center gap-2">
              See Our Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

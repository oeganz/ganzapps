"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tech", label: "Tech" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Scroll spy
  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-circle.png"
              alt="GanzApps"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-lg font-bold text-white group-hover:text-brand transition-colors">
              GanzApps
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors link-hover ${
                  activeSection === link.href.slice(1)
                    ? "text-brand"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-brand text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-all hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.5)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-surface/95 backdrop-blur-2xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        
        {/* Menu panel */}
        <div
          className={`absolute inset-x-0 top-0 flex flex-col transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
            <a href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-circle.png" alt="GanzApps" className="h-9 w-9 rounded-full" />
              <span className="text-lg font-bold text-white">GanzApps</span>
            </a>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-semibold text-gray-300 hover:text-brand border-b border-white/[0.04] transition-colors"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-brand text-black font-bold text-center px-6 py-4 rounded-xl hover:bg-emerald-400 transition-all"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

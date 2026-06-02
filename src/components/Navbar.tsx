"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-circle.png" alt="GanzApps" className="h-10 w-10 rounded-full" />
          <span className="text-lg font-bold text-white">GanzApps</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-brand transition">Services</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
          <a
            href="#contact"
            className="bg-brand text-black font-semibold px-4 py-2 rounded-lg hover:bg-brand-300 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm text-gray-400 border-t border-white/5">
          <a href="#services" onClick={() => setOpen(false)} className="py-2 hover:text-brand transition">Services</a>
          <a href="#about" onClick={() => setOpen(false)} className="py-2 hover:text-brand transition">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="py-2 hover:text-brand transition">Contact</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-brand text-black font-semibold px-4 py-2 rounded-lg text-center hover:bg-brand-300 transition"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

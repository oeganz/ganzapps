"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-400 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="glass-card flex items-center justify-center w-12 h-12 rounded-xl hover:border-brand/30 hover:shadow-[0_0_20px_-5px_rgba(79,124,255,0.25)] transition-all duration-300 group"
      >
        <ArrowUp className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" strokeWidth={1.5} />
      </button>
    </div>
  );
}

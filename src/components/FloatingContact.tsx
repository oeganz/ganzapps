"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-400 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-brand/40" />
      <div className="absolute inset-0 rounded-full bg-brand/20" />
      
      <a
        href="mailto:oeganz1999@gmail.com"
        aria-label="Contact us"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white hover:bg-primary-deep hover:scale-110 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(79,124,255,0.6)]"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      </a>
    </div>
  );
}

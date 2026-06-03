"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light" | "system">("system");
  const [resolved, setResolved] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Detect initial
    const stored = localStorage.getItem("ganzapps-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "light" ? "light" : stored === "dark" ? "dark" : (prefersDark ? "dark" : "light");
    setMode(stored as "dark"|"light"|"system" || "system");
    setResolved(initial);
    applyTheme(initial);

    // Listen for system changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!localStorage.getItem("ganzapps-theme") || localStorage.getItem("ganzapps-theme") === "system") {
        const next = mq.matches ? "dark" : "light";
        setResolved(next);
        applyTheme(next);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const applyTheme = (t: "dark" | "light") => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(t);
    // Also set data attribute for CSS targeting
    document.documentElement.setAttribute("data-theme", t);
  };

  const cycle = () => {
    const next = resolved === "dark" ? "light" : "dark";
    setResolved(next);
    setMode(next);
    localStorage.setItem("ganzapps-theme", next);
    applyTheme(next);
  };

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${resolved}. Click to toggle.`}
      className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
    >
      {resolved === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}

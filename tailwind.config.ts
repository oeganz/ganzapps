import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E1A",
          light: "#F8FAFC",
        },
        surface: {
          DEFAULT: "#111729",
          light: "#F1F5F9",
        },
        elevated: "#1A2236",
        border: "#2A3349",
        brand: {
          DEFAULT: "#4F7CFF",
          deep: "#3B62E6",
          violet: "#8B5CF6",
          cyan: "#22D3EE",
        },
        text: "#F8FAFC",
        "text-body": "#CBD5E1",
        muted: "#8392A8",
        success: "#34D399",
        warning: "#FBBF24",
        error: "#F87171",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "hero-fade-in": "heroFadeIn 0.8s ease-out forwards",
        "process-flow": "processFlow 3s linear infinite",
      },
      keyframes: {
        heroFadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        processFlow: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4F7CFF, #8B5CF6)",
      },
    },
  },
  plugins: [],
};

export default config;

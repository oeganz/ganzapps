import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4ADE80",
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ADE80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        surface: {
          DEFAULT: "#0a0a0a",
          50: "#111111",
          100: "#1a1a1a",
          200: "#222222",
          300: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

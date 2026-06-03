import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "var(--brand)",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      textColor: {
        DEFAULT: "var(--text-primary)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        brand: "var(--brand)",
        heading: "var(--heading-color)",
      },
      backgroundColor: {
        surface: "var(--surface-bg)",
        "surface-50": "var(--surface-50)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",
        "surface-300": "var(--surface-300)",
        card: "var(--card-bg)",
        brand: "var(--brand)",
        page: "var(--page-bg)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
        custom: "var(--border-color)",
      },
    },
  },
  plugins: [],
};

export default config;

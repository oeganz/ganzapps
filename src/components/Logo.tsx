// components/Logo.tsx
// GanzApps "Go" infinity logo. Drop into the Next.js repo and replace every
// <img src="/logo-circle.png" /> usage in Navbar.tsx / Footer.tsx with <Logo />.
//
//   <Logo />                     -> mark + wordmark (default, nav/footer)
//   <Logo variant="icon" />      -> mark only (avatars, small spaces)
//
// Copy the mark into the repo's /public as `logo.png` (the transparent PNG from
// this design system: assets/logo.png).
import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  variant?: "full" | "icon";
  className?: string;
  style?: CSSProperties;
  /** mark height in px */
  height?: number;
};

export default function Logo({ variant = "full", className, style, height = 30 }: Props) {
  const mark = (
    <Image
      src="/logo.png"
      alt="GanzApps"
      width={Math.round(height * 2.12)}
      height={height}
      priority
      style={{ height: Math.round(height * 0.92), width: "auto", display: "block" }}
    />
  );

  if (variant === "icon") {
    return <span className={className} style={style}>{mark}</span>;
  }

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}
    >
      {mark}
      <span
        style={{
          fontFamily: "var(--font-sans, system-ui, sans-serif)",
          fontSize: height * 0.74,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#F8FAFC",
        }}
      >
        Ganz<span style={{ color: "#4F7CFF" }}>Apps</span>
      </span>
    </span>
  );
}

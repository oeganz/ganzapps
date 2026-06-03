const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-white font-bold text-lg">GanzApps</p>
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} GanzApps. All rights reserved.
          </p>
        </div>

        {/* Center: nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-muted)]">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

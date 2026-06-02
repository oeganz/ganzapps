const services = [
  {
    icon: "⚡",
    title: "SaaS Building",
    desc: "Full-stack SaaS products — auth, billing, dashboards, APIs. We build the whole thing, not just the UI.",
  },
  {
    icon: "🤖",
    title: "Agentic AI Setup",
    desc: "Deploy autonomous AI agents that handle workflows, make decisions, and scale your operations 24/7.",
  },
  {
    icon: "🔄",
    title: "ADLC Setup",
    desc: "AI Development Lifecycle integration — from code generation to CI/CD, testing, and production deployment.",
  },
  {
    icon: "📱",
    title: "AI Business Digitalization",
    desc: "Transform manual processes into automated digital systems. CRM, ERP, internal tools — we build what you need.",
  },
  {
    icon: "💡",
    title: "Tech Consulting",
    desc: "Architecture review, stack selection, scaling strategy. Get expert guidance before you commit resources.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand font-medium tracking-wide uppercase text-sm mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            From idea to <span className="text-brand">production</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-surface-50 border border-white/5 rounded-2xl p-8 hover:border-brand/20 transition group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition">
                {s.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

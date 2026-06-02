export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-brand font-medium tracking-wide uppercase text-sm mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
          AI-Powered Development Studio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 slide-up" style={{ animationDelay: "0.2s" }}>
          Build Smarter.{" "}
          <span className="text-brand">Scale Faster.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 slide-up" style={{ animationDelay: "0.3s" }}>
          We design and ship SaaS products, agentic AI systems, and end-to-end
          digital solutions — from concept to production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="bg-brand text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-300 transition text-lg"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="border border-white/10 text-gray-300 font-medium px-8 py-3.5 rounded-lg hover:border-brand/30 hover:text-white transition text-lg"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

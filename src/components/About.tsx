export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-surface-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-brand font-medium tracking-wide uppercase text-sm mb-4">Who We Are</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          AI-first. <span className="text-brand">Execution-first.</span>
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          GanzApps is a lean, AI-powered development studio. We don&apos;t just consult — we build. 
          Every project ships with production-grade code, automated pipelines, and AI agents 
          woven into the stack.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          Whether you&apos;re launching a SaaS product, digitizing operations, or deploying 
          autonomous agents — we move fast, cut complexity, and deliver systems that run themselves.
        </p>
      </div>
    </section>
  );
}

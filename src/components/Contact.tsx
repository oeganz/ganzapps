export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-brand font-medium tracking-wide uppercase text-sm mb-4">Let&apos;s Talk</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-brand">build</span>?
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Tell us about your project. We&apos;ll get back to you within 24 hours with a plan.
        </p>
        <a
          href="mailto:hello@ganzapps.my.id"
          className="inline-block bg-brand text-black font-semibold px-10 py-4 rounded-lg hover:bg-brand-300 transition text-lg"
        >
          hello@ganzapps.my.id
        </a>
        <p className="mt-6 text-gray-500 text-sm">
          Or DM us on Discord • Telegram • LinkedIn
        </p>
      </div>
    </section>
  );
}

import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import SecondCTA from "@/components/SecondCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";
import ScrollAnimatedBg from "@/components/ScrollAnimatedBg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero3D />
      <HeroScrollReveal />
      <Stats />

      {/* ClientLogos + floating orbs */}
      <section id="clients" className="relative overflow-hidden">
        <ScrollAnimatedBg type="orbs" />
        <ClientLogos />
      </section>

      {/* Services + wave grid */}
      <section id="services" className="relative overflow-hidden">
        <ScrollAnimatedBg type="grid" />
        <Services />
      </section>

      {/* Process + floating lines */}
      <section id="process" className="relative overflow-hidden">
        <ScrollAnimatedBg type="lines" />
        <Process />
      </section>

      {/* Portfolio + particles */}
      <section id="portfolio" className="relative overflow-hidden">
        <ScrollAnimatedBg type="particles" />
        <Portfolio />
      </section>

      {/* TechStack + wave grid */}
      <section id="techstack" className="relative overflow-hidden">
        <ScrollAnimatedBg type="grid" />
        <TechStack />
      </section>

      {/* About + ribbon/waves */}
      <section id="about" className="relative overflow-hidden">
        <ScrollAnimatedBg type="ribbon" />
        <About />
      </section>

      {/* FAQ + particles */}
      <section id="faq" className="relative overflow-hidden">
        <ScrollAnimatedBg type="particles" />
        <FAQ />
      </section>

      <SecondCTA />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </main>
  );
}

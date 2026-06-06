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

      <div className="relative">
        <ScrollAnimatedBg type="orbs" />
        <ClientLogos />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="grid" />
        <Services />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="lines" />
        <Process />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="particles" />
        <Portfolio />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="grid" />
        <TechStack />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="ribbon" />
        <About />
      </div>

      <div className="relative">
        <ScrollAnimatedBg type="particles" />
        <FAQ />
      </div>

      <SecondCTA />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </main>
  );
}

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
      <div className="relative">
        <ScrollAnimatedBg type="orbs" density={3} />
        <ClientLogos />
      </div>

      {/* Services + wave grid */}
      <div className="relative">
        <ScrollAnimatedBg type="grid" density={40} />
        <Services />
      </div>

      {/* Process + floating lines */}
      <div className="relative overflow-hidden">
        <ScrollAnimatedBg type="lines" density={25} />
        <Process />
      </div>

      {/* Portfolio + particles */}
      <div className="relative">
        <ScrollAnimatedBg type="particles" density={20} />
        <Portfolio />
      </div>

      {/* TechStack + wave grid */}
      <div className="relative">
        <ScrollAnimatedBg type="grid" density={50} />
        <TechStack />
      </div>

      {/* About + orbs */}
      <div className="relative">
        <ScrollAnimatedBg type="orbs" density={4} />
        <About />
      </div>

      {/* FAQ + particles */}
      <div className="relative">
        <ScrollAnimatedBg type="particles" density={15} />
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

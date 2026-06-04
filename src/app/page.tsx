import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import SecondCTA from "@/components/SecondCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <ClientLogos />
      <Services />
      <Process />
      <Portfolio />
      <TechStack />
      <About />
      <Pricing />
      <FAQ />
      <SecondCTA />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </main>
  );
}

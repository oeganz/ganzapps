import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
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
      <About />
      <TechStack />
      <Portfolio />
      <Testimonials />
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

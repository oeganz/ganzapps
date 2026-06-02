import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
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
      <Services />
      <Process />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </main>
  );
}

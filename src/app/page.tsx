import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheCollegeCoach from "@/components/TheCollegeCoach";
import DigitalProducts from "@/components/DigitalProducts";
import Timeline from "@/components/Timeline";
import Publications from "@/components/Publications";
import Patents from "@/components/Patents";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      {/* Interactive Floating Particle Background */}
      <ParticlesBackground />

      {/* Main Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        
        {/* Decorative Divider */}
        <div className="w-full relative h-24 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0">
            <path d="M0 24C240 56.7 480 73 720 73C960 73 1200 56.7 1440 24V74H0V24Z" fill="var(--background)" />
          </svg>
        </div>

        <About />
        <TheCollegeCoach />
        <DigitalProducts />
        <Timeline />
        <Publications />
        <Patents />
        <Skills />
        <Certifications />
        <Events />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}

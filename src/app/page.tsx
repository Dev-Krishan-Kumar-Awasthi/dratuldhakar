import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Publications from "@/components/Publications";
import Patents from "@/components/Patents";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><div className="section-alt"><Timeline isPreview={true} /></div></ScrollReveal>
      <ScrollReveal><Publications isPreview={true} /></ScrollReveal>
      <ScrollReveal><div className="section-alt"><Patents isPreview={true} /></div></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><div className="section-alt"><Certifications isPreview={true} /></div></ScrollReveal>
      <ScrollReveal><Events isPreview={true} /></ScrollReveal>
      <ScrollReveal><div className="section-alt"><Testimonials /></div></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
      <ScrollReveal><div className="section-alt"><Contact /></div></ScrollReveal>
    </PageShell>
  );
}

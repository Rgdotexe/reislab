import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceBlock from "@/components/ServiceBlock";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* Services section header */}
        <div id="services" className="pt-8">
          <div className="max-w-7xl mx-auto px-6 text-center mb-4">
            <div className="inline-flex items-center gap-3 text-gold/70 text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-gold/40" />
              What We Do
              <span className="w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4">
              Our Services
            </h2>
          </div>
        </div>

        {services.map((service) => (
          <ServiceBlock key={service.id} service={service} />
        ))}

        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

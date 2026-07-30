import Navbar from "@/components/Landing/nav/Navbar";
import Hero from "@/components/Landing/Hero/Hero";
import Features from "@/components/Landing/Features/Features";
import HowItWorks from "@/components/Landing/how-it-works/HowItWorks";
import Pricing from "@/components/Landing/pricing/Pricing";
import About from "@/components/Landing/about/About";
import CTASection from "@/components/Landing/cta/CtaSection";
import Footer from "@/components/Landing/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="cta">
          <CTASection />
        </section>
      </main>

      <Footer />
    </>
  );
}
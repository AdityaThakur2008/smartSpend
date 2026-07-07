import Navbar from "@/components/layout/nav/Navbar";
import { Hero } from "@/components/Hero/Hero";
import  {Features}  from "@/components/Features/Features";
import { CTASection } from "@/components/shared/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero/>

      <Features/>

      <CTASection/>

      <Footer/>

    </>
  );
}

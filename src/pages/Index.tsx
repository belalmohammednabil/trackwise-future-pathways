
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Programs } from "@/components/sections/Programs";
import { FAQ } from "@/components/sections/FAQ";
import { ScrollAnimationWrapper } from "@/components/shared/ScrollAnimationWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-blue-50/60 to-blue-200/70" dir="rtl">
      <Header />
      <Hero />
      
      <ScrollAnimationWrapper delay={100}>
        <Services />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper delay={200}>
        <Programs />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper delay={100}>
        <About />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper delay={200}>
        <FAQ />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper delay={100}>
        <Team />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper delay={200}>
        <Contact />
      </ScrollAnimationWrapper>
      
      <Footer />
    </div>
  );
};

export default Index;

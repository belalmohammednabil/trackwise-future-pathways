
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Programs } from "@/components/sections/Programs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50" dir="rtl">
      <Header />
      <Hero />
      <Services />
      <Programs />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

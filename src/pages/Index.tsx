import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIAssistant from "@/components/AIAssistant";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AIAssistant />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIAssistant from "@/components/AIAssistant";
import ChatbotPopup from "@/components/ChatbotPopup";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global background */}
      <div className="fixed inset-0 z-0">
        <img src={heroBackground} alt="Modern real estate skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <AIAssistant />
        <Contact />
        <Footer />
      </div>
      
      {/* Chatbot Popup */}
      <ChatbotPopup />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Modern real estate skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* AI Badge */}
          <Badge className="mb-6 bg-gradient-accent text-accent-foreground px-4 py-2 gap-2 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            POWERED BY AI
          </Badge>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-slide-up">
            Elevating Properties,{" "}
            <span className="bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              Transforming Lives
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Maharashtra's Premier Real Estate Advisory - Delivering Excellence in Land Management, 
            Development Rights, and Expert Document Assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-luxury transition-all duration-300 text-lg px-8 py-4 gap-3 group"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-foreground transition-all duration-300 text-lg px-8 py-4"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary-glow mr-2" />
                <span className="text-4xl font-bold text-white">85%</span>
              </div>
              <p className="text-gray-300">Faster Approvals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-primary-glow mr-2" />
                <span className="text-4xl font-bold text-white">100%</span>
              </div>
              <p className="text-gray-300">UDCPR Compliant</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-8 w-8 text-accent mr-2" />
                <span className="text-4xl font-bold text-white">AI</span>
              </div>
              <p className="text-gray-300">Powered Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
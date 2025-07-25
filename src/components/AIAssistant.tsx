import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageCircle, CheckCircle, Globe, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import aiTechImage from "@/assets/ai-tech.jpg";
const AIAssistant = () => {
  const features = [{
    icon: Globe,
    title: "Multilingual Support",
    description: "Available in Marathi and English for better accessibility"
  }, {
    icon: MessageCircle,
    title: "Simple Q&A Interface",
    description: "Just chat with our AI - no complex forms or waiting"
  }, {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get instant answers anytime, no agents required"
  }, {
    icon: CheckCircle,
    title: "UDCPR Compliant",
    description: "All guidance based on official regulations"
  }];
  const useCases = [{
    icon: Users,
    title: "For Farmers/Land Owners",
    benefit: "Know what you can build legally"
  }, {
    icon: Users,
    title: "For Small Builders",
    benefit: "Avoid costly mistakes and delays"
  }, {
    icon: Users,
    title: "For Citizens",
    benefit: "Stop relying on middlemen"
  }, {
    icon: Users,
    title: "For Architects",
    benefit: "Quick reference for planning"
  }];
  const commonQuestions = ["How much FSI do I get in Gaothan?", "Can I build a home on NA plot in green zone?", "What is the front setback in my 1000 sqft plot?", "Which documents do I need for building approval?"];
  return <section id="udcpr" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground px-4 py-2 gap-2">
            <Sparkles className="h-4 w-4" />
            INTRODUCING MAHARASHTRA'S FIRST
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            AI Assistant for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Building Rules
            </span>
          </h2>
          <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent text-center">
            YOUR UDCPR SAATHI!
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="max-w-4xl text-center">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A free, AI-powered chatbot designed to guide you through building laws, 
              development rules and property permissions based on the Unified Development 
              Control and Promotion Regulations (UDCPR) – applicable across urban and 
              rural Maharashtra.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map(feature => {
              const IconComponent = feature.icon;
              return <div key={feature.title} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>;
            })}
            </div>

            {/* Common Questions */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">Common Questions:</h4>
              <div className="space-y-2">
                {commonQuestions.map((question, index) => <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {question}
                  </div>)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-luxury transition-all duration-300 gap-3 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Bot className="h-5 w-5" />
                Chat with UDCPR Saathi
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default AIAssistant;
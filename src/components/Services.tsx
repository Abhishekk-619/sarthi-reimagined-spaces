import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  MapPin, 
  PenTool, 
  Calculator, 
  TrendingUp, 
  Hammer, 
  Megaphone, 
  Settings,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Real Estate Consultancy",
      description: "Benefit from our AI-powered market analysis and expert advice for all your real estate decisions.",
      features: ["Market Analysis", "Investment Strategy", "Property Research"]
    },
    {
      icon: MapPin,
      title: "Urban Planning & Zoning",
      description: "Expert urban planning and real estate zoning services to maximize land use potential and compliance.",
      features: ["Zoning Analysis", "Land Use Planning", "Compliance Check"]
    },
    {
      icon: PenTool,
      title: "Architectural Design",
      description: "Innovative architectural design and built environment solutions for sustainable and functional spaces.",
      features: ["3D Modeling", "Sustainable Design", "Space Optimization"]
    },
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Comprehensive real estate valuation and asset appraisal services using AI-powered market analysis.",
      features: ["Market Valuation", "Asset Appraisal", "Investment ROI"]
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic real estate investment advisory and portfolio management to maximize returns.",
      features: ["Portfolio Management", "Risk Assessment", "Growth Strategy"]
    },
    {
      icon: Hammer,
      title: "Pre-Development Services",
      description: "Complete site readiness and pre-development services to prepare your property for successful development.",
      features: ["Site Analysis", "Feasibility Study", "Development Planning"]
    },
    {
      icon: Megaphone,
      title: "Project Marketing",
      description: "Effective real estate project marketing and sales enablement to connect properties with qualified buyers.",
      features: ["Digital Marketing", "Sales Strategy", "Lead Generation"]
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Comprehensive project management for redevelopment projects, ensuring timely completion and quality standards.",
      features: ["Timeline Management", "Quality Control", "Resource Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Our Cutting-Edge{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging artificial intelligence and machine learning to transform traditional 
            land management into a streamlined, data-driven process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-2 border-primary/30 hover:border-primary/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 mx-auto w-16 h-16 border-2 border-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
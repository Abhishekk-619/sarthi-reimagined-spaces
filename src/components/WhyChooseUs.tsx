import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "With years of experience in the real estate market, we've established a reputation for excellence and trust among our clients.",
      stats: "500+ Projects Completed"
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "We combine cutting-edge AI technology with traditional real estate expertise to deliver superior results.",
      stats: "AI-Powered Solutions"
    },
    {
      icon: Users,
      title: "Client-Centric Focus",
      description: "Every solution is tailored to meet your specific needs, ensuring personalized service and optimal outcomes.",
      stats: "98% Client Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Our deep understanding of Maharashtra's real estate landscape gives you a competitive advantage.",
      stats: "Market Leaders Since 2015"
    },
    {
      icon: Shield,
      title: "Complete Compliance",
      description: "We ensure 100% regulatory compliance with UDCPR and all relevant building regulations.",
      stats: "Zero Compliance Issues"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Our streamlined processes and efficient project management ensure on-time completion of all projects.",
      stats: "95% On-Time Delivery"
    }
  ];

  const achievements = [
    { number: "85%", label: "Cost Reduction", icon: TrendingUp },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "AI Support", icon: Shield }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground px-4 py-2">
            SUSTAINABLE DEVELOPMENT
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sarthi Reality
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered approach delivers superior results compared to traditional 
            land management methods, ensuring efficiency, compliance, and excellence.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.label}
                className="text-center bg-background border-border/50 hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 bg-background border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {feature.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Future of Real Estate
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their real estate 
              journey with our AI-powered solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-4 rounded-lg font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 rounded-lg font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, Lightbulb, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings, ensuring our clients make informed decisions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to simplify complex property regulations and processes."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Every solution is tailored to meet the unique needs and goals of our clients."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest standards of service delivery."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "15+ years in Real Estate Law"
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      experience: "AI & Legal Tech Specialist"
    },
    {
      name: "Amit Desai",
      role: "Senior Legal Advisor",
      experience: "UDCPR Compliance Expert"
    }
  ];

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
        
        {/* Hero Section */}
        <section className="py-20 mt-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-accent text-accent-foreground px-4 py-2">
                ABOUT US
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
                Leading the Future of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Real Estate Advisory
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Sarthi Reality combines traditional real estate expertise with cutting-edge AI technology 
                to provide unparalleled advisory services across Maharashtra.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-card/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Our Story
                </h2>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Founded in 2020, Sarthi Reality emerged from a vision to democratize access to accurate 
                  real estate information and legal guidance. We recognized the challenges faced by property 
                  owners, developers, and investors in navigating Maharashtra's complex regulatory landscape.
                </p>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Today, we are Maharashtra's first AI-powered real estate advisory firm, combining deep 
                  regulatory knowledge with innovative technology to serve thousands of clients across 
                  urban and rural areas.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-card/20 border-border/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-white">5000+</h3>
                        <p className="text-gray-300 text-sm">Properties Guided</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/20 border-border/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-white">2000+</h3>
                        <p className="text-gray-300 text-sm">Happy Clients</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Values
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="bg-card/20 border-border/20 backdrop-blur-sm hover:bg-card/30 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm text-center">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-card/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Team
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Meet the experts behind Sarthi Reality's success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="bg-card/20 border-border/20 backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-white">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sarthireality.com", "support@sarthireality.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Mumbai, Maharashtra", "Pune Office Available"],
      description: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9 AM - 7 PM", "Sat: 9 AM - 5 PM"],
      description: "Sunday: Closed"
    }
  ];

  const services = [
    "Real Estate Consultation",
    "Property Valuation",
    "Legal Documentation",
    "Investment Advisory",
    "Project Management",
    "UDCPR Assistance"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your real estate journey? Contact our expert team 
            for personalized guidance and AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" className="h-12" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interested In</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or requirements..."
                    rows={5}
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-luxury transition-all duration-300 gap-2 group"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
                <p className="mb-4 opacity-90">Book a free 30-minute consultation with our experts</p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-gray-100"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-muted-foreground text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* UDCPR Assistant CTA */}
            <Card className="bg-gradient-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Try UDCPR Saathi</h3>
                <p className="mb-4">Get instant answers to your building regulation questions</p>
                <Button 
                  variant="outline"
                  className="w-full border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                >
                  Chat Now - Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
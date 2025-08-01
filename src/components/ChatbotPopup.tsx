import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, X } from "lucide-react";

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = () => {
    setIsOpen(false);
    // Scroll to UDCPR section
    document.getElementById('udcpr')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleConsultation = () => {
    setIsOpen(false);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Welcome to Sarthi Reality!
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Get instant help with Maharashtra's building rules and property laws through our AI assistant, or schedule a consultation with our experts.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={handleStartChat}
            className="bg-gradient-primary hover:shadow-luxury transition-all duration-300 gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with UDCPR Saathi
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleScheduleConsultation}
            className="gap-2"
          >
            Schedule Consultation
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotPopup;
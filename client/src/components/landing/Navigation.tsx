import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onEnrollClick: () => void;
}

export function Navigation({ onEnrollClick }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border" data-testid="navigation">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Brain className="text-white text-sm" />
            </div>
            <span className="font-bold text-xl gradient-text">AI Automation Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('curriculum')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-curriculum"
            >
              Curriculum
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-success-stories"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
          </div>
          
          <Button 
            onClick={onEnrollClick}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform glow-effect"
            data-testid="nav-enroll-button"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </nav>
  );
}

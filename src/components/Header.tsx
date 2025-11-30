import { Button } from "@/components/ui/button";
import nexgenLogo from "@/assets/nexgen-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src={nexgenLogo} 
              alt="NexGen Tech Labs" 
              className="h-16 w-auto hover:opacity-90 transition-opacity"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Builds in Progress
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex">
              Get Started
            </Button>
            <Button variant="hero" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import nexgenLogo from "@/assets/nexgen-logo.png";
const Footer = () => {
  return <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={nexgenLogo} alt="NexGen Tech Labs" className="h-16 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading the future of AI technology with innovative solutions that transform businesses and drive digital
              evolution.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#Builds in Progress" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Products 
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">© 2024 NexGen Tech Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
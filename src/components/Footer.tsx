import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import nexgenLogo from "@/assets/nexgen-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Ready to bridge the AI "last mile"?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Let's discuss how our Forward Deployed Engineers can help you move from pilot to production.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:gap-4 transition-all group">
            Start a conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <img src={nexgenLogo} alt="NexGen Tech Labs" className="h-10 w-auto mb-6" />
              <p className="text-muted-foreground max-w-md leading-relaxed">AI & Cloud Engineering Solutions . We embed, architect, and deploy production-grade AI solutions within your secure environment.</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <Link to="/approach" className="text-muted-foreground hover:text-foreground transition-colors">
                    Forward Deployed Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/ai-stack" className="text-muted-foreground hover:text-foreground transition-colors">
                    AI Stack
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexGen Tech Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
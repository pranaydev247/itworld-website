import { Link } from "react-router-dom";
import nexgenLogo from "@/assets/nexgen-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={nexgenLogo}
                alt="NexGen Tech Labs"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI & Forward Deployed Engineering Consultancy. We don't just
              advise—we embed, architect, and deploy production-grade AI
              solutions within your secure environment.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <Link
                  to="/approach"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-stack"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Stack
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} NexGen Tech Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8 animate-fade-in">
            Forward Deployed Engineering
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] mb-8 animate-slide-up">
            AI & Engineering
            <br />
            <span className="text-primary">Consultancy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We don't just advise. We embed, architect, and deploy production-grade AI solutions within your secure environment.
          </p>

          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/approach"
              className="inline-flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Our Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

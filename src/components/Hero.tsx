import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-2 animate-float" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Forward Deployed Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI & Engineering
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Consultancy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            We don't just advise. We embed, architect, and deploy production-grade AI solutions within your secure environment.
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bridging the "last mile" gap where 95% of AI pilot programs fail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/approach">
              <Button variant="outline" size="lg">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl animate-float"
        style={{
          animationDelay: "2s",
        }}
      ></div>
    </section>
  );
};

export default Hero;

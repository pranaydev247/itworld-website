import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import AIStack from "@/components/AIStack";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      
      {/* Brief Approach Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Forward Deployed Engineering Model
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We operate at the intersection of product engineering, customer
              success, and solution architecture—possessing the technical depth
              to write production code while maintaining the business acumen to
              navigate C-suite expectations.
            </p>
            <Link to="/approach">
              <Button variant="outline" size="lg" className="group">
                Learn About Our Approach
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Bridge the AI "Last Mile"?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our Forward Deployed Engineers can help you move
              from pilot to production.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start a Conversation
                </Button>
              </Link>
              <Link to="/ai-stack">
                <Button variant="outline" size="lg">
                  Explore Our Stack
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

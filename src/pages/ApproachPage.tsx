import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApproachPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Approach
            </h1>
            <p className="text-xl text-muted-foreground">
              Forward Deployed Engineering: Where strategy meets execution
            </p>
          </div>
        </div>
      </section>

      <Approach />

      {/* Engagement Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              How We Engage
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Readiness Audit (2-4 Weeks)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We assess your current data infrastructure, identify high-ROI AI opportunities, 
                    and deliver a prioritised roadmap with clear business cases. Low commitment, 
                    high clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Proof of Value (4-8 Weeks)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build a focused pilot that demonstrates measurable value on a specific use case. 
                    Production-grade code from day one—no throwaway prototypes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Production Retainer (Ongoing)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our FDE pod embeds with your team to scale the solution, build additional capabilities, 
                    and transfer knowledge. We're measured on operational KPI impact, not hours billed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Move Beyond PoC Purgatory?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a low-risk Readiness Audit to understand your AI opportunity landscape.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApproachPage;

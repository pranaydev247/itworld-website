import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ApproachPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our Approach</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Forward Deployed<br />Engineering
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We don't advise from afar. Our engineers embed directly with your team, 
              writing production code in your environment to bridge the "last mile" where 95% of AI pilots fail.
            </p>
          </div>
        </div>
      </section>

      {/* FDE vs Traditional */}
      <section className="py-24 border-t border-border">
        <div className="container px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The FDE Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional consultants deliver decks. We deliver deployed systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Traditional Consultancy</p>
              <ul className="space-y-4">
                {["Strategy decks & architecture diagrams", "Transactional, waterfall engagements", "Risk transfer via documentation", "Measured on 'time & budget'"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-primary uppercase tracking-wide mb-4">Forward Deployed Engineering</p>
              <ul className="space-y-4">
                {["Production-ready code & deployed agents", "Embedded, iterative co-development", "Risk mitigation via engineering ownership", "Measured on operational KPI impact"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-8">
              Let's start a
              <br />
              <span className="text-primary">conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Have a question or want to discuss how our AI solutions can help you? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For any questions, demos, or to discuss how we can help bridge the AI "last mile" for your organization, reach out to us directly.
              </p>

              <a
                href="mailto:contact@ngtl.tech"
                className="inline-flex items-center gap-4 text-2xl font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                <Mail className="w-8 h-8" />
                contact@ngtl.tech
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-foreground mb-4">
                  Readiness Audit
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start with a comprehensive assessment of your AI readiness and opportunities.
                </p>
                <span className="text-sm text-primary">2-4 weeks</span>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-foreground mb-4">
                  Proof of Value
                </h3>
                <p className="text-muted-foreground mb-4">
                  Validate AI concepts with functional prototypes in your environment.
                </p>
                <span className="text-sm text-primary">4-8 weeks</span>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-foreground mb-4">
                  Production Retainer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Embedded engineering support for production-grade implementation.
                </p>
                <span className="text-sm text-primary">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Explore More
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/approach"
              className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Our Approach
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about the Forward Deployed Engineering model
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/ai-stack"
              className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                AI Stack
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our dual-cloud technology stack
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/team"
              className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Our Team
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Meet our high-velocity engineering unit
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

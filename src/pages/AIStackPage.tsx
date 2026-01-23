import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIStack from "@/components/AIStack";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIStackPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our AI Stack
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade AI infrastructure across Azure and GCP
            </p>
          </div>
        </div>
      </section>

      <AIStack />

      {/* Why Dual Cloud */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Why Dual-Cloud?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                To maximise our Total Addressable Market and serve the broadest range of enterprise 
                clients, we maintain deep specialisation across both Microsoft Azure and Google Cloud Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Azure</strong> is the default operating environment for highly regulated 
                industries—finance, insurance, and healthcare. These organisations are often deeply entrenched 
                in the Microsoft 365 ecosystem, making Azure the path of least resistance for AI adoption.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">GCP</strong> is preferred for cloud-native enterprises, tech-forward logistics 
                firms, and organisations with massive unstructured datasets that benefit from Gemini's 
                million-token context windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private AI Option */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need Air-Gapped AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              For defence and highly sensitive sectors, we offer Private AI solutions deploying 
              open-weights models on your private infrastructure—ensuring no data ever leaves your VPC.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Discuss Private Deployment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStackPage;

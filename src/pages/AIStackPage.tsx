import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Server, Lock, Zap } from "lucide-react";

const AIStackPage = () => {
  const azureStack = [
    { name: "Azure OpenAI Service", desc: "GPT-4o & o1 with zero data retention" },
    { name: "Azure AI Search", desc: "Hybrid vector + keyword retrieval" },
    { name: "Semantic Kernel", desc: "Native .NET orchestration framework" },
    { name: "Fabric & Data Factory", desc: "Enterprise data pipeline integration" },
  ];

  const gcpStack = [
    { name: "Vertex AI (Gemini)", desc: "1M+ token context windows" },
    { name: "BigQuery", desc: "Serverless analytics at scale" },
    { name: "Document AI", desc: "Pre-trained extraction models" },
    { name: "LangGraph", desc: "Stateful agent orchestration" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container px-6">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">AI Stack</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Dual-Cloud<br />Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Enterprise-grade AI infrastructure spanning Microsoft Azure and Google Cloud Platform. 
              We go where your data lives.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-24 border-t border-border">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Azure */}
            <div className="p-8 rounded-2xl border border-border bg-muted/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0078D4]/10 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-[#0078D4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Microsoft Azure</h3>
                  <p className="text-sm text-muted-foreground">The Enterprise Fortress</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Default for regulated industries—finance, insurance, healthcare. 
                Deep Microsoft 365 integration with enterprise-grade compliance.
              </p>
              <div className="space-y-4">
                {azureStack.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#0078D4] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* GCP */}
            <div className="p-8 rounded-2xl border border-border bg-muted/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-[#4285F4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Google Cloud</h3>
                  <p className="text-sm text-muted-foreground">The Data & Analytics Engine</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preferred for cloud-native enterprises and massive unstructured datasets 
                that benefit from Gemini's million-token context.
              </p>
              <div className="space-y-4">
                {gcpStack.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#4285F4] mt-1 shrink-0" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

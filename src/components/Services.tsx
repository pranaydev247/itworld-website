import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Code2, Target, Rocket, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Readiness",
      description:
        "Comprehensive assessment of your AI readiness, identifying high-ROI opportunities and building a strategic roadmap tailored to your business context.",
      capabilities: [
        "AI Readiness Audits",
        "Use Case Prioritisation",
        "ROI Analysis & Business Case Development",
        "Technology Stack Assessment",
      ],
    },
    {
      icon: Code2,
      title: "Forward Deployed Engineering",
      description:
        "Our engineers embed directly within your team, writing production-grade code in your secure environment. No handoffs, no documentation gaps.",
      capabilities: [
        "Embedded Engineering Teams",
        "Production-Ready Code Delivery",
        "Knowledge Transfer & Upskilling",
        "Agile Co-Development Loops",
      ],
    },
    {
      icon: Target,
      title: "Agentic AI Workflows",
      description:
        "Design and deploy autonomous AI agents that take action—from invoice reconciliation to document processing—with built-in governance and guardrails.",
      capabilities: [
        "Multi-Agent Orchestration",
        "RAG Pipeline Development",
        "Human-in-the-Loop Systems",
        "Custom Tool & Plugin Development",
      ],
    },
    {
      icon: Rocket,
      title: "MLOps & Production Deployment",
      description:
        "Take AI from pilot to production with robust MLOps practices, monitoring, and continuous improvement frameworks.",
      capabilities: [
        "Model Deployment & Versioning",
        "Performance Monitoring & Alerting",
        "Continuous Training Pipelines",
        "Cost Optimisation",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise AI Governance",
      description:
        "Implement guardrails that prevent models from executing unauthorized actions or answering out-of-bounds questions.",
      capabilities: [
        "Prompt Injection Defence",
        "Output Validation & Filtering",
        "Audit Logging & Compliance",
        "Data Privacy Controls",
      ],
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "Validate AI concepts quickly with functional prototypes that demonstrate real value before committing to full implementation.",
      capabilities: [
        "2-Week Proof of Concept",
        "Stakeholder Demonstrations",
        "Technical Feasibility Analysis",
        "Go/No-Go Decision Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We focus on the "last mile" of AI—making foundation models work
            reliably within your specific business context, legacy systems, and
            compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group h-full flex flex-col"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mt-auto">
                  {service.capabilities.map((capability, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group">
              Discuss your project with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

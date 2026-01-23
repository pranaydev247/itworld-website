import { ArrowRight, Brain, Code2, Target, Rocket, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import brandInfrajet from "@/assets/brand-infrajet.png";
import brandPrepstreak from "@/assets/brand-prepstreak.png";
import brandSareestage from "@/assets/brand-sareestage.png";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Build agentic systems that take on meaningful responsibility, automating decisions, reducing costs, and delivering measurable productivity gains.",
      tagline: "Accelerate outcomes with full IP control and zero vendor dependency.",
      capabilities: [
        "Replace workflows with AI agents",
        "Unlock insight with RAG-grounded answers",
        "Multi-agent orchestration with guardrails",
        "Human-in-the-loop systems",
      ],
      caseStudies: [
        { image: brandInfrajet, title: "Automating infrastructure compliance audits", client: "InfraJet" },
        { image: brandPrepstreak, title: "AI-powered document processing pipeline", client: "PrepStreak" },
        { image: brandSareestage, title: "Intelligent customer service automation", client: "SareeStage" },
      ],
    },
    {
      icon: Code2,
      title: "Forward Deployed Engineering",
      description:
        "Our engineers embed directly within your team, writing production-grade code in your secure environment. No handoffs, no documentation gaps.",
      tagline: "Technical depth with business acumen to navigate C-suite expectations.",
      capabilities: [
        "Embedded engineering teams",
        "Production-ready code delivery",
        "Knowledge transfer & upskilling",
        "Agile co-development loops",
      ],
      caseStudies: [
        { image: brandPrepstreak, title: "Building real-time analytics platform", client: "PrepStreak" },
        { image: brandInfrajet, title: "Legacy system modernization", client: "InfraJet" },
        { image: brandSareestage, title: "E-commerce platform scaling", client: "SareeStage" },
      ],
    },
    {
      icon: Target,
      title: "AI Strategy & Readiness",
      description:
        "Cut through complexity and align your goals with what customers and users actually need. Map your current state and build a plan that unlocks real value.",
      tagline: "From AI opportunity assessment to scalable delivery foundation.",
      capabilities: [
        "Define and validate new propositions",
        "Align user needs with business goals",
        "Prioritise roadmaps with measurable outcomes",
        "Technology stack assessment",
      ],
      caseStudies: [
        { image: brandSareestage, title: "Digital transformation roadmap", client: "SareeStage" },
        { image: brandInfrajet, title: "AI readiness assessment", client: "InfraJet" },
        { image: brandPrepstreak, title: "Data strategy development", client: "PrepStreak" },
      ],
    },
    {
      icon: Rocket,
      title: "MLOps & Production Deployment",
      description:
        "Take AI from pilot to production with robust MLOps practices, monitoring, and continuous improvement frameworks.",
      tagline: "Design secure, scalable infrastructure optimised for enterprise productivity.",
      capabilities: [
        "Model deployment & versioning",
        "Performance monitoring & alerting",
        "Continuous training pipelines",
        "Cost optimisation",
      ],
      caseStudies: [
        { image: brandInfrajet, title: "Cloud-native ML infrastructure", client: "InfraJet" },
        { image: brandPrepstreak, title: "Automated model retraining pipeline", client: "PrepStreak" },
        { image: brandSareestage, title: "Real-time inference at scale", client: "SareeStage" },
      ],
    },
  ];

  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We focus on the "last mile" of AI—making foundation models work reliably within your specific business context, legacy systems, and compliance requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <p className="text-foreground font-medium mb-8">
                    {service.tagline}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.capabilities.map((capability, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Discuss your project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Case Studies Grid */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Case Studies
                    </span>
                    <Link
                      to="/contact"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Explore
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {service.caseStudies.map((study, idx) => (
                      <div
                        key={idx}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden mb-3 relative">
                          <img
                            src={study.image}
                            alt={study.client}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{study.client}</p>
                        <p className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                          {study.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

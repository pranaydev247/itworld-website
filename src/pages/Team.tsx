import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Globe, Lightbulb, Target } from "lucide-react";

const Team = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description:
        "Distance is no barrier. We leverage diverse perspectives across time zones to build better solutions.",
    },
    {
      icon: Lightbulb,
      title: "Real Problems First",
      description:
        "Every engagement addresses challenges we or our clients have personally experienced. No vanity tech.",
    },
    {
      icon: Target,
      title: "Impact Over Hype",
      description:
        "We build practical AI solutions that work—not flashy demos that disappoint in production.",
    },
  ];

  const podStructure = [
    {
      role: "Lead FDE",
      focus: "Architecture & Client Success",
      responsibilities: [
        "System Design & Technical Strategy",
        "Client Communication & Stakeholder Management",
        "High-Level Code Review",
        "Contract & Scope Negotiation",
      ],
    },
    {
      role: "Backend/Infra Engineer",
      focus: "Systems & Data",
      responsibilities: [
        "Cloud Security & IAM Configuration",
        "API Integration & Data Pipelines",
        "Vector Database Setup",
        "CI/CD & Infrastructure as Code",
      ],
    },
    {
      role: "AI/App Engineer",
      focus: "Cognition & Interface",
      responsibilities: [
        "Prompt Engineering & RAG Development",
        "Agent Logic & Orchestration",
        "Frontend UI Implementation",
        "Model Evaluation & Testing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              A lean, high-velocity engineering unit built for enterprise AI delivery
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are a globally connected team of AI engineers and consultants at NexGen Tech Labs. 
                United by a shared vision, we collaborate across time zones to deliver AI solutions 
                that create measurable business impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is simple: we solve the problems we've faced ourselves. Every solution 
                we build stems from real challenges encountered in enterprise environments—whether 
                in DevOps workflows, document processing, or complex data integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pod Model */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The FDE Pod Model
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Instead of throwing individual contractors at problems, we deploy self-contained, 
                high-velocity engineering units. Each pod balances redundancy, speed, and breadth of skill.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {podStructure.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card border-0 shadow-card"
                >
                  <div className="mb-4">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {member.focus}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {member.role}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Work With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always open to connecting with talented engineers who share our passion 
              for solving real problems with AI. Reach out—we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

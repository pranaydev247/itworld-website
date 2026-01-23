import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
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

  const values = [
    {
      title: "Global Collaboration",
      description:
        "Distance is no barrier. We leverage diverse perspectives across time zones to build better solutions.",
    },
    {
      title: "Real Problems First",
      description:
        "Every engagement addresses challenges we or our clients have personally experienced. No vanity tech.",
    },
    {
      title: "Impact Over Hype",
      description:
        "We build practical AI solutions that work—not flashy demos that disappoint in production.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
              Our Team
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-8">
              A lean, high-velocity
              <br />
              <span className="text-primary">engineering unit</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We are a globally connected team of AI engineers and consultants, united by a shared vision to deliver AI solutions that create measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our approach is simple: we solve the problems we've faced ourselves. Every solution we build stems from real challenges encountered in enterprise environments—whether in DevOps workflows, document processing, or complex data integration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We collaborate across time zones to build better solutions, leveraging diverse perspectives and deep technical expertise.
              </p>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pod Model */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              The FDE Pod Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Instead of throwing individual contractors at problems, we deploy self-contained, high-velocity engineering units. Each pod balances redundancy, speed, and breadth of skill.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {podStructure.map((member, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {member.focus}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-6">
                  {member.role}
                </h3>
                <ul className="space-y-3">
                  {member.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Work With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always open to connecting with talented engineers who share our passion for solving real problems with AI. Reach out—we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:gap-4 transition-all"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

import { Card } from "@/components/ui/card";
import { Users, Wrench, Target, LineChart } from "lucide-react";

const Approach = () => {
  const pillars = [
    {
      icon: Users,
      title: "Embedded Teams",
      description:
        "Our Forward Deployed Engineers don't work in isolation. They integrate directly with your existing teams, operating within your security perimeter, using your tools, and building institutional knowledge that stays with your organisation.",
    },
    {
      icon: Wrench,
      title: "Production-First Mindset",
      description:
        "We skip the endless PoC cycle. Every line of code we write is production-grade from day one—complete with error handling, logging, monitoring, and documentation. No throwaway prototypes.",
    },
    {
      icon: Target,
      title: "Outcome-Focused",
      description:
        "Our success metric isn't 'project delivered.' It's 'operational KPI improved.' We measure impact in hours saved, errors reduced, and revenue unlocked—not in slides produced.",
    },
    {
      icon: LineChart,
      title: "Risk-Managed Escalation",
      description:
        "We start with low-risk Readiness Audits, demonstrate value through focused pilots, then scale to production retainers. This de-risks the engagement for both parties.",
    },
  ];

  return (
    <section id="approach" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Forward Deployed Engineering model reimagines the relationship
            between external expertise and internal infrastructure.
          </p>
        </div>

        {/* The Problem */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Problem We Solve
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditional consultancies deliver strategy decks and architecture
              diagrams. But in the world of probabilistic AI, a diagram doesn't
              translate to working code. The "last mile" of AI—connecting
              foundation models to your messy, legacy, secure environment—is
              where 95% of pilot programs fail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The market failure lies in the disconnect between the promise of
              AI (demonstrated in sanitized demos) and the reality of enterprise
              data. Traditional consultants often lack the hands-on engineering
              capability to debug a hallucinating agent or optimise a vector
              retrieval pipeline within your VPC.
            </p>
          </Card>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            How We're Different
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-muted-foreground font-medium">
                    Dimension
                  </th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-medium">
                    Traditional Consultancy
                  </th>
                  <th className="text-left py-4 px-6 text-primary font-semibold">
                    NexGen FDE Model
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 text-foreground font-medium">
                    Primary Deliverable
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    Strategy decks, diagrams
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    Production-ready code & deployed agents
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 text-foreground font-medium">
                    Engagement Model
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    Transactional, waterfall-based
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    Embedded, iterative co-development
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 text-foreground font-medium">
                    Technical Focus
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    Configuration of known platforms
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    Solving ambiguous edge cases with custom logic
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 text-foreground font-medium">
                    Risk Management
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    Risk transfer via documentation
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    Risk mitigation via engineering ownership
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-foreground font-medium">
                    Success Metric
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    "On Time, On Budget"
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    Operational KPI Impact
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

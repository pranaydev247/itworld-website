import { Card } from "@/components/ui/card";
import { Brain, Cpu, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "InfraJet",
      description:
        "Custom AI IaC Code Generationn with clever guardrails for blazing speed infra deployments in Enterprises.",
      url: "https://infrajet.dev"
    },
    {
      icon: Brain,
      title: "PrepStreak",
      description:
        "A Laser Focused and Gamified app for Kids to incorporate Reinforcement learning for UK primary shool kids preparing for 11+ and SATS.",
      url: "https://prepstreak.co.uk"
    },
    {
      icon: Zap,
      title: "SareeStage",
      description: "Solving an extremely important problem for Indian Women - A Saree Virtual Try on.",
      url: "https://sareestage.com"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer h-full">
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

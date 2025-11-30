import { Card } from "@/components/ui/card";
import infrajetLogo from "@/assets/brand-infrajet.png";
import prepstreakLogo from "@/assets/brand-prepstreak.png";
import sareestageLogo from "@/assets/brand-sareestage.png";

const Services = () => {
  const services = [
    {
      image: infrajetLogo,
      title: "InfraJet",
      description:
        "Custom AI IaC Code Generationn with clever guardrails for blazing speed infra deployments in Enterprises.",
      url: "https://infrajet.dev"
    },
    {
      image: prepstreakLogo,
      title: "PrepStreak",
      description:
        "A Laser Focused and Gamified app for Kids to incorporate Reinforcement learning for UK primary shool kids preparing for 11+ and SATS.",
      url: "https://prepstreak.co.uk"
    },
    {
      image: sareestageLogo,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer h-full">
                <div className="mb-4 flex items-center justify-center h-20">
                  <img 
                    src={service.image} 
                    alt={`${service.title} logo`}
                    className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
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

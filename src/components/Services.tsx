import { Card } from "@/components/ui/card";
import { Brain, Cpu, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Product Development",
      description: "Custom AI solutions tailored to your business needs, from machine learning models to intelligent automation systems."
    },
    {
      icon: Cpu,
      title: "SaaS Platforms",
      description: "Scalable software-as-a-service platforms powered by advanced AI algorithms and modern cloud infrastructure."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics and predictive modeling solutions."
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems to enhance performance and efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to accelerate your digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
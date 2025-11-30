import { Card } from "@/components/ui/card";
import { Brain, Code2, Database, Cloud } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Brain,
      title: "AI & ML Platforms",
      items: [
        "Google Gemini & Vertex AI for production workloads",
        "OpenAI ChatGPT for rapid prototyping",
        "Custom RAG pipelines and vector databases"
      ]
    },
    {
      icon: Code2,
      title: "Development Stack",
      items: [
        "React for dynamic, responsive frontends",
        "Python & FastAPI for scalable backend services",
        "Modern tooling for efficient development"
      ]
    },
    {
      icon: Database,
      title: "Data & Storage",
      items: [
        "PostgreSQL for robust database management",
        "Vector databases for AI-powered search",
        "Efficient data pipelines and processing"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      items: [
        "Azure & GCP for enterprise-grade hosting",
        "Multi-cloud strategy for reliability",
        "Secure API key management and AI workloads"
      ]
    }
  ];

  return (
    <section id="techstack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our TechStack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative AI solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We continuously evaluate and adopt emerging technologies to ensure our solutions 
            remain at the forefront of AI innovation, delivering maximum value to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import { Card } from "@/components/ui/card";
import { Cloud, Database, Brain, Lock, Code2, Workflow } from "lucide-react";

const AIStack = () => {
  const stacks = [
    {
      platform: "Microsoft Azure",
      badge: "Enterprise Fortress",
      description:
        "The default operating environment for highly regulated industries—finance, insurance, healthcare. Deep integration with Microsoft 365 ecosystems.",
      icon: Cloud,
      color: "from-blue-500 to-blue-600",
      components: [
        {
          name: "Azure OpenAI Service",
          detail:
            "GPT-4o and o1 models within your compliance boundary. Zero Data Retention policies and private VNET integration.",
        },
        {
          name: "Azure AI Search",
          detail:
            "Hybrid Search combining keyword (BM25) and vector search for precise enterprise RAG applications.",
        },
        {
          name: "Fabric & Data Factory",
          detail:
            "Build data pipelines that unify siloed data from legacy on-premise servers into AI-ready formats.",
        },
        {
          name: "Semantic Kernel",
          detail:
            "Native .NET integration for enterprise C# codebases with Planner architecture for autonomous agent development.",
        },
      ],
    },
    {
      platform: "Google Cloud Platform",
      badge: "Data & Analytics Engine",
      description:
        "Preferred for cloud-native enterprises, tech-forward logistics, and organisations with massive unstructured datasets.",
      icon: Cloud,
      color: "from-green-500 to-teal-500",
      components: [
        {
          name: "Vertex AI (Gemini)",
          detail:
            "Gemini 1.5 Pro with 1M+ token context windows—process 500-page contracts in a single pass without chunking.",
        },
        {
          name: "BigQuery",
          detail:
            "Serverless data warehouse for real-time analytics on agent performance with native Vertex AI integration.",
        },
        {
          name: "Document AI",
          detail:
            "Pre-trained models for procurement documents, invoices, and lending documents with superior OCR accuracy.",
        },
        {
          name: "LangGraph",
          detail:
            "Production-grade agent orchestration with state management, cyclic graphs, and human-in-the-loop breakpoints.",
        },
      ],
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Foundation Models",
      items: [
        "OpenAI GPT-4o & o1 Series",
        "Google Gemini 1.5 Pro",
        "Anthropic Claude 3.5",
        "Open-weights: Llama 3, Mistral",
      ],
    },
    {
      icon: Database,
      title: "Vector & Data Infrastructure",
      items: [
        "Pinecone & Weaviate",
        "Azure AI Search",
        "PostgreSQL + pgvector",
        "Custom RAG Pipelines",
      ],
    },
    {
      icon: Workflow,
      title: "Orchestration Frameworks",
      items: [
        "Microsoft Semantic Kernel",
        "LangChain & LangGraph",
        "CrewAI & AutoGen",
        "Custom Agent Architectures",
      ],
    },
    {
      icon: Lock,
      title: "Private & Sovereign AI",
      items: [
        "Air-gapped deployments",
        "AKS/GKE hosted inference",
        "vLLM & Ollama",
        "Data residency compliance",
      ],
    },
  ];

  return (
    <section id="aistack" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our AI Stack
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A dual-cloud strategy covering Azure and GCP ensures compatibility
            with over 70% of the Fortune 500 enterprise market.
          </p>
        </div>

        {/* Cloud Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-0 shadow-card"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stack.color} text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {stack.platform}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {stack.badge}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {stack.description}
                </p>
                <div className="space-y-4">
                  {stack.components.map((component, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-primary/30 pl-4"
                    >
                      <h4 className="font-semibold text-foreground mb-1">
                        {component.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {component.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Core Capabilities Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Core Technical Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {cap.title}
                  </h4>
                  <ul className="space-y-2">
                    {cap.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStack;

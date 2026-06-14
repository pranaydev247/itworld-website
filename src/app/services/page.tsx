import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — IT World Limited",
  description: "IT Consulting, Software Development, Cloud Services, Data & AI from IT World Limited — UK enterprise technology specialists.",
};

const services = [
  {
    id: "consulting",
    icon: "🧭",
    title: "IT Consulting",
    tagline: "Strategy-led technology transformation",
    description: "We help enterprise clients define and execute technology strategy that drives real business outcomes. Our consultants bring deep domain knowledge across enterprise platforms, governance frameworks, and programme management.",
    offerings: [
      "Digital Transformation Strategy",
      "Enterprise Architecture & Technology Roadmaps",
      "ERP/CRM Advisory — SAP, Salesforce, Workday, Microsoft Dynamics",
      "IT Governance, Risk & Compliance",
      "Programme & Project Management",
      "IT Due Diligence & Vendor Selection",
    ],
  },
  {
    id: "development",
    icon: "💻",
    title: "Software Development",
    tagline: "Custom software built to enterprise standards",
    description: "From greenfield development to legacy modernisation, our engineering teams deliver robust, scalable software solutions aligned with your architecture and business goals.",
    offerings: [
      "Custom Software Development (Web, Mobile, Enterprise)",
      "API Development & Systems Integration",
      "Legacy Modernisation & Migration",
      "UI/UX Design & Prototyping",
      "Agile Development & DevOps Delivery",
      "QA, Testing & Quality Engineering",
    ],
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Services",
    tagline: "Cloud strategy, migration and beyond",
    description: "We architect, migrate and optimise cloud environments on AWS, Azure and GCP — enabling elastic scale, cost efficiency, and cloud-native innovation.",
    offerings: [
      "Cloud Strategy, Migration & Optimisation",
      "AWS, Microsoft Azure, Google Cloud Platform (GCP)",
      "Cloud-native Application Development",
      "Infrastructure as Code (IaC) & DevOps Automation",
      "Kafka / Event-Streaming Architecture",
    ],
  },
  {
    id: "data-ai",
    icon: "🤖",
    title: "Data & AI",
    tagline: "Intelligence-driven enterprise decisions",
    description: "Unlock the value of your data. We build modern data platforms, analytics capabilities, and AI solutions that give enterprises a competitive edge.",
    offerings: [
      "Data Engineering & ETL Pipeline Development",
      "Business Intelligence & Analytics (Power BI, Tableau)",
      "AI & Machine Learning Solutions",
      "Generative AI Integration & Automation",
      "Big Data Platforms & Real-time Analytics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            End-to-End IT Services for Enterprise
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            From strategy through to delivery — we provide the full spectrum of IT consulting and software development services that enterprise organisations need to thrive.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="text-5xl mb-6">{svc.icon}</div>
                <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-2">{svc.tagline}</p>
                <h2 className="text-3xl font-bold text-[#0A2342] mb-4">{svc.title}</h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">{svc.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0E9B8A] text-white font-semibold text-sm hover:bg-[#0b8478] transition-colors"
                >
                  Discuss Your Requirements
                </Link>
              </div>
              <div className={`p-8 rounded-2xl bg-[#F2F4F8] ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="font-bold text-[#0A2342] mb-5 text-sm uppercase tracking-widest">What We Deliver</h3>
                <ul className="space-y-3">
                  {svc.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0E9B8A]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#0E9B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#0A2342] text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2342] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-white/60 mb-8">Talk to one of our senior consultants about your specific requirements.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold hover:bg-[#0b8478] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies — IT World Limited",
  description: "Full enterprise technology stack — SAP, Salesforce, Workday, AWS, Azure, GCP, Kafka, and more.",
};

const categories = [
  {
    title: "ERP Platforms",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    techs: [
      { name: "SAP S/4HANA", desc: "ECC, ABAP, BTP, Ariba, SuccessFactors, Concur" },
      { name: "Workday", desc: "HCM, Payroll, Financials, Integrations" },
      { name: "Microsoft Dynamics 365", desc: "Finance, Supply Chain, Sales, CRM" },
      { name: "Oracle ERP Cloud", desc: "Financials, Procurement, Projects" },
    ],
  },
  {
    title: "CRM & Customer Platforms",
    color: "border-teal-200 bg-teal-50",
    badge: "bg-teal-100 text-teal-800",
    techs: [
      { name: "Salesforce", desc: "Sales Cloud, Service Cloud, Marketing Cloud, CPQ, Vlocity" },
      { name: "Pega", desc: "CRM, BPM, Decisioning, Robotics" },
      { name: "Microsoft Dynamics CRM", desc: "Customer engagement, Sales, Service" },
      { name: "ServiceNow", desc: "IT Service Management, ITSM workflows" },
    ],
  },
  {
    title: "Cloud Platforms",
    color: "border-orange-200 bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
    techs: [
      { name: "Amazon Web Services", desc: "EC2, Lambda, S3, RDS, EKS" },
      { name: "Microsoft Azure", desc: "DevOps, AKS, Synapse, Fabric" },
      { name: "Google Cloud Platform", desc: "BigQuery, Dataflow, Vertex AI" },
    ],
  },
  {
    title: "Data, Integration & Streaming",
    color: "border-purple-200 bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
    techs: [
      { name: "Apache Kafka", desc: "& Confluent Platform — event streaming" },
      { name: "MuleSoft", desc: "Dell Boomi, Azure Integration Services" },
      { name: "Databricks", desc: "Snowflake, dbt — data lakehouse" },
      { name: "Power BI", desc: "Tableau, Looker — BI & analytics" },
    ],
  },
  {
    title: "DevOps & Engineering",
    color: "border-gray-200 bg-gray-50",
    badge: "bg-gray-100 text-gray-800",
    techs: [
      { name: "Docker & Kubernetes", desc: "Container orchestration at scale" },
      { name: "Terraform & Ansible", desc: "Infrastructure as Code automation" },
      { name: "CI/CD", desc: "GitHub Actions, Jenkins, Azure DevOps, GitLab" },
      { name: "Languages & Frameworks", desc: "Java, Python, Node.js, .NET, React, Angular" },
    ],
  },
  {
    title: "Automotive & Connected Tech",
    color: "border-red-200 bg-red-50",
    badge: "bg-red-100 text-red-800",
    techs: [
      { name: "Connected Vehicle Platforms", desc: "OTA Updates, V2X Communication" },
      { name: "AUTOSAR", desc: "CAN Bus, LIN, FlexRay protocols" },
      { name: "ADAS", desc: "Autonomous Driving Systems" },
      { name: "EV Software", desc: "Battery Management, Charging Infrastructure, Digital Twin" },
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    color: "border-yellow-200 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-800",
    techs: [
      { name: "IAM & Zero Trust", desc: "Identity & Access Management architecture" },
      { name: "SIEM", desc: "Threat Detection & Incident Response" },
      { name: "GDPR", desc: "ISO 27001, SOC 2 Compliance frameworks" },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">Technology Stack</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Deep Expertise Across the Enterprise Stack
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            From ERP and CRM platforms to cloud infrastructure, data engineering and AI — we bring certified expertise across the technologies that power modern enterprises.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-6 flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.badge}`}>{cat.title}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-5 rounded-xl border ${cat.color} hover:shadow-md transition-shadow duration-200`}
                  >
                    <h3 className="font-bold text-[#0A2342] text-sm mb-1">{tech.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F2F4F8] px-6 text-center">
        <p className="text-gray-500 mb-2 text-sm">Don&apos;t see the technology you need?</p>
        <h2 className="text-2xl font-bold text-[#0A2342] mb-6">We cover more than we can list here.</h2>
        <a
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-lg bg-[#0A2342] text-white font-semibold hover:bg-[#0d2d54] transition-colors text-sm"
        >
          Talk to Our Team
        </a>
      </section>
    </div>
  );
}

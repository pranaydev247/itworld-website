import Link from "next/link";

const industries = [
  {
    icon: "🏦",
    name: "Financial Services",
    desc: "Core banking transformation, regulatory compliance, Salesforce & SAP for financial institutions.",
  },
  {
    icon: "📡",
    name: "Telecommunications",
    desc: "BSS/OSS systems, SAP for Telco, Salesforce Vlocity, Kafka for real-time data, 5G readiness.",
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    desc: "EHR integrations, HL7/FHIR APIs, SAP for healthcare, GDPR compliance, AI diagnostics support.",
  },
  {
    icon: "🚗",
    name: "Automotive",
    desc: "Connected vehicle platforms, ADAS, EV software, AUTOSAR, digital twins, IoT manufacturing.",
  },
  {
    icon: "🛍️",
    name: "Retail & E-Commerce",
    desc: "SAP S/4HANA for retail, Salesforce Commerce Cloud, personalisation AI, supply chain optimisation.",
  },
  {
    icon: "🏛️",
    name: "Public Sector",
    desc: "Digital government services, HMRC-compatible integrations, secure cloud, accessibility compliance.",
  },
  {
    icon: "⚡",
    name: "Energy & Utilities",
    desc: "Smart grid platforms, IoT data pipelines, SAP for utilities, sustainability & ESG reporting.",
  },
  {
    icon: "🏭",
    name: "Manufacturing",
    desc: "SAP PP/MM/WM, MES integration, supply chain automation, predictive maintenance, Industry 4.0.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[#F2F4F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-4">
            Deep Sector Expertise
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We bring industry-specific knowledge to every engagement, ensuring technology decisions align with your sector's challenges and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-[#0E9B8A]/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h3 className="font-bold text-[#0A2342] mb-2 text-sm">{ind.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#0E9B8A] font-semibold text-sm hover:gap-3 transition-all duration-150"
          >
            Explore all industries
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

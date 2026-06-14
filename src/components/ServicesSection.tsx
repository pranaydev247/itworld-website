import Link from "next/link";

const services = [
  {
    id: "consulting",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "IT Consulting",
    description: "Digital transformation strategy, enterprise architecture, ERP/CRM advisory across SAP, Salesforce & Workday, IT governance and programme management.",
    tags: ["Digital Transformation", "SAP Advisory", "ERP/CRM", "IT Governance"],
  },
  {
    id: "development",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Development",
    description: "Custom web, mobile and enterprise software, API development & systems integration, legacy modernisation, UI/UX design and agile DevOps delivery.",
    tags: ["Custom Software", "API Integration", "Legacy Migration", "Agile Delivery"],
  },
  {
    id: "cloud",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Services",
    description: "Cloud strategy, migration & optimisation on AWS, Azure and GCP. Cloud-native development, Infrastructure as Code, and Kafka event-streaming architecture.",
    tags: ["AWS", "Azure", "GCP", "Kafka", "DevOps"],
  },
  {
    id: "data-ai",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: "Data & AI",
    description: "Data engineering & ETL pipelines, BI & analytics with Power BI and Tableau, AI/ML solutions, Generative AI integration, and real-time big data platforms.",
    tags: ["Data Engineering", "Power BI", "AI/ML", "Generative AI"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-4">
            End-to-End IT Services
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From strategy to delivery — we cover the full spectrum of enterprise technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group relative p-8 rounded-2xl border border-gray-100 bg-[#F2F4F8] hover:border-[#0E9B8A]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0A2342] text-[#0E9B8A] flex items-center justify-center mb-6">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-3">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {svc.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-[#0A2342]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/services#${svc.id}`}
                className="inline-flex items-center gap-1.5 text-[#0E9B8A] text-sm font-semibold hover:gap-3 transition-all duration-150"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0A2342] text-white font-semibold hover:bg-[#0d2d54] transition-colors text-sm"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

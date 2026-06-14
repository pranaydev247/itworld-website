import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — IT World Limited",
  description: "IT World serves Financial Services, Telecoms, Healthcare, Automotive, Retail, Public Sector, Energy and Manufacturing.",
};

const industries = [
  {
    icon: "🏦",
    name: "Financial Services",
    tagline: "Compliance-driven technology for banking & finance",
    description:
      "We help banks, insurers and financial services firms modernise core systems, meet regulatory requirements, and adopt AI-powered risk & fraud detection — at enterprise scale.",
    capabilities: [
      "Core banking transformation",
      "Regulatory compliance (FCA, PRA, GDPR, IFRS)",
      "Salesforce & SAP for financial institutions",
      "Cloud migration with data sovereignty controls",
      "Real-time fraud detection using AI/ML",
      "Open Banking & API integration",
    ],
  },
  {
    icon: "📡",
    name: "Telecommunications",
    tagline: "BSS/OSS modernisation & 5G readiness",
    description:
      "We support telecoms operators in modernising billing systems, deploying real-time data streaming, and building the digital infrastructure for 5G and beyond.",
    capabilities: [
      "BSS/OSS systems modernisation",
      "SAP for Telco implementations",
      "Salesforce Vlocity for telco CRM",
      "Kafka for real-time data pipelines",
      "Network automation & 5G readiness",
      "Customer experience transformation",
    ],
  },
  {
    icon: "🏥",
    name: "Healthcare & Life Sciences",
    tagline: "Safe, compliant digital healthcare delivery",
    description:
      "From EHR integrations to AI diagnostics support, we help healthcare organisations harness technology safely and compliantly.",
    capabilities: [
      "EHR integrations & HL7/FHIR APIs",
      "SAP for healthcare providers",
      "GDPR & NHS data compliance",
      "AI-powered diagnostics support tools",
      "Patient engagement platforms",
      "Clinical data pipelines & analytics",
    ],
  },
  {
    icon: "🚗",
    name: "Automotive",
    tagline: "Connected, electric & autonomous vehicle technology",
    description:
      "We help automotive OEMs and Tier-1 suppliers build the software-defined vehicle platforms, digital twins, and IoT infrastructure powering the next generation of mobility.",
    capabilities: [
      "Connected vehicle platforms & OTA updates",
      "ADAS & autonomous driving systems",
      "EV software — Battery Management Systems",
      "AUTOSAR, CAN Bus, LIN, FlexRay",
      "Digital twin & IoT manufacturing",
      "V2X communication platforms",
    ],
  },
  {
    icon: "🛍️",
    name: "Retail & E-Commerce",
    tagline: "Personalised, omnichannel retail at scale",
    description:
      "We help retailers deliver seamless omnichannel experiences, optimise supply chains, and use AI to drive personalisation and demand forecasting.",
    capabilities: [
      "SAP S/4HANA for retail operations",
      "Salesforce Commerce Cloud",
      "Order management & fulfilment systems",
      "AI-driven personalisation engines",
      "Inventory & supply chain automation",
      "Customer data platforms",
    ],
  },
  {
    icon: "🏛️",
    name: "Public Sector",
    tagline: "Secure, accessible digital government services",
    description:
      "We help government bodies and public institutions deliver citizen-centric digital services that are secure, accessible, and fully compliant with UK government standards.",
    capabilities: [
      "Digital government service delivery (GDS standards)",
      "HMRC-compatible integrations",
      "Secure cloud hosting & data sovereignty",
      "Accessibility compliance (WCAG 2.2)",
      "ERP modernisation for public bodies",
      "Legacy systems modernisation",
    ],
  },
  {
    icon: "⚡",
    name: "Energy & Utilities",
    tagline: "Smart infrastructure for a sustainable future",
    description:
      "We help energy companies and utilities providers build smart grid platforms, IoT data pipelines, and sustainability reporting capabilities.",
    capabilities: [
      "Smart grid platforms & IoT data pipelines",
      "SAP for utilities implementations",
      "Sustainability & ESG reporting",
      "Predictive maintenance systems",
      "Renewables portfolio management",
      "Regulatory compliance automation",
    ],
  },
  {
    icon: "🏭",
    name: "Manufacturing",
    tagline: "Industry 4.0 and intelligent operations",
    description:
      "We help manufacturers integrate ERP with shop-floor systems, automate supply chains, and adopt predictive maintenance and Industry 4.0 practices.",
    capabilities: [
      "SAP PP/MM/WM for manufacturing",
      "MES integration & factory automation",
      "Supply chain automation & visibility",
      "Predictive maintenance with IoT & AI",
      "Industry 4.0 readiness assessment",
      "Digital twin implementation",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">Industries</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Deep Sector Expertise
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            We bring industry-specific knowledge to every engagement — understanding your sector's regulations, operational challenges, and technology landscape.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="p-8 rounded-2xl border border-gray-100 hover:border-[#0E9B8A]/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-4xl mb-5">{ind.icon}</div>
              <p className="text-[#0E9B8A] text-xs font-semibold uppercase tracking-widest mb-2">{ind.tagline}</p>
              <h2 className="text-xl font-bold text-[#0A2342] mb-3">{ind.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{ind.description}</p>
              <ul className="space-y-2">
                {ind.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-sm text-[#0A2342]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E9B8A] flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2342] px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Work in a Different Sector?</h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          Our capabilities extend across many industries. Get in touch to discuss how we can support your organisation.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold hover:bg-[#0b8478] transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

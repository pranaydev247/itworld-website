import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — IT World Limited",
  description: "UK-based IT Consulting and Software Development company founded in 2016, headquartered in Harrow, London.",
};

const specialisms = [
  "SAP S/4HANA", "Salesforce", "Workday", "Microsoft Dynamics",
  "AWS / Azure / GCP", "Data Engineering", "AI & ML", "DevOps",
  "Cybersecurity", "Digital Transformation", "Kafka", "Pega",
];

const reasons = [
  {
    icon: "🎯",
    title: "Specialist, Not Generalist",
    body: "We focus on a defined set of enterprise platforms and disciplines, allowing us to develop genuine depth rather than spreading ourselves thin.",
  },
  {
    icon: "👥",
    title: "Senior Consultants Only",
    body: "You get experienced practitioners on every engagement — not junior staff learning on your budget.",
  },
  {
    icon: "🌍",
    title: "Global Reach, UK Standards",
    body: "UK-headquartered with delivery teams across Europe and India — combining global scale with local accountability.",
  },
  {
    icon: "🤝",
    title: "Long-term Partnerships",
    body: "We invest in understanding your business deeply and become a trusted technology partner, not just a one-off vendor.",
  },
  {
    icon: "✅",
    title: "Quality & Compliance Built-in",
    body: "We build with GDPR, ISO 27001, and SOC 2 standards embedded from day one — not added as an afterthought.",
  },
  {
    icon: "⚡",
    title: "Agile & Adaptive",
    body: "Flexible engagement models from fixed-scope projects to staff augmentation and managed services.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Enterprise IT Consulting &amp; Development Since 2016
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            IT World Limited is a UK-based IT Consulting and Software Development company, founded and headquartered in Harrow, London. We help enterprises across the UK, Europe, and India modernise their technology, accelerate digital transformation, and build world-class software solutions.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 bg-[#F2F4F8] px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2016", label: "Founded" },
            { value: "UK · EU · IN", label: "Global Reach" },
            { value: "09908890", label: "Company Reg." },
            { value: "Harrow, London", label: "Headquarters" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-white border border-gray-100">
              <div className="text-2xl font-bold text-[#0A2342] mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                IT World Limited was founded in 2016 with a clear purpose: to provide enterprise organisations with access to senior IT consulting and development talent, without the overhead and bureaucracy of large consultancies.
              </p>
              <p>
                Based in Harrow, London, we operate as a boutique firm — small enough to be agile and responsive, but with the depth of expertise and delivery track record that enterprise clients demand.
              </p>
              <p>
                With specialist capabilities across SAP, Salesforce, Workday, cloud platforms, data engineering, and AI, we bring a rare blend of hands-on delivery experience and strategic consulting to every engagement.
              </p>
              <p>
                Today, we serve clients across the UK, Europe and India — working across Financial Services, Telecommunications, Healthcare, Automotive, Retail, Public Sector, and more.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Specialisms</h2>
            <div className="flex flex-wrap gap-3">
              {specialisms.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-[#F2F4F8] text-[#0A2342] text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-[#0A2342] text-white">
              <p className="text-white/60 text-sm mb-1">Contact</p>
              <a href="mailto:info@itworldltd.com" className="text-[#0E9B8A] font-semibold hover:underline">
                info@itworldltd.com
              </a>
              <p className="text-white/60 text-sm mt-4 mb-1">Website</p>
              <span className="text-white font-medium">www.itworldltd.com</span>
              <p className="text-white/60 text-sm mt-4 mb-1">Director</p>
              <span className="text-white font-medium">Pranay Kumar Aitha</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why IT World */}
      <section className="py-20 bg-[#F2F4F8] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-12 text-center">Why IT World</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-[#0A2342] mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A2342] px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
        <p className="text-white/60 mb-8">Talk to our team about how IT World can support your next technology initiative.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="px-8 py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold hover:bg-[#0b8478] transition-colors text-sm">
            Get in Touch
          </Link>
          <Link href="/services" className="px-8 py-3.5 rounded-lg border border-white/25 text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-all text-sm">
            Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}

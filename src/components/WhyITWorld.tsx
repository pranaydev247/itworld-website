const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Specialist Expertise",
    body: "Deep hands-on expertise across the world's leading enterprise platforms — SAP, Salesforce, Workday, Microsoft Dynamics, and more.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Global Delivery",
    body: "UK-based headquarters with proven delivery capability across UK, Europe, and India — giving you senior-level expertise at competitive rates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Senior Consultants",
    body: "Boutique agency approach — you get senior consultants, not junior bench staff. Every project is led by experienced practitioners.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Quality & Compliance",
    body: "Committed to GDPR, ISO 27001, and SOC 2 standards. We build with compliance built-in, not bolted on.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agile & Fast",
    body: "Agile delivery methodology with rapid prototyping, continuous integration, and iterative releases that adapt to your evolving needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Long-Term Partnership",
    body: "We invest in lasting relationships — understanding your business deeply to become a trusted technology partner, not just a vendor.",
  },
];

export default function WhyITWorld() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-6">
              The IT World Difference
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We bring a rare blend of hands-on delivery capability and strategic consulting — helping enterprises navigate complex technology landscapes with confidence.
            </p>
            <div className="p-6 rounded-2xl bg-[#0A2342] text-white">
              <p className="text-white/70 text-sm mb-4">Founded</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "2016", label: "Founded" },
                  { value: "09908890", label: "Company Reg." },
                  { value: "London", label: "HQ" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#0E9B8A]/30 hover:shadow-sm transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0E9B8A]/10 text-[#0E9B8A] flex items-center justify-center">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2342] text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

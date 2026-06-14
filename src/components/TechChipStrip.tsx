const techs = [
  "SAP S/4HANA", "Salesforce", "Workday", "Microsoft Dynamics 365",
  "AWS", "Microsoft Azure", "Google Cloud", "Kafka",
  "Pega", "MuleSoft", "Databricks", "Snowflake",
  "Power BI", "Tableau", "Docker", "Kubernetes",
  "Terraform", "React", "Node.js", "Python",
  "Java", ".NET", "Oracle ERP", "ServiceNow",
  "SAP BTP", "Vertex AI", "dbt", "GitHub Actions",
];

export default function TechChipStrip() {
  const doubled = [...techs, ...techs];

  return (
    <section className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
        Trusted expertise across leading enterprise platforms
      </p>
      <div className="relative">
        <div className="flex gap-3 animate-marquee w-max">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-[#F2F4F8] text-[#0A2342] text-sm font-medium whitespace-nowrap hover:border-[#0E9B8A] hover:text-[#0E9B8A] transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

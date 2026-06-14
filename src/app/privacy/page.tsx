import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — IT World Limited",
  description: "Privacy Policy for IT World Limited (Company Reg. 09908890).",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A2342] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate prose-headings:text-[#0A2342] prose-a:text-[#0E9B8A]">
          <h2>Who We Are</h2>
          <p>IT World Limited (Company Reg. 09908890, England &amp; Wales), headquartered in Harrow, London, UK operates the website at www.itworldltd.com. We are the data controller for personal data collected via this website.</p>

          <h2>What Data We Collect</h2>
          <p>We may collect the following personal data when you use our website or contact us:</p>
          <ul>
            <li>Name, email address, phone number, and company name (via contact forms)</li>
            <li>IP address and browser information (via cookies and analytics)</li>
            <li>Calendar booking details (via our scheduling tool)</li>
          </ul>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>To respond to your enquiries and service requests</li>
            <li>To schedule and conduct consultations</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Legal Basis</h2>
          <p>We process personal data on the basis of legitimate interests (responding to business enquiries), contractual necessity (delivering services), and compliance with legal obligations.</p>

          <h2>Data Retention</h2>
          <p>We retain enquiry data for up to 3 years, or as long as necessary to fulfil the purposes outlined above. You may request deletion at any time.</p>

          <h2>Your Rights (GDPR)</h2>
          <p>Under GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. You also have the right to data portability and to object to processing. To exercise these rights, contact us at <a href="mailto:info@itworldltd.com">info@itworldltd.com</a>.</p>

          <h2>Cookies</h2>
          <p>We use essential cookies for site functionality and optional analytics cookies (Google Analytics) to understand how visitors use our site. You may opt out of analytics cookies at any time.</p>

          <h2>Third-Party Services</h2>
          <p>We use Google Analytics and Cal.com (calendar booking). These services have their own privacy policies. We do not sell your personal data to any third parties.</p>

          <h2>Contact</h2>
          <p>For any privacy-related queries, contact us at <a href="mailto:info@itworldltd.com">info@itworldltd.com</a>.</p>
        </div>
      </section>
    </div>
  );
}

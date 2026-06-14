import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — IT World Limited",
  description: "Terms and Conditions for IT World Limited (Company Reg. 09908890).",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A2342] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-white/50 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate prose-headings:text-[#0A2342] prose-a:text-[#0E9B8A]">
          <h2>1. Company Information</h2>
          <p>IT World Limited is registered in England &amp; Wales (Company Reg. 09908890), with its registered office in Harrow, London, UK.</p>

          <h2>2. Use of This Website</h2>
          <p>By accessing www.itworldltd.com, you agree to use this website for lawful purposes only. You must not misuse this website or attempt to gain unauthorised access to any part of it.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, and code — is the intellectual property of IT World Limited. Reproduction without written permission is prohibited.</p>

          <h2>4. Service Enquiries</h2>
          <p>Information submitted via our contact form is used solely to respond to your enquiry. Submitting an enquiry does not constitute a contract or commitment from either party.</p>

          <h2>5. Disclaimer</h2>
          <p>This website is provided on an &quot;as is&quot; basis. IT World Limited makes no warranties regarding the accuracy, completeness or availability of the content. We are not liable for any loss arising from use of this website.</p>

          <h2>6. Third-Party Links</h2>
          <p>This website may contain links to third-party websites. IT World Limited is not responsible for the content or privacy practices of those sites.</p>

          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of England &amp; Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England &amp; Wales.</p>

          <h2>8. Changes</h2>
          <p>We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>

          <h2>9. Contact</h2>
          <p>For any questions regarding these terms, contact us at <a href="mailto:info@itworldltd.com">info@itworldltd.com</a>.</p>
        </div>
      </section>
    </div>
  );
}

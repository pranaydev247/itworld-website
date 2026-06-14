import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — IT World Limited",
  description: "Get in touch with IT World Limited. Book a consultation with our senior IT consultants.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Whether you have a specific requirement or just want to explore how IT World can support your technology goals — our senior consultants are ready to listen.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A2342] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0E9B8A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E9B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@itworldltd.com" className="text-[#0A2342] font-medium text-sm hover:text-[#0E9B8A] transition-colors">
                      info@itworldltd.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0E9B8A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E9B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-[#0A2342] font-medium text-sm">Harrow, London, UK</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0E9B8A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0E9B8A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/itworldltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A2342] font-medium text-sm hover:text-[#0E9B8A] transition-colors"
                    >
                      linkedin.com/company/itworldltd
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="p-5 rounded-xl bg-[#F2F4F8] border border-gray-100">
              <p className="font-bold text-[#0A2342] text-sm mb-2">What to Expect</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E9B8A]" />
                  Response within 1 business day
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E9B8A]" />
                  Initial discovery call (30 min)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E9B8A]" />
                  No-obligation consultation
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#0A2342] mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-[#F2F4F8] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-3">Book a Consultation</p>
          <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
            Schedule a Google Meet Call
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Book a 30-minute discovery call directly with one of our senior consultants. Pick a time that works for you.
          </p>

          {/* Cal.com embed placeholder — replace YOUR_USERNAME with your Cal.com username */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm min-h-[600px] flex items-center justify-center">
            <iframe
              src="https://cal.com/itworldltd/consultation"
              className="w-full min-h-[600px] border-0"
              title="Book a Consultation — IT World Limited"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Powered by Cal.com · Google Meet link sent automatically on confirmation
          </p>
        </div>
      </section>
    </div>
  );
}

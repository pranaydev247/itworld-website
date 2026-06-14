import Link from "next/link";

const services = [
  { label: "IT Consulting", href: "/services#consulting" },
  { label: "Software Development", href: "/services#development" },
  { label: "Cloud Services", href: "/services#cloud" },
  { label: "Data & AI", href: "/services#data-ai" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#0E9B8A] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3" fill="white" />
                  <path d="M10 2C10 2 14 5 14 10C14 15 10 18 10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 2C10 2 6 5 6 10C6 15 10 18 10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none tracking-tight">IT World</span>
                <span className="block text-[#0E9B8A] text-[10px] font-medium tracking-widest uppercase">Limited</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Enterprise IT Consulting &amp; Software Development. Headquartered in Harrow, London with global delivery across UK, Europe &amp; India.
            </p>
            <a
              href="https://www.linkedin.com/company/itworldltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:info@itworldltd.com" className="hover:text-white transition-colors">
                  info@itworldltd.com
                </a>
              </li>
              <li className="leading-relaxed">
                Harrow, London, UK
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-2 px-4 py-2 rounded-lg border border-[#0E9B8A] text-[#0E9B8A] hover:bg-[#0E9B8A] hover:text-white text-xs font-semibold transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} IT World Limited. Company Reg. 09908890 (England &amp; Wales).
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

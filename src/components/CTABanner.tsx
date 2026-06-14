import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#0A2342] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#0E9B8A]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#1B5EA6]/20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#0E9B8A] text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Transform Your Business with<br />Enterprise-Grade IT
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you need strategic IT consulting, custom software development, or cloud migration — our senior consultants are ready to help.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold hover:bg-[#0b8478] transition-colors text-sm"
          >
            Get in Touch
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-lg border border-white/25 text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-all text-sm"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  "Digital Transformation",
  "SAP Consulting",
  "Salesforce Implementation",
  "Cloud Migration",
  "AI & Machine Learning",
  "Software Development",
  "Workday Integration",
  "Data Engineering",
  "DevOps Automation",
  "Cybersecurity",
  "Microsoft Dynamics",
  "ERP Advisory",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A2342] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1B5EA6]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0E9B8A]/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1B5EA6]/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0E9B8A]/40 bg-[#0E9B8A]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#0E9B8A] animate-pulse" />
            <span className="text-[#0E9B8A] text-sm font-medium">UK · Europe · India</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Enterprise IT Consulting &amp;
            <br />
            Software Development
          </motion.h1>

          {/* Animated service text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-white/50 text-xl sm:text-2xl font-light">Specialising in</span>
            <div className="h-10 sm:h-12 overflow-hidden relative min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center text-[#0E9B8A] text-xl sm:text-2xl font-bold whitespace-nowrap"
                >
                  {services[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10"
          >
            We help enterprises across UK, Europe &amp; India modernise their technology, accelerate digital transformation, and build world-class software — with deep expertise in SAP, Salesforce, Workday, Cloud, and AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold hover:bg-[#0b8478] transition-colors duration-150 text-sm"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-150 text-sm"
            >
              Talk to a Consultant
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-10"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "UK · EU · IN", label: "Global Reach" },
              { value: "Enterprise", label: "Grade Delivery" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

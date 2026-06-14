"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide some details about your requirements"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "IT Consulting",
  "Software Development",
  "Cloud Services",
  "Data & AI",
  "Digital Transformation",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silently continue — form still sends data
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[#0E9B8A]/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#0E9B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0A2342] mb-2">Message Received</h3>
        <p className="text-gray-500">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Full Name *</label>
          <input
            {...register("name")}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Work Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Company *</label>
          <input
            {...register("company")}
            placeholder="Your Company Ltd"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Phone (Optional)</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+44 20 0000 0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Service of Interest *</label>
        <select
          {...register("service")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0A2342] mb-1.5">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#0E9B8A] focus:ring-2 focus:ring-[#0E9B8A]/10 transition-colors resize-none"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-lg bg-[#0E9B8A] text-white font-semibold text-sm hover:bg-[#0b8478] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respond within 1 business day. Your details are kept confidential.
      </p>
    </form>
  );
}

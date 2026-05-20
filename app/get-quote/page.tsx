// app/get-quote/page.tsx

"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

const solutions = [
  "OMR Sheet Designing",
  "OMR Sheet Printing",
  "OMR Scanning & Processing",
  "Result Processing",
  "Analytics & Reporting",
  "Enterprise Data Collection",
];

const industries = [
  {
    title: "Educational Institutions",
    icon: GraduationCap,
  },
  {
    title: "Government & Recruitment",
    icon: Building2,
  },
  {
    title: "Enterprise & Research",
    icon: ClipboardList,
  },
];

export default function GetQuotePage() {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const handleCheckbox = (value: string) => {
    if (selectedSolutions.includes(value)) {
      setSelectedSolutions(
        selectedSolutions.filter((item) => item !== value)
      );
    } else {
      setSelectedSolutions([...selectedSolutions, value]);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur">
              Enterprise OMR Solutions
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get a Custom Quote
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Looking for a complete OMR solution for examinations, surveys,
              recruitment or enterprise workflows? Share your requirements and
              our team will provide a customized quotation tailored to your
              operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">
                Request a Quote
              </h2>

              <p className="mt-3 text-slate-400">
                Fill in your details and we’ll get back to you with the best
                OMR solution for your organization.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder:text-slate-500 focus:border-white/20"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Organization / Institute
                </label>

                <input
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder:text-slate-500 focus:border-white/20"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder:text-slate-500 focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder:text-slate-500 focus:border-white/20"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="mb-4 block text-sm font-medium text-slate-300">
                  Select Industry
                </label>

                <div className="grid gap-4 md:grid-cols-3">
                  {industries.map((industry) => {
                    const Icon = industry.icon;

                    return (
                      <button
                        type="button"
                        key={industry.title}
                        className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-white/20 hover:bg-white/10"
                      >
                        <Icon className="h-8 w-8 text-white" />

                        <span className="mt-3 text-sm font-medium text-slate-300">
                          {industry.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <label className="mb-4 block text-sm font-medium text-slate-300">
                  Required Services
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                  {solutions.map((solution) => (
                    <label
                      key={solution}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSolutions.includes(solution)}
                        onChange={() => handleCheckbox(solution)}
                        className="h-4 w-4 rounded border-white/20 bg-transparent"
                      />

                      <span className="text-sm text-slate-300">
                        {solution}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Requirements
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your examination, survey or OMR workflow requirements..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur placeholder:text-slate-500 focus:border-white/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Submit Quote Request
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Choose */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">
                Why MarkReader?
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "High-Speed OMR Processing",
                  "Enterprise Grade Accuracy",
                  "Scalable Infrastructure",
                  "Automated Reporting",
                  "Secure Data Management",
                  "Dedicated Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />

                    <p className="text-sm text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Phone className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="mt-1 font-medium text-white">
                      +91-9810392402, +91-9971543678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Mail className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="mt-1 font-medium text-white">
                      info@omr.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-400">
                  Our team will analyze your requirements and provide a tailored
                  quotation including hardware, software and workflow solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
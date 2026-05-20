//"use client";

import { CheckCircle2 } from "lucide-react";
import {features, bottomPoints} from '@/lib/constants'



export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="container-enterprise relative grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative">
          {/* Main Image */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop"
              alt="OMR India"
              className="h-[620px] w-full object-cover"
            />
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-8 -right-8 max-w-xs rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 backdrop-blur-xl">
            <h3 className="text-5xl font-bold text-white">
              25+
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Years of enterprise expertise delivering scalable OMR,
              assessment and document automation solutions across India.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            About OMR India
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            Enterprise Assessment &
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              OMR Automation Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-300">
            OMR India delivers enterprise-grade assessment infrastructure,
            scalable OMR processing, analytics and document digitization
            solutions for institutions, universities, enterprises and
            government organizations.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Our technology-driven approach combines automation, precision and
            operational scalability to streamline large-scale examination and
            evaluation workflows with maximum reliability and efficiency.
          </p>

          {/* Feature Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                    0{index + 1}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold text-white">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Points */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            {bottomPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
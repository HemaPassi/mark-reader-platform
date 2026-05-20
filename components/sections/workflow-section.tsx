import {
  Database,
  FileCheck2,
  ScanLine,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import { workflow } from '@/lib/constants'


export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_28%)]" />

      <div className="container-enterprise relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise Workflow
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
            Intelligent OMR Processing
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Workflow Infrastructure
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Streamlined enterprise workflows designed for large-scale
            examinations, assessments and document intelligence operations.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="relative mt-20 grid gap-6 lg:grid-cols-4">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]"
              >
                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Connector Line */}
                {index !== workflow.length - 1 && (
                  <div className="absolute left-full top-20 hidden h-[2px] w-6 bg-white/10 lg:block" />
                )}

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10">
                      <Icon className="h-6 w-6 text-blue-300" />
                    </div>

                    <span className="text-5xl font-bold text-white/[0.04]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300">
                    Workflow Step

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
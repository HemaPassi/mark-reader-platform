//# app/workflow/page.tsx
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  ScanSearch,
  Database,
  BarChart3,
  Printer,
  ShieldCheck,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "OMR Sheet Designing",
    description:
      "Custom-designed OMR sheets optimized for examinations, surveys, recruitment and enterprise data collection workflows.",
    icon: FileSpreadsheet,
  },
  {
    step: "02",
    title: "Printing & Distribution",
    description:
      "High-quality OMR sheet printing with precise alignment and optimized layouts for accurate scanning.",
    icon: Printer,
  },
  {
    step: "03",
    title: "Scanning & Processing",
    description:
      "High-speed OMR scanning infrastructure capable of processing large-scale assessment operations.",
    icon: ScanSearch,
  },
  {
    step: "04",
    title: "Data Validation",
    description:
      "Automated validation and verification workflows ensuring highly accurate data capture and processing.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Data Management",
    description:
      "Secure storage, export and centralized management of scanned examination and survey data.",
    icon: Database,
  },
  {
    step: "06",
    title: "Analytics & Reporting",
    description:
      "Generate detailed reports, analytics and actionable insights with automated result processing.",
    icon: BarChart3,
  },
];

const benefits = [
  "High-Speed Bulk Processing",
  "Accurate OMR Recognition",
  "Scalable Infrastructure",
  "Automated Result Generation",
  "Secure Data Management",
  "Enterprise Ready Workflows",
];

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur">
              Complete OMR Processing Workflow
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              End-to-End OMR Workflow Solution
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              From OMR sheet designing and printing to scanning, data processing
              and analytics — MarkReader provides a complete workflow ecosystem
              for educational institutions, recruitment agencies and enterprise
              operations.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
  href="#workflow-process"
  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
>
  Explore Workflow
  <ArrowRight className="h-4 w-4" />
</Link>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Request Demo
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />

                  <p className="text-sm font-medium text-slate-300">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section  id="workflow-process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Workflow Process
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            Streamline your examination and survey operations using a fully
            integrated OMR workflow platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {workflowSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl"
              >
                <div className="absolute right-6 top-6 text-6xl font-bold text-white/[0.04]">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Step {step.step}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-8 py-16 shadow-2xl lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur">
                  Enterprise OMR Solutions
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to automate your OMR workflow?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Improve operational efficiency, eliminate manual errors and
                  process examinations and surveys at scale with MarkReader.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                  Contact Sales
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
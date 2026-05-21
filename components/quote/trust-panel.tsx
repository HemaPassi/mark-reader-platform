// components/quote/trust-panel.tsx

import {
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  Database,
  ShieldCheck,
  Workflow,
  ScanLine,
} from 'lucide-react'

const trustStats = [
  {
    value: '24+',
    label: 'Years Industry Experience',
  },
  {
    value: '1M+',
    label: 'OMR Sheets Processed',
  },
  {
    value: '99.9%',
    label: 'Processing Accuracy',
  },
  {
    value: 'Enterprise',
    label: 'Scale Infrastructure',
  },
]

const features = [
  {
    title: 'Enterprise OMR Infrastructure',
    description:
      'Scalable enterprise ecosystems optimized for high-volume assessment workflows.',
    icon: Building2,
  },
  {
    title: 'AI-Powered Evaluation',
    description:
      'Intelligent OMR validation and automated assessment processing.',
    icon: Workflow,
  },
  {
    title: 'Advanced Analytics',
    description:
      'Real-time reporting, dashboards and enterprise assessment insights.',
    icon: BarChart3,
  },
  {
    title: 'Secure Processing',
    description:
      'Enterprise-grade security and reliable evaluation workflows.',
    icon: ShieldCheck,
  },
]

const industries = [
  'Universities',
  'Educational Institutions',
  'Government Organizations',
  'Recruitment Agencies',
  'Research Institutions',
  'Corporate Enterprises',
]

export default function TrustPanel() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Why Choose Mark Reader
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Trusted Enterprise
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              OMR Infrastructure
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Mark Reader delivers enterprise-grade OMR software,
            intelligent assessment workflows and scalable evaluation
            ecosystems trusted by institutions and organizations.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((item) => (
            <article
              key={item.label}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b1120] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20"
              >
                {/* GLOW */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                {/* NUMBER */}
                <div className="absolute right-8 top-8 text-6xl font-bold text-white/[0.04]">
                  0{index + 1}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* ENTERPRISE PANEL */}
        <div className="mt-24 rounded-[40px] border border-white/10 bg-[#0b1120] p-10 lg:p-14">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise Assessment Ecosystem
              </p>

              <h3 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Modernize Your
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Workflow
                </span>
              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Our intelligent OMR ecosystems streamline evaluation,
                automate processing and provide enterprise-grade
                assessment infrastructure for modern organizations.
              </p>

              {/* TRUST POINTS */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    title: 'High-Speed OMR Processing',
                    icon: ScanLine,
                  },
                  {
                    title: 'Enterprise Security Infrastructure',
                    icon: ShieldCheck,
                  },
                  {
                    title: 'Advanced Assessment Analytics',
                    icon: Database,
                  },
                  {
                    title: 'Reliable Evaluation Systems',
                    icon: Award,
                  },
                ].map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>

                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Industries We Serve
                </p>

                <h4 className="mt-5 text-3xl font-bold text-white">
                  Trusted Across Multiple Sectors
                </h4>

                <p className="mt-6 leading-8 text-slate-400">
                  Mark Reader supports enterprise assessment
                  infrastructure for institutions, enterprises and
                  government organizations.
                </p>

                {/* INDUSTRIES */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-[#020617] px-5 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />

                      <span className="text-sm text-slate-300">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>

                {/* MINI STATS */}
                <div className="mt-12 grid grid-cols-2 gap-5">
                  {[
                    {
                      label: 'Enterprise Clients',
                      value: '100+',
                    },
                    {
                      label: 'Processing Reliability',
                      value: '99.9%',
                    },
                    {
                      label: 'Assessment Workflows',
                      value: 'Scalable',
                    },
                    {
                      label: 'Support Infrastructure',
                      value: 'Dedicated',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-[#020617] p-5"
                    >
                      <h5 className="text-2xl font-bold text-white">
                        {item.value}
                      </h5>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// components/quote/hero.tsx

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const trustPoints = [
  'AI-Powered OMR Evaluation',
  'Enterprise Security',
  'Bulk OMR Processing',
  'Advanced Analytics',
]

const stats = [
  {
    value: '99.9%',
    label: 'Processing Accuracy',
  },
  {
    value: '24+',
    label: 'Years Experience',
  },
  {
    value: '1M+',
    label: 'OMR Sheets Processed',
  },
  {
    value: 'Enterprise',
    label: 'Scale Infrastructure',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#020617] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise OMR Solutions
          </div>

          {/* HEADING */}
          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get a Custom
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Enterprise Quote
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Looking for enterprise-grade OMR software, OMR evaluation,
            OMR scanning or intelligent assessment infrastructure?
            Share your requirements and our experts will recommend
            the ideal enterprise workflow solution.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Mark Reader delivers scalable OMR ecosystems optimized for
            universities, institutions, recruitment agencies and
            enterprise organizations.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Request Enterprise Quote

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Explore Services
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-12 flex flex-wrap gap-4">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-blue-400" />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
              alt="Enterprise OMR Quote"
              width={1800}
              height={1800}
              priority
              className="h-[720px] w-full object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                <Database className="h-8 w-8 text-blue-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Enterprise OMR Infrastructure
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Intelligent OMR infrastructure optimized for
                  enterprise-scale assessment workflows, secure
                  evaluation and advanced analytics.
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING MINI CARDS */}
          <div className="absolute -left-8 top-16 hidden space-y-5 xl:block">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1120]/90 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Enterprise Security
                </p>

                <h3 className="font-semibold text-white">
                  Secure Assessment Systems
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1120]/90 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Workflow className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Workflow Automation
                </p>

                <h3 className="font-semibold text-white">
                  Intelligent OMR Ecosystem
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1120]/90 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Advanced Reporting
                </p>

                <h3 className="font-semibold text-white">
                  Real-Time Analytics
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
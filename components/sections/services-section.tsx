// app/services/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Database,
  Layers3,
  ScanLine,
  ShieldCheck,
  Workflow,
  FileText,
  Building2,
} from 'lucide-react'

import servicesData from '@/data/services.json'

export const metadata = {
  title:
    'OMR Services India | OMR Software, OMR Scanning & Evaluation Solutions',
  description:
    'Enterprise-grade OMR sheet design, OMR software, OMR scanning, OMR evaluation and bulk OMR processing solutions for universities, institutions and government organizations.',
  keywords: [
    'OMR Services',
    'OMR Software',
    'OMR Scanner',
    'OMR Evaluation',
    'OMR Sheet Design',
    'OMR Processing',
    'OMR Assessment Solutions',
    'OMR Sheet Reader',
    'OMR Data Processing',
  ],
  alternates: {
    canonical: 'https://omr.in/services',
  },
  openGraph: {
    title: 'Enterprise OMR Services | Mark Reader',
    description:
      'Scalable OMR processing, OMR software and intelligent assessment infrastructure.',
    url: 'https://omr.in/services',
    siteName: 'Mark Reader',
    type: 'website',
  },
}

const workflow = [
  {
    title: 'OMR Sheet Design',
    description:
      'Custom-designed OMR sheets optimized for examinations, surveys and enterprise workflows.',
    icon: Layers3,
  },
  {
    title: 'Scanning & Processing',
    description:
      'High-speed OMR scanners capture and process marked responses accurately.',
    icon: ScanLine,
  },
  {
    title: 'Validation & Evaluation',
    description:
      'AI-powered validation systems ensure secure and accurate evaluation.',
    icon: ClipboardCheck,
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Advanced reporting and analytics infrastructure for enterprise insights.',
    icon: BarChart3,
  },
]

const trustPoints = [
  '99.9% Processing Accuracy',
  'AI-Powered Validation',
  'Enterprise Security Standards',
  'Bulk OMR Processing',
]

const enterpriseFeatures = [
  {
    title: 'Enterprise Infrastructure',
    description:
      'Scalable OMR infrastructure built for institutions, enterprises and government organizations.',
    icon: Building2,
  },
  {
    title: 'Advanced OMR Software',
    description:
      'AI-powered OMR software ensuring intelligent processing and evaluation.',
    icon: Cpu,
  },
  {
    title: 'Secure OMR Evaluation',
    description:
      'Reliable and secure assessment systems optimized for operational efficiency.',
    icon: ShieldCheck,
  },
]

export default function ServicesPage() {
  const services = servicesData.services

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            provider: {
              '@type': 'Organization',
              name: 'Mark Reader',
            },
            serviceType: 'Enterprise OMR Services',
            areaServed: 'India',
          }),
        }}
      />

      <main className="relative overflow-hidden bg-[#020617] text-white">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />

        {/* HERO */}
        <section className="relative border-b border-white/5">
          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Enterprise OMR Services
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Scalable
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Infrastructure
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Mark Reader delivers enterprise-grade OMR software, OMR
                scanning, OMR sheet design and intelligent OMR evaluation
                systems for universities, institutions and government
                organizations.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Our advanced OMR ecosystem combines automation, analytics and
                operational scalability to modernize large-scale assessment and
                processing workflows.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Get Enterprise Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/workflow"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Explore Workflow
                </Link>
              </div>

              {/* Trust Points */}
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

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {[
                  {
                    value: '99.9%',
                    label: 'Accuracy',
                  },
                  {
                    value: '24+',
                    label: 'Years',
                  },
                  {
                    value: '1M+',
                    label: 'OMR Sheets',
                  },
                  {
                    value: 'Enterprise',
                    label: 'Scale',
                  },
                ].map((item) => (
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

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Services"
                  width={1800}
                  height={1800}
                  priority
                  className="h-[720px] w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Database className="h-8 w-8 text-blue-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Enterprise OMR Platform
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Intelligent OMR processing infrastructure optimized for
                      speed, scalability and enterprise-grade operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* HEADER */}
            <header className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                {services.badge}
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                {services.title.line1}

                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  {services.title.line2}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {services.description}
              </p>
            </header>

            {/* CARDS */}
            <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.data.map((service: any, index: number) => (
                <article
                  key={service.slug}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]"
                >
                  {/* Glow */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10 text-lg font-semibold text-blue-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <span className="text-5xl font-bold text-white/[0.04]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-8 text-slate-400">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {[
                        'Enterprise Ready',
                        'High Accuracy',
                        'AI Validation',
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors duration-300 hover:text-white"
                    >
                      {service.CTA}

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                OMR Workflow
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Intelligent OMR Processing Workflow
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Enterprise-grade infrastructure optimized for high-speed OMR
                scanning, evaluation and analytics.
              </p>
            </header>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">
              {workflow.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-[#0b1120] p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">
                        0{index + 1}
                      </div>

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-5 leading-8 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Why Choose Mark Reader
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                  Enterprise OMR Expertise
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  Mark Reader combines intelligent OMR software, scalable
                  infrastructure and AI-powered evaluation systems to deliver
                  enterprise-grade assessment workflows.
                </p>

                <div className="mt-10 space-y-5">
                  {enterpriseFeatures.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-[36px] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
                  alt="OMR Evaluation Services"
                  width={1800}
                  height={1800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600/10 to-slate-900 p-14 text-center">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Ready To Modernize Your OMR Workflow?
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Transform your assessment infrastructure with enterprise-grade
                OMR software, scanning and intelligent evaluation systems.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Get Enterprise Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Talk To Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
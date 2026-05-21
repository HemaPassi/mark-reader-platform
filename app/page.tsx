// app/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Database,
  Layers3,
  ScanLine,
  ShieldCheck,
  Workflow,
  FileText,
  Globe2,
} from 'lucide-react'

export const metadata = {
  title:
    'OMR Software India | Enterprise OMR Solutions & OMR Evaluation',
  description:
    'Enterprise-grade OMR software, OMR scanners, OMR sheet processing and intelligent assessment infrastructure for universities, institutions and government organizations.',
  keywords: [
    'OMR Software India',
    'OMR Solutions',
    'OMR Scanner',
    'OMR Evaluation',
    'OMR Sheet Processing',
    'OMR Sheet Reader',
    'OMR Assessment Solutions',
    'OMR Data Processing',
    'Enterprise OMR Software',
  ],
  alternates: {
    canonical: 'https://omr.in',
  },
  openGraph: {
    title: 'Enterprise OMR Solutions | Mark Reader',
    description:
      'Scalable OMR software, OMR scanning and intelligent assessment infrastructure.',
    url: 'https://omr.in',
    siteName: 'Mark Reader',
    type: 'website',
  },
}

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

const services = [
  {
    title: 'OMR Sheet Design',
    description:
      'Custom-designed OMR sheets optimized for examinations and enterprise workflows.',
    icon: Layers3,
    href: '/services',
  },
  {
    title: 'OMR Scanning',
    description:
      'High-speed OMR scanning infrastructure for bulk-scale assessment operations.',
    icon: ScanLine,
    href: '/services',
  },
  {
    title: 'OMR Evaluation',
    description:
      'AI-powered OMR evaluation systems ensuring accuracy and operational efficiency.',
    icon: ClipboardCheck,
    href: '/services',
  },
  {
    title: 'OMR Software',
    description:
      'Enterprise-grade OMR software for intelligent processing and analytics.',
    icon: Cpu,
    href: '/products',
  },
]

const workflow = [
  {
    title: 'Design',
    description:
      'Custom OMR sheet creation aligned with institutional workflows.',
    icon: FileText,
  },
  {
    title: 'Scan',
    description:
      'High-speed OMR scanners capture marked responses accurately.',
    icon: ScanLine,
  },
  {
    title: 'Validate',
    description:
      'AI-powered validation ensures secure and reliable evaluation.',
    icon: ShieldCheck,
  },
  {
    title: 'Analyze',
    description:
      'Advanced reporting and analytics for enterprise insights.',
    icon: BarChart3,
  },
]

const industries = [
  {
    title: 'Universities',
    icon: Building2,
  },
  {
    title: 'Government Organizations',
    icon: Globe2,
  },
  {
    title: 'Recruitment Agencies',
    icon: Database,
  },
  {
    title: 'Research Institutions',
    icon: Workflow,
  },
]

export default function HomePage() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Mark Reader',
            url: 'https://omr.in',
            description:
              'Enterprise OMR software and OMR processing solutions provider.',
          }),
        }}
      />

      <main className="relative overflow-hidden bg-[#020617] text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%)]" />

        {/* HERO */}
        <section className="relative border-b border-white/5">
          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Enterprise OMR Infrastructure
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Intelligent
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Mark Reader delivers enterprise-grade OMR software, OMR
                scanning, OMR evaluation and scalable assessment infrastructure
                for universities, institutions and government organizations.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Our advanced OMR ecosystem combines intelligent automation,
                enterprise analytics and operational scalability for modern
                assessment workflows.
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
                  href="/services"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Points */}
              <div className="mt-12 flex flex-wrap gap-4">
                {[
                  'AI-Powered Validation',
                  'Enterprise Security',
                  'Bulk OMR Processing',
                  'Advanced Analytics',
                ].map((item) => (
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

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Solutions"
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
                      Enterprise OMR Platform
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Intelligent OMR infrastructure optimized for large-scale
                      assessment and enterprise evaluation workflows.
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
            {/* Header */}
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise Services
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Complete OMR Ecosystem
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Modern enterprise infrastructure for OMR software, OMR
                scanning, OMR evaluation and intelligent assessment systems.
              </p>
            </header>

            {/* Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={index}
                    className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white"
                    >
                      Explore Solution

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                )
              })}
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
                Intelligent OMR Processing
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Enterprise-grade workflow optimized for speed, accuracy and
                operational scalability.
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

        {/* INDUSTRIES */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Industries We Serve
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                  Trusted Enterprise Assessment Infrastructure
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  Mark Reader delivers enterprise OMR solutions for educational
                  institutions, government organizations, recruitment agencies
                  and research ecosystems.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {industries.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>

                        <h3 className="font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-[36px] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Infrastructure"
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
                OMR software, intelligent evaluation systems and scalable OMR
                processing workflows.
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
                  Contact Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
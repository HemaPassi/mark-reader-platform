// app/about/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from 'lucide-react'

export const metadata = {
  title:
    'About Mark Reader | Enterprise OMR Solutions & OMR Software India',
  description:
    'Learn about Mark Reader — a trusted enterprise OMR solution provider delivering OMR software, OMR scanning, OMR evaluation and intelligent assessment infrastructure.',
  keywords: [
    'About Mark Reader',
    'OMR Company India',
    'OMR Solution Provider',
    'OMR Software Company',
    'OMR Infrastructure',
    'OMR Processing',
    'OMR Evaluation',
    'Enterprise OMR Solutions',
  ],
  alternates: {
    canonical: 'https://omr.in/about',
  },
  openGraph: {
    title: 'About Mark Reader | Enterprise OMR Solutions',
    description:
      'Trusted enterprise OMR infrastructure and intelligent assessment solutions.',
    url: 'https://omr.in/about',
    siteName: 'Mark Reader',
    type: 'website',
  },
}

const values = [
  {
    title: 'Enterprise Reliability',
    description:
      'Scalable OMR infrastructure designed for high-volume enterprise operations.',
    icon: ShieldCheck,
  },
  {
    title: 'Advanced Technology',
    description:
      'AI-powered OMR software and intelligent evaluation systems.',
    icon: Cpu,
  },
  {
    title: 'Operational Excellence',
    description:
      'Efficient workflows optimized for accuracy, scalability and automation.',
    icon: Workflow,
  },
]

const highlights = [
  {
    title: '24+ Years Experience',
    description:
      'Deep expertise delivering enterprise-grade OMR processing solutions.',
    icon: Award,
  },
  {
    title: '1M+ OMR Sheets Processed',
    description:
      'Large-scale assessment infrastructure trusted by institutions.',
    icon: Database,
  },
  {
    title: 'Enterprise Assessment Systems',
    description:
      'Modern OMR software and scalable evaluation ecosystems.',
    icon: Building2,
  },
  {
    title: 'Nationwide OMR Solutions',
    description:
      'Trusted by educational institutions and organizations across India.',
    icon: Globe2,
  },
]

const timeline = [
  {
    year: '2001',
    title: 'Foundation',
    description:
      'Started delivering specialized OMR sheet and evaluation solutions.',
  },
  {
    year: '2008',
    title: 'Enterprise Expansion',
    description:
      'Expanded into large-scale institutional and government workflows.',
  },
  {
    year: '2016',
    title: 'Advanced OMR Infrastructure',
    description:
      'Integrated intelligent scanning and enterprise analytics systems.',
  },
  {
    year: '2026',
    title: 'AI-Powered OMR Ecosystem',
    description:
      'Delivering scalable AI-powered OMR processing infrastructure.',
  },
]

const industries = [
  'Universities',
  'Educational Institutions',
  'Government Organizations',
  'Recruitment Agencies',
  'Research Organizations',
  'Corporate Enterprises',
]

const faqs = [
  {
    question: 'What does Mark Reader specialize in?',
    answer:
      'Mark Reader specializes in enterprise OMR software, OMR sheet design, OMR scanning and intelligent evaluation systems.',
  },
  {
    question: 'Who uses Mark Reader solutions?',
    answer:
      'Universities, educational institutions, government organizations and enterprises use Mark Reader OMR infrastructure.',
  },
  {
    question: 'Why choose Mark Reader?',
    answer:
      'Mark Reader combines enterprise-grade infrastructure, advanced OMR software and scalable workflows for highly accurate evaluation systems.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ORGANIZATION SCHEMA */}
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

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
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
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                About Mark Reader
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Trusted Enterprise
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Solutions
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Mark Reader is a leading enterprise OMR solution provider
                delivering OMR software, OMR scanning, OMR evaluation and
                intelligent assessment infrastructure for institutions,
                universities and government organizations.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Our mission is to modernize assessment and data processing
                workflows through scalable OMR infrastructure, automation and
                enterprise-grade technology.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Contact Team
                </Link>
              </div>

              {/* TRUST */}
              <div className="mt-12 flex flex-wrap gap-4">
                {[
                  'Enterprise Infrastructure',
                  'AI-Powered Evaluation',
                  'High Accuracy Processing',
                  'Government Ready Systems',
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
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Infrastructure"
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
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Why Choose Mark Reader?
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Enterprise-grade OMR infrastructure combining advanced
                      technology, operational scalability and intelligent
                      evaluation systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Built For Enterprise Assessment Ecosystems
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                Mark Reader was founded with a vision to modernize OMR
                evaluation and enterprise assessment systems through advanced
                automation, intelligent workflows and scalable infrastructure.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Today, we deliver enterprise OMR software, OMR sheet reader
                systems and intelligent processing solutions trusted by
                educational institutions, enterprises and government
                organizations.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Core Values
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Enterprise-First Technology Approach
              </h2>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {values.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-[#0b1120] p-10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Company Journey
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Evolution Of Mark Reader
              </h2>
            </header>

            <div className="mt-16 space-y-8">
              {timeline.map((item, index) => (
                <article
                  key={index}
                  className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 lg:flex-row lg:items-start"
                >
                  <div className="text-4xl font-bold text-blue-400">
                    {item.year}
                  </div>

                  <div className="lg:ml-10">
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise Expertise
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Trusted OMR Infrastructure
              </h2>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-[#0b1120] p-10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold">
                      {item.title}
                    </h3>

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
                  Enterprise Assessment Ecosystems
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  Mark Reader supports educational institutions, enterprises
                  and organizations with scalable OMR infrastructure and
                  intelligent evaluation systems.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-[36px] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Solutions"
                  width={1800}
                  height={1800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/5 py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <header className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                FAQs
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </header>

            <div className="mt-16 space-y-6">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
                >
                  <h3 className="text-2xl font-semibold">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600/10 to-slate-900 p-14 text-center">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Ready To Modernize Your OMR Infrastructure?
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Explore enterprise-grade OMR software, intelligent evaluation
                systems and scalable processing infrastructure designed for
                modern organizations.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
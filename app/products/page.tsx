// app/products/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  Layers3,
  ScanLine,
  ShieldCheck,
  Workflow,
  MonitorSmartphone,
  FileCheck2,
  Building2,
} from 'lucide-react'

export const metadata = {
  title:
    'OMR Products India | OMR Software, OMR Scanner & Evaluation Systems',
  description:
    'Explore enterprise-grade OMR software, OMR scanners, OMR evaluation systems and intelligent assessment infrastructure for institutions and organizations.',
  keywords: [
    'OMR Products',
    'OMR Software',
    'OMR Scanner',
    'OMR Evaluation System',
    'OMR Sheet Reader',
    'Assessment Software',
    'OMR Infrastructure',
    'OMR Processing',
    'OMR India',
  ],
  alternates: {
    canonical: 'https://omr.in/products',
  },
  openGraph: {
    title: 'Enterprise OMR Products | Mark Reader',
    description:
      'Enterprise-grade OMR software and intelligent assessment infrastructure.',
    url: 'https://omr.in/products',
    siteName: 'Mark Reader',
    type: 'website',
  },
}

const products = [
  {
    title: 'AXIOME OMR Scanner India Axiome Alpha AXM960',
    slug: 'AXM960',
    description:
      'Mark Reader is authorised dealer of AXIOME OMR Scanners in India. Axiome is one of the leading company in OMR Scanner industry offering latest cutting edge technology solution for all your OMR scanning needs.',
    image:
      'https://omr.in/images/Mark-Reader-AXM960.jpg',
    icon: Cpu,
    features: [
      'AI Validation',
      'Enterprise Ready',
      'Bulk Processing',
    ],
  },
  {
    title: 'AXIOME OMR Scanner India Axiome Alpha AXM980',
    slug: 'AXM980',
    description:
      'Mark Reader is authorised dealer of AXIOME OMR Scanners in India. Axiome is one of the leading company in OMR Scanner industry offering latest cutting edge technology solution for all your OMR scanning needs.',
    image:
      'https://omr.in/images/Mark-Reader-AXM980.jpeg',
    icon: ScanLine,
    features: [
      'High-Speed Scanning',
      'Accurate Detection',
      'Enterprise Scale',
    ],
  },
  {
    title: 'OMR Evaluation System',
    slug: 'omr-evaluation-system',
    description:
      'Modern evaluation systems combining automation, analytics and secure enterprise workflows.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop',
    icon: FileCheck2,
    features: [
      'Secure Evaluation',
      'Advanced Analytics',
      'Workflow Automation',
    ],
  },
  {
    title: 'Assessment Analytics Platform',
    slug: 'assessment-analytics-platform',
    description:
      'Enterprise analytics infrastructure for performance reporting, assessment insights and institutional dashboards.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop',
    icon: BarChart3,
    features: [
      'Advanced Reporting',
      'Performance Insights',
      'Enterprise Dashboards',
    ],
  },
]

const workflow = [
  {
    title: 'OMR Sheet Design',
    description:
      'Custom-designed OMR sheets optimized for institutional workflows.',
    icon: Layers3,
  },
  {
    title: 'Scanning & Capture',
    description:
      'High-speed OMR scanners process marked responses accurately.',
    icon: ScanLine,
  },
  {
    title: 'Validation & Evaluation',
    description:
      'AI-powered validation ensures secure and reliable processing.',
    icon: ShieldCheck,
  },
  {
    title: 'Analytics & Reports',
    description:
      'Generate enterprise-grade assessment insights and reporting.',
    icon: Database,
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

export default function ProductsPage() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: products.map((product, index) => ({
              '@type': 'Product',
              position: index + 1,
              name: product.title,
              description: product.description,
              url: `https://omr.in/products/${product.slug}`,
            })),
          }),
        }}
      />

      <main className="relative overflow-hidden bg-[#020617] text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />

        {/* HERO */}
        <section className="relative border-b border-white/5">
          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Enterprise OMR Products
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Intelligent
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Products
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Explore enterprise-grade OMR software, OMR scanners, OMR
                evaluation systems and intelligent assessment infrastructure
                designed for modern institutions and organizations.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Mark Reader products combine automation, enterprise security
                and scalable workflows for high-performance OMR processing and
                evaluation ecosystems.
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
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  Contact Experts
                </Link>
              </div>

              {/* TRUST */}
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
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                  alt="Enterprise OMR Products"
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
                    <MonitorSmartphone className="h-8 w-8 text-blue-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Enterprise Product Ecosystem
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Scalable OMR products designed for intelligent
                      assessment, automation and enterprise evaluation systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* HEADER */}
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Product Portfolio
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Enterprise OMR Products
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Modern enterprise products optimized for OMR scanning,
                evaluation, analytics and intelligent processing workflows.
              </p>
            </header>

            {/* GRID */}
            <div className="mt-20 grid gap-8 lg:grid-cols-2">
              {products.map((product, index) => {
                const Icon = product.icon

                return (
                  <article
                    key={product.slug}
                    className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.05]"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[320px] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />

                      <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 backdrop-blur-xl">
                        <Icon className="h-7 w-7 text-blue-400" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-400">
                          Product 0{index + 1}
                        </span>

                        <span className="text-5xl font-bold text-white/[0.04]">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-4 text-3xl font-bold">
                        {product.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-400">
                        {product.description}
                      </p>

                      {/* FEATURES */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
                      >
                        Explore Product

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
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
                Product Workflow
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Intelligent OMR Ecosystem
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Enterprise workflow optimized for assessment, evaluation and
                intelligent OMR processing.
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
                  Trusted Enterprise Infrastructure
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  Mark Reader products support educational institutions,
                  government organizations, recruitment agencies and enterprise
                  assessment ecosystems.
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
                Ready To Upgrade Your OMR Infrastructure?
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Explore enterprise-grade OMR software, OMR scanners and
                intelligent evaluation systems designed for modern assessment
                workflows.
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
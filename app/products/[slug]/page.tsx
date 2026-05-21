// app/products/[slug]/page.tsx

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Database,
  FileText,
  Layers3,
  ScanLine,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const products = [
  {
    slug: 'AXM960',
    title: 'AXIOME OMR Scanner India Axiome Alpha AXM960',
    shortDescription:
      'Mark Reader is authorised dealer of AXIOME OMR Scanners in India. Axiome is one of the leading company in OMR Scanner industry offering latest cutting edge technology solution for all your OMR scanning needs.',
    description:
      'Mark Reader OMR Software provides enterprise-grade OMR evaluation, intelligent validation and scalable assessment processing infrastructure for universities, institutions and organizations.',
    image:
      'https://omr.in/images/Mark-Reader-AXM960.jpg',
    icon: Cpu,
    features: [
      'AI-Powered Validation',
      'Enterprise Security',
      'Bulk OMR Processing',
      'Advanced Reporting',
      'Assessment Analytics',
      'Workflow Automation',
    ],
    benefits: [
      'Reduce manual evaluation time',
      'Increase processing accuracy',
      'Scalable enterprise workflows',
      'Secure evaluation infrastructure',
    ],
  },
  {
    slug: 'omr-scanner',
    title: 'OMR Scanner',
    shortDescription:
      'High-speed OMR scanner systems for enterprise processing.',
    description:
      'Mark Reader OMR Scanner infrastructure delivers high-speed scanning, accurate response capture and scalable enterprise-grade processing workflows.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1800&auto=format&fit=crop',
    icon: ScanLine,
    features: [
      'High-Speed Capture',
      'Accurate Detection',
      'Enterprise Ready',
      'Scalable Infrastructure',
      'Reliable Processing',
      'Fast Evaluation',
    ],
    benefits: [
      'Faster OMR sheet processing',
      'Reliable response detection',
      'Supports bulk-scale operations',
      'Optimized enterprise performance',
    ],
  },
  {
    slug: 'AXM980',
    title: 'AXIOME OMR Scanner India Axiome Alpha AXM980',
    shortDescription:
      'Mark Reader is authorised dealer of AXIOME OMR Scanners in India. Axiome is one of the leading company in OMR Scanner industry offering latest cutting edge technology solution for all your OMR scanning needs.',
    description:
      'Modern OMR evaluation systems combining automation, analytics and secure enterprise workflows for large-scale assessment infrastructure.',
    image:
      'https://omr.in/images/Mark-Reader-AXM980.jpeg',
    icon: ClipboardCheck,
    features: [
      'Secure Evaluation',
      'Workflow Automation',
      'Assessment Analytics',
      'Reliable Processing',
      'AI Validation',
      'Enterprise Reporting',
    ],
    benefits: [
      'Modernize evaluation workflows',
      'Improve operational efficiency',
      'Enable intelligent analytics',
      'Deliver secure assessments',
    ],
  },
]

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params
  const product =  products.find((item) => item.slug === slug)

  if (!product) {
    return {
      title: 'Product Not Found | Mark Reader',
    }
  }

  return {
    title: `${product.title} | Enterprise OMR Products India`,
    description: product.description,
    keywords: [
      product.title,
      'OMR Software',
      'OMR Scanner',
      'OMR Evaluation',
      'Enterprise OMR',
      'Assessment Infrastructure',
      'OMR Processing',
    ],
    alternates: {
      canonical: `https://omr.in/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Mark Reader`,
      description: product.description,
      url: `https://omr.in/products/${product.slug}`,
      siteName: 'Mark Reader',
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

const workflow = [
  {
    title: 'OMR Sheet Design',
    description:
      'Custom-designed OMR sheets aligned with enterprise workflows.',
    icon: Layers3,
  },
  {
    title: 'Scanning & Capture',
    description:
      'High-speed scanning infrastructure captures responses accurately.',
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
      'Generate enterprise-grade reports and assessment insights.',
    icon: BarChart3,
  },
]

export default async function ProductSlugPage({
  params,
}: Props) {
  const { slug } = await params
  
  const product = products.find(
    (item) => item.slug === slug
  )

  if (!product) {
    notFound()
  }


  const Icon = product.icon

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            description: product.description,
            brand: {
              '@type': 'Brand',
              name: 'Mark Reader',
            },
            url: `https://omr.in/products/${product.slug}`,
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
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <span>/</span>

                <Link
                  href="/products"
                  className="transition hover:text-white"
                >
                  Products
                </Link>

                <span>/</span>

                <span className="text-slate-300">
                  {product.title}
                </span>
              </div>

              {/* Badge */}
              <div className="mt-8 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Enterprise OMR Product
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                {product.title}
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                {product.description}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Mark Reader delivers enterprise-grade OMR infrastructure
                optimized for operational scalability, intelligent processing
                and secure assessment workflows.
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
                  Talk To Experts
                </Link>
              </div>

              {/* FEATURES */}
              <div className="mt-12 flex flex-wrap gap-4">
                {product.features.slice(0, 4).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-400" />

                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
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
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Enterprise Infrastructure
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Intelligent OMR infrastructure optimized for enterprise
                      processing, scalability and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Product Features
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                  Advanced OMR Infrastructure
                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-300">
                  {product.title} is built for enterprise-grade assessment,
                  intelligent processing and scalable evaluation workflows.
                </p>

                <div className="mt-10 space-y-5">
                  {product.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                        0{index + 1}
                      </div>

                      <span className="text-lg text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-[36px] border border-white/10">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1800}
                  height={1800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Why Choose {product.title}
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Enterprise Performance Benefits
              </h2>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {product.benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="rounded-[32px] border border-white/10 bg-[#0b1120] p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-400">
                    0{index + 1}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {benefit}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    Enterprise-grade workflows optimized for reliability,
                    scalability and operational efficiency.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Product Workflow
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Intelligent OMR Ecosystem
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Enterprise workflow optimized for intelligent assessment,
                secure evaluation and scalable OMR processing.
              </p>
            </header>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">
              {workflow.map((item, index) => {
                const WorkflowIcon = item.icon

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <WorkflowIcon className="h-7 w-7 text-blue-400" />
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

        {/* ENTERPRISE SECTION */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise Ready
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                Built For Modern Assessment Ecosystems
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Mark Reader products are trusted by universities,
                institutions, recruitment agencies and enterprise
                organizations for scalable assessment workflows.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Building2,
                    title: 'Enterprise Infrastructure',
                  },
                  {
                    icon: Database,
                    title: 'Advanced Analytics',
                  },
                  {
                    icon: Workflow,
                    title: 'Workflow Automation',
                  },
                ].map((item, index) => {
                  const EnterpriseIcon = item.icon

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1120] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                        <EnterpriseIcon className="h-6 w-6 text-blue-400" />
                      </div>

                      <h3 className="text-lg font-semibold">
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
        </section>

        {/* CTA */}
        <section className="pb-28 pt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600/10 to-slate-900 p-14 text-center">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Ready To Upgrade Your OMR Infrastructure?
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Explore enterprise-grade OMR software, intelligent evaluation
                systems and scalable processing infrastructure designed for
                modern organizations.
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
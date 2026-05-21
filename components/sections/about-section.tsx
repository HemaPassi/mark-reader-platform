// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
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

} from "lucide-react";

export const metadata = {
  title: "About Mark Reader | Enterprise OMR Solutions India",
  description:
    "Mark Reader provides enterprise-grade OMR sheet design, OMR software, OMR scanners and large-scale OMR processing infrastructure for institutions, universities and government organizations.",
  keywords: [
    "OMR Sheet",
    "OMR Software",
    "OMR Scanner",
    "OMR Sheet Reader",
    "OMR Evaluation",
    "OMR Processing",
    "OMR Data Processing",
    "OMR Assessment Solutions",
    "Mark Reader",
    "omr.in",
    "MarkReader",
    "Mark Reader"
  ],
  alternates: {
    canonical: "https://omr.in/about",
  },
  openGraph: {
    title: "About Mark Reader | Enterprise OMR Solutions",
    description:
      "Enterprise-grade OMR infrastructure, software and assessment solutions.",
    url: "https://omr.in/about",
    siteName: "Mark Reader",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Enterprise OMR Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const highlights = [
  {
    title: "Expertise & Experience",
    description:
      "Decades of operational expertise delivering enterprise-grade OMR sheet reader and OMR processing infrastructure.",
    icon: Award,
  },
  {
    title: "Advanced Technology",
    description:
      "AI-powered OMR software, intelligent scanners and automated evaluation systems built for enterprise scale.",
    icon: Cpu,
  },
  {
    title: "Customized Solutions",
    description:
      "Tailored OMR workflows, OMR sheet designs and evaluation systems aligned with organizational requirements.",
    icon: Workflow,
  },
  {
    title: "Commitment to Quality",
    description:
      "Reliable validation and quality assurance ensuring secure, accurate and scalable OMR processing.",
    icon: ShieldCheck,
  },
];

const services = [
  "Custom OMR Sheet Design",
  "OMR Evaluation Software",
  "High-Speed OMR Scanners",
  "Bulk OMR Processing",
  "OMR Data Analytics",
  "Support & Training",
];

const workflow = [
  {
    title: "OMR Sheet Design",
    description:
      "Personalized OMR sheets optimized for assessments, surveys and enterprise workflows.",
    icon: Layers3,
  },
  {
    title: "Scanning & Reading",
    description:
      "High-speed OMR scanners capture marked responses accurately and efficiently.",
    icon: ScanLine,
  },
  {
    title: "Validation & Evaluation",
    description:
      "AI-powered validation ensures reliable OMR evaluation and secure processing.",
    icon: ClipboardCheck,
  },
  {
    title: "Analytics & Reports",
    description:
      "Generate enterprise-grade analytics, reports and assessment insights.",
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: "What is an OMR Sheet?",
    answer:
      "An OMR sheet is a specially designed form used to capture marked responses from examinations, surveys, attendance systems and assessments.",
  },
  {
    question: "What is OMR software used for?",
    answer:
      "OMR software is used for scanning, reading, evaluating and processing OMR sheets accurately and efficiently.",
  },
  {
    question: "Why use OMR technology?",
    answer:
      "OMR technology improves accuracy, speeds up evaluation processes and enables large-scale data processing with minimal human intervention.",
  },
  {
    question: "Who uses OMR solutions?",
    answer:
      "Schools, universities, enterprises, research organizations and government institutions widely use OMR solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mark Reader",
            url: "https://omr.in",
            logo: "https://omr.in/logo.png",
            description:
              "Enterprise OMR software and OMR processing solutions provider.",
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <main className="relative overflow-hidden bg-[#020617] text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%)]" />

        {/* HERO */}
        <section className="relative border-b border-white/5">
          <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            {/* LEFT */}
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                About Mark Reader
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Enterprise
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Solutions
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Mark Reader is a trusted enterprise OMR solution provider
                offering advanced OMR sheet design, OMR software, OMR scanners,
                OMR evaluation systems and scalable assessment infrastructure
                for institutions, universities and government organizations.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Our technology-driven approach combines automation, analytics
                and operational scalability to streamline large-scale OMR
                processing and evaluation workflows with maximum accuracy and
                efficiency.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/workflow"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Explore Workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold transition hover:bg-white/[0.05]"
                >
                  Contact Enterprise Team
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {[
                  {
                    value: "99.9%",
                    label: "Accuracy",
                  },
                  {
                    value: "24+",
                    label: "Years",
                  },
                  {
                    value: "1M+",
                    label: "Sheets",
                  },
                  {
                    value: "Enterprise",
                    label: "Scale",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                  >
                    <h2 className="text-2xl font-bold">{item.value}</h2>

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
                    <Building2 className="h-8 w-8 text-blue-400" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Why Choose Mark Reader?
                    </h2>

                    <p className="mt-3 leading-7 text-slate-300">
                      Mark Reader stands apart in the OMR industry through
                      advanced technology, enterprise-grade infrastructure and
                      customized OMR processing solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Why Choose Mark Reader
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Enterprise OMR Infrastructure
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Reliable OMR software, OMR sheet reader systems and scalable
                OMR processing solutions designed for modern enterprise
                ecosystems.
              </p>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 transition hover:bg-white/[0.05]"
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
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-white/5 bg-white/[0.02] py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Comprehensive OMR Services
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                Complete OMR Ecosystem
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Mark Reader provides complete OMR infrastructure including OMR
                sheet design, OMR software, OMR scanning, evaluation, analytics
                and enterprise assessment workflows.
              </p>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-slate-900 p-10">
              <h3 className="text-3xl font-bold">
                Enterprise Services
              </h3>

              <div className="mt-10 grid gap-5">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                      0{index + 1}
                    </div>

                    <p className="font-medium text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                OMR Workflow
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                End-to-End OMR Processing
              </h2>
            </header>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={index}
                    className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
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
                Trusted Enterprise OMR Solution Provider
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
                Mark Reader delivers scalable OMR infrastructure including OMR
                sheet reader systems, OMR evaluation software and intelligent
                enterprise processing solutions.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
                {[
                  "AI Validation",
                  "Enterprise Security",
                  "Bulk OMR Processing",
                  "Advanced Analytics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Get Enterprise Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold transition hover:bg-white/[0.05]"
                >
                  Talk to Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
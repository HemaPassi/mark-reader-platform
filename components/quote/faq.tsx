// components/quote/faq.tsx

import {
  CheckCircle2,
  HelpCircle,
} from 'lucide-react'

const faqs = [
  {
    question:
      'What OMR services does Mark Reader provide?',
    answer:
      'Mark Reader provides enterprise-grade OMR software, OMR sheet design, OMR scanning, OMR evaluation systems, analytics and intelligent assessment infrastructure.',
  },
  {
    question:
      'Who can use Mark Reader OMR solutions?',
    answer:
      'Our OMR ecosystems are used by universities, educational institutions, recruitment agencies, enterprises, government organizations and research institutions.',
  },
  {
    question:
      'Can Mark Reader handle large-scale OMR processing?',
    answer:
      'Yes. Our enterprise infrastructure is designed for bulk-scale OMR evaluation and high-volume assessment workflows with advanced automation.',
  },
  {
    question:
      'Do you provide customized OMR workflows?',
    answer:
      'Yes. We design customized OMR sheets, enterprise evaluation workflows and intelligent assessment ecosystems based on organizational requirements.',
  },
  {
    question:
      'How quickly can I receive a quote?',
    answer:
      'Our enterprise specialists usually respond within business hours after reviewing your OMR workflow and infrastructure requirements.',
  },
  {
    question:
      'Do you provide analytics and reporting?',
    answer:
      'Yes. Mark Reader offers advanced analytics, enterprise dashboards and assessment reporting systems for intelligent decision-making.',
  },
]

const trustPoints = [
  'Enterprise Infrastructure',
  'AI-Powered Evaluation',
  'Secure OMR Processing',
  'Dedicated Enterprise Support',
]

export default function FAQ() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* HEADER */}
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Enterprise OMR
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Explore commonly asked questions about enterprise OMR
            software, intelligent assessment workflows and scalable
            evaluation infrastructure.
          </p>

          {/* TRUST POINTS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
        </header>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="group rounded-[32px] border border-white/10 bg-[#0b1120] p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03]"
            >
              <div className="flex items-start gap-5">
                {/* ICON */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
                  <HelpCircle className="h-7 w-7 text-blue-400" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  {/* NUMBER */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">
                      FAQ 0{index + 1}
                    </span>

                    <span className="text-5xl font-bold text-white/[0.04]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* QUESTION */}
                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {faq.question}
                  </h3>

                  {/* ANSWER */}
                  <p className="mt-5 leading-8 text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM PANEL */}
        <div className="mt-20 rounded-[40px] border border-white/10 bg-[#0b1120] p-10 text-center lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Need More Information?
          </p>

          <h3 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Talk To Our
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Enterprise Experts
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Our enterprise specialists can help you design scalable
            OMR workflows, evaluation systems and intelligent
            assessment infrastructure tailored to your organization.
          </p>

          {/* QUICK BENEFITS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              'Dedicated Consultation',
              'Enterprise Workflow Planning',
              'Fast Response Time',
              'Secure Infrastructure',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
// components/quote/cta.tsx

import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from 'lucide-react'

const trustPoints = [
  'Enterprise OMR Infrastructure',
  'AI-Powered Evaluation',
  'Secure Assessment Workflows',
  'Dedicated Enterprise Support',
]

export default function CTA() {
  return (
    <section className="relative overflow-hidden pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/10 to-slate-900">
          <div className="grid gap-16 p-10 lg:grid-cols-2 lg:p-16">
            {/* LEFT */}
            <div>
              {/* LABEL */}
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise OMR Solutions
              </p>

              {/* HEADING */}
              <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-6xl">
                Ready To Modernize Your
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  OMR Infrastructure?
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Transform your assessment ecosystem with enterprise-grade
                OMR software, intelligent evaluation systems and scalable
                OMR processing workflows built for modern organizations.
              </p>

              {/* TRUST POINTS */}
              <div className="mt-10 flex flex-wrap gap-4">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-400" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500"
                >
                  Talk To Experts

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.05]"
                >
                  WhatsApp Inquiry

                  <MessageCircle className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-[36px] border border-white/10 bg-[#0b1120]/80 p-10 backdrop-blur-xl">
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                      Enterprise Consultation
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      Dedicated Support Team
                    </h3>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Phone className="h-8 w-8 text-blue-400" />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-8 leading-8 text-slate-300">
                  Our enterprise specialists help organizations build
                  scalable OMR workflows, intelligent assessment
                  systems and secure evaluation infrastructure tailored
                  to operational requirements.
                </p>

                {/* SUPPORT BOXES */}
                <div className="mt-10 space-y-5">
                  {[
                    {
                      title: 'OMR Workflow Planning',
                      description:
                        'Enterprise-ready evaluation ecosystems.',
                    },
                    {
                      title: 'Assessment Infrastructure',
                      description:
                        'Secure and scalable processing systems.',
                    },
                    {
                      title: 'Technical Consultation',
                      description:
                        'Dedicated expert guidance and support.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {item.description}
                          </p>
                        </div>

                        <div className="text-4xl font-bold text-white/[0.04]">
                          0{index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-blue-300">
                        Enterprise Response Time
                      </p>

                      <h5 className="mt-2 text-xl font-semibold text-white">
                        Within Business Hours
                      </h5>
                    </div>

                    <Link
                      href="mailto:info@omr.in"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                      Email Support

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE */}
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-[#0b1120]/90 px-5 py-4 backdrop-blur-xl xl:block">
                <p className="text-sm text-slate-500">
                  Trusted Enterprise Infrastructure
                </p>

                <h4 className="mt-2 text-lg font-semibold text-white">
                  24+ Years Experience
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-600/10 to-slate-900 p-14 text-center">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Ready To Modernize Your OMR Workflow?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Transform your assessment infrastructure with enterprise-grade
            OMR software, intelligent evaluation systems and scalable
            OMR processing workflows.
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
              href="/services"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
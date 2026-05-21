import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Database,
} from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise OMR Solutions
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Contact
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Mark Reader
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Connect with Mark Reader for enterprise-grade OMR software,
            OMR scanning, OMR evaluation and intelligent assessment
            infrastructure.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Our experts help institutions, enterprises and organizations
            modernize large-scale evaluation workflows with scalable OMR
            ecosystems.
          </p>

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

          <div className="mt-12 flex flex-wrap gap-4">
            {[
              'AI-Powered Evaluation',
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
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop"
              alt="Contact Mark Reader"
              width={1800}
              height={1800}
              priority
              className="h-[720px] w-full object-cover"
            />
          </div>

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
                  Scalable enterprise solutions optimized for modern
                  assessment ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
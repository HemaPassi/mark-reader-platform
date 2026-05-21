'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ScanLine,
  ShieldCheck,
} from 'lucide-react'

const quickLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Workflow',
    href: '/workflow',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const services = [
  'OMR Software',
  'OMR Scanning',
  'OMR Evaluation',
  'OMR Sheet Design',
  'OMR Processing',
  'Assessment Analytics',
]

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
    label: 'Sheets Processed',
  },
  {
    value: 'Enterprise',
    label: 'Scale Infrastructure',
  },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-white"
      role="contentinfo"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_30%)]" />

      <div className="relative z-10">
        {/* MAIN FOOTER */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-12">
              {/* BRAND */}
              <div className="lg:col-span-5">
                {/* LOGO */}
                <Link
                  href="/"
                  aria-label="Mark Reader Home"
                  className="flex items-center gap-4"
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src="/logo.png"
                      alt="Mark Reader Logo"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Mark Reader
                    </h2>

                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                      Enterprise OMR Platform
                    </p>
                  </div>
                </Link>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                  Mark Reader delivers enterprise-grade OMR software, OMR
                  scanning, OMR evaluation and intelligent assessment
                  infrastructure for universities, institutions and government
                  organizations.
                </p>

                {/* FEATURES */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: ScanLine,
                      label: 'High-Speed OMR Scanning',
                    },
                    {
                      icon: Database,
                      label: 'Enterprise OMR Processing',
                    },
                    {
                      icon: ShieldCheck,
                      label: 'Secure Evaluation Systems',
                    },
                    {
                      icon: BarChart3,
                      label: 'Advanced Assessment Analytics',
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                          <Icon className="h-5 w-5 text-orange-400" />
                        </div>

                        <span className="text-sm text-slate-300">
                          {item.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* QUICK LINKS */}
              <nav
                aria-label="Footer Navigation"
                className="lg:col-span-2"
              >
                <h3 className="text-lg font-semibold text-white">
                  Quick Links
                </h3>

                <div className="mt-8 flex flex-col gap-5">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-slate-400 transition-colors hover:text-orange-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* SERVICES */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-white">
                  Solutions
                </h3>

                <div className="mt-8 flex flex-col gap-5">
                  {services.map((item) => (
                    <p
                      key={item}
                      className="text-slate-400"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold text-white">
                  Contact Information
                </h3>

                <div className="mt-8 space-y-6">
                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Mail className="h-5 w-5 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        Email
                      </p>

                      <a
                        href="mailto:info@omr.in"
                        className="mt-2 block text-slate-300 transition hover:text-orange-400"
                      >
                        info@omr.in
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Phone className="h-5 w-5 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        Support
                      </p>

                      <p className="mt-2 text-slate-300">
                        Enterprise Consultation Available
                      </p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <MapPin className="h-5 w-5 text-orange-400" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        Solutions
                      </p>

                      <p className="mt-2 leading-7 text-slate-300">
                        OMR Software • OMR Evaluation • Enterprise Assessment
                        Infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Get Enterprise Quote

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* STATS */}
            <section
              aria-label="Company Statistics"
              className="mt-20 grid gap-5 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h4 className="text-3xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>

            {/* BOTTOM */}
            <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>
                © 2026 Mark Reader. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-orange-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="transition hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/sitemap.xml"
                  className="transition hover:text-orange-400"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
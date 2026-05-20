import Link from 'next/link'
import  {stats } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Glow Effects */}
      <div className="orange-glow bottom-[-220px] left-[-120px]" />

      <div className="absolute inset-0 premium-grid opacity-20" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="glass-card rounded-[2.5rem] p-10 lg:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <p className="uppercase tracking-[0.35em] text-sm text-orange-400 font-semibold">
                  Ready To Modernize?
                </p>

                <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Transform Your OMR &
                  <br />
                  Document Processing Workflow
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Enterprise-grade OMR scanning, document intelligence, and
                  AI-powered automation solutions designed for modern
                  institutions and organizations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-quote"
                  className="primary-btn px-8 py-4 rounded-full text-white font-semibold">
                  Get Quote
                </Link>

                <Link
                  href={`/contact`}
                  className="glass-card px-8 py-4 rounded-full text-white font-semibold hover:border-orange-500/30 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-4 gap-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Mark Reader
                  </h3>

                  <p className="text-sm tracking-[0.3em] uppercase text-slate-500 mt-1">
                    OMR Intelligence Platform
                  </p>
                </div>
              </div>

              <p className="mt-8 text-slate-400 leading-8 max-w-xl text-lg">
                Advanced OMR and document intelligence solutions helping
                enterprises, educational institutions, and government
                organizations modernize assessment and processing workflows.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl p-5"
                  >
                    <h4 className="text-2xl font-bold text-white">
                      {item.value}
                    </h4>

                    <p className="text-sm text-slate-400 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold text-lg">
                Quick Links
              </h4>

              <div className="mt-8 flex flex-col gap-5 text-slate-400">
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>

                <Link
                  href="/products"
                  className="hover:text-orange-400 transition-colors"
                >
                  Products
                </Link>

                <Link
                  href="/workflow"
                  className="hover:text-orange-400 transition-colors"
                >
                  Workflow
                </Link>

                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg">
                Contact
              </h4>

              <div className="mt-8 space-y-6 text-slate-400">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Email
                  </p>

                  <p className="text-white">
                    info@omr.in
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Support
                  </p>

                  <p className="text-white">
                    24/7 Enterprise Support
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Solutions
                  </p>

                  <p className="text-white">
                    OMR • AI • Automation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
            <p>
              © 2026 Mark Reader. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy-policy"
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-orange-400 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
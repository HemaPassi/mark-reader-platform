import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from '@/lib/constants'

export default function BookNow() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b1120] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="container-enterprise relative">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center shadow-2xl backdrop-blur-2xl md:px-16">
          {/* Card Glow */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Enterprise Assessment Solutions
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Ready to Modernize Your
              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Assessment Infrastructure?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Build scalable OMR processing, analytics and enterprise workflow
              systems with intelligent automation infrastructure designed for
              institutions, enterprises and government organizations.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Request Demo

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
              >
                Contact Team
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 grid gap-5 border-t border-white/5 pt-10 md:grid-cols-3">
             {stats.map(stat => (
                          <div
                            key={stat.label}
                            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                          >
                            <h3 className="text-5xl font-bold text-white">
                              {stat.value}
                            </h3>
            
                            <p className="mt-4 text-lg text-slate-400">
                              {stat.label}
                            </p>
                          </div>
                        ))}

              {/* <div>
                <h3 className="text-3xl font-bold text-white">
                  10M+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Sheets Processed
                </p>
              </div> */}

              {/* <div>
                <h3 className="text-3xl font-bold text-white">
                  500+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Enterprise Clients
                </p>
              </div> */}

              {/* <div>
                <h3 className="text-3xl font-bold text-white">
                  99.9%
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Processing Accuracy
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
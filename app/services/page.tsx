import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { services } from '@/lib/constants'

export default function ServicesPage() {
  return (
    <main className="bg-[#020617] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />

        <div className="container-enterprise relative py-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Enterprise Services
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Intelligent OMR &
              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Assessment Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Enterprise-grade OMR processing, document intelligence,
              workflow automation and assessment infrastructure designed
              for institutions, enterprises and government organizations.
            </p>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              {[
                "High Accuracy Processing",
                "Enterprise Workflow Automation",
                "Scalable Infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative overflow-hidden py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_28%)]" />

        <div className="container-enterprise relative">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Service Infrastructure
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Enterprise Solutions Built for
              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Scale, Accuracy & Automation
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Comprehensive OMR and document intelligence services designed
              to streamline enterprise assessment and workflow operations.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]"
                >
                  {/* Glow */}
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>

                      {/* Number */}
                      <span className="text-5xl font-bold text-white/[0.04]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-8 text-slate-400">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:text-white"
                    >
                      View Service

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTERPRISE CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#0b1120] py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%)]" />

        <div className="container-enterprise relative">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] px-8 py-16 text-center shadow-2xl backdrop-blur-2xl md:px-16">
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Enterprise Assessment Infrastructure
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                Ready to Modernize Your
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Assessment Workflows?
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Build scalable enterprise OMR processing, analytics and
                intelligent document workflow systems with modern automation
                infrastructure.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                >
                  Request Demo

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
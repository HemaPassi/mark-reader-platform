"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { stats, queueItems } from '@/lib/constants'



export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2200&auto=format&fit=crop"
          alt="OMR Enterprise"
          className="h-full w-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-[#020617]/95" />

        {/* Subtle Enterprise Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-enterprise relative grid min-h-screen items-center gap-20 py-18 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur">
            Trusted Since 2002
          </div>

          {/* Small Heading */}
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            OMR India Enterprise Platform
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
          Intelligent OMR 
          <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          & Assessment Infrastructure
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Scalable OMR processing, assessment automation, analytics and
            document digitization solutions for enterprises, universities,
            institutions and government organizations.
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            {[
              "AI Validation Engine",
              "Real-Time Analytics",
              "Enterprise Security",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Book a Demo

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
            >
              About Company
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="relative">
          {/* Dashboard Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-blue-500/10 blur-3xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Processing Overview
                </p>

                <h3 className="mt-1 text-2xl font-semibold">
                  Enterprise Dashboard
                </h3>
              </div>

              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                Live
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Documents Processed
                </p>

                <h4 className="mt-3 text-4xl font-bold">
                  24,891
                </h4>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-blue-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Scan Accuracy
                </p>

                <h4 className="mt-3 text-4xl font-bold">
                  99.8%
                </h4>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[96%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>

            {/* Queue */}
            <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">
              <div className="mb-5 flex items-center justify-between">
                <h4 className="font-medium text-white">
                  Recent Processing Queue
                </h4>

                <span className="text-sm text-slate-400">
                  Updated now
                </span>
              </div>

              <div className="space-y-4">
                {queueItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:bg-white/[0.04]"
                  >
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-emerald-300">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      Completed
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-5">
              <p className="text-sm leading-7 text-slate-300">
                Trusted enterprise-grade infrastructure for large-scale
                assessments, evaluations and document workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
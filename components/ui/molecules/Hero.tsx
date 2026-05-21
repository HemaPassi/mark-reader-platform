 "use client";

 import { ArrowRight } from "lucide-react";
 import Stats from '@/components/ui/molecules/Stats'
 import ContentBlock from '@/components/ui/molecules/ContentBlock'
 import Features from '@/components/ui/molecules/Features'
 // Normalize imported Stats to a React component type to satisfy JSX usage
 const StatsComp = Stats as unknown as React.ComponentType<any>;

  import Link from "next/link";
  import data from "@/data/hero.json";
  import content from "@/data/content.json";


  export default function Hero() {
  
    return (  <section className="relative overflow-hidden bg-[#020617] text-white">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={data.backgroundImage.src}
            alt={data.backgroundImage.alt}
            className="h-full w-full object-cover opacity-10"
          />

          <div className="absolute inset-0 bg-[#020617]/95" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />
        </div>

        {/* Glow */}
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-enterprise relative grid min-h-screen items-center gap-20 py-18 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <ContentBlock data={data} />
            {/* Features */}
            <Features content={content}/>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href={data.cta.primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                {data.cta.primary.label}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={data.cta.secondary.href}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
              >
                {data.cta.secondary.label}
              </Link>
            </div>

             {/* Stats */}
             <StatsComp content={content} />
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    {data.dashboard.header.subtitle}
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold">
                    {data.dashboard.header.title}
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                  {data.dashboard.header.status}
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-5">
                {data.dashboard.metrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="rounded-2xl border border-white/5 bg-black/20 p-5"
                  >
                    <p className="text-sm text-slate-400">
                      {metric.title}
                    </p>

                    <h4 className="mt-3 text-4xl font-bold">
                      {metric.value}
                    </h4>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Queue */}
              <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-medium text-white">
                    {data.dashboard.queue.title}
                  </h4>

                  <span className="text-sm text-slate-400">
                    {data.dashboard.queue.updatedText}
                  </span>
                </div>

                <div className="space-y-4">
                  {data.dashboard.queue.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:bg-white/[0.04]"
                    >
                      <span className="text-sm text-slate-300">
                        {item.name}
                      </span>

                      <div className="flex items-center gap-2 text-sm text-emerald-300">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-5">
                <p className="text-sm leading-7 text-slate-300">
                  {data.dashboard.footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }